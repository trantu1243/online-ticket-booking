import React from "react";
import DetailBannerTp from "./components/detailBanner";
import BookSectionTp from "./components/bookSectionTp";
import TicketPlanContainer from "./components/Container/TicketPlanContainer";
import { ticketPlan } from "./variables";


function TicketPlan(){
    return (
        <>
            <DetailBannerTp plan={ticketPlan} />
            <BookSectionTp plan={ticketPlan} />
            <TicketPlanContainer plan={ticketPlan} />
        </>
    )
}

export default TicketPlan;