import express from 'express';

const app = express();
const port = 3000;

app.get('/api', (req,res) => {
    res.send('server working');
});

// start express server
app.listen(port, () => {
    console.log(`server started at http://localhost: ${port}`);
});