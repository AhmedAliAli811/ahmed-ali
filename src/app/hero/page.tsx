"use client";

"use client";

import api from "@/data/api";
import Link from "next/link";
import { Column, Section } from "@/components";
import Image from "next/image";

const Hero = () => {
  return (
    <Section id="about">
      <Column style="md-10 gap-3">
        <h1 className="text-4xl md:text-4xl font-bold">
          <span className="text-[#f2f2f2]">{api.hero.title}</span>
          <span className="text-[#ccad00]">{api.hero.name}</span>
        </h1>
        <p className="text-xs md:text-2xl">{api.hero.description}</p>

        <div className="flex items-center gap-4 mt-4">
          {/* CV Link */}
          <Link
            href={api.hero.cv.link}
            target="_blank"
            className="w-36 h-12 text-black font-bold bg-[#f2f2f2] border rounded-lg flex items-center justify-center gap-1"
          >
            {api.hero.cv.title}
            <i className="fa-regular fa-file"></i> {/* Icon for CV */}
          </Link>

          {/* Social Icons */}
          <div className="flex gap-4 ">
            {api.hero.social.map((social, index) => (
              <Link
                key={index}
                href={social.link}
                target="_blank"
                className="text-2xl w-12 h-12 text-black font-bold bg-[#f2f2f2] border rounded-lg flex items-center justify-center gap-1  "
              >
                <Image
                    src={social.img}
                    className="w-8 h-8"
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
