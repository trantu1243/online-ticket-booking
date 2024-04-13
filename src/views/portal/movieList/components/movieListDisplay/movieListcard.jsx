import React, {useEffect} from "react";

function MovieListCard(props){
    useEffect(() => {
      
        const element = document.getElementById(`poster${props.id}`);
        if (element) {
          element.style.backgroundImage = `url(${props.movie.poster})`;
        }
      }, [props]); 

    return (
        <div className="movie-list">
            <div className="movie-thumb c-thumb">
                <a href={`/portal/movie/${props.movie.movieID}`} id={`poster${props.id}`} className="w-100 bg_img h-100" data-background={props.movie.poster}>
                    <img className="d-sm-none" src={props.movie.poster} alt="movie"/>
                </a>
            </div>
            <div className="movie-content bg-one">
                <h5 className="title">
                    <a href={`/portal/movie/${props.movie.movieID}`}>{props.movie.name}</a>
                </h5>
                <p className="duration">{props.movie.duration}</p>
                <div className="movie-tags">
                    <a href="#0" onClick={(event)=>{event.preventDefault()}}>{props.movie.genre}</a>
                </div>
                <div className="release">
                    <span>Release Date : </span> <a href="#0" onClick={(event)=>{event.preventDefault()}}>{props.movie.releaseDate}</a>
                </div>
                <ul className="movie-rating-percent">
                    <li>
                        <div className="thumb">
                            <img src="/assets/images/movie/tomato.png" alt="movie"/>
                        </div>
                        <span className="content">88%</span>
                    </li>
                </ul>
                <div className="book-area">
                    <div className="book-ticket">
                        <div className="react-item">
                            <a href="#0" onClick={(event)=>{event.preventDefault()}}>
                                <div className="thumb">
                                    <img src="/assets/images/icons/heart.png" alt="icons"/>
                                </div>
                            </a>
                        </div>
                        <div className="react-item mr-auto">
                            <a href={`/portal/movie/${props.movie.movieID}`}>
                                <div className="thumb">
                                    <img src="/assets/images/icons/book.png" alt="icons"/>
                                </div>
                                <span>book ticket</span>
                            </a>
                        </div>
                        <div className="react-item">
                            <a href="#0" className="popup-video"
                            onClick={(event)=>{
                                    event.preventDefault();
                                    window.open(props.movie.videoUrl, '_blank', 'noopener,noreferrer');
                                    
                                }}
                            >
                                <div className="thumb">
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