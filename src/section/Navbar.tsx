import {useState} from "react";
import {navLinks} from "../constants";
import {Menu, X} from "lucide-react";

const NavItems = ({ onClick = () => {} }) => (
    <ul className="nav-ul">
        {navLinks.map((item) => (
            <li key={item.id} className="nav-li">
                <a href={item.href} className="nav-li_a" onClick={onClick}>
                    {item.name}
                </a>
            </li>
        ))}
    </ul>
);

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleMenu: () => void = () => setIsOpen(!isOpen);
    const closeMenu: () => void = () => setIsOpen(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center py-5 mx-auto c-space">
                    <a href="/" className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">Narek</a>

                    <button
                        onClick={toggleMenu}
                        className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
                        aria-label="Toggle menu">
                        {isOpen ? <X /> : <Menu />}
                    </button>

                    <nav className="sm:flex hidden">
                        <NavItems />
                    </nav>
                </div>
            </div>

            <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
                <nav className="p-5">
                    <NavItems onClick={closeMenu} />
                </nav>
            </div>
        </header>
    )
}
