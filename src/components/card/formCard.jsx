import React from "react";

function FormCard(props){
    return(
        <div className="form-group">
            <div className="thumb">
                <img src={props.data.img} alt="ticket" />
            </div>
            <span className="type">{props.data.type}</span>
            <select className="select-bar">
                {props.data.list.map((item, index)=>{
                    return <option key={index} value={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default FormCard;