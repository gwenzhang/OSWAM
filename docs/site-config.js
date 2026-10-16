/* 视频编码为原速 1x，完整保留 4:3 画面；播放器可统一切换 1x/2x。
 * 视频计时为原视频时间，不代表实测推理延迟。
 * 自驾 src 留空；源文件信息见 assets/videos/selection-manifest.json。
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
        "title": "Bread into bowl \u00b7 01",
        "caption": "Independent runs with similar initial object positions \u00b7 Fast-WAM episode 7 / OSWAM episode 18 \u00b7 Checkpoints 4000 / 4000. OSWAM placement checked in both camera views.",
        "src": "assets/videos/bread-01.mp4?v=matched-20261016",
        "poster": "assets/videos/bread-01.jpg?v=matched-20261016",
        "type": "video/mp4",
        "speed": 1,
        "baselineSeconds": 25,
        "oswamSeconds": 16
      },
      {
        "title": "Bread into bowl \u00b7 02",
        "caption": "Independent runs with similar initial object positions \u00b7 Fast-WAM episode 0 / OSWAM episode 0 \u00b7 Checkpoints 4000 / 4000. OSWAM placement checked in both camera views.",
        "src": "assets/videos/bread-02.mp4?v=matched-20261016",
        "poster": "assets/videos/bread-02.jpg?v=matched-20261016",
        "type": "video/mp4",
        "speed": 1,
        "baselineSeconds": 26.1,
        "oswamSeconds": 17.55
      },
      {
        "title": "Object into drawer \u00b7 Bottom drawer",
        "caption": "Bottom drawer on both sides \u00b7 Similar initial object positions \u00b7 Fast-WAM episode 4 / OSWAM episode 0 \u00b7 Checkpoints 10000 / 6000. Both placements visually checked in two camera views; independent runs.",
        "src": "assets/videos/drawer-01.mp4?v=drawer-layer-20261016",
        "poster": "assets/videos/drawer-01.jpg?v=drawer-layer-20261016",
        "type": "video/mp4",
        "speed": 1,
        "baselineSeconds": 18.55,
        "oswamSeconds": 16.8
      },
      {
        "title": "Object into drawer \u00b7 Middle drawer",
        "caption": "Middle drawer on both sides \u00b7 Similar initial object positions \u00b7 Fast-WAM episode 20 / OSWAM episode 18 \u00b7 Checkpoints 10000 / 6000. Both placements visually checked in two camera views; independent runs.",
        "src": "assets/videos/drawer-02.mp4?v=drawer-layer-20261016",
        "poster": "assets/videos/drawer-02.jpg?v=drawer-layer-20261016",
        "type": "video/mp4",
        "speed": 1,
        "baselineSeconds": 20.8,
        "oswamSeconds": 13.15
      }
    ]
  }
};
