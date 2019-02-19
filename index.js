var tally=0;
function takeANumber(line){
 tally++;
 line.push(tally)
 
  return (`Welcome, You are number ${tally} in line.`)
 
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
  return "The line is currently: " + KatzDeliLine.join(", ");
}

