// app/page.tsx
"use client";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import ChainBlock from "@/components/layout/ChainBlock";
import { Link } from "@chakra-ui/next-js";

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
