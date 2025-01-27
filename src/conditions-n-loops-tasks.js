/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  if (a >= b && a >= c) {
    return a;
  }
  if (b >= a && b >= c) {
    return b;
  }
  return c;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  if (queen.x === king.x || queen.y === king.y) {
    return true;
  }
  if (Math.abs(queen.x - king.x) === Math.abs(queen.y - king.y)) {
    return true;
  }
  return false;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  function checkTriangle() {
    return a + b > c && a + c > b && b + c > a;
  }
  return checkTriangle() && new Set([a, b, c]).size < 3;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  let res = '';
  const tens = Math.floor(num / 10);
  for (let i = 0; i < tens; i += 1) {
    res += 'X';
  }
  const firstTenRoman = [
    '',
    'I',
    'II',
    'III',
    'IV',
    'V',
    'VI',
    'VII',
    'VIII',
    'IX',
  ];
  res += firstTenRoman[num % 10];
  return res;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  const digits = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'point',
  ];
  const n = numberStr.length;
  let res = '';
  let curr = '';
  for (let i = 0; i < n; i += 1) {
    switch (numberStr[i]) {
      case '0':
        curr = digits[Number(numberStr[i])];
        break;
      case '1':
        curr = digits[Number(numberStr[i])];
        break;
      case '2':
        curr = digits[Number(numberStr[i])];
        break;
      case '3':
        curr = digits[Number(numberStr[i])];
        break;
      case '4':
        curr = digits[Number(numberStr[i])];
        break;
      case '5':
        curr = digits[Number(numberStr[i])];
        break;
      case '6':
        curr = digits[Number(numberStr[i])];
        break;
      case '7':
        curr = digits[Number(numberStr[i])];
        break;
      case '8':
        curr = digits[Number(numberStr[i])];
        break;
      case '9':
        curr = digits[Number(numberStr[i])];
        break;
      case '-':
        curr = 'minus';
        break;
      default:
        curr = 'point';
    }
    res += i < n - 1 ? `${curr} ` : curr;
  }
  return res;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  const len = str.length;
  for (let i = 0; i < Math.floor(len / 2); i += 1) {
    if (str[i] !== str[len - i - 1]) {
      return false;
    }
  }
  return true;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 't'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) {
      return i;
    }
  }
  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  let n = num;
  while (n > 0) {
    const currDigit = n % 10;
    if (currDigit === digit) {
      return true;
    }
    n = Math.floor(n / 10);
  }
  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  const n = arr.length;
  const prefix = new Array(n);
  const [ff] = arr;
  prefix[0] = ff;
  for (let i = 1; i < n; i += 1) {
    prefix[i] = prefix[i - 1] + arr[i];
  }
  const prefixOpp = new Array(n);
  prefixOpp[n - 1] = arr[n - 1];
  for (let i = n - 2; i >= 0; i -= 1) {
    prefixOpp[i] = prefixOpp[i + 1] + arr[i];
  }
  for (let i = 0; i < n - 2; i += 1) {
    if (prefix[i] === prefixOpp[i + 2]) {
      return i + 1;
    }
  }
  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const res = new Array(size);
  for (let i = 0; i < size; i += 1) {
    const row = new Array(size);
    for (let j = 0; j < size; j += 1) {
      row[j] = 0;
    }
    res[i] = row;
  }

  let d = 0;
  const di = [0, 1, 0, -1];
  const dj = [1, 0, -1, 0];
  let i = 0;
  let j = 0;
  let i1 = 0;
  let i2 = size;
  let j1 = 0;
  let j2 = size;
  let k = 1;

  while (i1 < i2 && j1 < j2) {
    res[i][j] = k;
    k += 1;
    const nextI = i + di[d];
    const nextJ = j + dj[d];
    if (nextI >= i1 && nextI < i2 && nextJ >= j1 && nextJ < j2) {
      i = nextI;
      j = nextJ;
    } else {
      switch (d) {
        case 0:
          i1 += 1;
          break;
        case 1:
          j2 -= 1;
          break;
        case 2:
          i2 -= 1;
          break;
        case 3:
          j1 += 1;
          break;
        default:
          break;
      }
      d = (d + 1) % 4;
      i += di[d];
      j += dj[d];
    }
  }

  return res;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const n = matrix.length;
  const m = matrix[0].length;
  const mm = matrix;
  const res = new Array(m);
  for (let i = 0; i < m; i += 1) {
    res[i] = new Array(n);
    for (let j = 0; j < n; j += 1) {
      res[i][j] = matrix[n - 1 - j][i];
    }
  }
  for (let i = 0; i < n; i += 1) {
    mm[i] = res[i];
  }
  return mm;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  const res = arr;
  for (let j = 1; j < arr.length; j += 1) {
    const key = res[j];
    let i = j - 1;
    while (i >= 0 && res[i] > key) {
      res[i + 1] = res[i];
      i -= 1;
    }
    res[i + 1] = key;
  }
  return res;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  const n = str.length;
  function multipleP(p1, p2) {
    const res = new Array(n);
    for (let i = 0; i < n; i += 1) {
      res[i] = p1[p2[i]];
    }
    return res;
  }

  function pow(p1, k1) {
    let k = k1;
    let p = p1;
    let res = new Array(n);

    for (let i = 0; i < n; i += 1) {
      res[i] = i;
    }
    while (k > 0) {
      if (k % 2) {
        res = multipleP(res, p);
      }
      k = Math.floor(k / 2);
      p = multipleP(p, p);
    }
    return res;
  }

  const p = new Array(n);
  let right = Math.ceil(n / 2);
  let left = 0;
  for (let i = 0; i < n; i += 1) {
    if (i % 2 === 1) {
      p[right] = i;
      right += 1;
    } else {
      p[left] = i;
      left += 1;
    }
  }

  const pp = pow(p, iterations);
  let res = '';
  for (let i = 0; i < n; i += 1) {
    res += str[pp[i]];
  }
  return res;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  let num = number;
  let n = 0;
  const arr = [];
  while (num > 0) {
    arr[n] = num % 10;
    num = Math.floor(num / 10);
    n += 1;
  }
  arr.reverse();

  const digits = new Array(10).fill(0);
  let currentMax = -1;
  let i;
  for (i = n - 1; i >= 0; i -= 1) {
    if (arr[i] < currentMax) {
      break;
    }
    if (arr[i] > currentMax) {
      currentMax = arr[i];
    }
    digits[arr[i]] += 1;
  }

  let posDigit = -1;
  for (let j = i + 1; j < n; j += 1) {
    if (arr[j] > arr[i] && (posDigit < 0 || arr[j] < arr[posDigit])) {
      posDigit = j;
    }
  }

  digits[arr[posDigit]] -= 1;
  digits[arr[i]] += 1;

  const temp = arr[i];
  arr[i] = arr[posDigit];
  arr[posDigit] = temp;

  let j = i + 1;
  for (let k = 0; k < 10; k += 1) {
    for (let c = 0; c < digits[k]; c += 1) {
      arr[j] = k;
      j += 1;
    }
  }

  return Number(arr.join(''));
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
