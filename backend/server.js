import express from 'express';
import ProjectRouter from './routes/projectsRoute.js';
import UserRouter from './routes/userRoute.js';
import { errorHandler } from './middleware/errorHandler.js';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import cors from 'cors';
import path from 'path';
//fix Node's "path" to support ESModules instead of CJS.
import * as url from 'url';
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
dotenv.config();
connectDB();
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/projects", ProjectRouter);
app.use("/api/user", UserRouter);
app.use(errorHandler);
//Serve Frontend
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../frontend/strategize/build')));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../', 'frontend', 'strategize', 'build', 'index.html'));
    });
}
else {
    app.get('/', (req, res) => {
        res.send('Please set to production environment');
    });
}
//Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
