import React from "react";

function CoupleSeatLine(props){
    return (
        <li class="seat-line">
            <span>{props.line}</span>
            <ul class="seat--area">
                <li class="front-seat">
                    <ul>
                        <li class="single-seat">
                            <img src="/assets/images/movie/seat02.png" alt="seat"/>
                        </li>
                        <li class="single-seat">
                            <img src="/assets/images/movie/seat02.png" alt="seat"/>
                        </li>
                    </ul>
                </li>
                <li class="front-seat">
                    <ul>
                        <li class="single-seat">
                            <img src="/assets/images/movie/seat02.png" alt="seat"/>
                        </li>
                        <li class="single-seat seat-free-two">
                            <img src="/assets/images/movie/seat02-booked.png" alt="seat"/>
                            <span class="sit-num">D7 D8</span>
                        </li>
                        <li class="single-seat">
                            <img src="/assets/images/movie/seat02.png" alt="seat"/>
                        </li>
                    </ul>
                </li>
                <li class="front-seat">
                    <ul>
                        <li class="single-seat">
                            <img src="/assets/images/movie/seat02.png" alt="seat"/>
                        </li>
                        <li class="single-seat">
                            <img src="/assets/images/movie/seat02.png" alt="seat"/>
                        </li>
                    </ul>
                </li>
            </ul>
            <span>{props.line}</span>
        </li>
    )
}

export default CoupleSeatLine;