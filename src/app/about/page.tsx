"use client";

import { Column, Header, Section } from "@/components";
import api from "@/data/api";
const About = () => {
  return (
    <Section id="about" style="py-8">
      <Column style="mt-8 md:mt-10 gap-6 ">
        {/* Header */}
        <Header>
          <span>About Me</span>
        </Header>

        {/* Description */}
        <p className="text-sm md:text-xl w-full md:w-2/3 mt-4 text-center md:text-left leading-relaxed">
          {api.about.description}
        </p>
        
      </Column>
    </Section>
  );
};

export default About;
