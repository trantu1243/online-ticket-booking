import React from "react";

function Sidebar(){
    return (
        <div class="col-lg-3 col-sm-10 col-md-6 mb-50">
            <div class="widget-1 widget-tags">
                <ul>
                    <li>
                        <a href="#0">2D</a>
                    </li>
                    <li>
                        <a href="#0">imax 2D</a>
                    </li>
                    <li>
                        <a href="#0">4DX</a>
                    </li>
                </ul>
            </div>
            <div class="widget-1 widget-offer">
                <h3 class="title">Applicable offer</h3>
                <div class="offer-body">
                    <div class="offer-item">
                        <div class="thumb">
                            <img src="/assets/images/sidebar/offer01.png" alt="sidebar"/>
                        </div>
                        <div class="content">
                            <h6>
                                <a href="#0">Amazon Pay Cashback Offer</a>
                            </h6>
                            <p>Win Cashback Upto Rs 300*</p>
                        </div>
                    </div>
                    <div class="offer-item">
                        <div class="thumb">
                            <img src="/assets/images/sidebar/offer02.png" alt="sidebar"/>
                        </div>
                        <div class="content">
                            <h6>
                                <a href="#0">PayPal Offer</a>
                            </h6>
                            <p>Transact first time with Paypal and
                                get 100% cashback up to Rs. 500</p>
                        </div>
                    </div>
                    <div class="offer-item">
                        <div class="thumb">
                            <img src="/assets/images/sidebar/offer03.png" alt="sidebar"/>
                        </div>
                        <div class="content">
                            <h6>
                                <a href="#0">HDFC Bank Offer</a>
                            </h6>
                            <p>Get 15% discount up to INR 100* 
                                and INR 50* off on F&B T&C apply</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="widget-1 widget-banner">
                <div class="widget-1-body">
                    <a href="#0">
                        <img src="/assets/images/sidebar/banner/banner01.jpg" alt="banner"/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;