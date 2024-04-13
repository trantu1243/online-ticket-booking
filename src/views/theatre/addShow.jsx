import { useState, useEffect, useCallback } from "react";
import Header from "../../components/header";
import { SERVER_URL } from "../../variables/variable";
import { useSelector } from "react-redux";

function AddShow(){
    const [screenList, setScreenList] = useState([]);
    const [movieList, setMovieList] = useState([]);
    const [textInput, setInput] = useState({
        movieID:"",
        screenId:"",
        showDate:"",
        time:0
    });
    const login = useSelector(state => state.theatreAuth)
    const getMovies = useCallback(async()=>{
        try{
            const response = await fetch(`${SERVER_URL}/movie-list.php`, {
                method: 'GET',
            });
            const res = await response.json();
            const data = JSON.parse(res.body);
            if (data.message === 'Ok'){
                console.log(data.movies);
                setMovieList(data.movies);
            }
        }catch(e){
            console.log(e);
        }
    },[]);
    const getScreens = useCallback(async()=>{
        try{
            const response = await fetch(`${SERVER_URL}/screens.php`, {
                method: 'GET',
                headers:{
                    'Authorization': login.theatreToken
                }
            });
            const res = await response.json();
            const data = JSON.parse(res.body);
            if (data.message === 'Ok'){
                console.log(data.screens);
                setScreenList(data.screens);
            }
        }catch(e){
            console.log(e);
        }
    },[login]);
    useEffect(()=>{
        getMovies();
        getScreens();
    },[getMovies, getScreens]);

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
            formData.append('movieID', textInput.movieID);
            formData.append('screenId', textInput.screenId);
            formData.append('showDate', textInput.showDate);
            formData.append('time', textInput.time);
            const response = await fetch(`${SERVER_URL}/theatre/add-show.php`, {
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
                <Header title="Add Show" />
                <div id="kt_app_content" className="app-content flex-column-fluid">
                    <div id="kt_app_content_container" className="app-container container-fluid">
    
                        <div className="card mb-5 mb-xl-10">
                            <div id="kt_account_settings_profile_details" className="collapse show">
                    
                                <form id="kt_account_profile_details_form" className="form">
                    
                                    <div className="card-body border-top p-9">
                                        <div className="row mb-6">
                                            <label className="col-lg-4 col-form-label fw-semibold fs-6">Screen</label>
                                            <div className="col-lg-8 fv-row">
                                                <select 
                                                    name="screenId"
                                                    value={textInput.screenId}
                                                    onChange={handleChange} 
                                                    aria-label="Select a Currency" 
                                                    data-control="select2" 
                                                    data-placeholder="Select a currency.." 
                                                    className="form-select form-select-solid form-select-lg"
                                                >
                                                    <option value="">Select a screen..</option>
                                                    {screenList.map((item, index) => {
                                                        return <option key={index} value={item.screenId}>{item.screenName}</option>
                                                    })}
                                                </select>
                                            </div>
                                        </div>

                                        <div className="row mb-6">
                                            <label className="col-lg-4 col-form-label fw-semibold fs-6">Movie</label>
                                            <div className="col-lg-8 fv-row">
                                                <select 
                                                    name="movieID"
                                                    value={textInput.movieID}
                                                    onChange={handleChange} 
                                                    aria-label="Select a Currency" 
                                                    data-control="select2" 
                                                    data-placeholder="Select a currency.." 
                                                    className="form-select form-select-solid form-select-lg"
                                                >
                                                    <option value="">Select a movie..</option>
                                                    {movieList.map((item, index)=>{
                                                        return <option key={index} value={item.movieID}>{item.name}</option>
                                                    })}
                                                    <option value="Screen02">Đào, phở và piano</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="row mb-6">
                                            <label className="col-lg-4 col-form-label fw-semibold fs-6">Date</label>
                                            <div className="col-lg-8 fv-row">
                                                <input 
                                                    type="date" 
                                                    name="showDate"
                                                    value={textInput.showDate}
                                                    onChange={handleChange} 
                                                    className="form-control form-control-lg form-control-solid" />
                                            </div>
                                        </div>

                                        <div className="row mb-6">
                                            <label className="col-lg-4 col-form-label fw-semibold fs-6">Time</label>
                                            <div className="col-lg-8 fv-row">
                                                <select 
                                                    name="time" 
                                                    value={textInput.time}
                                                    onChange={handleChange}
                                                    aria-label="Select a Currency" 
                                                    data-control="select2" 
                                                    data-placeholder="Select a currency.." 
                                                    className="form-select-solid"
                                                >
                                                    <option value="">Select a time..</option>
                                                    <option value={1}>8h-11h</option>
                                                    <option value={2}>12h-15h</option>
                                                    <option value={3}>16h-19h</option>
                                                    <option value={4}>20h-23h</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                            
                                    <div className="card-footer d-flex justify-content-end py-6 px-9">
                                        <button type="reset" className="btn btn-light btn-active-light-primary me-2">Discard</button>
                                        <button 
                                            type="submit" 
                                            onClick={handleClick}
                                            className="btn btn-primary" 
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

export default AddShow;