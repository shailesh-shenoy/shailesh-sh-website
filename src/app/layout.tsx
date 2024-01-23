"use client";
// app/layout.tsx
import Navbar from "@/components/layout/Navbar";
import { Providers } from "./providers";
import Footer from "@/components/layout/Footer";
import { Flex } from "@chakra-ui/react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <head>
        <title>{`Shailesh Shenoy's Portfolio`}</title>
        <meta
          name="description"
          content="Welcome to my portfolio site. I'm Shailesh Shenoy, a full-stack developer embracing web3 technologies."
        />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ecf4ed" />
      </head>
      <body>
        <Providers>
          <Navbar />
          <Flex fontFamily="primary"
            fontSize="lg"
            direction="column"
            bg={"#0D0D0D"}
            align="center"
            as="main"
            p={2}
            lineHeight={1.8}
          >
            {children}
          </Flex>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
