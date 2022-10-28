// getting the value of input num1 and using the formula of specific measurement to calculate
function gram() {
    let x = document.getElementById("num1").value
    let y = x * 1000;
    document.getElementById("num2").value = y;
    document.getElementById("num2Label").innerHTML = "To Grams";
}

function milligram() {
    let x = document.getElementById("num1").value
    let y = x * 1000000;
    document.getElementById("num2").value = y;
    document.getElementById("num2Label").innerHTML = "To Milligrams";
}

function metricton() {
    let x = document.getElementById("num1").value
    let y = x / 1000;
    document.getElementById("num2").value = y;
    document.getElementById("num2Label").innerHTML = "To Metric Tons";
}