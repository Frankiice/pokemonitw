// Grupo: 05 ; Números: 56929, 57160, 56952 ; Nomes: Francisco Pinto fc56929, Gabriel Azevedo fc57160 e Tiago Rosa fc56952 ; PL: 22

window.onload = principal;



//Titulos dos ids:

//nome
//timePlayed
//pokemonDefeated
//gymsDefeated
//discoveredMaps
//stepsTaken
//experienceTotal

function principal(){


    document.getElementById("nome").innerHTML = localStorage.getItem("username")
    document.getElementById("timePlayed").innerHTML = localStorage.getItem("tempoJogado") + "s"
    document.getElementById("pokemonDefeated").innerHTML = localStorage.getItem("pokemonsDerrotados")
    document.getElementById("gymsDefeated").innerHTML = localStorage.getItem("GinasiosDerrotados")
    document.getElementById("discoveredMaps").innerHTML = localStorage.getItem("Mapas")
    document.getElementById("stepsTaken").innerHTML = localStorage.getItem("passos")
    document.getElementById("experienceTotal").innerHTML = Number(localStorage.getItem("nivel"))*150+(Number(localStorage.getItem("pokemonsDerrotados"))*50)


}