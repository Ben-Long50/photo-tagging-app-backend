import mongoose, { Schema } from 'mongoose';

const ScoreSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  level: { type: Schema.Types.ObjectId, ref: 'Level', required: true },
  time: { type: Number, required: true },
  date: { type: Date, required: true },
});

export default mongoose.model('Score', ScoreSchema);
