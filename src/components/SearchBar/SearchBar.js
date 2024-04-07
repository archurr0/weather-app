import React, { useState } from 'react'
import search_icon from "../assets/search.png"
import clear_icon from '../assets/clear.png'
import drizzle_icon from '../assets/drizzle.png'
import rain_icon from '../assets/rain.png'
import snow_icon from '../assets/snow.png'
import cloud_icon from '../assets/cloud.png'
import nightclear_icon from '../assets/nightclear.png'
import nightcloud_icon from '../assets/nightclouds.png'
import nightrain_icon from '../assets/nightrain.png'
import nightdrizzle_icon from '../assets/nightdrizzle.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./SearchBar.css"

export const SearchBar = (props) => {
    const { icon = search_icon } = props
    let api_key = "62f6d45578428c73149b4ca2cacbbbe0"
    const [wicon, setWicon] = useState(cloud_icon);
    const search = async () => {
        const element = document.getElementsByClassName("cityInput")
        const imperialUnit = document.getElementById("imperial")
        var unit
        if (imperialUnit.checked === true){
            unit = "Imperial"
        } else {
            unit = "Metric"
        }
        if (element[0].value===""){
            return 0;
        }
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=${unit}&appid=${api_key}`
        let response = await fetch(url);
        let data = await response.json();
        const humidity = document.getElementsByClassName("humidity-percent")
        const wind = document.getElementsByClassName("wind-rate")
        const temperature = document.getElementsByClassName("weather-temp")
        const location = document.getElementsByClassName("weather-location")
        humidity[0].innerHTML = data.main.humidity + "%"
        if (imperialUnit.checked === true){
            wind[0].innerHTML = Math.floor(data.wind.speed) + " mph"
            temperature[0].innerHTML = Math.floor(data.main.temp) + " °F"
        } else {
            wind[0].innerHTML = Math.floor(data.wind.speed) + " km/h"
            temperature[0].innerHTML = Math.floor(data.main.temp) + " °C"
        }
        location[0].innerHTML = data.name
        
        if (data.weather[0].icon==="01d"){
            setWicon(clear_icon)
        } else if (data.weather[0].icon==="01n"){
            setWicon(nightclear_icon)
        } else if (data.weather[0].icon==="02d"){
            setWicon(cloud_icon)
        } else if (data.weather[0].icon==="02n"){
            setWicon(nightcloud_icon)
        } else if (data.weather[0].icon==="03d"){
            setWicon(drizzle_icon)
        } else if (data.weather[0].icon==="03n"){
            setWicon(nightdrizzle_icon)
        } else if (data.weather[0].icon==="04d"){
            setWicon(drizzle_icon)
        } else if (data.weather[0].icon==="04n"){
            setWicon(nightdrizzle_icon)
        } else if (data.weather[0].icon==="09d"){
            setWicon(rain_icon)
        } else if (data.weather[0].icon==="09n"){
            setWicon(nightrain_icon)
        } else if (data.weather[0].icon==="10d"){
            setWicon(rain_icon)
        } else if (data.weather[0].icon==="10n"){
            setWicon(nightrain_icon)
        } else if (data.weather[0].icon==="13d" || data.weather[0].icon==="13n"){
            setWicon(snow_icon)
        } else {
            setWicon(clear_icon)
        }
    }
  return (
    <div>
        <div className = 'top-bar'>
            <input type = "text" className = "cityInput" placeholder = "Search"/>
            <div className = "search-icon" onClick={()=>{search()}}>
                <img src = {icon} alt = ""/>
            </div>
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
            Settings
            </button>

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Title in modal-header</h5>
                            <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            Change your units of measurement.
                        </div>
                        <input type="radio" id="metric" name = "units" value="metric" checked/>
                        <label for="metric">Metric System (C, km/h)</label>
                        <input type="radio" id="imperial" name = "units" value="imperial"/>
                        <label for="imperial">Imperial System (F, mph)</label>
                    </div>
                </div>
            </div>
        </div>
        <div className = 'weather-image'>
            <img src = {wicon} alt = ""/>
        </div>
        <div className = 'weather-temp'>24°C</div>
        <div className = 'weather-location'>London</div>
    </div>
  )
}
