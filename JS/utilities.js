// jekono input neyar jnno common ekta function,  and ki nibe seta bole deyar kaj ta korbe "id" parameter
function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
};

function getTextFieldValueById(id){

    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;

};

function showSectionById(id){

    // Hide all the sections
    document.getElementById('add-money-form').classList.add('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
    document.getElementById('transaction-section').classList.add('hidden');

    // show the section with the provided id as parameter
    document.getElementById(id).classList.remove('hidden'); //aage sob remove, erpor jar id ana hbe tar theke hidden sore jabe

};