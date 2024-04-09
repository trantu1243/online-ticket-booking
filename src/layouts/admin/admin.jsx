import React, {useEffect} from "react";
import { Outlet, useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { adminSignIn, adminLogOut } from "../../views/auth/admin.auth.slice";

import Navbar from "../../components/adminNavbar";
import SideBar from "../../components/sidebar";

function AdminLayout(){
	const navigate = useNavigate();
   
	const dispatch = useDispatch();
    useEffect(()=>{
        if(localStorage.getItem('adminToken') && localStorage.getItem('adminUsername')) {
            dispatch(adminSignIn({
                token:localStorage.getItem('adminToken'),
                username:localStorage.getItem('adminUsername')
            }));
        } else {
            dispatch(adminLogOut());
			navigate("/auth/admin/sign-in");
        }
    }, [dispatch, navigate]);
    return (
        <>		
		<div className="d-flex flex-column flex-root app-root" id="kt_app_root">
			
			<div className="app-page flex-column" id="kt_app_page">

				<Navbar />
				<div className="admin-container" id="kt_app_wrapper">
					<SideBar />
					<Outlet />
				</div>
			</div>
		</div>
        </>
    )
}

export default AdminLayout;