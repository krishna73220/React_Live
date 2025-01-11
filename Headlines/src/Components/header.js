// import React from 'react'
import { Link } from 'react-router-dom';
// MobileMenu.js
import React, { useEffect ,useState, useRef } from 'react';
import $ from 'jquery'; // Import jQuery


export const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState(null);
    const menuRef = useRef(null);

    // Function to toggle the entire mobile menu
    const toggleMenu = () => {
        setIsOpen(!isOpen);
        setActiveMenu(null); // Close any open submenu when toggling
    };

    // Function to toggle a sub-menu (with the "+" and "−" sign)
    const handleSubMenuToggle = (index) => {
        setActiveMenu(activeMenu === index ? null : index);
    };

    // Handle clicks outside the menu to close it
    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsOpen(false);
            setActiveMenu(null);
        }
    };

    // Attach event listener to detect clicks outside of the menu
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className='my-custom-mobile-menu'>
            <button className="menu-toggle" onClick={toggleMenu}>
                {/* Conditional rendering: show a close (cut) button when the menu is open, otherwise show the toggle button */}
                {isOpen ? (
                    <span className="menu-icon">&times;</span> // '×' for close
                ) : (
                    <span className="menu-icon">&#9776;</span> // '☰' for open
                )}
            </button>

            <nav ref={menuRef} className={`mobile-menu ${isOpen ? 'open' : ''}`}>
                <ul className='my-custom-header-ul'>
                    <li>
                        {/* The "+" or "−" sign will toggle when the submenu is opened or closed */}
                        <a onClick={() => handleSubMenuToggle(1)}>
                            राज्य {activeMenu === 1 ? '−' : '+'}
                        </a>
                        {activeMenu === 1 && (
                            <ul className="submenu">
                                <li className='sub-li-my'><Link to='/bihar' onClick={() => setIsOpen(false)}>बिहार</Link></li>
                            </ul>
                        )}
                    </li>
                    <li>
                        <Link to="/politics" onClick={() => setIsOpen(false)}>पॉलिटिक्स</Link>
                    </li>
                    <li>
                        <Link to="/national" onClick={() => setIsOpen(false)}>राष्ट्रीय</Link>
                    </li>
                    <li>
                        <Link to="/crime" onClick={() => setIsOpen(false)}>क्राइम</Link>
                    </li>
                    <li>
                        <Link to="/health" onClick={() => setIsOpen(false)}>हेल्थ</Link>
                    </li>
                    <li>
                        <Link to="/sport" onClick={() => setIsOpen(false)}>खेल</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};


export const ScrollToTopButton = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <button
            id="scroll-top"
            className="scroll-to-top"
            onClick={scrollToTop}
        >
            <i class="ti-angle-up"></i>
        </button>
    );
};

const Header = () => {
    return (
        <div>
            <>
                <header id="header" className="header sticky-header">
                    <div className="top-header bg-dark">
                        <div className="container">
                            <div className="col-md-6 ">
                                <ul className="top-info">
                                    <li>
                                        <a href="tel:07011880850">
                                            <i className="ti-mobile" />
                                            +91-7011880850{" "}
                                        </a>
                                    </li>
                                    <li>
                                        <a href="mailto:headlinesbihar18@gmail.com">
                                            <i className="ti-email" />
                                            headlinesbihar18@gmail.com
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-6 text-right sm-text-left">
                                <ul className="top-social">
                                    <li>
                                        <a href="https://www.facebook.com/headlinesbihar">
                                            <i className="ti-facebook" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://x.com/headlinesbihar">
                                            <i className="ti-twitter" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.youtube.com/@headlinesbihar">
                                            <i className="ti-youtube" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/headlines.bihar/">
                                            <i className="ti-instagram" />
                                        </a>
                                    </li>
                                    <li className="fz-13"> Agust , 2024</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* /.top-header */}
                    <div className="mid-header">
                        <div className="container">
                            <div className="site-branding full-left">
                                <Link to="./"> <img
                                    src="img/logo/Headlines-Nation-news.png"
                                    style={{ maxWidth: 162 }}
                                    className="img-responsive"
                                    alt="headlinesnation"
                                /></Link>
                            </div>
                            {/* /.site-branding */}
                            <div className="banner pull-right">
                                <a >
                                    <img src="img/banner.jpg" alt="News24 Banner" />
                                </a>
                            </div>
                            {/* /.banner */}
                        </div>
                    </div>
                    {/* /.mid-header */}
                    <div className="mainmenu-wrap bg-red">
                        <div className="container">
                            <div className="col-md-9 col-xs-6 dextop-header">
                                <div className="menu-wrap mean-menu">
                                    <nav className="mainmenu">
                                        <ul id="navi-menu">
                                            {/* <li class="current_page_item"><a href="index.html"> न्यूज़</a></li> */}
                                            <li>
                                                <a >राज्य</a>
                                                <ul>
                                                    <li>
                                                        <Link to='/bihar'>बिहार</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                {/* <a href="#!"></a> */}
                                                <Link to="/politics">पॉलिटिक्स</Link>
                                            </li>

                                            <li>

                                                <Link to="/national">राष्ट्रीय</Link>
                                            </li>
                                            <li>
                                                <Link to="/crime">क्राइम</Link>
                                            </li>
                                            <li>
                                                <Link to="/health">हेल्थ</Link>
                                            </li>

                                            <li>
                                                <Link to="/sport">खेल</Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-md-3 col-xs-6">
                                <form action="#" className="search-form">
                                    <input type="text" placeholder="Search news.." />
                                    <button className="submit" type="submit">
                                        <i className="ti-search" />
                                    </button>
                                </form>
                            </div>

                            <MobileMenu></MobileMenu>

                        </div>
                    </div>
                    {/* /.mainmenu-wrap */}
                </header>
                {/* /.header */}

                
                <ScrollToTopButton></ScrollToTopButton>
            </>


        </div>
    )
}

export default Header;