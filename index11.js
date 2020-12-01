let products = [{
	name: "Nasi Goreng Ayam",
	price: 15000
}, {
	name: "Bakmie Goreng Sapi",
	price: 20000
}, {
	name: "Soto Ayam",
	price: 18000
}, {
	name: "Nasi Bakar Ikan Asin",
	price: 10000
},{
	name: "Ikan Nila Bakar",
	price: 25000
}];

let ProductsNames = Array.from(products)
console.log(ProductsNames);

// var ProductsNames1 = ProductsNames.includes("name");
// console.log(ProductsNames1);


// let searchbyname = ProductsNames.filter(ProductsName => ProductsName.textContent.includes('Nasi'))

// console.log(searchbyname);


let filteredArray = ProductsNames.filter((item) => {return item === 'Nasi Goreng Ayam'});

console.log(filteredArray)

// function searchbyname(products, keyword){
// return products.filter(function(keyword) {
// return keyword.toLowerCase().indexOf(products.toLowerCase()) > -1;
//  })
// }
  
// const filterItems = (query) => {
//     return products.filter((el) =>
//       el.toLowerCase().indexOf(query.toLowerCase()) > -1
//     );
//   }

// {
// return products.filter ((val) => val.toLowerCase().indexOf(products.toLowerCase()) > -1);
// }

// console.log(filterItems("nasi"))

// function filterItems(products) {
//     return products.filter(function(x) {
//         return x.toLowerCase().indexOf(products.toLowerCase()) > -1;
//     })
//   }

//   console.log(filterItems("nasi")); // ['apple', 'grapes']
//   console.log(filterItems('an')); // ['banana', 'mango', 'orange'




// searchbyname(products, "nasi");


  
//   console.log(filterItems('ap')); // ['apple', 'grapes']
//   console.log(filterItems('an')); // ['banana', 'mango', 'orange']