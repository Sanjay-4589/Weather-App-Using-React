import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css'
import { useState } from 'react';
export default function SearchBox({updateInfo}){
    let [city,setcity]=useState("");
    let [error,setError]=useState(false);
    let API_URL="https://api.openweathermap.org/data/2.5/weather"
    let API_KEY="324be54ec3812d9c9c1417f6f41fd516"
    let getInfo= async ()=>{
        try{
            let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let JsonResponse=await response.json();
            console.log(JsonResponse)
            let result={
                city:city,
                temp:JsonResponse.main.temp,
                temp_max:JsonResponse.main.temp_max,
                temp_min:JsonResponse.main.temp_min,
                humidity:JsonResponse.main.humidity,
                feels_like:JsonResponse.main.feels_like,
                weather:JsonResponse.weather[0].description,
            };
            console.log(result);
            return result;
        }catch(err){
            throw err;
        }
    }
    let hadleInput=(evt)=>{
        setcity(evt.target.value);
    }
    let handleSubmit=async (evt)=>{
        try{
            evt.preventDefault();
            setcity("");
            let newinfo=await getInfo();
            updateInfo(newinfo);
        }
       catch(err){
            setError(true);
       }
    }
    return(
        <div className="searchBox">
            <form onSubmit={handleSubmit}>
            <TextField id="city" label="city Name" variant="outlined" value={city} onChange={hadleInput}/>
            <br /><br />
            <Button variant="contained" type="submit">Search</Button>
            {error && <p style={{color:"red"}}>No such place exists!</p>}
            </form>
        </div>
    );
}
