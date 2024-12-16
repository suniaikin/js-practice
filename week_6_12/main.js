let userChoice;
let computerChoice;
let isWinner = false;

while (!isWinner) {
  userChoice = prompt("Выберите камень, ножницы или бумага:");
  userChoice = userChoice.toLowerCase();
  console.log(userChoice);

  let randomNumber = Math.floor(Math.random() * 3); //случайный выбор числа от 0 до 1, умноженный на 3

  //   if (randomNumber === 0) {
  //     computerChoice = "камень";
  //   } else if (randomNumber === 1) {
  //     computerChoice = "ножницы";
  //   } else {
  //     computerChoice = "бумага";
  //   }

  switch (randomNumber) {
    case 0: {
      computerChoice = "камень";
      break;
    }
    case 1: {
      computerChoice = "ножницы";
      break;
    }
    case 2: {
      computerChoice = "бумага";
      break;
    }
  }

  if (
    userChoice === "камень" ||
    userChoice === "ножницы" ||
    userChoice === "бумага"
  ) {
    alert(`Компьютер выбрал "${computerChoice}"`);

    if (userChoice === computerChoice) {
      alert("Ничья, играем еще раз!");
    } else {
      const isUserWinner =
        (userChoice === "камень" && computerChoice === "ножницы") ||
        (userChoice === "ножницы" && computerChoice === "бумага") ||
        (userChoice === "бумага" && computerChoice === "камень");
      const message = isUserWinner ? "Ты выиграл!!!" : "Выиграл компьютер...";

      alert(message);
      isWinner = true;
    }

    //     if (userChoice === computerChoice) {
    //       alert("Ничья, играем еще раз!");
    //     } else if (
    //       (userChoice === "камень" && computerChoice === "ножницы") ||
    //       (userChoice === "ножницы" && computerChoice === "бумага") ||
    //       (userChoice === "бумага" && computerChoice === "камень")
    //     ) {
    //       alert("Ты выиграл!!!");
    //       isWinner = true;
    //     } else {
    //       alert("Выиграл компьютер...");
    //     }
  } else {
    alert("Введи корректное значение");
  }
}

computerChoice = console.log(userChoice, computerChoice); //показ случайного числа в консоли
