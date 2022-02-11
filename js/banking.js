function getInputValue(inputid) {
    const inputField = document.getElementById(inputid);
    const inputAmountText = inputField.value;
    const inputValue = parseFloat(inputAmountText);
    inputField.value = '';
    return inputValue;
}









document.getElementById('deposit-button').addEventListener('click', function () {

    // const depositInput = document.getElementById('deposit-input');
    // const depositAmounttext = depositInput.value;
    // const depositAmount = parseFloat(depositAmounttext);
    const depositAmount = getInputValue('deposit-input');

    // current deposit 
    const depositTotal = document.getElementById('deposit-total');
    const depositTotaltext = depositTotal.innerText;
    const previousdepositTotal = parseFloat(depositTotaltext);
    depositTotal.innerText = depositAmount + previousdepositTotal;


    // balance deposit
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText
    const balanceTotalAmount = parseFloat(balanceTotalText);
    balanceTotal.innerText = depositAmount + balanceTotalAmount;



})


// withdrow account 

document.getElementById('withdrow-button').addEventListener('click', function () {
    // const withdrowinput = document.getElementById('withdrow-input');
    // const withdrowAmountText = withdrowinput.value;
    // const withdrowAmount = parseFloat(withdrowAmountText);
    const withdrowAmount = getInputValue('withdrow-input');

    // withdrow 
    const withdrowTotal = document.getElementById('withdrow-total');
    const withdrowTotalText = withdrowTotal.innerText;
    const withdrowTotalAmount = parseFloat(withdrowTotalText);
    withdrowTotal.innerText = withdrowAmount + withdrowTotalAmount;

    // balance withdrow 
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText
    const balanceTotalAmount = parseFloat(balanceTotalText);
    balanceTotal.innerText = balanceTotalAmount - withdrowAmount;





})