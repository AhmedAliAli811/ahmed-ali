import api from "@/data/api";

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-center p-3 text-lg lg:text-xl">
      {api.copyrights}
    </footer>
  );
};

export default Footer;
