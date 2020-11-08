var jogada = 1;
var fim_x = true;
var fim_o = true;
var all_buttons = document.querySelectorAll(".button-all");

function iniciar() {
    jogada = 1;
    fim_x = false;
    fim_o = false;
    var all_buttons = document.querySelectorAll(".button-all");
    all_buttons.forEach(function(element){
        element.value = "";
    });
    document.querySelector('div#jogada').innerText=`Bom jogo!`;
    document.querySelector('input#iniciar').value=`Jogar novamente!`;
}

function clicou(botao) {
    if (botao.value == "" && fim_x == false && fim_o == false) {
        if (jogada == 1) {
            botao.value = "X";
            jogada = 2;
            document.querySelector('div#jogada').innerText="...";
        } else {
            botao.value = "O";
            jogada = 1;
            document.querySelector('div#jogada').innerText="...";
        }
    }
    
    var a1 = document.querySelector('input#a1').value;
    var a2 = document.querySelector('input#a2').value;
    var a3 = document.querySelector('input#a3').value;
    var b1 = document.querySelector('input#b1').value;
    var b2 = document.querySelector('input#b2').value;
    var b3 = document.querySelector('input#b3').value;
    var c1 = document.querySelector('input#c1').value;
    var c2 = document.querySelector('input#c2').value;
    var c3 = document.querySelector('input#c3').value;

    if ((a1 == "X" && a2 == "X" && a3 == "X") || (b1 == "X" && b2 == "X" && b3 == "X") || (c1 == "X" && c2 == "X" && c3 == "X") || (a1 == "X" && b1 == "X" && c1 == "X") || (a2 == "X" && b2 == "X" && c2 == "X") || (a3 == "X" && b3 == "X" && c3 == "X") || (a1 == "X" && b2 == "X" && c3 == "X") || (a3 == "X" && b2 == "X" && c1 == "X")) {
        fim_x = true;
        document.querySelector('div#jogada').innerHTML=`<strong>O xis venceu!</strong>`;
    } if ((a1 == "O" && a2 == "O" && a3 == "O") || (b1 == "O" && b2 == "O" && b3 == "O") || (c1 == "O" && c2 == "O" && c3 == "O") || (a1 == "O" && b1 == "O" && c1 == "O") || (a2 == "O" && b2 == "O" && c2 == "O") || (a3 == "O" && b3 == "O" && c3 == "O") || (a1 == "O" && b2 == "O" && c3 == "O") || (a3 == "O" && b2 == "O" && c1 == "O")) {
        fim_o = true;
        document.querySelector('div#jogada').innerHTML=`<strong>O círculo venceu!</strong>`
    } else {
        
    }
} 



