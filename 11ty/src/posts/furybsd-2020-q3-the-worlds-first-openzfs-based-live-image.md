---
layout: layouts/blogpost.njk
tags: post
title: FuryBSD 2020-Q3 The world’s first OpenZFS based live image
url: furybsd-2020-q3-the-worlds-first-openzfs-based-live-image
author: Joe Maloney
published: 09/14/2020
image: https://www.furybsd.org/wp-content/uploads/2019/10/cd-437723_1280-1024x768.jpg
---


FuryBSD is a tool to test drive stock FreeBSD desktop images in read write mode to see if it will work for you before installing.  In order to provide the most reliable experience possible while preserving the integrity of the system the LiveCD now leverages ZFS, compression, replication, a memory file system, and reroot (pivot root).

13.0 coming next year will build on this by allowing further enhancements to this solution with the added ztd compression support.  Work is also underway with the GhostBSD development team to see if this new methodology is a good fit for that project, and can be integrated.

ISO’s can be downloaded at <a href="https://sourceforge.net/projects/furybsd/files/">SourceForge</a>

**Changes since 2020-Q2**
- 12.1-RELEASE-p9
- Xorg 1.20.8_3,1
- Nvidia-driver-440.100
- Drm-fbsd12.0-kmod-4.16.g20200221
- XFCE 4.14
- Firefox 79.0,1
- Added check for 4GB minimum system memory to boot image
- Replaced UnionFS with compressed ZFS memdisk
- Added VMSVGA support for VirtualBox 6
- Replaced poudirere-image with bsdinstall to fix freebsd-update issues after image assembly
- Removed problematic XFCE screensaver and power settings
- Improved support for touchscreen and trackpads

**Known Issues**
- The KDE plasma5 image currently has an issue where logout functionality is currently broken, and there are possibly other stability issues:
  - <https://forums.freebsd.org/threads/kde-plasma-log-out-problem.75777/>
  - <https://forums.freebsd.org/threads/reinstalled-kde5-many-issues-to-follow.76117/>
  - <https://github.com/furybsd/furybsd-livecd/issues/180>
