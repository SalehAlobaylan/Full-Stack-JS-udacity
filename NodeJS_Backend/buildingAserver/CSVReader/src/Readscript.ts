import express from 'express';
import { promises as fspromises } from 'fs';
import csv from 'csvtojson';

const app = express();
const port = 3000;

const inputFile = './users.csv';
const outputFile = 'users.json';


//Start express server

app.listen(port, () => {
    console.log(`Server startedat http://localhost:${port}`);
 });



//define a route handler for the default home page
//create get endpoint
app.get('/convert', (req,res) => {
    res.send('converting in process!')
    csv().fromFile(inputFile).then((data) => {
        let newData = data.map( (item: {
            first_name: string; last_name: string; phone: string; }) => {
                let first = item.first_name;
                let last = item.last_name;
                let phone = item.phone;
                if(item.phone === "") {
                    phone = "missing data";
                }
                return {first, last, phone};
            });
            fspromises.writeFile(outputFile, JSON.stringify(newData));
    });
});

