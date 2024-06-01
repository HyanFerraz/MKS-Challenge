import StyledComponentsRegistry from '@/lib/registry'
import type { Metadata } from 'next'
import {Montserrat} from 'next/font/google'

export const metadata: Metadata = {
  title: "Eletronic Store",
}

const montserrat = Montserrat({subsets: ['latin'], weight:"400"})
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body className={montserrat.className}>
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}