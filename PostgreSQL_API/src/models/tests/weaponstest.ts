import {Weapon, WeaponStore } from "../weapons";

const store = new WeaponStore()

describe("myth Weapon model", () => {
    it('should have an index method', () => {
        expect(store.index).toBeDefined();
    })
    it('index method should return a list of products', async () => {
        const result = await store.index();
        expect(result).toEqual([]);
    })
})