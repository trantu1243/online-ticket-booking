import React, {useEffect} from "react";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { signIn } from "../views/auth/auth.slice";

function PortalLayout(){
    const dispatch = useDispatch();
    useEffect(()=>{
        if(localStorage.getItem('token') && localStorage.getItem('username')) {
            dispatch(signIn({
                token:localStorage.getItem('token'),
                username:localStorage.getItem('username')
            }));
        } else {
            dispatch(signIn({
                token:'',
                username:''
            }));
        }
    }, [dispatch]);
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default PortalLayout;