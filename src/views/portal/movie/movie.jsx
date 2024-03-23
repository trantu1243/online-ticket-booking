import React from "react";
import DetailBanner from "../../../components/movieDisplay/detailBanner/detailBanner";
import MovieDetailSection from "../../../components/movieDisplay/movieDetailSection/movieDetailSection";
import { movie } from "../../variables";
import BookSection from "../../../components/movieDisplay/bookSection/bookSession";

function Movie(){
    return (
        <>
            <DetailBanner movieInfo ={movie} />
            <BookSection movieInfo = {movie} /> 
            <MovieDetailSection movieInfo= {movie} />
        </>
       
    )
}

export default Movie;