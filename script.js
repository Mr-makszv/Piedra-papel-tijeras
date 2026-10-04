function getComputerChoise(){
    const numero = Math.random();

    if (numero <1 / 3){
        return 'rock';
    }else if (numero < 2/3){
        return 'paper';
    }else{
        return 'scissors'
    }
}

//console.log(getComputerChoise()); //prueba varias veces

function getHumanChoise(){
    const eleccion = prompt('Escriba rock, paper, scissors');
    return eleccion;
}

//console.log(getHumanChoise());

let HumanScore = 0;
let ComputerScore = 0;


 const numero = prompt('Cuantas partidas vas a jugar')

 function playRound (HumanChoise, ComputerChoise){
 HumanChoise = HumanChoise.toLowerCase();   

   if (HumanChoise === ComputerChoise){
    console.log('Empate los dos elegisteis ' + HumanChoise)
  }else if(
   (HumanChoise == 'rock' && ComputerChoise === 'scissors') ||
    (HumanChoise == 'paper' && ComputerChoise === 'rock') ||
    (HumanChoise == 'scissors' && ComputerChoise === 'paper')
    ){
    HumanScore++;
    console.log('Tu ganas ' + HumanChoise + ' pierdes ' + ComputerChoise)
  }else{
    ComputerScore++;
    console.log('Tu pierdes ' + HumanChoise + ' gana ' + ComputerChoise)
  }
}






for(let i= 1; i <= numero; i++){
   console.log('Partida: '+ i);
   const humanSelection = getHumanChoise();
   const computerSelection = getComputerChoise();
   playRound(humanSelection, computerSelection);
}