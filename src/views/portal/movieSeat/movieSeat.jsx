import React, {useEffect, useState, useCallback} from "react";
import { useParams, useNavigate } from 'react-router-dom';
import SeatLine from "./components/seatPlanSection/seatLine";
import { SERVER_URL } from "../../../variables/variable";

const frontLineList = ['g','f'];
const lineList = ['e','d','c','b','a']

function MovieSeat(){
    const { id } = useParams();
    const navigate = useNavigate();
    const [ movie, setMovie ] = useState({
        description:'',
        duration: 0,
        genre: '',
        image: '',
        movieID: 0,
        name: '',
        photo: null,
        poster: '',
        releaseDate: '',
        status: 0,
        tomatoPoint: 0,
        videoUrl: ''
    });
    const [seatList, setSeatList] = useState([]);
    const [selectSeatList, setSelectSeatList] = useState([]);
    const [seats, setSeats] = useState('');
    const [price, setPrice] = useState(0);
    const getData = useCallback(async ()=>{
        try{
            const token = localStorage.getItem('token');
            console.log(token);
            const response = await fetch(`${SERVER_URL}/show.php?showId=${id}`, {
                headers: {
                    'Authorization': token
                }
            });
            const res = await response.json();
            const data = JSON.parse(res.body);
            console.log(data);
            if (data.message === 'Ok'){
                console.log(data);
                setMovie(data.movie);

                const seatNames = data.seats.map(seat => seat.seatName);
                setSeatList(seatNames);
                setPrice(data.price.charge);
            }
        }
        catch(e) {
            console.log(e);
        }
    },[id]);
    useEffect(()=>{
        getData();
    }, [getData]);

    useEffect(()=>{
        setSeats(() => {
            let str = '';
            selectSeatList.forEach((item)=>{
                if (str === '') str = str + item;
                else str = str + ', ' + item;
            });
            return str;
        })
    }, [selectSeatList]);

    function handleClick(e) {
        e.preventDefault();
        localStorage.setItem('showId', id);
        localStorage.setItem('selectedSeats', selectSeatList);
        localStorage.setItem('price', price * selectSeatList.length);
        navigate(`/portal/movie/movie-checkout/${id}`);
      }

    return (
        <>
        <section className="details-banner hero-area bg_img seat-plan-banner" data-background={movie.image}>
            <div className="container">
                <div className="details-banner-wrapper">
                    <div className="details-banner-content style-two">
                        <h3 className="title">{movie.name}</h3>
                        <div className="tags">
                            <a href="#0" onClick={(event)=>{event.preventDefault()}}>{movie.genre}</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div className="seat-plan-section padding-bottom padding-top">
            <div className="container">
                <div className="screen-area">
                    <h4 className="screen">screen</h4>
                    <div className="screen-thumb">
                        <img src="/assets/images/movie/screen-thumb.png" alt="movie"/>
                    </div>
                    <h5 className="subtitle">silver plus</h5>
                    <div className="screen-wrapper">
                        <ul className="seat-area">
                            {frontLineList.map((item, index)=>{
                                return <SeatLine 
                                    key={index} 
                                    line={item} 
                                    bookedSeat={seatList}
                                    selectSeatList={selectSeatList}
                                    setSelectSeatList={setSelectSeatList}
                                    />
                            })}
                        </ul>
                    </div>
                    <h5 className="subtitle">silver plus</h5>
                    <div className="screen-wrapper">
                        <ul className="seat-area couple">
                            {lineList.map((item, index)=>{
                                return <SeatLine 
                                    key={index} 
                                    line={item} 
                                    bookedSeat={seatList}
                                    selectSeatList={selectSeatList}
                                    setSelectSeatList={setSelectSeatList}
                                    />
                            })}
                        </ul>
                    </div>
                </div>
                <div className="proceed-book bg_img" data-background="/assets/images/movie/movie-bg-proceed.jpg">
                    <div className="proceed-to-book">
                        <div className="book-item">
                            <span>You have Choosed Seat</span>
                            <h3 className="title">{seats}</h3>
                        </div>
                        <div className="book-item">
                            <span>total price</span>
                            <h3 className="title">{price * selectSeatList.length + "vnd"}</h3>
                        </div>
                        <div className="book-item">
                            <a href="/portal/movie/movie-checkout" className="custom-button" onClick={handleClick}>proceed</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default MovieSeat;