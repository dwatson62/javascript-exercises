Array.prototype.select = function(matcher) {
  return this.filter(function(element) {
    return element[0].match(matcher);
  });
};

var selectElementsStartingWithA = function(array) {
  return array.select('a');
};

var selectElementsStartingWithVowel = function(array) {
  return array.select(/[aeiou]/);
};

var removeNullElements = function(array) {
  return array.reject(null);
};

Array.prototype.reject = function(matcher) {
  return this.filter(function(element) {
    return element !== matcher;
  });
};

var removeNullAndFalseElements = function(array) {
  array = array.reject(false);
  return array.reject(null);
};

String.prototype.reverse = function() {
  return this.split('').reverse().join('');
};

Array.prototype.reverseEach = function() {
  var result = [];
  this.forEach(function(element) {
    result.push(element.reverse());
  });
  return result;
};

var reverseWordsInArray = function(array) {
  return array.reverseEach();
};

var everyPossiblePair = function(array) {
  return 'Write your method here';
};

var allElementsExceptFirstThree = function(array) {
  return array.splice(3, array.length);
};

var addElementToBeginning = function(array, element) {
  array.unshift(element);
  return array;
};

var sortByLastLetter = function(array) {
  array = array.reverseEach();
  array = array.sort();
  return array.reverseEach();
};

var getFirstHalf = function(string) {
  return string.slice(0, Math.ceil(string.length / 2));
};

var makeNegative = function(number) {
  if (number > 0) { number *= -1; }
  return number;
};

var numberOfPalindromes = function(array) {
  var count = 0;
  array.forEach(function(word) {
    if (word.reverse() == word) { count ++; }
  });
  return count;
};

Array.prototype.sortLength = function() {
  this.sort(function (a, b) {
    return a.length - b.length;
  });
  return this;
};

var shortestWord = function(array) {
  return array.sortLength()[0];
};

var longestWord = function(array) {
  return array.sortLength().reverse()[0];
};

Array.prototype.sum = function(start) {
  var total = start;
  this.forEach(function(item){
    total += parseInt(item, 10);
  });
  return total;
};

var sumNumbers = function(array) {
  return array.sum(0);
};

var repeatElements = function(array) {
  var newarray = [];
  for (i = 0; i < 2; i ++) {
    array.forEach(function(item) { newarray.push(item); });
  }
  return newarray;
};

var stringToNumber = function(string) {
  return parseInt(string, 10);
};

var calculateAverage = function(array) {
  return array.sum(0) / array.length;
};

var getElementsUntilGreaterThanFive = function(array) {
  var index = array.findIndex(function(item) {
    return item > 5;
  });
  array.splice(index, array.length);
  return array;
};

var convertArrayToObject = function(array) {
  return 'Write your method here';
};

Array.prototype.includes = function(letter) {
  var result = this.filter(function(item) {
    return item === letter;
  });
  return result.length === 1;
};

var getAllLetters = function(array) {
  var newarray = [];
  array.forEach(function(item) {
    item.split('').forEach(function(letter) {
      if (newarray.includes(letter) === false) {
        newarray.push(letter);
      }
    });
  });
  return newarray.sort();
};

var swapKeysAndValues = function(object) {
  return 'Write your method here';
};

var sumKeysAndValues = function(object) {
  var total = Object.keys(object).sum(0);
  Object.keys(object).forEach(function(item) {
    total += parseInt(object[item], 10);
  });
  return total;
};

var removeCapitals = function(string) {
  return string.split('').filter(function(item) {
    return !item.match(/[A-Z]/);
  }).join('');
};

var roundUp = function(number) {
  return Math.ceil(number);
};

var formatDateNicely = function(date) {
  return 'Write your method here';
};

var getDomainName = function(string) {
  var index = string.split('').findIndex(function(item) {
    return item === '@';
  });
  return string.slice(index + 1, string.length);
};

var titleize = function(string) {
  return 'Write your method here';
};

var checkForSpecialCharacters = function(string) {
  return string.match(/[@!]/) !== null;
};

var squareRoot = function(number) {
  return Math.sqrt(number);
};

var factorial = function(number) {
  var total = 1;
  for (i = 1; i <= number; i ++) { total *= i; }
  return total;
};

var findAnagrams = function(string) {
  return 'Write your method here';
};

var convertToCelsius = function(number) {
  return Math.ceil((number - 32) * 5/9);
};

var letterPosition = function(array) {
  return array.map(function(item) {
    return item.toLowerCase().charCodeAt() - 96;
  });
};
