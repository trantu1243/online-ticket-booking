import React from "react";
import BannerSection from "./components/bannerSection";
// import SearchTicketSection from "./components/searchTicketSection";
import MovieSectionDashboard from "./components/movieSection";

function Dashboard(){
    return (
        <>
            <BannerSection />
            {/* <SearchTicketSection /> */}
            <MovieSectionDashboard />
        </>
    )
}

export default Dashboard;