"use client";

import { Star } from "lucide-react";

interface Testimonial {
  id: number;
  text: string;
  author: string;
  title: string;
  rating: number;
  bgColor: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "As a technical founder, I was building a product but needed help with marketing. Vibeyoursaas's actionable strategy changed the game positively for me.",
    author: "Jack Geisler",
    title: "Founder of Black Dog Data",
    rating: 4,
    bgColor: "bg-gradient-to-r from-[#2A0DFF] to-[#1CB4E2]",
  },
  {
    id: 2,
    text: "Vibeyoursaas is what happens when thinking beyond principles and effective strategy meet. No ego or sharp fast.",
    author: "Arjun Dev Arora",
    title: "Advisor to Founders & VCs",
    rating: 5,
    bgColor: "bg-gradient-to-r from-[#4C187C] to-[#8A2BE2]",
  },
  {
    id: 3,
    text: "What sets Vibeyoursaas apart is its focus on go-to-market strategy expertise, which has helped them tremendously.",
    author: "Amren Weinzoto",
    title: "Founder of Pallete Dev",
    rating: 5,
    bgColor: "bg-gradient-to-r from-[#008500] to-[#00C851]",
  },
];

export default function TestimonialSection() {
  return (
    <section
      className="w-full py-20 bg-linear-to-r from-[#BE77FF] to-[#0A0014] dark:bg-gray-950 font-poppins overflow-x-hidden"
      data-aos="zoom-in"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div
          className="lg:w-[60%] mx-auto flex gap-3 mb-16 items-center justify-center"
          data-aos="fade-up"
        >
          <div className="w-24 h-1 bg-linear-to-r from-white to-primary rounded-full"></div>
          <h2 className="text-3xl md:text-4xl text-white dark:text-gray-100 text-center">
            What Our Clients Say
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-primary to-white rounded-full"></div>
        </div>

        <div className="relative h-[600px] flex flex-col md:flex-row md:items-center md:justify-between mb-12 perspective">
          <div className="md:w-[30%] mb-8 md:mb-0">
            <h1 className="text-white text-3xl md:text-4xl font-bold leading-tight">
              Testimony & Reviews
            </h1>
          </div>

          <div className="md:w-[65%] relative h-[500px] flex items-center justify-center" data-aos="fade-up">
            {testimonials.map((t, i) => {
              let style: React.CSSProperties = {};
              let zIndex = 1;

              if (i === 0)
                style = {
                  left: "10%",
                  top: "20px",
                  transform: "rotateZ(-6deg) rotateY(5deg)",
                };
              if (i === 1)
                style = {
                  left: "40%",
                  top: "80px",
                  transform: "rotateZ(5deg) rotateX(8deg)",
                };
              if (i === 2)
                style = {
                  right: "10%",
                  top: "180px",
                  transform: "rotateZ(0deg) rotateY(-5deg)",
                };

              if (i === 2) zIndex = 10;

              return (
                <div
                  key={t.id}
                  className={`absolute h-[350px] w-64 md:w-72 ${t.bgColor} rounded-2xl p-6 md:p-8 text-white shadow-2xl transition-transform hover:scale-105`}
                  style={{ ...style, zIndex }}
                >
                  {/* Stars */}
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, idx) => (
                      <Star
                        key={idx}
                        size={18}
                        className={
                          idx < t.rating
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }
                      />
                    ))}
                  </div>

                  <div className="mt-6">
                    <p className="text-sm md:text-base leading-relaxed mb-4 font-medium">
                      {t.text}
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-base">{t.author}</p>
                    <p className="text-xs md:text-sm opacity-90">{t.title}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="relative inline-block text-white text-lg font-medium rounded-xl p-0.5 bg-linear-to-r from-[#EDD9FF] to-[#340560]">
            <span className="block rounded-xl bg-linear-to-r from-[#BE77FF] to-[#0A0014] dark:bg-gray-950 px-6 py-3">
              Over 5000+ Reviews helping SaaS founders grow faster.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
