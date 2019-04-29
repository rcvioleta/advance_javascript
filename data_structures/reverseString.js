function reverse(str) {
  if (!str || str.length < 2 || typeof str !== "string") {
    return "Invalid argument";
  }
  const strArr = str.split("");
  let reversedString = [];

  for (let i = strArr.length - 1; i >= 0; i--) {
    reversedString.push(strArr[i]);
  }

  return reversedString.join("");
}

console.log(reverse("Hi My name is John Doe"));

const reverseWord = str =>
  str
    .split(" ")
    .map(word => [...word].reverse().join(""))
    .join(" ");

console.log(reverseWord("Hi My name is John Doe"));
