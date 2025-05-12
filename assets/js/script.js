    const quadrados = document.getElementsByClassName('quadrado');
    let vencedor = document.getElementById('vencedor');
    
    let jogador = true; // true= X, false=0

    for(let quadrado of quadrados){
        quadrado.addEventListener('click', function(){
           
            //jogador 1
            if(this.innerHTML==="-"){
                this.innerHTML= jogador? "X":"O";
                jogador = !jogador;
            }
        })
        
    }



