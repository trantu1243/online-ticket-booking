import React, {useEffect} from "react";

function DetailBanner(props){
    useEffect(() => {
      
        const element = document.getElementById('detailsBanner');
        if (element) {
          element.style.backgroundImage = `url(${props.movieInfo.image})`;
        }
      }, [props]); 
    return (
        <section className="details-banner bg_img" id="detailsBanner" data-background={props.movieInfo.image}>
            <div className="container">
                <div className="details-banner-wrapper">
                    <div className="details-banner-thumb">
                        <img src={props.movieInfo.poster} alt="movie"/>
                        <a href="#0" 
                            className="video-popup"
                            onClick={(event)=>{
                                event.preventDefault();
                                window.open(props.movieInfo.videoUrl, '_blank', 'noopener,noreferrer');
                                
                            }}
                            >
                            <img src="/assets/images/movie/video-button.png" alt="movie"/>
                        </a>
                    </div>
                    <div className="details-banner-content offset-lg-3">
                        <h3 className="title">{props.movieInfo.name}</h3>
                        <div className="tags">
                            <a href="#0">Vietnamese</a>
                            <a href="#0">English</a>
                        </div>
                        <a href="#0" className="button">{props.movieInfo.genre}</a>
                        <div className="social-and-duration">
                            <div className="duration-area">
                                <div className="item">
                                    <i className="fas fa-calendar-alt"></i><span>{props.movieInfo.releaseDate}</span>
                                </div>
                                <div className="item">
                                    <i className="far fa-clock"></i><span>{props.movieInfo.duration}</span>
                                </div>
                            </div>
                            <ul className="social-share">
                                <li><a href="#0"><i className="fab fa-facebook-f"></i></a></li>
                                <li><a href="#0"><i className="fab fa-twitter"></i></a></li>
                                <li><a href="#0"><i className="fab fa-pinterest-p"></i></a></li>
                                <li><a href="#0"><i className="fab fa-linkedin-in"></i></a></li>
                                <li><a href="#0"><i className="fab fa-google-plus-g"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default DetailBanner;