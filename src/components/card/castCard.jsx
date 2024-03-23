import React from "react";

function CastCard(props){
    return (
        <div class="cast-item">
            <div class="cast-thumb">
                <a href="#0">
                    <img src={props.cast.img} alt="cast"/>
                </a>
            </div>
            <div class="cast-content">
                <h6 class="cast-title"><a href="#0">{props.cast.name}</a></h6>
                <span class="cate">{props.cast.cate}</span>
                <p>As {props.cast.character}</p>
            </div>
        </div>
    )
}

export default CastCard;