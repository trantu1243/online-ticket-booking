import { useState } from "react";
import { useSelector } from "react-redux";

import { SERVER_URL } from "../../../variables/variable";

function EditScreen(props){
    const [textInput, setInput] = useState({
        screenName:props.screen.screenName,
        charge:props.screen.charge
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
            formData.append('id', props.screen.screenId);
            formData.append('screenName', textInput.screenName);
            formData.append('charge', textInput.charge);
            
            const response = await fetch(`${SERVER_URL}/theatre/edit-screen.php`, {
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
                alert('You have successfully edit an movie.');
                window.location.reload();
            }
          
        } catch (error) {
           console.log(error)
            alert('Failed');
        }
    }
    return (
  
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
                                        <button 
                                            onClick={()=>{
                                                props.cancel(false);
                                            }}
                                            type="reset" 
                                            className="btn btn-light btn-active-light-primary me-2">Discard</button>
                                        <button 
                                            type="submit" 
                                            onClick={handleClick}
                                            className="btn btn-primary" 
                                            id="kt_account_profile_details_submit">Edit</button>
                                    </div>
                        
                                </form>
                    
                            </div>
                        </div>
                    </div>
                </div>
       
    )
}

export default EditScreen;