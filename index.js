var messages = ["Happy birthday to GFG",
	"Happy birthday to GeeksforGeeks",
	"Happy birthday to Geeks"];

var i = messages.length;
var s = Math.floor(Math.random() * i);

document.getElementById("msg")
	.innerHTML = '" ' + messages[s] + ' "';

