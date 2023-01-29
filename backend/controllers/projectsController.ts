import { Request, RequestHandler, Response } from 'express';
import expressAsyncHandler from '../../node_modules/express-async-handler/index.js';
import mongoose from 'mongoose';
import projectModel from '../models/projectModel.js';

//TODO: this will need to be repurposed for getting all projects of the logged in user
export const getter : RequestHandler = expressAsyncHandler(async (req: Request, res: Response)  => { 
    const allDocs : any = await projectModel.find();
    console.log(allDocs);
    res.json(allDocs);
});

//Create new (POST)
export const createNewProject : RequestHandler = expressAsyncHandler(async (req : Request, res : Response) => {
    const newProject : mongoose.Document = await projectModel.create(req.body);
    res.json(newProject);
})

//Retrieve by ID (GET)
export const getProjectById : RequestHandler = expressAsyncHandler(async (req : Request, res : Response) => {
    const allDocs : any = await projectModel.findById({_id: req.params.id});
    console.log(allDocs);
    res.json(allDocs);
})

export const updateProjectById : RequestHandler = expressAsyncHandler(async (req : Request, res : Response) => {
    const Doc : any = await projectModel.findByIdAndUpdate({_id: req.params.id}, req.body);
    console.log(Doc);
    res.json(Doc);
})

export const deleteProjectById : RequestHandler = expressAsyncHandler(async (req : Request, res : Response) => {
    const Doc : any = await projectModel.findByIdAndDelete({_id: req.params.id});
    console.log(Doc);
    res.json(Doc);
})