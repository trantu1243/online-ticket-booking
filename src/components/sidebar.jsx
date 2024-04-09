import { useState, useEffect } from "react";
import {useDispatch} from "react-redux";
import { useLocation } from "react-router-dom"
import { adminLogOut } from "../views/auth/admin.auth.slice";

function SideBar(){
    const dispatch = useDispatch();
    const location = useLocation();
    const [checkPath, setCheckPath] = useState(0);
    useEffect(()=>{  
        if (location.pathname === "/admin/dashboard") setCheckPath(1);
        else if (location.pathname === "/admin/add-theatre") setCheckPath(2);
        else if (location.pathname === "/admin/add-movie") setCheckPath(3);
    }, [location]);
    return(
        <div id="kt_app_sidebar" className="app-sidebar flex-column" data-kt-drawer="true" data-kt-drawer-name="app-sidebar" data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true" data-kt-drawer-width="250px" data-kt-drawer-direction="start" data-kt-drawer-toggle="#kt_app_sidebar_mobile_toggle">
            <div className="d-flex flex-column justify-content-between h-100 hover-scroll-overlay-y my-2 d-flex flex-column" id="kt_app_sidebar_main" data-kt-scroll="true" data-kt-scroll-activate="true" data-kt-scroll-height="auto" data-kt-scroll-dependencies="#kt_app_header" data-kt-scroll-wrappers="#kt_app_main" data-kt-scroll-offset="5px">
                <div id="#kt_app_sidebar_menu" data-kt-menu="true" data-kt-menu-expand="false" className=" menu menu-sub-indention menu-column menu-rounded menu-active-bg mb-7">
                    <div data-kt-menu-trigger="click" className="menu-item here show menu-accordion">				
                        <a className={checkPath === 1?"menu-link admin-active":"menu-link"} href="/admin/dashboard">
                            <span className="menu-bullet">
                            
                            </span>
                            <span className="menu-title">Dashboard</span>
                        </a>
                    </div>
                    <div data-kt-menu-trigger="click" className="menu-item here show menu-accordion">				
                        <a className={checkPath === 2?"menu-link admin-active":"menu-link"} href="/admin/add-theatre">
                            <span className="menu-bullet">
                            
                            </span>
                            <span className="menu-title">Add Theatre</span>
                        </a>
                    </div>
                    <div data-kt-menu-trigger="click" className="menu-item here show menu-accordion">				
                        <a className={checkPath === 3?"menu-link admin-active":"menu-link"} href="/admin/add-movie">
                            <span className="menu-bullet">
                            
                            </span>
                            <span className="menu-title">Add Movie</span>
                        </a>
                    </div>
                    <div data-kt-menu-trigger="click" className="menu-item here show menu-accordion">				
                        <a className="menu-link" href="/admin/add-movie" 
                        onClick={(e)=>{
                            e.preventDefault();
                            dispatch(adminLogOut());
                            window.location.reload();
                        }}>
                            <span className="menu-bullet">
                            
                            </span>
                            <span className="menu-title">Log Out</span>
                        </a>
                    </div>
                
                </div>
            </div>
        </div>
    )
}

export default SideBar;