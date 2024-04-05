import React, {useState, useEffect, useCallback} from "react";
import MovieCard from "../../../../components/card/movieCard";
import { SERVER_URL } from "../../../../variables/variable";
import { movieLists } from "../../../variables";


function MovieSectionDashboard(){
    const [movieList, setMovieList] = useState(movieLists);
    const getData = useCallback(async()=>{
        try{
            const response = await fetch(`${SERVER_URL}/dashboard.php`, {
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
                <div className="tab">
                    <div className="section-header-2">
                        <div className="left">
                            <h2 className="title">movies</h2>
                            <p>Be sure not to miss these Movies today.</p>
                        </div>
                        <ul className="tab-menu">
                            <li className="active">
                                now showing 
                            </li>
                            <li>
                                coming soon
                            </li>
                        </ul>
                    </div>
                    <div className="tab-area mb-30-none">
                        <div className="tab-item active">
                            <div className="owl-carousel owl-theme tab-slider">
                                {movieList.map((item, index)=>{
                                    return <MovieCard key={index} movie = {item} />
                                })}
                            </div>
                        </div>
                        <div className="tab-item">
                            <div className="owl-carousel owl-theme tab-slider">
                                {movieList.map((item, index)=>{
                                    return <MovieCard key={index} movie = {item} />
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MovieSectionDashboard