import React, {useEffect, useState, useCallback} from "react";
import { useNavigate } from "react-router-dom";
import { SERVER_URL } from "../../../../../variables/variable";


function ScheduleRow(props){
    const [showList, setShowList] = useState([]);
    const navigate = useNavigate();
    const getData = useCallback(async ()=>{
        try{
            const token = localStorage.getItem('token');
            console.log(token);
            const response = await fetch(`${SERVER_URL}/getShow.php?movieID=${props.movieId}&state=${props.city}&date=${props.date}&theaterId=${props.theater}&screenId=${props.screen.screenId}`, {
                headers: {
                    'Authorization': token
                }
            });
            const res = await response.json();
            const data = JSON.parse(res.body);
            console.log(data);
            if (data.message === 'Ok'){
                setShowList(data.show)
            }
        }
        catch(e) {
            console.log(e);
        }
    },[props]);
    useEffect(()=>{
        getData();
    }, [getData]);
    return(
        <li>
            <div className="movie-name">
                <div className="icons">
                    <i className="far fa-heart"></i>
                    <i className="fas fa-heart"></i>
                </div>
                <a href="#0" onClick={(e)=>{e.preventDefault()}} className="name">{props.screen.screenName}</a>
                <div className="location-icon">
                    <i className="fas fa-map-marker-alt"></i>
                </div>
            </div>
            <div className="movie-schedule">
                {showList.map((item, index)=>{
                    return <div key={index} className="item" onClick={()=>{navigate(`/portal/movie/movie-seat/${item.showId}`);window.location.reload();}}>
                        {item.showTime === 1 ? "8h-11h" : (item.showTime === 2 ? "12h-15h" : (item.showTime === 3 ? "16h-19h" : "20h-23h"))}
                    </div>
                })}
            </div>
        </li>    
    )
}

export default ScheduleRow;