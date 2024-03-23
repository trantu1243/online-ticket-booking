import React from "react";

function MovieListCard(props){
    return (
        <div class="movie-list">
            <div class="movie-thumb c-thumb">
                <a href="/portal/movie" class="w-100 bg_img h-100" data-background={props.movie.img}>
                    <img class="d-sm-none" src={props.movie.img} alt="movie"/>
                </a>
            </div>
            <div class="movie-content bg-one">
                <h5 class="title">
                    <a href="movie-details.html">{props.movie.name}</a>
                </h5>
                <p class="duration">{props.movie.duration}</p>
                <div class="movie-tags">
                    {props.movie.tag.map(item => {
                        return <a href="#0">{item}</a>
                    })}
                </div>
                <div class="release">
                    <span>Release Date : </span> <a href="#0">{props.movie.release}</a>
                </div>
                <ul class="movie-rating-percent">
                    <li>
                        <div class="thumb">
                            <img src="/assets/images/movie/tomato.png" alt="movie"/>
                        </div>
                        <span class="content">88%</span>
                    </li>
                    <li>
                        <div class="thumb">
                            <img src="/assets/images/movie/cake.png" alt="movie"/>
                        </div>
                        <span class="content">88%</span>
                    </li>
                </ul>
                <div class="book-area">
                    <div class="book-ticket">
                        <div class="react-item">
                            <a href="#0">
                                <div class="thumb">
                                    <img src="/assets/images/icons/heart.png" alt="icons"/>
                                </div>
                            </a>
                        </div>
                        <div class="react-item mr-auto">
                            <a href="/portal/movie">
                                <div class="thumb">
                                    <img src="/assets/images/icons/book.png" alt="icons"/>
                                </div>
                                <span>book ticket</span>
                            </a>
                        </div>
                        <div class="react-item">
                            <a href="#0" class="popup-video">
                                <div class="thumb">
                                    <img src="/assets/images/icons/play-button.png" alt="icons"/>
                                </div>
                                <span>watch trailer</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieListCard