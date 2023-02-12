// step-1 : button ke dhore click hoy naki check kora...
document.getElementById('sumbit-btn').addEventListener('click', function () {
    // step-2 : user-email ke button er shathe connect korano
    const userEmail = document.getElementById('user-email');
    // tips : input er value ke paite hole ba dekhte hole (.value) deya lage
    const email = userEmail.value;
    // step-2 : user-password ke button er shathe connect korano
    const userPassword = document.getElementById('user-password');
    const password = userPassword.value;
    // input khali rakhle shotoko kora
    if (email == '') {
        alert('Please দয়া করে Email address এবং password  টি দিন..')
    } else if (password == '') {
        alert('Password এর জন্য কি আলাদা ভাবে আবার  বলা লাগবে। Please দয়া করে Password টি দিন..')
    }
    // check valid or invalid user
    else if (email === 'nazmul@gmail.com' && password === 'nazmul') {
        window.location.href = 'bank.html'
    } else {
        alert('তুই তোর bank এর পাসওয়ার্ড ভুলে গেছিস !!! তোকে আমি তেজ্য পুত্র ঘোষণা করলাম। বের হ...! আমার বাড়ি থেকে..')
    }
})