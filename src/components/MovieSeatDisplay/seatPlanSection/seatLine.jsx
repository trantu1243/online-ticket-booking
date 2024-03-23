import React from "react";

function SeatLine(props){
    return (
        <li class="seat-line">
            <span>{props.line}</span>
            <ul class="seat--area">
                <li class="front-seat">
                    <ul>                
                        <li class="single-seat">
                            <img src="/assets/images/movie/seat01.png" alt="seat"/>
                        </li>
                        <li class="single-seat">
                            <img src="/assets/images/movie/seat01.png" alt="seat"/>
                        </li>
                        <li class="single-seat">
                            <img src="/assets/images/movie/seat01.png" alt="seat"/>
                        </li>
                        <li class="single-seat">
                            <img src="/assets/images/movie/seat01.png" alt="seat"/>
                        </li>
                    </ul>
                </li>
                <li class="front-seat">
                    <ul>
                        <li class="single-seat">
                            <img src="/assets/images/movie/seat01.png" alt="seat"/>
                        </li>
                        <li class="single-seat">
                            <img src="/assets/images/movie/seat01.png" alt="seat"/>
                        </li>
                        <li class="single-seat">
                            <img src="/assets/images/movie/seat01.png" alt="seat"/>
                        </li>
                        <li class="single-seat">
                            <img src="/assets/images/movie/seat01.png" alt="seat"/>
                        </li>
                        <li class="single-seat">
                            <img src="/assets/images/movie/seat01.png" alt="seat"/>
                        </li>
                        <li class="single-seat">
                            <img src="/assets/images/movie/seat01.png" alt="seat"/>
                        </li>
                    </ul>
                </li>
                <li class="front-seat">
                    <ul>
                        <li class="single-seat">
                            <img src="/assets/images/movie/seat01.png" alt="seat"/>
                        </li>
                        <li class="single-seat">
                            <img src="/assets/images/movie/seat01.png" alt="seat"/>
                        </li>
                        <li class="single-seat">
                            <img src="/assets/images/movie/seat01.png" alt="seat"/>
                        </li>
                        <li class="single-seat">
                            <img src="/assets/images/movie/seat01.png" alt="seat"/>
                        </li>
                    </ul>
                </li>
            </ul>
            <span>{props.line}</span>
        </li>
    )
}

export default SeatLine;