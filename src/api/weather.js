import axios from 'axios'

export const getCurrentWeatherByCity = async (city) => {
    try {
        const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fd585b9fb4ddac416ab31ae4e0e82edb`)
        if(response?.data) {
            return response.data
        } else {
            console.log('Error')
        }
    } catch(e) {
        console.log(e)
    }
}

export const getCurrentWeatherByCoordinates = async (lat, lon) => {
    try {
        const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=fd585b9fb4ddac416ab31ae4e0e82edb`)
        return response
    } catch(e) {
        console.log(e)
    }
}