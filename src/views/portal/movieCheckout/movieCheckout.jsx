import React, { useCallback, useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { SERVER_URL } from "../../../variables/variable";

function MovieCheckout(){
    const { id } = useParams();
    const navigate = useNavigate();
    const [seatList, setSeatList] = useState([]);
    const [info, setInfo] = useState({
        movieName: '',
        genre: '',
        theaterName: '',
        screenName: '',
        showTime: 0,
        showDate: '',
        state: '',
        image:'',
        charge: 0,
    });

    const getMovie = useCallback(async()=>{
        try{
            const token = localStorage.getItem('token');
            const response = await fetch(`${SERVER_URL}/get-checkout.php?id=${id}`,{
                headers: {
                    'Authorization': token
                }
            });
            const res = await response.json();
            const data = JSON.parse(res.body);
            if (data.message === 'Ok'){
                console.log(data);
                setInfo(data.checkout);
            }
        } catch(e){ 
            console.log(e);
        }
    }, [id]);

    useEffect(()=>{
        getMovie();
    },[getMovie]);

    useEffect(()=>{
        const seats = localStorage.getItem('selectedSeats');
        setSeatList(seats.split(','));
    }, []);

    async function handleClick(e){
        e.preventDefault();
        try{
            const token = localStorage.getItem('token');
            const formData = new FormData();
            formData.append('id', id);
            formData.append('price', info.charge * seatList.length);
            formData.append(`seats`, localStorage.getItem('selectedSeats'));
            const response = await fetch(`${SERVER_URL}/checkout.php`,{
                method: 'POST',
                headers: {
                    'Authorization': token
                },
                body: formData
            });
            const res = await response.json();
            const data = JSON.parse(res.body);
            console.log(data);
            if (data.message === 'Ok'){
                alert('Payment successful.');
                navigate('/portal/dashboard');
                window.location.reload();
            }
        } catch(e){ 
            console.log(e);
        }
    }

    return (
        <>
            <section className="details-banner hero-area bg_img seat-plan-banner" data-background={info.image}>
                <div className="container">
                    <div className="details-banner-wrapper">
                        <div className="details-banner-content style-two">
                            <h3 className="title">{info.movieName}</h3>
                            <div className="tags">
                                <a href="#0" onClick={(event)=>{event.preventDefault()}}>{info.genre}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="movie-facility padding-bottom padding-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            
                            <div className="checkout-widget checkout-card mb-0">
                                <h5 className="title">Payment Option </h5>
                                <ul className="payment-option">
                                    <li className="active">
                                        <a href="#0" onClick={(event)=>{event.preventDefault()}}>
                                            <img src="/assets/images/payment/card.png" alt="payment"/>
                                            <span>Credit Card</span>
                                        </a>
                                    </li>
                                </ul>
                                <h6 className="subtitle">Enter Your Card Details </h6>
                                <form className="payment-card-form">
                                    <div className="form-group w-100">
                                        <label htmlFor="card1">Card Details</label>
                                        <input type="text" id="card1"/>
                                        <div className="right-icon">
                                            <i className="flaticon-lock"></i>
                                        </div>
                                    </div>
                                    <div className="form-group w-100">
                                        <label htmlFor="card2"> Name on the Card</label>
                                        <input type="text" id="card2"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="card3">Expiration</label>
                                        <input type="text" id="card3" placeholder="MM/YY"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="card4">CVV</label>
                                        <input type="text" id="card4" placeholder="CVV"/>
                                    </div>
                                    <div className="form-group" onClick={handleClick}>
                                        <input type="submit" className="custom-button" value="make payment"/>
                                    </div>
                                </form>
                                <p className="notice">
                                    By Clicking "Make Payment" you agree to the <a href="#0" onClick={(event)=>{event.preventDefault()}}>terms and conditions</a>
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="booking-summery bg-one">
                                <h4 className="title">booking summery</h4>
                                <ul>
                                    <li>
                                        <h6 className="subtitle">{info.movieName}</h6>
                                        <span className="info">{info.genre}</span>
                                    </li>
                                    <li>
                                        <h6 className="subtitle"><span>{info.theaterName}</span></h6>
                                        <div className="info"><span>{info.screenName}</span><span>{info.showDate}, {info.showTime === 1 ? '8h' : (info.showTime === 2 ? '12h' : (info.showTime === 3 ? '16h' : (info.showTime === 4 && '20h'))) }</span></div>
                                    </li>
                                    <li>
                                        <h6 className="subtitle mb-0"><span>Seats</span><span>{localStorage.getItem('selectedSeats')}</span></h6>
                                    </li>
                                    <li>
                                        <h6 className="subtitle mb-0"><span>Tickets  Price</span><span>{(info.charge * seatList.length).toLocaleString()}vnd</span></h6>
                                    </li>
                                </ul>
                            </div>
                            <div className="proceed-area  text-center">
                                <h6 className="subtitle"><span>Amount Payable</span><span>{(info.charge * seatList.length).toLocaleString()}vnd</span></h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MovieCheckout