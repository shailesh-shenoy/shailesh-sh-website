// app/page.tsx
"use client";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import ChainBlock from "@/components/layout/ChainBlock";

import "@fontsource-variable/inter";
import "@fontsource-variable/lora";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <ChainBlock />
      <Projects />
      <ChainBlock />
      <Contact />
    </>
  );
}
