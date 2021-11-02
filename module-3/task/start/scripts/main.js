//This is a single line comment

/**This is a multiple 
* line 
* comment */

/** 
 * let age = 40;
 * const name = 'Gemma';
 * var address = '123 long avenue';
*/

const productName = 'Baked Beans';
let price = 1.27;
let quantity = 4;
let inStock = true;
let discountAmount = 10;

// console.log( 'Product Name:', productName );
// console.log( 'Price:', price );
// console.log( 'Quantity:', quantity );
// console.log( 'In Stock:', inStock );
// console.log( 'Discount:', discountAmount );

// typeof shows the different data types

// console.log( typeof productName );
// console.log( typeof quantity );
// console.log( typeof inStock );
// console.log( typeof discountAmount );

//writing on the document and p for a new paragraph

//document.write( "<p>" + productName + "</p>");

// let myName = '';
// let numOfKids = '1';
// let isMarried;

// let newName = 'Luke';
// let newNumOfKids = '1';

//console.log( Boolean(myName) );
// console.log( Boolean(numOfKids) );
// console.log( Boolean(isMarried) );
// console.log( Boolean(null) );
// console.log( Boolean(undefined) );
// console.log( Boolean('-------') );
// console.log( Boolean(newName) );
// console.log( Boolean(newNumOfKids) );


//function showProductName() {
 //   console.log( productName );
// }

// function totalPrice( productPrice,productQuantity ) {
 //   console.log( productPrice * productQuantity );

// showProductName();

// totalPrice( price, quantity);

// const totalPrice = ( productPrice,productQuantity ) => console.log( productPrice * productQuantity );

// const showProductName() => console.log( productName );

// const greet = name => console.log( name );

// function checkAvailability( productInStock ) {
 //   console.log( productInStock );
// }

// const checkAvailability = ( productInStock ) => console.log( productInStock );

// checkAvailability( inStock );

// let global = 'Global scope';

// const localScope = () => {
 //    let scope = 'Local Scope'; // Local
  //   console.log(scope);
// }

// localScope();

// console.log( global );

// const productDiscount = () => {
 // if ( quantity > 1 ){
 // let newPrice = discountAmount - (price * quantity);
  //    console.log( newPrice );
 //  }
 // }

// productDiscount();

//switch Statement

// const level = 6;

// switch( level ) {
//   case 1 :
//     console.log('You are on level 1');
//   break; 
//   case 2 :
//     console.log('You are on level 1');
//   break; 
//   case 3 :
//     console.log('You are on level 1');
//   break; 
//   case 4 :
//     console.log('You are on level 1');
//   break; 
//   default:
//     console.log('No level found');
//     break;
//  }

