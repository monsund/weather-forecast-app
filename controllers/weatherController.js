import fetch from 'node-fetch';
import moment from 'moment';
import dotenv from 'dotenv';

dotenv.config();
import weatherCollection from "../models/weatherModel.js";
import { weatherTransform } from '../transformers/weatherTrasformer.js';

const ACCU_WEATHER_API_BASE_URL = "http://dataservice.accuweather.com/forecasts/v1/daily/5day"

const ACCU_WEATHER_API_KEY = process.env.ACCU_WEATHER_API_KEY  

const getWeatherData = async (cityKey) => {
    const { language, details, metric } = { language: 'en-us', details: false, metric: false }

    const url = ACCU_WEATHER_API_BASE_URL + `/${cityKey}?apikey=${ACCU_WEATHER_API_KEY}&language=${language}&details=${details}&metric=${metric}`
    const response = await fetch(url);

    return response.json();
}
export const getWeatherDetails = async (req, res) => {
    const { date, cityKey } = req.query;

    // find existing data in DB
    const weatherForecastData = await weatherCollection.findOne({ cityKey: cityKey, date: moment(Number(date)).format('YYYY-MM-DD') });

    // if data exists and data was updated within last 4 hours then return data
    if (weatherForecastData && (Date.now() - Number(weatherForecastData.updatedAt)) <= 4 * 60 * 60 * 1000) {
        return res.status(200).json({ data: weatherForecastData })
    } else {
        // otherwise-----
        try {
            const weatherData = await getWeatherData(cityKey) // cityKey
            await weatherCollection.deleteMany({ cityKey: cityKey })
            const transformedWeather = weatherTransform(cityKey, weatherData)
            await weatherCollection.insertMany(transformedWeather)
    
    
            const refreshedData = await weatherCollection.findOne({ cityKey: cityKey, date: moment(Number(date)).format('YYYY-MM-DD') });
    
            return res.status(200).json({data: refreshedData});
    
        } catch (error) {
            console.log('Weather API error:', error.message)
            return res.status(418).json({message: 'Accu weather API request limit reached'});            
        }
        


    }

}
