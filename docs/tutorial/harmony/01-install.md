---
title: 【2025 最新】最新HarmonyOS 6 DevEco Studio 环境安装（Windows 版）
createTime: 2026-03-04
author: 懿轩
---

## 前言

<img src="./attachments/39a383ef7d9348da8a770053f7ad15c7.png" alt="img" style="zoom:50%;" />

## 一、DevEco Studio下载安装

我这里版本为：

> DevEco Studio 6.0.0 Release
>  Build Version: 6.0.0.858, built on September 24, 2025
>  Runtime version: 21.0.6+8-b631.39 amd64 (JCEF 122.1.9)
>  VM: OpenJDK 64-Bit Server VM by JetBrains s.r.o.
>  Toolkit: sun.awt.windows.WToolkit
>  Windows 11.0
>  GC: G1 Young Generation, G1 Concurrent GC, G1 Old Generation
>  Memory: 1536M
>  Cores: 16
>  Registry:
>   idea.plugins.compatible.build=IC-243.24978.46

本次安装需要以下几个文件夹，可以提前创建：在任意盘下创建HarmonyOS文件夹：

**画红圈的是需要创建的：**

<img src="./attachments/a39568cadcd74c93b75e372fa3ec9f2e.png" alt="img" style="zoom:50%;" />

> ArkUI-X 文件夹下还有一个 Sdk 文件夹
>
> Emulator 文件夹下还有一个 deployed 文件夹
>
> OpenHarmony 文件夹下还有一个 Sdk 文件夹

### 1.1 下载官网压缩包

下载地址：

