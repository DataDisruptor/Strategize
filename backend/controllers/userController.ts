import { Request, RequestHandler, Response } from 'express';
import expressAsyncHandler from '../../node_modules/express-async-handler/index.js';
import mongoose from 'mongoose';
import userModel from '../models/UserModel.js';

//*For Development only:
export const getter : RequestHandler = expressAsyncHandler(async(req: Request, res: Response) => {
    const allDocs : any = await userModel.find();
    res.json(allDocs);
})

//Create new (POST)
export const createNewUser : RequestHandler = expressAsyncHandler(async (req : Request, res : Response) => {
    const {name, email, password} = req.body;
    if(!name || !email || !password)
    {
        res.status(400);
        throw new Error("must specify all fields to register as a new user!");
    }
    const userExists = await userModel.findOne({ email });
    if (userExists) {
        res.status(400);
        throw new Error('User already exists!');
    }

    const newUser : mongoose.Document = await userModel.create({name: name, email: email, password: password});
    res.status(201).json(newUser);
})

//Retrieve by ID (GET)
export const getUserById : RequestHandler = expressAsyncHandler(async (req : Request, res : Response) => {
    const doc : any = await userModel.findById({_id: req.params.id});
    console.log(doc);
    res.json(doc);
})

//Update by ID (PUT)
export const updateUserById : RequestHandler = expressAsyncHandler(async (req : Request, res : Response) => {
    const doc : any = await userModel.findByIdAndUpdate({_id: req.params.id}, req.body);
    console.log(doc);
    res.json(doc);
})

//Delete by ID (DELETE)
export const deleteUserById : RequestHandler = expressAsyncHandler(async (req : Request, res : Response) => {
    const Doc : any = await userModel.findByIdAndDelete({_id: req.params.id});
    console.log(Doc);
    res.json(Doc);
})