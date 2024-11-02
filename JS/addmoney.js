document.getElementById('btn-add-money').addEventListener('click', function (event) {
    event.preventDefault();

    const addMoney = getInputFieldValueById("input-add-money"); //ekhane common function er jnno je id parameter chilo sei id er jnno ekhane "input-add-money" id ta dite hbe.
    const pinNumber = getInputFieldValueById("input-pin-number");

    // data validation

    if(isNaN(addMoney)){
        alert('Failed to add money!');
        return;
    }
 
    // wrong way to verify, never try it in your serious website
    if(pinNumber === 1234){

          const balance = getTextFieldValueById('account-balance');
          const newBalance = balance + addMoney;
          document.getElementById('account-balance').innerText = newBalance;



        //   Transaction history
        const p = document.createElement('p');
        p.innerText = `Added: ${addMoney} Tk. New Balance: ${newBalance} Tk.`;



        // should be a common function
        document.getElementById('transaction-container').appendChild(p);
    }
    else{
        alert('Failed!, please try again!');
    }

});