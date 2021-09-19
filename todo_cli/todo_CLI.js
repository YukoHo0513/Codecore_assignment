const readline = require('readline');

const rl = readline.createInterface({
    output: process.stdout,
    input: process.stdin
})

rl.question(`Welcome to Todo CLI! \n -------------- \n
(v) View • (n) New • (cX) Complete • (dX) Delete • (q) Quit \n >`, (answer) => {


    if (answer === 'q') {
        console.log(`See you soon!😄 `);
        rl.close();
    }
})
