export const services = [
  {
    id: 1,
    title: 'Instalasi LAN & WiFi',
    description: 'Desain dan instalasi jaringan kabel dan nirkabel untuk konektivitas stabil, termasuk site survey dan optimisasi.',
    icon: 'Wifi',
    features: ['Site survey', 'Cabling certified', 'WiFi heatmap analysis']
  },
  {
    id: 2,
    title: 'Fiber Optic',
    description: 'Solusi jaringan fiber optic untuk kecepatan tinggi dan jarak jauh, ODF, splicing, dan testing.',
    icon: 'Cable',
    features: ['Single/Multi-mode', 'OTDR testing', ' splice loss guarantee']
  },
  {
    id: 3,
    title: 'Mikrotik & Cisco Config',
    description: 'Konfigurasi router, firewall, BGP, OSPF, VPN, dan load balancing untuk ISP dan enterprise.',
    icon: 'Server',
    features: ['BGP/OSPF', 'VPN (IPsec, WireGuard)', 'QoS shaping']
  },
  {
    id: 4,
    title: 'Data Center & Rack',
    description: 'Rack & stack server, patch panel, UPS,PDU, dan dokumentasi untuk data center.',
    icon: 'Database',
    features: ['42U/48U racks', 'Cable management', 'Labeling standards']
  },
  {
    id: 5,
    title: 'CCTV & Access Control',
    description: 'Sistem keamanan CCTV IP, door access, integrate dengan firewall untuk physical security.',
    icon: 'Camera',
    features: ['IP cameras', 'NVR setup', 'Biometric access']
  },
  {
    id: 6,
    title: 'Maintenance & SLA',
    description: 'Perjanjian service level dengan SLA 99.9%, proactive monitoring, dan on-site support.',
    icon: 'Wrench',
    features: ['24x7 support', 'Response <4 jam', 'Monthly reporting']
  }
];

export const projects = [
  {
    id: 1,
    title: 'Kampus University Network',
    client: 'Universitas XYZ',
    category: 'Campus',
    image: null,
    description: 'Full campus fiber backbone + WiFi 6 for 10,000+ users.',
    tags: ['Fiber', 'WiFi', 'Mikrotik'],
    timeline: '4 months',
    role: 'Network Design & Implementation'
  },
  {
    id: 2,
    title: 'Warehouse Logistics Hub',
    client: 'PT Logistik Nusantara',
    category: 'Warehouse',
    image: null,
    description: 'Industrial WiFi for warehouse automation and barcode scanning.',
    tags: ['WiFi', 'CCTV', 'Access Control'],
    timeline: '2 months',
    role: 'Turnkey Solution'
  },
  {
    id: 3,
    title: 'Hotel & Resort Connectivity',
    client: 'Bali Luxury Resorts',
    category: 'Hospitality',
    image: null,
    description: 'Guest WiFi with captive portal, backend infrastructure, and IP telephony.',
    tags: ['WiFi', 'Fiber', 'VoIP'],
    timeline: '3 months',
    role: 'Design & Build'
  },
  {
    id: 4,
    title: 'Corporate Office Network',
    client: 'PT Multi Finance',
    category: 'Office',
    image: null,
    description: 'Secure LAN/WAN, VPN branch-to-headquarter, and firewall hardening.',
    tags: ['Cisco', 'VPN', 'Security'],
    timeline: '1.5 months',
    role: 'Integration'
  }
];

export const testimonials = [
  {
    id: 1,
    name: 'Budi Santoso',
    role: 'IT Manager, PT Alpha',
    content: 'The network infrastructure they built is rock solid. Zero downtime in 2 years.',
    rating: 5
  },
  {
    id: 2,
    name: 'Sari Indah',
    role: 'Dir. Operations, Hotel Bali',
    content: 'Our guest WiFi coverage improved dramatically. Guests love the speed.',
    rating: 5
  },
  {
    id: 3,
    name: 'Ahmad Rizki',
    role: 'SysAdmin, University X',
    content: 'Professional team, thorough documentation, and excellent post-deployment support.',
    rating: 5
  }
];

export const pricing = [
  {
    id: 1,
    name: 'Basic',
    description: 'For small offices',
    price: 'Rp 15 juta',
    period: 'project',
    features: [
      'LAN installation up to 30 endpoints',
      'Basic WiFi design',
      '1 month warranty',
      'Documentation'
    ]
  },
  {
    id: 2,
    name: 'Pro',
    description: 'For medium businesses',
    price: 'Rp 50 juta',
    period: 'project',
    features: [
      'Everything in Basic',
      'Fiber backbone',
      'Mikrotik/ Cisco config',
      '3 months SLA',
      '24x7 support'
    ]
  },
  {
    id: 3,
    name: 'Enterprise',
    description: 'For large organizations',
    price: 'Custom',
    period: '',
    features: [
      'Full data center build',
      'Multi-site VPN',
      '99.9% SLA guarantee',
      'Dedicated account manager',
      'Remote monitoring 24/7'
    ]
  }
];

export const faqs = [
  {
    id: 1,
    question: 'Berapa lama waktu instalasi untuk proyek sedang?',
    answer: 'Typically 2-4 minggu, tergantung kompleksitas dan lokasi. Kami akan memberikan timeline yang jelas setelah survey.'
  },
  {
    id: 2,
    question: 'Apakah tersedia garansi?',
    answer: 'Ya, kami memberikan garansi延伸 1-3 bulan untuk material dan tenaga kerja. Optional extended warranty tersedia.'
  },
  {
    id: 3,
    question: 'Bisa kanggo support after go-live?',
    answer: 'Bisa. Kami punya paket Maintenance & SLA dengan response time <4 jam dan dukungan 24x7.'
  },
  {
    id: 4,
    question: 'Apakah bisa custom sesuai kebutuhan?',
    answer: 'Absolutely. Setiap proyek kami desain sesuai requirement spesifik klien, tidak one-size-fits-all.'
  }
];

export const blogPosts = [
  {
    id: 1,
    title: '5 Tips Memilih Vendor Jaringan IT yang Terpercaya',
    excerpt: 'Pilih vendor berdasarkan sertifikasi,portfolio, dan dukungan purna jual.',
    date: '2025-03-01',
    readTime: '5 min',
    tags: ['Tips', 'Vendor Selection']
  },
  {
    id: 2,
    title: 'Mengapa Fiber Optic Lebih Baik dari Kabel Tembaga?',
    excerpt: 'Perbandingan kecepatan,jarak,dengan imunitas terhadap interference.',
    date: '2025-02-15',
    readTime: '7 min',
    tags: ['Fiber', 'Technology']
  },
  {
    id: 3,
    title: 'Best Practices WiFi Design untuk Kantor Terpadu',
    excerpt: 'Site survey, channel planning,dan pilih access point yang tepat.',
    date: '2025-02-01',
    readTime: '6 min',
    tags: ['WiFi', 'Design']
  }
];

export const contactInfo = {
  address: 'Jl. Sudirman No. 123, Jakarta Selatan 12345',
  email: 'info@sinarjaringan.com',
  phone: '+62 21 1234 5678',
  hours: 'Senin–Jumat: 08:00–17:00, Sabtu: 09:00–14:00'
};
