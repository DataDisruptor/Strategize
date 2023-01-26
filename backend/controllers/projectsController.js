import expressAsyncHandler from '../../node_modules/express-async-handler/index.js';
export const getter = expressAsyncHandler((req, res) => {
    res.send("Natural Joe");
});
