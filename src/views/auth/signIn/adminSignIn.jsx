import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { SERVER_URL } from "../../../variables/variable";
import { useDispatch } from "react-redux";
import { adminSignIn } from "../admin.auth.slice";

function AdminSignIn(){
    const [textInput, setInput] = useState({username:"", password:""});
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
            const response = await fetch(`${SERVER_URL}/admin/login.php`, {
                method: 'POST',
                body: formData,
            });
            const res = await response.json();
            console.log(res);
            const data = JSON.parse(res.body);
            if (data.message === 'Ok'){
                const token = `Bearer ${data.token}`;
                localStorage.setItem('adminToken', token);
                localStorage.setItem('adminUsername', data.username);
                dispatch(adminSignIn({token: token, username: data.username}));
                navigate('/admin/dashboard');
                window.location.reload();
            }
            else {
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
                            <span className="cate">hello</span>
                            <h2 className="title">welcome back</h2>
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
                                <label htmlFor="pass3">Password<span>*</span></label>
                                <input 
                                    placeholder="Password" 
                                    id="pass3" 
                                    name="password" 
                                    type="password" 
                                    value={textInput.password} 
                                    onChange={handleChange} 
                                    required 
                                />
                            </div>
                            <div className="form-group checkgroup">
                                <input type="checkbox" id="bal2" required defaultChecked />
                                <label htmlFor="bal2">remember password</label>
                                <a href="#0" className="forget-pass">Forget Password</a>
                            </div>
                            {!checkUser && <p style={{color:"red",margin:"0",padding:"0",width:"100%", textAlign:"left", paddingLeft:"10px"}}>Username or password is incorrect</p>}
                            <div className="form-group text-center">
                                <input type="submit" onClick={handleClick}/>
                            </div>
                        </form>
                        <div className="option">
                            Don't have an account? <a href="/auth/sign-up">sign up now</a>
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

export default AdminSignIn;