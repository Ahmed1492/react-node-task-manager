import { response } from "express";
import Task from "../../db/models/task.model.js";
import User from "../../db/models/user.model.js";



export const createTask = async (req, res, next) => {
  try {
    const { title, content, type, userId, startDate, endDate } = req.body;

    // Validate input
    if (!title || !content || !userId) {
      return res.status(400).json({ message: 'All fields are required!' });
    }

    // Check if user exists
    let user = await User.findById(userId);
    if (!user) {
      return res.status(400).json({ message: 'User not found!' });
    }

    // Create task with all provided fields
    let task = await Task.create({ title, content, type, userId, startDate, endDate });

    // Respond with success message and task data
    return res.status(201).json({ message: 'Task created successfully', result: task });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Something went wrong', err: error.message });
  }
};

export const getAllTasks = async (req, res, next) => {
  try {
    let tasks = await Task.find();
    return res.status(200).json({ tasks });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Something went wrong', err: error.message });
  }
};

export const getUserTasks = async (req, res, next) => {
  try {
    let { userId } = req.params;



    // Check if user exists
    const checkUser = await User.findById(userId);
    if (!checkUser) {
      return res.json({ message: 'User not found!' });
    }

    // Find tasks by userId
    let tasks = await Task.find({ userId });

    // If no tasks found, return an empty array with a message
    if (tasks.length === 0) {
      return res.json({ message: 'No tasks found for this user' });
    }

    return res.status(200).json({ result: tasks });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Something went wrong', err: error.message });
  }
};

export const getComUserTasks = async (req, res, next) => {
  try {
    let { userId } = req.params;



    // Check if user exists
    const checkUser = await User.findById(userId);
    if (!checkUser) {
      return res.json({ message: 'User not found!' });
    }

    // Find tasks by userId
    let tasks = await Task.find({ userId, type: 'completed' });

    // If no tasks found, return an empty array with a message
    if (tasks.length === 0) {
      return res.json({ message: 'No tasks found for this user' });
    }

    return res.status(200).json({ result: tasks });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Something went wrong', err: error.message });
  }
};
export const getPendUserTasks = async (req, res, next) => {
  try {
    let { userId } = req.params;



    // Check if user exists
    const checkUser = await User.findById(userId);
    if (!checkUser) {
      return res.json({ message: 'User not found!' });
    }

    // Find tasks by userId
    let tasks = await Task.find({ userId, type: 'pending' });

    // If no tasks found, return an empty array with a message
    if (tasks.length === 0) {
      return res.json({ message: 'No tasks found for this user' });
    }

    return res.status(200).json({ result: tasks });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Something went wrong', err: error.message });
  }
};
export const getInProgUserTasks = async (req, res, next) => {
  try {
    let { userId } = req.params;



    // Check if user exists
    const checkUser = await User.findById(userId);
    if (!checkUser) {
      return res.json({ message: 'User not found!' });
    }

    // Find tasks by userId
    let tasks = await Task.find({ userId, type: 'inprogress' });

    // If no tasks found, return an empty array with a message
    if (tasks.length === 0) {
      return res.json({ message: 'No tasks found for this user' });
    }

    return res.status(200).json({ result: tasks });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Something went wrong', err: error.message });
  }
};
export const getDeployedTasks = async (req, res, next) => {
  try {
    let { userId } = req.params;



    // Check if user exists
    const checkUser = await User.findById(userId);
    if (!checkUser) {
      return res.json({ message: 'User not found!' });
    }

    // Find tasks by userId
    let tasks = await Task.find({ userId, type: 'deployed' });

    // If no tasks found, return an empty array with a message
    if (tasks.length === 0) {
      return res.json({ message: 'No tasks found for this user' });
    }

    return res.status(200).json({ result: tasks });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Something went wrong', err: error.message });
  }
};
export const getDefeUserTasks = async (req, res, next) => {
  try {
    let { userId } = req.params;



    // Check if user exists
    const checkUser = await User.findById(userId);
    if (!checkUser) {
      return res.json({ message: 'User not found!' });
    }

    // Find tasks by userId
    let tasks = await Task.find({ userId, type: 'deferred' });

    // If no tasks found, return an empty array with a message
    if (tasks.length === 0) {
      return res.json({ message: 'No tasks found for this user' });
    }

    return res.status(200).json({ result: tasks });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Something went wrong', err: error.message });
  }
};





export const updateTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, content, type, startDate, endDate } = req.body;

    // Find and update the task
    const updatedTask = await Task.findByIdAndUpdate(
      id,
      { title, content, type, startDate, endDate },
      { new: true } // return the updated document
    );

    if (!updatedTask) {
      return res.json({ message: 'Task not found!' });
    }

    return res.status(200).json({ message: 'Task updated successfully', result: updatedTask });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Something went wrong', err: error.message });
  }
};

export const deleteTask = async (req, res, next) => {
  try {
    const { id } = req.params;

    const task = await Task.findByIdAndDelete(id);

    if (!task) {
      return res.json({ message: 'Task not found!' });
    }

    return res.status(200).json({ message: 'Task deleted successfully', result: task });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Something went wrong', err: error.message });
  }
};
