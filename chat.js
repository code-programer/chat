function hack(w){
	write("Entering " + w + " server...<br>Passcode " + Math.floor(Math.random() * 100000000) + "<br>Data ")
	while(true){
		write(Math.floor(Math.random() * 100000000))
	}
}
function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}
function learn(as, w){
	localStorage.setItem(as, w)
}
function get(as){
	localStorage.getItem(as)
}
function color(w){
	document.getElementById("screen").style.backgroundColor = w;
	var colpors = hexToRgb(w);
	var colors = [];
	colors.push(colpors.r)
	colors.push(colpors.g)
	colors.push(colpors.b)
	for (c in colors){
		colors[c] = parseInt(colors[c]) + 20;
	}
	document.getElementById("in").style.borderColor = rgbToHex(colors[0], colors[1], colors[2])
	document.getElementById("in").style.backgroundColor = w;
	document.getElementById("in").style.color = rgbToHex(colors[0], colors[1], colors[2]);
}
function write(html) {
  	var newDiv = document.createElement("div");
  	newDiv.innerHTML = html;
  	var currentDiv = document.getElementById("screen");
  	currentDiv.appendChild(newDiv);
}
function got(){
        var v = document.getElementById("in").value;
	if (v.charAt(0) == "/"){
		eval(document.getElementById("in").value.substr(1))
		document.getElementById("in").value = "";
	}
	else{
       		if (base.hasOwnProperty(v)){
        		search(v)
        	} else {
      			write(chat.notMessage)
      		}
	}
    }
    function advance(event) {
  if (event instanceof MouseEvent) {
    console.log('clicked');
  } else if (event instanceof KeyboardEvent && event.keyCode === 13) {
    got()  
}
}
window.addEventListener('keypress', advance);
	/*function*/
	localStorage.scroll	= 1;
	q = new URLSearchParams(window.location.search).get('q');
	search(q)
	function search(query){
		var ta = base[query].replaceAll("<","&lt").replaceAll(">","&gt").replaceAll("à", "&agrave").replaceAll("ò", "&ograve").replaceAll("è", "&egrave").replaceAll("é", "&eacute").replaceAll("ó", "&oacute").replaceAll("í", "&iacute").replaceAll("ú", "&uacute").replaceAll("$1","<").replaceAll("$2",">")
		write(ta + "<br><br><br>")
		document.getElementById("in").value = ""
		document.getElementById("in").focus()	
		var scroll = localStorage.scroll + 1;
		document.getElementById("screen").scrollTo(0,9000 * scroll)
		localStorage.scroll = scroll;
}
