var valor = ''
var submit = document.querySelector('.submit')
var strong = document.querySelector('.numero')
var bloco1 = document.querySelector('.bloco1')
var bloco2 = document.querySelector('.bloco2')

function classi(y, x){
  Apagar()
  var bnt = document.querySelector(`#${x}`)
  valor = y
  bnt.style.background = 'rgba(235, 100, 36, 0.9)'
  submit.style.background = 'rgba(255,255,255,0.8'
  submit.style.color = 'rgba(247, 127, 0,0.7)'
}


function Enviar() {
  if (valor != '') {
    bloco1.style.display = 'none'
    bloco2.style.display = 'flex'
    strong.innerHTML = valor
  } else {
    alert('Escolha uma das opções para prosseguir!')
  }
}

function Apagar() {
  var bnts = ['bnt1', 'bnt2', 'bnt3', 'bnt4', 'bnt5']
  for (x in bnts) {
    var bnts2 = document.getElementById(bnts[x])
    bnts2.style.background = 'rgb(73, 80, 87)'
  }
}
