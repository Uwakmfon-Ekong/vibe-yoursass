"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/images/vibeyoursasslogo.svg";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <nav
      className="container mx-auto font-poppins w-full px-6 md:px-12 flex flex-wrap md:flex-nowrap justify-between items-center bg-white dark:bg-gray-900 relative z-50"
      data-aos="fade-down"
    >
      
      <div className="flex items-center space-x-2">
        <Image src={logo} alt="Logo" className="w-40 h-40" />
      </div>

      
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-800 dark:text-gray-100 focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

     
      <div className="hidden lg:flex gap-8 items-center">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-gray-800 dark:text-gray-100 text-[18px] hover:text-[#8A2BE2] transition-colors duration-300"
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Desktop Button */}
      <div className="hidden md:flex">
        <Button className="relative overflow-hidden bg-[#8A2BE2] text-[18px] shadow-md shadow-[#8A2BE299] hover:bg-[#8A2BE299]/95 font-medium">
          <span className="relative z-10">Schedule a Meeting</span>
          <span className="absolute inset-0 bg-linear-to-r from-[#8A2BE2] via-[#B57CFF] to-[#8A2BE2] animate-shimmer"></span>
        </Button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="absolute top-full h-screen left-0 w-full bg-white dark:bg-gray-900 shadow-md flex flex-col items-center space-y-6 py-6 md:hidden z-40 animate-fade-in">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-800 dark:text-gray-100 text-[18px] hover:text-[#8A2BE2] transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <Button className="relative overflow-hidden bg-[#8A2BE2] text-[18px] shadow-md shadow-[#8A2BE299] hover:bg-[#8A2BE299]/95 font-medium">
            <span className="relative z-10">Schedule Meeting</span>
            <span className="absolute inset-0 bg-linear-to-r from-[#8A2BE2] via-[#B57CFF] to-[#8A2BE2] animate-shimmer"></span>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
