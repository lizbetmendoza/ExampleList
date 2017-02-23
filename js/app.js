// Here we write some code for our app, all modules and controllers are wrapped in a function (closure)
(function(){
  // Here define some dependencies for our app store  like 'store-directives'
    var app = angular.module('store', ['store-directives']);
    //This controller store all values for our array of gems
    app.controller('StoreController', function(){
      this.products= gems;
    });
    //controller for REviews,
    //here we define a new behavior defining a function addReview to insert new review
    app.controller('ReviewController', function(){
      this.review = {};
      this.review.createdOn = Date.now();

      this.addReview = function(product){
        product.reviews.push(this.review);
        this.review = {};
      };
    });

    // array of gems called for the controller 'StoreController'
    var gems = [
      {
        name:'Ruby',
        price:2.95,
        description: "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
        shine:8,
        images:[
          {
            full:'images/ruby.jpeg',
            //thumb:'images/ruby.jpeg',
          },
        ],
        reviews: [{
          stars:5,
          body:"I love this gem",
          author: "joe@example.com",
          createdOn:1397490980837
        },{
          stars: 1,
          body: "This gem sucks.",
          author: "tim@example.org",
          createdOn: 1397490980837
        }],
        //canPurchase:true,
        //soldOut:false,
      },
      {
        name:'Esmeralda',
        price:10.95,
        description:'beatiful natural green stone',
        shine:9,
        images:[
          {
            full:'images/esmeralda.jpeg',
            //thumb:'images/esmeralda.jpeg',
          },
        ],
        reviews: [{
           stars: 3,
           body: "I think this gem was just OK, could honestly use more shine, IMO.",
           author: "JimmyDean@example.org",
           createdOn: 1397490980837
         }, {
           stars: 4,
           body: "Any gem with 12 faces is for me!",
           author: "gemsRock@example.org",
           createdOn: 1397490980837
         }],
        //canPurchase:true,
        //soldOut:false,
      },
      {
        name:'Opal',
        price:8.95,
        description:'Awesome and rare natural stone',
        shine:10,
        images:[
          {
            full:'images/opal.jpeg',
            //thumb:'images/opal.jpeg',
          },
        ],
        reviews: [{
            stars: 1,
            body: "This gem is WAY too expensive for its rarity value.",
            author: "turtleguyy@example.org",
            createdOn: 1397490980837
          }, {
            stars: 1,
            body: "BBW: High Shine != High Quality.",
            author: "LouisW407@example.org",
            createdOn: 1397490980837
          }, {
            stars: 1,
            body: "Don't waste your rubles!",
            author: "nat@example.org",
            createdOn: 1397490980837
          }],
        //canPurchase:true,
        //soldOut:false,
      }
    ];

})();
