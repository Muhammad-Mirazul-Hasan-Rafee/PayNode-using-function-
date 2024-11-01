document.getElementById('btn-add-money').addEventListener('click', function (event) {
    event.preventDefault();

    const addMoney = getInputFieldValueById("input-add-money"); //ekhane common function er jnno je id parameter chilo sei id er jnno ekhane "input-add-money" id ta dite hbe.
    const pinNumber = getInputFieldValueById("input-pin-number");

    // wrong way to verify, never try it in your serious website
    if(pinNumber === 1234){

          const balance = getTextFieldValueById('account-balance');
          const newBalance = balance + addMoney;
          document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert('Failed!, please try again!');
    }

});