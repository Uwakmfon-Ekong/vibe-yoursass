"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface Step {
  id: string;
  title: string;
  text: string;
}

const HowWeHelp= () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const steps: Step[] = [
    {
      id: "01",
      title: "Launch Blueprint",
      text: "A clear step-by-step go-to-market strategy built for founders to launch in days with confidence instead of months of trial-and-error. Avoid costly mistakes and save on consultant fees.",
    },
    {
      id: "02",
      title: "Lead Generation",
      text: "Proven acquisition frameworks that attract premium leads without burning cash on ads. From content to partnerships and community-driven growth, we build a sustainable pipeline that works.",
    },
    {
      id: "03",
      title: "Growth Systems",
      text: "Marketing shouldn't be guesswork. We provide repeatable processes and scalable systems that make your growth predictable and measurable.",
    },
    {
      id: "04",
      title: "Strategic Partner",
      text: "You don’t just get a plan; you get ongoing guidance. We keep you consistent, focused, and growing so you don’t waste time on what doesn’t work.",
    },
  ];

  return (
    <section className="w-full py-20 bg-white dark:bg-gray-950 font-poppins overflow-x-hidden" id="services">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex lg:w-[40%] mx-auto"  data-aos="fade-up">
            <div className="w-24 h-3 bg-linear-to-r from-white to-primary mx-auto mt-3 rounded-full"></div>
        <h2
          className="text-3xl md:text-4xl text-center mb-16 text-gray-900 dark:text-gray-100 relative"
         
        >
          How We Help
        </h2>
        <div className="w-24 h-3 bg-linear-to-r from-primary to-white mx-auto mt-3 rounded-full"></div>
        </div>

        <div className="flex flex-col gap-12">
          {steps.map((step, index) => {
            const isEven = index % 2 === 1;
            return (
              <div
                key={step.id}
                className={`flex flex-col md:flex-row items-center ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}
                data-aos={isEven ? "fade-left" : "fade-right"}
              >
                <div
                  className={`w-full md:w-[60%] bg-primary shadow-[#00000040] text-white p-8 rounded-2xl shadow-lg hover:scale-[1.02] transition-transform duration-300 ${
                    isEven ? "md:ml-auto" : "md:mr-auto"
                  }`}
                >
                  <div className="">
                    <div className="text-5xl font-semibold text-[#0000004D] leading-none">
                      {step.id}
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-white mb-2">
                        {step.title}
                      </h3>
                      <p className="w-full text-white/90 lg:text-[18px] leading-relaxed">
                        {step.text}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowWeHelp;
