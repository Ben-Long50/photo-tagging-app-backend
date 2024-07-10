import asyncHandler from 'express-async-handler';
import Level from '../models/level.js';
import Target from '../models/target.js';

const levelController = {
  getLevels: asyncHandler(async (req, res) => {
    try {
      const levels = await Level.find();
      res.status(200).json(levels);
    } catch (error) {
      res.status(404).json(error);
    }
  }),

  getTargets: asyncHandler(async (req, res) => {
    try {
      const targets = await Target.find({ level: req.params.levelId });
      res.status(200).json(targets);
    } catch (error) {
      res.status(404).json(error);
    }
  }),

  postTarget: asyncHandler(async (req, res) => {
    try {
      const target = await Target.findOne({ name: req.body.name });
      if (
        req.body.x > parseFloat(target.xCoord) - 0.01 &&
        req.body.x < parseFloat(target.xCoord) + 0.01 &&
        req.body.y > parseFloat(target.yCoord) - 0.01 &&
        req.body.y < parseFloat(target.yCoord) + 0.01
      ) {
        res.status(200).json({ message: 'success' });
      }
      res.status(500).json({ message: 'failure' });
    } catch (error) {
      res.status(404).json(error);
    }
  }),
};

export default levelController;
