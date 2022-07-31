let cashOwn = 37;
let coinArray = [20,10,5,1];
let obj = {};
let index = 0;
let coinCount = 0;

let problemSolverFunction = (cash,coin) => {

        index++; 
        if(cash<coin){
            obj[coin.toString()]=0;
            console.log(`No. of ${coin}s\t\t:\t\t0`);
            problemSolverFunction(reminder,coinArray[index])
        }
    
    else if(cash>=coin && index<=coinArray.length){
        quotnt = Math.trunc(cash/coin);
        reminder = Math.trunc(cash%coin);
        //let coin = coin.toString()
        obj[coin.toString()]=quotnt;
        coinCount=coinCount+quotnt;
        console.log(`No. of ${coin}s\t\t:\t\t${quotnt}`);
        problemSolverFunction(reminder,coinArray[index])
    }
    
}
console.log(`Cash owes to customer : ${cashOwn} \n`);
problemSolverFunction(cashOwn, coinArray[0])
console.log(`\nTotal coins: ${coinCount}`);