function calculate(){
    var billAmt = document.getElementById("billamt").value;
    var taxPercent = document.getElementById("selectOption").value;
    var numPpl = document.getElementById("inputPpl").value;

    if (billAmt === "" || taxPercent == 0){
        alert("Please enter necessary values");
        return;
    }


    if (numPpl === ""|| numPpl <=1){
        numPpl = 1;

    }


    var total = (billAmt * taxPercent) / numPpl;
    total = Math.round(total*100) / 100;
    total = total.toFixed(2);
    document.getElementById("tip").innerHTML = total;
}

document.getElementById("btnCalc").onclick = function () {calculate();};