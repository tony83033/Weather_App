import React from 'react'
import { useContext } from 'react'
import weatherContext from '../context/WeatherContext'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Body = (props) => {


    const  context = useContext(weatherContext);
    const {data,mycity} = context;
    console.log(data);
    console.log( "this is test my city",mycity)

    if(data.error){
        toast.error(`Error ${data.error}`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
    }

    return (
        <>

            <div className='container mt-4'>
            <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
                <div className='container mb-3'>
                        <h2 className='text-center'>
                    Weather For {mycity.charAt(0).toUpperCase()+mycity.slice(1)}</h2>
                </div>
            <div className="card-deck mb-3 text-center">
  <div className="card mb-4 box-shadow">
    <div className="card-header">
      <h4 className="my-0 font-weight-normal">Temperature</h4>
    </div>
    <div className="card-body">
      <h1 className="card-title pricing-card-title">
        {data.temp} <small className="text-muted"><span>&#8451;</span></small>
      </h1>
      <ul className="list-unstyled mt-3 mb-4">
        <li>Min_temp  = {data.min_temp}</li>
        <li>Max_temp" = {data.max_temp}</li>
        <li>Cloud_pct = {data.cloud_pct}</li>
        
      </ul>
      <button
        type="button"
        className="btn btn-lg btn-block btn-outline-primary"
      >
       Temperature
      </button>
    </div>
  </div>
  <div className="card mb-4 box-shadow">
    <div className="card-header">
      <h4 className="my-0 font-weight-normal">Humidity</h4>
    </div>
    <div className="card-body">
      <h1 className="card-title pricing-card-title">
        {data.humidity}<small className="text-muted"></small>
      </h1>
      <ul className="list-unstyled mt-3 mb-4">
        <li>Sunset = {data.sunset}</li>
        <li>Sunrise = {data.sunrise}</li>
        <li>Priority email support</li>
      
      </ul>
      <button type="button" className="btn btn-lg btn-block btn-primary">
      Humidity
      </button>
    </div>
  </div>
  <div className="card mb-4 box-shadow">
    <div className="card-header">
      <h4 className="my-0 font-weight-normal">Wind</h4>
    </div>
    <div className="card-body">
      <h1 className="card-title pricing-card-title">
       {data.wind_speed}<small className="text-muted">/km</small>
      </h1>
      <ul className="list-unstyled mt-3 mb-4">
        <li>Wind_speed = {data.wind_speed}</li>
        <li>wind_degrees = {data.wind_degrees}</li>
        <li>Feels_like = {data.feels_like}</li>
        
      </ul>
      <button type="button" className="btn btn-lg btn-block btn-primary">
      Wind
      </button>
    </div>
  </div>
</div>

            </div>

        </>
    )
}

export default Body
