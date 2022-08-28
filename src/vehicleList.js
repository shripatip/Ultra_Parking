import { useEffect, useState } from 'react';
import { Typography } from '@mui/material';

import DetailCard from './DetailCard';
const VehicleList = (props) => {
    const [park, setPark] = useState(true);
    const cars = props.parking;
    const title = props.title;
    console.log(cars);
    const [count,setCount]=useState(0);
    useEffect(()=>{
    const ParkedCars = cars.filter((car) => (car.parked == true));
    console.log(ParkedCars.length);
    setCount(ParkedCars.length);
},[cars])

    const unpark = (car) => {
        car.parked = false;
        console.log("unparking")
    }
    return (
        <div className="car-list">
            <Typography sx={{
                fontSize: "40px", opacity: 0.9,
                fontWeight: "550", textAlign: "center", color: "white"
            }}
            >{title}</Typography>
            <Typography sx={{
                fontSize: "25px", opacity: 0.8,
                fontWeight: "550", textAlign: "center", color: "white"
            }}>
                Total number of vehicle parked: {count}</Typography>
            {cars.map((car) => (
                <DetailCard car={car} key={car.id} setPark={unpark} />
            )
            )}
        </div>
    );

}


export default VehicleList;