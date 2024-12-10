"use client";

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
