(function () {
  angular.module('shopApp',[])
  .controller('toBuy',toBuyMain)
  .service('shopping',shoppingMain);

  toBuyMain.$inject=['shopping']
  function toBuyMain(shopping) {
    var tob=this;
    tob.shopLists = shopping.show();
    tob.lol=shopping.bought();
    if(tob.lol.length===0)
      tob.nomsg="Nothing bought yet";
    tob.bought=function (index) {
      shopping.add(tob.shopLists[index].name,tob.shopLists[index].amount);
      shopping.rem(index);
      if(tob.shopLists.length===0)
        tob.evemsg="Everything is bought!";
        if(tob.lol.length!==0)
          tob.nomsg="";
      };

  };

  function shoppingMain() {
    var shopping = this;
    var shopList = [
      {
        "name":'cake',
        "amount":"20"
      },
      {
        "name":'Cold Drink',
        "amount":"10"
      },
      {
        "name":'Pizza',
        "amount":"5"
      },
      {
        "name":'Sandwich',
        "amount":"12"
      },
      {
        "name":'Milk',
        "amount":"2"
      },
    ] ;
    var toShopList = [] ;

    shopping.show=function () {
      return shopList;
    }
    shopping.add=function(i1,i2) {
      var item =
        {
          "name":i1,
          "amount":i2
        }
      ;
      toShopList.push(item);
    }
    shopping.bought=function () {

      return toShopList;
    };
    shopping.rem=function (index) {
      shopList.splice(index,1);
    }

  };
})()
