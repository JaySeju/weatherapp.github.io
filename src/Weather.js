import React, { useState } from 'react'
import axios from 'axios'

export default function Weather() {

    const [weather, setweather] = useState(null);
    const [City, setCity] = useState("");

    const HandleCityChange = (event) => {
        setCity(event.target.value)
    }

    const Feathweather = async () => {
        try {
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=9326c9c71e3153019af7e12c291963a8&units=metric`
              );
           
            setweather(response.data);
        } catch (error) {
            console.log("Error fetching Weather Data", error);
        }
    }

    return (
        <div className="weather-bg">
            <div className="weather-card">
                <h2 className="app-title">🌤 Weather App</h2>
    
                <div className="search-section">
                    <input
                        type="text"
                        placeholder="Enter city name..."
                        value={City}
                        onChange={HandleCityChange}
                    />
                    <button onClick={Feathweather}>Search</button>
                </div>
    
                {weather && (
                    <div className="weather-info">
                        <h3>{weather.name}</h3>
                        <div className="temperature">
                            {weather.main.temp}°C
                        </div>
                        <p className="description">
                            {weather.weather[0].description}
                        </p>
    
                        <div className="extra-info">
                            <div>
                                <span>Humidity</span>
                                <p>{weather.main.humidity}%</p>
                            </div>
                            <div>
                                <span>Wind</span>
                                <p>{weather.wind.speed} km/h</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
    
}