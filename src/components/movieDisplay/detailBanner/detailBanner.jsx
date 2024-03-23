import React from "react";

function DetailBanner(props){
    return (
        <section class="details-banner bg_img" data-background="/assets/images/banner/banner03.jpg">
            <div class="container">
                <div class="details-banner-wrapper">
                    <div class="details-banner-thumb">
                        <img src={props.movieInfo.img} alt="movie"/>
                        <a href={props.movieInfo.video} class="video-popup">
                            <img src={props.movieInfo.videoImg} alt="movie"/>
                        </a>
                    </div>
                    <div class="details-banner-content offset-lg-3">
                        <h3 class="title">{props.movieInfo.name}</h3>
                        <div class="tags">
                            {props.movieInfo.language.map((item)=>{
                                return <a href="#0">{item}</a>
                            })}
                        </div>
                        <a href="#0" class="button">{props.movieInfo.type}</a>
                        <div class="social-and-duration">
                            <div class="duration-area">
                                <div class="item">
                                    <i class="fas fa-calendar-alt"></i><span>{props.movieInfo.date}</span>
                                </div>
                                <div class="item">
                                    <i class="far fa-clock"></i><span>{props.movieInfo.duration}</span>
                                </div>
                            </div>
                            <ul class="social-share">
                                <li><a href="#0"><i class="fab fa-facebook-f"></i></a></li>
                                <li><a href="#0"><i class="fab fa-twitter"></i></a></li>
                                <li><a href="#0"><i class="fab fa-pinterest-p"></i></a></li>
                                <li><a href="#0"><i class="fab fa-linkedin-in"></i></a></li>
                                <li><a href="#0"><i class="fab fa-google-plus-g"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default DetailBanner;