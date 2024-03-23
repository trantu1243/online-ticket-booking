import React from "react";

function BookSection(props){
    return (
        <section class="book-section bg-one">
            <div class="container">
                <div class="book-wrapper offset-lg-3">
                    <div class="left-side">
                        <div class="item">
                            <div class="item-header">
                                <div class="thumb">
                                    <img src="/assets/images/movie/tomato2.png" alt="movie" />
                                </div>
                                <div class="counter-area">
                                    <span class="counter-item odometer" data-odometer-final="88">0</span>
                                </div>
                            </div>
                            <p>tomatometer</p>
                        </div>
                        <div class="item">
                            <div class="item-header">
                                <div class="thumb">
                                    <img src="/assets/images/movie/cake2.png" alt="movie" />
                                </div>
                                <div class="counter-area">
                                    <span class="counter-item odometer" data-odometer-final="88">0</span>
                                </div>
                            </div>
                            <p>audience Score</p>
                        </div>
                        <div class="item">
                            <div class="item-header">
                                <h5 class="title">{props.movieInfo.userRating}</h5>
                                <div class="rated">
                                    <i class="fas fa-heart"></i>
                                    <i class="fas fa-heart"></i>
                                    <i class="fas fa-heart"></i>
                                    <i class="fas fa-heart"></i>
                                    <i class="fas fa-heart"></i>
                                </div>
                            </div>
                            <p>Users Rating</p>
                        </div>
                        <div class="item">
                            <div class="item-header">
                                <div class="rated rate-it">
                                    <i class="fas fa-heart"></i>
                                    <i class="fas fa-heart"></i>
                                    <i class="fas fa-heart"></i>
                                    <i class="fas fa-heart"></i>
                                    <i class="fas fa-heart"></i>
                                </div>
                                <h5 class="title">0.0</h5>
                            </div>
                            <p><a href="#0">Rate It</a></p>
                        </div>
                    </div>
                    <a href="/portal/movie/ticket-plan" class="custom-button">book tickets</a>
                </div>
            </div>
        </section>
    )
}

export default BookSection;