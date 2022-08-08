//1. Запросите у пользователя его имя и выведите в ответ:  «Привет, name!». 
/*
name = prompt ('enter your name','Alisa');
alert('yor name '+(name)+'!');
*/
//2. Запросите у пользователя год его рождения, посчитайте, сколько ему лет и выведите результат. Текущий год укажите в коде как константу. 
/*
const yearNow = 2022;
userYear = prompt ('enter your year of birth','1994');
let manyYears = yearNow - userYear;
alert (' you are now ' + manyYears + ' years old ');
*/
//3. Запросите у пользователя длину стороны квадрата и выведите периметр такого квадрата. 
/*
side = prompt ('enter the side of the square','12');
let squareArea = side * 4;
alert (' square area is '+ squareArea + ' squared ');
*/
//4. Запросите у пользователя радиус окружности и выведите площадь такой окружности. 
/*
circleRadius = prompt ('enter the radius of the circle','5');
let PI = 3.14;
let areaСircle = PI*(circleRadius * 4);
alert (' the area of the circle is '+ areaСircle + ' squared ');
*/
//5. Запросите у пользователя расстояние в км между двумя городами и за сколько часов он хочет добраться. Посчитайте скорость, с которой необходимо двигаться, чтобы  успеть вовремя. 
/*
distanceBetweenCities = prompt ('set the distance between cities in km','350');
travelTime = prompt ('Set travel time in hours','3');
let travelSpeed = distanceBetweenCities / travelTime;
alert (' travel speed is ' + travelSpeed);
*/
//6. Реализуйте конвертор валют. Пользователь вводит доллары, программа переводит в евро. Курс валюты храните в  константе. 
/*
const euro = 32.20;
const dollar = 31.10;
userSumma = prompt ('Enter dollar amount $','100');
let calcEuro = userSumma * dollar / euro;
alert (' Euro '+calcEuro);
*/
//7. Пользователь указывает объем флешки в Гб. Программа должна посчитать сколько файлов размером в 820 Мб помещается на флешку 
/*
const fails = 820;
const sizeGB = 1000;
userCard = prompt ('enter card size is \"GB\"','1');
let cardСapacity = userCard * sizeGB / fails;  
alert (' Files fit on the map above ' + cardСapacity);
*/
//8. Пользователь вводит сумму денег в кошельке и цену одной шоколадки. Программа выводит сколько шоколадок может купить пользователь и сколько сдачи у него останется.  
/*
money = prompt ('Enter amount $','100');
chocolatePrice = prompt ('Enter the cost of the chocolate','12');
let calcSumma = money/chocolatePrice;
alert (' You can buy chocolates ' +calcSumma);
let balanceAmount = money%chocolatePrice;
alert (' your change ' + balanceAmount +' $ ');
*/

//9. Запросите у пользователя трехзначное число и выведите его задом наперед. Для решения задачи вам понадобится оператор % (остаток от деления). 
//решение не найдено. Могу спиздить код у других но там ничего не понятно.
/*
threeDigitNumber = prompt ('enter a three-digit number','123');
let number1 = +threeDigitNumber % 10;
let subtraction = +threeDigitNumber - number1;
let division = subtraction / 10;
let number2 = division % 10;
let subtraction1 = division - number2;
let number3 = subtraction1 / 10;
alert (String(+number1)+String(+number2)+String(+number3));
*/
//10. Запросите у пользователя целое число и выведите в ответ, четное число или нет. В задании используйте логические операторы. В задании не надо использовать if или switch
/*
checkNumber = prompt ('enter the number to be checked', '12');
let examination = checkNumber % 2;
let number = examination ? 'not even' : 'even';
alert (number);
*/


