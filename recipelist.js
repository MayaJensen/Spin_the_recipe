const cuisine = new URLSearchParams(window.location.search).get("cuisine");
const mealType = new URLSearchParams(window.location.search).get("mealType");
// variabler
const endpoint = "https://dummyjson.com/recipes";

const container = document.querySelector(".categories");
const subcontainer = document.querySelector(".subcategories");
const allRecipesContainer = document.querySelector(".allrecipes .recipes");

let allRecipes = [];
let selectedCuisines = [];
let selectedMeals = [];

fetch(endpoint)
  .then((res) => res.json())
  .then((data) => {
    allRecipes = data.recipes.filter((recipe) =>
      maincategories.includes(recipe.cuisine),
    );

    showCategories(allRecipes);
    showSubCategories(allRecipes);
    renderRecipes(allRecipes);
  });

const maincategories = [
  "Asian",
  "Mexican",
  "Italian",
  "Thai",
  "Mediterranean",
  "Turkish",
  "American",
];

const subcategories = [
  "Breakfast",
  "Side Dish",
  "Lunch",
  "Dinner",
  "Dessert",
  "Snacks",
];

// MAIN CATEGORIES
function showCategories(recipes) {
  container.innerHTML = "";
  maincategories.forEach((category) => {
    const recipe = recipes.find((r) => r.cuisine === category);

    if (recipe) {
      container.innerHTML += `
        <div class="category" data-cuisine="${category}">
          <img src="${recipe.image}" alt="${category}">
          <h3>${category}</h3>
        </div>
      `;
    }
  });

  container.querySelectorAll("[data-cuisine]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const cuisine = btn.dataset.cuisine;

      btn.classList.toggle("active");

      if (selectedCuisines.includes(cuisine)) {
        selectedCuisines = selectedCuisines.filter((c) => c !== cuisine);
      } else {
        selectedCuisines.push(cuisine);
      }

      applyFilters();
    });
  });
}

// SUBCATEGORIES
function showSubCategories(recipes) {
  subcontainer.innerHTML = "";

  subcategories.forEach((subcategory) => {
    const recipe = recipes.find((r) => r.mealType?.includes(subcategory));

    subcontainer.innerHTML += `
      <div class="category" data-meal="${subcategory}">
        <img src="${recipe?.image || "images/placeholder.jpg"}" alt="${subcategory}">
        <h3>${subcategory}</h3>
      </div>
    `;
  });

  subcontainer.querySelectorAll("[data-meal]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const meal = btn.dataset.meal;

      btn.classList.toggle("active");

      if (selectedMeals.includes(meal)) {
        selectedMeals = selectedMeals.filter((m) => m !== meal);
      } else {
        selectedMeals.push(meal);
      }

      applyFilters();
    });
  });
}
// filtrering

function applyFilters() {
  let filtered = allRecipes;

  if (selectedCuisines.length > 0) {
    filtered = filtered.filter((recipe) =>
      selectedCuisines.includes(recipe.cuisine),
    );
  }

  if (selectedMeals.length > 0) {
    filtered = filtered.filter((recipe) =>
      recipe.mealType.some((meal) => selectedMeals.includes(meal)),
    );
  }

  renderRecipes(filtered);
}

// filtrering

function renderRecipes(recipes) {
  const filteredRecipes = recipes.filter((recipe) =>
    maincategories.includes(recipe.cuisine),
  );

  allRecipesContainer.innerHTML = "";

  filteredRecipes.slice(0, 24).forEach((recipe) => {
    allRecipesContainer.innerHTML += `
      <a href="recipedetails.html?id=${recipe.id}" class="card">

        <div class="img-container">
          <img src="${recipe.image}" alt="${recipe.name}">
          <span class="tag">${recipe.cuisine}</span>
        </div>

        <h3>${recipe.name}</h3>
        <span class="readmore">Read more</span>

      </a>
    `;
  });
}
