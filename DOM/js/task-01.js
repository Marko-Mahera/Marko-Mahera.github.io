// const categories = function(array){
//     console.log(`У списку ${array.children.length} категорій`);
//     // ler num = 0;
//     // array.forEach(function() {
//     //   num++;  
//     // });
// };

// let elementUL = document.querySelector("#categories");
// console.log(elementUL);

// categories(elementUL);

const categories = function(array){
    console.log(`У списку ${array.children.length} категорії`);
 };
 
 let elementUL = document.querySelector("#categories");
 
 categories(elementUL);

//2
const items = document.querySelectorAll(".item");

items.forEach(function(item) {
    console.log(`Категорія: ${item.firstChild.textContent}`);
    let ulList = item.children[1];
    ulList.forEach(function(item, index{
        number = index;
});
    console.log(number);
});