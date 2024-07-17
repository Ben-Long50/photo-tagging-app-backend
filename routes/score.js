import express from 'express';
import cors from 'cors';
import scoreController from '../controllers/scoreController.js';
import authController from '../controllers/authController.js';

const router = express.Router();

router.get('/levels/scores', cors(), scoreController.getAllScores);

router.get('/levels/:levelId/scores', cors(), scoreController.getLevelScores);

router.post(
  '/levels/:levelId/scores',
  cors(),
  authController.verifyToken,
  scoreController.createScore,
);

export default router;
