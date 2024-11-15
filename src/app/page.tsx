"use client";
import HeroSection from "@/app/Components/Shared/Hero";
import Services from "@/app/Components/Services/Services";
import CurrentStatus from "@/app/Components/CurrenStatus/CurrentStatus";
import GuardianReview from "@/app/Components/GurdienReview/GuardianReview";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <CurrentStatus />
      <Services />
      <GuardianReview />
    </div>
  );
}
