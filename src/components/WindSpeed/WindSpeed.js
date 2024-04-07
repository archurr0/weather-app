import React from 'react'
import wind_icon from "../assets/wind.png"
import "./WindSpeed.css"
export const WindSpeed = (props) => {
    const { icon = wind_icon } = props
  return (
    <div className = "element">
                <img src = {icon} alt = "" className = "icon"/>
                <div className = "data">
                    <div className = "wind-rate">18 km/h</div>
                    <div className = "text">Wind Speed</div>
                </div>
    </div>
  )
}
