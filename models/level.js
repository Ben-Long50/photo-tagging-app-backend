import mongoose, { Schema } from 'mongoose';

const LevelSchema = new Schema({
  name: { type: String, required: true },
  image: { type: String },
  targets: [{ type: Schema.Types.ObjectId, ref: 'Target' }],
  scores: [{ type: Schema.Types.ObjectId, ref: 'Score' }],
});

export default mongoose.model('Level', LevelSchema);
