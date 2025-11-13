"use client";
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import heroImage from "../../public/images/Dashboard 1.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="font-poppins dark:bg-gray-800 lg:py-10 py-5" data-aos="fade-up">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h1
          className="text-3xl font-semibold md:text-5xl mb-6 text-gray-900 dark:text-gray-100"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Market Smarter. Grow Faster. <br className="hidden lg:block"/>
          <span className="text-[#8A2BE2]">Vibe and Scale Higher</span>
        </h1>

        <p
          className="lg:text-[18px] md:text-xl mb-8 text-gray-700 dark:text-gray-300"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          From roadmaps to results, we bring clarity to marketing roadblocks.
          <br className="hidden lg:block"/>
          Turning complexity into clarity and strategies into
          <span className="text-[#8A2BE2] font-medium"> sustainable growth.</span>
        </p>

        <div
          className="flex justify-center space-x-4"
          data-aos="fade-up"
          data-aos-delay="300"
        >
         
          <div className="relative overflow-hidden rounded-lg">
            <Button className="relative text-[18px] z-10 bg-[#8A2BE2] shadow-md shadow-[#8A2BE299] hover:bg-[#8A2BE299]/95 cursor-pointer">
              Book a call
            </Button>
            <span className="absolute inset-0 bg-linear-to-r from-[#8A2BE2] via-[#B57CFF] to-[#8A2BE2] animate-shimmer opacity-30"></span>
          </div>

          <Button
            
            className="bg-transparent text-[18px] border-gray-800 text-primary shadow-md shadow-primary dark:border-gray-200 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            How it works
          </Button>
        </div>

        <div data-aos="zoom-in" data-aos-delay="400">
          <Image
            src={heroImage}
            alt="Hero Image"
            className="mx-auto mt-10 w-full max-w-6xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
