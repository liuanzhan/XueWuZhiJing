---
title: "【2026 最新】仓颉编程环境安装（Windows 版）"
createTime: "2026-03-05"
author: 懿轩
---


## 前言

仓颉（Cangjie）是华为为鸿蒙生态打造的一款现代编程语言。它旨在兼顾开发效率与运行性能，是面向全场景应用开发的通用编程语言。

仓颉编程语言主要具有以下特点：

- **多范式编程**：融合了函数式、命令式和面向对象等多种编程范式，开发者可以根据需求灵活选择。
- **类型与内存安全**：作为静态强类型语言，它能在编译时发现多数错误，同时通过自动内存管理等机制确保运行时的安全。
- **高性能**：支持将代码直接编译为原生二进制文件，以获得高效的运行性能。
- **简洁高效**：语法设计简明，例如提供了字符串插值、模式匹配等特性，让开发者可以用更少的代码表达逻辑。

官网：

[仓颉编程语言官网](https://cangjie-lang.cn/)

<img src="./attachments/a960aa24f90a4f379b54fe13b753de35.png" alt="img" style="zoom:50%;" />

## 一、安装 SDK

### 1.1 开始下载

官网：

[下载中心-仓颉编程语言官网](https://cangjie-lang.cn/download)

<img src="./attachments/0393e968cca94766b178d938789d57a3.png" alt="img" style="zoom:50%;" />

选择适合你电脑系统的版本进行下载：

<img src="./attachments/40d5dc4e5f294d18a9cc6136eb506d6a.png" alt="img" style="zoom:33%;" />

### 1.2 开始安装

下载完成后，双击安装包

<img src="./attachments/11537d8cc6b94b1e9812e738de21229a.png" alt="img" style="zoom: 67%;" />

<img src="./attachments/2d26b91793eb45c5a568716959d8aabe.png" alt="img" style="zoom:50%;" />

<img src="./attachments/0374787482984a3a8d0e696f66159e89.png" alt="img" style="zoom: 67%;" />

<img src="./attachments/9a00ed509a9a40cfaa5cc880728fde19.png" alt="img" style="zoom:67%;" />

<img src="./attachments/c40f9a8fe0584ca0a78a7f1f833d7d4b.png" alt="img" style="zoom:67%;" />

<img src="./attachments/c0ed0e764b5a43d3867ba6a6c923136f.png" alt="img" style="zoom:67%;" />

选择安装的文件位置：

<img src="./attachments/742dc106acf04ad5a714e24e09cd7699.png" alt="img" style="zoom:67%;" />

<img src="./attachments/20d25a1bcd414d298e82ec098625f311.png" alt="img" style="zoom:67%;" />

如果你的电脑没有什么正在运行需要保存的东西，直接点击是重启电脑；

或者点击否自行重启。

<img src="./attachments/12f04117722b45b4af30706632a27894.png" alt="img" style="zoom:67%;" />

### 1.3 验证安装

Win + R 里面输入 cmd，接着回车

<img src="./attachments/b199b4c8459148b8b0e58ddf8d308ca2.png" alt="img" style="zoom:67%;" />

输入下述指令：

```
cjc --version
```

<img src="./attachments/424c799996c9485595730dbb87ebf785.png" alt="img" style="zoom:67%;" />

如图所示，即配置成功：

<img src="./attachments/424c799996c9485595730dbb87ebf785.png" alt="img" style="zoom:67%;" />

## 二、安装 CodeArts IDE for Cangjie

CodeArts IDE for Cangjie 是面向仓颉编程语言的服务应用开发环境，为开发者提供良好的编程体验，包括语言服务、工程管理、编译构建、调试服务等功能。

### 2.1 开始下载

[下载中心-仓颉编程语言官网](https://cangjie-lang.cn/download)

<img src="./attachments/bafbb456070c4f78b8561cdf38441075.png" alt="img" style="zoom:67%;" />

点击后需要你登录华为云账号。

登录成功后会进入该网址。

[CodeArts IDE - 智能化集成开发环境，先进的语言、调试和AI辅助服务。](https://devcloud.cn-north-4.huaweicloud.com/codeartside/home?product=cangjie#)

点击下载使用：

<img src="./attachments/314e116a21454c32b81be87ffa8ed147.png" alt="img" style="zoom:67%;" />

### 2.2 开始安装

下载完成后，双击打开安装包：

<img src="./attachments/b9130c7843894e55bc7b955fb53b4ed5.png" alt="img" style="zoom:67%;" />

<img src="./attachments/cc6dbecf8ca045bca3ea2052006bef1c.png" alt="img" style="zoom:67%;" />

选择安装位置

<img src="./attachments/c2266c1bebd24a3aa61a3b83b2011196.png" alt="img" style="zoom:67%;" />

<img src="./attachments/da9218c091cc4aeea3bfa98b94fddf59.png" alt="img" style="zoom:67%;" />

<img src="./attachments/7de3f68d8cea4557b68d0860b077bbb5.png" alt="img" style="zoom:67%;" />

等待安装

<img src="./attachments/c2ae8f984f334f23a29eb6e4e9423d33.png" alt="img" style="zoom:67%;" />

<img src="./attachments/52d3ce9d22834b379c25dad2e5eae313.png" alt="img" style="zoom:67%;" />

## 三、开始上手

### 3.1 新建工程

<img src="./attachments/006a310f7ccb411090a98cbb2eeae0cc.png" alt="img" style="zoom:67%;" />

<img src="./attachments/f7473b326e774d15be96d971fea2ac83.png" alt="img" style="zoom: 50%;" />

点击 Ctrl + 加号 可以使页面放大

找到main.cj文件，点击右上角运行，下述显示表示运行成功：

```cpp
package Test

main(): Int64 {
    println("hello world")
    return 0
}
```

<img src="./attachments/8e092d23025f4800a2cd93bf77c28c02.png" alt="img" style="zoom: 67%;" />

### 3.2 学习资料

官方学习资料：

[文档-仓颉编程语言官网](https://cangjie-lang.cn/docs)

<img src="./attachments/50f62df07ece4ab6904ced95a9bd049f.png" alt="img" style="zoom:67%;" />