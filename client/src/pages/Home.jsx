import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import SignUp from "../components/SignUp";
import MyLandbot from "../components/MyLandbot";

export default function Home() {
  return (
    <div
      id="container"
      className="bg-gray-100 font-sans flex flex-col items-center"
    >
      <Header />
      <HeroSection />
      <MyLandbot url="https://storage.googleapis.com/landbot.online/v3/H-1421984-A5UHF164WPTCJTN2/index.json" />
      <SignUp />
      <Footer />
    </div>
  );
}
