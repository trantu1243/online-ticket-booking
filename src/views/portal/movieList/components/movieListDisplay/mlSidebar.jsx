import React from "react";
const lang = ['Tamil', 'Telegu', 'Hindi', 'English' ,'Multiple Language'];
const mode = ['2d', '3d'];
const genre = ['thriller', 'horror', 'drama', 'romance', 'action', 'comedy', 'romantic', 'animation', 'sci-fi', 'adventure'];

function MlSidebar(){
    return (
        <div className="col-sm-10 col-md-8 col-lg-3">
            <div className="widget-1 widget-banner">
                <div className="widget-1-body">
                    <a href="#0">
                        <img src="/assets/images/sidebar/banner/banner01.jpg" alt="banner"/>
                    </a>
                </div>
            </div>
            <div className="widget-1 widget-check">
                <div className="widget-header">
                    <h5 className="m-title">Filter By</h5> <a href="#0" className="clear-check">Clear All</a>
                </div>
                <div className="widget-1-body">
                    <h6 className="subtitle">Language</h6>
                    <div className="check-area">
                        {lang.map((item) =>{
                            return <div className="form-group">
                            <input type="checkbox" name="lang" id="lang1"/><label for="lang1">{item}</label>
                        </div>
                        })}
                    </div>
                </div>
            </div>
            <div className="widget-1 widget-check">
                <div className="widget-1-body">
                    <h6 className="subtitle">experience</h6>
                    <div className="check-area">
                        {mode.map(item => {
                            return <div className="form-group">
                            <input type="checkbox" name="mode" id="mode1"/><label for="mode1">{item}</label>
                        </div>
                        })}
                    </div>
                    <div className="add-check-area">
                        <a href="#0">view more <i className="plus"></i></a>
                    </div>
                </div>
            </div>
            <div className="widget-1 widget-check">
                <div className="widget-1-body">
                    <h6 className="subtitle">genre</h6>
                    <div className="check-area">
                        {genre.map(item => {
                            return<div className="form-group">
                                <input type="checkbox" name="genre" id="genre1"/><label for="genre1">{item}</label>
                            </div>
                        })}
                    </div>
                    <div className="add-check-area">
                        <a href="#0">view more <i class="plus"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MlSidebar;