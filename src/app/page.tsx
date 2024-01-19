// app/page.tsx
"use client";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import ChainBlock from "@/components/layout/ChainBlock";

import "@fontsource/audiowide";
import '@fontsource-variable/exo-2';
import '@fontsource/bungee-inline';

export default function Home() {
  return (
    <>
      <Hero />
      <ChainBlock />
      <About />
      <ChainBlock />
      <Projects />
      <ChainBlock />
      <Contact />
    </>
  );
}
