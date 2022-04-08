const express = require('express');
const tagsRouter = express.Router();
const { getAllTags, getPostsByTagName } = require('../db');

tagsRouter.use((req, res, next) => {
    console.log("A request is being made to /tags");

    next();
});

tagsRouter.get('/:tagName/posts', async (req, res, next) => {
    const { tagName } = req.params; 

    try {
        const posts = await getPostsByTagName(tagName);
        res.send({ posts: posts });
    } catch ({ name, message }) {
        next ({ name, message });
    }
})


tagsRouter.get('/', async (req, res, next) => {
    const tags = await getAllTags();

    res.send({
        tags
    });
});

module.exports = tagsRouter;