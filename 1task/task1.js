// Создать переменные num1, num2 которые пользователь вводит с клавиатуры
// Проверьте, что переменная num1 равна или меньше 1, а переменная num2 больше или равна 3.
// const num1 = prompt('Введите число 1');
// const num2 = prompt('Введите число 2');
const num1 = prompt(`Введите число 1`);
const num2 = prompt(`Введите число 2`);

switch (true) {
  case num1 <= 1:
    alert(`Первое введенное число ${num1} меньше или равен 1`);
    break;
  case num1 > 1:
    alert(`Первое введенное число ${num1} больше 1`);
    break;
  default:
    break;
}
switch (true) {
  case num2 >= 3:
    alert(`Второе введенное число ${num2} больше или равен 3`);
    break;
  case num2 < 3:
    alert(`Второе введенное число ${num2} меньше 3`);
    break;
  default:
    break;
}
// Эталонное решение
// let num1 = Number(prompt(''));

// alert((num1===1 || num1<1) ? `переменная ${num1} равна или меньше 1`: `другое`)

// let num2 = Number(prompt(''));

// alert((num2>3 || num2===3) ? `переменная ${num2} больше или равна 3`: `другое`)


// console.log((num1<=1) ? `Число ${num1} меньше или равен 1` : (num1>1) ? `Число ${num1} больше 1`: `Число ${num1} равно 1`);

// switch (true) {
//       case num1<=1:
//             console.log("Число меньше или равно 1");
//             break;
//       case num1>1:
//             console.log("Число больше 1");
//       default:
//             break;
// }
// switch (true) {
//       case num2>=3:
//             console.log("Число больше или равено 3");
//             break;
//       case num2<3:
//             console.log("Число меньше 3");
//       default:
//             break;
// }

// if (num1<=1) {
//       console.log("Число 1 меньше или равно 1");
// }
// else{
//       console.log("Число больше 1");
// }
// if (num2>=3) {
//       console.log("Число больше или равен 3");
// } else {
//       console.log("Число меньше 3");
// }
