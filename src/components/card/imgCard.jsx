import React from "react";

function ImgCard(props){
    return (
        <div class="thumb">
            <a href={props.src} class="img-pop">
                <img src={props.src} alt="movie"/>
            </a>
        </div>
    )
}

export default ImgCard;