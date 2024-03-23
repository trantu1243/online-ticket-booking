import React from "react";

function CrewCard(props){
    return (
        <div class="cast-item">
            <div class="cast-thumb">
                <a href="#0">
                    <img src={props.crew.img} alt="cast"/>
                </a>
            </div>
            <div class="cast-content">
                <h6 class="cast-title"><a href="#0">{props.crew.name}</a></h6>
                <span class="cate">{props.crew.cate}</span>
            </div>
        </div>
    )
}

export default CrewCard;