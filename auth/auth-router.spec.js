const request = require('supertest');
const server = require('../api/server.js');

describe('server', () => {
    it('should run all tests without errors', () => {
        expect(true).toBeTruthy();
    });

    // REGISTER ENDPOINTS - Tests
    describe('/api/auth/register', () => {
        describe('create new user', () => {
            beforeAll((done) => {
                request(server)
                    .post('/api/auth/register')
                    .send({ 
                        fullname: 'Testing',
                        username: 'testing1',
                        password: 'password'
                    })
                    .expect(200).end(token(done));
                        let token = res.body.token;
            });
        });
      
        it('returns error 500', () => {
            return request(server)
                .post('/api/auth/register')
                .then(res => {
                    expect(res.status).toBe(500);
            });
        });
    });

    // LOGIN ENDPOINTS - Tests
    describe('/api/auth/login', () => {
       function login(done) {
            it('it should login newuser', (done) => {
                request(server)
                    .post('/api/auth/login')
                    .send({
                        username: 'newuser',
                        password: 'password'
                    })
                    .expect(200).end(token(done));
                        let token = res.body.token; 
            });
    };


        it('should return a 500 status', () => {
            return request(server)
                .post('/api/auth/login')
                .send({ 
                    username: 'name',
                    password: 'password'
                })
                .then(res => {
                    expect(res.status).toBe(500);
            });
        });
    });
});