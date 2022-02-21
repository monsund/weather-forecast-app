import express from 'express';

import { getWeatherDetails } from '../controllers/weatherController.js';

const router = express.Router();

router.get('/', getWeatherDetails)

export default router;