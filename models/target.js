import mongoose, { Schema } from 'mongoose';

const TargetSchema = new Schema({
  name: { type: String, required: true },
  image: { type: String },
  level: { type: Schema.Types.ObjectId, ref: 'Level', required: true },
  xCoord: { type: String, required: true },
  yCoord: { type: String, required: true },
});

export default mongoose.model('Target', TargetSchema);
