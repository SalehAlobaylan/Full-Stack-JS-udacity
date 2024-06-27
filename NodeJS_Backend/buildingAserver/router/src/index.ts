import express from 'express';
import routes from './routes/index';

// primary endpoint
const app = express();
const port = 3000;

// app.get('/', (req,res) => {
//     res.send('Hello world!');
// });
app.use('/api',routes);

// start express server
app.listen(port, () => {
    console.log(`server started at http://localhost: ${port}`);
});