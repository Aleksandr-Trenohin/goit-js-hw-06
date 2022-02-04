// 1
const categoriesEl = document.querySelector('#categories');
console.log('Number of categories: ', categoriesEl.children.length);

// 2
const categoriesItemsEl = document.querySelectorAll('.item');
const categoriesItems = categoriesItemsEl.forEach(categoriesItem => {
  console.log('Category: ', categoriesItem.firstElementChild.textContent);
  console.log('Elements: ', categoriesItem.lastElementChild.children.length);
});
