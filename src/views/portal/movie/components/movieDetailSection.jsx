import React from "react";
import Sidebar from "./Sidebar";
import CastCard from "../../../../components/card/castCard";


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
                            <a href={props.movieInfo.image} className="img-pop">
                                <img src={props.movieInfo.image} alt="movie"/>
                            </a>
                        </div>
                        <div class="tab summery-review">
                            <ul class="tab-menu">
                                <li class="active">
                                    summery
                                </li>
                            </ul>
                            <div class="tab-area">
                                <div class="tab-item active">
                                    <div class="item">
                                        <h5 class="sub-title">Description</h5>
                                        <p>{props.movieInfo.description}</p>
                                    </div>
                                    <div class="item">
                                        <div class="header">
                                            <h5 class="sub-title">cast</h5>
                                            <div class="navigation">
                                                <div class="cast-prev"><i class="flaticon-double-right-arrows-angles"></i></div>
                                                <div class="cast-next"><i class="flaticon-double-right-arrows-angles"></i></div>
                                            </div>
                                        </div>
                                        {/* <div class="casting-slider owl-carousel">
                                            {props.movieInfo.castList.map((item)=>{
                                                return <CastCard cast={item} />
                                            })}
                                        </div> */}
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