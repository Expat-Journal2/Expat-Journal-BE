const db = require('../data/dbConfig.js');

module.exports = {
    find,
    findByBlogId,
    findBlogByUserId,
    add,
    addBlog,
    updateBlog,
    remove,
    removeBlog
};
 
function find() {
    return db('blogs')
};

function findByBlogId(id) {
    return db('blogs')
        .where({ id })
        .first()
};

function findBlogByUserId() {
    return db('blogs')
        .select('blogs.id', 'users.id', 'blogs.title', 'blogs.textbox', 'blogs.created_at', 'blogs.img')
        .leftJoin('users', 'blogs.user_id', 'users.id')
}

function add(blog) {
    return db('blogs')
        .insert(blog, 'id')
};

function updateBlog(changes, id) {
    return db('blogs')
        .where({ id })
        .update(changes, 'id')
};

function addBlog(blog) {
    return db('blogs')
        .join('users', 'users.id', 'blogs.user_id')
        .insert(blog, 'id');
};

function remove(id) {
    return db('blogs')
        .where({ id })
        .del()
};

function removeBlog(id) {
    return db('blogs')
        .where({ id })
        .del()
};