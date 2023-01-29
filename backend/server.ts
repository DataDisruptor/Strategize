import express from 'express';
import ProjectRouter from './routes/projectsRoute.js';
import UserRouter from './routes/userRoute.js';
import { errorHandler } from './middleware/errorHandler.js';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';

dotenv.config();
connectDB();

const app : express.Application = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); 
app.use("/api/projects", ProjectRouter);
app.use("/api/user", UserRouter);
app.use(errorHandler);

const PORT : any = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})