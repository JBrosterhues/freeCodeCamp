function checkCashRegister(price, cash, cid) {
    let moneyValues = [
        ['PENNY', 0.01],
        ['NICKEL', 0.05],
        ['DIME', 0.1],
        ['QUARTER', 0.25],
        ['ONE', 1],
        ['FIVE', 5],
        ['TEN', 10],
        ['TWENTY', 20],
        ['ONE HUNDRED', 100],
    ];
    let returnObj = {
        status: '',
        change: [],
    };

    if (cash < price) {
        return {
            status: 'INSUFFICIENT CASH',
            change: [],
        };
    }

    let moneyToReturn = cash - price;
    // check if money to return is equal to cash in register
    console.log(
        cid.reduce(
            (result, item) =>
                (result = Math.round((result + item[1]) * 100) / 100),
            0
        )
    );
    if (
        moneyToReturn ===
        cid.reduce(
            (result, item) =>
                (result = Math.round((result + item[1]) * 100) / 100),
            0
        )
    ) {
        returnObj.status = 'CLOSED';
        returnObj.change = cid;
        return returnObj;
    } else {
        returnObj.status = 'OPEN';
    }

    let cashArrIndex = cid.length - 1;
    while (moneyToReturn > 0 && cashArrIndex >= 0) {
        let returnArr = [];
        while (
            moneyToReturn < moneyValues[cashArrIndex][1] &&
            cashArrIndex >= 0
        ) {
            cashArrIndex--;
        }
        console.log('Array Index: ' + cashArrIndex);
        if (cashArrIndex < 0) {
            return {
                status: 'INSUFFICIENT_FUNDS',
                change: [],
            };
        }
        let availableCash = cid[cashArrIndex][1];
        let returnedMoney = 0;
        let currAmount = moneyValues[cashArrIndex][1];
        if (availableCash <= moneyToReturn) {
            returnedMoney = availableCash;
            moneyToReturn =
                Math.round((moneyToReturn - returnedMoney) * 100) / 100;
        } else {
            returnedMoney = Math.floor(moneyToReturn / currAmount) * currAmount;
            moneyToReturn =
                Math.round((moneyToReturn - returnedMoney) * 100) / 100;
        }
        if (returnedMoney > 0) {
            returnArr.push(cid[cashArrIndex][0]);
            returnArr.push(returnedMoney);
            returnObj.change.push(returnArr);
        }
        if (moneyToReturn === 0) {
            break;
        }
        cashArrIndex--;
    }

    if (moneyToReturn > 0) {
        return {
            status: 'INSUFFICIENT_FUNDS',
            change: [],
        };
    }

    // Here is your change, ma'am.
    return returnObj;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

/*
let retObj = checkCashRegister(19.5, 21, [
    ['PENNY', 1.01],
    ['NICKEL', 2.05],
    ['DIME', 3.1],
    ['QUARTER', 4.25],
    ['ONE', 90],
    ['FIVE', 55],
    ['TEN', 20],
    ['TWENTY', 60],
    ['ONE HUNDRED', 100],
]);
*/

/*
let retObj = checkCashRegister(19.5, 20, [
    ['PENNY', 0.5],
    ['NICKEL', 0],
    ['DIME', 0],
    ['QUARTER', 0],
    ['ONE', 0],
    ['FIVE', 0],
    ['TEN', 0],
    ['TWENTY', 0],
    ['ONE HUNDRED', 0],
]);
*/

let retObj = checkCashRegister(3.26, 100, [
    ['PENNY', 1.01],
    ['NICKEL', 2.05],
    ['DIME', 3.1],
    ['QUARTER', 4.25],
    ['ONE', 90],
    ['FIVE', 55],
    ['TEN', 20],
    ['TWENTY', 60],
    ['ONE HUNDRED', 100],
]);

console.log(retObj.status + ': ');
retObj.change.map(item => console.log(item));
