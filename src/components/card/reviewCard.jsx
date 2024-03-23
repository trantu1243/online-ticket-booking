import React from "react";

function ReviewCard(props){
    return (
        <div class="movie-review-item">
            <div class="author">
                <div class="thumb">
                    <a href="#0">
                        <img src={props.review.img} alt="cast" />
                    </a>
                </div>
                <div class="movie-review-info">
                    <span class="reply-date">{props.review.date}</span>
                    <h6 class="subtitle"><a href="#0">{props.review.name}</a></h6>
                    <span><i class="fas fa-check"></i> verified review</span>
                </div>
            </div>
            <div class="movie-review-content">
                <div class="review">
                    <i class="flaticon-favorite-heart-button"></i>
                    <i class="flaticon-favorite-heart-button"></i>
                    <i class="flaticon-favorite-heart-button"></i>
                    <i class="flaticon-favorite-heart-button"></i>
                    <i class="flaticon-favorite-heart-button"></i>
                </div>
                <h6 class="cont-title">{props.review.title}</h6>
                <p>{props.review.content}</p>
                <div class="review-meta">
                    <a href="#0">
                        <i class="flaticon-hand"></i><span>8</span>
                    </a>
                    <a href="#0" class="dislike">
                        <i class="flaticon-dont-like-symbol"></i><span>0</span>
                    </a>
                    <a href="#0">
                        Report Abuse
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ReviewCard