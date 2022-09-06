	var chat = {}
	function write(html) {
  	var newDiv = document.createElement("div");
  	newDiv.innerHTML = html;
  	var currentDiv = document.getElementById("screen");
  	currentDiv.appendChild(newDiv);
	}
	function got(){
        var v = document.getElementById("in").value;
        if (base.hasOwnProperty(v)){
        	search(v)
        } else {
        	if (chat.notMessage === undefined){
        		write(chat.defaultNotMessage)
        	} else{
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
	chat.element = document.getElementById("chat")
	chat.open = function(){chat.element.innerHTML = '<div id="screen"></div><input id="in"></input>'}
	chat.defaultNotMessage = "Tenim aquestes opcions" + JSON.stringify(chat.elements).replaceAll('"',"<br>").replaceAll("[","").replaceAll("]","").replaceAll("à", "&agrave").replaceAll("ò", "&ograve").replaceAll("è", "&egrave").replaceAll("é", "&eacute").replaceAll("ó", "&oacute").replaceAll("í", "&iacute").replaceAll("ú", "&uacute")