import './WeatherApp.css'
import {Humidity} from "../Humidity/Humidity"
import {WindSpeed} from "../WindSpeed/WindSpeed"
import {SearchBar} from "../SearchBar/SearchBar"

export const WeatherApp = () => {
  return (
    <div className = 'container'>
        <SearchBar/>
        <div className = 'data-container'>
            <Humidity/>
            <WindSpeed/>
        </div>
    </div>
  )
}
