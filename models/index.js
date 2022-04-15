const User = require('./User');
const Blog = require('./Blog');
const comments = require('./comment');

User.hasMany(Blog, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});
User.hasMany(comments, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Blog.belongsTo(User, {
  foreignKey: 'user_id'
});
comments.belongsTo(User, {
  foreignKey: 'user_id'
});


module.exports = { User, Blog, comments,  };
