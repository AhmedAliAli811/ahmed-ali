/*"use client";

import api from "@/data/api";
import { Column, Header, Section, TimeLine } from "@/components";

const Experience = () => {
  return (
    <Section id = "exper">
      <Header>
        <span>{api.experiance.title}</span>
      </Header>
      <Column style="mt-8 lg:mt-10">
        {api.experiance.items.map((e, index) => (
          <TimeLine key={index}>
            <span>{e.date}</span>
            <h2 className="font-bold text-lg md:text-xl">{e.role}</h2>
            <span className="italic text-gray-400">
              {e.company}, {e.city}
            </span>
          </TimeLine>
        ))}
      </Column>
    </Section>
  );
};

export default Experience;
*/

"use client";

import api from "@/data/api";
import { Column, Header, Section, TimeLine } from "@/components";

const Experience = () => {
  return (
    <Section id="exper">
      <Header>
        <span>{api.experiance.title}</span>
      </Header>
      <Column style="mt-8 lg:mt-10">
        {api.experiance.items.map((e, index) => (
          <TimeLine key={index} isLast={index === api.experiance.items.length - 1}>
            <span className="text-xs md:text-sm font-semibold text-sky-400 tracking-wide uppercase">
              {e.date}
            </span>
            <h2 className="font-bold text-lg md:text-xl mt-1">{e.role}</h2>
            <span className="italic text-gray-400 text-sm md:text-base">
              {e.company}, {e.city}
            </span>
          </TimeLine>
        ))}
      </Column>
    </Section>
  );
};

export default Experience;