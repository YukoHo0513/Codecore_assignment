function drawLine(number) {
    let newLine = "";
    for (let i = 1; i <= number; i++) {
        newLine += "\u2501"
    }
    return newLine;
}
console.log(drawLine(4));
console.log(drawLine(8));



function drawTopBorder(number) {
    let newLine = "";
    let firstCornerLine = "\u250F";
    let secondCornerLine = "\u2513";
    newLine = drawLine(number)
    // for (let j = 1; j <= number; j++) 
    //     newLine += "\u2501"
    // }
    return firstCornerLine + newLine + secondCornerLine;
}
console.log(drawTopBorder(4));
console.log(drawTopBorder(0));




function drawMiddleBorder(number) {
    let newLine = ""
    let firstVerLine = "\u2523";
    let secondVerLine = "\u252B"
    newLine = drawLine(number)
    return firstVerLine + newLine + secondVerLine;
}
console.log(drawMiddleBorder(8));
console.log(drawMiddleBorder(0));



function drawBottomBorder(number) {
    let newLine = "";
    let firstCornerLine = "\u2517";
    let secondCornerLine = "\u251B"
    newLine = drawLine(number);
    return firstCornerLine + newLine + secondCornerLine;
}
console.log(drawBottomBorder(2));




function drawBarsAround(string){
    let addedLine = "\u2503"
    return addedLine + string + addedLine;
}
console.log(drawBarsAround("My name is Dan"));
console.log(drawBarsAround("You are Jane  "));
console.log(drawBarsAround("  You are Bill"));