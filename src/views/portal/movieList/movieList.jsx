import React from "react";
import BannerMovieList from "./components/bannerMovieList";
// import SearchTicketSection from "../dashboard/components/searchTicketSection";
import MovieListDisplay from "./components/movieListDisplay/movieListDisplay";
import { movieList } from "./variables";

function MovieList(){
    return (
        <>
            <BannerMovieList />
            {/* <SearchTicketSection /> */}
            <MovieListDisplay movieList={movieList} />
        </>
    )
}

export default MovieList;