import React from "react";
import MovieCard from "../card/movieCard";
import { movieList } from "../../views/variables";

function MovieSectionDashboard(){
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
                            <li>
                                exclusive
                            </li>
                        </ul>
                    </div>
                    <div className="tab-area mb-30-none">
                        <div className="tab-item active">
                            <div className="owl-carousel owl-theme tab-slider">
                                {movieList.map((item)=>{
                                    return <MovieCard movie = {item} />
                                })}
                            </div>
                        </div>
                        <div className="tab-item">
                            <div className="owl-carousel owl-theme tab-slider">
                                {movieList.map((item)=>{
                                    return <MovieCard movie = {item} />
                                })}
                            </div>
                        </div>
                        <div className="tab-item">
                            <div className="owl-carousel owl-theme tab-slider">
                                {movieList.map((item)=>{
                                    return <MovieCard movie = {item} />
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