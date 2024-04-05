import React, { useCallback, useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import DetailBanner from "./components/detailBanner";
import MovieDetailSection from "./components/movieDetailSection";
import BookSection from "./components/bookSession";
import { SERVER_URL } from "../../../variables/variable";
// import { movie } from "../../variables";

function Movie(){
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
    }, []);

    useEffect(()=>{
        getMovie();
    },[getMovie]);
    return (
        <>
            <DetailBanner movieInfo ={movie} />
            <BookSection movieInfo = {movie} /> 
            <MovieDetailSection movieInfo= {movie} />
        </>
       
    )
}

export default Movie;