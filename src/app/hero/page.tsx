"use client";

import api from "@/data/api";
import Link from "next/link";
import { Column, Section } from "@/components";
import Image from "next/image";

const Hero = () => {
  return (
    <Section id="about" style="py-8 mt-12">
      <Column style="gap-6 text-center md:text-left">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold">
          <span className="text-[#f2f2f2]">{api.hero.title}</span>{" "}
          <span className="text-[#ccad00]">{api.hero.name}</span>
        </h1>

        {/* Description */}
        <p className="text-sm md:text-xl">{api.hero.description}</p>

        {/* CV and Social Links */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mt-6">
          {/* CV Button */}
          <Link
            href={api.hero.cv.link}
            target="_blank"
            className="w-32 h-12 hover:text-[#f2f2f2] hover:bg-[#998200] text-black font-bold bg-[#f2f2f2] border rounded-lg flex items-center justify-center gap-2 transition"
          >
            {api.hero.cv.title}
          </Link>

          {/* Social Icons */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            {api.hero.social.map((social, index) => (
              <Link
                key={index}
                href={social.link}
                target="_blank"
                className="w-12 h-12 hover:bg-[#998200] text-black font-bold bg-[#f2f2f2] border rounded-lg flex items-center justify-center transition"
              >
                <Image
                  src={social.img}
                  className="w-6 h-6 md:w-8 md:h-8"
                  alt={social.title}
                />
              </Link>
            ))}
          </div>
        </div>
      </Column>
    </Section>
  );
};

export default Hero;
