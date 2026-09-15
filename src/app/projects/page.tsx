"use client";

import { useState, useEffect, useRef } from "react";
import api from "@/data/api";
import Link from "next/link";
import Image from "next/image";
import { Grid, Header, Section } from "@/components";
import { ArrowUpRight } from "lucide-react";

const AUTO_SWAP_INTERVAL = 2500; // ms

const ProjectImage = ({ imgs, alt }: { imgs: { src: string }[]; alt: string }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const hasMultipleImages = imgs.length > 1;

  useEffect(() => {
    if (!hasMultipleImages || isPaused) return;

    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % imgs.length);
    }, AUTO_SWAP_INTERVAL);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [hasMultipleImages, isPaused, imgs.length]);

  return (
    <div
      className="relative w-full h-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {imgs.map((img, i) => (
        <Image
          key={i}
          src={img.src}
          alt={alt}
          fill
          className={`object-cover transition-opacity duration-700 ease-in-out group-hover:scale-105 transition-transform ${
            i === activeIndex ? "opacity-100" : "opacity-0"
          }`}
          priority={i === 0}
        />
      ))}

      {/* Dots indicator, optional */}
      {hasMultipleImages && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-10">
          {imgs.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === activeIndex ? "w-4 bg-white" : "w-1.5 bg-white/40"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

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
              <ProjectImage imgs={project.imgs} alt={project.title} />

              {/* Gradient overlay + CTA */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent
                           opacity-0 group-hover:opacity-100 transition-opacity duration-300
                           flex items-end justify-end p-3 z-20 pointer-events-none"
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