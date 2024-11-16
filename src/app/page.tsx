"use client";
import HeroSection from "@/app/Components/Shared/Hero";
import Services from "@/app/Components/Services/Services";
import CurrentStatus from "@/app/Components/CurrenStatus/CurrentStatus";
import GuardianReview from "@/app/Components/GurdienReview/GuardianReview";
import TeacherTestimonial from "@/app/Components/TeacherTestimonial/TeacherTestimonial";
import HowWorkForTutors from "@/app/Components/HowWorkForTutors/HowWorkForTutors";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <CurrentStatus />
      <Services />
      <GuardianReview />
      <HowWorkForTutors />
      <TeacherTestimonial />
    </div>
  );
}
