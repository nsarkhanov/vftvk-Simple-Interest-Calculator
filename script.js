function checkerror(p,y,r){

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
function checkdata(p,r,y){
     if (p<=0){
        alert("Amount must be bigger than  0 ");
        return false;
        }
          if (r<=0) {
        alert("Rate must be bigger than  0 ");
        return false;
        }
      if (y<=0){
        alert(" Year  must be bigger than  0 ");
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
    var checkerr=checkerror(p,y,r)
    var checkd=checkdata(p,r,y)
    if( checkerr==true && checkd==true){

    document.getElementById("result_amount").innerHTML =p;
    document.getElementById("result_rate").innerHTML =r;
    document.getElementById("result_result").innerHTML =result;
    document.getElementById("result_year").innerHTML =year;
    // document.getElementById("deposit").innerHTML = "write me to the screen";
    }
    else {
        checkerror(p,y,r)
      
    }
   
        



}