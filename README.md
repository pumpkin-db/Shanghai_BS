# 城市文化记忆传承系统

第24届 SuperMap 杯高校GIS大赛 · 命题开发组作品

## 快速开始

### 1. 克隆项目

```bash
git clone https://github.com/pumpkin-db/Shanghai_BS.git
cd Shanghai_BS
```

### 2. 配置 API Key

```bash
cp config.example.js config.js
```

编辑 `config.js`，填入：
- 高德 API Key（[申请](https://console.amap.com/)）
- 天地图 API Key（[申请](https://console.tianditu.gov.cn/)）

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
├── config.js           # 配置文件（需自己创建，含 API Key）
├── config.example.js   # 配置模板
├── css/                # 样式
├── js/                 # 功能代码（map.js、query.js 等）
├── dist/               # iClient 类库
├── libs/               # 第三方库（Leaflet 等）
├── images/             # 图片资源
└── data/               # 本地 JSON 数据（关联关系等）
```

## 技术栈

| 层次 | 技术 | 作用 |
|------|------|------|
| 数据处理 | SuperMap iDesktopX | 数据导入、属性处理、地图制作 |
| 服务发布 | SuperMap iServer | REST 地图/数据/三维服务 |
| 二维开发 | iClient for Leaflet | 二维地图、查询、可视化 |
| 三维开发 | iClient3D for WebGL | 三维场景、S3M 图层 |
| 前端框架 | Vue 3 + Vite | 组件化开发（备用） |
| 可视化 | ECharts | 统计图表 |

## 代码协作流程

### 仓库与分支

- 仓库：https://github.com/pumpkin-db/Shanghai_BS
- 分支：`main`（稳定版）、`dev`（开发版）

### 首次克隆

```bash
# 任意位置执行
git clone https://github.com/pumpkin-db/Shanghai_BS.git
cd Shanghai_BS
cp config.example.js config.js
# 编辑 config.js 填入 API Key
```

### 日常开发（在 Shanghai_BS 目录下）

```bash
# 切换到开发分支
git checkout dev

# 拉取最新代码（每天开发前必做）
git pull

# 开发...

# 提交并推送
git add .
git commit -m "说明改了什么"
git push
```

### 提交信息格式

```
feat: 新功能（如 feat: 建筑查询）
fix: 修复 bug（如 fix: 地图加载失败）
docs: 文档修改
```

### 冲突解决

`git pull` 提示冲突时：
1. 打开冲突文件，找到 `<<<<<<<` 标记
2. 手动选择保留哪部分
3. 保存 → `git add .` → `git commit`

**原则**：谁修改的文件谁负责解决冲突。

### 数据文件

二进制文件（.udbx、.smwu、照片、多媒体）不在此仓库，通过网盘共享。

## 开发进度

见 [开发进度.md](开发进度.md)

## 注意事项

- **推之前先拉**：避免冲突
- **不要推 config.js**：已加入 .gitignore（含 API Key）
- **不要推二进制文件**：太大，用网盘共享
- **SuperMap3D 对象**：不要放入 Vue 的 data/store 中，用 `window.viewer` 全局对象
