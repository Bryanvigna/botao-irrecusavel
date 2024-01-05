function sim(){
    alert("só mandar o pix!");
}
function fugir(t){//botão não
    var btn = t;
    btn.style.position = 'absolute';
    btn.style.bottom = geradordposicao(10,90);//posição
    btn.style.left = geradordposicao(10,90);//posição
    console.log('desviado!');
}
function geradordposicao(min, max) {//gera posição para o botão não mudar de lugar
    return (Math.random() * (max - min) + min)+"%";
  }