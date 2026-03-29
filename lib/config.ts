export interface DonationTier {
  name: string
  label: string
  min: number
  max: number
  color: string
  icon: string
  description: string
}

export const siteConfig = {
  name: 'PaymentHub',
  businessName: 'Kamil Shop',
  domain: process.env.NEXT_PUBLIC_DOMAIN || 'kamilshop.my.id',
  url: process.env.NEXT_PUBLIC_URL || 'https://kamilshop.my.id',
  description:
    'Platform payment gateway modern untuk Indonesia. Terima pembayaran dengan QRIS, e-wallet, virtual account, dan transfer bank.',
  tagline: 'Platform Payment Gateway Modern untuk Indonesia',
  
  // Business Information
  business: {
    name: 'Kamil Shop',
    address: 'Jakarta, Indonesia',
    email: 'admin@kamilshop.my.id',
    phone: '+628211296530',
  },

  // Contact Information  
  contact: {
    email: 'admin@kamilshop.my.id',
    phone: '+628211296530',
    whatsapp: '628211296530',
  },

  // Owner Information
  owner: {
    name: 'Kamil',
    email: 'admin@kamilshop.my.id',
    phone: '628211296530',
    whatsapp: '628211296530',
  },

  // Social Media
  social: {
    telegram: '@kamil13str',
    github: '_',
    tiktok: '_',
    whatsapp: 'https://wa.me/628211296530',
    email: 'mailto:admin@kamilshop.my.id',
  },

  // External Links
  links: {
    github: '_',
    telegram: 'https://t.me/kamil13str',
    tiktok: '_',
    whatsapp: 'https://wa.me/628211296530',
    email: 'mailto:admin@kamilshop.my.id',
  },

  // API Configuration
  api: {
    baseUrl: process.env.NEXT_PUBLIC_API_URL || 'https://kamilshop.my.id/api',
    version: 'v1',
  },

  // Payment Configuration
  payment: {
    methods: ['qris', 'ewallet', 'va', 'bank_transfer'] as const,
    ewallets: ['DANA', 'OVO', 'GOPAY', 'SHOPEEPAY', 'LINKAJA'] as const,
    banks: ['BCA', 'MANDIRI', 'BNI', 'BRI', 'PERMATA', 'CIMB'] as const,
    minAmount: 1000,
    maxAmount: 10000000,
    quickAmounts: [1000, 5000, 10000, 25000, 50000, 100000, 250000, 500000],
  },

  donationTiers: [
    { 
      name: 'Bronze', 
      label: 'Bronze',
      min: 1000, 
      max: 50000, 
      color: '#CD7F32', 
      icon: '🥉',
      description: 'Donasi Rp1.000 - Rp50.000'
    },
    { 
      name: 'Silver', 
      label: 'Silver',
      min: 50001, 
      max: 100000, 
      color: '#C0C0C0', 
      icon: '🥈',
      description: 'Donasi Rp50.001 - Rp100.000'
    },
    { 
      name: 'Gold', 
      label: 'Gold',
      min: 100001, 
      max: 500000, 
      color: '#FFD700', 
      icon: '🥇',
      description: 'Donasi Rp100.001 - Rp500.000'
    },
    { 
      name: 'Platinum', 
      label: 'Platinum',
      min: 500001, 
      max: 1000000, 
      color: '#E5E4E2', 
      icon: '💎',
      description: 'Donasi Rp500.001 - Rp1.000.000'
    },
    { 
      name: 'Diamond', 
      label: 'Diamond',
      min: 1000001, 
      max: Infinity, 
      color: '#B9F2FF', 
      icon: '💠',
      description: 'Donasi di atas Rp1.000.000'
    },
  ] as DonationTier[],

  // Leaderboard Periods
  leaderboardPeriods: [
    { id: 'realtime', label: 'Realtime', value: 'realtime' },
    { id: 'today', label: 'Hari Ini', value: 'today' },
    { id: 'week', label: 'Minggu Ini', value: 'week' },
    { id: 'month', label: 'Bulan Ini', value: 'month' },
    { id: 'quarter', label: 'Quarter', value: 'quarter' },
    { id: 'year', label: 'Tahun Ini', value: 'year' },
    { id: 'all', label: 'All Time', value: 'all' },
  ] as const,

  features: {
    autoCheck: true, // Auto check payment status
    autoCheckInterval: 5000, // 5 det
    invoiceEnabled: true,
    webhookEnabled: true,
    analyticsEnabled: true,
  },

  session: {
    maxAge: 7 * 24 * 60 * 60, // 7 days
    updateAge: 24 * 60 * 60, // 1 day
  },

  navigation: {
    main: [
      { name: 'Beranda', href: '/' },
      { name: 'Pembayaran', href: '/payment' },
      { name: 'Donasi', href: '/donation' },
      { name: 'Leaderboard', href: '/leaderboard/donors' },
      { name: 'API Docs', href: '/docs' },
    ],
    footer: {
      product: [
        { name: 'Fitur', href: '/#features' },
        { name: 'Harga', href: '/pricing' },
        { name: 'API Docs', href: '/docs' },
        { name: 'Status', href: '/status' },
      ],
      support: [
        { name: 'Help Center', href: '/help' },
        { name: 'FAQ', href: '/faq' },
        { name: 'Contact', href: '/contact' },
        { name: 'Tentang', href: '/about' },
      ],
      legal: [
        { name: 'Privacy Policy', href: '/legal/privacy' },
        { name: 'Terms of Service', href: '/legal/terms' },
        { name: 'Cookie Policy', href: '/legal/cookies' },
        { name: 'Refund Policy', href: '/legal/refund' },
      ],
    },
  },

  redis: {
    prefix: 'paymenthub:',
    keys: {
      transaction: (id: string) => `paymenthub:transaction:${id}`,
      invoice: (code: string) => `paymenthub:invoice:${code}`,
      stats: 'paymenthub:stats',
      leaderboard: (period: string) => `paymenthub:leaderboard:${period}`,
      topDonations: 'paymenthub:top_donations',
      recentTransactions: 'paymenthub:recent_transactions',
      session: (id: string) => `paymenthub:session:${id}`,
    },
  },
}

export type SiteConfig = typeof siteConfig
