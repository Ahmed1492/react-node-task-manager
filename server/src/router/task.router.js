import { Router } from "express";
import { createTask, deleteTask, getAllTasks, getComUserTasks, getDefeUserTasks, getDeployedTasks, getInProgUserTasks, getPendUserTasks, getUserTasks, updateTask } from "../controller/tasks.controller.js";

let router = Router();

// create task 
router.post('/task', createTask);


// get all tasks
router.get('/tasks', getAllTasks);


// get all tasks for specific user
router.get('/tasks/:userId', getUserTasks);


// get completed Task for specific user
router.get('/tasks/:userId/completed', getComUserTasks);
router.get('/tasks/:userId/pending', getPendUserTasks);
router.get('/tasks/:userId/inprogress', getInProgUserTasks);
router.get('/tasks/:userId/deployed', getDeployedTasks);
router.get('/tasks/:userId/deferred', getDefeUserTasks);


// update tasks
router.patch('/task/:id', updateTask);


// delete task
router.delete('/task/:id', deleteTask);


export default router;