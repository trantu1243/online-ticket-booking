import Header from "../../components/header";

function ViewMovie(){
    return (
        <div className="app-main flex-column flex-row-fluid" id="kt_app_main">
            <div className="d-flex flex-column flex-column-fluid">
                <Header title="View Movie"/>

                <div id="kt_app_content" className="app-content flex-column-fluid">
                    <div id="kt_app_content_container" className="app-container container-fluid">
                        <div className="card card-flush">
                           
                            <div className="card-body pt-0">
                                <table className="table align-middle table-row-dashed fs-6 gy-5" id="kt_ecommerce_products_table">
                                    <thead>
                                        <tr className="text-start text-gray-400 fw-bold fs-7 text-uppercase gs-0">
                                            <th className="text-end min-w-100px">ID</th>
                                            <th className="text-end min-w-100px">Name</th>
                                            <th className="text-end min-w-70px">Release Date</th>
                                            <th className="text-end min-w-100px">Duration</th>
                                            <th className="text-end min-w-70px">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="fw-semibold text-gray-600">
                                        <tr>
                                            <td className="text-end pe-0">
                                                <span className="text-gray-800">03450006</span>
                                            </td>
                                            <td className="text-end pe-0">
                                                <span className="text-gray-800">Bố già</span>
                                            </td>
                                            <td className="text-end pe-0">
                                                <span className="text-gray-800">23-12-2024</span>
                                            </td>
                                            <td className="text-end pe-0">
                                                <span className="text-gray-800">100</span>
                                            </td>
                                            <td className="text-end">
                                                <a href="#0" className="btn btn-sm btn-danger btn-flex btn-center btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Delete
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-end pe-0">
                                                <span className="text-gray-800">03450006</span>
                                            </td>
                                            <td className="text-end pe-0">
                                                <span className="text-gray-800">Screen 02</span>
                                            </td>
                                            <td className="text-end pe-0">
                                                <span className="text-gray-800">03450006</span>
                                            </td>
                                            <td className="text-end pe-0">
                                                <span className="text-gray-800">03450006</span>
                                            </td>
                                            <td className="text-end">
                                                <a href="#0" className="btn btn-sm btn-danger btn-flex btn-center btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Delete
                                                </a>
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

export default ViewMovie;