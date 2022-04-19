const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 5,
        comment_text: "This is amazing!"
    },
    {
        user_id: 4,
        post_id: 4,
        comment_text: "Wow, amazing work!"
    },
    {
        user_id: 1,
        post_id: 4,
        comment_text: "Awesome! kudos to everyone who helped to grow this"
    },
    {
        user_id: 3,
        post_id: 5,
        comment_text: "Everything is growing like weeds LOL."
    },
    {
        user_id: 3,
        post_id: 2,
        comment_text: "This is great news!"
    },
    {
        user_id: 3,
        post_id: 4,
        comment_text: "This is an incredible rared plant that you managed to grow!"
    },
    {
        user_id: 5,
        post_id: 3,
        comment_text: "I would recommend investing in a rake to help!"
    },
    {
        user_id: 2,
        post_id: 1,
        comment_text: "Great job! That beauty is sure to win many awards."
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;