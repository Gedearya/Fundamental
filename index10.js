function alay (string){
    string = string.split('');
    for (var i = 0; i < string.lenght; i++) {
    if (string[i] == "a" || string[i] == "A") {
        string[i] = 4;
    } else if (string[i] == "i" || string[i] == "I") {
        string[i] = 1;
    } else if (string[i] == "e" || string[i] == "E") {
        string[i] = 3;
    } else if (string[i] == "o" || string[i] == "O") {
        string[i] = 0;
    } else continue;
}
string = string.join('')
return string;
}
console.log(alay("Vincent Wardhana"));