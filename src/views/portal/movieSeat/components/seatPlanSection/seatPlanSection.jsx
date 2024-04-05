import React from "react";
import SeatLine from "./seatLine";
import CoupleSeatLine from "./coupleSeatLine";
const frontLineList = ['g','f'];
const lineList = ['e','d','c','b','a']

function SeatPlanSection(props){
    return (
        <div class="seat-plan-section padding-bottom padding-top">
            <div class="container">
                <div class="screen-area">
                    <h4 class="screen">screen</h4>
                    <div class="screen-thumb">
                        <img src="/assets/images/movie/screen-thumb.png" alt="movie"/>
                    </div>
                    <h5 class="subtitle">silver plus</h5>
                    <div class="screen-wrapper">
                        <ul class="seat-area">
                            {frontLineList.map((item)=>{
                                return <SeatLine line={item}/>
                            })}
                        </ul>
                    </div>
                    <h5 class="subtitle">silver plus</h5>
                    <div class="screen-wrapper">
                        <ul class="seat-area couple">
                            {lineList.map((item)=>{
                                return <CoupleSeatLine line={item} />
                            })}
                        </ul>
                    </div>
                </div>
                <div class="proceed-book bg_img" data-background="/assets/images/movie/movie-bg-proceed.jpg">
                    <div class="proceed-to-book">
                        <div class="book-item">
                            <span>You have Choosed Seat</span>
                            <h3 class="title">{props.movieSeat.choosedSeat.seatList}</h3>
                        </div>
                        <div class="book-item">
                            <span>total price</span>
                            <h3 class="title">{props.movieSeat.choosedSeat.price}</h3>
                        </div>
                        <div class="book-item">
                            <a href="/portal/movie/movie-checkout" class="custom-button">proceed</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SeatPlanSection