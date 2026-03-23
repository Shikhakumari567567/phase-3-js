// button select
let btn = document.getElementById("calculate");

// event
btn.addEventListener("click", function(){

    // input values
    let billAmount = document.getElementById("billAmount").value;
    let tipAmount = document.getElementById("tipAmount").value;
    let numberOfPeople = document.getElementById("numberOfPeople").value;

    // convert string to number
    billAmount = Number(billAmount);
    tipAmount = Number(tipAmount);
    numberOfPeople = Number(numberOfPeople);

    // total tip
    let totalTip = (billAmount * tipAmount) / 100;

    // total bill
    let totalBill = billAmount + totalTip;

    // per person bill
    let perPerson = totalBill / numberOfPeople;

    // output show
    document.getElementById("totalTip").value = totalTip;
    document.getElementById("totalBill").value = totalBill;
    document.getElementById("perPerson").value = perPerson;

});