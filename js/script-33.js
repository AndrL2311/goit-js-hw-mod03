// Задание
// Функция findMatches() принимает произвольное количество аргументов. Первым аргументом всегда будет массив чисел, а остальные аргументы будут просто числами.

// Дополни код функции так, чтобы она возвращала новый массив matches, в котором будут только те аргументы, начиная со второго, которые есть в массиве первого аргумента.

// Например, findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) должна вернуть массив [1, 2], потому что только они есть в массиве первого аргумента.

// Тесты
// Объявлена функция findMatches()
// Вызов findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) возвращает [1, 2]
// Вызов findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2) возвращает [17, 89, 2]
// Вызов findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41) возвращает [24, 9, 41]
// Вызов findMatches([63, 11, 8, 29], 4, 7, 16) возвращает []

// Change code below this line
function findMatches(...args) {
  const matches = []; // Don't change this line
  for (let i = 1; i < args.length; i += 1) {
    if (args[0].includes(args[i])) {
      matches.push(args[i]);
    }
  }
  // Change code above this line
  return matches;
}
console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));
