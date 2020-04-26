const router = require('express').Router();

const Blogs = require('../blogs/blog-model.js');
const Users = require('./user-model.js');

// GET - All users ✅
router.get('/', (req, res) => {
    Users.find()
        .then(users => {
            res.json(users);
        })
        .catch(error => {
            res.status(500).json({ message: 'Failed to retrieve users' });
    });
});

// GET - Find user by ID ✅
router.get('/:id', validateUserId, (req, res) => {
    const { id } = req.params;

    Users.findByUserId(id)
        .then(posts => {
            if (posts) {
                res.json(posts);
            } else {
                res.status(404).json({ message: 'Could not find user with the given id' });
            }
        })
        .catch(error => {
            res.status(500).json({ message: 'Failed to get the user for given ID' });
    });
});
 
// GET - Find all posts by specific user ID ✅
router.get('/:id/blogs', (req, res) => {
    const { id } = req.params;

    Users.findBlogs(id) 
        .then(blogs => {
            if (blogs.length) {
                res.json(blogs);
            } else {
                res.status(404).json({ message: 'Could not find blogs with the given id' });
            }
        })
        .catch(error => {
            res.status(500).json({ message: 'Failed to get blogs for user' });
    });
});

// POST - Create New Blog for User ✅
router.post('/:id/blogs', (req, res) => {
    const blogData = req.body;
    const { id } = req.params;
        blogData.user_id = id;
        console.log(blogData);

    Users.findByUserId(id)
        .then(user => {
            Blogs.addBlog(blogData, id)
            .then(blog => {
                console.log('blog', blog);
                res.status(201).json(blog);     
            })
        })
        .catch(error => {
            console.log('Error', error)
            res.status(500).json({ message: 'Failed to create new blog' });
    });
});

// PUT - Update blog post by ID ✅
router.put('/:id/blogs/:blogid', validateUserId, (req, res) => {
    const id = req.params.id;
    const blogId = req.params.blogid;
    const changes = req.body;
        console.log('changes', changes)
        console.log('id', id, 'blogId', blogId)

    Users.findBlogs(id)
        .then(blogs=> {
            if (blogs.length) {
                Blogs.updateBlog(changes, blogId)
                .then(updated => {
                    res.status(200).json(changes);
                    console.log('updated', updated);
                })
                .catch(error => {
                    console.log('Blog post error', error)
                    res.status(500).json({ error: 'Failed to update blog post' });
                });
            } else {
                res.status(404).json({ message: 'Failed to get blog ID' });
            }
        })
        .catch(error => {
            console.log('Blog error', error)
            res.status(500).json({ error: 'Failed to update blog' });
        });
});

// DELETE - Delete User by ID ✅
router.delete('/:id', validateUserId, (req, res) => {
    const id = req.params.id;

    Users.removeUser(id)
      .then(count => {
        res.status(200).json(count);
      })
      .catch(error => {
        console.log(error);
        res.status(500).json({ error: "failed to remove the user" });
      });
});

// DELETE - Delete blog post by ID ✅
router.delete('/:id/blogs/:blogid', validateUserId, (req, res) => {
    const id = req.params.id;
    const blogId = req.params.blogid;
        console.log('id', id, 'blogId' , blogId);

    Users.findBlogs(id)
        .then(blogs => {
            if (blogs.length) {
                Blogs.removeBlog(blogId)
                .then(count => {
                    res.status(200).json(count);
                })   
                .catch(error => {
                    console.log(error);
                    res.status(500).json({ message: 'Failed to delete blog post' });
                });
            } else {
                res.status(404).json({ message: 'Could not find blog with given ID' });
            }
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ message: 'Failed to delete Blog ID'})
    });
});

function validateUserId(req, res, next) {
    const { id } = req.params;

    Users.findByUserId(id)
        .then(user => {
        console.log('user', user);
        if (!Object.keys(user).length ){
            res.status(400).json({ message: 'Invalid user ID' });
        } else next();
    })
    .catch(error => {
      console.log('Error:', error);
      res.status(500).json({ error: `Couldn't retrieve user: ${id}` });
    });
}; 

module.exports = router;