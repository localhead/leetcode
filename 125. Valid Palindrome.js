var isPalindrome = function (s) {
  const arr = s.split("");

  const arrFiltered = arr.filter((x) => {
    return (
      (x.charCodeAt(0) >= 65 && x.charCodeAt(0) <= 90) ||
      (x.charCodeAt(0) >= 97 && x.charCodeAt(0) <= 122) ||
      (x.charCodeAt(0) >= 48 && x.charCodeAt(0) <= 57)
    );
  });

  const arrFilteredReversed = [...arrFiltered];

  arrFilteredReversed.reverse();

  //console.log(arrFiltered.join(""), arrFilteredReversed.join(""));

  if (
    arrFiltered.join("").toLowerCase() ===
    arrFilteredReversed.join("").toLowerCase()
  ) {
    return true;
  }

  return false;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
