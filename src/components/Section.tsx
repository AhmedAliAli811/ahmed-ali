import React from "react";

interface SectionProps {
  children: React.ReactNode;
  style?: string;   id?: string;

}
const Section = ({ children, style , id }: SectionProps) => {
  const layout = "py-8 md:py-12";

  return <section id = {id} className={`${layout} ${style}`}>{children}</section>;
};

export default Section;
