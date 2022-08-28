


import { useState, useEffect } from "react";
import VehicleList from "./vehicleList";
import data from './data/data.json'



const Home = () => {



    const Parking = data.Parking;
    const [isPending, setisPending] = useState(true)
    const [parking, setParking] = useState(false);
    useEffect(() => {

        setTimeout(() => {
            setisPending(false)
            setParking(true);
        }, 1000)

    }, [])
    return (


        <div className="home">
            {isPending && <div> loading....</div>}
            {parking && <VehicleList parking={Parking} title="All Vehicles!"></VehicleList>}
        </div>
    );
}

export default Home;