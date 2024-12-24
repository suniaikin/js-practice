function makeTea(cups, tea) {
	console.log("Brewing " + cups + " cups of " + tea);
}

//правильный вызов функции
makeTea(3, "")

//недостающие аргументы функции
makeTea(3)

//"лишние" аргумент функции
makeTea(3, "Earl Grey", "hey ma!", 42)

//аргументы переданы в неверном порядке
makeTea("Earl Grey", 3)

//функция без параметров
