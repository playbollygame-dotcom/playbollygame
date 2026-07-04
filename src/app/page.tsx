"use client";

import { useEffect, useState } from "react";

import Navbar from "../components/layout/Navbar";
import Hero from "../components/Hero";
import AnimatedStats from "../components/AnimatedStats";
import Features from "../components/Features";
import ExclusiveRewards from "../components/ExclusiveRewards";
import WhyChoose from "../components/WhyChoose";
import Testimonials from "../components/Testimonials";
import HowToDownload from "../components/HowToDownload";
import Blogs from "../components/Blogs";
import FAQ from "../components/FAQ";
import DownloadSection from "../components/DownloadSection";
import Footer from "../components/Footer";
import ScrollTop from "../components/ScrollTop";
import ScrollProgress from "../components/ScrollProgress";
import Loader from "../components/Loader";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <ScrollProgress />

      <Navbar />

      <main>
        <Hero />

        <AnimatedStats />

        <Features />

        <ExclusiveRewards />

        <WhyChoose />

        <Testimonials />

        <HowToDownload />

        <Blogs />

        <FAQ />

        <DownloadSection />
      </main>

      <Footer />

      <ScrollTop />
    </>
  );
}