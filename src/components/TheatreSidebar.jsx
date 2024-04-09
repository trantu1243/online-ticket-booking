import { useState, useEffect } from "react";
import {useDispatch} from "react-redux";
import { useLocation } from "react-router-dom"
import { theatreLogOut } from "../views/auth/theatre.auth.slice";

function TheatreSideBar(){
    const dispatch = useDispatch();
    const location = useLocation();
    const [checkPath, setCheckPath] = useState(0);
    useEffect(()=>{  
        if (location.pathname === "/theatre/home") setCheckPath(1);
        else if (location.pathname === "/theatre/today-show") setCheckPath(2);
        else if (location.pathname === "/theatre/view-movie") setCheckPath(3);
        else if (location.pathname === "/theatre/add-movie") setCheckPath(4);
        else if (location.pathname === "/theatre/add-show") setCheckPath(5);
        else if (location.pathname === "/theatre/add-screen") setCheckPath(6);

    }, [location]);
    return(
        <div id="kt_app_sidebar" className="app-sidebar flex-column" data-kt-drawer="true" data-kt-drawer-name="app-sidebar" data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true" data-kt-drawer-width="250px" data-kt-drawer-direction="start" data-kt-drawer-toggle="#kt_app_sidebar_mobile_toggle">
            <div className="d-flex flex-column justify-content-between h-100 hover-scroll-overlay-y my-2 d-flex flex-column" id="kt_app_sidebar_main" data-kt-scroll="true" data-kt-scroll-activate="true" data-kt-scroll-height="auto" data-kt-scroll-dependencies="#kt_app_header" data-kt-scroll-wrappers="#kt_app_main" data-kt-scroll-offset="5px">
                <div id="#kt_app_sidebar_menu" data-kt-menu="true" data-kt-menu-expand="false" className=" menu menu-sub-indention menu-column menu-rounded menu-active-bg mb-7">
                    <div data-kt-menu-trigger="click" className="menu-item here show menu-accordion">				
                        <a className={checkPath === 1?"menu-link admin-active":"menu-link"} href="/theatre/home">
                            <span className="menu-bullet">
                            
                            </span>
                            <span className="menu-title">Home</span>
                        </a>
                    </div>
                    <div data-kt-menu-trigger="click" className="menu-item here show menu-accordion">				
                        <a className={checkPath === 2?"menu-link admin-active":"menu-link"} href="/theatre/today-show">
                            <span className="menu-bullet">
                            
                            </span>
                            <span className="menu-title">Today Show</span>
                        </a>
                    </div>
                    <div data-kt-menu-trigger="click" className="menu-item here show menu-accordion">				
                        <a className={checkPath === 3?"menu-link admin-active":"menu-link"} href="/theatre/view-movie">
                            <span className="menu-bullet">
                            
                            </span>
                            <span className="menu-title">View Movie</span>
                        </a>
                    </div>
                    <div data-kt-menu-trigger="click" className="menu-item here show menu-accordion">				
                        <a className={checkPath === 4?"menu-link admin-active":"menu-link"} href="/theatre/add-movie">
                            <span className="menu-bullet">
                            
                            </span>
                            <span className="menu-title">Add Movie</span>
                        </a>
                    </div>
                    <div data-kt-menu-trigger="click" className="menu-item here show menu-accordion">				
                        <a className={checkPath === 6?"menu-link admin-active":"menu-link"} href="/theatre/add-screen">
                            <span className="menu-bullet">
                            
                            </span>
                            <span className="menu-title">Add screen</span>
                        </a>
                    </div>
                    <div data-kt-menu-trigger="click" className="menu-item here show menu-accordion">				
                        <a className={checkPath === 5?"menu-link admin-active":"menu-link"} href="/theatre/add-show">
                            <span className="menu-bullet">
                            
                            </span>
                            <span className="menu-title">Add Show</span>
                        </a>
                    </div>
                    <div data-kt-menu-trigger="click" className="menu-item here show menu-accordion">				
                        <a className="menu-link"
                            href="/theatre/add-show"
                            onClick={(e)=>{
                                e.preventDefault();
                                dispatch(theatreLogOut());
                                window.location.reload();
                            }}
                            >
                            <span className="menu-bullet">
                            
                            </span>
                            <span className="menu-title">Log out</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TheatreSideBar;