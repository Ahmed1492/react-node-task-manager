import mongoose, { Types } from "mongoose";

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: false,
    default: Date.now, // Optionally set a default value to false
  },
  endDate: {
    type: Date, // Make sure the dueDate is a valid Date object
    required: false, // This can be optional depending on your app's needs
  },

  userId: {
    type: Types.ObjectId,
    ref: 'User'
  },
  type: {
    type: String
  }

}, {
  timestamps: true, // Optionally add createdAt and updatedAt fields automatically

});

const Task = mongoose.model('Task', taskSchema);

export default Task;

