//                     JS Mini Challenges
// 1. Create a script with two variables, each assigned to a number. 
// Add them together and output the result to the console. 
// Now do the same with two strings.

var num1 = 3;
var num2 = 4;

console.log(num1 + num2);

var string1 = "Jarvis";
var string2 = "Potter";

console.log(string1 + ' ' + string2);

// 2. Create a multidimensional array related to a subject that interests you. 
// Output two of the items in sub-arrays to the console.

var array = ["Javscript", "Node", "React", "Express"]
var multidimensional = [["javascript", "html"], ["java", "python"]]

console.log(multidimensional[0][1])
console.log(array[1]);
console.log(array[0]);

// 3. Write a script that checks if a variable is less than 100. 
// If it is, alert the user that their variable is less than 100. 
// If it is not alert the user of what the value was and that it was greater than 100.

var number = prompt("Please Enter a Number");

if( number < 100 ) {  
	alert(number + " is less than 100") 
	console.log( number + " is less than 100" );
} else { 
	alert( number + " is greater than or equal to 100") 
	console.log( number + " is greater than or equal to 100")
}
// 4. Declare a function that takes a name as an argument and tells the user 
// what name they've entered. Try running it after it has been declared.

function person(name) {
    console.log("you entered " + name);
}

person("jarvis");

// 5. Declare a function that depending upon which virtual 'door' was entered 
// tells the user they've received a different 'prize' in an alert. 
// After declaring the function, try running it with different options. 
// There must be at least 3 doors.

function doorGames() {
	var door = parseInt(prompt("Please pick a door 1-3"));
	if(door === 1) {
		console.log("You picked door number " + door + " and won a brand new car!");
	}	else if (door === 2) {
		console.log("You picked door number " + door + " and won a brand new house!");
	}	else if (door === 3) {
		console.log("You picked door number " + door + " and won a brand new toilet bowel!");
	}	else {
		console.log("Try again");
	}
}
doorGames();
//doorGames();
//doorGames();


//                    Scope/DOM/Event Mini Challenges
// 1. Create an HTML page with two buttons that argue with each other. 
// When one button is clicked, the text "I'm right" should be placed next to 
// it. When the other button is clicked, the text is replaced with, 
// "No, I'm right!"

document.addEventListener("DOMContentLoaded",function(){
    document.getElementById("oneClick").onclick = function(){ document.getElementById("click").innerHTML = "I'm Right";}
    document.getElementById("twoClick").onclick = function(){ document.getElementById("click").innerHTML = "No, I'm Right!";}
})

// 2. Create an HTML page with a large element on the page that says 
// "Don't hover over me" inside of it. When you hover over the element, 
// send an alert to the user that says, "Hey, I told you not to hover over me!"

document.addEventListener("DOMContentLoaded", function(){
  document.getElementById('hover-h2').onmouseover = function(){
    alert("Don't hover over me")
  }
})

// 3. Create an HTML page with javascript that listens for a keypress.
// When the user presses that key, the text of the H1 should show the value 
// of the key they have pressed.
// Example: If the user presses "J", the text inside the H1 should be "J".

document.addEventListener("keypress",function(event){
  console.log( "You pressed the " + event.key + " key" );
  if( event.key == ' ' ) {
    document.querySelector("h1").innerHTML += "&nbsp;";
    event.preventDefault();
  } else {
    document.querySelector("h1").innerText += event.key;
  }
  
});

// 4. Create an HTML page with a form. The form should include inputs for a 
// username, email, and password as well as a submit button.
// In a Javascript file, write code that does the following things:
//    checks that the password is 12345678
//    checks that the username contains at least one number
//    if anything is wrong, send an alert message saying "incorrect"
// Your page should also include an H1 tag. If the information in the form 
// is correct, have Javascript change the text in the H1.

document.addEventListener("DOMContentLoaded", function(){
  document.getElementById('submit').addEventListener('click', function(event){
    event.preventDefault()
    
    var username = document.getElementById('username').value
    var password = document.getElementById('password').value

    if( /\d+/.test(username) == false ) {
      alert('username is incorrect')
    } else if(password != '12345678'){
      alert('password is incorrect')
    } else {
       document.getElementById('login-h1').innerText = 'Successful Login'
    }
    
  })
}) 
