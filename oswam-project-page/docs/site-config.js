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
        "title": "Bread into bowl · 01",
        "caption": "Selected independent recordings · Episode 18 · Fast-WAM checkpoint 4000 / OSWAM checkpoint 4000. Recording duration is not model inference latency.",
        "src": "assets/videos/bread-01.mp4",
        "poster": "assets/videos/bread-01.jpg",
        "type": "video/mp4",
        "speed": 1,
        "baselineSeconds": 28.25,
        "oswamSeconds": 16.0
      },
      {
        "title": "Bread into bowl · 02",
        "caption": "Selected independent recordings · Episode 0 · Fast-WAM checkpoint 4000 / OSWAM checkpoint 4000. Recording duration is not model inference latency.",
        "src": "assets/videos/bread-02.mp4",
        "poster": "assets/videos/bread-02.jpg",
        "type": "video/mp4",
        "speed": 1,
        "baselineSeconds": 26.1,
        "oswamSeconds": 17.55
      },
      {
        "title": "Object into drawer · 01",
        "caption": "Selected independent recordings · Episode 19 · Fast-WAM checkpoint 10000 / OSWAM checkpoint 6000. Recording duration is not model inference latency.",
        "src": "assets/videos/drawer-01.mp4",
        "poster": "assets/videos/drawer-01.jpg",
        "type": "video/mp4",
        "speed": 1,
        "baselineSeconds": 20.85,
        "oswamSeconds": 13.3
      },
      {
        "title": "Object into drawer · 02",
        "caption": "Selected independent recordings · Episode 18 · Fast-WAM checkpoint 10000 / OSWAM checkpoint 6000. Recording duration is not model inference latency.",
        "src": "assets/videos/drawer-02.mp4",
        "poster": "assets/videos/drawer-02.jpg",
        "type": "video/mp4",
        "speed": 1,
        "baselineSeconds": 19.4,
        "oswamSeconds": 13.15
      }
    ]
  }
};
