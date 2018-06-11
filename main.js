function Hey() {
	alert("Hey le site xxxvidsxxx est trop bien. Viens dessus stp please");
}

var set = 0;

function change() {
	if ( set == 0){
		set++;
		document.body.style.backgroundColor = "magenta";

		var px = document.getElementsByClassName("para");
		for (var i = 0; i < px.length; i++) {
		px[i].style.color="blue";
		px[i].style.fontFamily = "papyrus";
		}
    
		var hx = document.getElementsByClassName("headers");
		for (var j = 0; j < hx.length; j++) {
		hx[j].style.color="green";
		hx[j].style.fontFamily = "Comic Sans MS";
		}
	}
	 else if (set == 1){
		set--;
		document.body.style.backgroundColor = "transparent";

		var px = document.getElementsByClassName("para");
		for (var i = 0; i < px.length; i++) {
		px[i].style.color="inherit";
		px[i].style.fontFamily = "inherit";
		}
    
		var hx = document.getElementsByClassName("headers");
		for (var j = 0; j < hx.length; j++) {
		hx[j].style.color="inherit";
		hx[j].style.fontFamily = "inherit";
		}
	}
}