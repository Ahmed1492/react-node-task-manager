import { Router } from "express";
import { createTask, deleteTask, getAllTasks, getUserTasks, updateTask } from "../controller/tasks.controller.js";

let router = Router();

// create task 
router.post('/task', createTask);


// get all tasks
router.get('/tasks', getAllTasks);


// get all tasks for each user
router.post('/tasks/:userId', getUserTasks);


// update tasks
router.patch('/task/:id', updateTask);


// delete task
router.delete('/task/:id', deleteTask);


export default router;