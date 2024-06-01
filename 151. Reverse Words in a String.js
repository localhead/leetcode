var reverseWords = function (s) {
  const initArr = s.split(" ");

  const noSpaceArr = [];

  initArr.forEach((item) => {
    if (item !== "") noSpaceArr.push(item);
  });

  //console.log(noSpaceArr.reverse().join(" "));
  return noSpaceArr.reverse().join(" ");
};

reverseWords("the sky is blue");
