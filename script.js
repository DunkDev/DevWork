var jsTest = document.getElementById("jsTest");
var id = "jsTest";
var projName = "Test";
 
jsTest.addEventListener("mouseover",timeOn);
jsTest.addEventListener("mouseout",timeOff);
 
function timeOn(){
var projDate = new Date();
document.getElementById(id).innerHTML = projDate;
}
 
function timeOff(){
document.getElementById(id).innerHTML = projName;
}