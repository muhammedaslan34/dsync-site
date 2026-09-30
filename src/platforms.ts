// Everything the page says about each download, shared by the buttons,
// the download cards and the download dialog.
import { siAndroid, siApple, siArchlinux, siLinux } from 'simple-icons'

export type PlatformKey = 'windows' | 'mac' | 'arch' | 'linux' | 'android' | 'ios'

// Simple Icons doesn't carry Microsoft's logos; this is the four panes.
const windowsPath = 'M0 3.4 9.8 2v9.4H0zM11 1.8 24 0v11.4H11zM0 12.6h9.8V22L0 20.6zM11 12.6h13V24l-13-1.8z'

export const platforms: Record<PlatformKey, { name: string; kind: string; icon: string; note: string; tip: string }> = {
  windows: {
    name: 'Windows',
    kind: 'Installer',
    icon: windowsPath,
    note: 'Windows 10 and 11. Sets up the firewall for you.',
    tip: 'If Windows says "Unknown publisher" or "Windows protected your PC", click More info, then Run anyway. The installer isn\'t signed yet.',
  },
  mac: {
    name: 'macOS',
    kind: 'Disk image',
    icon: siApple.path,
    note: 'Apple Silicon and Intel. First time: right-click → Open.',
    tip: 'Open the disk image and drag dsync into Applications. The first time, right-click dsync and choose Open.',
  },
  arch: {
    name: 'Arch Linux',
    kind: 'Package',
    icon: siArchlinux.path,
    note: 'Install with sudo pacman -U. Also CachyOS, Manjaro.',
    tip: 'Install it with: sudo pacman -U dsync-*.pkg.tar.zst',
  },
  linux: {
    name: 'Linux',
    kind: 'Archive',
    icon: siLinux.path,
    note: 'Unpack and run ./install.sh. Needs WebKitGTK 4.1.',
    tip: 'Unpack it and run ./install.sh. It installs for your user, no root needed.',
  },
  android: {
    name: 'Android',
    kind: 'APK',
    icon: siAndroid.path,
    note: 'Open it on your phone and allow installing from your browser.',
    tip: 'Open the downloaded file on your phone. Android asks once to allow installing apps from your browser.',
  },
  ios: {
    name: 'iPhone',
    kind: 'Unsigned app',
    icon: siApple.path,
    note: 'Install with AltStore or Sideloadly using your Apple ID. iOS 16.4+.',
    tip: 'Install the .ipa with AltStore or Sideloadly using your Apple ID. Turn on Developer Mode in Settings → Privacy & Security first.',
  },
}

export const order: PlatformKey[] = ['windows', 'mac', 'arch', 'linux', 'android', 'ios']
