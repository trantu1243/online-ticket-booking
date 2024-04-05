import React, {useEffect} from "react";

function MovieListCard(props){
    useEffect(() => {
      
        const element = document.getElementById(`poster${props.id}`);
        if (element) {
          element.style.backgroundImage = `url(${props.movie.poster})`;
        }
      }, [props]); 

    return (
        <div class="movie-list">
            <div class="movie-thumb c-thumb">
                <a href={`/portal/movie/${props.movie.movieID}`} id={`poster${props.id}`} class="w-100 bg_img h-100" data-background={props.movie.poster}>
                    <img class="d-sm-none" src={props.movie.poster} alt="movie"/>
                </a>
            </div>
            <div class="movie-content bg-one">
                <h5 class="title">
                    <a href={`/portal/movie/${props.movie.movieID}`}>{props.movie.name}</a>
                </h5>
                <p class="duration">{props.movie.duration}</p>
                <div class="movie-tags">
                    <a href="#0" onClick={(event)=>{event.preventDefault()}}>{props.movie.genre}</a>
                </div>
                <div class="release">
                    <span>Release Date : </span> <a href="#0" onClick={(event)=>{event.preventDefault()}}>{props.movie.releaseDate}</a>
                </div>
                <ul class="movie-rating-percent">
                    <li>
                        <div class="thumb">
                            <img src="/assets/images/movie/tomato.png" alt="movie"/>
                        </div>
                        <span class="content">88%</span>
                    </li>
                </ul>
                <div class="book-area">
                    <div class="book-ticket">
                        <div class="react-item">
                            <a href="#0" onClick={(event)=>{event.preventDefault()}}>
                                <div class="thumb">
                                    <img src="/assets/images/icons/heart.png" alt="icons"/>
                                </div>
                            </a>
                        </div>
                        <div class="react-item mr-auto">
                            <a href={`/portal/movie/${props.movie.movieID}`}>
                                <div class="thumb">
                                    <img src="/assets/images/icons/book.png" alt="icons"/>
                                </div>
                                <span>book ticket</span>
                            </a>
                        </div>
                        <div class="react-item">
                            <a href="#0" class="popup-video"
                            onClick={(event)=>{
                                    event.preventDefault();
                                    window.open(props.movie.videoUrl, '_blank', 'noopener,noreferrer');
                                    
                                }}
                            >
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