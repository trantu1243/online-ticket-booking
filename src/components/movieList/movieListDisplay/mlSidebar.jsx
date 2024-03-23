import React from "react";
const lang = ['Tamil', 'Telegu', 'Hindi', 'English' ,'Multiple Language'];
const mode = ['2d', '3d'];
const genre = ['thriller', 'horror', 'drama', 'romance', 'action', 'comedy', 'romantic', 'animation', 'sci-fi', 'adventure'];

function MlSidebar(){
    return (
        <div class="col-sm-10 col-md-8 col-lg-3">
            <div class="widget-1 widget-banner">
                <div class="widget-1-body">
                    <a href="#0">
                        <img src="/assets/images/sidebar/banner/banner01.jpg" alt="banner"/>
                    </a>
                </div>
            </div>
            <div class="widget-1 widget-check">
                <div class="widget-header">
                    <h5 class="m-title">Filter By</h5> <a href="#0" class="clear-check">Clear All</a>
                </div>
                <div class="widget-1-body">
                    <h6 class="subtitle">Language</h6>
                    <div class="check-area">
                        {lang.map(item =>{
                            return <div class="form-group">
                            <input type="checkbox" name="lang" id="lang1"/><label for="lang1">{item}</label>
                        </div>
                        })}
                    </div>
                </div>
            </div>
            <div class="widget-1 widget-check">
                <div class="widget-1-body">
                    <h6 class="subtitle">experience</h6>
                    <div class="check-area">
                        {mode.map(item => {
                            return <div class="form-group">
                            <input type="checkbox" name="mode" id="mode1"/><label for="mode1">{item}</label>
                        </div>
                        })}
                    </div>
                    <div class="add-check-area">
                        <a href="#0">view more <i class="plus"></i></a>
                    </div>
                </div>
            </div>
            <div class="widget-1 widget-check">
                <div class="widget-1-body">
                    <h6 class="subtitle">genre</h6>
                    <div class="check-area">
                        {genre.map(item => {
                            return<div class="form-group">
                                <input type="checkbox" name="genre" id="genre1"/><label for="genre1">{item}</label>
                            </div>
                        })}
                    </div>
                    <div class="add-check-area">
                        <a href="#0">view more <i class="plus"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MlSidebar;