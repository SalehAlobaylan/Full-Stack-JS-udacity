import express, {Request , Response} from 'express';
import { Weapon, WeaponStore } from '../models/weapons';

const store = new WeaponStore()

const index = async (_req: Request, res: Response) => {
    const weapons = await store.index()
    res.json(weapons)
}

const myth_weapon_routes = (app: express.Application) => {
    app.get('/products', index)
}
export default myth_weapon_routes