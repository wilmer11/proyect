//filtro de la galería de imagenes
$(function(){
    $('.filter').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        var valor = $(this).attr('data-nombre');
        if(valor == 'todos'){
            $('.cont-work').show('1000');
        }else{
            $('.cont-work').not('.' + valor).hide('1000');
            $('.cont-work').filter('.' + valor).show('1000');
        }
    });

//links    
var Logo = $('#logo').offset().top;
var Leer = $('#contenido').offset().top;
var Contenido = $('#contenido').offset().top;
var Proyectos = $('#proyectos').offset().top;
var Encuentra = $('#encuentrame').offset().top; 

window.addEventListener('resize', function(){  
    var Logo = $('#logo').offset().top;
    var Leer = $('#contenido').offset().top;
    var Contenido = $('#contenido').offset().top;
    var Proyectos  = $('#proyectos').offset().top;
    var Encuentra = $('#encuentrame').offset().top; 
});

$('#boton-logo').on('click', function(e){  
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    },600);
});
$('#boton-leer').on('click', function(e){  
    e.preventDefault();
    $('html, body').animate({
        scrollTop: Leer -100
    },600);
});
$('#boton-acerca').on('click', function(e){  
    e.preventDefault();
    $('html, body').animate({
        scrollTop: Contenido -100
    },600);
});
$('#boton-proyectos').on('click', function(e){  
    e.preventDefault();
    $('html, body').animate({
        scrollTop: Proyectos -100
    },600);
});
$('#boton-encuentrame').on('click', function(e){  
    e.preventDefault();
    $('html, body').animate({
        scrollTop: Encuentra -100
    },600);
});
});