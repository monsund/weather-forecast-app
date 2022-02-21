import mongoose from "mongoose";

const weatherSchema = mongoose.Schema({
    date: String,
    cityKey: Number,
    updatedAt: String,
    dayData: mongoose.Schema({
        Icon: Number,
        IconPhrase: String,
        HasPrecipitation: Boolean,
        PrecipitationType: String,
        PrecipitationIntensity: String,
        _id: false,
    }),

    nightData: mongoose.Schema({
        Icon: Number,
        IconPhrase: String,
        HasPrecipitation: Boolean,
        PrecipitationType: String,
        PrecipitationIntensity: String,
        _id: false
    }),
})

const weatherCollection = mongoose.model('weatherDetails', weatherSchema);

export default weatherCollection;

const mongoDbUrl = 'mongodb+srv://monsoon:Monsoon123@cluster0.fwzsv.mongodb.net/weatherForecast?retryWrites=true&w=majority';

// mongoose.connect(mongoDbUrl, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });

// const temp = [{day: {weather:{IconPhrase:'IconPhrase', HasPrecipitation:true, PrecipitationType:'PrecipitationType'}}, 
//                night: {weather:{IconPhrase:'IconPhrase', HasPrecipitation:false, PrecipitationType:'PrecipitationType'}}, 
//                cityName:'city', 
//                hasUpdatedOn: Date.now()
//             }]
// weatherCollection.insertMany(temp);