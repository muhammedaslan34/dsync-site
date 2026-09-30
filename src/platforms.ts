// The downloads' logos and order; their text is in src/i18n.
import { siAndroid, siApple, siArchlinux, siLinux } from 'simple-icons'

export type PlatformKey = 'windows' | 'mac' | 'arch' | 'linux' | 'android' | 'ios'

// Simple Icons doesn't carry Microsoft's logos; this is the four panes.
const windowsPath = 'M0 3.4 9.8 2v9.4H0zM11 1.8 24 0v11.4H11zM0 12.6h9.8V22L0 20.6zM11 12.6h13V24l-13-1.8z'

export const platformIcons: Record<PlatformKey, string> = {
  windows: windowsPath,
  mac: siApple.path,
  arch: siArchlinux.path,
  linux: siLinux.path,
  android: siAndroid.path,
  ios: siApple.path,
}

export const order: PlatformKey[] = ['windows', 'mac', 'arch', 'linux', 'android', 'ios']
