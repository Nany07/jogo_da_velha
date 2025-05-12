    const quadrados = document.getElementsByClassName('quadrado');
    let vencedor = document.getElementById('vencedor');
    let simbolo_jogador= document.getElementById('jogador');
    let button = document.getElementById('reset');   
    let jogador = true; // true= X, false=0

    const combinacoes_vencedoras = [
        [0,1,2], //linha 1
        [3,4,5], //linha 2
        [6,7,8], // linha 3
        [0,3,6], // coluna 1
        [1,4,7], // coluna 2
        [2,5,8], // coluna 3
        [0,4,8], // diagonal \
        [2,4,6], // diagonal /
    ];

    let tabuleiro = Array(8).fill('');

    for(let quadrado of quadrados){
        quadrado.addEventListener('click', function(){           
            //jogador 1
            if(quadrado.innerHTML==="" && jogador === true){
                quadrado.innerHTML= "X";
                quadrado.style.background="lightblue";
                tabuleiro[quadrado.id]=true;
                simbolo_jogador.innerHTML="O";
            }
            //jogador 2 
            if (quadrado.innerHTML==="" && jogador === false){
                quadrado.innerHTML= "O";
                tabuleiro[quadrado.id]=false;
                simbolo_jogador.innerHTML="X";
            }

            if (verificar_vitoria(jogador)){
                vencedor.innerHTML=quadrado.innerHTML;
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


    function verificar_vitoria(jogador){
        for(let combinacao of combinacoes_vencedoras){
            const [a,b,c]= combinacao;
            if( tabuleiro[a]=== jogador && tabuleiro[b] === jogador  && tabuleiro[c] === jogador ){
                return true;
            }
        }
        return false;
    }