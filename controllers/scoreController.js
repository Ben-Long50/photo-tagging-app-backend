import asyncHandler from 'express-async-handler';
import Score from '../models/score.js';
import Level from '../models/level.js';
import User from '../models/user.js';

const scoreController = {
  getAllScores: asyncHandler(async (req, res) => {
    try {
      const scores = await Score.find({})
        .sort({
          time: 1,
        })
        .populate('level')
        .populate('user')
        .exec();
      res.status(200).json(scores);
    } catch (error) {
      res.status(400).json(error);
    }
  }),
  getLevelScores: asyncHandler(async (req, res) => {
    try {
      const scores = await Score.find({ level: req.params.levelId })
        .sort({
          time: 1,
        })
        .populate('user')
        .limit(10)
        .exec();
      res.status(200).json(scores);
    } catch (error) {
      res.status(400).json(error);
    }
  }),
  createScore: asyncHandler(async (req, res) => {
    try {
      const user = await User.findById(req.body.userId);
      const level = await Level.findById(req.body.levelId);
      const score = new Score({
        user,
        level,
        time: req.body.time,
        date: req.body.date,
      });
      await score.save();
      res.status(200).json(score);
    } catch (error) {
      res.status(400).json(error);
    }
  }),
};

export default scoreController;
