import React, { useEffect } from "react";

function SeatLine(props){
    
    const handleSeatClick = (seatValue) => {
        if (!props.bookedSeat.includes(seatValue))
            props.setSelectSeatList(preVal => {
                const isSelected = preVal.includes(seatValue);
                if (isSelected) {
                    return preVal.filter(seat => seat !== seatValue);
                } else {
                    return [...preVal, seatValue];
                }
            });
      };
    useEffect(()=>{

    }, [])
    return (
        <li className="seat-line">
            <span>{props.line}</span>
            <ul className="seat--area">
                <li className="front-seat">
                    <ul>                
                        <li className="single-seat" onClick={()=>{handleSeatClick(`${props.line}01`)}}>
                            {props.bookedSeat.includes(`${props.line}01`) || props.selectSeatList.includes(`${props.line}01`)?
                                <img src="/assets/images/movie/booked-seat01.png" alt="seat"/>
                                :<img src="/assets/images/movie/seat01.png" alt="seat"/>}
                        </li>
                        <li className="single-seat" onClick={()=>{handleSeatClick(`${props.line}02`)}}>
                            {props.bookedSeat.includes(`${props.line}02`) || props.selectSeatList.includes(`${props.line}02`)?
                                <img src="/assets/images/movie/booked-seat01.png" alt="seat"/>
                                :<img src="/assets/images/movie/seat01.png" alt="seat"/>}
                        </li>
                        <li className="single-seat" onClick={()=>{handleSeatClick(`${props.line}03`)}}>
                            {props.bookedSeat.includes(`${props.line}03`) || props.selectSeatList.includes(`${props.line}03`)?
                                <img src="/assets/images/movie/booked-seat01.png" alt="seat"/>
                                :<img src="/assets/images/movie/seat01.png" alt="seat"/>}
                        </li>
                        <li className="single-seat" onClick={()=>{handleSeatClick(`${props.line}04`)}}>
                            {props.bookedSeat.includes(`${props.line}04`) || props.selectSeatList.includes(`${props.line}04`)?
                                <img src="/assets/images/movie/booked-seat01.png" alt="seat"/>
                                :<img src="/assets/images/movie/seat01.png" alt="seat"/>}
                        </li>
                    </ul>
                </li>
                <li className="front-seat">
                    <ul>
                        <li className="single-seat" onClick={()=>{handleSeatClick(`${props.line}05`)}}>
                            {props.bookedSeat.includes(`${props.line}05`) || props.selectSeatList.includes(`${props.line}05`)?
                                <img src="/assets/images/movie/booked-seat01.png" alt="seat"/>
                                :<img src="/assets/images/movie/seat01.png" alt="seat"/>}
                        </li>
                        <li className="single-seat" onClick={()=>{handleSeatClick(`${props.line}06`)}}>
                            {props.bookedSeat.includes(`${props.line}06`) || props.selectSeatList.includes(`${props.line}06`)?
                                <img src="/assets/images/movie/booked-seat01.png" alt="seat"/>
                                :<img src="/assets/images/movie/seat01.png" alt="seat"/>}
                        </li>
                        <li className="single-seat" onClick={()=>{handleSeatClick(`${props.line}07`)}}>
                            {props.bookedSeat.includes(`${props.line}07`) || props.selectSeatList.includes(`${props.line}07`)?
                                <img src="/assets/images/movie/booked-seat01.png" alt="seat"/>
                                :<img src="/assets/images/movie/seat01.png" alt="seat"/>}
                        </li>
                        <li className="single-seat" onClick={()=>{handleSeatClick(`${props.line}08`)}}>
                            {props.bookedSeat.includes(`${props.line}08`) || props.selectSeatList.includes(`${props.line}08`)?
                                <img src="/assets/images/movie/booked-seat01.png" alt="seat"/>
                                :<img src="/assets/images/movie/seat01.png" alt="seat"/>}
                        </li>
                        <li className="single-seat" onClick={()=>{handleSeatClick(`${props.line}09`)}}>
                            {props.bookedSeat.includes(`${props.line}09`) || props.selectSeatList.includes(`${props.line}09`)?
                                <img src="/assets/images/movie/booked-seat01.png" alt="seat"/>
                                :<img src="/assets/images/movie/seat01.png" alt="seat"/>}
                        </li>
                        <li className="single-seat" onClick={()=>{handleSeatClick(`${props.line}10`)}}>
                            {props.bookedSeat.includes(`${props.line}10`) || props.selectSeatList.includes(`${props.line}10`)?
                                <img src="/assets/images/movie/booked-seat01.png" alt="seat"/>
                                :<img src="/assets/images/movie/seat01.png" alt="seat"/>}
                        </li>
                    </ul>
                </li>
                <li className="front-seat">
                    <ul>
                        <li className="single-seat" onClick={()=>{handleSeatClick(`${props.line}11`)}}>
                            {props.bookedSeat.includes(`${props.line}11`) || props.selectSeatList.includes(`${props.line}11`)?
                                <img src="/assets/images/movie/booked-seat01.png" alt="seat"/>
                                :<img src="/assets/images/movie/seat01.png" alt="seat"/>}
                        </li>
                        <li className="single-seat" onClick={()=>{handleSeatClick(`${props.line}12`)}}>
                            {props.bookedSeat.includes(`${props.line}12`) || props.selectSeatList.includes(`${props.line}12`)?
                                <img src="/assets/images/movie/booked-seat01.png" alt="seat"/>
                                :<img src="/assets/images/movie/seat01.png" alt="seat"/>}
                        </li>
                        <li className="single-seat" onClick={()=>{handleSeatClick(`${props.line}13`)}}>
                            {props.bookedSeat.includes(`${props.line}13`) || props.selectSeatList.includes(`${props.line}13`)?
                                <img src="/assets/images/movie/booked-seat01.png" alt="seat"/>
                                :<img src="/assets/images/movie/seat01.png" alt="seat"/>}
                        </li>
                        <li className="single-seat" onClick={()=>{handleSeatClick(`${props.line}14`)}}>
                            {props.bookedSeat.includes(`${props.line}14`) || props.selectSeatList.includes(`${props.line}14`)?
                                <img src="/assets/images/movie/booked-seat01.png" alt="seat"/>
                                :<img src="/assets/images/movie/seat01.png" alt="seat"/>}
                        </li>
                    </ul>
                </li>
            </ul>
            <span>{props.line}</span>
        </li>
    )
}

export default SeatLine;