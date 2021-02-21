document.getElementById('opciones').addEventListener('click', jugada);
let contadorj1 = 0, contadorcpu = 0;

function jugada(e){
    elemento = e.target.outerHTML;
    if(elemento == '<i value="1" class="fas fa-hand-rock"></i>' || elemento == '<i value="2" class="fas fa-hand-scissors"></i>'
    || elemento == '<i value="3" class="fas fa-hand-paper"></i>'){
        document.getElementById('jugador1').innerHTML = `${elemento}`;
        nro_elemento = parseInt(e.target.getAttribute('value'));
    }
    contador(nro_elemento);
}

function computadora(){
    cpu = randomNumber(1, 4);
    if(cpu === 1){
        document.getElementById('jugador2').innerHTML = '<i value="1" class="fas fa-hand-rock">';
    } else if(cpu === 2){
        document.getElementById('jugador2').innerHTML = '<i value="2" class="fas fa-hand-scissors"></i>';
    } else {
        document.getElementById('jugador2').innerHTML = '<i value="3" class="fas fa-hand-paper"></i>';
    }
    return cpu;
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function contador(j1){
    let cpu = computadora();
    if(j1==1 && cpu==2){
        contadorj1++;
    } else if(j1==1 && cpu==3){
        contadorcpu++;
    } else if(j1==2 && cpu==1){
        contadorcpu++;
    } else if(j1==2 && cpu==3){
        contadorj1++;
    } else if(j1==3 && cpu==1){
        contadorj1++;
    } else if(j1==3 && cpu==2){
        contadorcpu++;
    }
    
    
    document.getElementById('jugador').innerHTML = `${contadorj1}`;
    document.getElementById('cpu').innerHTML = `${contadorcpu}`;

    ganador(contadorj1, contadorcpu);
}

function ganador(j1, cpu){
    let ganador = document.getElementById('cuadro-ganador');
    if(j1===3){
        document.getElementById('ganador').innerHTML = 'Jugador 1';
        ganador.style.display = 'block';
    }
    if(cpu===3){
        document.getElementById('ganador').innerHTML = 'CPU';
        ganador.style.display = 'block';
    }
}