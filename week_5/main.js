// позиция корабля
const randomLoc = Math.floor(Math.random() * 5); // от 0 до 4
const location1 = randomLoc;
const location2 = location1 + 1;
const location3 = location2 + 1;

//потоплен или нет
let isSunk = false;
//предполагаемая пользователем позиция корабля (выстрел)
let attempt;
//добавляем счетчик попаданий
let hits = 0;
// создаем счетчик выстрелов
let attempts = 0;

while (isSunk === false) {
          //строку надо превратить в число, поэтому +
          attempt = +prompt("Fire! Enter a number 0-6");
          if (attempt < 0 || attempt > 6) {
                    alert("Please, enter a valid number");
          } else {
                    //увеличиваем счетчик выстрелов
                    attempts = attempts + 1;
                    //логическое "или"
                    if (
                              attempt === location1 ||
                              attempt === location2 ||
                              attempt === location3
                    ) {
                              alert("HIT");
                              //считаем попадания
                              hits = hits + 1;
                              //если подбили
                              if (hits === 3) {
                                        isSunk = true;
                                        alert("You win!");
                              }
                    } else {
                              alert("FAIL!");
                    }
          }
}

const stats = "You have " + hits + " hits out of " + attempts + " shots.";
alert(stats);
