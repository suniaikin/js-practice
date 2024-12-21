//позиция корабля
const randomlocation = Math.floor(Math.random() * 5)
const location1 = randomlocation;
const location2 = location1 + 1;
const location3 = location2 + 1;

//потоплен или нет
let isSunk = false;
//выстрел
let guess;
//счетчик попаданий
let hits = 0;
//счетчик выстрелов
let guesses = 0;

while (isSunk === false) {
	//превращаем строку в число
	guess = +prompt("Fire! Enter a number 0-6");// проверяем правильность ввода
	if (guess < 0 || guess > 6) {
		alert('Please enter a valid number')
	} else {
		// увеливаем счётчик выстрелов
		guesses = guesses + 1
		//логическое "или"
		if (guess === location1 || guess === location2 || guess === location3) {
			alert("HIT!!!");
			//считаем попадания
			hits = hits + 1;
			//если корабль подбили
			if (hits === 3) {
				isSunk = true;
				alert("Ты подбил корабль!");
			}
		} else {
			alert("MIMO...");
		}
	}
}

const stats = `You made ${hits} hits out of ${guesses} shoots`;
alert(stats)
