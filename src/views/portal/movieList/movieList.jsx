import React from "react";
import BannerMovieList from "../../../components/movieList/banner/bannerMovieList";
import SearchTicketSection from "../../../components/dashboardDisplay/searchTicketSection";
import MovieListDisplay from "../../../components/movieList/movieListDisplay/movieListDisplay";
import { movieList } from "./variables";

function MovieList(){
    return (
        <>
            <BannerMovieList />
            <SearchTicketSection />
            <MovieListDisplay movieList={movieList} />
        </>
    )
}

export default MovieList;