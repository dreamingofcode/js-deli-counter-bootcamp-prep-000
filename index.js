function takeANumber(line,firstName){
 line.push(firstName)
  return (`Welcome, ${firstName}. You are number ${line.length} in line.`)
  line++
}

function nowServing(katzDeliLine){
if (katzDeliLine.length===0){
   return (`There is nobody waiting to be served!`) 
}
var line=katzDeliLine.shift();
 
   return "Currently serving " + line + "."; 
  
    }
 
<<<<<<< HEAD
var currentLine = function (katzDeliLine)
{
  if (katzDeliLine.length===0)
  {  return "The line is currently empty."}
  
  var nameAndNumber=[];
    for ( var i=0; i<katzDeliLine.length;i++)
  { nameAndNumber.push(i+1 +  ". " + katzDeliLine[i])
    
  }
   return "The line is currently: " +nameAndNumber.join(", ");
}
=======
var currentLine = function (katzDeliLine) {
  if (katzDeliLine.length===0) {
  return "The line is currently empty.";
}
   var customerAndNumber = [];
   for (var i=0; i<katzDeliLine.length; i++) {
   customerAndNumber.push(i+1 + ". " + katzDeliLine[i])
}
  return "The line is currently: " + customerAndNumber.join(", ");
}
>>>>>>> 62b6658e581de4b8fee9756c119ac30293c9bc6c
