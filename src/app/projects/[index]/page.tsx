// "use client";
//
// import React from "react";
// import api from "@/data/api";
// import Image from "next/image";
// import {Grid, Section} from "@/components";
//
// interface ProjectProps {
//     params: Promise<{
//         index: string;
//     }>;
// }
//
// const Project: React.FC<ProjectProps> = ({params}) => {
//     const unwrappedParams = React.use(params);
//     const {index} = unwrappedParams;
//
//     const projectIndex = parseInt(index);
//     const project = api.projects?.items[projectIndex];
//
//     if (!index || isNaN(projectIndex) || !project) {
//         return <div>Loading...</div>;
//     }
//
//     return (
//         <Section style="min-h-screen">
//             <h1 className="font-bold text-2xl lg:text-4xl">{project.title}</h1>
//             <Grid style="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12">
//                 {project.imgs.map((e, idx) => (
//                     <Image
//                         key={idx}
//                         src={e.src}
//                         alt={e.src}
//                         width={250}
//                         height={150}
//                         priority
//                         className="w-full"
//                     />
//                 ))}
//             </Grid>
//             <p>{project.description}</p>
//         </Section>
//     );
// };
//
// export default Project;
// "use client";
//
// import React from "react";
// import api from "@/data/api";
// import Image from "next/image";
// import { Section } from "@/components";
//
// interface ProjectProps {
//   params: Promise<{
//     index: string;
//   }>;
// }
//
// const Project: React.FC<ProjectProps> = ({ params }) => {
//   const unwrappedParams = React.use(params);
//   const { index } = unwrappedParams;
//
//   const projectIndex = parseInt(index);
//   const project = api.projects?.items[projectIndex];
//
//   if (!index || isNaN(projectIndex) || !project) {
//     return <div>Loading...</div>;
//   }
//
//   return (
//     <Section style="min-h-screen">
//       {/* Title Section */}
//       <h1 className="font-bold text-2xl lg:text-4xl">{project.title}</h1>
//
//       {/* Slider Section */}
//       <div className="mt-6">
//         <div className="relative">
//           <div className="relative h-56 overflow-hidden rounded-lg md:h-max">
//             {project.imgs.map((e, idx) => (
//               <div
//                 key={idx}
//                 className={`duration-700 ease-in-out`}
//               >
//                 <Image
//                   src={e.src}
//                   alt={e.src}
//                   width={1500}
//                   height={1500}
//                   priority
//                   className="w-fit h-max object-cover"
//                 />
//               </div>
//             ))}
//           </div>
//           {/* Slider Buttons */}
//           <button
//             type="button"
//             className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
//             // Add functionality for previous slide
//           >
//             <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
//               <svg
//                 className="w-4 h-4 text-slate-600"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 6 10"
//               >
//                 <path
//                   stroke="currentColor"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M5 1 1 5l4 4"
//                 />
//               </svg>
//               <span className="sr-only">Previous</span>
//             </span>
//           </button>
//           <button
//             type="button"
//             className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
//             // Add functionality for next slide
//           >
//             <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
//               <svg
//                 className="w-4 h-4 text-slate-600"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 6 10"
//               >
//                 <path
//                   stroke="currentColor"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M1 9l4-4-4-4"
//                 />
//               </svg>
//               <span className="sr-only">Next</span>
//             </span>
//           </button>
//         </div>
//       </div>
//
//       {/* Description Section */}
//       <div className="mt-6 flex flex-col md:w-1/2">
//         <h2 className="font-bold text-xl">Description</h2>
//         <p className="my-3 text-gray-600">{project.description}</p>
//
//         {/* GitHub Link Button */}
//         <a
//           href={project.gitUrl}
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-fit mt-4"
//         >
//           View on GitHub
//         </a>
//       </div>
//
//       {/* Key Features Section */}
//       <div className="w-full lg:w-11/12 mx-auto mt-7 p-3">
//         <h2 className="text-2xl font-bold">Key Features</h2>
//         <ul className="list-disc list-inside space-y-2 mt-3">
//           {project.features.items.map((feature, idx) => (
//             <li key={idx}>{feature}</li>
//           ))}
//         </ul>
//       </div>
//
//       {/* Tools Section */}
//       <div className="w-full lg:w-11/12 mx-auto mt-4 p-3">
//         <h2 className="text-2xl font-bold">Tools Used</h2>
//         <ul className="list-disc list-inside space-y-2 mt-3">
//           {project.tools.items.map((tool, idx) => (
//             <li key={idx} className="flex items-center gap-2">
//               <Image src={tool.img} alt={tool.tool} width={20} height={20} />
//               {tool.tool}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </Section>
//   );
// };
//
// export default Project;
// "use client";
//
// import React from "react";
// import api from "@/data/api";
// import Image from "next/image";
// import { Section } from "@/components";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
//
// interface ProjectProps {
//     params: Promise<{
//         index: string;
//     }>;
// }
//
// const Project: React.FC<ProjectProps> = ({ params }) => {
//     const unwrappedParams = React.use(params);
//     const { index } = unwrappedParams;
//
//   const projectIndex = parseInt(index);
//   const project = api.projects?.items[projectIndex];
//
//   if (!index || isNaN(projectIndex) || !project) {
//     return <div>Loading...</div>;
//   }
//
//   return (
//     <Section style="min-h-screen">
//       {/* Title Section */}
//       <h1 className="font-bold text-2xl lg:text-4xl">{project.title}</h1>
//
//       {/* Slider Section */}
//       <div className="mt-10">
//         <Swiper
//           navigation={true}
//           pagination={{ clickable: true }}
//           modules={[Navigation, Pagination]}
//           className="rounded-lg"
//         >
//           {project.imgs.map((img, idx) => (
//             <SwiperSlide key={idx}>
//               <Image
//                 src={img.src}
//                 alt={img.src}
//                 width={5000}
//                 height={5000}
//                 className="w-3/6 h-auto object-cover"
//               />
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//
//       {/* Description Section */}
//       <div className="mt-6 flex flex-col md:w-1/2">
//         <h2 className="font-bold text-xl">Description</h2>
//         <p className="my-3 text-gray-600">{project.description}</p>
//
//         {/* GitHub Link Button */}
//         <a
//           href={project.gitUrl}
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-fit mt-4"
//         >
//           View on GitHub
//         </a>
//       </div>
//
//       {/* Key Features Section */}
//       <div className="w-full lg:w-11/12 mx-auto mt-7 p-3">
//         <h2 className="text-2xl font-bold">Key Features</h2>
//         <ul className="list-disc list-inside space-y-2 mt-3">
//           {project.features.items.map((feature, idx) => (
//             <li key={idx}>{feature}</li>
//           ))}
//         </ul>
//       </div>
//
//       {/* Tools Section */}
//       <div className="w-full lg:w-11/12 mx-auto mt-4 p-3">
//         <h2 className="text-2xl font-bold">Tools Used</h2>
//         <ul className="list-disc list-inside space-y-2 mt-3">
//           {project.tools.items.map((tool, idx) => (
//             <li key={idx} className="flex items-center gap-2">
//               <Image src={tool.img} alt={tool.tool} width={20} height={20} />
//               {tool.tool}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </Section>
//   );
// };
//
// export default Project;


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
        <Section style="min-h-screen">
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
                    <p className="my-3">{project.description}</p>

                    {/* GitHub Link Button */}
                    <a
                        href={project.gitUrl}
                        className="bg-[#ccccff] hover:bg-[#8080ff] text-black hover:text-neutral-300 font-bold py-2 px-4 rounded w-fit mt-4"
                    >
                        View on GitHub
                    </a>
                </div>
            </div>

            {/* Description Section */}


            {/* Key Features Section */}
            <div className="w-full lg:w-11/12  mt-7">
                <h2 className="text-2xl font-bold">Key Features</h2>
                <ul className="list-disc list-inside space-y-2 mt-3">
                    {project.features.items.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                    ))}
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
