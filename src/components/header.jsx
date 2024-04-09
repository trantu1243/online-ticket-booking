function Header(props){
    return(
        <div id="kt_app_toolbar" className="app-toolbar pt-5">
            <div id="kt_app_toolbar_container" className="app-container container-fluid d-flex align-items-stretch">

                <div className="app-toolbar-wrapper d-flex flex-stack flex-wrap gap-4 w-100">

                    <div className="page-title-admin d-flex flex-column gap-1 me-3 mb-2">
                    
                        <h1 className="page-heading-h1 d-flex flex-column justify-content-center text-dark fw-bolder fs-1 lh-0">{props.title}</h1>

                    </div>
                   
                </div>
            </div>
        </div>
    )
}

export default Header