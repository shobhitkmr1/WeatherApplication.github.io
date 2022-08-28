import React, { useState } from 'react';
import axios from 'axios';
function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')
  const url = 'https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=10c89c3d24e2457214d3976130f3fd8d';
  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
    }
  }



  return (
    <div className='app'>
      <div className='search'>
        <input value={location}
          onChange={event =>
            setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Enter Location'
          type="text" />
      </div>
      <div className='container'>
        <div className='top'>
          <div className='location'>
            delhi
          </div>
          <div className='temp'>
            <h1>40c</h1>
          </div>
          <div className='description'>
            Clouds
          </div>
        </div>
        <div className='bottom'>
          <div className='feels'>
            <p className='bold'>42c</p>
            <p>Feels</p>
          </div>
          <div className='humidity'>
            <p className='bold'>20%</p>
            <p>Humidity</p>
          </div>
          <div className='wind'>
            <p className='bold'>12MPH</p>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
