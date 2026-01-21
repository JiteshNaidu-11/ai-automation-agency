import { useEffect, useState } from "react";
import logo from "../assets/logo.png";

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300
        ${scrolled
          ? "bg-gray-800/90 backdrop-blur shadow-md h-14"
          : "bg-transparent h-16"
        }`}
    >
      <div className="h-full px-8 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 text-white">
          <img src={logo} alt="Logo" className="h-7 w-7" />
          <span className="text-lg font-semibold">
            AI Automation Agency
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-white">
          <a href="#services" className="hover:text-blue-400">Services</a>
          <a href="#how-it-works" className="hover:text-blue-400">How It Works</a>
          <a href="#about" className="hover:text-blue-400">About </a>
          <a href="#contact" className="hover:text-blue-400">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
