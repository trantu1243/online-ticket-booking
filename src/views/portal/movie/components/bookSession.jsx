import React from "react";
import { useNavigate } from 'react-router-dom'
import { useSelector } from "react-redux";
import { SERVER_URL } from "../../../../variables/variable";

function BookSection(props){
    const navigate = useNavigate();
    const token = useSelector(state => state.auth.token);

    async function handleClick(e){
        e.preventDefault();
        const response = await fetch(`${SERVER_URL}/auth.php`, {
            headers: {
                'Authorization': token,
            },
        });
        const res = await response.json();
        console.log(res);
        const data = JSON.parse(res.body);
        console.log(data);
        if (data.message === 'Ok'){
            navigate(`/portal/movie/ticket-plan/${props.movieInfo.movieID}`);
            window.location.reload();
        } else {
            navigate('/auth/sign-in');
            window.location.reload();
        }
    }
    return (
        <section className="book-section bg-one">
            <div className="container">
                <div className="book-wrapper offset-lg-3">
                    <div className="left-side">
                        <div className="item">
                            <div className="item-header">
                                <div className="thumb">
                                    <img src="/assets/images/movie/tomato2.png" alt="movie" />
                                </div>
                                <div className="counter-area">
                                    <span className="counter-item odometer" data-odometer-final={props.movieInfo.tomatoPoint}>0</span>
                                </div>
                            </div>
                            <p>tomatometer</p>
                        </div>
                        
                    </div>
                    <a href="/portal/movie/ticket-plan" className="custom-button" onClick={handleClick}>book tickets</a>
                </div>
            </div>
        </section>
    )
}

export default BookSection;