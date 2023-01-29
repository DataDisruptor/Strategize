import express from 'express';
import { getter, createNewUser, getUserById, updateUserById, deleteUserById } from '../controllers/userController.js';

const router : express.Router = express.Router();

router.route("/")
.get(getter)
.post(createNewUser)

router.route("/:id")
.get(getUserById)
.put(updateUserById)
.delete(deleteUserById)

//TODO: authentication and associate User with Projects

export default router;