const request = require('supertest');
const server = require('../api/server.js');
const db = require('../data/dbConfig.js');

const Users = require('./user-model.js');
const Blogs = require('../blogs/blog-model.js');


describe('server', () => {
    it('should run all tests without errors', () => {
        expect(true).toBeTruthy();
    });

    describe('test environment', () => {
        it('should use test environment', () => {
            expect(process.env.DB_ENV).toBe('testing')
        });
    });

    // GET Request - users
    describe('/api/users', () => {
        it('should return all users', () => {
            return request(server)
                .post('/api/auth/login')
                .send({
                    username: 'newuser',
                    password: 'password'
                })
                .then(res => {
                    const token = res.body.token
                    return request(server)
                        .get('/api/users')
                        .set('Authorization', token)
                        .then(res => {
                            expect(res.status).toBe(200)
                    });
            });
        });

        it('should return a JSON Object', async () => {
            const response = await request(server).get('/')
                expect(response.type).toEqual('application/json')
        });
    });

    // GET Request - blogs
    describe('/api/blogs', () => {
        it('should return all blogs', () => {
            return request(server)
                .post('/api/auth/login')
                .send({
                    username: 'newuser',
                    password: 'password'
                })
                .then(res => {
                    const token = res.body.token
                    return request(server)
                        .get('/api/blogs')
                        .set('Authorization', token)
                        .then(res => {
                            expect(res.status).toBe(200)
                    });
            });
        });

        describe('/api/blogs', () => {
            it('should return a JSON Object', async () => {
                const response = await request(server).get('/')
                expect(response.type).toEqual('application/json')
            });
            
            it('should return a 401, wrong authorization', () => {
                return request(server)
                .get('/api/users/blogs')
                .set('Authorization', 'token')
                .then(res => {
                    expect(res.status).toBe(401);
                });
            });
        });
    });

    // PUT Request - changes the blog for user 2, just change blogId and title/textbox 
    describe('PUT /', () => {
        const update = {
            title: "test",
            textbox: "test",
            created_at: "Apr 28 2020"
        };
        const blogId = 4;
        it('should update user blog', async () => {
            const res = await Blogs.updateBlog(update, blogId)
                .then(updateBlog => {
                    console.log('new', updateBlog);
                    expect(200);
                });
        });
    });

    // POST Request 
    describe('POST /', () => {
        it('should return a JSON Object', async () => {
            const response = await request(server).get('/api/users/1/blogs/1')
            expect(response.type).toEqual('application/json')
        });
        
        it('should return a 400, wrong authorization', () => {
            return request(server)
            .get('/api/users/blogs')
                .then(res => {
                    expect(res.status).toBe(400);
            });
        });
    });
    
    // DELETE Request
    describe('delete', () => {
        function login(done) {
             it('it should login newuser', () => {
                 return request(server)
                     .post('/api/auth/login')
                     .send({
                         username: 'newuser',
                         password: 'password'
                     })
                     .delete('/api/users/3/blogs/6')
                     .expect(200).end(response(done));
                     function response(error, res) {
                        token = res.body.token;
                        return done();
                    }
             });
         };
     });
});
