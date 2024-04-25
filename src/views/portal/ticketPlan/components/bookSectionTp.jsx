import React, {useEffect, useState, useCallback} from "react";
import { useParams } from 'react-router-dom';
import ScheduleRow from "./Container/scheduleRow";
import { SERVER_URL } from "../../../../variables/variable";

function BookSectionTp(){
    const { id } = useParams();
    const [cityList, setCityList] = useState([]);
    const [dateList, setDateList] = useState([]);
    const [theaterList, setTheaterList] = useState([]);
    const [screenList, setScreenList] = useState([]);
    const [city, setCity] = useState('');
    const [date, setDate] = useState('');
    const [theater, setTheater] = useState('');

    const getData = useCallback(async (city, date, theater)=>{
        try{
            const token = localStorage.getItem('token');
            console.log(token);
            const response = await fetch(`${SERVER_URL}/ticket-plan.php?movieID=${id}&state=${city}&date=${date}&theaterId=${theater}`, {
                headers: {
                    'Authorization': token
                }
            });
            const res = await response.json();
            const data = JSON.parse(res.body);
            console.log(data);
            if (data.message === 'Ok'){
                if (data.city) {
                    setCityList(data.city);
                    setDate(''); setDateList([]);
                    setTheater(''); setTheaterList([]);
                    setScreenList([])
                } else if (data.date) {
                    setDateList(data.date);
                    setTheater(''); setTheaterList([]);
                    setScreenList([]);
                } else if (data.theater) {
                    setTheaterList(data.theater);
                    setScreenList([]);
                } else if (data.screen) setScreenList(data.screen);
            }
        }
        catch(e) {
            console.log(e);
        }
    },[id]);

    useEffect(()=>{
        getData(city,date,theater);
    }, [getData, city, date, theater]);

    return (
    <>
        <section className="book-section bg-one">
        <div className="container">
            <form className="ticket-search-form two">
                <div className="form-group">
                    <div className="thumb">
                        <img src="/assets/images/ticket/city.png" alt="ticket" />
                    </div>
                    <span className="type">city</span>
                    <select className="select-tag" value={city} onChange={(e)=>setCity(e.target.value)}>
                        <option className="option-tag" value="">Select city</option>
                        {cityList.map((item, index)=>{
                            return <option key={index} value={item.state} className="color-option">{item.state}</option>
                        })}
                    </select>
                </div>
                <div className="form-group">
                    <div className="thumb">
                        <img src="/assets/images/ticket/date.png" alt="ticket"/>
                    </div>
                    <span className="type">date</span>
                    <select className="select-tag" value={date} onChange={(e)=>setDate(e.target.value)}>
                        <option className="" value="">Select date</option>
                        {dateList.map((item, index)=>{
                            return <option key={index} value={item.showDate} className="color-option">{item.showDate}</option>
                        })}
                    </select>
                </div>
                <div className="form-group">
                    <div className="thumb">
                        <img src="/assets/images/ticket/cinema.png" alt="ticket"/>
                    </div>
                    <span className="type">cinema</span>
                    <select className="select-tag" value={theater} onChange={(e)=>setTheater(e.target.value)}>
                        <option className="" value="">Select theater</option>
                        {theaterList.map((item, index)=>{
                            return <option key={index} value={item.theaterID} className="color-option">{item.name}</option>
                        })}
                    </select>
                    
                </div>
              
            </form>
        </div>
    </section>
    <div className="ticket-plan-section padding-bottom padding-top">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-9 mb-5 mb-lg-0">
                    <ul className="seat-plan-wrapper bg-five">
                        {screenList.map((item, index)=>{
                            return <ScheduleRow key={index} screen={item} movieId={id} city={city} date={date} theater={theater} />
                        })}
                    </ul>
                </div>
               
            </div>
        </div>
    </div>
    </>
    )
}

export default BookSectionTp;