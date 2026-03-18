const endpoint = "https://dummyjson.com/recipes";

const container = document.querySelector(".categories");
const subcontainer = document.querySelector(".subcategories");
const popularContainer = document.querySelector(".popular");

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
// FETCH DATA
fetch(endpoint)
  .then((res) => res.json())
  .then((data) => {
    const recipes = data.recipes;

    showCategories(recipes);
    showSubCategories(recipes);
    showPopularRecipes(recipes);
    showAllRecipes(recipes);
  });

// MAIN CATEGORIES
function showCategories(recipes) {
  maincategories.forEach((category) => {
    const recipe = recipes.find((r) => r.cuisine === category);

    if (recipe) {
      container.innerHTML += `
        <a href="recipelist.html?cuisine=${category}" class="category">
          <img src="${recipe.image}" alt="${category}">
          <h3>${category}</h3>
        </a>
      `;
    }
  });
}

// SUBCATEGORIES
function showSubCategories(recipes) {
  subcategories.forEach((subcategory) => {
    const recipe = recipes.find((r) => r.mealType.includes(subcategory));

    if (recipe) {
      subcontainer.innerHTML += `
        <a href="recipelist.html?mealType=${subcategory}" class="category">
          <img src="${recipe.image}" alt="${subcategory}">
          <h3>${subcategory}</h3>
        </a>
      `;
    }
  });
}

// MOST POPULAR
function showPopularRecipes(recipes) {
  const filteredRecipes = recipes.filter((recipe) =>
    maincategories.includes(recipe.cuisine),
  );

  popularContainer.innerHTML = `
    <h2>Most popular</h2>
    <div class="recipes"></div>
  `;

  const recipesWrapper = popularContainer.querySelector(".recipes");

  filteredRecipes
    .sort((a, b) => b.id - a.id)
    .slice(0, 4)
    .forEach((recipe) => {
      recipesWrapper.innerHTML += `
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
const allRecipesContainer = document.querySelector(".allrecipes .recipes");

function showAllRecipes(recipes) {
  const filteredRecipes = recipes.filter((recipe) =>
    maincategories.includes(recipe.cuisine),
  );

  allRecipesContainer.innerHTML = "";

  filteredRecipes.slice(0, 12).forEach((recipe) => {
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
