const db = require('../data/dbConfig');

module.exports = {
    find, 
    findBy,
    add,
    removeUser,
    findByUserId,
    findById,
    findBlogs,
    update
};

function find() {
    return db('users')
        .select('id', 'fullname', 'username', 'password');
};

function findBy(filter) {
    return db('users')
        .where(filter);
};

function findById(id) {
    return db('users')
        .where({ id })
        .first();
};

function findBlogs(id) {
    return db('blogs')
        .join('users', 'users.id', 'blogs.user_id')
        .select('blogs.*')
        .where('user_id', id)
};

async function add(user) {
    const [id] = await db('users').insert(user, 'id');
        return findById(id);
};

function removeUser(id) {
    return db('users')
        .where({ id })
        .del()
};

function findByUserId(id) {
    return db('users')
        .where({ id })
        .first();
};

function update(changes, id) {
    return db('users')
        .where({ id })
        .update(changes, 'id')
};
