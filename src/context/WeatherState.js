import React, { useState } from 'react'
import weatherContext from './WeatherContext';
const WeatherState = (props) => {

    const host ="https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=";

    const [data,setdata] = useState({data:"demodata"});
    
    const getdata = async (city) =>{
        console.log("This is host",host)
        const responce = await fetch(`${host}${city}`, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'df4a3292admsh5bcdf3a8c1f4ae1p178a58jsnc8d0a19c4f10',
                'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
              } 
          });

          const json = await responce.json()
          setdata(json)
    }

  return (
    <weatherContext.Provider value={{data,getdata}}>

{props.children}
    </weatherContext.Provider>
  )
}

export default WeatherState
