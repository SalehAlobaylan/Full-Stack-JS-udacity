import express from 'express';
import teachers from './api/teachers';
import students from './api/student';
const routes = express.Router();


// primary endpoint
// const app = express();
// const port = 3000;

routes.get('/', (req,res) => {
    res.send('main api route');
});
routes.use('/teachers', teachers);
routes.use('/student', students);

// start express server
// app.listen(port, () => {
//     console.log(`server started at http://localhost: ${port}`);
// });

export default routes;