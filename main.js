//aumentar o intervalo de tentativas
//limitar o numero de tentativas
//desabilitar e habilitar o input


//Variaveis
let secret_number = Math.floor(Math.random()*100);
let tentativas = 1;
var inpuT = document.getElementById('input');

function getSecretNumber(){
    numero = Math.floor((Math.random()*100)+1)
    return numero
}
//Funções
function ExibeTextoTag(tag, texto){

    let varTag = document.querySelector(tag);
    varTag.innerHTML = texto;
    responsiveVoice.speak(texto, "Portuguese Female", {pitch: 2});

}

function inicializaTexto(){

    ExibeTextoTag('h1', 'Numero Secreto');
    ExibeTextoTag('p', 'Digite um numero de 1 até 100');
    desativarBotao();

}

//add enter

document.addEventListener('keydown', 
    
    
    function(event){
        if(event.key == 'Enter'){

            verificarChute()
        }
    }
    )

function reiniciarJogo(){

    ativar_input();
    limpaInput();
    tentativas = 1;
    secret_number = getSecretNumber();
    inicializaTexto();
    document.getElementById('reiniciar').setAttribute('disabled');
    document.querySelector('input').value='';
    limpaInput();
}

function limpaInput(){
    
    document.querySelector('input').value='';

}

function desativarBotao() {
    var botao = document.getElementById('reiniciar');
    botao.disabled = true;
}

function desativar_input() {

    
    inpuT.disabled = true;
    
}

function ativar_input() {

    inpuT.disabled = false;
    
}

inicializaTexto();

function verificarChute(){

    let guess = document.querySelector('input').value;
    document.getElementById('reiniciar').removeAttribute('disabled');

    if( guess == secret_number){

       
        let tentativa = tentativas > 1? 'vezes': 'vez';
        ExibeTextoTag('h1',`Parabens, acertou! \n Voce tentou ${tentativas} ${tentativa}`);
        desativar_input();
    }
    else if( tentativas <= 10){

        if(guess < secret_number){

            ExibeTextoTag('p','Tente novamente., o numero é maior');

        }
        else{

            ExibeTextoTag('p','Tente novamente., o numero é menor');

        }
        tentativas++;
        limpaInput();
    }
    else{

        ExibeTextoTag('p','Geme Over vc excedeu 10 tentativas');

    }

}

