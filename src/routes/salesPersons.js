import express from 'express';
import { getSalesPersons } from '../controllers/salesPersons.js';

const router = express.Router();

router.route('/').get(getSalesPersons);

export default router;
