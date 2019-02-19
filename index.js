function takeANumber(line,firstName){
 line.push()
  return (`Welcome, You are number ${line.length} in line.`)
 
}

function nowServing(katzDeliLine){
if (katzDeliLine.length===0){
   return (`There is nobody waiting to be served!`) 
}
var line=katzDeliLine.shift();
 
   return "Currently serving " + line + "."; 
  
    }
 

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

