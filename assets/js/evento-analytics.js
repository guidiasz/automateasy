/*registra evento no google analytics*/
function evento(nomeEvento, categoriaEvento, tipoEvento){
    gtag('event', nomeEvento, { 'send_to': 'UA-158310206-1', 'event_category': categoriaEvento,  'event_label': tipoEvento,});
}