// Funtion to greet based on the time of day 
function greet(time) {
	if (time < 12) {
		console.log("Good Morning!");
	} else if (time<18) {
		console.log("Good Afternoon!");
	} else {
		console.log("Good Evening!");
	}
}

// Call the greet function with a sample time
greet(14); // should print "Goood Afternoon!" if run in the afternoon 

// Array of names
const names = ["Alice","Bob","Charlie","Diana"];

// Loop to greet each name 
for (let name of names){
	console.log("Hello, "+ name + "!");
}  

