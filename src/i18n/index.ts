import en, { type Dict } from './en'
import ar from './ar'
import tr from './tr'
import fr from './fr'

export type Lang = 'en' | 'ar' | 'tr' | 'fr'
export const langs: { code: Lang; name: string; dir: 'ltr' | 'rtl' }[] = [
  { code: 'en', name: 'English', dir: 'ltr' },
  { code: 'ar', name: 'العربية', dir: 'rtl' },
  { code: 'tr', name: 'Türkçe', dir: 'ltr' },
  { code: 'fr', name: 'Français', dir: 'ltr' },
]
export const dicts: Record<Lang, Dict> = { en, ar, tr, fr }

// fill('Download for {name}', { name: 'Windows' }) -> 'Download for Windows'
export function fill(s: string, vars: Record<string, string>) {
  return s.replace(/\{(\w+)\}/g, (m, k) => vars[k] ?? m)
}

// The page's path for a language: English at the root, others under /ar/ etc.
export function pathFor(lang: Lang) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '')
  return lang === 'en' ? `${base}/` : `${base}/${lang}/`
}
