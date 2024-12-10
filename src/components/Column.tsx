import React from "react";

interface ColumnProps {
  children: React.ReactNode;
  style?: string;
}
const Column = ({ children, style }: ColumnProps) => {
  const layout = "flex flex-col";

  return <div className={`${layout} ${style}`}>{children}</div>;
};

export default Column;
