//Retriving the Values for Both the Input Fields
var x = document.getElementById("input1");
var input_2 = document.getElementById("input_2");
//var input_3 = document.getElementById("input_3");

//Retrieving the Button Elements by Id
btn_1 = document.getElementById("btn_1");
btn_2 = document.getElementById("btn_2");
btn_3 = document.getElementById("btn_3");

//disabling the Start Button
document.getElementById("btn_2").disabled = true;

//onclick event for Start Button
btn_1.onclick = function(){
  var str=x.value;
  // var sv = str.charAt(0);
  // var vs = str.charAt((x.length)-1);
  if(document.getElementById("input1").value.length == 0 || document.getElementById("input1").value == ' '){
    alert("Please Enter a Valid Input !!!");
  }
  //else if(sv != '"' && vs != '"'){
    //alert("Please Put \" \" before Strings");
//  }
  else if(!isNaN(input1.value)){
    alert("!!!!Only Strings are Allowed");
  }
  else{
    document.getElementById("step").style.display = "block";
    document.getElementById("btn_1").disabled = true;
    document.getElementById("btn_2").disabled = false;
    }
  }

 //Global Variable to Permanently Store the Counter for the Array
 var i = 0;

//Function for Indexing in strings
function Indexing(){
  var str=x.value;
  var val=parseInt(input_2.value);
  var len=parseInt(str.length);
  var index=(len+val);
  if(val < 0){
    var vc = str.charAt(index-1);
    document.getElementById("res_2").innerHTML = vc;
  }
  else{
    var cv = str.charAt((input_2.value));
    document.getElementById("res_2").innerHTML = cv;
  }
}
  //onclick event for Start button
  btn_2.onclick = function(){
    var v = [1,2,3,4];
    if(v[i] == 1){
      document.getElementById("1").style.color = "red";
      i++;
    }
    else if(v[i] == 2) {
      document.getElementById("2").style.color = "red";
      i++;
    }
    else if(v[i] == 3){
      document.getElementById("3").style.color = "red";
      document.getElementById("res_1").style.display = "block";
      document.getElementById("res_2").style.display = "block";
      Indexing();
      i++;
    }
    else if(v[i] == 4) {
      alert('Program Completed');
    }
  }

  //onclick event for Reset button
  btn_3.onclick = function(){
    location.reload(true);
  }
