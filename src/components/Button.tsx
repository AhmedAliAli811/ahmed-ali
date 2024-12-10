import React from "react";

interface ButtonProps {
  title: string;
  link: string;
  style: string;
}

const Button: React.FC<ButtonProps> = ({ title, link, style }) => {
  return (
    <a
      href={link}
      className={`py-2 px-4 rounded-md ${style}`} // Tailwind styles
    >
      {title}
    </a>
  );
};

export default Button;