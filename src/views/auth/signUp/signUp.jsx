import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SERVER_URL } from "../../../variables/variable";
import { signIn } from "../auth.slice";

function SignUp(){
    const [textInput, setInput] = useState({username:"", email:"", password:"", confirmPassword:""});
    const [errorText, setErrorText] = useState("");
    const [checkUser, setCheckUser] = useState(true);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    function handleChange(event){
        const {name, value} = event.target;
        setInput(preValue=>{
            return {...preValue, [name]:value}
        });
    }

    async function handleClick(event){

        event.preventDefault();
        try {
            const formData = new FormData();
            formData.append('username', textInput.username);
            formData.append('password', textInput.password);
            formData.append('email', textInput.email);
            formData.append('confirmPassword', textInput.confirmPassword)
            const response = await fetch(`${SERVER_URL}/register.php`, {
                method: 'POST',
                body: formData,
            });
            const res = await response.json();
            console.log(res);
            const data = JSON.parse(res.body);
            if (data.message === 'Ok'){
                const token = `Bearer ${data.token}`;
                localStorage.setItem('token', `Bearer ${data.token}`);
                localStorage.setItem('username', data.username);
                dispatch(signIn({token: token, username: data.username}));

                navigate('/portal/dashboard');
                window.location.reload();
            }
            else  if (data.message === 'error') {
                setErrorText(data.error);
                setCheckUser(false);
            }
        } catch (error) {
            console.error('Error logging in:', error);
            setCheckUser(false);
        }
    }
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
                                    <label htmlFor="username">Username<span>*</span></label>
                                    <input placeholder="Enter Your Username" 
                                        id="username" 
                                        name="username" 
                                        type="text" 
                                        value={textInput.username} 
                                        onChange={handleChange} 
                                        required    
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="username">Email<span>*</span></label>
                                    <input placeholder="Enter Your email" 
                                        id="email" 
                                        name="email" 
                                        type="text" 
                                        value={textInput.email} 
                                        onChange={handleChange} 
                                        required    
                                    />
                                </div>
                                <div className="form-group">
                                    <label for="pass1">Password<span>*</span></label>
                                    <input placeholder="Enter Your Username" 
                                        id="pass1" 
                                        name="password" 
                                        type="password" 
                                        value={textInput.password} 
                                        onChange={handleChange} 
                                        required    
                                    />
                                </div>
                                <div className="form-group">
                                    <label for="pass2">Confirm Password<span>*</span></label>
                                    <input placeholder="Enter Your Username" 
                                        id="confirmPassword" 
                                        name="confirmPassword" 
                                        type="password" 
                                        value={textInput.confirmPassword} 
                                        onChange={handleChange} 
                                        required    
                                    />
                                </div>
                                <div className="form-group checkgroup">
                                    <input type="checkbox" id="bal" required defaultChecked />
                                    <label for="bal">I agree to the <a href="#0">Terms, Privacy Policy</a> and <a href="#0">Fees</a></label>
                                </div>
                                {!checkUser && <p style={{color:"red",margin:"0",padding:"0",width:"100%", textAlign:"left", paddingLeft:"10px"}}>{errorText}</p>}
                                <div className="form-group text-center" onClick={handleClick}>
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