import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  style?: string;
}

const Container = ({ children, style }: ContainerProps) => {
  // const layout = "px-5p md:px-10p max-w-[1200px] mx-auto";
  const layout = "w-full h-full px-5 md:px-10";


  return <main className={`${layout} ${style}`}>{children}</main>;
};

export default Container;
