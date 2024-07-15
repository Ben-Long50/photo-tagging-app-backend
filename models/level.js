import mongoose, { Schema } from 'mongoose';

const LevelSchema = new Schema({
  name: { type: String, required: true },
  image: { type: String },
  targets: [{ type: Schema.Types.ObjectId, ref: 'Target' }],
});

export default mongoose.model('Level', LevelSchema);
