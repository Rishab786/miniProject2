const Product = require('../models/product');
const Cart = require('../models/cart');

exports.getProducts = (req, res, next) => {
<<<<<<< HEAD
  Product.fetchAll()
    .then(([rows, fieldData]) => {
      res.render('shop/product-list', {
        prods: rows,
=======
  Product.findAll()
    .then(products => {
      res.render('shop/product-list', {
        prods: products,
>>>>>>> eca9ef7 (DesignUser&ProductRelationship)
        pageTitle: 'All Products',
        path: '/products'
      });
    })
<<<<<<< HEAD
    .catch(err => console.log(err));
=======
    .catch(err => {
      console.log(err);
    });
>>>>>>> eca9ef7 (DesignUser&ProductRelationship)
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
<<<<<<< HEAD
  Product.findById(prodId)
    .then(([product]) => {
      res.render('shop/product-detail', {
        product: product[0],
=======
  // Product.findAll({ where: { id: prodId } })
  //   .then(products => {
  //     res.render('shop/product-detail', {
  //       product: products[0],
  //       pageTitle: products[0].title,
  //       path: '/products'
  //     });
  //   })
  //   .catch(err => console.log(err));
  Product.findById(prodId)
    .then(product => {
      res.render('shop/product-detail', {
        product: product,
>>>>>>> eca9ef7 (DesignUser&ProductRelationship)
        pageTitle: product.title,
        path: '/products'
      });
    })
    .catch(err => console.log(err));
};

exports.getIndex = (req, res, next) => {
<<<<<<< HEAD
  Product.fetchAll()
    .then(([rows, fieldData]) => {
      res.render('shop/index', {
        prods: rows,
=======
  Product.findAll()
    .then(products => {
      res.render('shop/index', {
        prods: products,
>>>>>>> eca9ef7 (DesignUser&ProductRelationship)
        pageTitle: 'Shop',
        path: '/'
      });
    })
<<<<<<< HEAD
    .catch(err => console.log(err));
=======
    .catch(err => {
      console.log(err);
    });
>>>>>>> eca9ef7 (DesignUser&ProductRelationship)
};

exports.getCart = (req, res, next) => {
  Cart.getCart(cart => {
    Product.fetchAll(products => {
      const cartProducts = [];
      for (product of products) {
        const cartProductData = cart.products.find(
          prod => prod.id === product.id
        );
        if (cartProductData) {
          cartProducts.push({ productData: product, qty: cartProductData.qty });
        }
      }
      res.render('shop/cart', {
        path: '/cart',
        pageTitle: 'Your Cart',
        products: cartProducts
      });
    });
  });
};

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId, product => {
    Cart.addProduct(prodId, product.price);
  });
  res.redirect('/cart');
};

exports.postCartDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId, product => {
    Cart.deleteProduct(prodId, product.price);
    res.redirect('/cart');
  });
};

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders'
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};
