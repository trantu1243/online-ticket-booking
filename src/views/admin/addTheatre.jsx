import { useState } from "react";
import { useSelector } from "react-redux";
import Header from "../../components/header";
import { SERVER_URL } from "../../variables/variable";

function AddTheatre(){
    
    const [textInput, setInput] = useState({
        theatreName:"",
        theatreAddress:"",
        state:"",
        zipCode:"",
        username:"", 
        password:"", 
        confirmPassword:""
    });
    const login = useSelector(state => state.adminAuth);
  
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
            formData.append('theatreName', textInput.theatreName);
            formData.append('theatreAddress', textInput.theatreAddress);
            formData.append('state', textInput.state);
            formData.append('zipCode', textInput.zipCode);
            formData.append('username', textInput.username);
            formData.append('password', textInput.password);
            formData.append('confirmPassword', textInput.confirmPassword);
            const response = await fetch(`${SERVER_URL}/admin/add-theatre.php`, {
                method: 'POST',
                headers: {
                    'Authorization': login.adminToken
                },
                body: formData,
            });
            const res = await response.json();
            console.log(res);
            const data = JSON.parse(res.body);
            if (data.message === 'Ok'){
                alert('You have successfully add an theatre.');
               
                window.location.reload();
            }
          
        } catch (error) {
           
            alert('Failed');
        }
    }
    return (
        <div className="app-main flex-column flex-row-fluid" id="kt_app_main">
            <div className="d-flex flex-column flex-column-fluid">
                <Header title="Add Movie" />
                <div id="kt_app_content" className="app-content flex-column-fluid">
                    <div id="kt_app_content_container" className="app-container container-fluid">
    
                        <div className="card mb-5 mb-xl-10">
                            <div id="kt_account_settings_profile_details" className="collapse show">
                                <form id="kt_account_profile_details_form" className="form">
                                    <div className="card-body border-top p-9">

                                        <div className="row mb-6">
                                            <label className="col-lg-4 col-form-label required fw-semibold fs-6">Theatre Name</label>
                                            <div className="col-lg-8 fv-row">
                                                <input 
                                                    type="text" 
                                                    name="theatreName" 
                                                    value={textInput.theatreName}
                                                    onChange={handleChange}
                                                    className="form-control form-control-lg form-control-solid" 
                                                    placeholder="Theatre Name"  />
                                            </div>
                                        </div>
                        
                                        <div className="row mb-6">
                                            <label className="col-lg-4 col-form-label required fw-semibold fs-6">Theatre Address</label>
                                            <div className="col-lg-8 fv-row">
                                                <input 
                                                    type="text" 
                                                    name="theatreAddress" 
                                                    value={textInput.theatreAddress}
                                                    onChange={handleChange}
                                                    className="form-control form-control-lg form-control-solid" 
                                                    placeholder="Theatre Address"   />
                                            </div>               
                                        </div>
                                        
                                        <div className="row mb-6">
                                            <label className="col-lg-4 col-form-label required fw-semibold fs-6">State</label>
                                            <div className="col-lg-8 fv-row">
                                                <input 
                                                    type="text" 
                                                    name="state" 
                                                    value={textInput.state}
                                                    onChange={handleChange}
                                                    className="form-control form-control-lg form-control-solid" 
                                                    placeholder="State"  />
                                            </div>               
                                        </div>

                                        <div className="row mb-6">
                                            <label className="col-lg-4 col-form-label required fw-semibold fs-6">Zip Code</label>
                                            <div className="col-lg-8 fv-row">
                                                <input 
                                                    type="text" 
                                                    name="zipCode" 
                                                    value={textInput.zipCode}
                                                    onChange={handleChange}
                                                    className="form-control form-control-lg form-control-solid" 
                                                    placeholder="Zip Code"  />
                                            </div>               
                                        </div>
                                
                                        <div className="row mb-6">
                                            <label className="col-lg-4 col-form-label required fw-semibold fs-6">Username</label>
                                            <div className="col-lg-8 fv-row">
                                                <input 
                                                    type="text" 
                                                    name="username" 
                                                    value={textInput.username}
                                                    onChange={handleChange}
                                                    className="form-control form-control-lg form-control-solid" 
                                                    placeholder="Username"  />
                                            </div>               
                                        </div>

                                        <div className="row mb-6">
                                            <label className="col-lg-4 col-form-label required fw-semibold fs-6">Password</label>
                                            <div className="col-lg-8 fv-row">
                                                <input 
                                                    type="password" 
                                                    name="password" 
                                                    value={textInput.password}
                                                    onChange={handleChange}
                                                    className="form-control form-control-lg form-control-solid" 
                                                    placeholder="Password"  />
                                            </div>               
                                        </div>

                                        <div className="row mb-6">
                                            <label className="col-lg-4 col-form-label required fw-semibold fs-6">Confirm Password</label>
                                            <div className="col-lg-8 fv-row">
                                                <input 
                                                    type="password" 
                                                    name="confirmPassword" 
                                                    value={textInput.confirmPassword}
                                                    onChange={handleChange}
                                                    className="form-control form-control-lg form-control-solid" 
                                                    placeholder="Confirm Password"  />
                                            </div>               
                                        </div>
                                    </div>
                            
                                    <div className="card-footer d-flex justify-content-end py-6 px-9">
                                        <button 
                                            type="reset" 
                                            className="btn btn-light btn-active-light-primary me-2">Discard</button>
                                        <button 
                                            type="submit" 
                                            onClick={handleClick}
                                            className="btn btn-primary" 
                                            id="kt_account_profile_details_submit"
                                        >Add</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddTheatre;