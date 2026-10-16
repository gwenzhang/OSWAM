# OSWAM 论文主页

本主页根据两份论文 LaTeX 源码整理，作者、单位、联系方式以公开的 VCLab 版本为准。纯 HTML/CSS/JavaScript，无需安装依赖或构建，适合部署到现有 `gwenzhang/OSWAM` 仓库的 GitHub Pages。

## 1. 发布到现有 GitHub 仓库

1. 解压 `oswam-project-page.zip`。
2. 将其中整个 `docs` 文件夹放入 `gwenzhang/OSWAM` 仓库根目录并提交到 `main`。不要用此说明文件覆盖你原来的项目 README。
3. 打开 https://github.com/gwenzhang/OSWAM/settings/pages 。
4. 设置 Source = **Deploy from a branch**，Branch = **main**，Folder = **/docs**，点击 Save。
5. 等待 Pages 部署成功。默认地址为 https://gwenzhang.github.io/OSWAM/ 。如果账号已设置个人自定义域名，以 Pages 设置页显示的地址为准。

网站文件夹里的 `.nojekyll` 是隐藏文件；使用 Git 提交时会包含它。此项目没有 Jekyll 特殊目录，即使网页上传时没有带上该文件，也可采用上述分支方式发布。

此交付尚未上传 GitHub，未改变远程仓库，也未公开部署。

## 2. 添加自驾与具身视频

将视频放到 `docs/assets/videos/`，例如：

```text
docs/assets/videos/driving-01.mp4
docs/assets/videos/driving-02.mp4
docs/assets/videos/embodied-01.mp4
```

打开 `docs/site-config.js`，设置 `videos` 中的对应列表：

```javascript
videos: {
  driving: [
    {
      title: "Driving · Example 01",
      caption: "Replace with the actual scene and evaluation setting.",
      src: "assets/videos/driving-01.mp4",
      poster: "", // 可选封面，例如 assets/videos/driving-01.jpg
      type: "video/mp4"
    },
    {
      title: "Driving · Example 02",
      caption: "Replace with the actual scene description.",
      src: "assets/videos/driving-02.mp4",
      poster: "",
      type: "video/mp4"
    }
  ],
  embodied: [
    {
      title: "Embodied · Example 01",
      caption: "Replace with the actual task and conditions.",
      src: "assets/videos/embodied-01.mp4",
      poster: "",
      type: "video/mp4"
    }
  ]
}
```

- `src` 留空时显示占位区域，不会发起无效的视频请求。
- 多个对象自动生成可切换的播放列表；只放一个则显示单视频。
- 支持本地 MP4/WebM 和可直接播放的 HTTPS 视频链接。YouTube/Bilibili 的观看页面不是视频直链，不能直接放入 `src`。
- MP4 建议 H.264 编码；WebM 将 `type` 设为 `video/webm`。请先压缩大视频，较大的文件可使用外部对象存储直链。
- 支持原生播放、暂停、进度控制、全屏及手机内联播放，不默认自动播放。
- 一个视频播放时会暂停另一个视频，切换条目也会暂停旧视频。
- 如果有字幕，配置 `captions: "assets/videos/example.en.vtt"`、`captionsLang: "en"`、`captionsLabel: "English"`。字幕采用 WebVTT。
- 无法加载时显示提示。已加入 4 个具身对比视频；新增视频时请继续验证编码、实际播放和字幕同步。
- 配置里的路径以 `docs/index.html` 为起点，写 `assets/videos/...`，不要以 `/` 开头，否则 GitHub 项目路径 `/OSWAM/` 会丢失。

## 3. 添加论文链接、调整作者和引用

`docs/site-config.js` 提供以下入口：

- `paperUrl`：目前留空，论文按钮隐藏。可以填真实 arXiv 链接，或放入 `docs/assets/paper.pdf` 后填写 `assets/paper.pdf`。
- `authors`：目前为空数组，使用主页中已核对的七位作者。需要个人主页链接时，可填写 `{name: "Guowen Zhang", marker: "*", url: "https://..."}` 等对象。
- `affiliation`：单位名称。
- `bibtex`：目前为空，使用完整作者名单、2026 年和仓库 URL 的 `@misc` 预印本引用。arXiv 发布后，替换成官方 BibTeX。

不要把模板作者、未确认的会议接收信息、虚构的 arXiv 编号写到页面。当前页面没有声称被 ICLR 接收。

## 4. 本地预览

最简单：用浏览器打开 `docs/index.html`。图文和主要功能无需网络即可使用；直接打开本地文件时，剪贴板按钮可能降级为选中文字，请按 Ctrl/Cmd+C 复制。

如果安装了 Python，在项目文件夹运行：

