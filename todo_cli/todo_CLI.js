const readline = require('readline');

const rl = readline.createInterface({
    output: process.stdout,
    input: process.stdin
})

let listArr = [];
let itemNum = 0;

function viewFunc() {
    let newStr = "";
    if (listArr.length === 0) {
        console.log(`List is empty...`);
    } else {
        for (let i = 0; i < listArr.length; i++) {
            newStr = newStr + listArr[i] + "\n";
        }
        console.log(newStr);
    }
    todoCli();
}

function newFunc() {
    rl.question(`What do you want to add to the list? \n > `, (answer) => {
        // let editedAnswer = answer.charAt(0).toUppercase() + answer.slice(1);
        listArr.push(`${itemNum} [] ${answer}`)
        itemNum++;
        todoCli();
    })

}

function completeFunc(ansNum) {
    if (ansNum >= listArr.length || ansNum < 0) {
        console.log('Please put the correct number!');
    } else {
        let secondSquareIndex = listArr[ansNum].indexOf(']');
        let slicedStr = listArr[ansNum].slice(secondSquareIndex + 2)
        console.log(`Completed "${slicedStr}"`);

        let firstSquareIndex = listArr[ansNum].indexOf('[');
        let firstPartStr = listArr[ansNum].slice(0, firstSquareIndex + 1);
        let secondPartStr = listArr[ansNum].slice(secondSquareIndex);
        let newSentence = firstPartStr + "✓" + secondPartStr

        listArr[ansNum] = newSentence;
    }

    todoCli();
}

function quitFunc() {
    console.log(`See you soon!😄 `);
}


function todoCli() {
    rl.question(`Welcome to Todo CLI! \n -------------- \n
(v) View • (n) New • (cX) Complete • (dX) Delete • (q) Quit \n >`, (answer) => {

        if (answer === 'v') {
            viewFunc();
            // return todoCli();
        }

        if (answer === 'n') {
            newFunc();
            // return todoCli();
        }

        if (/\d/.test(answer) === true && answer.includes('c')) {
            let ansNum = answer.slice(1);
            completeFunc(ansNum);
        }

        if (answer === 'q') {
            quitFunc();
            return rl.close();
        }
    })
}
todoCli();