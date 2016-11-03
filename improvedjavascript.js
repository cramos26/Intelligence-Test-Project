var totalpoints;
var correctanswerforfirst = 10;
var correctanswerforsecond = 10;
var correctanswerforthird = 10;

function checkfirst()
{
  var userfirstanswer;
  userfirstanswer = document.getElementById("firstproblem").value;
  if (isNaN('userfirstanswer') == true)
  { alert("Only numerical answers are accepted!")}
  else if (userfirstanswer == correctanswerforfirst)
  { totalpoints += 1;
  setCookie("pointsforfirst",totalpoints)}
  else
  { totalpoints = totalpoints;
  setCookie("pointsforfirst", totalpoints)}
}

function checksecond()
{
  var usersecondanswer;
  usersecondanswer = document.getElementById("secondproblem").value;
  if (isNaN('usersecondanswer') == true)
  { alert("Only numerical answers are accepted!")}
  else if (usersecondanswer == correctanswerforsecond)
  { totalpoints += 1;
  setCookie("pointsforsecond",totalpoints)}
  else
  { totalpoints = totalpoints;
  setCookie("pointsforsecond", totalpoints)}
}

function checkthird()
{
  var userthirdanswer;
  userthirdanswer = document.getElementById("thirdproblem").value;
  if (isNaN('userthirdanswer') == true)
  { alert("Only numerical answers are accepted!")}
  else if (userthirdanswer == correctanswerforthird)
  { totalpoints += 1;
  setCookie("pointsforthird",totalpoints)}
  else
  { totalpoints = totalpoints;
  setCookie("pointsforthird", totalpoints)}
}

function convertingpointstopercentages(points)
{
  return points * 33 + "%";
}

function calculatepercentage()
{
  var firstpoints = getCookie("pointsforfirst");
  var secondpoints = getCookie("pointsforsecond");
  var thirdpoints = getCookie("pointsforthird");
  firstpercentage = convertingpointstopercentages(firstpoints);
  secondpercentage = convertingpointstopercentages(secondpoints);
  thirdpercentage = convertingpointstopercentages(thirdpoints);
  totalpercentage = firstpercentage + secondpercentage + thirdpercentage;
  document.getElementById("firststat").innerHTML = firstpercentage;
  document.getElementById("secondstat").innerHTML = secondpercentage;
  document.getElementById("thirdstat").innerHTML = thirdpercentage;
  document.getElementById("finalcount").innerHTML = totalpercentage;
}
