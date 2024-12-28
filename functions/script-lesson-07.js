// let gold = 100 // имееющееся золото

// let buildingName = 'Tower' // название здания
// let costGold = 30 // стоимость здания

// // // проверяем, хватает ли нам золота для строительства
// // if (gold >= costGold) {
// // 	// вычитаем золото
// // 	gold -= costGold // то же, что gold = gold - costGold
// // 	console.log(`${buildingName}: work complete!`);
// // } else {
// // 	console.log(`${buildingName}: not enough resources!`);
// // }


// // // Попытка построить кузницу
// // buildingName = 'Blacksmith'
// // costGold = 140

// // if (gold >= costGold) {
// // 	gold -= costGold
// // 	console.log(`${buildingName}: work complete!`)
// // } else {
// // 	console.log(`${buildingName}: not enough resources!`)
// // }


// function createBuilding(buildingName, costGold) {
// 	const hasEnoughGold = gold >= costGold
// 	if (hasEnoughGold) {
// 		gold -= costGold
// 		console.log(`${buildingName}: work complete!`)
// 	} else {
// 		console.log(`${buildingName}: not enough resources!`)
// 	}

// }

// createBuilding('Tower', 30) // Строим башню, золота хватает
// createBuilding('Blacksmith', 140) // Строить кузницу, золота не хватает


// // Функция для увеличения ресурсов
// // currentAmount — текущее количество ресурса.
// // increment — количество, на которое нужно увеличить ресурс.
// // Функция возвращает новое количество ресурса, полученное путем сложения currentAmount и increment.
// function increaseResource(currentAmount, increment) {
// 	return currentAmount + increment
// }
// // Увеличение золота
// gold = increaseResource(gold, 50)
// console.log(`New amount of gold: ${gold}`)

// // Вызов функции с параметром
// gold = increaseResource(gold, 100)
// console.log('New amount of gold: ' + gold) // New amount of gold: 180


let resource = 'lumber'

manageResources()

function manageResources() {
	let resource = 'crystals'
	if (true) {
		let resource = 'stone'
		console.log(resource) // stone
	}
	console.log(resource) // crystals
}

console.log(resource) // lumber

if (true) {
	resource = 'gold'
	console.log(resource) // gold
}
console.log(resource) // gold