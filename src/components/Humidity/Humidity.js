import React from 'react'
import humidity_icon from "../assets/humidity.png"
import "./Humidity.css"

export const Humidity = (props) => {

    const { icon = humidity_icon } = props
  return (
    <div className = "element">
                <img src = {icon} alt = "" className = "icon"/>
                <div className = "data">
                    <div className = "humidity-percent">64%</div>
                    <div className = "text">Humidity</div>
                </div>
    </div>
  )
}
