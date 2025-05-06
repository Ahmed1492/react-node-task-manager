import mongoose, { Types } from "mongoose";

const taskSchema = new mongoose.Schema({ 
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  isCompleted: {
    type: Boolean,
    required: true,
    default: false, // Optionally set a default value to false
  },
  dueDate: {
    type: Date, // Make sure the dueDate is a valid Date object
    required: false, // This can be optional depending on your app's needs
  },

  userId: {
    type: Types.ObjectId,
    ref: 'User'
  }

}, {
  timestamps: true, // Optionally add createdAt and updatedAt fields automatically

});

const Task = mongoose.model('Task', taskSchema);

export default Task;
