---
title: OrangLaunch
description: The official Orang Studio Minecraft and application launcher for Linux, Windows.
---

**OrangLaunch** is a modular, modern, and highly customizable Minecraft launcher developed by **Orang-Studio**. It delivers a lightweight, fast, and fully scriptable experience supporting all major mod loaders, Microsoft and offline authentication, unified profile management, and custom themes.

Available on **Linux** (native / AUR), **Windows** (x86, x64, ARM).

---

## Screenshots

### Linux Interface

<div align="center">
  <img src="/img/software/oranglaunch-linux.png" alt="OrangLauncher Linux" style="border-radius: 8px; max-width: 100%; box-shadow: 0 4px 12px rgba(0,0,0,0.3);" />
</div>

### Windows Interface

<div align="center">
  <img src="/img/software/oranglaunch-windows.png" alt="OrangLauncher Windows" style="border-radius: 8px; max-width: 100%; box-shadow: 0 4px 12px rgba(0,0,0,0.3);" />
</div>

---

## Key Capabilities

### 1. Dual Authentication
- **Microsoft / Mojang**: Secure OAuth authentication via localhost redirect and Microsoft official login. Tokens are exchanged directly with Microsoft servers to guarantee account safety.
- **Offline Mode**: Quick offline profile launch for singleplayer and cracked servers (`offline-mode=false`).

### 2. Modding Panel & Modrinth Support
- Direct `.mrpack` modpack installation and automatic extraction.
- Automatic folder structuring and version-aware compatibility detection.
- Complete support for **Fabric**, **Forge**, **NeoForge**, **Quilt**, and **OptiFine**.

### 3. Profiles & Instance System
- Create and switch between isolated game instances.
- Configure custom Java runtime paths, memory allocation (RAM minimum/maximum), JVM startup arguments, and game resolutions.

### 4. Resource Packs & Shader Management
- Visual interface to enable, disable, and order resource packs.
- Shaderpack switching and real-time configuration.

### 5. News Hub & System Settings
- Live feed of Minecraft news, Orang Studio announcements, and community updates.
- Customizable launcher appearance with built-in themes (Arc, Dark Prism, Light) and custom background music support.
- Multi-language localization with community-driven translations.

---

## Installation

### Linux (Arch Linux / Manjaro)

Install directly from the Arch User Repository (AUR):

```bash
yay -Syu oranglauncher-bin
```

*Or install the source-compiling package:*

```bash
yay -Syu oranglauncher
```

Portable archive:
Download `launcher_x64_linux_8.5.tar.gz` from the [GitHub Releases](https://github.com/Orang-Studio/OrangLaunch/releases).

### Windows (10/11 x86, x64, ARM32/ARM64)

- **MSI Installer**: `OrangLauncher_Windows_x.x.x.msi`
- **Portable ZIP**: `launcher_x86_win_x.x.x.zip` or `launcher_arms_win_x.x.x.zip`

---

## Build from Source

For a full step-by-step developer build guide covering Nuitka, PyInstaller, and Visual Studio (.NET), see the [Build Tutorial](/oranglauncher/building/).

---

## Project Specifications

- **Platforms**: Linux, Windows, macOS
- **Backend**: Python 3.14+ / C# .NET WPF on Windows
- **License**: GNU General Public License v3.0 (GPL-3.0)
- **Repository**: [GitHub - Orang-Studio/OrangLaunch](https://github.com/Orang-Studio/OrangLaunch)