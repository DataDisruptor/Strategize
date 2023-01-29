import expressAsyncHandler from '../../node_modules/express-async-handler/index.js';
import projectModel from '../models/projectModel.js';
//TODO: this will need to be repurposed for getting all projects of the logged in user
export const getter = expressAsyncHandler(async (req, res) => {
    const allDocs = await projectModel.find();
    console.log(allDocs);
    res.json(allDocs);
});
//Create new (POST)
export const createNewProject = expressAsyncHandler(async (req, res) => {
    const newProject = await projectModel.create(req.body);
    res.json(newProject);
});
//Retrieve by ID (GET)
export const getProjectById = expressAsyncHandler(async (req, res) => {
    const allDocs = await projectModel.findById({ _id: req.params.id });
    console.log(allDocs);
    res.json(allDocs);
});
export const updateProjectById = expressAsyncHandler(async (req, res) => {
    const Doc = await projectModel.findByIdAndUpdate({ _id: req.params.id }, req.body);
    console.log(Doc);
    res.json(Doc);
});
export const deleteProjectById = expressAsyncHandler(async (req, res) => {
    const Doc = await projectModel.findByIdAndDelete({ _id: req.params.id });
    console.log(Doc);
    res.json(Doc);
});
