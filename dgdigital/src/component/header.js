import React, { useState ,useEffect } from "react";
import { Link } from 'react-router-dom';

export default function Header() {
    // State to track the collapse of the navbar
    // const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    // Function to close the navbar when a link is clicked
    const closeNavbar = () => {
        setIsNavbarOpen(false);
    };

    // Toggle Navbar state when burger icon is clicked
    // const toggleNavbar = () => {
    //     setIsNavbarOpen(!isNavbarOpen);
    // };

    // *******************for desktop**********************
    const [openSubMenu, setOpenSubMenu] = useState(null);

    const handleMouseEnter = (index) => {
        setOpenSubMenu(index);
    };

    const handleMouseLeave = () => {
        setOpenSubMenu(null);
    };
    // ********************************************************************

    // State to manage the navbar visibility
    const [isMenuOpen, setMenuOpen] = useState(false);

    // Function to toggle the menu
    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen); // Toggle the menu state
    };

    // Function to close the menu
    // const closeMenu = () => {
    //     setMenuOpen(false); // Explicitly close the menu
    // };
    // **********************************************

    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    const toggleNavbar = () => {
      setIsNavbarOpen(!isNavbarOpen);
    };
  
    const closeMenu = () => {
      setIsNavbarOpen(false);
    };
    

    return (
        <>
            {/* *****************************for desktop******************************* */}
            <header className="header_wrapper dg-header dg-desktop">
                <nav className="navbar navbar-expand-lg">
                    <div className="container primary-menu-inner">
                        <Link className="navbar-brand" to='/'>
                            <img
                                decoding="async"
                                src="digital-marketing-company/DG-Logo.png"
                                className="img-fluid"
                                alt="best digital marketing company in India"
                                width={50}
                            />
                        </Link>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <i className="fa-solid fa-bars" />
                        </button>

                        <div className="collapse navbar-collapse justify-content-end" id="navbarNav" >
                            {/* Close Button */}
                            <Link className="mobile-logo mobile-social-icone" to='/'>
                                <img
                                    src="digital-marketing-company/software-company-in-patna.png"
                                    alt="best marketing in patna"
                                />
                            </Link>
                            <button className="close-btn">
                                <div className="close-under">
                                    <i className="fa-solid fa-times" />
                                </div>
                            </button>
                            <ul className="navbar-nav menu-navbar-nav">
                                <li className="nav-item dropdown nav-menus" onMouseEnter={() => handleMouseEnter(1)}
                                    onMouseLeave={handleMouseLeave}>

                                    <Link className="nav-link " aria-current="page" >
                                        Services <i className="fa-solid fa-angle-down" />
                                    </Link>

                                    {openSubMenu === 1 && (

                                        <ul className="dropdown-menu nav-menus-hover">
                                            <li>
                                                <Link className="nav-link" to='/performanceMarketing' onClick={() => setOpenSubMenu(null)}>
                                                    Performance Marketing
                                                </Link>
                                            </li>

                                            <li>
                                                <Link className="nav-link" to='/digitalmarketing' onClick={() => setOpenSubMenu(null)}>
                                                    Digital Marketing
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="nav-link" to='/webappdevelopment' onClick={() => setOpenSubMenu(null)}>
                                                    Website and App Development
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="nav-link" to='/softwareerpcrm' onClick={() => setOpenSubMenu(null)}>
                                                    Software/ERP/CRM Development
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="nav-link" to='/prservices' onClick={() => setOpenSubMenu(null)}>
                                                    PR Services
                                                </Link>
                                            </li>
                                        </ul>
                                    )}
                                </li>
                                <li className="nav-item ">
                                    <Link to='/about-us' className="nav-link">
                                        About Us
                                        <i className="ri-arrow-down-s-line" />
                                    </Link>
                                </li>
                                <Link className="nav-item">
                                    <Link className="nav-link" to='/our-team'>
                                        Our Team
                                    </Link>
                                </Link>
                                <li className="nav-item">
                                    <Link className="nav-link" to='/contact-us'>
                                        Contact Us
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to='/careers'>
                                        Careers
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to='/blog'>
                                        Blog
                                    </Link>
                                </li>
                                <li className="nav-item dg-whatpp dg-desktop-whatp">
                                    <a
                                        className="nav-link btn btn-dark text-white hader-wahatp-btn"
                                        href="https://wa.me/917368083688"
                                        target="_blank"
                                    >
                                        WhatsApp: +91-7368083688
                                    </a>
                                </li>
                                <li className="nav-item dg-whatpp mobile-social-icone">
                                    <a
                                        className="nav-link btn btn-dark text-white hader-wahatp-btn"
                                        href="https://wa.me/917368083688"
                                        target="_blank"
                                    >
                                        <i className="fa-brands fa-whatsapp me-2" />
                                        +91-7368083688
                                    </a>
                                </li>
                            </ul>
                            <ul className=" list-unstyled m-3  mobile-social-icone">
                                <div className="d-flex justify-content-around">
                                    <a href="https://www.facebook.com/DGDigitalTM">
                                        <li>
                                            <i className="fa-brands fa-facebook text-black" />
                                        </li>
                                    </a>
                                    <a href="https://www.linkedin.com/company/devout-growth-digital/">

                                        <li>
                                            <i className="fa-brands fa-x-twitter text-black" />
                                        </li>
                                    </a>
                                    <a href="https://www.youtube.com/@dgdigitaltm">
                                        <li>
                                            <i className="fa-brands fa-youtube text-black" />
                                        </li>
                                    </a>
                                    <a href="https://x.com/i/flow/login?redirect_after_login=%2FDgDigitaltm">

                                        <li>
                                            <i className="fa-brands fa-linkedin text-black" />
                                        </li>
                                    </a>
                                </div>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>

            {/* **********************************************mobile******************** */}
            <header className="header_wrapper dg-header dg-mobile">
      <nav className="navbar navbar-expand-lg">
        <div className="container primary-menu-inner">
          <Link className="navbar-brand" to='/'>
            <img
              decoding="async"
              src="digital-marketing-company/DG-Logo.png"
              className="img-fluid"
              alt="best digital marketing company in India"
              width={50}
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            aria-expanded={isNavbarOpen ? "true" : "false"}
            onClick={toggleNavbar}
          >
            <i className="fa-solid fa-bars" />
          </button>

          <div
            className={`collapse navbar-collapse justify-content-end ${isNavbarOpen ? "show" : ""}`}
            id="navbarNav"
          >
            {/* Close Button */}
            <Link className="mobile-logo mobile-social-icone" to='/'>
              <img
                src="digital-marketing-company/software-company-in-patna.png"
                alt="best marketing in patna"
              />
            </Link>
            <button id="clos-btn" className="close-btn" onClick={closeMenu}>
              <div className="close-under">
                <i className="fa-solid fa-times" />
              </div>
            </button>
            <ul className="navbar-nav menu-navbar-nav">
              <li className="nav-item dropdown nav-menus">
                <Link className="nav-link">
                  Services <i className="fa-solid fa-angle-down" />
                </Link>
                <ul className="dropdown-menu nav-menus-hover">
                  <li>
                    <Link className="nav-link" to='/performanceMarketing' onClick={closeMenu}>
                      Performance Marketing
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link" to='/digitalmarketing' onClick={closeMenu}>
                      Digital Marketing
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link" to='/webappdevelopment' onClick={closeMenu}>
                      Website and App Development
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link" to='/softwareerpcrm' onClick={closeMenu}>
                      Software/ERP/CRM Development
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link" to='/prservices' onClick={closeMenu}>
                      PR Services
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to='/about-us' className="nav-link" onClick={closeMenu}>
                  About Us
                  <i className="ri-arrow-down-s-line" />
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/our-team' onClick={closeMenu}>
                  Our Team
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/contact-us' onClick={closeMenu}>
                  Contact Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/careers' onClick={closeMenu}>
                  Careers
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/blog' onClick={closeMenu}>
                  Blog
                </Link>
              </li>
              <li className="nav-item dg-whatpp dg-desktop-whatp">
                <a
                  className="nav-link btn btn-dark text-white hader-wahatp-btn"
                  href="https://wa.me/917368083688"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp: +91-7368083688
                </a>
              </li>
              <li className="nav-item dg-whatpp mobile-social-icone">
                <a
                  className="nav-link btn btn-dark text-white hader-wahatp-btn"
                  href="https://wa.me/917368083688"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-whatsapp me-2" />
                  +91-7368083688
                </a>
              </li>
            </ul>
            <ul className="list-unstyled m-3 mobile-social-icone">
              <div className="d-flex justify-content-around">
                <a href="https://www.facebook.com/DGDigitalTM">
                  <li>
                    <i className="fa-brands fa-facebook text-black" />
                  </li>
                </a>
                <a href="https://www.linkedin.com/company/devout-growth-digital/">
                  <li>
                    <i className="fa-brands fa-x-twitter text-black" />
                  </li>
                </a>
                <a href="https://www.youtube.com/@dgdigitaltm">
                  <li>
                    <i className="fa-brands fa-youtube text-black" />
                  </li>
                </a>
                <a href="https://x.com/i/flow/login?redirect_after_login=%2FDgDigitaltm">
                  <li>
                    <i className="fa-brands fa-linkedin text-black" />
                  </li>
                </a>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </header>
        </>
    );
}
