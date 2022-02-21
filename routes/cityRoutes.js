import express from 'express';

import { getAllCities, getCitiesBySearch } from '../controllers/cityController.js';

const router = express.Router();

router.get('/', getAllCities);
router.get('/search', getCitiesBySearch);

export default router;