import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Choose Us", href: "#why-choose-us" },
  { label: "Projects", href: "#projects" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        scrolled ? "bg-black/95 shadow-elevated" : "bg-black"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <button
            type="button"
            onClick={() => {
              const el = document.querySelector("#home");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="flex items-center gap-2 bg-transparent border-0 p-0 cursor-pointer"
            data-ocid="header.logo_link"
          >
            <img
              src="/assets/pi-logo.png"
              alt="Prithvi Infrastructure Logo"
              className="w-10 h-10 md:w-12 md:h-12 object-cover rounded-sm"
            />
          </button>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="text-[#e74c3c] text-sm font-semibold uppercase tracking-wider hover:text-white transition-smooth"
                data-ocid={`header.nav.${link.href.replace("#", "")}_link`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            className="md:hidden text-[#e74c3c] p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            data-ocid="header.mobile_menu_button"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black border-t border-white/10">
          <nav className="flex flex-col px-4 py-4 gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="text-[#e74c3c] text-sm font-semibold uppercase tracking-wider hover:text-white transition-smooth py-2"
                data-ocid={`header.mobile_nav.${link.href.replace("#", "")}_link`}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
