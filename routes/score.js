import express from 'express';
import scoreController from '../controllers/scoreController.js';

const router = express.Router();

router.get('/levels/scores', scoreController.getAllScores);

router.get('/levels/:levelId/scores', scoreController.getLevelScores);

router.post('/levels/:levelId/scores', scoreController.createScore);

export default router;