```bash
python3 -m http.server 8000 --directory docs
```

访问 http://localhost:8000 ，结束时按 Ctrl+C。

## 5. 内容与维护

- `docs/index.html`：正文、作者、表格、引用、结构。
- `docs/style.css`：酒红色与白色视觉样式，移动端适配。
- `docs/site-config.js`：视频列表与公开论文信息配置。
- `docs/app.js`：结果切换、图表放大、复制引用、视频播放器。
- `docs/assets/`：论文原图、PolyU/VCLab 标识、社交预览图与视频目录。

实验展示区分别列出 NAVSIM、RoboTwin 2.0 与 RTX 5090 推理效率。H20 和 RTX 5090 的延迟结果分开标注，避免把不同硬件或编译设置混在一起。

网站没有第三方字体、分析脚本、CDN 或前端框架依赖。移动端表格可在区域内横向滚动。

## 6. 本次论文核对

- 公开版本包含 Guowen Zhang、Liyi Chen、Xu Hu、Pengfei Wang、Jingfan Chen、Chenhang He、Lei Zhang，单位均为 The Hong Kong Polytechnic University。
- Guowen Zhang 与 Liyi Chen 为 equal contribution，Lei Zhang 为 corresponding author。
- 方法正文去除空白和注释后相同；使用的三张方法/结果图在两个压缩包中逐字节相同。
- 主页展示的核心结果在两份中一致：NAVSIM PDMS 90.3 / 136 ms；RoboTwin 平均成功率 90.00% / 142 ms；RTX 5090 compiled latency 40.81 ms（RoboTwin）和 52.64 ms（NAVSIM）。
- 原始成功率表中部分 baseline 的 Average 与 Clean/Randomized 简单平均存在差异；页面忠实保留论文已报告值，未自行重算或纠正。
- 附件包含 LaTeX 源文件和图表 PDF，没有可直接下载的完整论文 PDF 或真实 arXiv 地址，因此论文下载按钮暂时隐藏。

## 7. 验证记录

已检查桌面和 390px 手机布局，无整页横向溢出；实验表格在自身区域内横向滚动。已验证结果标签切换、图表放大/关闭、BibTeX 复制，以及视频列表切换、空视频占位和无效视频地址的错误提示。主页资源路径和内部锚点检查通过，JavaScript 语法检查通过。2026-10-16 已补充具身执行视频，并完成浏览器实际播放、场景切换、移动端宽度与 MP4 解码检查。

## 8. 具身视频：原速计时版

当前版本默认 **1× 原视频速度**，完整保留两个来源的 640×480（4:3）画面和 20 fps，不裁剪、不拉伸、不删减动作。两个来源均从原视频第 0 秒开始。播放器下方提供 1× Original / 2× Preview，同步作用于整个左右对比视频，不会改变两侧相对速度。

每侧烧录独立的原片计时与进度条。较短录像结束后，计时停止，显示 RECORDING ENDED，并保留最后一帧等待另一侧。页面显示源录像总时长和短片比例；这不是经过标注的任务完成时间，也不是推理延迟测量。片段经过选择以展示 OSWAM 更短的录像，不构成随机样本、成功率统计或严格配对实验。

| 展示 | 两侧 episode | Fast-WAM 检查点 | OSWAM 检查点 | Fast-WAM 原片 | OSWAM 原片 | OSWAM 原片短 |
|---|---:|---:|---:|---:|---:|---:|
| bread-01 | 18 | 4000 | 4000 | 28.25 s | 16.00 s | 43.4% |
| bread-02 | 0 | 4000 | 4000 | 26.10 s | 17.55 s | 32.8% |
| drawer-01 | 19 | 10000 | 6000 | 20.85 s | 13.30 s | 36.2% |
| drawer-02 | 18 | 10000 | 6000 | 19.40 s | 13.15 s | 32.2% |

选择依据：两类任务各两组，使用抓取、移动和容器交互清楚的主相机视角。近景相机遮挡较多，未用作主展示。episode 编号相同不代表同一次执行或严格匹配的初始条件；两个模型的抽屉任务检查点也不同，已在页面注明。

推理速度优势另以论文结果显示：RoboTwin 2.0，H20 上 Fast-WAM 397 ms、OSWAM 142 ms，约 2.80×；不从录像时长推导该数字。

文件采用 H.264、yuv420p、20 fps、1280×640、faststart，无音轨。原始文件未修改。来源路径、SHA-256、时长和剪辑规则见 `docs/assets/videos/selection-manifest.json`。自驾保持空白。

验证：四段视频完整解码通过；首段输出时长与源最大时长相符；原速/2×切换及跨片段保持倍速正常；原片结束计时及定格提示已经逐帧抽查；手机端无整页横向溢出。
