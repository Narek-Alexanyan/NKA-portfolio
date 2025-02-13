import gsap from "gsap";

import { useRef, useState } from "react";
import { navLinks } from "../constants";
import { Menu, X } from "lucide-react";

const NavItems = ({ onClick = () => {} }) => {
  const linkRefs = useRef<(HTMLLIElement | null)[]>([]);

  const handleMouseEnter = (index: number) => {
    const link = linkRefs.current[index];
    if (link) {
      gsap.to(linkRefs.current[index], {
        duration: 0.3,
        scale: 1.1,
        color: "#ff7f50",
        ease: "power2.out",
      });

      gsap.fromTo(
        link.querySelector(".nav-li_underline"),
        { scaleX: 0, transformOrigin: "left" },
        { scaleX: 1, duration: 0.3, ease: "power2.out" }
      );
    }
  };

  const handleMouseLeave = (index: number) => {
    const link = linkRefs.current[index];
    if (link) {
      gsap.to(link, {
        duration: 0.3,
        scale: 1,
        color: "#a1a1a1",
        ease: "power2.out",
      });

      gsap.to(link.querySelector(".nav-li_underline"), {
        scaleX: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  return (
    <ul className="nav-ul">
      {navLinks.map((item, index) => (
        <li
          ref={(el) => {
            linkRefs.current[index] = el;
          }}
          key={item.id}
          className="nav-li"
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={() => handleMouseLeave(index)}
        >
          <a href={item.href} className="nav-li_a" onClick={onClick}>
            {item.name}
            <span
              className="nav-li_underline"
              style={{
                display: "block",
                height: "2px",
                background: "#ff7f50",
              }}
            />
          </a>
        </li>
      ))}
    </ul>
  );
};

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu: () => void = () => setIsOpen(!isOpen);
  const closeMenu: () => void = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <a
            href="/"
            className="text-neutral-400 font-bold text-xl hover:text-white transition-colors"
          >
            Narek
          </a>

          <button
            onClick={toggleMenu}
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
            aria-label="Toggle menu"
          >
            {isOpen ? <X /> : <Menu />}
          </button>

          <nav className="sm:flex hidden">
            <NavItems />
          </nav>
        </div>
      </div>

      <div className={`nav-sidebar ${isOpen ? "max-h-screen" : "max-h-0"}`}>
        <nav className="p-5">
          <NavItems onClick={closeMenu} />
        </nav>
      </div>
    </header>
  );
};
