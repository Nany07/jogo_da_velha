    const quadrados = document.getElementsByClassName('quadrado');
    let vencedor = document.getElementById('vencedor');
    let simbolo_jogador= document.getElementById('jogador');
    let button = document.getElementById('reset');
    
    let jogador = true; // true= X, false=0

    for(let quadrado of quadrados){
        quadrado.addEventListener('click', function(){
           
            //jogador 1
            if(this.innerHTML==="" && jogador === true){
                this.innerHTML= "X";
                quadrado.style.background="lightblue";
                simbolo_jogador.innerHTML="O";
            }
            //jogador 2 
            if (this.innerHTML==="" && jogador === false){
                this.innerHTML= "O";
                simbolo_jogador.innerHTML="X";
            }
            jogador = !jogador;
        })
    }

    button.addEventListener('click',function(){
        simbolo_jogador.innerHTML="X";

        for(let quadrado of quadrados){
            quadrado.innerHTML="";
            quadrado.style.background="lightgrey";
        }
    })


