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

    describe('/api/blogs', () => {
        it('should return a JSON Object', async () => {
            const response = await request(server).get('/')
                expect(response.type).toEqual('application/json')
        });

        it('GET Request /api/blogs', () => {
            beforeAll((done) => {
                request(server)
                    .post('/api/auth/login')
                    .send({ 
                        username: 'newuser',
                        password: 'password'
                    })
                    .get('/api/blogs', token)
                    .expect(200).end(token(done));
                        let token = res.body.token;
            });
        });
    });
});
