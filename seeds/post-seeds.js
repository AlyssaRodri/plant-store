const { Post } = require('../models');

const postData = [
    {
        title: "Aloevera",
        post_content: "A plant that has a jelly inside, that people use for medical and beuty application.",
        user_id: 3
    },
    {
        title: "Rose",
        post_content: "a beutyfull flower that bloms in a veriety of colors, but have very sharp thorns on its root. The most famous of most flowers!",
        user_id: 1
    },
    {
        title: "Sunflower",
        post_content: "A yellow plant with a black center, used for gifting porpuses.",
        user_id: 2

    },
    {
        title: "Plant Blog has been released!",
        post_content: "A CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. This site will be built from scratch and deployed to Heroku. The app will follow MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication",
        user_id: 5
    },
    {
        title: "Just Plants News goes public!",
        post_content: "Just Tech News—a tech news website where users can post, upvote, and comment on links to news articles. Use Sequelize, an object-relational mapping (ORM) library, to simplify your MySQL queries, add password hashing so that users can create secure passwords, and connect your application to JawsDB, a MySQL add-on for Heroku",
        user_id: 4
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
