import React from "react";
import DetailBannerMs from "../../../components/MovieSeatDisplay/detailBanner/detailBannerMs";
import { movieSeat } from "./variables";
import TitleMovieSeat from "../../../components/MovieSeatDisplay/titile/titleMovieSeat";
import SeatPlanSection from "../../../components/MovieSeatDisplay/seatPlanSection/seatPlanSection";

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