import { useState, useEffect } from "react";
import "./Navbar.scss";
import MobileNav from "../MobileNav/MobileNav";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onscroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onscroll);

    return () => window.removeEventListener("scroll", onscroll);
  }, []);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
      {/* <nav className="nav-wrapper"> */}
      <nav className={scrolled ? "scrolled" : ""}>
        <div className="nav-content">
          <img className="logo" src="./" alt="" />

          <ul>
            <li>
              <a className="nav-item" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="nav-item" href="#skills">
                Skills
              </a>
            </li>
            <li>
              <a className="nav-item" href="#experience">
                Work experience
              </a>
            </li>
            <li>
              <a className="nav-item" href="#gallery">
                Gallery
              </a>
            </li>
            <button className="contact-btn" id="contact" onClick={() => {}}>
              Contact Me
            </button>
          </ul>

          <button className="menu-btn" onClick={toggleMenu}>
            <span
              className="material-symbols-outlined"
              style={{ fontSize: "1.8rem" }}
            >
              {openMenu ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
