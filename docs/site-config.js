/* 主页配置：路径相对于 docs/index.html，不要以 / 开头。
 * embodied 中的视频已经编码为 2 倍速；播放器保持 1x 时即为原视频的 2x。
 * driving.src 留空，继续显示占位。paperUrl 留空则隐藏论文按钮。
 * 新增演示可复制列表条目；完整源文件对应关系见 assets/videos/selection-manifest.json。
 */
window.OSWAM_CONFIG = {
  "paperUrl": "",
  "authors": [],
  "affiliation": "The Hong Kong Polytechnic University",
  "bibtex": "",
  "videos": {
    "driving": [
      {
        "title": "Autonomous driving",
        "caption": "Driving execution videos will be added here.",
        "src": "",
        "poster": "",
        "type": "video/mp4"
      }
    ],
    "embodied": [
      {
        "title": "Bread into bowl · 01",
        "caption": "Fast-WAM: checkpoint 4000, episode 0 · OSWAM: checkpoint 4000, episode 0. Separate recordings; not matched trials.",
        "src": "assets/videos/bread-01.mp4",
        "poster": "assets/videos/bread-01.jpg",
        "type": "video/mp4",
        "speed": 2
      },
      {
        "title": "Bread into bowl · 02",
        "caption": "Fast-WAM: checkpoint 4000, episode 3 · OSWAM: checkpoint 4000, episode 3. Separate recordings; not matched trials.",
        "src": "assets/videos/bread-02.mp4",
        "poster": "assets/videos/bread-02.jpg",
        "type": "video/mp4",
        "speed": 2
      },
      {
        "title": "Object into drawer · 01",
        "caption": "Fast-WAM: checkpoint 10000, episode 2 · OSWAM: checkpoint 6000, episode 2. Separate recordings; not matched trials.",
        "src": "assets/videos/drawer-01.mp4",
        "poster": "assets/videos/drawer-01.jpg",
        "type": "video/mp4",
        "speed": 2
      },
      {
        "title": "Object into drawer · 02",
        "caption": "Fast-WAM: checkpoint 10000, episode 14 · OSWAM: checkpoint 6000, episode 14. Separate recordings; not matched trials.",
        "src": "assets/videos/drawer-02.mp4",
        "poster": "assets/videos/drawer-02.jpg",
        "type": "video/mp4",
        "speed": 2
      }
    ]
  }
};
