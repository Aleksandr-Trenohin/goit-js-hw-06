const categoriesItemsEl = document.querySelectorAll('.item');
console.log('Number of categories: ', categoriesItemsEl.length);

const categoriesItems = categoriesItemsEl.forEach(categoriesItem => {
  console.log('Category: ', categoriesItem.firstElementChild.textContent);
  console.log('Elements: ', categoriesItem.lastElementChild.children.length);
});
