/* OSWAM 主页配置。修改此文件后提交到 GitHub，即可更新视频与论文链接。
 * 路径相对于 docs/index.html；不要在路径前加 /，否则会丢失 /OSWAM/ 前缀。
 * 视频建议采用 MP4 (H.264)，也支持浏览器可播放的 WebM 或 HTTPS 直链。
 * src 留空：展示占位图，不请求不存在的文件。添加多个对象即可形成播放列表。
 */
window.OSWAM_CONFIG = {
  paperUrl: "", // 公开 PDF 路径（如 assets/paper.pdf）或真实 arXiv 链接
  // 留空使用 HTML 中已核对的公开作者与引用；可在此覆盖。
  authors: [], // 例如 [{name:"Guowen Zhang", marker:"*", url:"https://..."}]
  affiliation: "The Hong Kong Polytechnic University",
  bibtex: "", // arXiv 发布后，可替换成官方 BibTeX
  videos: {
    driving: [
      {
        title: "Autonomous driving",
        caption: "Current observations to future waypoints.",
        src: "", // 例如 assets/videos/driving-01.mp4
        poster: "", // 可选：assets/videos/driving-01.jpg
        type: "video/mp4",
        captions: "", // 可选：WebVTT 字幕文件路径
        captionsLang: "en",
        captionsLabel: "English"
      }
    ],
    embodied: [
      {
        title: "Embodied control",
        caption: "Visual observations to coordinated actions.",
        src: "", // 例如 assets/videos/embodied-01.mp4
        poster: "",
        type: "video/mp4",
        captions: "",
        captionsLang: "en",
        captionsLabel: "English"
      }
    ]
  }
};
