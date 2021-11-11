const axios = require("axios");


exports.bestbuyApi =axios.create({
    baseURL: 'https://api.bestbuy.com/v1/'
});

// https://api.bestbuy.com/v1/products?pageSize=50&page=2&format=json&show=sku,name,salePrice,image,shortDescription&apiKey=VEu4DRF1Wwgl54oI4TerpOTqs