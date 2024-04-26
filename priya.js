let value = document.getElementById("value");
let incrementBtn = document.getElementById("increment");
let decrementBtn = document.getElementById("decrement");
let resetBtn = document.getElementById("reset");
let userInput = document.getElementById("input-field");

let decrementByUserInput = document.getElementById("de-user-input");
let incrementByUserInput = document.getElementById("in-user-input");

incrementByUserInput.onclick = () => {
  let userValue = userInput.value;
  let covertToNumber = Number(userValue);
  let convertNumberValue = Number(value.textContent);
  let total = covertToNumber + convertNumberValue;
  value.innerHTML = total;
};
decrementByUserInput.onclick = () => {
  let userValue = userInput.value;
  let covertToNumber = Number(userValue);
  let convertNumberValue = Number(value.textContent);

  let total = convertNumberValue - covertToNumber;
  value.innerHTML = total;
};

incrementBtn.onclick = () => {
  let convertNumberValue = Number(value.textContent);
  let addPlusOne = convertNumberValue + 1;
  value.innerHTML = addPlusOne;
};
decrementBtn.onclick = () => {
  let convertNumberValue = Number(value.textContent);
  let subMinOne = convertNumberValue - 1;
  value.innerHTML = subMinOne;
};
resetBtn.onclick = () => {
  let convertNumberValue = Number(value.textContent);
  let subMinOne = 0;
  value.innerHTML = subMinOne;
};
