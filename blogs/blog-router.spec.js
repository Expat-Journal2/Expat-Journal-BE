const request = require('supertest');
const server = require('../api/server.js');

describe('server', () => {
    it('should run all tests without errors', () => {
        expect(true).toBeTruthy();
    });

    describe('test environment', () => {
        it('should use test environment', () => {
            expect(process.env.DB_ENV).toBe('testing')
        });
    });

    // Blogs - check user.spec.js for the other tests of this endpoint
    describe('/api/blogs', () => {
        it('should return a JSON Object', async () => {
            const response = await request(server).get('/')
                expect(response.type).toEqual('application/json')
        });

        it('returns error 400', () => {
            return request(server)
                .get('/api/blogs')
                .then(res => {
                    expect(res.status).toBe(400);
            });
        });
    });
});
