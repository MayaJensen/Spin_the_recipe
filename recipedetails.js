console.log("recipedetails.js is connected");

const id = new URLSearchParams(window.location.search).get("id");
const endpoint = `https://dummyjson.com/recipes/${id}`;

const recipeContainer = document.querySelector(".recipe");

function getData() {
  fetch(endpoint)
    .then((res) => res.json())
    .then(showData);
}

function showData(recipe) {
  console.log(recipe);

  recipeContainer.innerHTML = `

<h1 class="title">${recipe.name}</h1>

<div class="top">
  <img class="recipe-img" src="${recipe.image}" alt="${recipe.name}">

  <div class="info-card">
    <h3>Recipe Info</h3>

    <div class="row">
      <span>Total Time:</span>
      <span>${recipe.cookTimeMinutes} minutes</span>
    </div>

    <div class="row">
      <span>Difficulty:</span>
      <span>${recipe.difficulty}</span>
    </div>

    <div class="row">
      <span>Cuisine:</span>
      <span>${recipe.cuisine}</span>
    </div>
      <div class="row">
      <span>Category:</span>
      <span>${recipe.mealType}</span>
    </div>
    

  </div>
  <div class="toggle">
  <label class="switch">
    <input type="checkbox">
    <span class="slider"></span>
  </label>

  <p>Keep the screen on while cooking</p>
</div>
</div>

<div class="bottom">

  <div class="ingredients">
    <h4>Ingredients</h4>
    <div class="ingredients-list"></div>
  </div>

  <div class="instructions">
    <h4>Instructions</h4>
    <div class="instructions-list"></div>
  </div>

</div>
`;
  const ingredientsContainer = document.querySelector(".ingredients-list");

  recipe.ingredients.forEach((ingredient) => {
    ingredientsContainer.innerHTML += `
    <label>
      <input type="checkbox">
      <span>${ingredient}</span>
    </label>
  `;
  });

  const instructionsContainer = document.querySelector(".instructions-list");

  recipe.instructions.forEach((step) => {
    instructionsContainer.innerHTML += `
    <label>
      <input type="checkbox">
      <span>${step}</span>
    </label>
  `;
  });
}

getData();
