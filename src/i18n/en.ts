// English, the source for the other languages. Strings marked "html" may
// contain links; the rest are plain text. {v}, {name} and {version} are
// filled in by the page.
const en = {
  meta: {
    title: 'dsync — all your devices, one conversation',
    description:
      'Send text, files and folders of any size between your computers and phone, share the clipboard, and control your other computers. Encrypted, on your own network.',
  },
  nav: { features: 'Features', remote: 'Remote control', download: 'Download', star: 'Star', language: 'Language' },
  hero: {
    version: 'Version {v}',
    latest: 'Latest version',
    title1: 'All your devices,',
    title2: 'one conversation.',
    lead: 'Send text, files and whole folders of any size between your computers and your phone, share the clipboard, and take control of another screen. Straight across your own network, encrypted end to end.',
    download: 'Download dsync',
    downloadFor: 'Download for {name}',
    androidApp: 'Android app',
    iphoneApp: 'iPhone app',
    alsoHtml: 'Also for <a href="#download">other systems</a>.',
  },
  alt: {
    hero: 'dsync on Linux, talking with a Windows PC',
    dark: 'A conversation in dark mode, with files and a transfer in progress',
    control: 'Remote control options: screen, size and quality',
    phoneList: 'Paired computers on the phone',
    phoneChat: 'A conversation on the phone with a file to save',
    qr: 'The QR code a computer shows to connect a phone',
    settings: 'dsync settings: shared clipboard and running in the background',
  },
  send: {
    eyebrow: 'Send anything',
    title: 'Text, files and folders. Any size.',
    text: 'Every device is a conversation. Type a command, paste a screenshot, or drop a folder of 200 photos; it arrives in your Downloads folder on the other side.',
    points: [
      'No size limit. A 6 GB ISO moves at full network speed.',
      'Transfers pick up where they stopped if Wi-Fi drops.',
      'Every file is checked with SHA-256 when it lands.',
    ],
  },
  remote: {
    eyebrow: 'Remote control',
    title: 'Use another computer from this one.',
    text: "Open the other screen in a window or full screen, with your own mouse and keyboard. dsync sets up Sunshine and Moonlight for you, so it's sharp and fast enough for real work.",
    points: [
      'Choose which screen, how big, and how sharp.',
      'Desktop or game mouse, with its own pointer speed.',
      'Pairs itself the first time; no PINs to type across the room.',
    ],
  },
  phone: {
    eyebrow: 'Phone app',
    title: 'Your phone joins in.',
    text: "Send photos and files from your phone to a computer, or pick up what a computer sent you. Paste your phone's clipboard, copy a link back, save or share any file.",
    noteHtml:
      'On iPhone, install the file with <a href="https://altstore.io">AltStore</a> or <a href="https://sideloadly.io">Sideloadly</a> using your Apple ID (iOS 16.4 or later).',
  },
  private: {
    eyebrow: 'Private by design',
    title: 'Pair once. Encrypted always.',
    text: 'Devices find each other on your network. Pair them by checking that both screens show the same code, or scan a QR code with your phone. After that, everything between them is encrypted, and nothing goes through a server.',
    points: [
      'TLS 1.3 with pinned keys between computers.',
      'XSalsa20-Poly1305 between phone and computer.',
      "Works over Tailscale when you're away from home.",
    ],
  },
  tray: {
    eyebrow: 'Stays out of the way',
    title: 'Clipboard, tray and updates.',
    text: 'Copy on one computer and paste on the other, including images. dsync lives in the tray, starts with your computer, and updates itself from GitHub with one click.',
    points: [
      'Shared clipboard you can turn off at any time.',
      'Clear a conversation or all history when you like.',
      "Updates are checked against the release's checksums.",
    ],
  },
  anim: { other: 'Office PC', self: 'This computer', screen: 'screen', input: 'mouse & keys', label: "This computer showing and controlling another computer's screen" },
  download: {
    title: 'Download',
    lead: '{version}. Free, and it only talks to your own devices.',
    forYou: 'For this device',
    all: 'All files and release notes →',
  },
  modal: {
    title: 'Download dsync for {name}',
    ask: "dsync is free and made by one person. If it's useful to you, a star on GitHub helps other people find it.",
    star: 'Star on GitHub',
    go: 'Download',
    done: 'Your download has started. Thank you!',
    again: 'Download again',
    close: 'Close',
  },
  footer: { source: 'Source on GitHub' },
  platforms: {
    windows: {
      name: 'Windows',
      kind: 'Installer',
      note: 'Windows 10 and 11. Sets up the firewall for you.',
      tip: 'If Windows says "Unknown publisher" or "Windows protected your PC", click More info, then Run anyway. The installer isn\'t signed yet.',
    },
    mac: {
      name: 'macOS',
      kind: 'Disk image',
      note: 'Apple Silicon and Intel. First time: right-click → Open.',
      tip: 'Open the disk image and drag dsync into Applications. The first time, right-click dsync and choose Open.',
    },
    arch: {
      name: 'Arch Linux',
      kind: 'Package',
      note: 'Install with sudo pacman -U. Also CachyOS, Manjaro.',
      tip: 'Install it with: sudo pacman -U dsync-*.pkg.tar.zst',
    },
    linux: {
      name: 'Linux',
      kind: 'Archive',
      note: 'Unpack and run ./install.sh. Needs WebKitGTK 4.1.',
      tip: 'Unpack it and run ./install.sh. It installs for your user, no root needed.',
    },
    android: {
      name: 'Android',
      kind: 'APK',
      note: 'Open it on your phone and allow installing from your browser.',
      tip: 'Open the downloaded file on your phone. Android asks once to allow installing apps from your browser.',
    },
    ios: {
      name: 'iPhone',
      kind: 'Unsigned app',
      note: 'Install with AltStore or Sideloadly using your Apple ID. iOS 16.4+.',
      tip: 'Install the .ipa with AltStore or Sideloadly using your Apple ID. Turn on Developer Mode in Settings → Privacy & Security first.',
    },
  },
}

export default en
export type Dict = typeof en
