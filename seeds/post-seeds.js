const { Post } = require('../models');

const postData = [
    {
        title: "Aloe Vera",
        post_content: "Hi everybody! I just wanted to take a minute to appreciate my Aloe Vera plant. Commonly used in natural remedies and beauty application, this plant has a jelly like substance growing in the leaves. Does anyone know what kind of soil that I should use?",
        user_id: 3
    },
    {
        title: "Rose",
        post_content: "Roses are the most beautiful flower and have the best scent. They come in all sorts of colors and varieties. My favorite variety are the yellow roses of texas. ",
        user_id: 1
    },
    {
        title: "Sunflower",
        post_content: "Sunflowers have become so popular in the last few years. While commonly used for gifting purposes, they have so many benefits. Did you know that they are often used in sites where there has been some problems with nuclear radiation as the sunflowers help to take all of that stuff out of the ground? Just don't eat those seeds, ROFL!",
        user_id: 2

    },
    {
        title: "Community Garden",
        post_content: "Hi guys, so I was hoping that someone could give me some advice. In my town we have recently created a community garden to help people eat a little bit better. The only problem is that I have no idea what kinds of plants I should grow in my area. I am a little north of Dallas, Texas and was hoping to plant things that would return a really high yield. Any advice?",
        user_id: 5
    },
    {
        title: "Aloe-hi Launches",
        post_content: "Hi friends! I am so excited to announce the launch of this website. I hope that we will be able to create a positive environment that will be able to help gardners all across the internet.",
        user_id: 4
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
