const request = require('supertest');
const server = require('../api/server.js');
const db = require('../data/dbConfig.js');

const Users = require('./user-model.js');
const Blogs = require('../blogs/blog-model.js');


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

    describe('PUT /', () => {
        const update = {
            title: "test",
            textbox: "test",
            created_at: "Apr 28 2020"
        };
            const blogs = 1;
            it('should update user blog', async () => {
                const res = await Blogs.updateBlog(update, blogs)
                    .then(updateBlog => {
                        console.log('new', updateBlog);
                        expect(200);
                    });
            });
    });

        // **  Change user blog id to test so it creates new blog
        describe('insert()', function () {
            it('should add the created blog',  () => {
                return request(server)
                .post('/api/users/2/blogs/4')
                .send({
                    title: "test",
                    textbox: "test",
                    created_at: "Apr 28 2020",
                    user_id: 2
                })
                .then(res => {
                    return request(server)
                        .post('/api/auth/login')
                        .send({
                            username: 'newuser',
                            password: 'password'
                        })
                        .then(res => {
                            return request(server)
                            .get('/api/users')
                            .set('Authorization', res.body.token)
                            .then(res => {
                                expect(res.status).toBe(200)
                        });
                    });
                });
            });
        });



        describe('/GET ', () => {
            let token = {};
            it('should return all users', (done) => {
            return request(server)
                    .post('/api/auth/login')
                    .send({
                        username: 'newuser',
                        password: 'password'
                    })
                    .expect(200)
                    .end(response);
                        function response(error, res) {
                            token = res.body.token;
                            return done();
                        }
            });

            it('user blogs should require authorization', () => {
                return request(server)
                    .get('/api/users/blogs')
                    .set('Authorization', '2a08wuxseCUslsLFxJH.LLgn8uvzlGjSr0btsMkoz1zriQjBeGRLsLsm')
                        .then(res => {
                            expect(res.status).toBe(401);
                    });
            });
        });

    //  ** UNCOMMENT to test - I've set it to delete a blog
    describe('delete', () => {
        function login(done) {
             it('it should login newuser', () => {
                 return request(server)
                     .post('/api/auth/login')
                     .send({
                         username: 'newuser',
                         password: 'password'
                     })
                    //  let token = res.body.token; 
                     .delete('/api/users/2/blogs/4')
                     .expect(200).end(response(done));
                     function response(error, res) {
                        token = res.body.token;
                        return done();
                    }
             });
         };
     });
});
