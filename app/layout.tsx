import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { init, AirstackProvider } from "@airstack/airstack-react";
import Providers from '@/components/providers';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SuperFluid Airstack App',
  description: 'Generated by socialrankcapitalFarcaster using Superfluid Stream ',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
<Providers>
    <html lang="en" >
      <body className={inter.className}>
        {children}
        </body>
    </html>
    </Providers>

  )
}
