const request = require('supertest');
const server = require('../api/server.js');

const Users = require('./user-model.js');
const Blogs = require('../blogs/blog-model.js')

describe('server', () => {
    describe('test environment', () => {
        it('should use test environment', () => {
            expect(process.env.DB_ENV).toBe('testing')
        });
    });

    describe('/api/users', () => {
        it('should return a JSON Object', async () => {
            const response = await request(server).get('/')
                expect(response.type).toEqual('application/json')
        })
    });

});