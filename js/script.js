let balance = Number('10750');
let choice; 
let checkBalance = 'check balance';
let depositMoney = 'deposit money';
let withdrawMoney = 'withdraw money';
let cont1 = 'continue';
let cont2 = 'Continue';
let exit1 = 'exit';
let exit2 = 'Exit';
let deposit;
let withdraw;
let contExit;


while (true) {
    choice = prompt('Please select a financial transaction: check balance, deposit money, withdraw money.');
    console.log('Selected:', choice);

    if (choice === checkBalance) {
        console.log('Your balance:', balance);
        alert('Your balance:' + balance);
    } else if (choice === depositMoney) {
        deposit = Number(prompt('Make a deposit'));
        console.log('Deposit made:', deposit);
        balance += deposit;
        console.log('Balance:', balance);
    } else if (choice === withdrawMoney) {
        withdraw = Number(prompt('Enter the amount'));
        console.log('Entered amount:', withdraw);

            if (withdraw <= balance) {
                alert('Get your money:' + withdraw);
                balance -= withdraw;
                console.log('Balance:', balance);
            } else {
                alert('There is not enough money in the balance!');
                console.log('There is not enough money in the balance!');
            }

    } else {
        console.log('Incorrectly entered data!');
        alert('Incorrectly entered data!');
    }

    contExit = prompt('Continue or exit?');

    if (contExit === cont1 || contExit === cont2) {
        console.log('Selected:', cont1);
        continue;
    } else if (contExit === exit1 || contExit === exit2) {
        console.log('Selected:', exit1);
        alert('Thank you for using our service! Do not forget to take your card.');
        break;
    }
}
