let str1 = process.argv[2];
let str2 = process.argv[3];
let str3 = process.argv[4];


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
    let firstCornerLine = "\u250F";
    let secondCornerLine = "\u2513";
    let newLine = drawLine(number)
    // for (let j = 1; j <= number; j++) 
    //     newLine += "\u2501"
    // }
    return firstCornerLine + newLine + secondCornerLine;
}
console.log(drawTopBorder(4));
console.log(drawTopBorder(0));




function drawMiddleBorder(number) {
    let firstVerLine = "\u2523";
    let secondVerLine = "\u252B"
    let newLine = drawLine(number)
    return firstVerLine + newLine + secondVerLine;
}
console.log(drawMiddleBorder(8));
console.log(drawMiddleBorder(0));



function drawBottomBorder(number) {
    let firstCornerLine = "\u2517";
    let secondCornerLine = "\u251B"
    let newLine = drawLine(number);
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





function boxIt(array) {
    let result = "";
    if (array.length === 0) {
        result = drawTopBorder(1) + "\n" + drawBottomBorder(1);
        return result;
    }
    let longestLength = array[0].length;
    for (let x = 1; x < array.length; x++) {
        if (array[x].length > longestLength) {
            longestLength = array[x].length;
        }
    }
    if (array.length === 1) {
        let x = 0;
        result += drawTopBorder(longestLength) + "\n" + drawBarsAround(array[x]) + "\n" 
        + drawBottomBorder(longestLength);
    } else {
        for (let x = 0; x < array.length; x++){
            if (x === array.length -1) {
                result += "\n" + drawBarsAround(array[x]) + "\n" + drawBottomBorder(longestLength);
            } else if (x === 0) {
                result += drawTopBorder(longestLength) + "\n" + drawBarsAround(array[x]) + "\n" 
                + drawMiddleBorder(longestLength);
            } else {
                result += "\n" + drawBarsAround(array[x]) + "\n" + drawMiddleBorder(longestLength);
            }
    
    }
}
    return result
}


console.log(boxIt([]));

