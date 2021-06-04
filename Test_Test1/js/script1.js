const items = document.querySelectorAll(".item");
const headings = document.querySelectorAll(".heading");

items.forEach(function(heading){
    console.log(`Категорія: ${heading.firstChild.textContent}`)
});

items.forEach(function(item) {
    console.log(`Кількість вкладених li: ${item.children.length}`);
});
