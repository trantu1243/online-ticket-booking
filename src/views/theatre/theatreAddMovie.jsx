import { useState } from "react";
import { useSelector } from "react-redux";

import Header from "../../components/header";
import { SERVER_URL } from "../../variables/variable";

function TheatreAddMovie(){
    const [textInput, setInput] = useState({
        movieName:"",
        description:"",
        date:"",
        duration:"",
        genre:"", 
        videoUrl:"", 
        tomatoPoint:""
    });
    const [poster, setPoster] = useState(null);
    const [image, setImage] = useState(null);
    const login = useSelector(state => state.theatreAuth);
    function handleImageChange(event){
        setImage(event.target.files[0]);
      };
    function handlePosterChange(event){
    setPoster(event.target.files[0]);
    };
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
            formData.append('movieName', textInput.movieName);
            formData.append('description', textInput.description);
            formData.append('releaseDate', textInput.date);
            formData.append('duration', textInput.duration);
            formData.append('genre', textInput.genre);
            formData.append('videoUrl', textInput.videoUrl);
            formData.append('tomatoPoint', textInput.tomatoPoint);
            formData.append('poster', poster);
            formData.append('image', image);
            const response = await fetch(`${SERVER_URL}/theatre/add-movie.php`, {
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
                alert('You have successfully add an movie.');
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
                                            <label className="col-lg-4 col-form-label fw-semibold fs-6">
                                                <span className="required">Movie Name</span>
                                            </label>
                                            <div className="col-lg-8 fv-row">
                                                <input 
                                                    type="text" 
                                                    name="movieName" 
                                                    value={textInput.movieName}
                                                    onChange={handleChange}
                                                    className="form-control form-control-lg form-control-solid"
                                                    placeholder="Movie Name"  />
                                            </div>
                                        </div>

                                        <div className="row mb-6">
                                            <label className="col-lg-4 col-form-label required fw-semibold fs-6">Description</label>                       
                                            <div className="col-lg-8 fv-row">
                                                <textarea 
                                                    type="text" 
                                                    name="description" 
                                                    value={textInput.description}
                                                    onChange={handleChange}
                                                    rows="3" 
                                                    className="form-control form-control-lg form-control-solid" 
                                                    placeholder="Description" ></textarea>
                                            </div>
                                        </div>
                                        
                                        <div className="row mb-6">
                                            <label className="col-lg-4 col-form-label fw-semibold fs-6">Release Date</label>
                                            <div className="col-lg-8 fv-row">
                                                <input 
                                                    type="date" 
                                                    name="date" 
                                                    value={textInput.date}
                                                    onChange={handleChange}
                                                    className="form-control form-control-lg form-control-solid" />
                                            </div>
                                        </div>

                                        <div className="row mb-6">
                                            <label className="col-lg-4 col-form-label fw-semibold fs-6">Duration</label>
                                            <div className="col-lg-8 fv-row">
                                                <input 
                                                    type="number" 
                                                    name="duration" 
                                                    value={textInput.duration}
                                                    onChange={handleChange}
                                                    className="form-control form-control-lg form-control-solid" />
                                            </div>
                                        </div>

                                        <div className="row mb-6">
                                            <label className="col-lg-4 col-form-label fw-semibold fs-6">Genre</label>
                                            <div className="col-lg-8 fv-row">
                                                <input 
                                                    type="text" 
                                                    name="genre" 
                                                    value={textInput.genre}
                                                    onChange={handleChange}
                                                    className="form-control form-control-lg form-control-solid" 
                                                    placeholder="Genre" />
                                            </div>
                                        </div>

                                        <div className="row mb-6">        
                                            <label className="col-lg-4 col-form-label fw-semibold fs-6">Poster</label>
                                            <div className="col-lg-8">         
                                                    <label className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="change" data-bs-toggle="tooltip" title="Change poster">            
                                                        <input 
                                                            type="file" 
                                                            name="image" 
                                                            onChange={handlePosterChange}
                                                            accept=".png, .jpg, .jpeg" />
                                                               
                                                    </label>                                       
                                            </div>                                  
                                        </div>

                                        <div className="row mb-6">        
                                            <label className="col-lg-4 col-form-label fw-semibold fs-6">Image</label>
                                            <div className="col-lg-8">         
                                                    <label className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="change" data-bs-toggle="tooltip" title="Change image">            
                                                        <input 
                                                            type="file" 
                                                            name="image" 
                                                            onChange={handleImageChange}
                                                            accept=".png, .jpg, .jpeg" />
                                                                              
                                                    </label>                                       
                                            </div>                                  
                                        </div>
                                    
                                        <div className="row mb-6">
                                            <label className="col-lg-4 col-form-label fw-semibold fs-6">Trailer URL</label>
                                            <div className="col-lg-8 fv-row">
                                                <input 
                                                    type="text" 
                                                    name="videoUrl" 
                                                    value={textInput.videoUrl}
                                                    onChange={handleChange}
                                                    className="form-control form-control-lg form-control-solid" 
                                                    placeholder="Trailer URL" />
                                            </div>
                                        </div>

                                        
                                        <div className="row mb-6">
                                            <label className="col-lg-4 col-form-label fw-semibold fs-6">Tomato Point</label>
                                            <div className="col-lg-8 fv-row">
                                                <input 
                                                    type="number" 
                                                    name="tomatoPoint"
                                                    value={textInput.tomatoPoint}
                                                    onChange={handleChange}
                                                    className="form-control form-control-lg form-control-solid" />
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

export default TheatreAddMovie;