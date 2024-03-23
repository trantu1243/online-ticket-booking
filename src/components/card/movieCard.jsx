import React from "react";

function MovieCard(props){
    return (
        <div className="item">
            <div className="movie-grid">
                <div className="movie-thumb c-thumb">
                    <a href="/movie">
                        <img src={props.movie.img} alt="movie" />
                    </a>
                </div>
                <div className="movie-content bg-one">
                    <h5 className="title m-0">
                        <a href="#0">{props.movie.name}</a>
                    </h5>
                    <ul className="movie-rating-percent">
                        <li>
                            <div className="thumb">
                                <img src="/assets/images/movie/tomato.png" alt="movie"/>
                            </div>
                            <span className="content">{props.movie.tomatoPoint}</span>
                        </li>
                        <li>
                            <div className="thumb">
                                <img src="/assets/images/movie/cake.png" alt="movie"/>
                            </div>
                            <span className="content">{props.movie.cakePoint}</span>
                        </li>
                    </ul>
                </div>
            </div> 
        </div>
    )
}

export default MovieCard;