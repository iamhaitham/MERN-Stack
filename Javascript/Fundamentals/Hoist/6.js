//6
var genre;
console.log(genre);
genre = "disco";
rewind();

function rewind() {
    var genre;
    genre = "rock";
    console.log(genre);
    genre = "r&b";
    console.log(genre);
}
console.log(genre);
//Output: 
/*
undefined
rock
r&b
disco
*/