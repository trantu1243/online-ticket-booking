import React from "react";

function TitleMovieSeat(props){
    return (
        <section class="page-title bg-one">
            <div class="container">
                <div class="page-title-area">
                    <div class="item md-order-1">
                        <a href="movie-ticket-plan.html" class="custom-button back-button">
                            <i class="flaticon-double-right-arrows-angles"></i>back
                        </a>
                    </div>
                    <div class="item date-item">
                        <span class="date">{props.movieSeat.date}</span>
                        <select class="select-bar">
                            {props.movieSeat.schedule.map((item)=>{
                                return <option value="sc1">{item}</option>
                            })}
                        </select>
                    </div>
                    <div class="item">
                        <h5 class="title">05:00</h5>
                        <p>Mins Left</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TitleMovieSeat;