//1
// let product = "Ножі";
// let price = 239;
// console.log(`У нас є продукт ${product} і він коштує ${price} грн`);

//2
let warehouse = parseInt(prompt("Скільки коробок на складі?"));
let units = parseInt(prompt("Скільки замовлень?"));
let result = warehouse - units;

if(units <= warehouse){
console.log(`Товарів на складі залишиться: ${result}`);
    }else{
//   units >= warehouse;
  console.log("Товарів не достатньо");
}

//3
// let a = prompt(1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 13, 14, 15, 16, 17, 18, 19 ,20);