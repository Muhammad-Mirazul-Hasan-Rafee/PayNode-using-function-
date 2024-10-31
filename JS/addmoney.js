document.getElementById('btn-add-money').addEventListener('click', function (event) {
    event.preventDefault();

    const addMoney = getInputFieldValueById("input-add-money"); //ekhane common function er jnno je id parameter chilo sei id er jnno ekhane "input-add-money" id ta dite hbe.
    const pinNumber = getInputFieldValueById("input-pin-number");
    console.log('add money parameter' , addMoney);
    console.log('pin parameter' , pinNumber);

});