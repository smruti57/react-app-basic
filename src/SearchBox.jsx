import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';
import { use } from 'react';
import {useState} from 'react';
export default function SearchBox({updateInfo}) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    const API_URI="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="3dcd05367fe9c0e15a97fddf3de7d957";

    let getwWeatherInfo = async () =>{
      try{
          let response = await fetch(`${API_URI}?q=${city}&appid=${API_KEY}&units=imperial`);
      let jsonResponse = await response.json();
      let result ={
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelslike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      };
      console.log(result);
      return result;
      } catch(err){
        throw err;
      }
    };

  
    let handleChange=(event)=>{
        setCity(event.target.value);
    };
    let handleSubmit= async (event)=>{
      try{
         event.preventDefault();
        console.log(city);
        setCity("");
        let newInfo = await getwWeatherInfo();
        updateInfo(newInfo);
      } catch(err){
          setError("No such place in our API");
      }
       
    };
  return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit}>
          <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
          <br></br>
          <br></br>
          <Button variant="contained" type="submit">Search</Button>
          {error && <p style={{color: "red"}}>No such place exist</p>}
      </form>
    </div>
  )
}

