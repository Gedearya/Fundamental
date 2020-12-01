let products = [
  {
    name: "Nasi Goreng Ayam",
    price: 15000,
  },
  {
    name: "Bakmie Goreng Sapi",
    price: 20000,
  },
  {
    name: "Soto Ayam",
    price: 18000,
  },
  {
    name: "Nasi Bakar Ikan Asin",
    price: 10000,
  },
  {
    name: "Ikan Nila Bakar",
    price: 25000,
  },
];

let fiterbyprice = products.filter(function (product) {
  return product.price <= 18000;
});

console.log(fiterbyprice);

// Output :
// [
//     { name: 'Nasi Goreng Ayam', price: 15000 },
//     { name: 'Soto Ayam', price: 18000 },
//     { name: 'Nasi Bakar Ikan Asin', price: 10000 }
//   ]