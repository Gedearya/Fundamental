var string = "";

for (var i=0; i<1; i++){
    for (var j=0; j<4; j++){
        string += "   ";
    }
    for (var k=0; k<1; k++){
        string += " * ";
    }
    for (var j=0; j<7; j++){
    string += "   ";
    }
    for (var k=0; k<1; k++){
    string += " * ";
    }
    string += "\n"
}

for (var j=0; j<3; j++){
for (var i=j; i<3; i++){
string += "   ";
}
for(var k=0; k<1; k++){
string += " * ";
}
for (var l=0; l<(j*2)+1; l++){
    string += "   ";
}
for (var m=0; m<1; m++){
    string += " * ";
}
for (var n=(j*2); n<5; n++){
    string += "   ";
}
string += "\n"
}

for (var i=0; i<1; i++){
    for (var j=0; j<4; j++){
        string += " * ";
    }
    for (var k=0; k<1; k++){
        string += " * ";
    }
    for (var j=0; j<7; j++){
    string += " * ";
    }
    for (var k=0; k<1; k++){
    string += " * ";
    }
    string += "\n"
}

for (var j=0; j<3; j++){
    for (var i=j; i<3; i++){
    string += "   ";
    }
    for(var k=0; k<1; k++){
    string += " * ";
    }
    for (var l=0; l<(j*2)+1; l++){
        string += "   ";
    }
    for (var m=0; m<1; m++){
        string += " * ";
    }
    for (var n=(j*2); n<5; n++){
        string += "   ";
    }
    string += "\n"
    }

console.log(string);