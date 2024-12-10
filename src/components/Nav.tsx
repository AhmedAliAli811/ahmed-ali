// // components/NavBar.tsx
// import React from 'react';
// import Link from 'next/link';
//
// const Nav: React.FC = () => {
//     return (
//         <nav className="flex text-white items-center justify-between bg-gray-800 p-4">
//             <div className="text-2xl font-bold bokor-regular">
//                 <Link href="/">
//                     Ahmed Ali Ali
//                 </Link>
//             </div>
//             <ul className="flex space-x-4">
//                 <li>
//                     <Link href="/#about">
//                         About Me
//                     </Link>
//                 </li>
//                 <li>
//                     <Link href="/#exper">
//                         Experience
//                     </Link>
//                 </li>
//                 <li>
//                     <Link href="/#projects">
//                         Projects
//                     </Link>
//                 </li>
//                 <li>
//                     <Link href="/#skills">
//                         Skills
//                     </Link>
//                 </li>
//                 <li>
//                     <Link href="/#contact">
//                         Contact Me
//                     </Link>
//                 </li>
//             </ul>
//         </nav>
//     );
// };
//
// export default Nav;
//
// import React from 'react';
// import { Navbar, Container, Nav } from 'react-bootstrap';
// import Link from 'next/link';
//
// const NavBar = () => {
//   return (
//     <Navbar bg="dark" variant="dark" expand="lg">
//       <Container>
//         <Navbar.Brand href="/">
//             Ahmed Ali Ali
//         </Navbar.Brand>
//
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="ms-auto">
//             <Nav.Link href="#about">About Me</Nav.Link>
//             <Nav.Link href="#exper">Experience</Nav.Link>
//             <Nav.Link href="#projects">Projects</Nav.Link>
//             <Nav.Link href="#skills">Skills</Nav.Link>
//             <Nav.Link href="#contact">Contact Me</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };
//
// export default NavBar;
// import React from "react";
// import Link from "next/link";
//
// const NavBar = () => {
//   return (
//     <nav className="bg-gray-800 text-white py-4">
//       <div className="  mx-auto flex items-center justify-between px-6">
//         <Link href="/" className="text-2xl font-semibold">
//           Ahmed Ali Ali
//         </Link>
//         <div className="flex space-x-6">
//           <Link href="#about" className="hover:text-gray-400">About Me</Link>
//           <Link href="#exper" className="hover:text-gray-400">Experience</Link>
//           <Link href="#projects" className="hover:text-gray-400">Projects</Link>
//           <Link href="#skills" className="hover:text-gray-400">Skills</Link>
//           <Link href="#contact" className="hover:text-gray-400">Contact Me</Link>
//         </div>
//       </div>
//     </nav>
//   );
// };
//
// export default NavBar;
import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="bg-gray-800 text-white py-4 font-bold">
      <div className="mx-auto flex items-center justify-between px-6">
        <Link href="/" className="text-xl font-bold font-bokor">
          Ahmed Ali
        </Link>
        <div className="flex space-x-6">
          <Link
            href="/#about"
            className="hover:bg-[#ccad00] hover:text-gray-900 px-4 py-2 rounded-lg transition duration-300"
          >
            About Me
          </Link>
          <Link
            href="/#exper"
            className="hover:bg-[#ccad00] hover:text-gray-900 px-4 py-2 rounded-lg transition duration-300"
          >
            Experience
          </Link>
          <Link
            href="/#projects"
            className="hover:bg-[#ccad00] hover:text-gray-900 px-4 py-2 rounded-lg transition duration-300"
          >
            Projects
          </Link>
          <Link
            href="/#skills"
            className="hover:bg-[#ccad00] hover:text-gray-900 px-4 py-2 rounded-lg transition duration-300"
          >
            Skills
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

