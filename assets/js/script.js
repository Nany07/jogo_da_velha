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

    let tabuleiro = Array(9).fill('');
    let able=true;

    for(let quadrado of quadrados){
        quadrado.style.cursor="pointer";
        quadrado.addEventListener('click', function(){           
            if(able && quadrado.innerHTML===""){
                quadrado.innerHTML= jogador? "X":"O";
                quadrado.style.background=jogador?"lightblue":"lightcoral";
                tabuleiro[Number(quadrado.id)]=jogador;
                simbolo_jogador.innerHTML=jogador?"O":"X";
                
                if (verificar_vitoria(jogador)){
                    vencedor.innerHTML=jogador?"X":"O";
                    simbolo_jogador.innerHTML="";
                    for(let quadrado of quadrados)
                        quadrado.style.cursor="default";
                    able=false;                
                } else if (!tabuleiro.includes('')){
                    vencedor.innerHTML= "Empate!";
                    simbolo_jogador.innerHTML="";
                    for(let quadrado of quadrados)  
                        quadrado.style.cursor="default";
                }else
                    jogador = !jogador;
            }
        })
    }

    button.addEventListener('click',function(){
        simbolo_jogador.innerHTML="X";
        vencedor.innerHTML="";
        jogador=true;
        able=true;

        for(let quadrado of quadrados){
            quadrado.innerHTML="";
            quadrado.style.background="lightgrey";
            quadrado.style.border="";
            quadrado.style.cursor="pointer";
            tabuleiro[Number(quadrado.id)]="";
        }
    })


    function verificar_vitoria(jogador){
        for(let combinacao of combinacoes_vencedoras){
            const [a,b,c]= combinacao;
            if( tabuleiro[a]=== jogador && tabuleiro[b] === jogador  && tabuleiro[c] === jogador ){
                quadrados[a].style.border="3px solid gold";
                quadrados[b].style.border="3px solid gold";
                quadrados[c].style.border="3px solid gold";
                return true;
            }
        }
        return false;
    }