"use client";

import { Column, Header, Section } from "@/components";

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
          I am a fresh graduate from the Faculty of Computers and Artificial Intelligence at Cairo University,
          specializing in Artificial Intelligence. Passionate about data analysis and business intelligence, I excel
          at transforming raw data into actionable insights. Proficient in SQL, Python, and advanced visualization
          tools like Power BI, I have a strong foundation in statistics, machine learning, and database management. I
          enjoy solving real-world problems by uncovering trends, optimizing processes, and delivering impactful
          solutions. Dedicated to continuous learning and innovation, I am driven to craft meaningful narratives that
          drive informed decisions and business success.
        </p>
      </Column>
    </Section>
  );
};

export default About;
