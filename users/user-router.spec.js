const request = require('supertest');
const server = require('../api/server.js');
const db = require('../data/dbConfig.js');

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

    describe('insert()', function () {
        it('should add the created blogs',  () => {
            return request(server)
            .put('/api/users/:id/blogs/:blogid')
            .send({
                title: "test",
                textbox: "test",
                created_at: "Apr 28 2020",
                user_id: 1
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
                            // let token = res.body.token
                        })
                });
            })
        
        
        });
    // })
})

    describe('/GET ', () => {
        // it('should return all users', async () => {
        //    const response = await request(server)
        //         .post('/api/auth/login')
        //         .send({
        //             username: 'newuser',
        //             password: 'password'
        //         })
        //         .then(res => {
        //             const token = res.body.token
        //             return request(server)
        //                 .get('/api/users/blogs')
        //                 .set('Authorization', token)
        //                 .expect(response.type).toBe(200)
        //     });
        // });

        it('user blogs should require authorization', () => {
            return request(server)
                .get('/api/users/blogs')
                .set('Authorization', '2a08wuxseCUslsLFxJH.LLgn8uvzlGjSr0btsMkoz1zriQjBeGRLsLsm')
                    .then(res => {
                        expect(res.status).toBe(401);
                });
        });
    });

    // describe('DELETE user blog', () => {
    //     it('should remove a blog post', (done) => {
    //         return request(server)
    //             .post('/api/auth/login')
    //             .send({
    //                 username: 'username',
    //                 password: 'password'
    //             })
    //             .then(res => {
    //                 const token = res.body.token
    //             return request(server)
    //                 .delete('/api/users/:id/blogs/:id')
    //                 .set('Authorization', token)
    //                 .then(res => {
    //                     expect(res.status).toBe(200)
    //                 })
    //             })
    //     })
    // })
});