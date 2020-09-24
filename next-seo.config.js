export default {
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
  },
  title: 'Page Meta Title',
  description: 'This will be the page meta description',
  canonical: 'https://www.canonicalurl.ie/',
  openGraph: {
    url: 'https://www.canonicalurl.ie/',
    title: 'Open Graph Title',
    description: 'Open Graph Description',
    type: 'website',
    locale: 'en_IE',
    site_name: 'Next Seed',
    images: [
      {
        url: 'https://www.example.ie/og-image-01.jpg',
        width: 800,
        height: 600,
        alt: 'Og Image Alt',
      },
      {
        url: 'https://www.example.ie/og-image-02.jpg',
        width: 900,
        height: 800,
        alt: 'Og Image Alt Second',
      },
      { url: 'https://www.example.ie/og-image-03.jpg' },
      { url: 'https://www.example.ie/og-image-04.jpg' },
    ],
  },
}
