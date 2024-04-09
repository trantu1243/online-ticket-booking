import React, {useEffect} from "react";
import { Outlet, useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { theaterSignIn, theatreLogOut } from "../../views/auth/theatre.auth.slice";

import TheatreNavbar from "../../components/theaterNavbar";
import TheatreSideBar from "../../components/TheatreSidebar";

function TheatreLayout(){
	const navigate = useNavigate();
   
	const dispatch = useDispatch();
    useEffect(()=>{
        if(localStorage.getItem('theatreToken') && localStorage.getItem('theatreUsername')) {
            dispatch(theaterSignIn({
                token:localStorage.getItem('theatreToken'),
                username:localStorage.getItem('theatreUsername')
            }));
        } else {
            dispatch(theatreLogOut());
			navigate("/auth/theatre/sign-in");
        }
    }, [dispatch, navigate]);
	
    return (
        <>		
		<div className="d-flex flex-column flex-root app-root" id="kt_app_root">
			
			<div className="app-page flex-column" id="kt_app_page">

				<TheatreNavbar />
				<div className="admin-container" id="kt_app_wrapper">
					<TheatreSideBar />
					<Outlet />
				</div>
			</div>
		</div>
        </>
    )
}

export default TheatreLayout;