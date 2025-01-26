import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
export default function WeatherApp(){
    let[weatherInfo,setweatherInfo]=useState({
        city: "Mysore",
        temp: 19.19,
        humidity: 79,
        temp_max: 19.59,
        temp_min: 19.59,
        weather: "scattered clouds",
        feels_like: 19.67,
    });
    let updateInfo=(newinfo)=>{
        setweatherInfo(newinfo);
    }
    return(
        <div style={{textAlign:"center"}}>
            <h1>Weather App By Sanjay</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
}
