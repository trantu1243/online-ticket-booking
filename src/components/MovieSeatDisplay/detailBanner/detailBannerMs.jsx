import React from "react";

function DetailBannerMs(props){
    return (
        <section class="details-banner hero-area bg_img seat-plan-banner" data-background="/assets/images/banner/banner04.jpg">
            <div class="container">
                <div class="details-banner-wrapper">
                    <div class="details-banner-content style-two">
                        <h3 class="title">{props.movieSeat.name}</h3>
                        <div class="tags">
                            <a href="#0">{props.movieSeat.city}</a>
                            <a href="#0">{props.movieSeat.experience}</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DetailBannerMs;