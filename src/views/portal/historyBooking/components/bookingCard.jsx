function BookingCard(props){
    return (
        <div className="col-lg-4">
            <div className="booking-summery bg-one">
                <h4 className="title">booking summery</h4>
                <ul>
                    <li>
                        <h6 className="subtitle">{props.booking.movieName}</h6>
                        <span className="info">{props.booking.genre}</span>
                    </li>
                    <li>
                        <h6 className="subtitle"><span>{props.booking.theaterName}</span></h6>
                        <div className="info"><span>{props.booking.screenName}</span><span>{props.booking.showDate}, {props.booking.showTime === 1 ? '8h' : (props.booking.showTime === 2 ? '12h' : (props.booking.showTime === 3 ? '16h' : (props.booking.showTime === 4 && '20h'))) }</span></div>
                    </li>
                    <li>
                        <h6 className="subtitle mb-0"><span>Seats</span><span>{props.booking.seats}</span></h6>
                    </li>
                    <li>
                        <h6 className="subtitle mb-0"><span>Tickets  Price</span><span>{props.booking.charge}vnd</span></h6>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default BookingCard;