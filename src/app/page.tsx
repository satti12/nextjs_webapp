import React from "react";
import HeroSection from "../component/HeroSection";
import FeaturedCources from "../component/FeaturedCources";
import MovingCard from "../component/ui/MovingCard";
import UpcomingWebinar from "../component/UpcomingWebinar";
import Insetructors from "../component/Insetructors";
import Footer from "../component/Footer";

export default function Home() {
  return (
    <div className=" ">
      <HeroSection />
      <FeaturedCources />
      <MovingCard />
      <UpcomingWebinar />
      <Insetructors />
    </div>
  );
}
