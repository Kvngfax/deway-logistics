import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

// Adjust the path/name to match your asset if different.
import logo from "../assets/Deway logo.png";

const LINKS = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About us" },
  { to: "/services", label: "Our services" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`hdr ${scrolled ? "scrolled" : ""}`}>
      <div className="wrap nav">
        <Link to="/" className="brand" aria-label="Deway Logistics — home">
          <img src={logo} alt="Deway Logistics" style={{ height: 110, width: "auto" }} />
        </Link>

        <nav className="nav-links" aria-label="Primary">
          {LINKS.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end} className="nav-link">
              {l.label}
            </NavLink>
          ))}
          <Link to="/booking" className="btn btn-primary nav-cta">
            Book Now
          </Link>
        </nav>

        <button
          className="burger"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <div className={`mobile-menu ${open ? "open" : ""}`}>
        <div className="inner">
          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className="nav-link"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/booking"
            className="btn btn-primary"
            style={{ marginTop: 10, justifyContent: "center" }}
            onClick={() => setOpen(false)}
          >
            Book Now
          </Link>
        </div>
      </div>
    </header>
  );
}