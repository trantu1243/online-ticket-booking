import React, {useCallback, useEffect, useState} from "react";
import { format } from 'date-fns';
// import MlSidebar from "./mlSidebar";
import MovieListCard from "./movieListcard";
import { SERVER_URL } from "../../../../../variables/variable";


function MovieListDisplay(){
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const tomorrow = new Date(currentDate);
    const dayAfterTomorrow = new Date(currentDate);
    tomorrow.setDate(currentDate.getDate() + 1);
    dayAfterTomorrow.setDate(currentDate.getDate() + 2);
    const dayTomorrow = tomorrow.getDate();
    const monthTomorrow = tomorrow.getMonth() + 1;
    const dayAfter = dayAfterTomorrow.getDate();
    const monthAfter = dayAfterTomorrow.getMonth() + 1;


    const [movieList, setMovieList] = useState([]);
    const [showList, setShowList] = useState([]);
    const [numList, setNumList] = useState([]);
    const [page, setPage] = useState(1);
    const [date, setDate] = useState(format(currentDate, 'yyyy-MM-dd'));
    const [dateActive, setDateActive] = useState(1);

    const getData = useCallback(async()=>{
        try{
            const response = await fetch(`${SERVER_URL}/movie-list-portal.php?date=${date}`, {
                method: 'GET'
            });
            const res = await response.json();
            const data = JSON.parse(res.body);
            console.log(data.movies);
            if (data.message === 'Ok'){
                setMovieList(data.movies);
            }
        }catch(e){
            console.log(e);
        }
    },[date]);
    useEffect(()=>{
        getData();
    },[getData]);

    useEffect(()=>{
        const arr = [];
        for(let i=1; i<= movieList.length/4; i++)
            arr.push(i);
        if (movieList.length%4 > 0) arr.push(arr.length+1);
        setNumList(arr);
    }, [movieList]);

    useEffect(()=>{
        const arr = [];
        for (let i= (page-1)*4; i<page*4; i++)
            if (movieList[i]) arr.push(movieList[i]);
        setShowList(arr);
    }, [page, movieList]);

    return (
        <section className="movie-section padding-top padding-bottom">
        <div className="container">
            <div className="row flex-wrap-reverse justify-content-center">
                {/* <MlSidebar /> */}
                <div className="col-lg-9 mb-50 mb-lg-0">
                    <div className="filter-tab tab">
                    <div className="filter-area">
                            <div className="filter-main">
                                <div className="left">
                                    <div className="item">
                                        <span className="show">Day :</span>
                                        <div className="pagination-area"><a 
                                                href="#0" 
                                                onClick={(event)=>{
                                                    event.preventDefault(); 
                                                    setDateActive(1);
                                                    setDate(format(currentDate, 'yyyy-MM-dd'));
                                                }} 
                                                className={dateActive === 1 ? "active":''}
                                            >{`${day}/${month}`}</a>
                                            <a 
                                                href="#0" 
                                                onClick={(event)=>{
                                                    event.preventDefault(); 
                                                    setDateActive(2);
                                                    setDate(format(tomorrow, 'yyyy-MM-dd'));
                                                }} 
                                                className={dateActive === 2 ? "active":''}
                                            >{`${dayTomorrow}/${monthTomorrow}`}</a>
                                            <a 
                                                href="#0" 
                                                onClick={(event)=>{
                                                    event.preventDefault(); 
                                                    setDateActive(3);
                                                    setDate(format(dayAfterTomorrow, 'yyyy-MM-dd'));
                                                }} 
                                                className={dateActive === 3 ? "active":''}
                                            >{`${dayAfter}/${monthAfter}`}</a>
                                            </div>
                                        
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <div className="tab-area">
                            <div className="tab-item active">
                                <div className="movie-area mb-10">
                                    {showList.map((item, index)=>{
                                        return <MovieListCard key={index} id={index} movie={item} />
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className="pagination-area text-center">
                            <a href="#0" 
                                onClick={(event)=>{
                                    event.preventDefault();
                                    if (page > 1) {
                                        setPage(preVal => preVal-1);
                                        window.scrollTo({
                                            top: 700,
                                            behavior: "smooth" 
                                        });
                                    }
                                }}
                            ><i className="fas fa-angle-double-left"></i><span>Prev</span></a>
                            {numList.map((item, index)=>{
                                return  <a key={index} 
                                            href="#0" 
                                            onClick={(event)=>{
                                                event.preventDefault(); 
                                                setPage(item);
                                                window.scrollTo({
                                                    top: 700,
                                                    behavior: "smooth" 
                                                });
                                            }} 
                                            className={page === item ? "active":""}
                                        >{item}</a>
                            })}
                            
                            <a href="#0" 
                                onClick={(event)=>{
                                    event.preventDefault();
                                    if (page < numList.length) {
                                        setPage(preVal => preVal+1);
                                        window.scrollTo({
                                            top: 700,
                                            behavior: "smooth" 
                                        });
                                    }
                                }}
                            ><span>Next</span><i className="fas fa-angle-double-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default MovieListDisplay;