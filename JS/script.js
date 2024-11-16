/* DECLARANDO VARIAVEIS DO MENU */

var home;
var employments;
var history;
var projects; 
var other;

var help;

/* DECLARANDO VARIAVEIS DO BODY */




/* DECLARANDO VARIAVEIS DO CTF */


/* FUNCOES MENU NAVEGACAO */

function selectPage(home, projects, history, employments,other,help) {
 
    var mybutton = document.getElementById("myBtn");

// quando rolar a página 20px do topo para baixo, o botão será exibido
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// // quando clicar no botão, a página rola para o topo do documento
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
    
}