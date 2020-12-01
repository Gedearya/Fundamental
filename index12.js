// buatlah sebuah function yang menerima parameter array of object {name, price}, dan string
// yang akan meng-filter property name yang mengandung value dari string
// atau bisa disebut search

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

function searchbyname(products, keyword){

}

searchbyname(products, "nasi");
// output:
// [{
// 	name: "Nasi Goreng Ayam",
// 	price: 15000
// }, {
// 	name: "Nasi Bakar Ikan Asin",
// 	price: 10000
// }]



// buatlah sebuah function yang menerima parameter array of object {name, price}, dan integer
// yang akan meng-filter property price yang <= price parameter
// atau bisa disebut filterbyprice

function filterbyprice(products, price){

}

filterbyprice(products, 18000)
// output:
// [{
	// name: "Nasi Goreng Ayam",
	// price: 15000
// }, {
	// name: "Soto Ayam",
	// price: 18000
// }, {
// 	name: "Nasi Bakar Ikan Asin",
// 	price: 10000
// }]