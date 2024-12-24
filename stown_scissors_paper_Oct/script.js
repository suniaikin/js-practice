-let userChoiсe;
let computerChoiсe;
let isWinner = false;

userChoiсe = prompt("Выбери камень, ножницы или бумага:");

let randomNum = Math.floor(Math.random() * 3);

if (randomNum === 0) {
	computerChoiсe = "камень";
} else if (randomNum === 1) {
	computerChoiсe = "ножницы";
} else {
	computerChoiсe = "бумага";
}
if (
	userChoiсe === "камень" ||
	userChoiсe === "камень" ||
	userChoiсe === "бумага"
) {
}

if (userChoiсe === computerChoiсe) {
	alert("Ничья! Играем ещё раз!");
} else if ((userChoiсe === "камень" && computerChoiсe === "ножницы") ||
	(userChoiсe === "ножницы" && computerChoiсe === "бумага") ||
	(userChoiсe === "бумага" && computerChoiсe === "камень") || ) {
	alert("Ты выиграл!")
	isWinner = true;
} else {
	alert("Компьютер выиграл!")
	isWinner = true
}

сonsole.log(userChoiсe, computerChoiсe);
