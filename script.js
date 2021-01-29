function handleProductChange(isIncrease){
    const inputAmount = document.getElementById('phone-amount');
    const inputCount = parseInt(inputAmount.value);
    let inputNewCount = inputCount;
    if (isIncrease == true){
        inputNewCount = inputCount + 1;
    }
    if(isIncrease == false && inputCount > 0){
        inputNewCount = inputCount - 1;
    }
    
    inputAmount.value = inputNewCount;
    const priceTotal = inputNewCount * 1219;
    document.getElementById('price').innerText = '$' + priceTotal;
}

function handleCaseChanges(isIncrease){
        const caseInput = document.getElementById("case-amount");
        const caseCount = parseInt(caseInput.value);
        let newCaseCount = caseCount;
        if(isIncrease == true){
            newCaseCount = caseCount + 1;
        }
        if(isIncrease == false && caseCount > 0){
            newCaseCount = caseCount - 1;
        }
        caseInput.value = newCaseCount;
        const caseTotalPrice = newCaseCount * 59;
        document.getElementById('case-price').innerText = '$' + caseTotalPrice;
}

// document.getElementById('plus-button').addEventListener("click", function(){
//     const caseInput = document.getElementById("case-amount");
//     const caseCount = parseInt(caseInput.value);
//     const newCaseCount = caseCount + 1;
//     caseInput.value = newCaseCount;
//     const caseTotalPrice = newCaseCount * 59;
//     document.getElementById('case-price').innerText = '$' + caseTotalPrice;
//     // console.log(newCaseCount);
// })
// document.getElementById('minus-button').addEventListener("click", function(){
//     const caseInput = document.getElementById("case-amount");
//     const caseCount = parseInt(caseInput.value);
//     const newCaseCount = caseCount - 1;
//     caseInput.value = newCaseCount;
//     const caseTotalPrice = newCaseCount * 59;
//     document.getElementById('case-price').innerText = '$' + caseTotalPrice;
//     // console.log(newCaseCount);
// })


