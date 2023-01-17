//function definition

function displayGreeting()
{
	document.write("Hi there");
}

//function that can receive a value
function displayScore(theScore)
{
	// add 1000 to the score 
	theScore += 1000;
	document.write("</br> Player score: " + theScore);
}

function addTheseValues(x,y)
{
	//document.write(x + y);
	
	//return values 
	return(x+y);
}