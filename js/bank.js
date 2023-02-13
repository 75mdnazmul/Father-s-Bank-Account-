// ------------------------------------ Deposit korar code ---------------------------------//

// step-1: প্রথমে Deposit এর বাটন কে ধরা...
document.getElementById('Deposit-btn').addEventListener('click', function () {
    // step-2: Deposit এর ইনপুট ফিল্ড কে ধরা..
    const userDeposit = document.getElementById('user-Deposit');
    const userDepositString = userDeposit.value;
    // step-3: Deposit এর ইনপুট স্ট্রিং কে নম্বর এ কনভার্ট করা.
    const userDepositNumber = parseFloat(userDepositString)
    // ক্লিক করার পর যাতে ইনপুট ফিল্ড খালি হয়ে যায়, সেই জন্য খালি স্ট্রিং রাখা.
    userDeposit.value = '';
    if(isNaN(userDepositNumber)){
        alert('Number বা সংখ্যা ছাড়া কোনো কিছু Allow না।  Please provide a valid Number ')
        return;
    }

    // step-4: ব্যাংক এর Deposit কে ধরা তারপর তাকে স্ট্রিং থেকে নম্বর এ কনভার্ট করা.
    const depositAdd = document.getElementById('depositAdd');
    const depositAddstring = depositAdd.innerText;
    const depositAddNumber = parseFloat(depositAddstring)

    // step-5:ইউসার এর দেয়া ইনপুট কে ব্যাংক এর Deposit এর সাথে যোগ করা.
    const totalDeposit = depositAddNumber + userDepositNumber;
    depositAdd.innerText = totalDeposit;

    //step-6:ব্যাংক এর টোটাল ব্যালান্স কে ধরা তারপর স্ট্রিং থেকে নম্বর এ কনভার্ট করা..
    const balanceAdd = document.getElementById('balanceAdd');
    const balanceAddstring = balanceAdd.innerText;
    const balanceAddNumbar = parseFloat(balanceAddstring)

    //step-7:ইউসার এর ইনপুট কে ব্যাংক এর টোটাল ব্যালান্স এর সাথে যোগ করা.
    const balanceDepositAdd = userDepositNumber + balanceAddNumbar;
    balanceAdd.innerText = balanceDepositAdd;

})

// ------------------------------------ Withdraw korar code ---------------------------------//

// step-1: প্রথমে Deposit এর বাটন কে ধরা...
document.getElementById('Withdraw-btn').addEventListener('click', function () {
    // step-2: Deposit এর ইনপুট ফিল্ড কে ধরা..
    const userWithdraw = document.getElementById('user-Withdraw');
    const userWithdrawString = userWithdraw.value;
    // step-3: Deposit এর ইনপুট স্ট্রিং কে নম্বর এ কনভার্ট করা.
    const userWithdrawNumber = parseFloat(userWithdrawString)
    userWithdraw.value = "";
    if(isNaN(userWithdrawNumber)){
        alert('Number বা সংখ্যা ছাড়া কোনো কিছু Allow না। Please provide a valid Number')
        return;
    }
    // step-4: ব্যাংক এর Deposit কে ধরা তারপর তাকে স্ট্রিং থেকে নম্বর এ কনভার্ট করা.
    const withdrawAdd = document.getElementById('withdrawAdd');
    const withdrawAddString = withdrawAdd.innerText;
    const withdrawAddNumaber = parseFloat(withdrawAddString);
    //step-6:ব্যাংক এর টোটাল ব্যালান্স কে ধরা তারপর স্ট্রিং থেকে নম্বর এ কনভার্ট করা..
    const balanceAdd = document.getElementById('balanceAdd');
    const balanceAddstring = balanceAdd.innerText;
    const balanceAddNumbar = parseFloat(balanceAddstring)
    // step-8: ইনপুটকৃত টাকা যদি ব্যাংক এর total টাকার বেশি হয় , তাহলে তাকে সতর্ক করা। 
    if (userWithdrawNumber > balanceAddNumbar) {
        alert('তোমার বাপের একাউন্ট এ এতো টাকা নাই। বাবা কে বলো টাকা deposit করতে। ')
        return;
    }
    // step-5:ইউসার এর দেয়া ইনপুট কে ব্যাংক এর Deposit এর সাথে যোগ করা
    const totalWithdraw = userWithdrawNumber + withdrawAddNumaber;
    withdrawAdd.innerText = totalWithdraw;

    //step-7:ইউসার এর ইনপুট কে ব্যাংক এর টোটাল ব্যালান্স এর সাথে বিয়োগ করা.
    const balanceWithdrawAdd = balanceAddNumbar - userWithdrawNumber;
    balanceAdd.innerText = balanceWithdrawAdd;
})