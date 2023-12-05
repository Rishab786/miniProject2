const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const sequelize = require('./util/database');
<<<<<<< HEAD
=======
const Product = require('./models/product');
const User = require('./models/user');
>>>>>>> eca9ef7 (DesignUser&ProductRelationship)

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

<<<<<<< HEAD
=======
app.use((req, res, next) => {
  User.findById(1)
    .then(user => {
      req.user = user;
      next();
    })
    .catch(err => console.log(err));
});

>>>>>>> eca9ef7 (DesignUser&ProductRelationship)
app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

<<<<<<< HEAD
sequelize
  .sync()
  .then(result => {
    // console.log(result);
=======
Product.belongsTo(User, { constraints: true, onDelete: 'CASCADE' });
User.hasMany(Product);

sequelize
  // .sync({ force: true })
  .sync()
  .then(result => {
    return User.findById(1);
    // console.log(result);
  })
  .then(user => {
    if (!user) {
      return User.create({ name: 'Max', email: 'test@test.com' });
    }
    return user;
  })
  .then(user => {
    // console.log(user);
>>>>>>> eca9ef7 (DesignUser&ProductRelationship)
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });
