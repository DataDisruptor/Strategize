import expressAsyncHandler from '../../node_modules/express-async-handler/index.js';
import userModel from '../models/UserModel.js';
//*For Development only:
export const getter = expressAsyncHandler(async (req, res) => {
    const allDocs = await userModel.find();
    res.json(allDocs);
});
//Create new (POST)
export const createNewUser = expressAsyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        res.status(400);
        throw new Error("must specify all fields to register as a new user!");
    }
    const userExists = await userModel.findOne({ email });
    if (userExists) {
        res.status(400);
        throw new Error('User already exists!');
    }
    const newUser = await userModel.create({ name: name, email: email, password: password });
    res.status(201).json(newUser);
});
//Retrieve by ID (GET)
export const getUserById = expressAsyncHandler(async (req, res) => {
    const doc = await userModel.findById({ _id: req.params.id });
    console.log(doc);
    res.json(doc);
});
//Update by ID (PUT)
export const updateUserById = expressAsyncHandler(async (req, res) => {
    const doc = await userModel.findByIdAndUpdate({ _id: req.params.id }, req.body);
    console.log(doc);
    res.json(doc);
});
//Delete by ID (DELETE)
export const deleteUserById = expressAsyncHandler(async (req, res) => {
    const Doc = await userModel.findByIdAndDelete({ _id: req.params.id });
    console.log(Doc);
    res.json(Doc);
});
