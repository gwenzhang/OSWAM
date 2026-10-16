(() => {
  'use strict';
  const config = window.OSWAM_CONFIG || {};
  const safeUrl = (value) => {
    if (typeof value !== 'string' || !value.trim()) return '';
    try {
      const url = new URL(value, document.baseURI);
      return ['http:', 'https:', 'file:'].includes(url.protocol) ? url.href : '';
    } catch { return ''; }
  };
  const paperUrl = safeUrl(config.paperUrl);
  if (paperUrl) {
    const link = document.querySelector('#paper-link');
    link.href = paperUrl; link.target = '_blank'; link.rel = 'noopener'; link.hidden = false;
  }
  if (Array.isArray(config.authors) && config.authors.length) {
    const authorBox = document.querySelector('#authors'); authorBox.replaceChildren();
    config.authors.forEach((author, index) => {
      if (index) authorBox.append(document.createTextNode(' · '));
      const url = safeUrl(author.url);
      const name = document.createElement(url ? 'a' : 'span'); name.textContent = author.name || '';
      if (url) { name.href = url; name.target = '_blank'; name.rel = 'noopener'; }
      authorBox.append(name);
      if (author.marker) { const marker = document.createElement('sup'); marker.textContent = author.marker; authorBox.append(marker); }
    });
  }
  if (config.affiliation) document.querySelector('.affiliation').textContent = config.affiliation;
  if (config.bibtex) document.querySelector('#bibtex').textContent = config.bibtex;
  const tabs = Array.from(document.querySelectorAll('[data-result]'));
  function selectTab(tab) {
    tabs.forEach(item => {
      const active = item === tab;
      item.setAttribute('aria-selected', String(active)); item.tabIndex = active ? 0 : -1;
      document.getElementById(item.getAttribute('aria-controls')).hidden = !active;
    });
  }
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => selectTab(tab));
    tab.addEventListener('keydown', (event) => {
      let next;
      if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
      if (event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = tabs.length - 1;
      if (next === undefined) return;
      event.preventDefault(); selectTab(tabs[next]); tabs[next].focus();
    });
  });
  const dialog = document.querySelector('#figure-dialog');
  document.querySelectorAll('[data-zoom]').forEach(button => button.addEventListener('click', () => {
    const img = document.querySelector('#zoom-image'); img.src = button.dataset.zoom; img.alt = button.querySelector('img').alt;
    dialog.showModal(); document.body.classList.add('modal-open');
  }));
  document.querySelector('#close-figure').addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', () => document.body.classList.remove('modal-open'));
  dialog.addEventListener('click', event => { if (event.target === dialog) { const r = dialog.getBoundingClientRect(); if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) dialog.close(); } });
  document.querySelector('#copy-citation').addEventListener('click', async event => {
    const text = document.querySelector('#bibtex').textContent;
    const button = event.currentTarget;
    try {
      if (!navigator.clipboard) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(text);
      button.textContent = 'Copied ✓'; document.querySelector('#copy-status').textContent = 'BibTeX copied to clipboard.';
      setTimeout(() => { button.textContent = 'Copy BibTeX'; }, 2000);
    } catch {
      const range = document.createRange(); range.selectNodeContents(document.querySelector('#bibtex'));
      const selection = window.getSelection(); selection.removeAllRanges(); selection.addRange(range);
      button.textContent = 'Selected — press Ctrl/Cmd+C';
      document.querySelector('#copy-status').textContent = 'Citation selected. Press Control C or Command C to copy.';
    }
  });
  let anyVideos = false;
  let previewRate = 1;
  const rateButtons = [...document.querySelectorAll('[data-playback]')];
  function syncPlaybackUI(video) {
    previewRate = video ? video.playbackRate : previewRate;
    rateButtons.forEach(button => button.setAttribute('aria-pressed', String(Number(button.dataset.playback) === previewRate)));
    const speed = previewRate === 1 ? 'Original speed · 1×' : `Both sides accelerated · ${previewRate}×`;
    document.querySelector('#playback-label').textContent = speed + (video?.paused ? ' · Paused' : '');
  }
  rateButtons.forEach(button => button.addEventListener('click', () => {
    previewRate = Number(button.dataset.playback);
    const video = document.querySelector('#embodied-player video');
    if (video) {
      video.defaultPlaybackRate = previewRate;
      video.playbackRate = previewRate;
    }
    syncPlaybackUI(video);
  }));
  document.querySelector('#video-results-link')?.addEventListener('click', () => selectTab(document.querySelector('#tab-embodied')));
  for (const group of ['driving', 'embodied']) {
    const entries = (config.videos?.[group] || []).filter(item => safeUrl(item.src));
    if (!entries.length) continue;
    anyVideos = true;
    const card = document.getElementById(`${group}-demo`);
    const stage = document.getElementById(`${group}-player`);
    const playlist = document.getElementById(`${group}-playlist`);
    card.querySelector('.demo-state').textContent = group === 'embodied' ? `${entries.length} SELECTED COMPARISONS · TIMED` : 'EXECUTION VIDEO';
    function showVideo(index) {
      const item = entries[index];
      const previous = stage.querySelector('video'); if (previous) previous.pause();
      stage.replaceChildren();
      const video = document.createElement('video');
      video.controls = true; video.playsInline = true; video.preload = 'metadata';
      video.muted = true;
      if (group === 'embodied') {
        video.defaultPlaybackRate = previewRate;
        video.playbackRate = previewRate;
        video.addEventListener('loadedmetadata', () => {
          video.playbackRate = previewRate;
          syncPlaybackUI(video);
        });
        for (const event of ['ratechange', 'play', 'pause', 'ended']) {
          video.addEventListener(event, () => {
            if (stage.querySelector('video') === video) syncPlaybackUI(video);
          });
        }
      }
      video.setAttribute('aria-label', item.title || `${group} execution video`);
      if (safeUrl(item.poster)) video.poster = safeUrl(item.poster);
      const source = document.createElement('source'); source.src = safeUrl(item.src); source.type = item.type || 'video/mp4';
      const onError = () => {
        if (stage.querySelector('.video-error')) return;
        video.hidden = true;
        const error = document.createElement('p'); error.className = 'video-error';
        error.textContent = 'This video could not be loaded. Please try again later.'; stage.append(error);
      };
      source.addEventListener('error', onError); video.addEventListener('error', onError);
      video.append(source);
      if (safeUrl(item.captions)) {
        const track = document.createElement('track'); track.kind = 'captions'; track.src = safeUrl(item.captions); track.srclang = item.captionsLang || 'en'; track.label = item.captionsLabel || 'English'; video.append(track);
      }
      stage.append(video);
      card.querySelector('h3').textContent = item.title || (group === 'driving' ? 'Autonomous driving' : 'Embodied control');
      card.querySelector('.demo-caption').textContent = item.caption || '';
      playlist.querySelectorAll('button').forEach((button, i) => button.setAttribute('aria-pressed', String(i === index)));
      video.addEventListener('play', () => document.querySelectorAll('video').forEach(other => { if (other !== video) other.pause(); }));
    }
    if (entries.length > 1) entries.forEach((item, index) => {
      const button = document.createElement('button'); button.type = 'button';
      if (safeUrl(item.poster)) { const thumbnail = document.createElement('img'); thumbnail.src = safeUrl(item.poster); thumbnail.alt = ''; thumbnail.loading = 'lazy'; button.append(thumbnail); }
      const label = document.createElement('span'); label.textContent = item.title || `Video ${index + 1}`; button.append(label);
      button.setAttribute('aria-pressed', String(index === 0)); button.addEventListener('click', () => showVideo(index)); playlist.append(button);
    });
    showVideo(0);
  }
  if (anyVideos) {
    document.querySelector('#demos .section-head > p').textContent = 'Selected real-robot executions. Fast-WAM and OSWAM, side by side.';
    
  }
})();
