import React from "react";

interface HeaderProps {
  children: React.ReactNode;
  style?: string;
}

const Header = ({ children, style }: HeaderProps) => {
  const layout =
    "font-bold text-2xl md:text-4xl flex items-center gap-2 justify-center p-2 text-[#e6ffff] rounded";

  return <h1 className={`${layout} ${style}`}>{children}</h1>;
};

export default Header;
