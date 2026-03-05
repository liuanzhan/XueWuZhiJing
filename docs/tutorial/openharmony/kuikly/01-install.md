---
title: "【2025 最新】Kuikly 编译开发鸿蒙 HarmonyOS 6 环境安装（Windows）"
createTime: "2026-03-05"
author: 懿轩
---

## 引言

本教程面向希望快速搭建 Kuikly 开发环境以编译和开发 OpenHarmony 项目的开发者。我们采用“克隆仓库 + 运行脚本”的方式完成环境配置——相较于通过 Android Studio 搭建 Kuikly 环境的传统方法，该方案流程更简洁、操作更高效，尤其适合初学者和追求开发效率的用户。本文基于 2026 年最新实践编写，配有详细步骤与图示，助您轻松上手 OpenHarmony 应用开发。

## 一、搭建Kuikly环境教程

### 1.1 创建文件目录

新建一个Kuikly文件夹用来保存创建的Kuikly项目。

<img src="./attachments/cfafa267fd494d2abfd3165a1200c656.png" alt="img" style="zoom:50%;" />

### 1.2 新增测试文件夹

在该文件夹新增一个KuiklyTest测试文件夹，用来入门开发

<img src="./attachments/6a45f64673e84f24b21e320f0c2591cc.png" alt="img" style="zoom:50%;" />

### 1.3 拉取官方代码

前置条件：电脑里面需要安装 Git，如果没有，可以看我的这篇文章进行配置安装。

[【2026 最新】下载安装 Git 详细教程 （Windows）](https://blog.csdn.net/2301_80035882/article/details/155000175?spm=1001.2014.3001.5502)

双击进入文件夹，上方输入cmd，点击Enter

<img src="./attachments/fa342ab872224de584268c8b83147f7d.png" alt="img" style="zoom:50%;" />

输入：

```
git clone https://gitcode.com/Tencent-TDS/KuiklyUI.git
```

鼠标右键粘贴：

<img src="./attachments/36287d7f7caa4851a45a07bf6345b7c8.png" alt="img" style="zoom:50%;" />

代码执行完了，我们的KuiklyTest就会多出来一个KuiklyUI的文件夹。

我们再双击进去查看文件夹里面是否有内容，如果有内容就是正常的，没有内容就是有问题的。

<img src="./attachments/93e4f176f5494629974737c31df6a072.png" alt="img" style="zoom:50%;" />

<img src="./attachments/9ab18395d90b46c9be7a12632408bbd0.png" alt="img" style="zoom:50%;" />

### 1.4 执行编译脚本

> 如果电脑操作系统是Windows就执行的是"**2.0_ohos_demo_build.bat**"这个脚本。
>
> 如果是Linux就执行"**2.0_ohos_demo_build.sh**"这个脚本。

这里我们以windows为例：

双击运行下方**2.0_ohos_demo_build.bat**脚本。

<img src="./attachments/60aae1213fa546b79b4a2a4b74ef83fe.png" alt="img" style="zoom:50%;" />

> 这里跑脚本的速度取决于cpu的性能，win的一般跑个15到20分钟，mac的 m5芯片 大约不到1分钟。

运行脚本就会弹出来一个小黑窗，注意这个100%并不是已经执行完了，后面还会接着执行，Windows整个过程大概15~30分钟左右。

如果超过这个时间，一般就是有问题了。

<img src="./attachments/4d601557128945808f750e46a2a751a0.png" alt="img" style="zoom:50%;" />

如下图显示**BUILD SUCCESSFUL**，才算是编译完成。点击任意键关闭窗口。

<img src="./attachments/9bb29696b47d4d6eb60d189662efe8fd.png" alt="img" style="zoom:50%;" />

## 二、运行到真机

### 2.1 DevEco Studio打开项目

选中KuiklyUI目录中的ohosApp，点击ok即可打开，然后等待编译。

<img src="./attachments/9b41398c278742f0a0e4986c94d044e0.png" alt="img" style="zoom:50%;" />

<img src="./attachments/47d0074fb67f427296d90523b776eb55.png" alt="img" style="zoom:50%;" />

<img src="./attachments/a79c7c68ce5e454eaa244187df9261d4.png" alt="img" style="zoom:50%;" />

打开项目如图所示：

<img src="./attachments/24ae5135f05247238b6699fb92aa3816.png" alt="img" style="zoom:50%;" />

<img src="./attachments/0b8af976cd4b4a0391826cd5338ed84b.png" alt="img" style="zoom:50%;" />

这个时候用数据线连接真机，就会显示出来真机的名称，点击运行即可。

<img src="./attachments/769d17a5d1ed4597bec7cc826f84e05d.png" alt="img" style="zoom:50%;" />

但是我们可能还会遇到两个问题

### 2.2 签名问题

这个运行了然后报错的信息就是签名问题，我们点击"Open signing configs"即可。

<img src="./attachments/9fcaced32a514015b0f3fd1ab700b29c.png" alt="img" style="zoom:50%;" />

点击登录配置签名：

<img src="./attachments/947ba214b6124c98913512580a34f84b.png" alt="img" style="zoom:50%;" />

等待Signing Configs的窗口中的信息加载完成后点击Ok即可再次运行。

<img src="./attachments/aa302b0979254194816876071c37a214.png" alt="img" style="zoom:50%;" />

这里需要用USB连接到真机，不然会报下述错误：

<img src="./attachments/a0cd633d2ceb42248859bdf6f28ac931.png" alt="img" style="zoom:50%;" />

### 2.3 运行成功

<img src="./attachments/bc3a919fdc9a4168a2a287220180eb84.png" alt="img" style="zoom:50%;" />
