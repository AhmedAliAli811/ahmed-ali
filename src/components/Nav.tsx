// "use client"
// import React, { useState } from "react";
// import Link from "next/link";
//
// const NavBar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//
//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-800 text-white py-4 font-bold shadow-lg">
//       <div className="mx-auto flex items-center justify-between px-6">
//         {/* Logo */}
//         <Link href="/" className="text-xl font-bold font-bokor">
//           Ahmed Ali
//         </Link>
//
//         {/* Burger Menu Icon */}
//         <button
//           className="block md:hidden text-white focus:outline-none"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//         >
//           <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"} text-2xl`}></i>
//         </button>
//
//         {/* Links for Desktop */}
//         <div className="hidden md:flex space-x-6">
//           <Link
//             href="/#about"
//             className="hover:bg-[#ccad00] hover:text-gray-900 px-4 py-2 rounded-lg transition duration-300"
//           >
//             About Me
//           </Link>
//           <Link
//             href="/#exper"
//             className="hover:bg-[#ccad00] hover:text-gray-900 px-4 py-2 rounded-lg transition duration-300"
//           >
//             Experience
//           </Link>
//           <Link
//             href="/#projects"
//             className="hover:bg-[#ccad00] hover:text-gray-900 px-4 py-2 rounded-lg transition duration-300"
//           >
//             Projects
//           </Link>
//           <Link
//             href="/#skills"
//             className="hover:bg-[#ccad00] hover:text-gray-900 px-4 py-2 rounded-lg transition duration-300"
//           >
//             Skills
//           </Link>
//         </div>
//       </div>
//
//       {/* Links for Mobile */}
//       {isMenuOpen && (
//         <div className="md:hidden bg-gray-800 flex flex-col space-y-4 px-6 py-4">
//           <Link
//             href="/#about"
//             className="hover:bg-[#ccad00] hover:text-gray-900 px-4 py-2 rounded-lg transition duration-300"
//             onClick={() => setIsMenuOpen(false)}
//           >
//             About Me
//           </Link>
//           <Link
//             href="/#exper"
//             className="hover:bg-[#ccad00] hover:text-gray-900 px-4 py-2 rounded-lg transition duration-300"
//             onClick={() => setIsMenuOpen(false)}
//           >
//             Experience
//           </Link>
//           <Link
//             href="/#projects"
//             className="hover:bg-[#ccad00] hover:text-gray-900 px-4 py-2 rounded-lg transition duration-300"
//             onClick={() => setIsMenuOpen(false)}
//           >
//             Projects
//           </Link>
//           <Link
//             href="/#skills"
//             className="hover:bg-[#ccad00] hover:text-gray-900 px-4 py-2 rounded-lg transition duration-300"
//             onClick={() => setIsMenuOpen(false)}
//           >
//             Skills
//           </Link>
//         </div>
//       )}
//     </nav>
//   );
// };
//
// export default NavBar;
"use client";
import React, { useState } from "react";
import Link from "next/link";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 text-white py-4 font-bold shadow-lg">
      <div className="mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold font-bokor">
          Ahmed Ali
        </Link>

        {/* Hamburger Menu (Visible on Small Screens) */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white focus:outline-none md:hidden"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Menu Links */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute top-16 left-0 w-full bg-gray-800 md:static md:flex md:w-auto md:space-x-6 md:bg-transparent`}
        >
          <Link
            href="/#about"
            className="block px-4 py-2 hover:bg-[#ccad00] hover:text-gray-900 rounded-lg transition duration-300 md:inline"
            onClick={() => setIsMenuOpen(false)} // Close menu on click
          >
            About Me
          </Link>
          <Link
            href="/#exper"
            className="block px-4 py-2 hover:bg-[#ccad00] hover:text-gray-900 rounded-lg transition duration-300 md:inline"
            onClick={() => setIsMenuOpen(false)} // Close menu on click
          >
            Experience
          </Link>
          <Link
            href="/#projects"
            className="block px-4 py-2 hover:bg-[#ccad00] hover:text-gray-900 rounded-lg transition duration-300 md:inline"
            onClick={() => setIsMenuOpen(false)} // Close menu on click
          >
            Projects
          </Link>
          <Link
            href="/#skills"
            className="block px-4 py-2 hover:bg-[#ccad00] hover:text-gray-900 rounded-lg transition duration-300 md:inline"
            onClick={() => setIsMenuOpen(false)} // Close menu on click
          >
            Skills
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
