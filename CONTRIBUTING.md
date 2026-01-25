# 🤝 贡献指南

非常感谢您对「学无止境」项目的兴趣！我们欢迎任何形式的贡献，无论是代码改进、文档完善、内容创作还是问题反馈。

## 📋 贡献类型

我们鼓励以下类型的贡献：

### 💻 代码贡献
- 修复bug和性能优化
- 添加新功能和改进现有功能
- 重构和代码清理
- 测试用例编写

### 📖 内容贡献
- 编写和完善教程内容
- 翻译文档内容
- 完善项目文档
- 分享学习资源和经验

### 🐛 问题反馈
- 报告bug和问题
- 提出功能建议
- 改进用户体验建议
- 文档错误修正

## 🚀 贡献流程

### 1. 准备工作
- 确保您已经阅读并理解了[行为准则](CODE_OF_CONDUCT.md)
- 熟悉项目的[技术栈和架构](README.md#技术栈)

### 2. 选择任务
- 查看[Issues](../../issues)列表，寻找适合您的任务
- 参与[讨论](../../discussions)了解项目发展方向
- 或者提出您自己的想法

### 3. 开发流程

#### Fork & Clone
```bash
# Fork本仓库到您的GitHub账户
# 然后克隆到本地
git clone https://github.com/YOUR_USERNAME/CodeGrow.git
cd CodeGrow

# 添加上游仓库
git remote add upstream https://gitcode.com/liuanzhan/XueWuZhiJing.git
```

#### 创建分支
```bash
# 创建功能分支
git checkout -b feature/your-feature-name

# 或者修复bug
git checkout -b fix/bug-description

# 或者文档更新
git checkout -b docs/update-tutorial
```

#### 开发与测试
```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建测试
npm run build

# 运行测试（如果有）
npm test
```

#### 提交代码
```bash
# 添加更改
git add .

# 提交时请遵循提交信息规范
git commit -m "类型: 简洁的描述

详细说明问题的背景和解决方案
- 主要改动点1
- 主要改动点2

关联的Issue: #123"
```

### 4. 提交Pull Request

#### 推送分支
```bash
# 推送分支到您的fork
git push origin feature/your-feature-name
```

#### 创建PR
1. 访问您的GitHub仓库
2. 点击"Compare & pull request"
3. 填写PR模板信息
4. 等待项目维护者review

## 📝 提交信息规范

我们采用以下格式的提交信息：

```
类型: 简洁的描述

详细说明（可选）
- 主要改动点
- 相关链接

关联Issue: #123
```

### 类型说明
- `feat`: 新功能
- `fix`: 修复bug
- `docs`: 文档更新
- `style`: 代码格式调整
- `refactor`: 代码重构
- `test`: 测试相关
- `chore`: 构建过程或工具配置更新

## 🛠️ 开发环境设置

### 必要工具
- Node.js 18+
- pnpm (推荐) 或 npm
- Git

### 推荐工具
- VS Code + VuePress扩展
- Prettier (代码格式化)
- ESLint (代码检查)

### 环境配置
```bash
# 克隆项目后
pnpm install

# 启动开发服务器
pnpm dev

# 访问 http://localhost:8080 查看效果
```

## 📚 内容创作指南

### 教程编写规范
- 使用清晰简洁的语言
- 包含实际可运行的代码示例
- 提供逐步指导
- 包含常见问题解答

### 文档结构
```
---
title: 教程标题
createTime: 2024/01/21
---

# 标题

## 概述

## 前置条件

## 步骤指导

## 常见问题

## 扩展阅读
```

## 🔍 代码规范

### JavaScript/TypeScript
- 使用ES6+语法
- 遵循Prettier格式化
- 添加必要的注释
- 使用有意义的变量名

### Markdown
- 使用标准Markdown语法
- 图片添加alt文本
- 链接保持有效性
- 代码块指定语言

### VuePress特性
- 充分利用主题特性
- 使用合适的组件
- 保持一致的样式

## 🧪 测试策略

### 手动测试
- 功能完整性测试
- 跨浏览器兼容性
- 移动端适配测试
- 性能表现评估

### 自动化测试
- 单元测试（计划中）
- E2E测试（计划中）

## 📞 沟通渠道

### 寻求帮助
- [GitHub Issues](../../issues) - 技术问题和bug报告
- [GitHub Discussions](../../discussions) - 功能讨论和建议
- [项目Wiki](../../wiki) - 详细文档和指南

### 紧急联系
- 安全问题请参考[安全政策](SECURITY.md)
- 严重bug请标记为高优先级

## 🎉 贡献者认可

所有贡献者都将被：
- 列入贡献者列表
- 在发布说明中提及
- 获得社区认可

## 📋 检查清单

提交PR前请确保：

- [ ] 代码遵循项目规范
- [ ] 所有测试通过
- [ ] 文档已更新
- [ ] 提交信息清晰完整
- [ ] 与现有代码风格一致
- [ ] 没有破坏性更改

---

再次感谢您的贡献！您的参与让「学无止境」变得更好。

*有任何问题都欢迎随时联系我们！* 🚀