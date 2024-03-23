import React from "react";
import DetailBannerTp from "../../../components/ticketPlanDisplay/detailBanner/detailBanner";
import BookSectionTp from "../../../components/ticketPlanDisplay/bookSection/bookSectionTp";
import TicketPlanContainer from "../../../components/ticketPlanDisplay/Container/TicketPlanContainer";
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