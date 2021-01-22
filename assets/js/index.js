//type writer effect for heading text
var text = document.getElementById('intro-subtitulo');
var str = text.innerHTML;
text.innerHTML = "";

var speed =50;
var i=0;
//typerwriter effect
function typeWriter(){
    if( i < str.length){
        text.innerHTML += str.charAt(i);
        i++;
        setTimeout(typeWriter,speed);        
    }
}

setTimeout(typeWriter,speed)