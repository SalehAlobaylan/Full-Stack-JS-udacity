import express from 'express';
import path from 'path';

const app = express();
const port = 3000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Define a route handler for the default home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
    
});

// Start the Express server
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});
