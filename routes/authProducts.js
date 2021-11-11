const { constants } = require("buffer");
const express = require("express");
const Router = express.Router();
const axios = require('axios')
var unirest = require("unirest");
const { query } = require("express");
const api_url = "https://api.bestbuy.com/v1/products";
const api_complex = "https://api.bestbuy.com/v1/products("

// https://api.bestbuy.com/v1/products?pageSize=50&page=2&format=json&show=sku,name,salePrice,image,shortDescription&apiKey=VEu4DRF1Wwgl54oI4TerpOTqs
Router.post("/productsbyquery",(req, res) => {
  const {elements_by_users,search} = req.body
  let api = api_url
  const query = {
    pageSize: 50,
    format: 'json',
    show: 'sku,name,salePrice,image,shortDescription,customerReviewAverage',
    apiKey: 'VEu4DRF1Wwgl54oI4TerpOTq'
  }
  if(search){
    let s = search.split(" ")
    api+="("
    for(let i=0;i<s.length;i++)
    {
      api+= "search="+s[i]
      if(i!=s.length-1){
        api+="&"
      }
    }
    api+=")?"
  }else{
    api+="?"
  }
  for(let key in elements_by_users){
    query[key] = elements_by_users[key]
  }
  unirest
  .get(api)
  .query(query)
  .then((response) => {
    res.json(response.body)
  })



});




module.exports = Router;
