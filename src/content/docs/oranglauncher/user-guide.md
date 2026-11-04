---
title: User Guide
description: Install OrangLauncher, create game profiles, manage instances and install modpacks.
sidebar:
  order: 1
---
## Getting Started

OrangLauncher is a modern Minecraft launcher with built-in support for:
- Multiple game instances
- Mod loaders (Fabric, Forge, Quilt)
- Modpack imports (Modrinth, CurseForge)
- Custom themes
- Discord Rich Presence
- Multi-account support

### System Requirements

**Minimum:**
- 2GB RAM
- 1GB disk space usb/hdd
- Java 8+ (for Minecraft)
- Linux, Windows

**Recommended:**
- 4GB+ RAM
- SSD storage
- Java 25+
- Latest OS version

## Installation

### Linux (Arch AUR)

```bash
yay -S oranglauncher-bin
```

### Linux (Manual)

```bash
git clone https://github.com/adasjusk/OrangLaunch
cd OrangLaunch
pip install -r packages.txt
python launcher.py
```

### Windows

Download from [GitHub Releases](https://github.com/adasjusk/OrangLaunch/releases)

## First Launch

1. **Apply Language**: Select your language from Settings > General
2. **Add Account**: Settings > Accounts > Add Microsoft Account or Offline Account
3. **Create Instance**: Click "+" to create your first game instance
4. **Launch Game**: Select instance and click Play

## Creating Game Profiles

### Creating a New Profile

1. Open **Game Profiles** tab
2. Click **"+"** button (bottom right)
3. Enter profile details:
   - **Name**: Unique profile name
   - **Version**: Select Minecraft version (e.g., 26.3)
   - **Mod Loader**: Choose vanilla, Fabric, Forge, or Quilt
4. Click **Create**
5. Configure additional options (RAM, Java arguments) in profile editor

### Profile Settings

**Memory (RAM)**
- Default: 2GB
- Recommended: 6GB for modded Minecraft
- Maximum: Available system RAM - 2GB

**Java Arguments**
- Add custom JVM flags for performance
- Example: `-XX:+UseG1GC -XX:MaxGCPauseMillis=200`

**Game Directory**
- Custom path for saves, configs, and mods
- Default: `~/.oranglauncher/instances/[profile-id]/.minecraft`

**Resolution**
- Custom game window size

## Managing Instances

### Adding Mods

1. Go to Modding tab > Open Folder
2. Put your mods

### Managing Saves

1. Right-click profile > Open Game Folder
2. Navigate to `saves/` directory
3. Create backups before major updates

### Deleting a Profile

1. Right-click profile > Delete
2. Choose to keep or delete game files
3. Confirm deletion

### Duplicating a Profile

1. Right-click profile > Duplicate
2. New profile created with "(Copy N)" suffix
3. Modify as needed

## Installing Modpacks

### From Modrinth

1. Download `.mrpack` file from [Modrinth](https://modrinth.com)
2. In OrangLauncher: Go to game profiles click "+" > Import Modpack
3. Select `.mrpack` file
4. Wait for automatic setup (can take 2-5 minutes)
5. New instance created automatically

### From CurseForge

1. Download modpack from [CurseForge](https://www.curseforge.com/minecraft/modpacks)
2. Export as `.zip` from CurseForge Launcher
3. In OrangLauncher: Go to game profiles click "+" > Import Modpack
4. Select to import `.zip` file
5. Wait for configuration import

### OrangPack

1. Download modpack from your friend named `Name.orangpack`
2. (Btw friend has to export his pack from settings of that profile)
3. In OrangLauncher: Go to game profiles click "+" > Import .Orangpack Modpack
4. Select to import `.orangpack` file
5. Wait for configuration import

## Settings & Configuration

### General

- **Language**: Change UI language
- **Theme**: Choose between Arc, Dark Prism, or Light Mode
- **GPU**: Use DRI PRIME 1 for hybrid graphics
- **Shared Files**: Symlink resources across instances (saves disk space)

### Advanced

- **Discord RPC**: Show playing status in Discord
- **Delete Telemetry**: Remove Minecraft Game's telemetry data (this deletes the files related in /logs folder, not .log files tho)
- **Debug Mode**: Enable verbose logging
- **Progress Bar**: Show download/installation progress

### Accounts

- **Microsoft Account**: Full online multiplayer support
- **Offline Account**: Play locally without authentication

### About

- **Check Updates**: Checks for OrangLauncher updates
- **GitHub**: Open project repository

## Troubleshooting

### Game Won't Launch

**Problem**: Click play but nothing happens

**Solutions**:
1. Check Java installation: `java -version`
2. Verify sufficient RAM available
3. Check disk space (need at least 1GB free)
4. Review launcher logs in Debug mode

### Mods Not Loading

**Problem**: Mods in folder but don't appear in-game

**Solutions**:
1. Verify `.jar` filename doesn't contain special characters
2. Check mod compatibility with Minecraft version
3. Ensure correct mod loader selected (Fabric vs Forge)
4. Check for mod conflicts in launcher logs

### Modpack Import Fails

**Problem**: Cannot import `.mrpack` or `.zip` or even `.orangpack` file

**Solutions**:
1. Verify file integrity: Download file again
2. Check disk space available
3. Ensure internet connection stable
4. Try with smaller modpack first

### Performance Issues

**Problem**: Game runs slowly or stutters

**Solutions**:
1. Increase allocated RAM in profile settings
2. Disable unnecessary background programs
3. Lower Minecraft graphics settings
4. Check mod list for performance issues (use Spark)

### Cannot Add Account

**Problem**: Microsoft login fails

**Solutions**:
1. Check internet connection
2. Verify Microsoft account is correct
3. Try offline mode temporarily
4. Report issue on GitHub

## FAQ

**Q: Can I use mods with vanilla Minecraft?**  
A: No, you need a mod loader like Fabric or Forge installed in your profile.

**Q: How do I backup my saves?**  
A: Open profile folder > `saves/` > Copy entire world folder to backup location. Restore by copying back.

**Q: Can I play multiplayer with mods?**  
A: Yes, if the server supports the mod/loader you're using. Ask server admin about mod requirements.

**Q: How do I update just Minecraft without losing saves?**  
A: Create new profile with new Minecraft version. Import saves from old profile if compatible.

**Q: Can I transfer profiles between computers?**  
A: Yes, copy the `~/.oranglauncher/instances/` or in roaming appdata folder the oranglauncher folder to new computer. Or even export with OrangPacks

**Q: How do I report bugs?**  
A: Open issue on [GitHub](https://github.com/adasjusk/OrangLaunch/issues) with:
- OrangLauncher version (About > Settings)
- Minecraft version
- Mod loader and version
- Complete error message

**Q: Is OrangLauncher safe?**  
A: Yes, it's open-source and audited. All code available on GitHub. Never modify or auto-update from untrusted sources.

---