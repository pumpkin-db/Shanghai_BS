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

### 分支策略

```
main          # 稳定版（可运行）
dev           # 开发主分支（集成所有功能）
feature/xxx   # 个人功能分支（如 feature/map、feature/query）
```

**当前分支**：`main`、`dev` 已创建

### 日常开发流程

```bash
# 1. 切换到 dev 分支
git checkout dev

# 2. 拉取最新代码（每天开发前必做）
git pull

# 3. 创建个人功能分支
git checkout -b feature/你的功能名

# 4. 开发...

# 5. 提交代码
git add .
git commit -m "feat: 功能描述"
# 或
git commit -m "fix: 修复描述"

# 6. 切换到 dev，合并自己的分支
git checkout dev
git merge feature/你的功能名

# 7. 推送到远程
git push

# 8. 删除已合并的功能分支（可选）
git branch -d feature/你的功能名
```

### 提交信息规范

| 前缀 | 用途 | 示例 |
|------|------|------|
| `feat` | 新功能 | `feat: 建筑查询功能` |
| `fix` | 修复 bug | `fix: 地图加载失败` |
| `docs` | 文档修改 | `docs: 更新 README` |
| `refactor` | 代码重构 | `refactor: 统一配置管理` |
| `style` | 样式调整 | `style: 优化弹窗样式` |

### 冲突解决

如果 `git pull` 或 `git merge` 提示冲突：

1. 打开冲突文件，找到 `<<<<<<<`、`=======`、`>>>>>>>` 标记
2. 手动选择保留哪部分代码（可和组员沟通）
3. 删除标记，保存文件
4. `git add .` → `git commit`

**原则**：谁修改的文件谁负责解决冲突。

### 数据文件

二进制文件（.udbx、.smwu、历史照片、多媒体）不在此仓库，通过网盘/群文件共享。

获取数据后放到项目对应目录，不要提交到 Git。

## 开发进度

见 [开发进度.md](开发进度.md)

## 注意事项

- **推之前先拉**：避免冲突
- **不要推 config.js**：已加入 .gitignore（含 API Key）
- **不要推二进制文件**：太大，用网盘共享
- **SuperMap3D 对象**：不要放入 Vue 的 data/store 中，用 `window.viewer` 全局对象
