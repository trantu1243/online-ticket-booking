import React from "react";

function SignUp(){
    return (
        <>
            <div className="preloader">
                <div className="preloader-inner">
                    <div className="preloader-icon">
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
            <section className="account-section bg_img" data-background="/assets/images/account/account-bg.jpg">
                <div className="container">
                    <div className="padding-top padding-bottom">
                        <div className="account-area">
                            <div className="section-header-3">
                                <span className="cate">welcome</span>
                                <h2 className="title">to Boleto </h2>
                            </div>
                            <form className="account-form">
                                <div className="form-group">
                                    <label for="email1">Email<span>*</span></label>
                                    <input type="text" placeholder="Enter Your Email" id="email1" required />
                                </div>
                                <div className="form-group">
                                    <label for="pass1">Password<span>*</span></label>
                                    <input type="password" placeholder="Password" id="pass1" required />
                                </div>
                                <div className="form-group">
                                    <label for="pass2">Confirm Password<span>*</span></label>
                                    <input type="password" placeholder="Password" id="pass2" required />
                                </div>
                                <div className="form-group checkgroup">
                                    <input type="checkbox" id="bal" required checked />
                                    <label for="bal">I agree to the <a href="#0">Terms, Privacy Policy</a> and <a href="#0">Fees</a></label>
                                </div>
                                <div className="form-group text-center">
                                    <input type="submit" value="Sign Up" />
                                </div>
                            </form>
                            <div className="option">
                                Already have an account? <a href="/auth/sign-in">Login</a>
                            </div>
                            <div className="or"><span>Or</span></div>
                            <ul className="social-icons">
                                <li>
                                    <a href="#0">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#0" className="active">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#0">
                                        <i className="fab fa-google"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SignUp;