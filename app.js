
(
  function(){
    'use strict';
  var app = angular.module('ShoppingListCheckOff',[]);
  app.controller('ToBuyController',ToBuyController);
  app.controller('AlreadyBoughtController',AlreadyBoughtController);
  app.service('ShoppingListCheckOffService',ShoppingListCheckOffService);
  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService){
    var list1 = this;
    list1.message = function(){
      return list1.itemList == "";
    }
    list1.itemList = ShoppingListCheckOffService.buy();
    list1.bought = function(index){
      ShoppingListCheckOffService.addBoughtItem(list1.itemList[index].name,list1.itemList[index].quantity);
      ShoppingListCheckOffService.remItem(index);
    }
  }
  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService){
    var list2 = this;
    list2.message = function(){
      return list2.boughtList == "";
    }
    list2.boughtList =ShoppingListCheckOffService.boughtItem();
  }
  function ShoppingListCheckOffService(){
    var items = [{
      name:"Cookies",
      quantity:"10"
    },
    {
      name:"Chips",
      quantity:"15"
    },
    {
      name:"Cake",
      quantity:"8"
    },
    {
      name:"Biscuits",
      quantity:"10"
    },
    {
      name:"Fruit Juice",
      quantity:"15"
    }
  ];

    var bought = [];
    var service = this;
    service.buy = function(){
      return items;
      };
    service.boughtItem = function(){
      return bought;
      };
    service.addBoughtItem=function(n,q){
      var item = {
        name: n,
        quantity:q
      }
      bought.push(item);
    }
    service.remItem = function(no){
      items.splice(no,1);
    }
  }
  }
)();
