
//Calculate Tip
function calculate() {
    //Variables to grab the textboxes and dropdown boxes.
    var billAmt = document.getElementById("billamt").value;
    var taxPercent = document.getElementById("selectOption").value;
    var numPpl = document.getElementById("inputPpl").value;
    //Checking if the values are 0 or left blank.
    if (billAmt === "" || taxPercent == 0) {
        alert("Please enter values");
        return;
    }

    if (numPpl === "" || numPpl <= 1) {
        numPpl = 1;
        document.getElementById("each").style.display = "none";
    } else {
        document.getElementById("each").style.display = "block";
    }
    //Tip calculation
    var total = (billAmt * taxPercent) / numPpl;
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);
    document.getElementById("tipDisplay").style.display = "block";

    //Display of the tip
    document.getElementById("tipDisplay").style.display = "block";
    document.getElementById("tip").innerHTML = total;
}


    //Hides the tips before it comes out
document.getElementById("tipDisplay").style.display = "none";
document.getElementById("each").style.display = "none";
    //When butotn is clicked, the calculate function is carried out
document.getElementById("btnCalc").onclick = function () { calculate(); };

