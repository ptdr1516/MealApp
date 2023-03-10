const leftContainer = document.getElementsByClassName("left-container"); // element for left container of the body
const rightContainer = document.getElementsByClassName("right-container"); // element for right container of the body
const dropdownIngredients = document.getElementById("section-dropdown"); // get element for ingredients dropdown
const ingredientList = document.createElement("ul"); // creating element for the list of ingredients
const mealdesc = localStorage.getItem("mealsDesc"); // get meal description from local Storage
const mealDescription = JSON.parse(mealdesc); // Parse the meal description.

// Add Instructions of meal to DOM
const instructions = document.createElement("div");
instructions.id = "instruction-wrapper";
// Creates a div with the instructions of meal description
instructions.innerHTML = `
<h1>${mealDescription["strMeal"]}</h1>
<div id = "instructions">${mealDescription["strInstructions"]}</div>`;

// Append instructions to the left container
leftContainer[0].append(instructions);

// Add image of recipe to DOM
rightContainer[0].innerHTML = `<img src = "${mealDescription["strMealThumb"]}"  id ="thumbnail"/>`;

// Add ingredients and measure to DOM
let strIngredient = [];
for (i = 1; i <= 20; i++) {
  strIngredient.push("strIngredient" + i);
}
let strMeasure = [];
for (i = 1; i <= 20; i++) {
  strMeasure.push("strMeasure" + i);
}
i = 0;
while (i <= 20) {
  a = strIngredient[i];
  b = strMeasure[i];

  // Returns the index of the first non - empty or undefined character in the meal description.
  if (mealDescription[a] == "" || mealDescription[a] == undefined) {
    i++;
    continue;
  }

  const ingredientListItem = document.createElement("li"); // creating element for the ingredient list
  ingredientListItem.innerHTML = `${mealDescription[a]} = ${mealDescription[b]}`; // Adds the html to the ingredient list item

  ingredientList.append(ingredientListItem);
  i++;
}

dropdownIngredients.append(ingredientList);