[最新版本 - 下载中心 - 华为开发者联盟https://developer.huawei.com/consumer/cn/download/](https://developer.huawei.com/consumer/cn/download/)

选择 6.0 稳定版如图所示：

<img src="./attachments/1f229fdac6a143be958728ceca7ac9cd.png" alt="img" style="zoom:50%;" />

### 1.2 下载完成后解压缩包双击打开.exe进入安装页面

<img src="./attachments/0c75bc3f899545f5a06106c6995b2715.png" alt="img" style="zoom:50%;" />

<img src="./attachments/39f3982e2bd1446eb006318bc6b762c8.png" alt="img" style="zoom:50%;" />

### 1.3 选择安装位置

尽量不要选择C盘，如果C盘空间充足也可以

<img src="./attachments/0520a12fe7c7401b8444e2d838401610.png" alt="img" style="zoom:50%;" />

### 1.4 选择安装选项

全选点击进入下一步

<img src="./attachments/11af90a65c7e425e9db711aab0c9a126.png" alt="img" style="zoom:50%;" />

### 1.5 选择开始菜单目录

默认即可，点击安装

<img src="./attachments/42d05d74820743a399212edc170a356c.png" alt="img" style="zoom:50%;" />

### 1.6 开始安装

<img src="./attachments/5ca0163db80a4e71affdf51065ac6dad.png" alt="img" style="zoom:50%;" />

<img src="./attachments/e76fe874332848aebc8ac5d7301603b5.png" alt="img" style="zoom:50%;" />

## 二、DevEco Studio 相关配置

### 2.1 新建一个项目

双击桌面图标进入应用

<img src="./attachments/7f3d9863756140d0b0f3c4c46492b6af.png" alt="img" style="zoom:50%;" />

<img src="./attachments/b0cfb041f1964131b0e6d0c5a81d5135.png" alt="img" style="zoom:50%;" />

<img src="./attachments/690adaa4fdab4de286a76476e283d02a.png" alt="img" style="zoom:50%;" />

给你的项目起名，并选择你要保存Harmony项目的文件夹，点击Finish：

<img src="./attachments/a525259427f9444fa4e7e0039733ace5.png" alt="img" style="zoom:50%;" />

### 2.2 配置显示字体

选择左上角 File 下的 Settings

<img src="./attachments/a548776381cc465ca6f25fc3edfa3bbb.png" alt="img" style="zoom:50%;" />

<img src="./attachments/03b6f3b6610942d283d26e9e9f33be43.png" alt="img" style="zoom:50%;" />

### 2.3 设置安装OpenHarmony SDK

在Settings页面下的OpenHarmony SDK

选择安装路径：

<img src="./attachments/304a366f8516474a9e63a1c76d46dd91.png" alt="img" style="zoom: 33%;" />

<img src="./attachments/600233515c5348fe855de68913513eca.png" alt="img" style="zoom: 33%;" />

<img src="./attachments/4481d640779a45bb95594d23e46c18c6.png" alt="img" style="zoom: 33%;" />

点击同意，接着Next

<img src="./attachments/21bafea33d75466787c9ce3f17f487fa.png" alt="img" style="zoom: 33%;" />

等待下载，耐心等待

<img src="./attachments/9e2f3c8c106f4f35906b6635b9283dd9.png" alt="img" style="zoom: 33%;" />

下载完成如图所示：

<img src="./attachments/7c5ac4a7e96a457591b3cbc418131bfe.png" alt="img" style="zoom: 33%;" />

<img src="./attachments/38daa192fdaf46929c45db05e570fdbb.png" alt="img" style="zoom: 33%;" />

### 2.4 设置安装ArkUI-x

选择安装路径：

<img src="./attachments/c8dd466c597f40fbb8595c51fc77dbf1.png" alt="img" style="zoom: 33%;" />

<img src="./attachments/0c325c509f06439eb282a897cd0add05.png" alt="img" style="zoom: 33%;" />

点击同意，接着Next

<img src="./attachments/6719e639f1574f82946a1a7084965d0c.png" alt="img" style="zoom: 33%;" />

等待下载，耐心等待

<img src="./attachments/d790eed2ab0645828cd4a9f9224ded4a.png" alt="img" style="zoom: 33%;" />

下载完成如图所示：

<img src="./attachments/0a12b08d7f6a43c4a42e9f7d282e0daf.png" alt="img" style="zoom: 33%;" />

<img src="./attachments/84918827b2864db09b44f75185e09849.png" alt="img" style="zoom: 33%;" />

点击蓝按钮OK关闭。

### 2.5 配置安装虚拟机模拟器

点击Device Manager

<img src="./attachments/9aa4f2665eab4fe2891e1b6a95c3069d.png" alt="img" style="zoom: 33%;" />

<img src="./attachments/d3e51af17e634053951d40c0a7308d24.png" alt="img" style="zoom: 33%;" />

这里选择NO

<img src="./attachments/1aaabbb7a07c4504af54bfbde4fa1410.png" alt="img" style="zoom: 33%;" />

配置安装位置：

选择完安装地址，出现弹窗点击Yes即可

<img src="./attachments/8b668c884efe4395a80404e4101f2453.png" alt="img" style="zoom: 33%;" />

接着选择右下角 New Emulator 新建虚拟机：

<img src="./attachments/5f56d51f200c4fec8795daed586c63c3.png" alt="img" style="zoom: 33%;" />

选择虚拟机镜像下载位置：

<img src="./attachments/833b94c3c91b4601b7310407681de301.png" alt="img" style="zoom: 33%;" />

点击同意，接着Next

<img src="./attachments/5d1486c985da47118f47bc543bbb7216.png" alt="img" style="zoom: 33%;" />

等待下载，耐心等待

<img src="./attachments/c2c8f3d1b07f46b3898ddf326376415a.png" alt="img" style="zoom: 33%;" />

<img src="./attachments/5e41d3e6b0564f09a32cccd6baae5f65.png" alt="img" style="zoom: 33%;" />

接着Next：

<img src="./attachments/576291a72d954436981098e3160ebcf9.png" alt="img" style="zoom: 33%;" />

<img src="./attachments/6d6704058a294f52883973645b71e974.png" alt="img" style="zoom: 33%;" />

<img src="./attachments/d04779cd14de41babc02886dc654a777.png" alt="img" style="zoom:50%;" />

运行即可，初次运行可能会有点慢，耐心等待即可：

<img src="./attachments/996ec4da4a4e4ad79c93cedaf407ce6e.png" alt="img" style="zoom: 33%;" />

### 2.6 运行项目

模拟器启动成功后，点击右上角运行按钮，即可在模拟器看见相关页面

<img src="./attachments/50753c85025f499e8bee72a5d8ec77b4.png" alt="img" style="zoom: 33%;" />