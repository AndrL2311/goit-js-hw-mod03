// Задание
// Выполни рефакторинг функции countProps(object) используя метод Object.keys() и,
//     возможно, цикл for...of.

// Тесты
// Объявлена функция countProps(object)
// Вызов countProps({}) возвращает 0
// Вызов countProps({ name: "Mango", age: 2 }) возвращает 2
// Вызов countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }) возвращает 3
// Функция подсчитывает только собственные свойства объекта
// Функция использует метод Object.keys() и, возможно, цикл for...of

function countProps(object) {
  // Change code below this line
  let propCount = 0;

  for (const key of Object.keys(object)) {
    propCount += 1;
  }

  return propCount;
  // Change code above this line
}
