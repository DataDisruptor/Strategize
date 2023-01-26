import express from 'express';
import { getter } from '../controllers/projectsController.js';
const router = express.Router();
router.route("/")
    .get(getter);
export default router;
