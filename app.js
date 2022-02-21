import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

import cityRoutes from './routes/cityRoutes.js';
import weatherRoutes from './routes/weatherRoutes.js'
import moment from 'moment';
import dotenv from 'dotenv';

function createServer(){
    const app = express();
    dotenv.config();

    app.use(bodyParser.json({limit: "30mb", extended: true}));
    app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
    app.use(cors());

    app.use('/cities', cityRoutes);
    app.use('/weather', weatherRoutes);

    app.get('/', (req, res) => {
        res.send('Hello to Travel Memories API');
    });
    
    // connect to MongoDB---
    console.log("MONGODB_URL", process.env.MONGODB_URL);
    mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    return app;

}

export default createServer;