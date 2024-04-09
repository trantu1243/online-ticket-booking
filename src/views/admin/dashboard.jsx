import Header from "../../components/header";

function AdminDashboard(){
    return (
        <div className="app-main flex-column flex-row-fluid" id="kt_app_main">
            <div className="d-flex flex-column flex-column-fluid">
                <Header title="Dashboard "/>
                <div id="kt_app_content" className="app-content flex-column-fluid">
                    <div id="kt_app_content_container" className="app-container container-fluid">
    
                        <div className="row g-5 g-xl-10 mb-xl-10">
                            
                            <div className="col-lg-12 col-xl-12 col-xxl-6 mb-5 mb-xl-0">
                                <div className="card card-flush overflow-hidden h-md-100">
                                
                                    <div className="card-body d-flex justify-content-between flex-column pb-1 px-0">
                                
                                        <div className="px-9 mb-5">
                                            <div className="d-flex mb-2">
                                                <span className="fs-4 fw-semibold text-gray-400 me-1">$</span>
                                                <span className="fs-2hx fw-bold text-gray-800 me-2 lh-1 ls-n2">14,094</span>
                                            </div>
                                            <span className="fs-6 fw-semibold text-gray-400">Another $48,346 to Goal</span>
                            
                                        </div>
                                        <div id="kt_charts_widget_3" className="min-h-auto ps-4 pe-6" style={{height: "300px"}}></div>
            
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard