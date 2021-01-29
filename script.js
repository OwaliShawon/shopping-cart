function handleProductChange(product, isIncrease){
    const inputAmount = document.getElementById(product + '-amount');
    const inputCount = parseInt(inputAmount.value);

    let inputNewCount = inputCount;
    if (isIncrease == true){
        inputNewCount = inputCount + 1;
    }
    if(isIncrease == false && inputCount > 0){
        inputNewCount = inputCount - 1;
    }

    inputAmount.value = inputNewCount;
    let  priceTotal = 0;
    if(product == 'phone'){
         priceTotal = inputNewCount * 1219;
    }
    if(product == 'case'){
        priceTotal = inputNewCount * 59;
    }
    
    document.getElementById(product + '-price').innerText = '$' + priceTotal;

    calculateTotal();
}

function calculateTotal(){
    // const phoneInput = document.getElementById('phone-amount');
    // const phoneCount = parseInt(phoneInput.value);
    
    // const caseInput = document.getElementById('case-amount');
    // const caseCount = parseInt(caseInput.value);

    const phoneCount = getInputValue('phone');
    const caseCount = getInputValue('case');
    const grandTotal = (phoneCount * 1219) + (caseCount * 59);
    document.getElementById('grand-total-price').innerText = '$' + grandTotal;
}

function getInputValue(product){
    const productInput = document.getElementById(product + '-amount');
    const productCount = parseInt(productInput.value);
    return productCount;
}

//  function for phone count and prices changes
// function handleProductChange(isIncrease){
//     const inputAmount = document.getElementById('phone-amount');
//     const inputCount = parseInt(inputAmount.value);
//     let inputNewCount = inputCount;
//     if (isIncrease == true){
//         inputNewCount = inputCount + 1;
//     }
//     if(isIncrease == false && inputCount > 0){
//         inputNewCount = inputCount - 1;
//     }
    
//     inputAmount.value = inputNewCount;
//     const priceTotal = inputNewCount * 1219;
//     document.getElementById('price').innerText = '$' + priceTotal;
// }



//  function for case count and prices changes
// function handleCaseChanges(isIncrease){
//         const caseInput = document.getElementById("case-amount");
//         const caseCount = parseInt(caseInput.value);
//         let newCaseCount = caseCount;
//         if(isIncrease == true){
//             newCaseCount = caseCount + 1;
//         }
//         if(isIncrease == false && caseCount > 0){
//             newCaseCount = caseCount - 1;
//         }
//         caseInput.value = newCaseCount;
//         const caseTotalPrice = newCaseCount * 59;
//         document.getElementById('case-price').innerText = '$' + caseTotalPrice;
// }


// case prices and quantity changes
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


