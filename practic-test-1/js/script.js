 let users = ["Rinat", "Sofia", "Rufus", "Viktor"];
 let name = prompt("Введіть своє ім'я: ");
 if(users.includes(name) ) {
  alert("Це ім'я вже існує");
    }else if(name === null){
    console.log("Ви відмінли дію!!!!");
        }else{
     users.push(name);
    }
 console.log(users);
