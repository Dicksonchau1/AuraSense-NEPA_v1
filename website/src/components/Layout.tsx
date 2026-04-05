import { Link, NavLink } from "react-router-dom";

const navLinks = [
  { label: "Platform", href: "/platform" },
  { label: "Products", href: "/products" },
  { label: "Resources", href: "/resources" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="logo">
          AuraSense
        </Link>
        <nav className="main-nav">
          {navLinks.map((link) => (
            <NavLink key={link.href} to={link.href} className="nav-link">
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="logo">AuraSense</span>
          <p>Deterministic neuromorphic edge infrastructure.</p>
        </div>
        <div className="footer-links">
          <div className="footer-col">
            <h4>Platform</h4>
            <Link to="/platform">NEPA Overview</Link>
            <Link to="/products/sfsvc">SFSVC</Link>
            <Link to="/products/nermn">NERMN</Link>
            <Link to="/products/nssim">NSSIM</Link>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <Link to="/resources">Resources</Link>
            <Link to="/careers">Careers</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="footer-col">
            <h4>Legal</h4>
            <Link to="/privacy">Privacy</Link>
            <Link to="/terms">Terms</Link>
            <Link to="/cookies">Cookies</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} AuraSense. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
