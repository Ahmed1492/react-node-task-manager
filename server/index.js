import express from 'express';
import { connectDB } from './db/connection.js';
import userRouter from './src/router/user.router.js';
import taskRouter from './src/router/task.router.js';
const app = express();
const port = 2000;
app.use(express.json());
app.use(userRouter);
app.use(taskRouter);
connectDB();

app.get('/', (req, res) => res.send('Hello World!'));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));