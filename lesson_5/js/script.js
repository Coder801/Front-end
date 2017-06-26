// ## 4
// Создайте беспрерывный цикл который принимает от пользователя числа, и суммирует
// Цикл прирывается только в том случае если пользователь ввел что либо кроме числа
// После прерывания цикла выводится сумма введеных чисел

 

// * Your code Start *
var sum = 0, x;

while(true) {
  x = parseInt(prompt('Please enter number', 0), 10);
  if(typeof x !== 'number' || isNaN(x)) {
    break; //Как иначе сделать проверку на число?
  }
  sum += x;
  //alert (typeof(x)) // Ошибка! При введенных строковых данных выдает Number!
  // Да, ты же при помощи parseInt преобразуешь тип в число. При введении сроки тебе вернется Nan а Nan - число.
  // Тоесть тебе нужно проверить входные данные на Nan
}

alert('Sum: ' + sum)


// * Your code End *

// ## 5
// Найдите сумму  1 + 2 + 3 + ... + N, где число N вводится пользователем из prompt



// * Your code Start *

function sumTo(n) {
  var sum = 0;
  for (var i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}

alert(sumTo(parseInt(prompt('Please enter number', 0), 10)));

// * Your code End *

// ## 6
// Нарисовать шахматную доску используя вложенные циклы (Доска находится в файле html)
// Размер шахматной доски стандартны 8х8
// Функция drawFractions - вспомогательная, при ее вызове в к блоку board в html добаляется 1 квардрат доски
// Ее можно не трогать
// Например что бы нарисовать 1 квадрат нужно вызвать ее 1 раз: drawFraction();
// Так же доски должны иметь черный\белый цвет. Реализовать это можно при помощи как css так и js

var chessBoard = document.querySelector('.board');
const size = 9;
var count = 0;
while(count < Math.pow(size, 2)) {
  var chessCell = document.createElement('div');
  chessBoard.appendChild(chessCell);
  if (count % 2 == 0) { //не смог найти внятного решения для отображения шахматки в 8 столбцов
    chessCell.classList.add('white');
  } else {
    chessCell.classList.add('black');
  }
  count++;
}

// Тут было все проще
// Функцию drawFraction() которую я давал изначально, просто нужно было вызвать во вложенном цикле (для оси x и y), для рисования можно было использовать css
