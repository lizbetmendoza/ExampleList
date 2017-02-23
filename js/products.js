// here define another module wich one depend of main module at file app.js
// pieces of code defining directives that tells Angular to run or reference some tags at Html tags
(function() {
  var app = angular.module('store-directives',[]);

  // Directives for DEscriptionm Specifications and Reviews tabs
  app.directive("productDescription", function(){
    return{
      restrict:'E',
      templateUrl: 'product-description.html'
    };
  });

  app.directive("productSpecs", function(){
    return{
      restrict:'A',
      templateUrl:'product-specs.html'
    };
  });

  app.directive("productReview",function(){
    return{
      restrict:'E',
      templateUrl:'product-review.html'
    };
  });

  // Tab's directive
  app.directive("productTabs", function(){
      return{
        restrict:'E',
        templateUrl:"product-tabs.html",
        controller: function(){
          this.tab = 1;

          this.setTab = function(newValue){
            this.tab = newValue;
          };

          this.isSet = function(tabName){
            return this.tab === tabName;
          };

        },
        controllerAs:'tab'
      };
  });
})();
