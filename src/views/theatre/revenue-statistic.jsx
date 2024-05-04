import React, {useCallback, useEffect, useState} from "react";
import { useSelector } from "react-redux";

import Header from "../../components/header";
import { SERVER_URL } from "../../variables/variable";

function RevenueStatistic(){
    const [revenue, setRevenue] = useState([]);
    const [seats, setSeats] = useState(0);
    const [total, setTotal] = useState(0);
    const login = useSelector(state => state.theatreAuth);
    const getData = useCallback(async()=>{
        try{
            const response = await fetch(`${SERVER_URL}/theatre/revenue-statistic.php`, {
                headers:{
                    'Authorization': login.theatreToken
                }
            });
            const res = await response.json();
            const data = JSON.parse(res.body);
            
            if (data.message === 'Ok'){
                console.log(data);
                setRevenue(data.statistic);
            }
        }catch(e){
            console.log(e);
        }
    },[login]);
    useEffect(()=>{
        getData();
    },[getData]);

    useEffect(()=>{
        let sum1 = 0;
        let sum2 = 0;
        revenue.forEach((item)=>{
            sum1+=Number(item.totalCharge);
            sum2+=Number(item.number);
        })
        setTotal(sum1);
        setSeats(sum2);
    },[revenue])
    
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
                                            <th className="text-end min-w-70px">Number of Seats</th>
                                            <th className="text-end min-w-70px">Revenue</th>
                                        </tr>
                                    </thead>
                                    <tbody className="fw-semibold text-gray-600">
                                        {revenue.map((item, index)=>{
                                            return <tr key={index}>
                                            <td className="text-end pe-0">
                                                <span className="text-gray-800">{item.movieID}</span>
                                            </td>
                                            <td className="text-end pe-0">
                                                <span className="text-gray-800">{item.movieName}</span>
                                            </td>
                                            <td className="text-end pe-0">
                                                <span className="text-gray-800">{Number(item.number)}</span>
                                            </td>
                                            <td className="text-end pe-0">
                                                <span className="text-gray-800">{Number(item.totalCharge).toLocaleString()}</span>
                                            </td>
                                            
                                        </tr>
                                        })}
                                        <tr>
                                            <td className="text-end pe-0 text-gray-400 fw-bold fs-7 text-uppercase gs-0">
                                                <span className="text-gray-800">Total:</span>
                                            </td>
                                            <td className="text-end pe-0">
                                                <span className="text-gray-800"></span>
                                            </td>
                                            <td className="text-end pe-0">
                                                <span className="text-gray-800">{seats}</span>
                                            </td>
                                            <td className="text-end pe-0">
                                                <span className="text-gray-800">{total.toLocaleString()}</span>
                                            </td>
                                            
                                        </tr>
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

export default RevenueStatistic