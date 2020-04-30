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

    // REGISTER ENDPOINTS - Tests  **UNCOMMENT to test, as it needs a unique username
    describe('/register', () => {
        // it('should register new user, return a 201', () => {
        //     return request(server) 
        //         .post('/api/auth/register')
        //         .send({
        //             fullname: 'Devanee Reid',
        //             username: 'devaneereid',
        //             password: 'password'
        //         })
        //         .then(res => {
        //             expect(res.status).toBe(201);
        //     });
        // });
      
        // testing register error message
        it('returns error 500', () => {
            return request(server)
                .post('/api/auth/register')
                .then(res => {
                    expect(res.status).toBe(500);
            });
        });
    });

    // LOGIN ENDPOINTS - Tests
    describe('/login', () => {
        it('should return a 200 OK', () => {
            return request(server)
                .post('/api/auth/login')
                .send({
                    username: 'newuser',
                    password: 'password'
                })
                .then(res => {
                    expect(res.status).toBe(200)
            });
        });

        // testing login error message
        it('should return a 401', () => {
            return request(server)
                .post('/api/auth/login')
                .send({
                    username: 'user',
                    password: 'password'
                })
                .then(res => {
                    expect(res.status).toBe(401);
            });
        });
    });
});