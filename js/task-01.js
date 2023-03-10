const categoriesList = document.querySelector('#categories');
const items = categoriesList.querySelectorAll('.item');
console.log(`Number of categories: ${items.length}`);

items.forEach(item => {
  const categoryTitle = item.firstElementChild.textContent;
  const categoryItemsCount = item.querySelectorAll('li').length;
  console.log(`Category: ${categoryTitle}`);
  console.log(`Items count: ${categoryItemsCount}`);
});
