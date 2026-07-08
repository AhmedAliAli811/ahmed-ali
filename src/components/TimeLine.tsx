/*"use client";

import React from "react";

interface TimeLineProps {
  children: React.ReactNode;
  style?: string;
}
const TimeLine = ({ children, style }: TimeLineProps) => {
  const layout = "flex flex-col relative border-l-2 border-sky-500 pb-5 pl-3";
  const bgEffect =
    "rounded-full border-2 border-sky-500 bg-[#1f1f1f] group-hover:bg-sky-500";

  return (
    <div className={`${layout} ${style} group`}>
      <span className={`w-4 h-4 absolute top-1 left-[-9px] ${bgEffect}`}></span>
      {children}
    </div>
  );
};

export default TimeLine;
*/
"use client";

import React from "react";

interface TimeLineProps {
  children: React.ReactNode;
  style?: string;
  isLast?: boolean;
}

const TimeLine = ({ children, style, isLast }: TimeLineProps) => {
  const layout = `flex flex-col relative pl-8 pb-10 ${
    isLast ? "" : "border-l-2 border-sky-500/30"
  }`;

  return (
    <div className={`${layout} ${style} group`}>
      {/* Outer glow ring */}
      <span
        className="absolute top-1 left-[-11px] w-6 h-6 rounded-full
                   bg-sky-500/10 group-hover:bg-sky-500/20
                   transition-colors duration-300 flex items-center justify-center"
      >
        {/* Inner dot */}
        <span
          className="w-3 h-3 rounded-full border-2 border-sky-500 bg-[#1f1f1f]
                     group-hover:bg-sky-500 group-hover:scale-110
                     transition-all duration-300"
        ></span>
      </span>

      {/* Content card */}
      <div
        className="bg-white/[0.03] border border-white/10 rounded-xl p-4 md:p-5
                   group-hover:border-sky-400/40 group-hover:bg-white/[0.05]
                   transition-all duration-300"
      >
        {children}
      </div>
    </div>
  );
};

export default TimeLine;