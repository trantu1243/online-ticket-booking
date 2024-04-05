import React from "react";
import DetailBannerMs from "./components/detailBannerMs";
import { movieSeat } from "./variables";
import TitleMovieSeat from "./components/titleMovieSeat";
import SeatPlanSection from "./components/seatPlanSection/seatPlanSection";

function MovieSeat(){
    return (
        <>
            <DetailBannerMs movieSeat={movieSeat} />
            <TitleMovieSeat movieSeat={movieSeat} />
            <SeatPlanSection movieSeat={movieSeat} />
        </>
    )
}

export default MovieSeat;