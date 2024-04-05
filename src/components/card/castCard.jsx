import React from "react";

function CastCard(props){
    return (
        <div className="cast-item">
            <div className="cast-thumb">
                <a href="#0">
                    <img src="/assets/images/cast/Blank-Avatar.png" alt="cast"/>
                </a>
            </div>
            <div className="cast-content">
                <h6 className="cast-title"><a href="#0">{props.name}</a></h6>
                <span className="cate">Actor</span>
            </div>
        </div>
    )
}

export default CastCard;