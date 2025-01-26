"use client";

import React from "react";
import api from "@/data/api";
import Image from "next/image";
import {Section} from "@/components";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface ProjectProps {
    params: Promise<{
        index: string;
    }>;
}

const Project: React.FC<ProjectProps> = ({params}) => {
    const unwrappedParams = React.use(params);
    const {index} = unwrappedParams;

    const projectIndex = parseInt(index);
    const project = api.projects?.items[projectIndex];

    if (!index || isNaN(projectIndex) || !project) {
        return <div>Loading...</div>;
    }

    return (
        <Section style="min-h-screen mt-20">
            {/* Title Section */}
            <h1 className="font-bold text-2xl lg:text-4xl">{project.title}</h1>

            {/* Slider Section */}
            <div className="gap-12 mt-10 grid grid-cols-1 lg:grid-cols-2 justify-between">
                <div>
                    <Swiper
                    navigation={true}
                    pagination={{clickable: true}}
                    modules={[Navigation, Pagination]}
                    className="rounded-lg relative"
                >
                    {project.imgs.map((img, idx) => (
                        <SwiperSlide key={idx}>
                            <Image
                                src={img.src}
                                alt={img.src}
                                width={5000}
                                height={5000}
                                className="w-auto h-auto object-cover"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
                </div>
                <div className="flex flex-col ">
                    <h2 className="font-bold text-xl">Description</h2>
                    <p
                        className="my-3 text-lg"
                        dangerouslySetInnerHTML={{__html: project.description}}
                    />
                    {/* GitHub Link Button */}
                    <a
                        href={project.gitUrl}
                        className="bg-[#ccccff] hover:bg-[#8080ff] text-black hover:text-neutral-300 font-bold py-2 px-4 rounded w-fit mt-4"
                    >
                        View on GitHub
                    </a>
                </div>
            </div>



            {/* Key Features Section */}
            <div className="w-full lg:w-11/12  mt-7">
                <h2 className="text-2xl font-bold">Key Features</h2>

                <ul className="list-disc list-inside space-y-2 mt-3">
                    {project.features.items.map((feature, idx) => (
                        <li
                            key={idx}
                            dangerouslySetInnerHTML={{__html: feature}} // Render as HTML
                        />))}
                </ul>
            </div>

            {/* Tools Section */}
            <div className="w-full  mt-4">
                <h2 className="text-2xl font-bold">Tools Used</h2>
                <ul className="list-disc list-inside space-y-2 mt-3 flex gap-5 flex-wrap">
                    {project.tools.items.map((tool, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                            <Image src={tool.img} alt={tool.tool} width={50} height={50}/>
                            {tool.tool}
                        </li>
                    ))}
                </ul>
            </div>
        </Section>
    );
};

export default Project;
