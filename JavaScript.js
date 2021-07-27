


var diplayHouse = document.getElementById("btnDisplayHouse").addEventListener("click", houseDisplay);
var refreshHouse =document.getElementById("btnRefreshHouse").addEventListener("click", houseRefresh);

var diplayVeicle = document.getElementById("btnDisplayVehicle").addEventListener("click", vehicleDisplay);
var refreshVehicle =document.getElementById("btnRefreshVehicle").addEventListener("click", vehicleRefresh);

var displaySaving = document.getElementById("btnDisplaySaving").addEventListener("click",savingDisplay);
var refreshSaving =document.getElementById("btnRefreshSaving").addEventListener("click", savingRefresh);
var taxCalculation = document.getElementById("calculateTax").addEventListener("click", calculate);

var sum = tax + grocery + waterAndLight + travel + phone + other;
var expense = income - tax - grocery - waterAndLight - travel - phone - other;


function houseDisplay(){

var income =  Number(document.getElementById("income").value);
var tax = Number(document.getElementById("tax").value);
var grocery= Number(document.getElementById("grocery").value);
var waterAndLight = Number(document.getElementById("waterAndLight").value);
var travel = Number(document.getElementById("travel").value);
var phone = Number(document.getElementById("phone").value);
var other = Number(document.getElementById("other").value);

var sum = tax + grocery + waterAndLight + travel + phone + other;
var expense = income - tax - grocery - waterAndLight - travel - phone - other;

var price =  Number(document.getElementById("price").value);
var deposite =  Number(document.getElementById("deposite").value);
var percentage =  Number(document.getElementById("percentage").value);
var months =  Number(document.getElementById("months").value);
var third = income / 3;


if (months < 250 | months > 360) {
    alert("Number of Months must be between 250 and 360")
    
} else {
    var years = months /12 ;
    var rate = percentage /100;
    var principle = price - deposite;
    
    var monthlypayments =  (principle * (1 + rate * years)) / months;
    if (monthlypayments > third ) {
        document.getElementById("qualify").innerHTML = "Unfortunatly you don't qualify for a home loan"
        document.getElementById("housePayment").innerText ="Monthly House Payment : R" +  monthlypayments;
        document.getElementById("monthlyExpenses").innerHTML = "Total Monthly Expenses Anount : R" + sum;
        document.getElementById("houseAvailable").innerHTML = "Available Amount : R"  + expense;
    } else {
        document.getElementById("qualify").innerHTML = "Congratulation, you qualify!!!! "
        document.getElementById("housePayment").innerText ="Monthly House Payment : R" +  monthlypayments;
        document.getElementById("monthlyExpenses").innerHTML = "Total Monthly Expenses Anount : R" + sum;
        document.getElementById("houseAvailable").innerHTML = "Available Amount : R"  + expense;
    }

    
   console.log(monthlypayments)
}

   



   


}

function houseRefresh(){
    
     document.getElementById("price").value="";
     document.getElementById("deposite").value ="";
     document.getElementById("percentage").value ="";
    document.getElementById("months").value ="";
     

   
}

function vehicleDisplay(){
    var income =  Number(document.getElementById("income").value);
    var tax = Number(document.getElementById("tax").value);
    var grocery= Number(document.getElementById("grocery").value);
    var waterAndLight = Number(document.getElementById("waterAndLight").value);
    var travel = Number(document.getElementById("travel").value);
    var phone = Number(document.getElementById("phone").value);
    var other = Number(document.getElementById("other").value);

    var model =  document.getElementById("model").value;
    var price = Number(document.getElementById("carPrice").value);
    var deposite= Number(document.getElementById("carDeposite").value);
    var interst = Number(document.getElementById("carInterest").value);
    var years = Number(document.getElementById("years").value);
    var insurance = Number(document.getElementById("insurance").value);
   
    var months = years * 12 ;
    var rate = interst/100;
    var principle = price - deposite;

    var monthlypayments =  (principle * (1 + rate * years)) / months;
    var insurancePayment = monthlypayments + insurance;

    var sum = tax + grocery + waterAndLight + travel + phone + other;
    var expense = income - tax - grocery - waterAndLight - travel - phone - other;

    document.getElementById("carModel").innerText ="Model of the Vehicle : " +  model;
    document.getElementById("carPayment").innerHTML = "Total Monthly payments : R" + monthlypayments;
    document.getElementById("insurancePayment").innerHTML = "Monthly Payments including insurance : R" + insurancePayment;
    document.getElementById("vehicleExpenses").innerText ="Total Monthly Expenses Anount : R" +  sum;
    document.getElementById("vehicleAvailable").innerHTML = "Available Amount : R" + + expense;
}

function vehicleRefresh(){
     document.getElementById("model").value ="";
   document.getElementById("carPrice").value ="";
    document.getElementById("carDeposite").value ="";
    document.getElementById("carInterest").value ="";
    document.getElementById("years").value ="";
    document.getElementById("insurance").value = "";
}

function savingDisplay(){

var income =  Number(document.getElementById("income").value);
var tax = Number(document.getElementById("tax").value);
var grocery= Number(document.getElementById("grocery").value);
var waterAndLight = Number(document.getElementById("waterAndLight").value);
var travel = Number(document.getElementById("travel").value);
var phone = Number(document.getElementById("phone").value);
var other = Number(document.getElementById("other").value);

var reason =  document.getElementById("reason").value;
var amount = Number(document.getElementById("amount").value);
var interest= Number(document.getElementById("savingInterest").value);
var years = Number(document.getElementById("savingYears").value);



var months = years * 12 ;
var rate = interest/100;

var saving = (amount *(1 + rate * years)) / months;

var sum = tax + grocery + waterAndLight + travel + phone + other;
var expense = income - tax - grocery - waterAndLight - travel - phone - other;

document.getElementById("savingReason").innerHTML ="Reason for saving : " +  reason;
document.getElementById("saveAmount").innerHTML = "Amount you need to save : R" + saving;
document.getElementById("savingExpense").innerHTML ="Total Monthly Expenses : R" +  sum;
document.getElementById("savingAvailable").innerHTML = "Available Amount : R"  + expense;


}

function savingRefresh(){
      document.getElementById("reason").value = "";
    document.getElementById("amount").value = "";
    document.getElementById("savingInterest").value ="";
    document.getElementById("savingYears").value = "";
}

function calculate(){
    var income = Number(document.getElementById("income").value);

    var res = (income/100) * 15;

    document.getElementById("taxRes").innerHTML = "Tax Paid is : R" + res;
}