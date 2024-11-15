"use client";
import HeroSection from "@/app/Components/Shared/Hero";
import Services from "@/app/Components/Services/Services";
import CurrentStatus from "@/app/Components/CurrenStatus/CurrentStatus";
export default function Home() {
  return (
    <div>
      <HeroSection />
      <CurrentStatus />
      <Services />
    </div>
  );
}
