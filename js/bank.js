// step- 1 : Deposit button ke catch kora...
document.getElementById('Deposit-btn').addEventListener('click', function () {
    // step- 2: Tarpor user er deposit amonunt er button er shonjog.. 
    const depositAmount = document.getElementById('user-Deposit');
    const newDepositString = depositAmount.value;
    // step-3 : input krito shonkha ke number a porinoto kora..
    const newDeposit = parseFloat(newDepositString);
    // button click er por input field ke khali korano..
    depositAmount.value = '';

    const depositAdd = document.getElementById('depositAdd');
    const preciousDepositString = depositAdd.innerText;
    const preciousDeposit = parseFloat(preciousDepositString)

    const totalAmount = newDeposit + preciousDeposit;
    depositAdd.innerText = totalAmount;

    const balanceAdd = document.getElementById('balanceAdd');
    const newBalancestring = balanceAdd.innerText;
    const newBalance = parseFloat(newBalancestring);

    const totalBalance = newBalance + newDeposit;
    balanceAdd.innerText = totalBalance;

})
// Withdraw part is start

document.getElementById('Withdraw-btn').addEventListener('click', function () {
    const userWithdraw = document.getElementById('user-Withdraw');
    const newWithdrawString = userWithdraw.value;
    const newWithdraw = parseFloat(newWithdrawString)
    userWithdraw.value = '';

    const withdrawAdd = document.getElementById('withdrawAdd');
    const previousWithdrawString = withdrawAdd.innerText;
    const previousWithdraw = parseFloat(previousWithdrawString);

    const balanceAdd = document.getElementById('balanceAdd');
    const newBalancestring = balanceAdd.innerText;
    const newBalance = parseFloat(newBalancestring);
    
    if (newWithdraw > newBalance) {
        alert('Sorry তোমার বাবার  একাউন্ট এ এতো টাকা নাই। বাবা কে বলো টাকা deposit করতে। ')
        return;
    }

    const totalAmount = newWithdraw + previousWithdraw;
    withdrawAdd.innerText = totalAmount;

    const totalBalance = newBalance - newWithdraw;
    balanceAdd.innerText = totalBalance;

})