    "use client";

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
