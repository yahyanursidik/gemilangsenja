// Konten diambil dari https://tsl.my.id/program/gemilang-senja/
const WA_NUMBER = '62895377710900';
const wa = (text: string) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;

export const contact = {
  waDaftar: wa('Assalamu’alaikum, saya ingin mendaftar program TSL Gemilang Senja.'),
  waTanya: wa('Assalamu’alaikum, saya ingin bertanya tentang program TSL Gemilang Senja.'),
  phoneDisplay: '0895 3777 10900',
  phoneHref: 'tel:+62895377710900',
  email: 'salam@tarbiyahsunnahlearning.or.id',
};

export const program = {
  name: 'TSL Gemilang Senja',
  lead:
    'Pembinaan Islam holistik untuk usia 45 tahun ke atas: diniyyah, interaksi dengan Al-Qur’an, tazkiyatun nafs, serta kesehatan fisik dan spiritual.',
  facts: [
    { label: 'Usia', value: '45 tahun ke atas' },
    { label: 'Kajian reguler', value: '2× per pekan, 60 menit' },
    { label: 'Private Al-Qur’an', value: '3× per pekan, 15 menit' },
    { label: 'Pendaftaran', value: 'Melalui admin' },
  ],
  summary: [
    'TSL Gemilang Senja adalah program pembinaan Islam untuk usia 45 tahun ke atas. Fokusnya pada pembelajaran diniyyah, interaksi dengan Al-Qur’an, tazkiyatun nafs, serta kesehatan fisik dan spiritual.',
    'Program ini dirancang sebagai pembinaan yang menyeluruh dan berkelanjutan, bukan semata kursus keterampilan Al-Qur’an atau Bahasa Arab.',
  ],
  audience: [
    'Muslim dan muslimah usia 45 tahun ke atas yang ingin terus belajar.',
    'Keluarga yang ingin mendampingi orang tua dalam pembinaan Islam yang hangat dan fleksibel.',
  ],
  goals: [
    'Pemahaman aqidah dan fiqih ibadah yang menguatkan amalan harian.',
    'Interaksi yang rutin dan terbimbing dengan Al-Qur’an.',
    'Penyucian jiwa (tazkiyatun nafs) sebagai bekal menjalani usia matang.',
    'Perhatian pada kesehatan fisik, termasuk materi fisioterapi.',
  ],
  tracks: [
    {
      id: 'reguler',
      name: 'Reguler',
      tags: [
        { icon: 'online', text: 'Daring' },
        { icon: 'calendar', text: 'Setiap pekan' },
      ],
      summary: 'Belajar dari rumah dengan jadwal tetap setiap pekan.',
      details: [
        { label: 'Kajian diniyyah', value: '2× per pekan, 60 menit per pertemuan' },
        { label: 'Private Al-Qur’an', value: '3× per pekan, 15 menit per sesi' },
      ],
    },
    {
      id: 'intensif',
      name: 'Intensif',
      tags: [
        { icon: 'people', text: 'Tatap muka' },
        { icon: 'home', text: 'Full board' },
      ],
      summary: 'Pengalaman belajar yang lebih mendalam, bersama dan menginap.',
      details: [{ label: 'Durasi', value: '3 hari 2 malam' }],
    },
    {
      id: 'seasonal',
      name: 'Seasonal',
      tags: [
        { icon: 'online', text: 'Daring' },
        { icon: 'moon', text: 'Ramadan' },
      ],
      summary: 'Program khusus untuk mengisi bulan Ramadan.',
      details: [{ label: 'Durasi', value: 'Sekitar 1 bulan' }],
    },
  ],
  methods: [
    {
      icon: 'online',
      title: 'Kajian diniyyah daring',
      text: 'Kajian terjadwal dengan durasi 60 menit per pertemuan.',
    },
    {
      icon: 'book',
      title: 'Private Al-Qur’an',
      text: 'Sesi individual 15 menit, tiga kali setiap pekan pada jalur Reguler.',
    },
    {
      icon: 'people',
      title: 'Tatap muka',
      text: 'Jalur Intensif full board untuk pengalaman belajar yang lebih mendalam.',
    },
  ],
  materials: [
    { title: 'Aqidah', text: 'Dasar keyakinan seorang muslim.' },
    { title: 'Fiqih ibadah', text: 'Tata cara ibadah untuk amalan harian.' },
    { title: 'Tazkiyatun nafs', text: 'Penyucian jiwa sebagai bekal usia matang.' },
    { title: 'Al-Qur’an', text: 'Interaksi rutin dan terbimbing dengan Al-Qur’an.' },
    { title: 'Fisioterapi & kesehatan', text: 'Menjaga tubuh tetap sehat dan bugar.' },
  ],
  faq: [
    {
      q: 'Apakah Gemilang Senja hanya daring?',
      a: 'Jalur Reguler dan Seasonal dilaksanakan daring, sedangkan jalur Intensif dilaksanakan tatap muka dengan format full board 3 hari 2 malam.',
    },
    {
      q: 'Apakah program ini kursus membaca Al-Qur’an?',
      a: 'Bukan semata itu. Gemilang Senja adalah pembinaan menyeluruh: diniyyah, Al-Qur’an, tazkiyatun nafs, dan kesehatan fisik serta spiritual.',
    },
    {
      q: 'Apakah keluarga bisa mendaftarkan orang tuanya?',
      a: 'Alur pendaftaran sedang dikonfirmasi. Keluarga dapat menghubungi admin melalui WhatsApp, telepon, atau email yang tercantum di bagian Pendaftaran.',
    },
  ],
};

export const nav = [
  { href: '#ringkasan', label: 'Ringkasan' },
  { href: '#jalur', label: 'Jalur program' },
  { href: '#materi', label: 'Materi' },
  { href: '#pertanyaan', label: 'Tanya jawab' },
];

export const siteLinks = [
  { href: 'https://tsl.my.id/', label: 'Beranda TSL' },
  { href: 'https://tsl.my.id/program/', label: 'Semua program' },
  { href: 'https://tsl.my.id/kontak/', label: 'Kontak' },
  { href: 'https://tsl.my.id/bantuan/', label: 'Bantuan' },
  { href: 'https://my.tslbelajarislam.id/', label: 'Masuk ke kelas (LMS)' },
];
