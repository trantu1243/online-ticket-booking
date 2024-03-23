import React from "react";
import Sidebar from "../sidebar/Sidebar";
import ImgCard from "../../card/imgCard";
import CastCard from "../../card/castCard";
import CrewCard from "../../card/crewCard";
import ReviewCard from "../../card/reviewCard";

function MovieDetailSection(props){
    return (
        <section class="movie-details-section padding-top padding-bottom">
        <div class="container">
            <div class="row justify-content-center flex-wrap-reverse mb--50">
                <Sidebar />
                <div class="col-lg-9 mb-50">
                    <div class="movie-details">
                        <h3 class="title">photos</h3>
                        <div class="details-photos owl-carousel">
                            {props.movieInfo.photo.map((item)=>{
                                return <ImgCard src={item}/>
                            })}
                        </div>
                        <div class="tab summery-review">
                            <ul class="tab-menu">
                                <li>
                                    summery
                                </li>
                                <li class="active">
                                    user review <span>{props.movieInfo.userReview}</span>
                                </li>
                            </ul>
                            <div class="tab-area">
                                <div class="tab-item active">
                                    <div class="item">
                                        <h5 class="sub-title">Synopsis</h5>
                                        <p>{props.movieInfo.synopsis}</p>
                                    </div>
                                    <div class="item">
                                        <div class="header">
                                            <h5 class="sub-title">cast</h5>
                                            <div class="navigation">
                                                <div class="cast-prev"><i class="flaticon-double-right-arrows-angles"></i></div>
                                                <div class="cast-next"><i class="flaticon-double-right-arrows-angles"></i></div>
                                            </div>
                                        </div>
                                        <div class="casting-slider owl-carousel">
                                            {props.movieInfo.castList.map((item)=>{
                                                return <CastCard cast={item} />
                                            })}
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="header">
                                            <h5 class="sub-title">crew</h5>
                                            <div class="navigation">
                                                <div class="cast-prev-2"><i class="flaticon-double-right-arrows-angles"></i></div>
                                                <div class="cast-next-2"><i class="flaticon-double-right-arrows-angles"></i></div>
                                            </div>
                                        </div>
                                        <div class="casting-slider-two owl-carousel">
                                            {props.movieInfo.crewList.map((item)=>{
                                                return <CrewCard crew={item} />
                                            })}
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-item">
                                    {props.movieInfo.userReviewList.map((item)=>{
                                        return <ReviewCard review={item} />
                                    })}
                                    <div class="load-more text-center">
                                        <a href="#0" class="custom-button transparent">load more</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default MovieDetailSection;