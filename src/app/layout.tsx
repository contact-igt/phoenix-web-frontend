import type { Metadata } from 'next'
import Script from 'next/script'
import { Bebas_Neue, Open_Sans, Plus_Jakarta_Sans, Archivo_Narrow } from 'next/font/google'
import 'slick-carousel/slick/slick.css'
import '../styles/globals.css'
import '../styles/typography.css'
import './globals.css'
import PageTransition from '../components/animation/PageTransition'

const bebasNeue = Bebas_Neue({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-heading-family',
  display: 'swap',
})

const openSans = Open_Sans({
  weight: ['300', '400', '500', '700', '800'],
  subsets: ['latin'],
  variable: '--font-body-family',
  display: 'swap',
})

// Closest Google Font match for Satoshi — used as CSS fallback when Fontshare CDN is unavailable
const plusJakartaSans = Plus_Jakarta_Sans({
  weight: ['400', '500', '700', '800'],
  subsets: ['latin'],
  variable: '--font-satoshi-fallback',
  display: 'swap',
})

const archivoNarrow = Archivo_Narrow({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-archivo-narrow',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Phoenix Fitness | The Empowering Path To Begin Your Fitness Journey',
  description: 'Phoenix Fitness is more than a gym — a place to transform. Join us for strength training, cardio, yoga, and more.',
  openGraph: {
    title: 'Phoenix Fitness | Start Your Fitness Journey',
    description: 'Transform your body and mind with our elite coaches and programs.',
    type: 'website',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${openSans.variable} ${plusJakartaSans.variable} ${archivoNarrow.variable}`}>
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <PageTransition>{children}</PageTransition>
      </body>
      <Script id="microsoft-clarity">
        {`(function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "y9uzmq9rva");`}
      </Script>
    </html>
  )
}
