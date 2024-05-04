import React, {useCallback, useEffect, useState} from "react";
import Header from "../../components/header";
import EditTheatre from "./editTheatre";
import { SERVER_URL } from "../../variables/variable";

function AdminDashboard(){
    const [theater, setTheaterList] = useState([]);
    const [edit, setEdit] = useState(null);
    const [checkEdit, setCheckEdit] = useState(false);
    const getData = useCallback(async()=>{
        try{
            const token = localStorage.getItem('adminToken');
            const response = await fetch(`${SERVER_URL}/admin/theatre.php`, {
                headers: {
                    'Authorization': token
                }
            });
            const res = await response.json();
            const data = JSON.parse(res.body);
            
            if (data.message === 'Ok'){
                console.log(data);
                setTheaterList(data.theatre)
            }
        }catch(e){
            console.log(e);
        }
    },[]);
    useEffect(()=>{
        getData();
    },[getData]);

    async function handleDelete(id, userId){
        try{
            const formData = new FormData();
            formData.append('id', id);
            formData.append('userId', userId)
            const token = localStorage.getItem('adminToken');
            const response = await fetch(`${SERVER_URL}/admin/delete-theater.php`, {
                method: 'POST',
                headers: {
                    'Authorization': token
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
    function handleEdit(theater){
        setEdit(theater);
        setCheckEdit(true);
    }
    
    return (
        <div className="app-main flex-column flex-row-fluid" id="kt_app_main">
            <div className="d-flex flex-column flex-column-fluid">
                <Header title="Theaters"/>
                <div id="kt_app_content" className="app-content flex-column-fluid">
                    <div id="kt_app_content_container" className="app-container container-fluid">
                        <div className="card card-flush">
                           
                            <div className="card-body pt-0">
                                <table className="table align-middle table-row-dashed fs-6 gy-5" id="kt_ecommerce_products_table">
                                    <thead>
                                        <tr className="text-start text-gray-400 fw-bold fs-7 text-uppercase gs-0">
                                            <th className="text-end min-w-100px">ID</th>
                                            <th className="text-end min-w-100px">Name</th>
                                            <th className="text-end min-w-70px">City</th>
                                            <th className="text-end min-w-100px">Address</th>
                                            <th className="text-end min-w-100px">Username</th>
                                            <th className="text-end min-w-100px">Revenue</th>
                                            <th className="text-end min-w-70px">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="fw-semibold text-gray-600">
                                        {theater.map((item, index)=>{
                                            return <tr key={index}>
                                            <td className="text-end pe-0">
                                                <span className="text-gray-800">{item.theaterID}</span>
                                            </td>
                                            <td className="text-end pe-0">
                                                <span className="text-gray-800">{item.name}</span>
                                            </td>
                                            <td className="text-end pe-0">
                                                <span className="text-gray-800">{item.state}</span>
                                            </td>
                                            <td className="text-end pe-0">
                                                <span className="text-gray-800">{item.address}</span>
                                            </td>
                                            <td className="text-end pe-0">
                                                <span className="text-gray-800">{item.username}</span>
                                            </td>
                                            <td className="text-end pe-0">
                                                <span className="text-gray-800">{Number(item.totalCharge).toLocaleString()}</span>
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
                                                        handleDelete(item.theaterID, item.userId);
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
                {checkEdit && <EditTheatre theater={edit} cancel={setCheckEdit}/>}
            </div>
        </div>
    )
}

export default AdminDashboard