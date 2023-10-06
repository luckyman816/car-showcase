"use client";

import Image from "next/image";
import Link from "next/link";

import { CustomButton } from "./";

// hero
const Hero = () => {
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        {/* hero title */}
        <h1 className="hero__title">
          Find, Book or Rent a Car — quickly and easily
        </h1>

        {/* hero subtitle */}
        <p className="hero__subtitle">
          Streamline your car rental experience with our effortless booking
          process.
        </p>

        {/* explore cars button */}
        <Link href="#discover">
          <CustomButton
            title="Explore Cars"
            containerStyles="bg-primary-blue text-white rounded-full mt-10"
          />
        </Link>
      </div>

      {/* hero image */}
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>

        {/* hero image overlay */}
        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
