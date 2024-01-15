"use client";
// app/layout.tsx
import Navbar from '@/components/layout/Navbar'
import { Providers } from './providers'
import Footer from '@/components/layout/Footer'
import { Stack } from '@chakra-ui/react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang='en'>
      <body>
        <Providers>
          <Navbar />
          <Stack direction="column" bg={"gray.50"} align="center" as="main" minH={"100vh"} gap={48} p={2}>{children}</Stack><Footer />
        </Providers>
      </body>
    </html>
  )
}