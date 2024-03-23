import React from "react";
import BannerSection from "../../../components/dashboardDisplay/bannerSection";
import SearchTicketSection from "../../../components/dashboardDisplay/searchTicketSection";
import MovieSectionDashboard from "../../../components/dashboardDisplay/movieSection";

function Dashboard(){
    return (
        <>
            <BannerSection />
            <SearchTicketSection />
            <MovieSectionDashboard />
        </>
    )
}

export default Dashboard;