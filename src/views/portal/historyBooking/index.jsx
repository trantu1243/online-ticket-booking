import { React,useCallback, useEffect, useState } from "react";
import { SERVER_URL } from "../../../variables/variable";

function HistoryTicket(){
    const [bookingList, setBookingList] = useState([]);
    const getBooking = useCallback(async ()=>{
        try{
            const token = localStorage.getItem('token');
            const response = await fetch(`${SERVER_URL}/history-booking.php`, {
                headers: {
                    'Authorization': token
                }
            });
            const res = await response.json();
            const data = JSON.parse(res.body);
            console.log(data);
            if (data.message === 'Ok'){
                console.log(data);
                setBookingList(data.booking);
            }
        }
        catch(e) {
            console.log(e);
        }
    },[]);

    useEffect(()=>{
        getBooking();
    },[getBooking]);
    return (
    <div className="movie-facility padding-bottom padding-top">
        <div className="container">
            <div className="row">
                
                <div className="col-md-12">
                                <table className="table table-striped table-bordered table-hover" style={{color: "#fff"}}>
                                    <thead>
                                        <tr>
                                            <th className="text-uppercase" style={{width: '10%'}}>Id
                                            </th>
                                            <th className="text-uppercase" style={{width: '15%'}}>Movie name
                                            </th>
                                            <th className="text-uppercase" style={{width: '10%'}}>Genre
                                            </th>
                                            <th className="text-uppercase" style={{width: '15%'}}>Theater name
                                            </th>
                                            <th className="text-uppercase" style={{width: '10%'}}>Screen
                                            </th>
                                            <th className="text-uppercase" style={{width: '10%'}}>Date
                                            </th>
                                            <th className="text-uppercase" style={{width: '10%'}}>Time
                                            </th>
                                            <th className="text-uppercase" style={{width: '10%'}}>Seats
                                            </th>
                                            <th className="text-uppercase" style={{width: '10%'}}>Price
                                            </th>
                                        </tr>
                                        {bookingList.map((item, index)=>{
                                            return (
                                                <tr key={index}>
                                                    <th className="" style={{width: '10%'}}>{item.ticketId}
                                                    </th>
                                                    <th style={{width: '15%'}}>{item.movieName}
                                                    </th>
                                                    <th style={{width: '10%'}}>{item.genre}
                                                    </th>
                                                    <th style={{width: '15%'}}>{item.theaterName}
                                                    </th>
                                                    <th style={{width: '10%'}}>{item.screenName}
                                                    </th>
                                                    <th style={{width: '10%'}}>{item.showDate}
                                                    </th>
                                                    <th style={{width: '10%'}}>{item.showTime === 1 ? '8h' : (item.showTime === 2 ? '12h' : (item.showTime === 3 ? '16h' : (item.showTime === 4 && '20h'))) }
                                                    </th>
                                                    <th style={{width: '10%'}}>{item.seats}
                                                    </th>
                                                    <th style={{width: '10%'}}>{item.charge.toLocaleString()}
                                                    </th>
                                                </tr>
                                            )               
                                        })}
                                    </thead>
                                    <tbody>
                                        
                                    </tbody>
                                </table>
                  
                        </div>
            </div>
        </div>
    </div>
    )
}

export default HistoryTicket;