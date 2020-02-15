const request = require('supertest');

const app = require('../app');


describe('api', () => {
    it('users', async () => {
        const res = await request(app).get('/users')

        expect(res.statusCode).toEqual(200);
        expect(res.headers['content-type']).toEqual('application/json; charset=utf-8')
        expect(res.body).toEqual([{ name: 'Sam', age: 20 }])
    })
});
