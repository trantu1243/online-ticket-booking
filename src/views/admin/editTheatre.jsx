import { useState } from "react";
import { useSelector } from "react-redux";
import { SERVER_URL } from "../../variables/variable";

function EditTheatre(props){
    
    const [textInput, setInput] = useState({
        theatreName: props.theater.name,
        theatreAddress: props.theater.address,
        state: props.theater.state,
        zipCode: props.theater.zipCode,
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
            formData.append('id', props.theater.theaterID)
            formData.append('theatreName', textInput.theatreName);
            formData.append('theatreAddress', textInput.theatreAddress);
            formData.append('state', textInput.state);
            formData.append('zipCode', textInput.zipCode);
            const response = await fetch(`${SERVER_URL}/admin/edit-theater.php`, {
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
                alert('You have successfully edit an theatre.');
               
                window.location.reload();
            }
          
        } catch (error) {
           
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
                                            name="zipCode" 
                                            value={props.theater.username}
                                            disabled
                                            className="form-control form-control-lg form-control-solid" 
                                            placeholder="Zip Code"  />
                                    </div>               
                                </div>
                        
                            </div>
                    
                            <div className="card-footer d-flex justify-content-end py-6 px-9">
                                <button 
                                    type="reset" 
                                    onClick={()=>{
                                            props.cancel(false);
                                        }}
                                    className="btn btn-light btn-active-light-primary me-2">Discard</button>
                                <button 
                                    type="submit" 
                                    onClick={handleClick}
                                    className="btn btn-primary" 
                                    id="kt_account_profile_details_submit"
                                >Edit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditTheatre;