import React, { useCallback, useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { SERVER_URL } from "../../../../variables/variable";

function DetailBannerTp(){
    const { id } = useParams();
    const [ movie, setMovie ] = useState({
        description:'',
        duration: 0,
        genre: '',
        image: '',
        movieID: 0,
        name: '',
        photo: null,
        poster: '',
        releaseDate: '',
        status: 0,
        tomatoPoint: 0,
        videoUrl: ''
    });
    const getMovie = useCallback(async()=>{
        try{
            const formData = new FormData();
            formData.append('id', id);
            const response = await fetch(`${SERVER_URL}/movie.php?id=${id}`);
            const res = await response.json();
            const data = JSON.parse(res.body);
            if (data.message === 'Ok'){
                console.log(data.movie);
                setMovie(data.movie);
            }
        } catch(e){ 
            console.log(e);
        }
    }, [id]);

    useEffect(()=>{
        getMovie();
    },[getMovie]);
    return (
        <>
            <section className="details-banner hero-area bg_img" data-background={movie.image}>
                <div className="container">
                    <div className="details-banner-wrapper">
                        <div className="details-banner-content">
                            <h3 className="title">{movie.name}</h3>
                            
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default DetailBannerTp;