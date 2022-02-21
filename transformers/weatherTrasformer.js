import moment from 'moment';
export const weatherTransform = (cityKey,weatherForecastData) => {
    return weatherForecastData.DailyForecasts.map(dailyForecast => ({
        date: dailyForecast.Date.split('T')[0],
        cityKey,
        dayData: dailyForecast.Day,
        nightData: dailyForecast.Night,
        updatedAt: Date.now()
    })
    )
} 