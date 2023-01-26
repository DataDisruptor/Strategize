import { Request, RequestHandler, Response } from 'express';
import expressAsyncHandler from '../../node_modules/express-async-handler/index.js';

export const getter : RequestHandler = expressAsyncHandler((req: Request, res: Response) => {
    res.send("Natural Joe");
});