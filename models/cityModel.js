import mongoose from "mongoose";

const citySchema = mongoose.Schema({
    cityKey: {
        type: String,
        required: true
    },
    cityName: {
        type: String,
        required: true
    },
})

const cityCollection = mongoose.model('cityDetails', citySchema);

export default cityCollection;