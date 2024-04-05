import React, {useCallback, useEffect, useState} from "react";
// import MlSidebar from "./mlSidebar";
import MovieListCard from "./movieListcard";
import { SERVER_URL } from "../../../../../variables/variable";


function MovieListDisplay(){
    const [movieList, setMovieList] = useState([]);
    const getData = useCallback(async()=>{
        try{
            const response = await fetch(`${SERVER_URL}/movie-list.php`, {
                method: 'GET'
            });
            const res = await response.json();
            const data = JSON.parse(res.body);
            console.log(data.movies);
            if (data.message === 'Ok'){
                setMovieList(data.movies);
            }
        }catch(e){
            console.log(e);
        }
    },[]);
    useEffect(()=>{
        getData();
    },[getData]);
    return (
        <section class="movie-section padding-top padding-bottom">
        <div class="container">
            <div class="row flex-wrap-reverse justify-content-center">
                {/* <MlSidebar /> */}
                <div class="col-lg-9 mb-50 mb-lg-0">
                    <div class="filter-tab tab">
                        <div class="tab-area">
                            <div class="tab-item active">
                                <div class="movie-area mb-10">
                                    {movieList.map((item, index)=>{
                                        return <MovieListCard key={index} id={index} movie={item} />
                                    })}
                                </div>
                            </div>
                        </div>
                        <div class="pagination-area text-center">
                            <a href="#0"><i class="fas fa-angle-double-left"></i><span>Prev</span></a>
                            <a href="#0">1</a>
                            <a href="#0">2</a>
                            <a href="#0" class="active">3</a>
                            <a href="#0">4</a>
                            <a href="#0">5</a>
                            <a href="#0"><span>Next</span><i class="fas fa-angle-double-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default MovieListDisplay;