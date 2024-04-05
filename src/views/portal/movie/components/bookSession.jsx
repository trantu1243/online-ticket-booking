import React from "react";

function BookSection(props){
    return (
        <section className="book-section bg-one">
            <div className="container">
                <div className="book-wrapper offset-lg-3">
                    <div className="left-side">
                        <div className="item">
                            <div className="item-header">
                                <div className="thumb">
                                    <img src="/assets/images/movie/tomato2.png" alt="movie" />
                                </div>
                                <div className="counter-area">
                                    <span className="counter-item odometer" data-odometer-final={props.movieInfo.tomatoPoint}>0</span>
                                </div>
                            </div>
                            <p>tomatometer</p>
                        </div>
                        
                    </div>
                    <a href="/portal/movie/ticket-plan" className="custom-button">book tickets</a>
                </div>
            </div>
        </section>
    )
}

export default BookSection;