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
    
}