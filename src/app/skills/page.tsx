"use client";

import api from "@/data/api";
import Image from "next/image";
import { Grid, Header, Section } from "@/components";

const Skills = () => {
  const borderProps = "p-3 border border-stone-50 rounded-lg";
  const hover = "hover:bg-stone-50 hover:text-[#1f1f1f] font-bold";
  const flexProps = "flex flex-col justify-center items-center gap-2";

  return (
    <Section id ="skills">
      <Header>
        <span>{api.skills.title}</span>
      </Header>
      <Grid style="mt-8 md:mt-10 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {api.skills.items.map((e, index) => (
          <div
            key={index}
            className={`md:min-h-20 ${borderProps} ${flexProps} ${hover}`}
          >
            <Image src={e.img} alt={e.skill} className="w-8 md:w-12" />
            <span className="text-lg">{e.skill}</span>
          </div>
        ))}
      </Grid>
    </Section>
  );
};

export default Skills;
