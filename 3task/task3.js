// В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).
const day = 19;
switch (true) {
  case day >= 20:
    console.log(`Число попадает в третью декаду месяца`);
    break;
  case day >= 10:
    console.log(`Число попадает во вторую декаду месяца`);
    break;
  case day >=1:
    console.log(`Число попадает в первую декаду месяца`);
    break;
  default:
    break;
}

// Идеальное решение
// let number = Math.ceil(Math.random() * 31);
// if (number <= 10) {
//       alert(`${number} - первая декада`)
// } else if (number >= 11 && number <=20){
//       alert(`${number} - вторая декада`)
// }
// else {
//       alert(`${number} - третья декада`)
// }