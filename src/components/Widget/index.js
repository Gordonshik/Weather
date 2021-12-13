import './style.css'
import {getCurrentWeatherByCity, getCurrentWeatherByCoordinates} from '../../api/weather'
import {useEffect, useState} from "react"
import { CloudOutlined } from '@ant-design/icons'

const Widget = () => {
    const [currentCity, setCurrentCity] = useState('Moscow')
    const [currentWeather, setCurrentWeather] = useState()

    const addNewCity = async (city) => {
        setCurrentCity(city)
    }

    const getInfo = async () => {
        const weather = await getCurrentWeatherByCity('Moscow').then(result => {
            console.log(result)
            return result
        })
        setCurrentWeather(weather)
    }

    useEffect(() => {
        getInfo()
    }, [])

    return <div className='widget-body'>
        <p>{currentWeather?.name}, {currentWeather?.sys?.country} <span></span></p>
        <div className='temperature-box'>
            <span className='temperature-box'>
                <CloudOutlined
                    className='cloud-icon'/>
                <span>7&deg;C</span>
            </span>
            <p>
                Feels like {currentWeather?.main?.feels_like}&deg;C.
            </p>
        </div>
        
    </div>
}

export default Widget