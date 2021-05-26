// Задание
// Добавь объекту atTheOldToad метод getPotions(), который просто возвращает значение свойства potions.

// Тесты
// Объявлена переменная atTheOldToad
// Значение переменной atTheOldToad это объект
// Значение свойства atTheOldToad.potions это массив ['Speed potion', 'Dragon breath', 'Stone skin']
// Значение свойства atTheOldToad.getPotions это метод объекта
// Вызов метода atTheOldToad.getPotions() возвращает ['Speed potion', 'Dragon breath', 'Stone skin']
// Редактор JavaScript:
// 1
// const atTheOldToad = {
// 2
//   // Change code below this line
// 3
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
// 4
//   // Change code above this line
// 5
// };
// 6
// ​
// Проверить
// Сбросить
// Скрыть секцию результатов
// Результаты:
// (обновляются при нажатии на кнопку - Проверить)

const atTheOldToad = {
  // Change code below this line
  potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
  // Change code above this line
  getPotions(){
  return this.potions;
  },
};

