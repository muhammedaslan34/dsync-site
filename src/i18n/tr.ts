import type { Dict } from './en'

const tr: Dict = {
  meta: {
    title: 'dsync — tüm cihazların, tek bir sohbette',
    description:
      'Bilgisayarların ve telefonun arasında her boyutta metin, dosya ve klasör gönder, panoyu paylaş ve diğer bilgisayarlarını kontrol et. Şifreli, kendi ağında.',
  },
  nav: { features: 'Özellikler', remote: 'Uzaktan kontrol', download: 'İndir', star: 'Yıldızla', language: 'Dil' },
  hero: {
    version: 'Sürüm {v}',
    latest: 'En son sürüm',
    title1: 'Tüm cihazların,',
    title2: 'tek bir sohbette.',
    lead: 'Bilgisayarların ve telefonun arasında her boyutta metin, dosya ve klasör gönder, panoyu paylaş ve başka bir ekranın kontrolünü al. Doğrudan kendi ağın üzerinden, uçtan uca şifreli.',
    download: "dsync'i indir",
    downloadFor: '{name} için indir',
    androidApp: 'Android uygulaması',
    iphoneApp: 'iPhone uygulaması',
    alsoHtml: '<a href="#download">Diğer sistemler</a> için de var.',
  },
  alt: {
    hero: "Linux'ta dsync, bir Windows bilgisayarla konuşuyor",
    dark: 'Karanlık modda, dosyalar ve devam eden bir aktarımla bir sohbet',
    control: 'Uzaktan kontrol seçenekleri: ekran, boyut ve kalite',
    phoneList: 'Telefonda eşleştirilmiş bilgisayarlar',
    phoneChat: 'Telefonda, kaydedilecek bir dosya içeren bir sohbet',
    qr: 'Bilgisayarın telefonu bağlamak için gösterdiği QR kod',
    settings: 'dsync ayarları: paylaşılan pano ve arka planda çalışma',
  },
  send: {
    eyebrow: 'Her şeyi gönder',
    title: 'Metin, dosya ve klasör. Her boyutta.',
    text: 'Her cihaz bir sohbettir. Bir komut yaz, bir ekran görüntüsü yapıştır ya da 200 fotoğraflık bir klasörü sürükle bırak; diğer taraftaki İndirilenler klasörüne ulaşır.',
    points: [
      "Boyut sınırı yok. 6 GB'lık bir ISO, ağının tam hızında gider.",
      'Wi-Fi koparsa aktarım kaldığı yerden devam eder.',
      'Her dosya ulaştığında SHA-256 ile doğrulanır.',
    ],
  },
  remote: {
    eyebrow: 'Uzaktan kontrol',
    title: 'Başka bir bilgisayarı buradan kullan.',
    text: "Diğer ekranı bir pencerede ya da tam ekranda, kendi fare ve klavyenle aç. dsync, Sunshine ve Moonlight'ı senin için kurar; görüntü gerçek iş için yeterince net ve hızlıdır.",
    points: [
      'Hangi ekranı, ne kadar büyük ve ne kadar net istediğini seç.',
      'Masaüstü ya da oyun faresi, kendi işaretçi hızıyla.',
      'İlk seferde kendi kendine eşleşir; odanın öbür ucunda PIN yazmak yok.',
    ],
  },
  phone: {
    eyebrow: 'Telefon uygulaması',
    title: 'Telefonun da aramıza katılıyor.',
    text: 'Telefonundan bilgisayara fotoğraf ve dosya gönder ya da bilgisayarın sana gönderdiklerini al. Telefonunun panosunu yapıştır, bir bağlantıyı geri kopyala, istediğin dosyayı kaydet ya da paylaş. İki telefon doğrudan da konuşabilir: biri QR kod gösterir, diğeri tarar.',
    noteHtml:
      'iPhone\'da dosyayı Apple Kimliğinle <a href="https://altstore.io">AltStore</a> ya da <a href="https://sideloadly.io">Sideloadly</a> kullanarak yükle (iOS 16.4 veya üstü).',
  },
  private: {
    eyebrow: 'Gizlilik esaslı',
    title: 'Bir kez eşleştir. Her zaman şifreli.',
    text: 'Cihazlar ağında birbirini bulur. İki ekranda da aynı kodun göründüğünü kontrol ederek eşleştir ya da telefonunla bir QR kod tara. Sonrasında aralarındaki her şey şifrelenir ve hiçbir şey bir sunucudan geçmez.',
    points: [
      'Bilgisayarlar arasında sabitlenmiş anahtarlarla TLS 1.3.',
      'Telefon ile bilgisayar arasında XSalsa20-Poly1305.',
      'Evden uzaktayken Tailscale üzerinden çalışır.',
    ],
  },
  tray: {
    eyebrow: 'Ayağına dolanmaz',
    title: 'Pano, sistem tepsisi ve güncellemeler.',
    text: "Bir bilgisayarda kopyala, diğerinde yapıştır; resimler dahil. dsync sistem tepsisinde çalışır, bilgisayarınla birlikte açılır ve tek tıkla GitHub'dan kendini günceller.",
    points: [
      'İstediğin zaman kapatabileceğin ortak pano.',
      'Bir sohbeti ya da tüm geçmişi dilediğinde temizle.',
      'Güncellemeler, sürümün sağlama toplamlarıyla doğrulanır.',
    ],
  },
  anim: { other: 'Ofis PC', self: 'Bu bilgisayar', screen: 'ekran', input: 'fare ve klavye', label: 'Bu bilgisayar başka bir bilgisayarın ekranını gösteriyor ve kontrol ediyor' },
  download: {
    title: 'İndir',
    lead: '{version}. Ücretsiz ve yalnızca kendi cihazlarınla konuşur.',
    forYou: 'Bu cihaz için',
    all: 'Tüm dosyalar ve sürüm notları →',
  },
  modal: {
    title: "{name} için dsync'i indir",
    ask: "dsync ücretsiz ve tek bir kişi tarafından geliştiriliyor. İşine yarıyorsa GitHub'da bir yıldız, başkalarının da onu bulmasına yardım eder.",
    star: "GitHub'da yıldızla",
    go: 'İndir',
    done: 'İndirme başladı. Teşekkürler!',
    again: 'Tekrar indir',
    close: 'Kapat',
  },
  footer: { source: "GitHub'da kaynak kodu" },
  platforms: {
    windows: {
      name: 'Windows',
      kind: 'Kurulum dosyası',
      note: 'Windows 10 ve 11. Güvenlik duvarını senin için ayarlar.',
      tip: '"Bilinmeyen yayımcı" ya da "Windows bilgisayarınızı korudu" uyarısı çıkarsa "Ek bilgi"ye, ardından "Yine de çalıştır"a tıkla. Kurulum dosyası henüz imzalı değil.',
    },
    mac: {
      name: 'macOS',
      kind: 'Disk görüntüsü',
      note: 'Apple Silicon ve Intel. İlk seferde: sağ tık → Aç.',
      tip: "Disk görüntüsünü aç ve dsync'i Uygulamalar klasörüne sürükle. İlk seferde dsync'e sağ tıklayıp Aç'ı seç.",
    },
    arch: {
      name: 'Arch Linux',
      kind: 'Paket',
      note: "sudo pacman -U ile kur. CachyOS ve Manjaro'da da çalışır.",
      tip: 'Şu komutla kur: sudo pacman -U dsync-*.pkg.tar.zst',
    },
    linux: {
      name: 'Linux',
      kind: 'Arşiv',
      note: 'Arşivi aç ve ./install.sh çalıştır. WebKitGTK 4.1 gerekir.',
      tip: 'Arşivi aç ve ./install.sh çalıştır. Yalnızca kendi kullanıcın için kurar, root gerekmez.',
    },
    android: {
      name: 'Android',
      kind: 'APK',
      note: 'Telefonunda aç ve tarayıcından yüklemeye izin ver.',
      tip: 'İndirilen dosyayı telefonunda aç. Android, tarayıcından uygulama yüklemek için bir kez izin ister.',
    },
    ios: {
      name: 'iPhone',
      kind: 'İmzasız uygulama',
      note: 'Apple Kimliğinle AltStore ya da Sideloadly kullanarak yükle. iOS 16.4+.',
      tip: ".ipa dosyasını Apple Kimliğinle AltStore ya da Sideloadly kullanarak yükle. Önce Ayarlar → Gizlilik ve Güvenlik'ten Geliştirici Modu'nu aç.",
    },
  },
}

export default tr
