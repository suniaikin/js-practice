function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        return ('Родители разрешили?');
    }
}

console.log(checkAge(5));
console.log(checkAge(25));

function checkAge(age) {
    return (age > 18) ? true : 'Родители разрешили?';
}
console.log(checkAge(45));
console.log(checkAge(53));


function checkAge(age) {
    return (age > 18) || 'Маленький ещё';
}

console.log(checkAge(5));

