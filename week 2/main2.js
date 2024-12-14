// const location_1 = 3;
// const location_2 = 4;
// const location_3 = 5;

// const guess = 4;
// if (guess === location_1 || guess === location_2 || guess === location_3) {
//   alert("HIT!");
// } else {
//   alert("MISS!");
// }

// if (guess === location_1) {
//   alert("HIT!");
// } else if (guess === location_2) {
//   alert("HIT!");
// } else if (guess === location_3) {
//   alert("HIT!");
// } else {
//   alert("MISS!");
// }

// if (inStock === true) {
//   if (onSale === true) {
//     alert("Take It Now!");
//   }
// }

// if (inStock === true && onSale === true) {
//   alert("BUY!");
// }

const inStock = true;
const onSale = true;
const price = 100;

if (inStock === true && (onSale === true || price < 80)) {
  alert("BUY NOW!");
}
