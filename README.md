# 城市文化记忆传承系统

第24届 SuperMap 杯高校GIS大赛 · 命题开发组作品

## 快速开始

### 1. 克隆项目

```bash
git clone https://github.com/你的用户名/Shanghai_BS.git
cd Shanghai_BS
```

### 2. 配置 API Key

```bash
cp config.example.js config.js
```

编辑 `config.js`，填入高德 API Key（[申请地址](https://console.amap.com/)）

### 3. 启动 iServer

运行 `D:\supermap-iserver-setup\bin\startup.bat`

### 4. 发布服务

在 iServer 管理页面发布 City 工作空间的地图服务、数据服务

### 5. 本地开发

用 VS Code Live Server 打开 `index.html`，访问 `http://localhost:5500`

## 项目结构

```
Shanghai_BS/
├── index.html          # 主页面
├── config.js           # 配置文件（需自己创建）
── css/                # 样式
├── js/                 # 功能代码
── dist/               # iClient 类库
├── libs/               # 第三方库（Leaflet 等）
├── images/             # 图片资源
└── data/               # 本地 JSON 数据（关联关系等）
```

## 数据文件

二进制数据文件（.udbx、.smwu、历史照片等）不在此仓库，请联系项目负责人获取。

## 技术栈

- SuperMap iDesktopX 2025 — 数据处理
- SuperMap iServer 2025 — 服务发布
- iClient for Leaflet — 二维前端
- iClient3D for WebGL — 三维前端
- Vue 3 + Vite — 前端框架（备用）
- ECharts / D3.js — 可视化

## 协作

- 开发分支：`dev`
- 提交前请先 `git pull`
- 提交信息格式：`feat: 功能描述` 或 `fix: 修复描述`

## 开发进度

见 [开发进度.md](开发进度.md)
