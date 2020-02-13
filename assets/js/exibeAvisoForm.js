/*mostra aviso quando tentam enviar o formulario*/
function exibeAvisoForm(){
    var span = document.querySelector('#aviso-form');
    span.classList.remove("oculta-aviso-form");
    span.classList.add("exibe-aviso-form");
   }