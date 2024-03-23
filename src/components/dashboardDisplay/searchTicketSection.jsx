import React from "react";
import FormCard from "../card/formCard";
import { formList } from "../../views/variables";

function SearchTicketSection(){
    return (
        <section className="search-ticket-section padding-top pt-lg-0">
                <div className="container">
                    <div className="search-tab bg_img" data-background="/assets/images/ticket/ticket-bg01.jpg">
                        <div className="row align-items-center mb--20">
                            <div className="col-lg-6 mb-20">
                                <div className="search-ticket-header">
                                    <h6 className="category">welcome to Boleto </h6>
                                    <h3 className="title">what are you looking for</h3>
                                </div>
                            </div>
                        </div>
                        <div className="tab-area">
                            <div className="tab-item active">
                                <form className="ticket-search-form">
                                    <div className="form-group large">
                                        <input type="text" placeholder="Search fo Movies" />
                                        <button type="submit"><i className="fas fa-search"></i></button>
                                    </div>
                                    {formList.map((item)=>{
                                        return <FormCard data = {item}/>
                                    })}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section> 
    )
}

export default SearchTicketSection;