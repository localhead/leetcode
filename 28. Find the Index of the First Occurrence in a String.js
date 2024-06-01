var strStr = function (haystack, needle) {
  const lol = haystack.split(needle);
  const kek = lol.join("");

  if (kek.length !== haystack.length) {
    return lol[0].length;
  }

  for (let i = 0; i < haystack.length; i++) {
    if (lol[i] === "") return i;
  }

  if (!lol.includes("")) return -1;
};

console.log(strStr("baab", "ab"));
