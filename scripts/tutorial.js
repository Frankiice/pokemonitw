// Grupo: 05 ; Números: 56929, 57160, 56952 ; Nomes: Francisco Pinto fc56929, Gabriel Azevedo fc57160 e Tiago Rosa fc56952 ; PL: 22


var mybutton = document.getElementById("Btn");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
