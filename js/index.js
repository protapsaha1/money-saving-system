function inputId(id){
    const getId = document.getElementById(id)
    const getIdString = getId.value;
    const getIdNumber = parseInt(getIdString);
    getId.value ='';
    return getIdNumber;
};
function inputIds(id){
    const getId = document.getElementById(id)
    const getIdString = getId.value;
    const getIdNumber = parseInt(getIdString);
    return getIdNumber;
};
function textId(id){
    const getId = document.getElementById(id);
    const getIdString = getId.innerText;
    const getIdNumber = parseInt(getIdString);
    return getIdNumber;
}

function textValue(id,value){
    const ids = document.getElementById(id);
    ids.innerText = value;
}

document.getElementById('calculate').addEventListener('click', function(){
    
    const food = inputIds('food');
    const rent = inputIds('rent');
    const clothes = inputIds('clothes');
    const totalExpenses = food + rent + clothes;
    textValue('total-expenses',totalExpenses);
    const income = inputIds('income');
    const balance = income - totalExpenses ;
    textValue('balance',balance);
   

});

document.getElementById('save-money').addEventListener('click', function(){
    // savings money
    const saveMoney = inputId('save');
    const percent = saveMoney / 100 ;
    const income = inputId('income');
    const SavingsAmount = income * percent ;
// last balance 
    const food = inputId('food');
    const rent = inputId('rent');
    const clothes = inputId('clothes');
    const totalExpenses = food + rent + clothes;
    const balance = income - totalExpenses ;
    const remainingBalance = balance - SavingsAmount;

    if(SavingsAmount < balance){
        textValue('saving-amount',SavingsAmount);
        textValue('remaining-balance',remainingBalance);
    }
    else{
        const errorSaveSing = '"you can,t save money"'
        textValue('saving-amount',errorSaveSing);
        const errorText = '"you have no valid balance"';
        textValue('remaining-balance',errorText);
       
    }

});