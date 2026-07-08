/*"use client";

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
*/
"use client";

import api from "@/data/api";
import Link from "next/link";
import Image from "next/image";
import { Grid, Header, Section } from "@/components";
import { ArrowUpRight } from "lucide-react";

const Projects = () => {
  return (
    <Section id="projects">
      <Header>
        <span>{api.projects.title}</span>
      </Header>
      <Grid style="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 md:mt-10 gap-6">
        {api.projects.items.map((project, index) => (
          <Link
            href={`/projects/${index}`}
            key={index}
            className="group relative flex flex-col rounded-2xl overflow-hidden
                       bg-white/[0.03] border border-white/10
                       hover:border-teal-400/40 hover:bg-white/[0.05]
                       transition-all duration-300 hover:-translate-y-1
                       hover:shadow-xl hover:shadow-teal-500/10"
          >
            {/* Image */}
            <div className="relative w-full aspect-video overflow-hidden bg-black/20">
              <Image
                src={project.imgs[0]}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority
              />
              {/* Gradient overlay + CTA */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent
                           opacity-0 group-hover:opacity-100 transition-opacity duration-300
                           flex items-end justify-end p-3"
              >
                <span
                  className="flex items-center gap-1 text-xs font-semibold text-white
                             bg-teal-500/90 px-3 py-1.5 rounded-full
                             translate-y-2 group-hover:translate-y-0 transition-transform duration-300"
                >
                  View Project <ArrowUpRight size={14} />
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col gap-3 p-4 flex-1">
              <h3 className="font-bold text-base lg:text-lg leading-snug line-clamp-2">
                {project.title}
              </h3>

              {/* Tools Used */}
              <div className="mt-auto pt-3 border-t border-white/10">
                <p className="text-[11px] uppercase tracking-wide text-white/40 font-semibold mb-2">
                  Tools Used
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tools.items.slice(0, 5).map((tool, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-1.5 bg-white/5 rounded-full pl-1 pr-2.5 py-1
                                 hover:bg-white/10 transition-colors"
                    >
                      <Image
                        src={tool.img}
                        alt={tool.tool}
                        width={16}
                        height={16}
                        className="object-contain rounded-sm"
                      />
                      <span className="text-[11px] text-white/70 font-medium">
                        {tool.tool}
                      </span>
                    </div>
                  ))}
                  {project.tools.items.length > 5 && (
                    <span className="flex items-center text-xs text-white/50 px-1">
                      +{project.tools.items.length - 5} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </Grid>
    </Section>
  );
};

export default Projects;