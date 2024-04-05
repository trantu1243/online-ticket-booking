import React from "react";
import ScheduleRow from "./scheduleRow";

function TicketPlanContainer(props){
    return (
        <div class="ticket-plan-section padding-bottom padding-top">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-9 mb-5 mb-lg-0">
                    <ul class="seat-plan-wrapper bg-five">
                        {props.plan.cinemaList.map((item)=>{
                            return <ScheduleRow schedule={item} />
                        })}
                    </ul>
                </div>
               
            </div>
        </div>
    </div>
    )
}

export default TicketPlanContainer