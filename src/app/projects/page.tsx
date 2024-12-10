// "use client";
//
// import api from "@/data/api";
// import Link from "next/link";
// import Image from "next/image";
// import { Grid, Header, Section } from "@/components";
//
// const Projects = () => {
//   return (
//     <Section id = "projects">
//       <Header>
//         <span>{api.projects.title}</span>
//       </Header>
//       <Grid style="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 md:mt-10">
//         {api.projects.items.map((e, index) => (
//             <div key={index} className="rounded flex flex-col gap-1">
//                 <Link
//                     href={`/projects/${index}`}
//                     className="w-fit h-fit mx-auto p-2 text-center text-lg hover:bg-stone-50 hover:text-[#1f1f1f] font-bold"
//                 >
//                     <Image
//                         src={e.imgs[0]}
//                         height={350}
//                         alt={e.title}
//                         priority/>
//                     {e.title}
//                 </Link>
//             </div>
//         ))}
//       </Grid>
//     </Section>
//   );
// };
//
// export default Projects;
"use client";

import api from "@/data/api";
import Link from "next/link";
import Image from "next/image";
import { Grid, Header, Section } from "@/components";

const Projects = () => {
  return (
    <Section id="projects">
      <Header>
        <span>{api.projects.title}</span>
      </Header>
      <Grid style="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 md:mt-10">
        {api.projects.items.map((e, index) => (
          <div key={index} className="rounded flex flex-col gap-1">
            <Link
              href={`/projects/${index}`}
              className="w-fit h-fit mx-auto p-2 text-center text-lg hover:bg-stone-50 hover:text-[#1f1f1f] font-bold"
            >
              <Image
                src={e.imgs[0]}
                height={350}
                alt={e.title}
                priority
              />
              <span className="mt-5">{e.title}</span>
            </Link>
          </div>
        ))}
      </Grid>
    </Section>
  );
};

export default Projects;
