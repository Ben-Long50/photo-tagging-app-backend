import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
});

export default mongoose.model('User', UserSchema);
