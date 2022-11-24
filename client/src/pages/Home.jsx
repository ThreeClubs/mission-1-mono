import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import SignUp from "../components/SignUp";

export default function Home() {
  return (
    <div
      id="container"
      className="bg-gray-100 font-sans flex flex-col items-center"
    >
      <Header />
      <HeroSection />
      <SignUp />
      <Footer />
    </div>
  );
}
