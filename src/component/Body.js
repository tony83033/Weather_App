import React from 'react'
import { useContext } from 'react'
import weatherContext from '../context/WeatherContext'
const Body = () => {


    const  context = useContext(weatherContext);
    const {data} = context;
    console.log(data);

    return (
        <>
            <div className='container mt-4'>
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
        <li>10 users included</li>
        <li>2 GB of storage</li>
        <li>Email support</li>
        <li>Help center access</li>
      </ul>
      <button
        type="button"
        className="btn btn-lg btn-block btn-outline-primary"
      >
        Sign up for free
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
        <li>20 users included</li>
        <li>10 GB of storage</li>
        <li>Priority email support</li>
        <li>Help center access</li>
      </ul>
      <button type="button" className="btn btn-lg btn-block btn-primary">
        Get started
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
        <li>30 users included</li>
        <li>15 GB of storage</li>
        <li>Phone and email support</li>
        <li>Help center access</li>
      </ul>
      <button type="button" className="btn btn-lg btn-block btn-primary">
        Contact us
      </button>
    </div>
  </div>
</div>

            </div>

        </>
    )
}

export default Body
