import React from "react";

function ReviewCard(props){
    return (
        <div className="movie-review-item">
            <div className="author">
                <div className="thumb">
                    <a href="#0">
                        <img src={props.review.img} alt="cast" />
                    </a>
                </div>
                <div className="movie-review-info">
                    <span className="reply-date">{props.review.date}</span>
                    <h6 className="subtitle"><a href="#0">{props.review.name}</a></h6>
                    <span><i className="fas fa-check"></i> verified review</span>
                </div>
            </div>
            <div className="movie-review-content">
                <div className="review">
                    <i className="flaticon-favorite-heart-button"></i>
                    <i className="flaticon-favorite-heart-button"></i>
                    <i className="flaticon-favorite-heart-button"></i>
                    <i className="flaticon-favorite-heart-button"></i>
                    <i className="flaticon-favorite-heart-button"></i>
                </div>
                <h6 className="cont-title">{props.review.title}</h6>
                <p>{props.review.content}</p>
                <div className="review-meta">
                    <a href="#0">
                        <i className="flaticon-hand"></i><span>8</span>
                    </a>
                    <a href="#0" className="dislike">
                        <i className="flaticon-dont-like-symbol"></i><span>0</span>
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