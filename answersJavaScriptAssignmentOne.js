// 1. Write a JavaScript function to check whether an `input` is a string or not.
const is_string = (input) => {
  if (Object.prototype.toString.call(input) === "[object String]") return true;
  else return false;
};

console.log(is_string("w3resource"));
console.log(is_string([1, 2, 4, 0]));

// 2. Write a JavaScript function to check whether a string is blank or not.
const is_Blank = (s) => {
  if (s.length === 0) return true;
  else return false;
};

console.log(is_Blank(''));
console.log(is_Blank("abc"));

// 3. Write a JavaScript function to split a string and convert it into an array of words
const string_to_array = (arr) => {
  return arr.split(" ");
};

console.log(string_to_array("Robin Singh"));

// 4. Write a JavaScript function to extract a specified number of characters from a string.
const truncate_string = (s, num) => {
  return s.slice(0, num);
};

console.log(truncate_string("Robin Singh", 4));

// 5. Write a JavaScript function to convert a string in abbreviated form.
const abbrev_name = (s) => {
  let [firstName, secondName] = s.split(" ");
  return `${firstName} ${secondName.slice(0, 1)}.`;
};
console.log(abbrev_name("Robin Singh"));

// 6. Write a JavaScript function that takes a string which has lower and upper case letters as a parameter and converts upper case letters to lower case, and lowercase letters to uppercase.
swapcase = function swapcase(str) {
  return str.replace(/([a-z]+)|([A-Z]+)/g, function (match, chr) {
    return chr ? match.toUpperCase() : match.toLowerCase();
  });
};
console.log(swapcase("AaBbc"));

// 7. Write a JavaScript function to convert a string into camel case
const camelize = (str) => {
  return str
    .replace(/(?:^\w|\[A-Z\]|\b\w)/g, (word, index) => {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+/g, "");
};

console.log(camelize("JavaScript Exercises"));
console.log(camelize("JavaScript exercises"));
console.log(camelize("JavaScriptExercises"));

// 8. Write a JavaScript function to concatenate a given string n times (default is 1)
repeat = function repeat(str, count) {
  if (typeof count == "undefined") {
    count = 1;
  }
  return count < 1 ? "" : new Array(count + 1).join(str);
};
console.log(repeat("Ha!"));
console.log(repeat("Ha!", 2));
console.log(repeat("Ha!", 3));

// 9. Write a JavaScript function to insert a string within a string at a particular position (default is 1).
insert = function insert(main_string, ins_string, pos) {
  if (typeof pos == "undefined") {
    pos = 0;
  }
  if (typeof ins_string == "undefined") {
    ins_string = "";
  }
  return main_string.slice(0, pos) + ins_string + main_string.slice(pos);
};
console.log(insert("We are doing some exercises."));
console.log(insert("We are doing some exercises.", "JavaScript "));
console.log(insert("We are doing some exercises.", "JavaScript ", 18));

// 10. Write a JavaScript function to truncate a string if it is longer than the specified number of characters. Truncated strings will end with a translatable ellipsis sequence ("...") (by default) or specified characters.
text_truncate = function (str, length, ending) {
  if (length == null) {
    length = 100;
  }
  if (ending == null) {
    ending = "...";
  }
  if (str.length > length) {
    return str.substring(0, length - ending.length) + ending;
  } else {
    return str;
  }
};
console.log(text_truncate("We are doing JS string exercises."));
console.log(text_truncate("We are doing JS string exercises.", 19));
console.log(text_truncate("We are doing JS string exercises.", 15, "!!"));
