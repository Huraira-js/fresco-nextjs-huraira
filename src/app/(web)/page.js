"use client";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import About from "@/components/About";
import Faq from "@/components/faq";
import Download from "@/components/Download";
export default function Landing() {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <Faq />
      <Download />
      <Footer />
    </>
  );
}
