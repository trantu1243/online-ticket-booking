import { useSelector } from "react-redux"

function TheatreNavbar(){
    const username = useSelector(state => state.theatreAuth.theatreUsername);
    return (
        <div id="kt_app_header" className="app-header d-flex flex-column flex-stack">
					<div className="d-flex align-items-center flex-stack flex-grow-1">
						
				
						<div className="app-navbar flex-grow-1 justify-content-end" id="kt_app_header_navbar">
	
							<div className="app-navbar-item ms-3 ms-lg-4 me-lg-2" id="kt_header_user_menu_toggle">
			
								<div className="cursor-pointer symbol symbol-30px symbol-lg-40px" data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end">
									<div className="menu-item px-3">
										<div className="menu-content d-flex align-items-center px-3">
											<div className="d-flex flex-column">
												<div className="fw-bold d-flex align-items-center fs-5">{username}
											</div>
												<a href="#0" className="fw-semibold text-muted text-hover-primary fs-7">theatre@gmail.com</a>
											</div>
					
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="app-header-separator"></div>
				</div>
    )
}

export default TheatreNavbar;