import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom"
import DetailBannerTp from "./components/detailBanner";
import BookSectionTp from "./components/bookSectionTp";
// import TicketPlanContainer from "./components/Container/TicketPlanContainer";
import { ticketPlan } from "./variables";


function TicketPlan(){
   
    const navigate = useNavigate();
    useEffect( ()=>{
        if (!localStorage.getItem('token') || !localStorage.getItem('username')) {
            navigate('/auth/sign-in');
        }
    },[navigate])
    return (
        <>
            <DetailBannerTp plan={ticketPlan} />
            <BookSectionTp plan={ticketPlan} />
        </>
    )
}

export default TicketPlan;