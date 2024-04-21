import cityCollection from "../models/cityModel.js";

export const getAllCities = async (req, res) => {
    try{
        const cities = await cityCollection.find();
        res.status(200).json({data: cities});
    } catch(err) {
        res.status(404).json({ message: err });
    }
}

export const getCitiesBySearch = async(req, res ) => {
    const {searchedCity} = req.query;
    try {
        const matchedCities = await cityCollection.aggregate([{
            $match:{
                cityName: {
                    $regex: new RegExp(searchedCity.toLowerCase(), "i"),
                },
            },            
        }, 
        {
            $limit: 10,
        }
        ]);
        // return top 10 cities----
        res.status(200).json({data: matchedCities});
    } catch (error) {
        console.log('error getting cities', error.message)
        res.status(404).json({message: error});
    }   
}

