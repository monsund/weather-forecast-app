import mongoose from 'mongoose';
import fetch from 'node-fetch';
import dotenv from 'dotenv';

import cityCollection from '../models/cityModel.js';

dotenv.config();

// Accu weather api for City list--
const accuWeatherCityApiUrl = 'http://dataservice.accuweather.com/locations/v1/topcities/100?apikey=8WitGYa9xApS31dQ2qRdBXdX2ARSPmDp&language=en-us&details=false';

const mongoDbUrl = process.env.MONGODB_URL
mongoose.connect(mongoDbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


// fetching accuWeather API for city data---
const getCity = async () => {
    const response = await fetch(accuWeatherCityApiUrl)
    return response.json()
}   

// storing city data in database--
const dumpCity = async  () => { 
    const cities = [];
    const city = await getCity();
    city.map(element => {
        const data ={
            cityKey: Number(element.Key),
            cityName: element.EnglishName.toLowerCase(),
        } 
        cities.push(data);
    })

    await cityCollection.insertMany(cities);
    console.log(cities);

    return cities;
}
// uncomment this line after all the city data is stored in DB
// dumpCity();

