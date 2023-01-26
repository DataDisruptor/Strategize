import express from 'express';
import ProjectRouter from './routes/projectsRoute.js';
import { errorHandler } from './middleware/errorHandler.js';
const app = express();
app.use("/api/projects", ProjectRouter);
app.use(errorHandler);
const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
