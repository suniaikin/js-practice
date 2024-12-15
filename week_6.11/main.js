let userChoice;
let computerChoice;
let isWinner = false;

while (!isWinner) {
  userChoice = prompt('Выбери "камень", "ножницы" или"бумага"'); // значение от пользователя
  userChoice = userChoice.toLowerCase(); // преобразование к нижнему регистру

  let randomNum = Math.floor(Math.random() * 3); //значение от комьютера

  //   if (randomNum === 0) {
  //     computerChoice = "камень";
  //   } else if (randomNum === 1) {
  //     computerChoice = "ножницы";
  //   } else {
  //     computerChoice = "бумага";
  //   }

  switch (randomNum) {
    case 0:
      computerChoice = "камень";
      break;
    case 1:
      computerChoice = "ножницы";
      break;
    case 2:
      computerChoice = "бумага";
      break;
  }

  if (
    userChoice === "камень" ||
    userChoice === "бумага" ||
    userChoice === "ножницы"
  ) {
    alert(`Комьютер выбрал: ${computerChoice}`);
    if (userChoice === computerChoice) {
      alert("Ничья, играем еще раз!");
    } else {
      let isUserWinner =
        (userChoice === "камень" && computerChoice === "ножницы") ||
        (userChoice === "бумага" && computerChoice === "камень") ||
        (userChoice === "ножницы" && computerChoice === "бумага");
      const message = isUserWinner ? "Ты выиграл!" : "Победил компьютер.";
      alert(message);
    }

    //     {
    //       alert("Ты победил!");
    //       isWinner = true;
    //     } else {
    //       alert("Победил комьютер!");
    //       isWinner = true;
    //     }
  } else {
    alert("Выберите корректное значение!");
  }
}