// if( level === 1 ) {
//   console.log('You are on level 1');
// } else if(level === 2 ) {
//   console.log('You are on level 2');
// }
// else {
//   console.log('No level found');
// }

  // ....... code

  // const drinkOrder = ( drink, size ) => {

   //  switch( drink ) {
  //     case 'cola':
  //       console.log( `${size} : ${drink}` );
  //       break;
  //     case 'lemonade':
  //       console.log( `${size} : ${drink}` );
  //       break;
  //     case 'orangeade':
  //       console.log( `${size} : ${drink}` );
  //       break;   
  //       default:
  //         console.log(`We currently dont have your ${drink} in stock`);
  //         break;

  //   }

  // }

  // drinkOrder('apple juice', 'extra large');

  // const calculator=  ( num1, num2, operator ) => {
  //   switch(operator) {

  //     case '+':
  //       console.log( `${num1} + ${num2} = ${num1 + num2}` );
  //       break;

  //     case '-':
  //       console.log( `${num1} - ${num2} = ${num1 - num2}` );
  //       break;
          
  //     case '/':
  //       console.log( `${num1} / ${num2} = ${num1 / num2}` );
  //       break;

  //     case '*':
  //       console.log( `${num1} * ${num2} = ${num1 * num2}` );
  //       break;

  //     default:
  //       console.log(`The ${operator} that you chose is invalid`);
  //       break;
  //   }
  // }

  // calculator(5,5, '+');
  // calculator(5,5, '-');
  // calculator(5,5, '*');
  // calculator(5,5, '/');

  // const product = [productName, price, quantity, inStock, discountAmount ];

  // let firstItem = product [0];
  // let lastItem = product [product.length -1];

  // console.log( firstItem, lastItem );

  const product2 = {
    "product name" : 'Apples',
    price: 1.60,
    quantity: 6,
    inStock: true,
    discountAmount: 0.20,
  };

  // console.log(`Before : ${product2.price} `) ;

  product2.price = 1.25; // Modifying product price
  product2.colour = 'Green'; // Adding to the object

  // console.log(`After : ${product2.price}`);

  // console.dir( product2 ); // helps console the object
  // console.table( product2 ); // helps console the object

  // console.log( product2.colour );

  // const productName = product ["product name"];
  // console.log( product.price ); // dot notation
  // console.log( product["price"] ); // square bracket notation
  // console.log( product["product name"]); // square bracket notation


  // for ( start, condition, step ) {

  // }

  // let colours = ['Green', 'Orange', 'Blue', 'Brown', 'Pink', 'Purple' ];

  // for (let index =0; index <colours.length; index++) {
  // console.log(colours[index] );
  //  }


  // function multiply( num, maxNum){
  //   for (let counter = 1; counter <= maxNum; counter++ ){

  //     let multiplyBy = num;
  //     let result = counter * multiplyBy;
  //   console.log( ` ${counter} * ${num} = ${result}` )
    
  //   }
  // }

 //  multiply( 8,16);

// function totalPriceOfShopping( arr ) {
//   let totalPrice = 0;
//   // console.log( arr[0]);
  
// for( let index = 0; index < arr.length; index++ )  {
//   totalPrice = totalPrice + (arr[index].price * arr[index].quantity);
  
//   }

//   return totalPrice.toFixed(2); 

// }

// //console.log( totalPriceOfShopping( shoppingBasket ) ) ;

// function discountType( arr, type, discount ) {
//   let totalPrice = 0;

//   for( let index =0; index < arr.length; index++){

//     if( arr[index].type === type ){

//       let discountAmount = discount * ( arr[index].price * arr[index].quantity) / 100;
//       totalPrice = totalPrice + ( arr[index].price * arr[index].quantity - discountAmount);
   
//     } else{

//       totalPrice = totalPrice + ( arr[index].price * arr[index].quantity );
//     }

    
//   } // end of loop

//   return totalPrice.toFixed(2);
// }
// console.log( discountType( shoppingBasket, 'vegetables', 20) ) ;
// console.log( discountType( shoppingBasket, 'toiletries', 50) ) ;
// console.log( discountType( shoppingBasket, 'beverages', 10) ) ;

// console.log(discountToiletries( shoppingBasket ));

// shoppingBasket.forEach( item => console.log( item );


// for( let index = 0; index < shoppingBasket.length; index++){
//   console.log( shoppingBasket[index]);
// }

// map, filter, reduce - High Level functions



// const newArray = arr.map( element => element + 2 );

// console.log( arr, newArray);

// filter 
// const moreThanThree = arr.filter( (element) => {
//   return element > 3;
// });


// const moreThanThree = arr.filter(element => element > 3);

// console.log( moreThanThree);

// reduce

// let arr = [1,2,3,4,5];

// const total = arr.reduce( (acc, curr ) => {
//   return acc + curr;
// }, 0);

// const total = arr.reduce( (acc, curr ) => acc + curr, 0);

// console.log( total );

// const obj = {
//   name: 'Luke',
//   age: 37,
//   profession: 'web developer'
// }

// // for in loop for objects

// for( let key in obj) {
//   console.log( `${key} : ${obj[key]} ` );
// }

const heading1 = document.querySelector('h1');
