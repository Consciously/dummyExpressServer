import express from 'express';
import { getSingleTopSalesPerson } from '../controllers/topSalesPerson.js';

const router = express.Router();

router.route('/').get(getSingleTopSalesPerson);

export default router;
