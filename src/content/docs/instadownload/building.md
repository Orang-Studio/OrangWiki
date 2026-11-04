---
title: Building
description: Build InstaDownload from source, install it on a device and understand the repo layout.
sidebar:
  order: 2
---
How to build InstaDownload from source, install it on a device, and understand the repo layout. for how the code actually works, see the [Developer Guide](/instadownload/developer-guide/).

---

## Prerequisites

|        Tool        |      Version     |                           Notes                        |
|--------------------|------------------|--------------------------------------------------------|
|   JDK              | 17               | Required for the build. Temurin/OpenJDK is fine.       |
|   Android SDK      | API 35           | `compileSdk`/`targetSdk` = 35, `minSdk` = 24.          |
|   Android Studio   | Latest stable    | Optional but recommended - bundles the SDK and Gradle. |
|   Gradle           | Wrapper included | Use `./gradlew`; AGP is 8.9.2, Kotlin 2.0.21.          |

## Get the Source

```bash
git clone https://github.com/Orang-Studio/InstaDownload.git
cd InstaDownload
```

:::note
The Gradle project is in a subfolder. The repo holds `fastlane/`, `img/`, and the app project under `InstaDownload/`. All Gradle commands run from that app folder:
:::

```bash
cd InstaDownload   # now inside it
```

Or just open the repo in Android Studio - it will detect the project automatically.

## Project Layout

```
InstaDownload                              <- repo root
├── README.md                              <- README
├── LICENSE                                <- LICENSE
├── img/                                   <- screenshots how it looks
├── fastlane/                              <- store metadata (fdroid)
├── .github/workflows/build.yml            <- CI: build & release
└── InstaDownload/                         <- Gradle project root
    ├── gradlew / gradlew.bat              <- Windows
    ├── settings.gradle.kts                <- settings
    ├── gradle/libs.versions.toml          <- version catalog
    └── app/
        ├── build.gradle.kts               <- build settings
        └── src/main/
            ├── AndroidManifest.xml        <- Android Manifest
            ├── java/com/vakarux/instadownload/
            │   ├── MainActivity.kt        <- ui + download logics
            │   ├── InstagramDownloader.kt <- media extraction
            │   └── ui/theme/              <- theme
            └── res/                       <- icons, colors, strings
```

## Build a Debug APK
Use debug for testing and also bug hunting
From the Gradle project folder (`InstaDownload/InstaDownload`):

```bash
./gradlew assembleDebug
```

Output:

```
app/build/outputs/apk/debug/app-debug.apk
```

## Build a Release APK

Make sure that you push the release build to production with good license, without bugs, with support for all usable android versions

```bash
./gradlew assembleRelease
```

Output:

```
app/build/outputs/apk/release/app-release.apk
```

Minification is disabled (`isMinifyEnabled = false`), so no extra ProGuard configuration is needed. A local `assembleRelease` produces an **unsigned** APK

## Install on a Device

Enable **USB debugging** on your phone (Settings > Developer options), connect it, accept the authorization dialog, then:

```bash
adb install -r app/build/outputs/apk/debug/app-debug.apk
```

If `adb` isn't on your PATH, it lives in `<-Android SDK>/platform-tools/`.

No cable? Transfer the APK to your phone (e.g. via [move.oranges.lt](https://move.oranges.lt), cloud storage, or email) and open it there - allow "install from unknown sources" if prompted.

## Continuous Integration

`.github/workflows/build.yml` builds the app on every push to `main`/`master` and on version tags:

- Runs on ubuntu with JDK 17.
- Generates a signing keystore, then runs `assembleRelease` with the signing config injected via `-Pandroid.injected.signing.*` properties.
- Uploads `app-release.apk` as a build artifact (kept 30 days).
- On a tag matching `v*` it creates a GitHub Release with the signed APK attached and auto-generated notes.

## Contributing

1. Fork the repo and create a branch for your change.
2. Keep changes focused - this is a small, single-purpose app.
3. There are no automated tests (unit tests are disabled in `build.gradle.kts`); verify manually by building a debug APK and downloading a video.
4. Open a Pull Request describing what changed and how you tested it.

(We do not let big pull requests in our repo like this)

Found a bug or extraction is broken? Open a [GitHub Issue](https://github.com/Orang-Studio/InstaDownload/issues) - if it's a "methods are patched" error, paste the copied error text from the app. Thanks for your support!!