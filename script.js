function handleProductChange(isIncrease){
    const inputAmount = document.getElementById('case-amount');
    const inputCount = parseInt(inputAmount.value);
    let inputNewCount = inputCount;
    if (isIncrease == true){
        inputNewCount = inputCount + 1;
    }
    if(isIncrease == false && inputCount > 0){
        inputNewCount = inputCount - 1;
    }
    
    inputAmount.value = inputNewCount;
    const caseTotal = inputNewCount * 1219;
    document.getElementById('price').innerText = '$' + caseTotal;
}