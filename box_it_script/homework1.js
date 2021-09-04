function drawLine(number) {
    let newLine = "";
    for (let i = 1; i <= number; i++) {
        newLine += "\u2501"
    }
    return newLine;
}
console.log(drawLine(4));



function drawTopBorder(number) {
    let newLine = "";
    let firstCornerLine = "\u250F";
    let secondCornerLine = "\u2513";
    newLine = drawLine(4)
    // for (let j = 1; j <= number; j++) 
    //     newLine += "\u2501"
    // }
    return firstCornerLine + newLine + secondCornerLine;

}
console.log(drawTopBorder(0));




function drawMiddleBorder(number) {
    let newLine = ""
    let firstVerLine = "\u2523";
    let secondVerLine = "\u252B"
    newLine = drawLine(4)
    return firstVerLine + newLine + secondVerLine;
}
console.log(drawMiddleBorder(8));