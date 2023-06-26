alert("Hello!");

let answer = prompt("What's your name?", "");
console. log(answer);

let result = confirm("Hello, "+ answer +  "\nAre you feeling good?");
if(result) {
    alert("Great "+ answer +  "\nGlad to hear this!");
} else {
    alert("Ough! \nIt's sad to hear that. \nHopefully, it won't be for long!");
}
