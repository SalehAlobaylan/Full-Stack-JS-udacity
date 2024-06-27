import express from 'express';
const students = express.Router();

students.get('/', (req,res) => {
    res.send('Studnet route');
});
export default students;