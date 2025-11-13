'use client';

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { CheckCircle, ThumbsUp } from "lucide-react";
import Image from "next/image";
import Gregory from "../../public/images/gregory 1.svg"

export default function AboutSection() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const coreValues = [
    {
      id: 1,
      title: "Efficiency",
      description: "Deliver marketing strategies that can be implemented quickly, saving time and resources.",
      bgColor: "bg-white",
      textColor: "text-blue-600",
      icon: <CheckCircle className="w-8 h-8 text-blue-600" />,
      animation: "fade-right",
    },
    {
      id: 2,
      title: "Accessibility",
      description: "Offer exclusive-level guidance at a fraction of the cost of traditional agencies.",
      bgColor: "bg-linear-to-r from-purple-600 to-purple-800",
      textColor: "text-white",
      icon: <CheckCircle className="w-8 h-8 text-lime-400" />,
      animation: "zoom-in-up",
    },
    {
      id: 3,
      title: "Practicality",
      description: "Provide actionable plans and support tailored to the unique needs of startup founders.",
      bgColor: "bg-linear-to-r from-primary to-purple-900",
      textColor: "text-white",
      icon: <CheckCircle className="w-8 h-8 text-orange-400" />,
      animation: "zoom-in-left",
    },
    {
      id: 4,
      title: "Empowerment",
      description: "Equip founders with the tools and knowledge to scale their marketing efforts independently.",
      bgColor: "bg-white",
      textColor: "text-blue-600",
      icon: <ThumbsUp className="w-8 h-8 text-blue-600" />,
      animation: "fade-left",
    },
  ];

  return (
    <section className="w-full bg-white py-16 px-8 font-poppins">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <div
          className="flex lg:w-[60%] mx-auto justify-center"
          data-aos="fade-up"
        >
          <div className="w-24 h-3 bg-linear-to-r from-white to-primary mx-auto rounded-full mt-3"></div>
          <h2 className="text-3xl md:text-4xl text-center mb-16 text-gray-900 dark:text-gray-100 relative">
            About VibeYourSaas
          </h2>
          <div className="w-24 h-3 bg-linear-to-r from-primary to-white mx-auto rounded-full"></div>
        </div>

    
        <div
          className="mx-auto mb-12 space-y-4 text-gray-700"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <p>
            We help early-stage technical founders launch and scale their SaaS products faster by providing practical,
            hands-on marketing guidance. We bridge the gap between product development and marketing, ensuring that
            products not only function well but also reach the right audience efficiently.
          </p>
          <p>
            Founded by Silicon Valley veteran Gregory Kennedy, VibeYourSaas brings real-world startup marketing
            experience to founders who want actionable strategies without the overhead of a full agency.
          </p>
        </div>

        {/* Core Values */}
        <div className="mb-16 flex lg:flex-row flex-col items-center justify-between gap-10">
          <h3
            className="text-3xl lg:px-10 text-black mb-8 text-center"
            data-aos="fade-right"
          >
            Core <br className="hidden lg:block" /> Values
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-2xl mx-auto">
            {coreValues.map((value) => (
              <div
                key={value.id}
                className="p-0.5 rounded-2xl bg-linear-to-r from-white to-primary"
                data-aos={value.animation}
                data-aos-delay={value.id * 100}
              >
                <div
                  className={`rounded-2xl ${value.bgColor} ${value.textColor} min-h-40 p-8 flex flex-col justify-between`}
                >
                  <div>
                    <h4 className="text-2xl font-bold mb-3">{value.title}</h4>
                    <p className="text-sm leading-relaxed">{value.description}</p>
                  </div>
                  {value.icon && <div className="mt-4">{value.icon}</div>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Founder Section */}
        <div className="mx-auto" data-aos="fade-up" data-aos-delay="300">
          <h3 className="text-2xl font-bold text-black mb-8 text-center">
            Meet Our Founder
          </h3>
          <div className="border-2 border-purple-400 rounded-2xl p-8 bg-white shadow-lg">
            <div className="flex gap-6">
              <div className="shrink-0 bg-linear-to-r from ">
                <div className="w-24 h-24 bg-purple-500 rounded-lg overflow-hidden">
                  <Image
                    src={Gregory}
                    alt="Gregory Kennedy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-center text-white font-semibold mt-2 bg-purple-500 rounded px-2 py-1 text-sm">
                  Gregory Kennedy
                </p>
              </div>
              <div className="flex-1">
                <p className="text-gray-700 leading-relaxed">
                  I'm Gregory Kennedy, a Silicon Valley veteran and 3X startup head of marketing. I started VibeYourSaas
                  to help founders turn their ideas into traction and monetize their creations. I work directly with
                  early-stage teams, providing hands-on guidance and proven go-to-market frameworks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
