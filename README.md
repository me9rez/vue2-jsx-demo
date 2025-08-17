# vue2-jsx-demo

一个使用 Vue2 与 JSX/TSX 结合的开发模板，支持多种构建工具，提供完整的类型提示和开发体验。

## ✨ 特性
- **Vue2 + JSX/TSX 开发支持**：使用现代化的 JSX/TSX 语法编写 Vue2 组件
- **多构建工具支持**：同时支持 Vite 和 Rsbuild 构建工具
- **组件库打包**：使用 Bunchee 打包可复用的 Vue2 JSX/TSX 组件
- **Just 命令工具集成**：简化开发流程的命令行工具
- **自动化的类型提示**：完整的 TypeScript 支持
- **热模块替换（HMR）**：提升开发效率的实时更新机制
- **PNPM 工作区**：优化依赖管理和开发体验

## 📁 项目结构
```
vue2-jsx-demo/
├── bunchee-vue-jsx/        # 使用 Bunchee 打包的 Vue2 JSX/TSX 组件库
├── vite-vue2/              # 使用 Vite 构建的 Vue2 应用示例
├── rsbuild-vue2/           # 使用 Rsbuild 构建的 Vue2 应用示例
├── package.json            # 根目录 package.json
├── pnpm-workspace.yaml     # PNPM 工作区配置
├── justfile                # Just 命令配置
└── README.md               # 项目说明文档
```

## 🚀 快速开始

### 前提条件
- Node.js (>=24.0.0)
- PNPM (>=10.0.0)
- Just (可选，用于简化命令)

### 安装依赖
```bash
pnpm install
```

### 运行项目

#### 使用 Vite
```bash
# 使用 Just 命令
just vite-dev

# 或直接运行
pnpm run dev1
```

#### 使用 Rsbuild
```bash
# 使用 Just 命令
just rsbuild-dev

# 或直接运行
pnpm run dev2
```

## 🔧 构建生产环境代码

### 构建 Vite 项目
```bash
cd vite-vue2
pnpm run build
```

### 构建 Rsbuild 项目
```bash
cd rsbuild-vue2
pnpm run build
```

### 构建组件库
```bash
cd bunchee-vue-jsx
pnpm run build
```

## 📝 使用 JSX/TSX 开发 Vue2 组件

在组件库或应用中，您可以使用 JSX/TSX 语法编写 Vue2 组件：

```ts
// src/components/Example.tsx
import { defineComponent } from 'vue'
import { h } from './helper'

export default defineComponent({
  props: {
    message: String
  },
  setup(props) {
    return () => (
      <div className="example-component">
        <h1>{props.message}</h1>
        <p>这是一个使用 TSX 编写的 Vue2 组件</p>
      </div>
    )
  }
})
```

## 📚 技术栈
- **框架**: Vue 2.7+
- **语言**: TypeScript
- **语法**: JSX/TSX
- **构建工具**: Vite, Rsbuild
- **组件打包**: Bunchee
- **依赖管理**: PNPM
- **命令工具**: Just

## 🤝 贡献指南
1. Fork 此仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交您的更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开一个 Pull Request

## 📄 许可证
此项目使用 MIT 许可证 - 详情请查看 [LICENSE](LICENSE) 文件

## ❓ 问题与支持
如果您在使用过程中遇到任何问题，请在 [GitHub Issues](https://github.com/me9rez/vue2-jsx-demo/issues) 中提交您的问题。