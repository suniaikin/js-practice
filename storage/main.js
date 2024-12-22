const inStock = true
const onSale = true

// if (inStock === true) {
// 	if (onSale === true) {
// 		alert("We do buy it!")
// 	}
// }

// if (inStock === true && onSale === false) {
// 	alert("buy it!")
// }

const price = 100;

if (inStock === true && (onSale === true || price < 80)) {
	alert("buy it!")
} else {
	alert("You don't need it")
}


