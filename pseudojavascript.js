/*
function introduceguest()
{
  var guest = prompt("Please enter your name","Enter here!");
  if (guest != null)
  {
    document.getElementById("Introduction").innerHTML = "Hello " + guest + " ! Welcome to the Pseudo Intelligence Test created by Cesar Ramos!";
  }
}
*/
function checknumbersonly ()
{
  var input = document.getElementById("usertext").value
  if (NaN(input)==true)
  {
    document.getElementById("paragraph").innerHTML = "Answer must be a number!"
  }
}

var correctanswerforfirst = 10;
var correctanswerforsecond = 10;
var correctanswerforthird = 10;
var total1 = 0;
var total2 = 0;
var total3 = 0;
var finalcount = 0;

function calculatepercentage1()
  {
  firstproblem = document.getElementById("firstproblem").value;
  if (firstproblem == correctanswerforfirst)
  { total1 = "100%"; finalcount = finalcount + 1; }
  else { total1 = "0%"; finalcount = finalcount}
  setCookie("percentage1",finalcount);
}
function calculatepercentage2()
{
  secondproblem = document.getElementById("secondproblem").value;
  if (secondproblem == correctanswerforsecond)
  { total2 = "100%"; finalcount = finalcount + 1; }
  else { total2 = "0%"; finalcount = finalcount; }
  setCookie("percentage2",finalcount);
}
function calculatepercentage3()
{
  if (thirdproblem = correctanswerforthird)
  { total = "100%"; finalcount = finalcount + 1; }
  else { total = "0%"; finalcount = finalcount; }
  setCookie("percentage3",finalcount);
}
function displaypercentages()
{
  var firststatistic = getCookie("percentage1");
  var secondstatistic = getCookie("percentage1");
  var thirdstatistic = getCookie("percentage1");

  document.getElementById("firststat").innerHTML = firststatistic;
  document.getElementById("secondstat").innerHTML = secondstatistic;
  document.getElementById("thirdstat").innerHTML = thirdstatistic;
}
/*
var accumulatedcount = finalcount;
case = accumulatedcount;
var text;
  switch (perc)
{
  case "0"
  text = "0%";
  break;
  case "1"
  text = "33%";
  break;
  case "2"
  text = "66%"
  break;
  case "3"
  text = "100%";
  break;
}
  document.getElementById("finalcount").innerHTML = text;
*/
  
