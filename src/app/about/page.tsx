"use client";

// import api from "@/data/api";
// import Link from "next/link";
import {Column, Header, Section} from "@/components";

const About = () => {
    return (
        <Section id="about">
            <Column style="mt-8 md:mt-10 gap-3">
                <Header>
                    <span>About Me</span>
                </Header>
                <p className="text-xl w-2/3 mt-5 md:text-2xl">
                    I am a fresh graduate from the Faculty of Computers and Artificial Intelligence at Cairo University,
                    specializing in Artificial Intelligence. Passionate about data analysis and business intelligence, I
                    excel at transforming raw data into actionable insights. Proficient in SQL, Python, and advanced
                    visualization tools like Power BI, I have a strong foundation in statistics, machine learning, and
                    database management. I enjoy solving real-world problems by uncovering trends, optimizing processes,
                    and delivering impactful solutions. Dedicated to continuous learning and innovation, I am driven to
                    craft meaningful narratives that drive informed decisions and business success.
                </p>

            </Column>
        </Section>
    );
};

export default About;
