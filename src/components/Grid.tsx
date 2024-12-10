import React from "react";

interface GridProps {
  children: React.ReactNode;
  style?: string;
}
const Grid = ({ children, style }: GridProps) => {
  const layout = "grid gap-5";

  return <div className={`${layout} ${style}`}>{children}</div>;
};

export default Grid;
