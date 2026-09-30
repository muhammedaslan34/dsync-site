// The download links come from the latest GitHub release, read when the
// site is built. The site is rebuilt after each release's builds finish
// (.github/workflows/site.yml), so the links always point at real files.

const REPO = 'muhammedaslan34/dsync'
export const releasesUrl = `https://github.com/${REPO}/releases/latest`
export const repoUrl = `https://github.com/${REPO}`

export type Download = { href: string; file?: string; size?: string }
export type Release = {
  version: string
  windows: Download
  linux: Download
  arch: Download
  mac: Download
  android: Download
  ios: Download
}

const patterns: Record<Exclude<keyof Release, 'version'>, RegExp> = {
  windows: /-windows-amd64\.exe$/,
  linux: /-linux-x86_64\.tar\.gz$/,
  arch: /\.pkg\.tar\.zst$/,
  mac: /-macos-universal\.dmg$/,
  android: /-android\.apk$/,
  ios: /-ios-unsigned\.ipa$/,
}

function size(bytes: number) {
  return bytes >= 1e6 ? `${Math.round(bytes / 1e6)} MB` : `${Math.round(bytes / 1e3)} KB`
}

type Asset = { name: string; size: number; browser_download_url: string }

// The repo's star count, for the GitHub buttons (0 if GitHub can't be reached).
export async function starCount(): Promise<number> {
  try {
    const res = await fetch(`https://api.github.com/repos/${REPO}`, { headers: apiHeaders() })
    return res.ok ? ((await res.json()).stargazers_count ?? 0) : 0
  } catch {
    return 0
  }
}

function apiHeaders() {
  const headers: Record<string, string> = { Accept: 'application/vnd.github+json' }
  if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`
  return headers
}

export async function latestRelease(): Promise<Release> {
  let tag = ''
  let assets: Asset[] = []
  try {
    const res = await fetch(`https://api.github.com/repos/${REPO}/releases/latest`, { headers: apiHeaders() })
    if (res.ok) {
      const body = await res.json()
      tag = body.tag_name ?? ''
      assets = body.assets ?? []
    } else {
      console.warn(`GitHub answered ${res.status}; download links point at the releases page`)
    }
  } catch (e) {
    console.warn(`Could not read the latest release (${e}); download links point at the releases page`)
  }
  const out = { version: tag.replace(/^v/, '') } as Release
  for (const [key, re] of Object.entries(patterns)) {
    const a = assets.find((x) => re.test(x.name))
    out[key as keyof typeof patterns] = a
      ? { href: a.browser_download_url, file: a.name, size: size(a.size) }
      : { href: releasesUrl }
  }
  return out
}
