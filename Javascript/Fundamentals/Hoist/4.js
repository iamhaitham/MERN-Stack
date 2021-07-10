//4
var food;
food = 'chicken';

function eat() {
    var food;
    food = 'half-chicken';
    console.log(food);
    food = 'gone';
}
console.log(food);
eat();
//Output:
/*
chicken
half-chicken
*/