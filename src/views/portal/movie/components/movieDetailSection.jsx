import React from "react";
import Sidebar from "./Sidebar";
// import CastCard from "../../../../components/card/castCard";


function MovieDetailSection(props){
    return (
        <section className="movie-details-section padding-top padding-bottom">
        <div className="container">
            <div className="row justify-content-center flex-wrap-reverse mb--50">
                <Sidebar />
                <div className="col-lg-9 mb-50">
                    <div className="movie-details">
                        <h3 className="title">photos</h3>
                        <div className="details-photos owl-carousel">        
                            <a href={props.movieInfo.image} className="img-pop">
                                <img src={props.movieInfo.image} alt="movie"/>
                            </a>
                        </div>
                        <div className="tab summery-review">
                            <ul className="tab-menu">
                                <li className="active">
                                    summery
                                </li>
                            </ul>
                            <div className="tab-area">
                                <div className="tab-item active">
                                    <div className="item">
                                        <h5 className="sub-title">Description</h5>
                                        <p>{props.movieInfo.description}</p>
                                    </div>
                                    <div className="item">
                                        <div className="header">
                                            <h5 className="sub-title">cast</h5>
                                            <div className="navigation">
                                                <div className="cast-prev"><i className="flaticon-double-right-arrows-angles"></i></div>
                                                <div className="cast-next"><i className="flaticon-double-right-arrows-angles"></i></div>
                                            </div>
                                        </div>
                                        {/* <div className="casting-slider owl-carousel">
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