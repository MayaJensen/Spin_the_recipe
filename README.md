# Spin_the_recipe
## Om projektet

Dette projekt er lavet som en del af Tema 8. Vi har lavet et dynamisk website med HTML, CSS og JavaScript, hvor indholdet bliver hentet fra et Rest API.

Sitet består af flere sider, hvor brugeren kan:

Se en liste med indhold, klikke sig videre til en detaljeside hvor de kan bruge filtrering, se information om det specifille indhold.

## Links
- GitHub repository:https://github.com/MayaJensen/Spin_the_recipe
- GitHub Pages: https://mayajensen.github.io/Spin_the_recipe/index.html
- Figma: (https://www.figma.com/design/Bx9zIuP7XIadTyRiboYj6D/Spin-the-recipe?node-id=1024-5118&t=bogTyu18cVfwlfIK-0)

## Projektstruktur
Projektet er opdelt i HTML, CSS og JavaScript-filer.
```
project/
├── index.html
├── recipelist.html
├── recipedetails.html
├── css/
│   └── style.css
├── js/
│   ├── index.js
│   ├── recipelist.js
│   ├── recipedetails.js
└── README.md
```

### Filbeskrivelser

- **index.html** – forsiden
- **recipelist.html** – viser en liste med data fra API'et som kan filtreres
- **recipedetails.html** – viser detaljer om en valgt opskrift
- **style.css** – styrer designet
- **JavaScript-filer** – styrer det dynamiske indhold på de forskellige sider

---

## Hvordan koden fungerer

Vi har opdelt JavaScript, så hver side har sin egen js fil.

### index.js

Bruges på forsiden.
Her bliver indhold vist dynamisk, via kategorier hentet fra rest API´et.

### recipelist.js

Henter data fra Rest API'et og viser en liste med opskrifter på siden, som kan filtreres.

**Flow:**

1. Siden loader
2. JavaScript kører
3. Data hentes fra Rest API
4. Data bliver gennemgået med loop
5. HTML bliver indsat i DOM'en
6. Brugeren kan klikke på en opskrift

### recipedetails.js

Bruges til detaljesiden. Den læser et id fra URL'en og henter derefter den rigtige opskrift fra Rest API'et.

Det gør det muligt at genbruge den samme HTML-side til mange opskrifter. I stedet for at lave én side per opskrift, bruger vi ét id i URL'en til at vise det rigtige indhold.


---

## Navngivning

Vi har navngivet vores filer, variabler og funktioner så de så vidt som muligt er selvforklarende.

### Eksempler på variabler

```javascript
const container 
const subcontainer
const popularContainer
```

### Eksempler på funktioner

```javascript
fetch(endpoint)
showCategories(recipes);
    showSubCategories(recipes);
    showPopularRecipes(recipes);
    showAllRecipes(recipes);
```

Vi har brugt camelCase i JavaScript, fordi det gør koden mere ensartet og lettere at læse.

---

## Kommentarer i koden

Vi har kommenteret steder i koden, hvor det giver mening, og for at forstå sammenhængen.


**Eksempel:**

```javascript
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
```

Vi har prøvet ikke at skrive kommentarer til helt åbenlyse ting, men kun dér hvor det hjælper forståelsen af sammenhængen.

---

## Data og JSON-struktur

Vi henter data fra et API i JSON-format.

**Et objekt kan fx se sådan ud:**

```json
 "recipes": [
    {
      "id": 1,
      "name": "Classic Margherita Pizza",
      "ingredients": [
        "Pizza dough",
        "Tomato sauce",
        "Fresh mozzarella cheese",
        "Fresh basil leaves",
        "Olive oil",
        "Salt and pepper to taste"
      ],
      "instructions": [
        "Preheat the oven to 475°F (245°C).",
        "Roll out the pizza dough and spread tomato sauce evenly.",
        "Top with slices of fresh mozzarella and fresh basil leaves.",
        "Drizzle with olive oil and season with salt and pepper.",
        "Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.",
        "Slice and serve hot."
      ],
      "prepTimeMinutes": 20,
      "cookTimeMinutes": 15,
      "servings": 4,
      "difficulty": "Easy",
      "cuisine": "Italian",
      "caloriesPerServing": 300,
      "tags": [
        "Pizza",
        "Italian"
      ],
      "userId": 166,
      "image": "https://cdn.dummyjson.com/recipe-images/1.webp",
      "rating": 4.6,
      "reviewCount": 98,
      "mealType": [
        "Dinner"
      ]
    },
```

### Felter vi bruger

- **id** – bruges til at sende brugeren videre til detaljesiden
- **title** – opskriftsnavn
- **description** – beskrivelse af opskriften
- **category** – opskriftkategori (fx dessert, hovedret, forret)
- **cusine** - det land opskriften hører under
- **cookTime** – tilberedningstid i minutter
- **servings** – antal portioner
- **thumbnail** – opskriftsbillede
- **difficulty** - sværhedgraden af opskriften

---



## Git og branches

Vi har brugt GitHub til at samarbejde om projektet.

Vi har arbejdet med branches, så vi ikke sad og ændrede i det samme på samme tid.

Vi navngav branchene med feature først.

### Eksempler på branches

- `adjustments`
- `wheel_and_header`
- `add actice`


### Workflow

1. Lave en branch med navn.
2. Kode en feature
3. Committe ændringer
4. Pushe til GitHub
5. Merge til main når det virkede

Det gjorde det nemmere at holde styr på, hvad der blev lavet og at man kunne gå tilbage i tidligere versioner. 

---

## Bæredygtighed

Vi har tænkt bæredygtighed ind i projektet ved at holde page weight under 250 kb samt en enkel informationasarkitektur.

**Tiltag:**

- Ingen videoer
- Ingen tunge frameworks
- Genbruge af kode


---

## Udfordringer undervejs

En af vores udfordringer var at data fra Rest API’et havde billeder som vi ikke kunne definere en størrelse på. 


**Løsninger:**

- ingen løsning på udfordringen i denne omgang

---

## Mulige forbedringer

Hvis vi skulle arbejde videre med projektet, kunne vi forbedre det ved at tilføje:

- Søgefunktion
- "sidst sete" nederst på siden
- Loading af flere opskrifter ved klik

---

## Gruppemedlemmer

- Signe Skriver Lorentzen
- Tobias Frouvne Vincentz
- Clara Victoria Muxoll Storkfelt
- Maya Christine Jensen
