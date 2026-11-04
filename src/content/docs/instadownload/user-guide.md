---
title: User Guide
description: Install InstaDownload and download Instagram reels, posts and photos.
sidebar:
  order: 1
---
Everything you need to download Instagram reels and photos with InstaDownload. If you just want to grab a video, jump to [How to Use](#how-to-use-2-methods).

## What Is InstaDownload?

InstaDownload is a free Android app that saves public Instagram content to your phone:

- Reels & videos            > saved as .mp4
- Photos                    > saved as .jpg
- Carousels (multi images)  > every image is saved

Everything runs on your device. There's no account, no ads, and no tracking - you paste a link, tap Download, and the file in your Downloads folder.

## Installation

InstaDownload is distributed as APK.

1. Go to the [Releases page](https://github.com/Orang-Studio/InstaDownload/releases).
2. Download the latest app-release.apk.
3. Open the file on your phone. If prompted, allow "Install from unknown sources" for your browser or file manager.
4. Tap Install, then open InstaDownload.

Requirements: Android 7.0 or newer from 2016 y. and higher.

:::tip
Prefer to build it yourself? See the [Building](/instadownload/building/) guide.
:::

## How to Use, 2 methods

### Method 1 - Paste a link

1. Open the Instagram app or website and find the reel/post you want.
2. Tap the **Share** icon > **Copy link**.
3. Open **InstaDownload**.
4. Tap the **paste icon** in the text field (or long press and paste manually).
5. Tap **Download**.

The app fetches the media, saves it, and gives you a short vibration when it's done.

### Method 2 - Share directly from Instagram

You don't even need to open InstaDownload:

1. On the reel/post tap **Share** > **Share to...**
2. Pick **InstaDownload** from the share dialog.
3. The link is filled in automatically - just tap **Download**.

## Where Your Files Go

They go to your predefined location or to Downloads folder in your phone.

Downloads are saved to 
- Videos: `Download/instagram_video_<timestamp>.mp4`
- Images: `Download/instagram_image_<timestamp>.jpg`

You can open them from any file manager, your Gallery app, or the Downloads app. Because they're saved to shared storage, they stay on your device even if you uninstall InstaDownload.

## Supported Links

InstaDownload accepts public Instagram links of these types:

- Reels - `https://www.instagram.com/reel/<shortcode>/`
- Posts (photos & carousels) - `https://www.instagram.com/p/<shortcode>/`
- IGTV videos - `https://www.instagram.com/tv/<shortcode>/`

## Permissions
InstaDownload only asks for what it needs:

|     Permission    |                          Why?                          |
|-------------------|--------------------------------------------------------|
| **Internet**      | To fetch the media from Instagram                      |
| **Storage**       | To save files - only requested on Android 9 and below. |
| **Notifications** | **Optional** - download alerts                         |
| **Vibrate**       | Haptic feedback when a download starts and finishes    |

## Troubleshooting

**"Not a valid Instagram post or reel URL"**\
The link isn't a `reel`, `p`, or `tv` link. Make sure you copied the full URL (it should start with `https://www.instagram.com/`).

**"Latest methods are patched, please open an issue"**\
Instagram occasionally changes how their pages work, which can temporarily break extraction. Tap the **copy** button on the error card and [open an issue](https://github.com/Orang-Studio/InstaDownload/issues) with the details pasted in - that helps get it fixed fast.

**The download fails or nothing happens**
- Check your internet connection.
- Confirm the post is **public** - private content can't be downloaded.
- Try again in a moment Instagram sometimes rate limits requests.

**I can't find the downloaded file**\
Look in your Downloads folder. Files are named `instagram_video_...` or `instagram_image_...`.

**Nothing installs / "app not installed"**\
Make sure you allowed installation from unknown sources for the app you're installing from, and that you're on Android 7.0 or newer.

## FAQ

**Is InstaDownload free?**\
Yes, completely free and open source under the GPLv3 license.

**Do I need an Instagram account?**\
No. There's no login at all. Except Stories branch

**Can it download private posts?**\
No - only public reels, posts, stories (other branch) and photos.

**Does it work on multiple images (carousels)?**\
Yes. Every image in a carousel post is saved.

**Does it collect any of my data?**\
No. There are no ads, no tracking, and no analytics. The only network requests go to Instagram to fetch the media you asked for.

**Is this an official Instagram app?**\
No. It's an independent open-source project and isn't affiliated with Instagram or Meta.

Need something that is not here? Check the [Home page](/instadownload/) or open a [GitHub Issue feature request](https://github.com/Orang-Studio/InstaDownload/issues).