function learn(as, w){
	localStorage.setItem(as, w)
}
function hack(w){
	write("Learn: " + JSON.stringify(localStorage) + "<br>History: " + localStorage.history + "<br>Functions and questions: " + all)
}
function get(as){
	localStorage.getItem(as)
}
function color(w){
	document.getElementById("screen").style.backgroundColor = w;
	var colors = w.substr(1).match(/(..?)/g);
	for (c in colors){
		colors[c] = parseInt(colors[c]) + 20;
	}
	document.getElementById("in").style.borderColor = "#" + colors[0].toString() + colors[1].toString() + colors[2].toString();
	document.getElementById("in").style.backgroundColor = w;
	document.getElementById("in").style.color = "#" + colors[0].toString() + colors[1].toString() + colors[2].toString();
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
