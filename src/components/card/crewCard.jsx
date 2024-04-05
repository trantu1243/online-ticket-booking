import React from "react";

function CrewCard(props){
    return (
        <div className="cast-item">
            <div className="cast-thumb">
                <a href="#0">
                    <img src={props.crew.img} alt="cast"/>
                </a>
            </div>
            <div className="cast-content">
                <h6 className="cast-title"><a href="#0">{props.crew.name}</a></h6>
                <span className="cate">{props.crew.cate}</span>
            </div>
        </div>
    )
}

export default CrewCard;