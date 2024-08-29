# Chrome-Extend-Vite-M3-Vue3

基于 Vue 3 + TypeScript + Vite + SCSS + M3（菜单 3 + Service Worker）版本的谷歌浏览器插件开发模板。

## 介绍

为适应当前技术选型需求，以及业务，因此写了这么一个版本来使用。
本项目是一个用于开发谷歌浏览器插件的模板，采用了以下技术栈：

- **Vue 3**: 用于构建用户界面。
- **TypeScript**: 提供静态类型检查和更好的开发体验。
- **Vite**: 用于快速打包和开发。
- **SCSS**: 用于增强 CSS 的样式编写体验。
- **M3**: 支持菜单 3 和 Service Worker 的配置和使用。

### 功能特性

- **Popup 界面**: 使用 Vue 3 构建的插件弹出窗口。
- **Content Scripts**: 与网页进行交互的脚本。
- **Background Scripts**: 处理后台任务。
- **Service Worker**: 处理插件的后台服务。
- **manifest 3**: 支持最新版本的菜单系统。

## 快速开始

### 克隆仓库

```bash
git clone https://github.com/lizongxiao/chrome-extend-vite-m3-vue3.git
cd chrome-extend-vite-m3-vue3
```

### 安装依赖

```bash
pnpm install
```

### 开发

```bash
pnpm watch
```

### 打包

```bash
pnpm biuld
```

```plaintext
chrome-extend-vite-m3-vue3/
├── .gitignore                # 指定不需要纳入版本控制的文件或目录
├── manifest.json             # Chrome 插件的配置文件，定义了插件的所有元数据
├── package.json              # 项目依赖、脚本等配置文件
├── pnpm-lock.yaml            # pnpm 锁定文件，记录了所有安装包的版本信息
├── README.md                 # 项目文档，包含了项目的介绍、安装、使用等信息
├── tsconfig.app.json         # 应用程序的 TypeScript 配置文件
├── tsconfig.json             # TypeScript 全局配置文件
├── tsconfig.node.json        # Node.js 相关的 TypeScript 配置文件
├── vite.config.ts            # Vite 配置文件
│
├── .vscode/                  # VSCode 配置文件夹
│   └── extensions.json       # VSCode 插件推荐配置
│
├── dist/                     # 打包后的文件夹
│   ├── manifest.json         # 打包后的插件配置文件
│   ├── popup.html            # 打包后的 Popup 页面
│   ├── assets/               # 打包后的静态资源
│   │   ├── fonts/            # 字体文件
│   │   ├── icons/            # 图标文件
│   │   ├── images/           # 图片资源
│   │   └── scss/             # SCSS 样式文件
│   ├── css/                  # 打包后的 CSS 文件
│   │   └── popup.css         # Popup 页面样式
│   └── js/                   # 打包后的 JavaScript 文件
│       ├── background/       # Background 脚本
│       │   └── index.js      # Background 脚本的入口文件
│       ├── content/          # Content 脚本
│       │   └── index.js      # Content 脚本的入口文件
│       └── popup/            # Popup 脚本
│           └── index.js      # Popup 脚本的入口文件
│
├── popup/                    # Popup 页面源文件
│   ├── popup.html            # Popup 页面 HTML 模板
│   ├── popup.ts              # Popup 页面 TypeScript 入口文件
│   └── Popup.vue             # Popup 页面 Vue 组件
│
├── public/                   # 公共资源文件夹
│   └── assets/               # 公共静态资源
│       ├── fonts/            # 字体文件
│       ├── icons/            # 图标文件
│       ├── images/           # 图片资源
│       └── scss/             # SCSS 样式文件
│
├── src/                      # 项目源代码
│   ├── vite-env.d.ts         # Vite 环境声明文件
│   ├── background/           # Background 脚本源文件
│   │   └── index.ts          # Background 脚本的入口文件
│   ├── components/           # Vue 组件文件夹
│   │   └── Home.vue          # 示例组件 Home
│   └── content/              # Content 脚本源文件
│       └── index.ts          # Content 脚本的入口文件
│
└── types/                    # TypeScript 类型定义文件夹
    └── shims-vue.d.ts        # Vue 模块类型声明


```

### 文档说明

- **安装依赖** 部分详细说明了如何使用 `pnpm` 安装项目依赖。
- **常用命令** 部分列出了使用 `pnpm` 进行常见操作的命令。
- **贡献指南** 和 **许可证** 部分提供了社区贡献和开源许可信息。
- **开源原则** 开源进化人类
