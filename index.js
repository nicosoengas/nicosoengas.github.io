var messages = ["Feliz cumple Cin!!!",
	"Buen dia para todos alla en comarca El Maresme",
	"Nos vemos esta noche"];

var i = messages.length;
var s = Math.floor(Math.random() * i);

document.getElementById("msg")
	.innerHTML = '" ' + messages[s] + ' "';

