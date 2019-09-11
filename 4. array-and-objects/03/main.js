var gunter = {
    name: "Gunter",
    origin: "Adventure Time",
    canFly: false,
    sayHello: function () {
        console.log("QUACK!!!");
    }
};

var ramon = {
    name: "Ramón",
    origin: "Happy Feet",
    canFly: true,
    sayHello: function () {
        console.log("Estoy encantado de conocerle.");
    }
};

var fred = {
    name: "Fred",
    origin: "Sitting Ducks",
    canFly: false,
    sayHello: function () {
        console.log("Hi there!");
    }
   
};
var myPenguin = {
    name: "Whiteblack",
    origin: "Whiteblack the Penguin Sees the World	",
    author: "	H. A. Rey and Margret Rey",
    notes: "Children's book about a travelling penguin"

}
myPenguin['canFly'] = false;
myPenguin['fly'] = function () {
    if (canFly == true) {
        return " I can fly!"
    } else {
        return "No flying for me!"
    }
}
penguins = [
    gunter , ramon, fred
]
myPenguin['sayHello'] = function () {
    console.log(myPenguin.name)
}

console.log(penguins[0]);

let secondPenguin = penguins[1];

console.log(penguins[penguins.length - 1].name)

penguins.push(myPenguin);

console.log(penguins.length);

myPenguin.canFly = true;

console.log(penguins[3].sayHello);

for(let i in penguins){
    console.log (i.name)
}

for (let i in penguins) {
    console.log(i, penguins[i].sayHello())
}

for (let i in penguins) {
    ( penguins[i].numberOfFeet = 2)
}

for (let i in penguins) {
    (penguins[i].canFly) ? console.log(`${penguins[i].name} canFly`)  : null
}

// 

penguins['outfit'] = {
    hat:"baseball cap",
    shirt:" Hawaiian shirt",
    pant:"cargo shorts",
    shoes:"flip-flops"
}
  
let penguinHatType = penguins.outfit.hat
penguins.outfit.accesories = "pocket-watch"
penguins.outfit.hat = "top-hat"
delete penguins.outfit.pant
for (let i in penguins.outfit){
    console.log(i, penguins.outfit[i])
}
