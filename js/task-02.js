const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatoes",
  "Herbs",
  "Condiments",
];

const ul = document.querySelector("#ingredients");

ingredients.map((ingredient) => {
  const listElement = document.createElement("li");
  listElement.classList.add("item");
  listElement.textContent = ingredient;
  console.log(listElement);
  
  ul.appendChild(listElement);

  return ingredient;
})
