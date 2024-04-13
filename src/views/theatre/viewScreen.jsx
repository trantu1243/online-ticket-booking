import React, {useCallback, useEffect, useState} from "react";
import { useSelector } from "react-redux";
import EditScreen from "./edit/editScreen";

import Header from "../../components/header";
import { SERVER_URL } from "../../variables/variable";

function ViewScreen(){
    const [screenList, setScreenList] = useState([]);
    const [edit, setEdit] = useState(null);
    const [checkEdit, setCheckEdit] = useState(false);
    const login = useSelector(state => state.theatreAuth);
    const getData = useCallback(async()=>{
        try{
            const response = await fetch(`${SERVER_URL}/theatre/screen.php`, {
                headers:{
                    'Authorization': login.theatreToken
                }
            });
            const res = await response.json();
            const data = JSON.parse(res.body);
            
            if (data.message === 'Ok'){
                console.log(data);
                setScreenList(data.screen)
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
            const response = await fetch(`${SERVER_URL}/theatre/delete-screen.php`, {
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
    function handleEdit(movie){
        setEdit(movie);
        setCheckEdit(true);
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
                                            <th className="text-end min-w-100px">Name</th>
                                            <th className="text-end min-w-70px">Charge</th>
                                            <th className="text-end min-w-70px">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="fw-semibold text-gray-600">
                                        {screenList.map((item, index)=>{
                                            return <tr key={index}>
                                            <td className="text-end pe-0">
                                                <span className="text-gray-800">{item.screenId}</span>
                                            </td>
                                            <td className="text-end pe-0">
                                                <span className="text-gray-800">{item.screenName}</span>
                                            </td>
                                            <td className="text-end pe-0">
                                                <span className="text-gray-800">{item.charge}</span>
                                            </td>
                                            <td className="text-end">
                                                <a href="#0"
                                                onClick={(e)=>{
                                                        e.preventDefault();
                                                        handleEdit(item);
                                                    }}
                                                    className="btn btn-sm btn-warning btn-flex btn-center btn-active-light-primary" style={{marginRight:"10px"}}>Edit
                                                </a>
                                                <a href="#0"
                                                    onClick={(e)=>{
                                                        e.preventDefault();
                                                        handleDelete(item.screenId);
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
                {checkEdit && <EditScreen screen={edit} cancel={setCheckEdit}/>}
            </div>
        </div>
    )
}

export default ViewScreen