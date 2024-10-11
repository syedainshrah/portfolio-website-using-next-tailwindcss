import Image from "next/image";
import Link from "next/link";
import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section className="flex flex-col md:flex-row-reverse min-h-screen justify-between items-center px-6 md:px-16 py-16 lg:py-24 bg-white">
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex flex-col items-center">
        <div className="hero-img w-48 h-48 md:w-72 md:h-72 lg:w-96 lg:h-96 rounded-full border-2 border-t-slate-400 border-b-[#04AF70] border-r-[#04AF70] border-l-[#04AF70] shadow-black shadow-inner"></div>

        {/* Social Icons */}
        <div className="flex mt-6 space-x-4">
          {/* Replace with actual links and icons */}
          <Link href="https://instagram.com" className="grayscale hover:grayscale-0">
            <Image src="/assets/images/insta.jpeg" alt="Fb Icon" height={40} width={40} />
          </Link>
          <Link href="https://linkedin.com" className="grayscale hover:grayscale-0">
            <Image src="/assets/images/linkedin.jpeg" alt="twitter icon" height={40} width={40} />
          </Link>
          <Link href="https://github.com" className="grayscale hover:grayscale-0">
            <Image src="/assets/images/github.jpeg" alt="github icon" height={40} width={40} />
          </Link>
          <Link href="https://wa.me/923343489702" className="grayscale hover:grayscale-0">
            <Image src="/assets/images/whatsapp.jpeg" alt="whatsapp icon" height={40} width={40} />
          </Link>
        </div>
      </div>

      {/* Text Section */}
      <div className="mt-8 md:mt-0 w-full md:w-1/2 flex flex-col text-center md:text-left items-center md:items-start">
        <p className="text-lg font-light text-black">Hi I am</p>
        <span className="text-[#04AF70] text-2xl md:text-4xl 2xl:text-5xl">Syeda Inshrah Khatoon</span>
        <br />
        <h1 className="text-3xl md:text-5xl 2xl:text-6xl font-bold">
          <span className="block  text-black">Web & Mobile App</span>
          <span className="block  text-black">Developer</span>
        </h1>
        <p className="mt-4 text-gray-600 text-base md:text-lg max-w-lg">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra.
        </p>
        <button className="mt-6 bg-[#04AF70] text-white py-2 px-8 rounded-md hover:bg-[#04af70cb] hover:text-black">
          Hire Me
        </button>
      </div>
    </section>
  );
}

export default Hero;