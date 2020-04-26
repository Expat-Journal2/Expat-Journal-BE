const router = require('express').Router();
const Blogs = require('./blog-model.js');

router.get('/', (req, res) => {
    Blogs.find()
        .then(blogs => {
            res.json(blogs)
        })
        .catch(error => {
            res.status(500).json(error);
    });
});

module.exports = router;
