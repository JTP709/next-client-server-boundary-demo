import Providers from './Providers'
import type React from 'react'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Providers>{children}</Providers>
  )
}
