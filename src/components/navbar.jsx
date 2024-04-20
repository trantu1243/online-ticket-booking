import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { logOut } from "../views/auth/auth.slice";

function Navbar(){
    const [checkSignIn, setCheckSignIn] = useState(false);
    const [active, setActive] = useState(1);
    const token = useSelector(state => state.auth.token);
    const username = useSelector(state => state.auth.username);
    const dispatch = useDispatch();
    const location = useLocation();
    useEffect(()=>{
        if(location.pathname==='/portal/dashboard') setActive(1);
        else if(location.pathname==='/portal/movie-list') setActive(2);
        else if(location.pathname==='/portal/newfeed') setActive(3);
        else setActive(0);      
    }, [location]);

    useEffect(()=>{
        if (token && username) setCheckSignIn(true);
        else setCheckSignIn(false);
    }, [token, username]);

    function handleLogOut(e){
        e.preventDefault();
        dispatch(logOut());
        window.location.reload();
    }
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
                        <a href="/portal/dashboard">
                            <img src="/assets/images/logo/logo.png" alt="logo" />
                        </a>
                    </div>
                    <ul className="menu">
                        <li>
                            <a href="/portal/dashboard" className={active===1 ? "active":""}>Home</a>
                        </li>
                        <li>
                            <a href="/portal/movie-list" className={active===2 ? "active":""}>movies</a>
                        </li>
                        <li>
                            <a href="/portal/newfeed" className={active===3 ? "active":""}>news</a>
                        </li>
                        <li className="menu-item-has-children open">
                            <a href="#0">pages</a>
                            {
                            checkSignIn ? <ul className="submenu">
                                <li>
                                    <a href="/portal/user-information" >User information</a>
                                </li>
                                <li>
                                    <a href="/portal/history-booking">History booking</a>
                                </li>
                                <li>
                                    <a href="#0" onClick={handleLogOut}>Log out</a>
                                </li>
                            </ul> : <ul className="submenu">
                                <li>
                                    <a href="/auth/sign-in">Sign In</a>
                                </li>
                                <li>
                                    <a href="/auth/sign-up">Sign Up</a>
                                </li>
                            </ul>
                            }
                        </li>
                        <li className="header-button pr-0">
                            {checkSignIn?
                            <a href="/portal/user-information">{username}</a>: 
                            <a href="/auth/sign-up">Join us</a>
                        }
                            
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