import React from "react";

function Navbar(){
    return (
        <>
        <div className="preloader">
        <div className="preloader-inner">
            <div className="preloader-icon">
                <span></span>
                <span></span>
            </div>
        </div>
    </div>
    
    <div className="overlay"></div>
    <a href="#0" className="scrollToTop">
        <i className="fas fa-angle-up"></i>
    </a>
        <header className="header-section">
            <div className="container">
                <div className="header-wrapper">
                    <div className="logo">
                        <a href="index.html">
                            <img src="/assets/images/logo/logo.png" alt="logo" />
                        </a>
                    </div>
                    <ul className="menu">
                        <li>
                            <a href="/portal/dashboard" className="active">Home</a>
                        </li>
                        <li>
                            <a href="/portal/movie-list">movies</a>
                        </li>
                        <li>
                            <a href="#0">contact</a>
                        </li>
                        <li class="menu-item-has-children open">
                            <a href="#0">pages</a>
                            <ul class="submenu">
                                <li>
                                    <a href="/auth/sign-in">Sign In</a>
                                </li>
                                <li>
                                    <a href="/auth/sign-up">Sign Up</a>
                                </li>
                            </ul>
                        </li>
                        <li className="header-button pr-0">
                            <a href="/auth/sign-up">join us</a>
                        </li>
                    </ul>
                    <div className="header-bar d-lg-none">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
        </div>
    </header>
        </>
    )
}

export default Navbar