function e(p,y,r){

    if (p==null || p==""){
        alert("Amount must be filled out");
        return false;
        }
          if (r==null || r=="") {
        alert("Rate must be filled out");
        return false;
        }
      if (y==null || y==""){
        alert(" Year  must be filled out");
        return false;
        }
        else{
            return true;
        }
}
function compute()
{
    var p = document.getElementById("principal").value;
    var r = document.getElementById("rateInput").value;
    var y = document.getElementById("years").value;  
    var time = new Date().getFullYear();
    year=parseInt(time)+parseInt(y);
    result = parseInt(p*r*y) ;
    // document.getElementById("result").innerHTML ="If you deposit " +p+"at an interest rate " +r+" You will receive an amount of "+result+", in the "+year;
    // document.getElementById("deposit").innerHTML = "write me to the screen";
    var check=e(p,y,r)
    if (check==true){

    document.getElementById("result").innerHTML ="If you deposit " +p+"at an interest rate " +r+" You will receive an amount of "+result+", in the "+year;
    // document.getElementById("deposit").innerHTML = "write me to the screen";
    }
    else {
        e(p,y,r)
    }
   
        



}