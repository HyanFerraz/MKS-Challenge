import StyledComponentsRegistry from '@/lib/registry'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "MKS Sistemas",
}
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <StyledComponentsRegistry>
        {children}
      </StyledComponentsRegistry>
    </html>
  )
}