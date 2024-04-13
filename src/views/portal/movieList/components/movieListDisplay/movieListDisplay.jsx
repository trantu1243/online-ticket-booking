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
        <section className="movie-section padding-top padding-bottom">
        <div className="container">
            <div className="row flex-wrap-reverse justify-content-center">
                {/* <MlSidebar /> */}
                <div className="col-lg-9 mb-50 mb-lg-0">
                    <div className="filter-tab tab">
                        <div className="tab-area">
                            <div className="tab-item active">
                                <div className="movie-area mb-10">
                                    {movieList.map((item, index)=>{
                                        return <MovieListCard key={index} id={index} movie={item} />
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className="pagination-area text-center">
                            <a href="#0" onClick={(event)=>{event.preventDefault()}}><i className="fas fa-angle-double-left"></i><span>Prev</span></a>
                            <a href="#0" onClick={(event)=>{event.preventDefault()}}>1</a>
                            <a href="#0" onClick={(event)=>{event.preventDefault()}}>2</a>
                            <a href="#0" onClick={(event)=>{event.preventDefault()}} className="active">3</a>
                            <a href="#0" onClick={(event)=>{event.preventDefault()}}>4</a>
                            <a href="#0" onClick={(event)=>{event.preventDefault()}}>5</a>
                            <a href="#0" onClick={(event)=>{event.preventDefault()}}><span>Next</span><i className="fas fa-angle-double-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default MovieListDisplay;