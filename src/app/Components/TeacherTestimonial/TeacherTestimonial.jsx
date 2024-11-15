import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel";
import * as React from "react";

import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import serviceImg from "@/Assets/bangla.jpg";

const TeacherTestimonial = () => {
  const testimonials = [
    {
      name: "লানা খান",
      address: "গ্রিন রোড, ঢাকা",
      review:
        "ধন্যবাদ হোম টিউটর চট্টগ্রাম। আমি অনেক দিন ধরে আমার মেয়ের জন্য একজন ভালো শিক্ষক খুঁজছিলাম, কিন্তু কাউকে খুঁজে পাইনি। আমার এক সহকর্মীর মাধ্যমে আমি এই প্ল্যাটফর্মটি খুঁজে পাই। যোগাযোগ করার পর মাত্র দুই দিনের মধ্যে তারা আমাকে একজন ভালো শিক্ষক খুঁজে দিতে সাহায্য করেছে। শিক্ষকটি ভালো পড়াচ্ছেন। আমি আশা করি সবসময় এই প্ল্যাটফর্মের সঙ্গে সংযুক্ত থাকতে পারব। আবারও ধন্যবাদ। হোম টিউটর চট্টগ্রাম-এর অব্যাহত উন্নতির জন্য শুভকামনা।",
      img: "https://example.com/images/lana-khan.jpg"
    },
    {
      name: "মো. কাউসার",
      address: "গ্রিন রোড, ঢাকা",
      review:
        "খুবই পেশাদার, বিশ্বস্ত, সহায়ক এবং টিউটর খোঁজার জন্য পরিচ্ছন্ন একটি প্ল্যাটফর্ম। ২০১৮ সাল থেকে আমি এই প্ল্যাটফর্ম ব্যবহার করে শিক্ষক নিয়োগ করছি এবং তাদের সহযোগিতা এবং শিক্ষকের গুণগত মানে সত্যিই সন্তুষ্ট। তাদের পেশাদারিত্ব এবং চমৎকার সেবা প্রদানে প্রতিশ্রুতির জন্য আমি এই প্ল্যাটফর্মটি অত্যন্ত সুপারিশ করব।",
      img: "https://example.com/images/md-kawsar.jpg"
    },
    {
      name: "আরিফুল ইসলাম",
      address: "খিলখেত, ঢাকা",
      review:
        "তারা সবসময় নির্ভরযোগ্য এবং সহায়ক। তারা আমাকে সেরা শিক্ষক খুঁজে পেতে সত্যিই সাহায্য করেছে। এই প্ল্যাটফর্মটি আমার ১০০% সন্তুষ্টি অর্জন করেছে। তাদের সেবা সম্পর্কে, আমি সবার কাছে সুপারিশ করব।",
      img: "https://example.com/images/ariful-islam.jpg"
    },
    {
      name: "জাকারিয়া হাবিব",
      address: "আন্দরকিল্লা, চট্টগ্রাম",
      review:
        "আমি এই প্ল্যাটফর্মটিকে খুবই নিরাপদ এবং নির্ভরযোগ্য মনে করেছি। আমি ইতোমধ্যে এই প্ল্যাটফর্ম ব্যবহার করে তিনজন শিক্ষক পেয়েছি এবং মনে হচ্ছে তারা আমাদের পরিবারের অংশ হয়ে গেছেন। হোম টিউটর চট্টগ্রাম পরিবারের জন্য শুভকামনা।",
      img: "https://example.com/images/zakaria-habib.jpg"
    },
    {
      name: "আফসানা আক্তার রুপা",
      address: "শাহজাদপুর, ঢাকা",
      review:
        "হোম টিউটর চট্টগ্রাম-এর সঙ্গে আমার অভিজ্ঞতা সবসময়ই খুব ভালো। এই প্ল্যাটফর্মের মাধ্যমে আমি আমার প্রয়োজন অনুযায়ী ভালো শিক্ষক পেয়েছি। ধন্যবাদ হোম টিউটর চট্টগ্রাম।",
      img: "https://example.com/images/afsana-rupa.jpg"
    },
    {
      name: "মো. আশরাফুজ্জামান",
      address: "খিলখেত, ঢাকা",
      review:
        "হোম টিউটর চট্টগ্রাম-এর নেওয়া উদ্যোগের প্রশংসা করি। আমি বর্তমানে এই প্ল্যাটফর্মের মাধ্যমে পাওয়া দুইজন শিক্ষকের সঙ্গে যাচ্ছি। তারা উভয়েই যত্নবান এবং আন্তরিক। এছাড়াও, হোম টিউটর চট্টগ্রাম-এর কাছ থেকে জন্মদিনের শুভেচ্ছা পেয়ে আমরা খুবই আনন্দিত হয়েছি। তাদের সফল প্রচেষ্টার জন্য শুভকামনা।",
      img: "https://example.com/images/md-ashrafuzzaman.jpg"
    },
    {
      name: "তহুরা পারভীন জলি",
      address: "নিকুঞ্জ ২, ঢাকা",
      review:
        "আমি একজন অভিভাবক এবং হোম টিউটর চট্টগ্রাম প্ল্যাটফর্ম ব্যবহার করে আমার ছেলের জন্য একজন শিক্ষক পেয়েছি। তাদের কাছ থেকে চমৎকার সাপোর্ট পেয়েছি। তাদের পুরো টিমকে আমার আন্তরিক ধন্যবাদ।",
      img: "https://example.com/images/tohura-jolly.jpg"
    },
    {
      name: "মাহবুবা খানম শান্তা",
      address: "জিগাতলা, ঢাকা",
      review:
        "হোম টিউটর চট্টগ্রাম একটি চমৎকার প্ল্যাটফর্ম; যার মাধ্যমে আমরা আমাদের সন্তানের নির্দিষ্ট চাহিদা অনুযায়ী একজন অভিজ্ঞ শিক্ষক নিরাপদে খুঁজে পেতে পারি। একজন অভিভাবক হিসেবে আমি অত্যন্ত সন্তুষ্ট যে সঠিক সময়ে আমার সন্তানের জন্য একজন দক্ষ শিক্ষক পেয়েছি। আলহামদুলিল্লাহ! ধন্যবাদ হোম টিউটর চট্টগ্রাম।",
      img: "https://example.com/images/mahbuba-shanta.jpg"
    },
    {
      name: "রুখসানা আক্তার",
      address: "রামপুরা, ঢাকা",
      review:
        "হোম টিউটর চট্টগ্রাম প্ল্যাটফর্ম ব্যবহার করে মাত্র দুই দিনের মধ্যে আমার মেয়ের জন্য একজন অভিজ্ঞ শিক্ষক নিয়োগ করেছি। তাদের সঙ্গে আমার অভিজ্ঞতা খুবই ভালো। তাদের টিমকে অসংখ্য ধন্যবাদ। ভবিষ্যতেও একই ধরনের সাপোর্ট পাওয়ার আশা করি।",
      img: "https://example.com/images/rukhsana-akter.jpg"
    }
  ];

  return (
    <div className="customWidth  py-10 overflow-hidden px-8 my-20 customServicBG">
      <Carousel
        className="px-4"
        plugins={[
          Autoplay({
            delay: 2000,
            stopOnInteraction: false,
            stopOnMouseEnter: true
          })
        ]}
      >
        <div>
          <h1 className="lg:text-4xl md:text-3xl sm:text-2xl text-xl font-semibold lg:my-6 my-4 text-center">
            কিছু অসাধারণ অভিভাবক/শিক্ষার্থী আমাদের সম্পর্কে কী বলে
          </h1>
        </div>
        <CarouselContent className="-ml-4">
          {testimonials.map((item, key) => (
            <CarouselItem key={key} className="items-center justify-center ">
              <div className="lg:flex lg:flex-col justify-center items-center mx-auto gap-4 my-5">
                <div className="flex flex-col items-center justify-center">
                  <Image
                    src={serviceImg}
                    width={100}
                    height={100}
                    alt="review"
                    className="rounded-full p-2 items-center justify-center"
                  />
                  <h1 className="text-xl text-center">{item.name}</h1>
                  <h1 className="text-lg text-center">{item.address}</h1>
                </div>
                <div className="w-full max-w-2xl mx-auto flex pt-12 justify-center clipPath h-auto p-4 pl-8 bg-white rounded-lg shadow-lg">
                  <p className="text-gray-600 ">{item.review}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};
export default TeacherTestimonial;
