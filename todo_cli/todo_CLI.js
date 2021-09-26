const readline = require('readline');

const rl = readline.createInterface({
    output: process.stdout,
    input: process.stdin
})

let listArr = [];

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
        listArr.push(`${listArr.length} [] ${answer}`)
        todoCli();
    })

}

function completeFunc(compAnsNum) {
    if (compAnsNum >= listArr.length || compAnsNum < 0) {
        console.log('Please put the correct number!');
    } else {
        let secondSquareIndex = listArr[compAnsNum].indexOf(']');
        let slicedStr = listArr[compAnsNum].slice(secondSquareIndex + 2)
        console.log(`Completed "${slicedStr}"`);

        let firstSquareIndex = listArr[compAnsNum].indexOf('[');
        let firstPartStr = listArr[compAnsNum].slice(0, firstSquareIndex + 1);
        let secondPartStr = listArr[compAnsNum].slice(secondSquareIndex);
        let newSentence = firstPartStr + "✓" + secondPartStr

        listArr[compAnsNum] = newSentence;
    }

    todoCli();
}

function deleteFunc(delAnsNum) {
    if (listArr.length === 0 || delAnsNum >= listArr.length) {
        console.log("You have nothing on your list!");
    } else {
        let strPosition = listArr[delAnsNum].indexOf(']');
        let deletedStr2 = listArr[delAnsNum].slice(strPosition + 2);
        console.log(`Deleted "${deletedStr2}"`);

        listArr.splice(delAnsNum, 1); // to delete item from array

        for (let i = 0; i < listArr.length; i++) {
            let numPartIndex = listArr[i].indexOf('[');
            let backStr = listArr[i].slice(numPartIndex);

            let revisedPhrase = i + " " + backStr;
            listArr[i] = revisedPhrase;
        }
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
        }

        if (answer === 'n') {
            newFunc();
        }

        if (/\d/.test(answer) === true && answer.includes('c')) {
            let compAnsNum = answer.substring(1);
            completeFunc(compAnsNum);
        }

        if (/\d/.test(answer) === true && answer.includes('d')) {
            let delAnsNum = answer.substring(1);
            deleteFunc(delAnsNum);
        }

        if (answer === 'q') {
            quitFunc();
            return rl.close();
        }
    })
}
todoCli();