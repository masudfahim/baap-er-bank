function getInputValue(inputid) {
    const inputField = document.getElementById(inputid);
    const inputAmountText = inputField.value;
    const inputValue = parseFloat(inputAmountText);
    inputField.value = '';
    return inputValue;
}
function updateTotalField(totalFieldid, amount) {
    const totalElement = document.getElementById(totalFieldid);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);
    totalElement.innerText = amount + previousTotal;


}

function updateBalance(depositAmount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText
    const balanceTotalAmount = parseFloat(balanceTotalText);

    if (isAdd == true) {
        balanceTotal.innerText = depositAmount + balanceTotalAmount;
    }
    else {
        balanceTotal.innerText = balanceTotalAmount - depositAmount;
    }

}




document.getElementById('deposit-button').addEventListener('click', function () {

    // const depositInput = document.getElementById('deposit-input');
    // const depositAmounttext = depositInput.value;
    // const depositAmount = parseFloat(depositAmounttext);


    // current deposit 

    // const depositTotal = document.getElementById('deposit-total');
    // const depositTotaltext = depositTotal.innerText;
    // const previousdepositTotal = parseFloat(depositTotaltext);
    // depositTotal.innerText = depositAmount + previousdepositTotal;
    const depositAmount = getInputValue('deposit-input');
    updateTotalField('deposit-total', depositAmount);
    updateBalance(depositAmount, true);


    // balance deposit
    // const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText
    // const balanceTotalAmount = parseFloat(balanceTotalText);
    // balanceTotal.innerText = depositAmount + balanceTotalAmount;




})


// withdrow account 

document.getElementById('withdrow-button').addEventListener('click', function () {
    // const withdrowinput = document.getElementById('withdrow-input');
    // const withdrowAmountText = withdrowinput.value;
    // const withdrowAmount = parseFloat(withdrowAmountText);
    const withdrowAmount = getInputValue('withdrow-input');
    updateTotalField('withdrow-total', withdrowAmount);
    updateBalance(withdrowAmount, false)
    // withdrow 
    // const withdrowTotal = document.getElementById('withdrow-total');
    // const withdrowTotalText = withdrowTotal.innerText;
    // const withdrowTotalAmount = parseFloat(withdrowTotalText);
    // withdrowTotal.innerText = withdrowAmount + withdrowTotalAmount;


    // balance withdrow 
    // const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText
    // const balanceTotalAmount = parseFloat(balanceTotalText);
    // balanceTotal.innerText = balanceTotalAmount - withdrowAmount;






})