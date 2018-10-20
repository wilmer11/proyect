// Botón menú-bar
$(document).ready(function(){
	$('#abrir').click(function(){
		if ($('#abrir').attr('class') == 'fa fa-bars' ) {
			$('#abrir').removeClass('fa fa-bars').addClass('fa fa-close');
			$('.menu-link').css({
				'left': '0',
				'transition': '0.8s'});
		}else {
			$('#abrir').removeClass('fa fa-close').addClass('fa fa-bars');
			$('.menu-link').css({
				'left': '-100%',
				'transition': '0.8s'});
		}
	});
});
$('#menu-link').click(function() {
   if ($('#abrir').attr('class') == 'fa fa-bars') {
        }else {
            $('#abrir').removeClass('fa fa-close').addClass('fa fa-bars');
            $('.menu-link').css({
				'left': '-100%',
				'transition': '0.8s'});
        }
});
$('#logo').click(function() {
   if ($('#abrir').attr('class') == 'fa fa-bars') {
        }else {
            $('#abrir').removeClass('fa fa-close').addClass('fa fa-bars');
            $('.menu-link').css({
				'left': '-100%',
				'transition': '0.8s'});
        }
});

// Ir arriba
$(document).ready(function() {
	$('.ir-arriba').click(function() {
		$('body, html').animate({
			scrollTop: "0px"
		}, 600);
	});
	$(window).scroll(function() {
		if ($(this).scrollTop() > 0) {
			$('.ir-arriba').slideDown(600);
		}else {
			$('.ir-arriba').slideUp(600);
		}
	});
});

//Ventana modal
var modal = document.getElementById('miModal');
var flex = document.getElementById('flex');
var abriendo = document.getElementById('boton-abrir');
var cerrar = document.getElementById('close');

abriendo.addEventListener('click', function(){
	modal.style.display = 'block';
});

cerrar.addEventListener('click', function(){
	modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
	if (event.target == flex) {
		modal.style.display = 'none';
	}
});
