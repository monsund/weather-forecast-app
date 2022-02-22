# weather-forecast-app
- Backend code deployed at heroku ***server*** 
<br>
baseUrl: https://world-city-weather-forecast.herokuapp.com/ <br>
getAllCities API: https://world-city-weather-forecast.herokuapp.com/cities <br>
getCitiesBySearch API: https://world-city-weather-forecast.herokuapp.com/cities/search?searchedCity=${searchQuery} <br>
getWeatherForecast API: https://world-city-weather-forecast.herokuapp.com/cities/search?date=${TimeStamp}&cityKey=${cityKey}
<br>
<br>
-Frontend code deployed at ***netlify*** <br><br>
***For application preview go to this link-*** https://cities-weather-forecast.netlify.app/

This is the backend repository of the Weather-Forecast-App. This application helps in forecasting weather of the cities around the world. <br>
All the data are fetched from "Accu Weather APIs". <br>
<br>
Limitation:<br>
There are limitations in accessing Accu weather APIs with the free account. Following are mentioned below <br>
i. You can only make 50 times of API request in a day. <br>
ii. Limited to certain number of cities. <br>
iii. Can access daily forecast data of maximum 5 days only. <br>

Steps: <br>
1. First, I have created a city details dump into my MongoDB database by accessing ACCU Weather Location API<br>
To do so run command -  **npm run dbDump**<br>
2. Created API to return cities with respect to city search on frontend.<br>
3. Created API to return weather forecast details based on city.<br>
5. Accu weather API is hit only if data does not exist in Database **OR** the data last updated in the DB is before 4 hrs.<br>
6. Otherwise the API gets data from Database
<br>
<br>
To run the application<br>
run command - **npm start**
