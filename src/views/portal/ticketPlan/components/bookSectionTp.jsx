import React from "react";

function BookSectionTp(props){
    return (
        <section class="book-section bg-one">
        <div class="container">
            <form class="ticket-search-form two">
                <div class="form-group">
                    <div class="thumb">
                        <img src="/assets/images/ticket/city.png" alt="ticket"/>
                    </div>
                    <span class="type">city</span>
                    <select class="select-bar">
                        {props.plan.city.map((item)=>{
                            return <option value={item}>{item}</option>
                        })}
                    </select>
                </div>
                <div class="form-group">
                    <div class="thumb">
                        <img src="/assets/images/ticket/date.png" alt="ticket"/>
                    </div>
                    <span class="type">date</span>
                    <select class="select-bar">
                        {props.plan.date.map((item)=>{
                            return <option value={item}>{item}</option>
                        })}
                    </select>
                </div>
                <div class="form-group">
                    <div class="thumb">
                        <img src="/assets/images/ticket/cinema.png" alt="ticket"/>
                    </div>
                    <span class="type">cinema</span>
                    <select class="select-bar">
                        {props.plan.cinema.map((item)=>{
                            return <option value={item}>{item}</option>
                        })}
                    </select>
                </div>
                <div class="form-group">
                    <div class="thumb">
                        <img src="/assets/images/ticket/exp.png" alt="ticket"/>
                    </div>
                    <span class="type">Experience</span>
                    <select class="select-bar">
                        {props.plan.experience.map((item)=>{
                            return <option value={item}>{item}</option>
                        })}
                    </select>
                </div>
            </form>
        </div>
    </section>
    )
}

export default BookSectionTp;