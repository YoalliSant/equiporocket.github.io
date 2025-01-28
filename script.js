$(document).ready(function(){
    // Mostrar el botón cuando se haga scroll hacia abajo
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.ir-arriba').fadeIn(600); // Mostrar el botón
        } else {
            $('.ir-arriba').fadeOut(600); // Ocultar el botón
        }
    });
    // Función para hacer scroll hacia arriba
    $('.ir-arriba').click(function(){
        $('body, html').animate({ scrollTop: 0 }, 1000); // Animación hacia arriba
    });
});
