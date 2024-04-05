import React from "react";

function DetailBannerTp(props){
    return (
        <>
            <section class="details-banner hero-area bg_img" data-background="/assets/images/banner/banner03.jpg">
                <div class="container">
                    <div class="details-banner-wrapper">
                        <div class="details-banner-content">
                            <h3 class="title">props.plan.name</h3>
                            <div class="tags">
                                {props.plan.language.map((item)=>{
                                    return <a href="#0">{item}</a>
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default DetailBannerTp;