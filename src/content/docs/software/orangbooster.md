---
title: OrangBooster
description: Modern Windows 11 debloater, optimizer, and privacy enhancement utility by OrangStudio.
---

<div align="center">
  <img src="/img/software/orangbooster.png" alt="Orange" width="140" height="140" style="margin-bottom: 1rem;" />
</div>

**OrangBooster** is an open-source Windows 11 debloater and system optimizer created by **adasjusk**. It automates essential post-install tasks, increases user privacy, cleans telemetry, removes bloatware, and tunes system responsiveness.

Designed specifically for Windows 11 (including 26H2 and modern LTSC builds).

---

## Key Features

- **Telemetry & Diagnostic Purge**: Completely stops Windows Telemetry (`diagtrack`, `wermgr`), diagnostic logging, customer experience feedback, and tailored ads.
- **Privacy Hardening**: Disables Activity Feed history (`EnableActivityFeed = 0`, `PublishUserActivities = 0`), Location Tracking, Advertising ID, and Lock Screen tips.
- **Debloat & App Removal**: One-click removal of pre-installed consumer UWP/AppX packages, sponsored apps, Cortana, OneDrive, and Microsoft Edge (safe removal script).
- **Desktop & UI Enhancements**:
  - Restores classic compact context menus (disables Windows 11 cascading right-click delay).
  - Toggles End Task shortcut directly on taskbar items.
  - Hides Copilot/Windows AI and removes Home and Gallery from File Explorer.
  - Dark mode and file extension display toggles.
- **Performance Tuning**:
  - Disables unnecessary background apps and scheduled tasks.
  - Disables Delivery Optimization bandwidth sharing.
  - Cleans up hibernation caches (`powercfg -h off`) and frees storage.
- **Modular Action Catalog**: Select specific tweaks from the GUI or run pre-configured safe task profiles.

---

## Installation & Usage

### Method 1: PowerShell (Recommended)

Run directly via Windows Terminal or PowerShell (**Run as Administrator**):

```powershell
irm oranges.lt/run.ps1 | iex
```

*Fallback URL if the short domain is unavailable:*

```powershell
irm raw.githubusercontent.com/Orang-Studio/OrangBooster/main/run.ps1 | iex
```

### Method 2: Standalone Executable

1. Download the latest compiled release (`orangbooster.exe`) from the [GitHub Releases](https://github.com/Orang-Studio/OrangBooster/releases).
2. Right-click `orangbooster.exe` and select **Run as Administrator**.
3. Choose the debloating tweaks or apps to remove and apply changes.

### Method 3: CLI Mode

If you prefer headless or terminal-based execution:

```powershell
irm raw.githubusercontent.com/Orang-Studio/OrangBooster/main/cli.ps1 | iex
```

---

## Technical Architecture

OrangBooster is written in **C# / XAML (.NET 8/9)** with PowerShell runner isolation, and embedded administrative elevation:

| Component           | Responsibility                                                         |
| :------------------ | :--------------------------------------------------------------------- |
| `BoosterCatalog.cs` | Contains all tweak card definitions, registry actions, and safety tags |
| `DebloaterTasks.cs` | Orchestrates AppX package uninstalls and debloat arguments             |
| `ScriptRunner.cs`   | Manages safe PowerShell execution with execution policy bypass         |
| `Elevation.cs`      | Detects and prompts for `UAC / Administrator` permissions automatically|
| `JobQueue.cs`       | Asynchronous multi-step task execution with live logging output        |


## Project Information

- **License**: GNU General Public License v3.0 (GPL-3.0)
- **Target OS**: Windows 11 (Supports Windows 11 LTSC; Windows 10 a bit)
- **Repository**: [GitHub - Orang-Studio/OrangBooster](https://github.com/Orang-Studio/OrangBooster)
- **Credits & Acknowledgments**:
  - Developed with care by **adasjusk**
  - Video review and coverage by [K0](https://github.com/eliasamurphy) on [YouTube](https://www.youtube.com/watch?v=1uGm6VImF-s)
  - Contributions and inspiration from [vakarux](https://github.com/vakarux12), [Chris Titus Tech](https://github.com/ChrisTitusTech), and [Raphire](https://github.com/Raphire)