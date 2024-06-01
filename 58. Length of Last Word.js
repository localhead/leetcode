var lengthOfLastWord = function (s) {
  const arr = s.split(" ");

  const arrNoSpaces = [];

  arr.forEach((item) => {
    if (item !== "") arrNoSpaces.push(item);
  });

  const lastWord = arrNoSpaces[arrNoSpaces.length - 1].length;

  //console.log(arr, arrNoSpaces, lastWord);

  return lastWord;
};

lengthOfLastWord("Hello World");
