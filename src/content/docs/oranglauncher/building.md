---
title: Build Tutorial
description: Build OrangLauncher from source - C# .NET 8 on Windows or Python 3.13 on Linux.
sidebar:
  order: 3
---

OrangLauncher is built on two platform-optimized architectures:
- **Windows**: Native **C# / .NET 8 WPF** solution (`OrangLauncher.slnx` / `src/OrangLauncher/OrangLauncher.csproj`).
- **Linux**: Python 3.13+ standalone native build with **Nuitka** or **PyInstaller** (`launcher.py`).

Choose the section below corresponding to your target platform.

---

## Build from Source

### Windows (C#)

The official Windows build is a native C# WPF application designed for high performance, native Windows 11 UI theming, and multi-architecture support (`x86`, `ARM64`).

#### Prerequisites

- [Visual Studio 2022](https://visualstudio.microsoft.com/) with **.NET desktop development** workload, **OR**
- [.NET 8.0+ SDK](https://dotnet.microsoft.com/download/dotnet/8.0)
- [WiX Toolset v4/v5/v7](https://wixtoolset.org/) if building `.msi` installers

#### Method 1: Visual Studio GUI

1. Clone the repository and switch to the `Windows` branch:
   ```powershell
   git clone -b Windows https://github.com/Orang-Studio/OrangLaunch.git
   cd OrangLaunch
   ```
2. Open `OrangLauncher.slnx` (or `src/OrangLauncher/OrangLauncher.csproj`) in Visual Studio.
3. In the toolbar, set the Configuration to **Release**.
4. Select your target architecture from the dropdown:
   - `x86` (Standard 32-bit/64-bit compatibility)
   - `ARM64` (Windows on ARM)
5. Go to **Build -> Build Solution** (or press <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>B</kbd>).

#### Method 2: Command Line (`dotnet CLI`)

You can compile standalone, self-contained binaries directly from PowerShell or Command Prompt:

```powershell
# Clone the Windows branch
git clone -b Windows https://github.com/Orang-Studio/OrangLaunch.git
cd OrangLaunch

# Build and publish self-contained Release for x86
dotnet publish src/OrangLauncher -c Release -p:Platform=x86 -r win-x86 --self-contained true -o publish/x86

# Or build for Windows on ARM64
dotnet publish src/OrangLauncher -c Release -p:Platform=ARM64 -r win-arm64 --self-contained true -o publish/arm64
```

The output executable `OrangLauncher.exe` and its dependencies will be in `publish/x86/` or `publish/arm64/`.

#### Building MSI Installer with WiX

To generate the installer `.msi` package:

```powershell
dotnet build wix/installer/OrangLauncher.wixproj -c Release -p:ProductVersion=8.5.0
```

The generated MSI file will be located inside `wix/installer/bin/Release/`.

---

### Linux (Python 3.13+)

The Linux version runs on Python 3.13+ and can be run directly or compiled to a native binary using Nuitka.

#### Prerequisites

**Arch / Manjaro**:
```bash
sudo pacman -S python python-pip base-devel
```

**Debian / Ubuntu**:
```bash
sudo apt update
sudo apt install python3-dev python3-pip python3-venv build-essential
```

#### 1. Clone the Linux / Main Branch

```bash
git clone https://github.com/Orang-Studio/OrangLaunch.git
cd OrangLaunch
```

#### 2. Set Up Virtual Environment

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r packages.txt
```

#### 3. Run Directly

```bash
python launcher.py
```

---

## Building an Executable

### Linux: Compiling Standalone Binary with Nuitka

Nuitka compiles Python source into optimized native C machine code:

```bash
pip install nuitka

python -m nuitka --standalone \
            --include-data-dir=oranglauncher=oranglauncher \
            --include-package=minecraft_launcher_lib \
            --include-data-files="$MLIB_VERSION_TXT=minecraft_launcher_lib/version.txt" \
            --enable-plugin=pyside6 \
            --include-qt-plugins=sensible,multimedia \
            --noinclude-qt-translations \
            --remove-output \
            --lto=yes \
            --output-dir=build \
            launcher.py
```

The compiled binary is placed in `launcher.dist/oranglauncher`.

### Linux Alternative: Build with PyInstaller

```bash
pip install pyinstaller

pyinstaller launcher.py \
    --name=oranglauncher \
    --add-data "oranglauncher:oranglauncher" \
    --noconsole \
    --contents-directory internal
```

---

## Troubleshooting

### Windows (.NET)
- **WiX build error**: Ensure WiX .NET tools are restored: `dotnet tool install --global wix`.
- **Target runtime mismatch**: Verify that the `-r` flag (`win-x86` or `win-arm64`) matches your `-p:Platform` value.

### Linux (Python)
- **Module not found**: Verify all packages in `packages.txt` installed inside the virtual environment: `pip install -r packages.txt`.
- **Pygame / SDL audio backend issue**: Verify SDL2 initialization:
  ```bash
  python -c "import pygame; pygame.init(); print(pygame.mixer.get_init())"
  ```
  On Arch, install `sudo pacman -S libsdl2 libsdl2_mixer`.