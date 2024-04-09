import { useState } from "react";
import { useSelector } from "react-redux";

import Header from "../../components/header";
import { SERVER_URL } from "../../variables/variable";

function AddScreen(){
    const [textInput, setInput] = useState({
        screenName:"",
        charge:"",
    });
    const login = useSelector(state => state.theatreAuth);
 
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
            formData.append('screenName', textInput.screenName);
            formData.append('charge', textInput.charge);
            const response = await fetch(`${SERVER_URL}/theatre/add-screen.php`, {
                method: 'POST',
                headers: {
                    'Authorization': login.theatreToken
                },
                body: formData,
            });
            const res = await response.json();
            console.log(res);
            const data = JSON.parse(res.body);
            if (data.message === 'Ok'){
                alert('You have successfully add an screen.');
                window.location.reload();
            }   
        } catch (error) {    
            alert('Failed');
        }
    }
    return (
        <div className="app-main flex-column flex-row-fluid" id="kt_app_main">
            <div className="d-flex flex-column flex-column-fluid">
                <Header title="Add Screen" />
                <div id="kt_app_content" className="app-content flex-column-fluid">
                    <div id="kt_app_content_container" className="app-container container-fluid">
    
                        <div className="card mb-5 mb-xl-10">
                            <div id="kt_account_settings_profile_details" className="collapse show">
                    
                                <form id="kt_account_profile_details_form" className="form">
                    
                                    <div className="card-body border-top p-9">
                                        <div className="row mb-6">
                                            <label className="col-lg-4 col-form-label fw-semibold fs-6">
                                                <span className="required">Screen Name</span>
                                            </label>
                                            <div className="col-lg-8 fv-row">
                                                <input 
                                                    type="text" 
                                                    name="screenName" 
                                                    value={textInput.screenName}
                                                    onChange={handleChange}
                                                    className="form-control form-control-lg form-control-solid" 
                                                    placeholder="Screen Name"  />
                                            </div>
                                        </div>

                                        <div className="row mb-6">
                                            <label className="col-lg-4 col-form-label fw-semibold fs-6">
                                                <span className="required">Ticket price</span>
                                            </label>
                                            <div className="col-lg-8 fv-row">
                                                <input 
                                                    type="number" 
                                                    name="charge" 
                                                    value={textInput.charge}
                                                    onChange={handleChange}
                                                    className="form-control form-control-lg form-control-solid" 
                                                    placeholder="vnd"  />
                                            </div>
                                        </div>


                                        
                                    </div>
                            
                                    <div className="card-footer d-flex justify-content-end py-6 px-9">
                                        <button type="reset" className="btn btn-light btn-active-light-primary me-2">Discard</button>
                                        <button 
                                            type="submit" 
                                            className="btn btn-primary" 
                                            onClick={handleClick}
                                            id="kt_account_profile_details_submit">Add</button>
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

export default AddScreen;