'use strict';
function getShippingCost(country) {
    let message;
    let price;
  switch (country) { 
      case country = 'China': 
      price = 100;
         message = `Shipping to ${country} will cost ${price} credits`;
        break;
      case country = 'China': 
      price = 100;
         message = `Shipping to ${country} will cost ${price} credits`;
        break;
      case country = 'Chile': 
      price = 250;
         message = `Shipping to ${country} will cost ${price} credits`; 
        break;
      case country = 'Australia': 
      price = 170;
         message = `Shipping to ${country} will cost ${price} credits`;
        break;
      case country = 'Jamaica': 
      price = 120;
         message = `Shipping to ${country} will cost ${price} credits`; 
        break;
  
     default: message = "Sorry, there is no delivery to your country";
    }
    return message;
  }
  getShippingCost("Australia")
  console.log(getShippingCost("Australia"));
  getShippingCost("Germany");
  console.log(getShippingCost("Germany"));
  getShippingCost("China");
  console.log(getShippingCost("China"));
  getShippingCost("Chile");
  console.log( getShippingCost("Chile"));
  getShippingCost("Jamaica");
  console.log(getShippingCost("Jamaica"))
  getShippingCost("Sweden");
  console.log(getShippingCost("Sweden"));