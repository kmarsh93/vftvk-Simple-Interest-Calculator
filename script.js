function compute()
{
    //Create variables
var principal = document.getElementById("principal").value;
var rate = document.getElementById("rate").value;
var years = document.getElementById("years").value;

    //Calculation
var interest = principal * years * rate / 100;
var year = new Date().getFullYear() + parseInt(years);
    
    //Validate principal. If negative or 0 alert user and focus on principal
if(principal <= 0){
    alert("Please enter a positive number");
    document.getElementById("principal").focus();
    return false;
}

    //display result
document.getElementById("result").innerHTML="If you deposit <mark>£"+principal+"</mark>, at an interest rate of <mark>"+rate+"%</mark>\<br\><br/>You will receive interest of <mark>£"+interest+"</mark>, in the year <mark>"+year+"</mark>\<br\>"
}

    //Range slider scripting
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}