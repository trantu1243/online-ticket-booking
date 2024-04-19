import { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SERVER_URL } from "../../../variables/variable";

function UserInfo(){
    const [textInput, setInput] = useState({
        email:"",
        name:"", 
        phoneNumber:"",
        cccd:"",
        birthday:"",
        sex:"0",
        address:""
    });

    const getUser = useCallback(async ()=>{
        try{
            const token = localStorage.getItem('token');
            if (token) {
                const response = await fetch(`${SERVER_URL}/auth.php`, {
                    headers: {
                        'Authorization': token
                    }
                });
                const res = await response.json();
                const data = JSON.parse(res.body);
                console.log(data);
                if (data.message === 'Ok'){
                    console.log(data);
                    setInput(data.user)
                }
            }
            
        }
        catch(e) {
            console.log(e);
        }
    },[]);

    function handleChange(event){
        const {name, value} = event.target;
        setInput(preValue=>{
            return {...preValue, [name]:value}
        });
    }

    async function handleClick(event){
        
        event.preventDefault();
        try {
            console.log(token);
            const formData = new FormData();
            formData.append('name', textInput.name);
            formData.append('phoneNumber', textInput.phoneNumber);
            formData.append('cccd', textInput.cccd);
            formData.append('birthday', textInput.birthday);
            formData.append('sex', textInput.sex);
            formData.append('address', textInput.address);
            const response = await fetch(`${SERVER_URL}/user-info.php`, {
                method: 'POST',
                headers: {
                    'Authorization': token
                },
                body: formData,
            });
            const res = await response.json();
            console.log(res);
            const data = JSON.parse(res.body);
            if (data.message === 'Ok'){
                alert('Save user information successfully.');
                getUser();
            }
          
        } catch (error) {
           
            alert('Failed');
        }
    }

    useEffect(()=>{
        getUser();
    },[getUser]);

    const token = useSelector(state => state.auth.token);
    const navigate = useNavigate();
    useEffect(()=>{
        if (!localStorage.getItem('token')) navigate('/auth/sign-in');
    }, [navigate]);

    return (
        <div className="movie-facility padding-bottom padding-top ecm-panel">
            <div className="container">
            <div className="padding-top padding-bottom">
                <div className="info-area">
                    <div className="section-header-3">
                        <span className="cate">User Information</span>
                    </div>
                    <form className="account-form">
                    <div className="row">
                        <div className="form-group col-lg-6">
                            <label htmlFor="name">Full name<span>*</span></label>
                            <input type="text" 
                                placeholder="Enter Your Full Name" 
                                id="name" 
                                required=""
                                name="name"
                                value={textInput.name || ""}
                                onChange={handleChange}
                                />
                        </div>
                        <div className="form-group col-lg-6">
                            <label htmlFor="email">Email<span>*</span></label>
                            <input type="text" 
                            placeholder="Enter Your Email" 
                            readOnly id="email" 
                            name="email"
                            value={textInput.email || ""}
                           
                            required=""/>
                        </div>
                        <div className="form-group col-lg-6">
                            <label htmlFor="phone">Phone Number<span>*</span></label>
                            <input 
                                type="text" 
                                placeholder="Enter Your Phone Number" 
                                id="phone" 
                                name="phoneNumber"
                                value={textInput.phoneNumber || ""}
                                onChange={handleChange}
                                required=""/>
                        </div>
                        <div className="form-group col-lg-6">
                            <label htmlFor="cccd">CCCD<span>*</span></label>
                            <input type="text" 
                                placeholder="Enter Your CCCD" 
                                id="cccd" 
                                name="cccd"
                                value={textInput.cccd || ""}
                                onChange={handleChange}
                                required=""/>
                        </div>
                        <div className="form-group col-lg-6">
                            <label htmlFor="birthday">Birthday<span>*</span></label>
                            <input id="birthday" 
                            type="date" 
                            name="birthday"
                            value={textInput.birthday || ""}
                            onChange={handleChange}
                            placeholder="Birthday"  />    
                        </div>
                        <div className="form-group col-lg-6">
                            <label htmlFor="email2">Sex<span>*</span></label>
                            <select id="cboSex" 
                                className="color-option" 
                                data-placeholder="Giới tính" 
                                name="sex"
                                value={textInput.sex || "0"}
                                onChange={handleChange}
                                tabIndex="1">
                                <option className="color-option" value="0">Giới tính</option>
                                <option className="color-option" value="Nam">Nam</option>
                                <option className="color-option" value="Nữ">Nữ</option>
                                <option className="color-option" value="Khác">Khác</option>
                            </select>
                            
                        </div>
                        <div className="form-group col-lg-6">
                            <label htmlFor="addr">Address<span>*</span></label>
                            <input type="text" 
                                placeholder="Enter Your Address" 
                                id="addr"
                                name="address"
                                value={textInput.address || ""}
                                onChange={handleChange}
                                 required=""/>
                        </div>
                        <div className="form-group text-center col-lg-12">
                            <input type="submit" value="Save" onClick={handleClick} />
                        </div>
                    </div>
                    </form>
                   
                </div>
            </div>
            </div>
        </div>
    )
}

export default UserInfo;