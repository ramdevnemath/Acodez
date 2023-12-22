import express from 'express';
import stockController from '../controllers/stockControllers.js'

const router = express.Router();

router.post('/add-stock', stockController.createStock);

export default router;