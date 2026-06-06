export type Work = {
  id: string
  title: string
  image: string
  href?: string
  imageFit?: 'cover' | 'contain'
  imagePosition?: string
}

export const works: Work[] = [
  {
    id: 'imtrix',
    title: 'IMTRIX LP',
    image: '/imtrix.webp',
    href: 'https://imtrix.jp/',
    imageFit: 'cover',
    imagePosition: 'center top',
  },
  {
    id: 'zebra',
    title: 'ZEBRA HP',
    image: '/zebra.webp',
    href: 'https://www.zebra-company.jp/',
    imageFit: 'cover',
    imagePosition: 'center top',
  },
  {
    id: 'ksk',
    title: 'KSK HP',
    image: '/ksk.webp',
    href: 'https://ksk-logistics.co.jp/',
    imageFit: 'cover',
    imagePosition: 'center center',
  },
  {
    id: 'flyer-apparel',
    title: 'オーダーアパレル商品案内 チラシ',
    image: '/flyer-apparel.webp',
    imageFit: 'cover',
    imagePosition: 'center top',
  },
  {
    id: 'flyer-dtf',
    title: 'DTFプリント訴求 チラシ',
    image: '/flyer-dtf.webp',
    imageFit: 'cover',
    imagePosition: 'center top',
  },
  {
    id: 'flyer-original-print',
    title: 'オリジナルプリントサービス チラシ',
    image: '/flyer-original-print.webp',
    imageFit: 'cover',
    imagePosition: 'center top',
  },
  {
    id: 'flyer-school',
    title: 'オリジナルTシャツ チラシ',
    image: '/flyer-school.webp',
    imageFit: 'cover',
    imagePosition: 'center top',
  },
]
