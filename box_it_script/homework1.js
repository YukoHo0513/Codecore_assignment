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
    // for (let j = 1; j <= number; j++) {
    //     newLine += "\u2501"
    // }
    return firstCornerLine + newLine + secondCornerLine;

}
console.log(drawTopBorder(0));