import React from "react";

function ScheduleRow(props){
    return(
        <li>
            <div class="movie-name">
                <div class="icons">
                    <i class="far fa-heart"></i>
                    <i class="fas fa-heart"></i>
                </div>
                <a href="/portal/movie/movie-seat" class="name">{props.schedule.name}</a>
                <div class="location-icon">
                    <i class="fas fa-map-marker-alt"></i>
                </div>
            </div>
            <div class="movie-schedule">
                {props.schedule.schedule.map((item)=>{
                    return <div class="item">
                        {item}
                    </div>
                })}
            </div>
        </li>    
    )
}

export default ScheduleRow;