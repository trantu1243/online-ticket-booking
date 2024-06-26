import React, {useCallback, useEffect, useState} from "react";
import { useSelector } from "react-redux";

import Header from "../../components/header";
import { SERVER_URL } from "../../variables/variable";

function ViewShow(){
    const [showList, setShowList] = useState([]);

    const login = useSelector(state => state.theatreAuth);
    const getData = useCallback(async()=>{
        try{
            const response = await fetch(`${SERVER_URL}/theatre/show.php`, {
                headers:{
                    'Authorization': login.theatreToken
                }
            });
            const res = await response.json();
            const data = JSON.parse(res.body);
            
            if (data.message === 'Ok'){
                console.log(data);
                setShowList(data.show)
            }
        }catch(e){
            console.log(e);
        }
    },[login]);
    useEffect(()=>{
        getData();
    },[getData]);

    async function handleDelete(id){
        try{
            const formData = new FormData();
            console.log(id);
            formData.append('id', id);
            // const token = localStorage.getItem('theatreToken');
            // console.log(login.theatreToken);
            const response = await fetch(`${SERVER_URL}/theatre/delete-show.php`, {
                method: 'POST',
                headers: {
                    'Authorization': login.theatreToken
                },
                body: formData
            });
            const res = await response.json();
            const data = JSON.parse(res.body);
            
            if (data.message === 'Ok'){
                console.log(data);
                alert("Delete successfully");
                getData();
            }
        }catch(e){
            console.log(e);
        }
        
    }
    
    return (
        <div className="app-main flex-column flex-row-fluid" id="kt_app_main">
            <div className="d-flex flex-column flex-column-fluid">
                <Header title="Screens"/>
                <div id="kt_app_content" className="app-content flex-column-fluid">
                    <div id="kt_app_content_container" className="app-container container-fluid">
                        <div className="card card-flush">
                           
                            <div className="card-body pt-0">
                                <table className="table align-middle table-row-dashed fs-6 gy-5" id="kt_ecommerce_products_table">
                                    <thead>
                                        <tr className="text-start text-gray-400 fw-bold fs-7 text-uppercase gs-0">
                                            <th className="text-end min-w-100px">ID</th>
                                            <th className="text-end min-w-100px">Movie</th>
                                            <th className="text-end min-w-70px">Screen</th>
                                            <th className="text-end min-w-70px">Date</th>
                                            <th className="text-end min-w-70px">Time</th>
                                            <th className="text-end min-w-70px">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="fw-semibold text-gray-600">
                                        {showList.map((item, index)=>{
                                            return <tr key={index}>
                                            <td className="text-end pe-0">
                                                <span className="text-gray-800">{item.showId}</span>
                                            </td>
                                            <td className="text-end pe-0">
                                                <span className="text-gray-800">{item.movieName}</span>
                                            </td>
                                            <td className="text-end pe-0">
                                                <span className="text-gray-800">{item.screenName}</span>
                                            </td>
                                            <td className="text-end pe-0">
                                                <span className="text-gray-800">{item.showDate}</span>
                                            </td>
                                            <td className="text-end pe-0">
                                                <span className="text-gray-800">{item.showTime === 1 ? "8h-11h" : (item.showTime === 2 ? "12h-15h" : (item.showTime === 3 ? "16h-19h" : (item.showTime === 4 && "20h-23h")))}</span>
                                            </td>
                                            <td className="text-end">
                                             
                                                <a href="#0"
                                                    onClick={(e)=>{
                                                        e.preventDefault();
                                                        handleDelete(item.showId);
                                                    }}
                                                    className="btn btn-sm btn-danger btn-flex btn-center btn-active-light-primary" >Delete
                                                </a>
                                            </td>
                                        </tr>
                                        })}
                                        
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

             
                </div>
            </div>
        </div>
    )
}

export default ViewShow