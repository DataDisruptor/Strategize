import express from 'express';
import { getter, createNewProject, getProjectById, updateProjectById, deleteProjectById } from '../controllers/projectsController.js';
const router = express.Router();
router.route("/")
    .get(getter)
    .post(createNewProject);
router.route("/:id")
    .get(getProjectById)
    .put(updateProjectById)
    .delete(deleteProjectById);
//TODO: then, authentication and associate User with Project
export default router;
