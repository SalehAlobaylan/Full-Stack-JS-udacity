import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import myth_weapon_routes from './handlers/weapons';

const app: express.Application = express();
const address: string = "0.0.0.0:3000";

const corsOptions = {
    origin: 'http://DmaSaudi.org',
    optionsSuccessStatus: 200 //
}
app.use(cors(corsOptions))
app.use(bodyParser.json());

app.get('/', function (req: Request, res: Response) {
    res.send('Hello World!')
})
app.get('/test-cors', cors(corsOptions), function(req,res,next) {
    res.json({msg: 'This is CORS-enabled with a middle ware'})
})
myth_weapon_routes(app)


app.listen(3000, function () {
    console.log(`starting app on: ${address}`)
})
