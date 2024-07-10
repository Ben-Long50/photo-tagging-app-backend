import express from 'express';
import cors from 'cors';
import levelController from '../controllers/levelController.js';

const router = express.Router();

router.get('/levels', cors(), levelController.getLevels);

router.get('/levels/:levelId/targets', cors(), levelController.getTargets);

router.post('/levels/:levelId/targets', cors(), levelController.postTarget);

export default router;
