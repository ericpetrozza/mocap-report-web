import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

export const metadata = {
  title: 'MOCAP UX Research Report',
  description: 'Comprehensive UX research for MOCAP website redesign - December 2025'
}

const banner = <Banner storageKey="mocap-ux-2025">MOCAP Website UX Research Report - December 2025</Banner>
const navbar = (
  <Navbar
    logo={<b>MOCAP UX Research</b>}
  />
)
const footer = <Footer>MOCAP Website Redesign Research © {new Date().getFullYear()}</Footer>

export default async function RootLayout({ children }) {
  return (
    <html
      // Not required, but good for SEO
      lang="en"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head
      // ... Your additional head options
      >
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          footer={footer}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}