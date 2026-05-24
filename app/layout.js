import Script from 'next/script'
import './globals.css'

export const metadata = {
  title: 'Mohammad Ayaz - Software Engineer | Full Stack Developer',
  description: 'Portfolio of Mohammad Ayaz - Software Engineer | Full Stack Developer specializing in Next.js, React.js, Node.js, MongoDB & Python.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400&family=Syne:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
        
      </head>
      <body>
{/* Google Analytics Script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-EV2GJXD7SZ"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {
            `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-EV2GJXD7SZ');`
          }
        </Script>

        {children}</body>
    </html>
  )
}
