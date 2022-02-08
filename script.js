function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear() + parseInt(years);

    //use .innerhtml to display inline html tags preoperly, innertext for raw string output
    document.getElementById("result").innerHTML = "<br>If you deposit <mark>" + principal + "</mark>,<br> at an interest of <mark>"
    + rate + "%</mark>. <br>" + "You will recieve an amount of <mark>" + interest + "</mark>, <br> in the year <mark>" + year + "</mark>.";

    
}
        
function updateRate(){
    //make sure to use .value , do not use value(), to get number to update properly
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval + '%';
}

function checkNum(){
    var principal = document.getElementById("principal").value;
    if (principal <= 0){
        alert("Enter a positive number. ")
    }
    //focus on principal field after alert
    document.getElementById("principal").focus();
}