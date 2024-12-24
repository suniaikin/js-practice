gold = 100 //количество средств
let buildingName = "Tower" //название здания
let costGold = 30 //стоимость постройки

// createBuilding - название функции
//buildingName - переменная для очередного здания
//buildingCost - переменная стоимости очередного здания
//hasEnoughGold - переменная для разницы между gold и buildingCost


function createBuilding(buildingName, buildingCost) { //запуск функции, чтобы узнать разницу между gold и buildingCost
	let hasEnoughGold = gold >= buildingCost // задаем переменную для сравнения
	if (hasEnoughGold) {
		gold = gold - buildingCost; //вычисляем разницу между капиталом и ценой здания
		console.log(`${buildingName}: work completed`) //если gold больше или равно buildingCost
	} else {
		console.log(`${buildingName}: not enough resources`) //если gold меньше buildingCost
	}
	console.log("My gold: ", gold); //выводим полученное значение
}
createBuilding("Tower", 70)
createBuilding("Garage", 150)
createBuilding("CatHouse", 10)

function incrementResource(currentAmountGold, increment) {
	return currentAmountGold + increment
}

const totalGold = incrementResource(gold, 100)
console.log("Total amount gold: ", totalGold);
console.log("My gold: ", gold);
