import React from "react";

function ImgCard(props){
    return (
        <div className="thumb">
            <a href={props.src} className="img-pop">
                <img src={props.src} alt="movie"/>
            </a>
        </div>
    )
}

export default ImgCard;