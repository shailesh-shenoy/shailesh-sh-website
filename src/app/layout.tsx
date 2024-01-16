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
    <html lang="en">
      <body>
        <Providers>
          <Navbar />
          <Flex
            direction="column"
            bg={"#0D0D0D"}
            align="center"
            as="main"
            p={2}
          >
            {children}
          </Flex>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
