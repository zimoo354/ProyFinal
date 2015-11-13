la = 0;
lo = 0;

function login(){
		correo=document.getElementById("correo").value;
		pass1 =document.getElementById("pass1").value;


		if(correo!="" && pass1!=""){
			if(correo==localStorage.getItem('correo') && pass1==localStorage.getItem('pass1')){
				window.location.assign("main.html");
			}else{
				document.getElementById('opcion').style.opacity="1";
				document.getElementById('opcion').style.visibility="true";
			}
		}

}	//fin function login
function regresar(){
	window.location.assign("index.html");
}

function registro(){
		nombre=document.getElementById("nombre").value;
		correo=document.getElementById("correo").value;
		pass1 =document.getElementById("pass1").value;
		pass2 =document.getElementById("pass2").value;


		if(nombre!="" && correo!="" && pass1!="" && pass2!=""  && (pass1==pass2)){
		localStorage.setItem('contador', 0);
		localStorage.setItem('nombre',nombre);
		localStorage.setItem('correo',correo);
		localStorage.setItem('pass1',pass1);
		localStorage.setItem('pass2',pass2);

			window.location.assign("login.html");
		}else{
			window.location.assign("index.html");
		}
}

function localizar() {
	navigator.geolocation.getCurrentPosition(verLoc);
}

function mapaLugarGuardado() {
	var lugarId = getUrlVars()['lugar'];
	lat = localStorage.getItem('latLugar' + lugarId);
	lon = localStorage.getItem('lonLugar' + lugarId);
	linkLoc = 'http://maps.google.com/maps/api/staticmap?center=' + lat + ',' + lon + '&zoom=18&markers=color:blue|label:S|' + lat + ',' + lon + '|25,30&size=300x300';
	$('#mapa').html('<img id="mapa-img" src="' + linkLoc + '">');

	nombreLugar = localStorage.getItem('nombreLugar' + lugarId);
	precioLugar = localStorage.getItem('precioLugar' + lugarId);	
	califLugar  = localStorage.getItem('califLugar'  + lugarId);	
	categoLugar = localStorage.getItem('categoLugar' + lugarId);
	latitud 	= localStorage.getItem('latLugar'+ lugarId);
	longitud 	= localStorage.getItem('lonLugar'+ lugarId);

		lugar = '<div class="lugar">'+
				'<p>'+
					'Lugar:            '+ nombreLugar +
					// '<br>Lat:          '+ latitud +
					// '<br>Lon:          '+ longitud +
					'<br>Precio:       '+ precioLugar +
					'<br>Categoría:    '+ categoLugar +
					'<br>Calificación: '+ califLugar +
					'<br>'+
					'</p>'+
				'</div>';
		document.getElementById('contenido').innerHTML += lugar;
}

function verLoc(pos) {
	lat = pos.coords.latitude;
	lon = pos.coords.longitude;
	linkLoc = 'http://maps.google.com/maps/api/staticmap?center=' + lat + ',' + lon + '&zoom=18&markers=color:blue|label:S|' + lat + ',' + lon + '|25,30&size=300x300';
	$('#mapa').html('<img id="mapa-img" src="' + linkLoc + '">');
	localStorage.setItem('latActual', lat);
	localStorage.setItem('lonActual', lon);
}


function cambioPrecio() {
	$('#nivel-precio').html('<option value="1">1</option>\n<option value="2">2</option>\n<option value="3">3</option>');
}

function cambioCalif() {
	$('#calif').html('<option value="1">1</option>\n<option value="2">2</option>\n<option value="3">3</option>\n<option value="4">4</option>\n<option value="5">5</option>');
}


function guardaLugar() {
	var contador = localStorage.getItem('contador');
	contador = parseInt(contador);
	var nombreLugar = $('#nombre-lugar').val();
	var precioLugar = $('#nivel-precio').val();
	var califLugar = $('#nota').val();
	var categoLugar = $('#categoria').val();
	var latLugar = localStorage.getItem('latActual');
	var lonLugar = localStorage.getItem('lonActual');

	//Guardamos valores
	localStorage.setItem(('nombreLugar' + contador), nombreLugar)
	localStorage.setItem(('precioLugar' + contador), precioLugar)
	localStorage.setItem(('califLugar' + contador), califLugar)
	localStorage.setItem(('categoLugar' + contador), categoLugar)
	localStorage.setItem(('latLugar' + contador), latLugar)
	localStorage.setItem(('lonLugar' + contador), lonLugar)
	
	contador++;
	localStorage.setItem('contador', contador);

	alert('Lugar guardado :)')

}


function cambiaEstrella(val) {
	switch(val) {
		case 1: 
			$('#star1').attr("src", "media/star2.png");
			$('#star2').attr("src", "media/star1.png");
			$('#star3').attr("src", "media/star1.png");
			$('#star4').attr("src", "media/star1.png");
			$('#star5').attr("src", "media/star1.png");
			break;
		case 2: 
			$('#star1').attr("src", "media/star2.png");
			$('#star2').attr("src", "media/star2.png");
			$('#star3').attr("src", "media/star1.png");
			$('#star4').attr("src", "media/star1.png");
			$('#star5').attr("src", "media/star1.png");
			break;
		case 3: 
			$('#star1').attr("src", "media/star2.png");
			$('#star2').attr("src", "media/star2.png");
			$('#star3').attr("src", "media/star2.png");
			$('#star4').attr("src", "media/star1.png");
			$('#star5').attr("src", "media/star1.png");
			break;
		case 4: 
			$('#star1').attr("src", "media/star2.png");
			$('#star2').attr("src", "media/star2.png");
			$('#star3').attr("src", "media/star2.png");
			$('#star4').attr("src", "media/star2.png");
			$('#star5').attr("src", "media/star1.png");
			break;
		case 5: 
			$('#star1').attr("src", "media/star2.png");
			$('#star2').attr("src", "media/star2.png");
			$('#star3').attr("src", "media/star2.png");
			$('#star4').attr("src", "media/star2.png");
			$('#star5').attr("src", "media/star2.png");
			break;

		}

}


function lugares(){
	i = 0;
	var contador = localStorage.getItem('contador');
	contador = parseInt(contador);
	while(i < contador) {
		nombreLugar = localStorage.getItem('nombreLugar' + i);
		precioLugar = localStorage.getItem('precioLugar' + i);	
		califLugar  = localStorage.getItem('califLugar'  + i);	
		categoLugar = localStorage.getItem('categoLugar' + i);
		latitud 	= localStorage.getItem('latLugar'+ i);
		longitud 	= localStorage.getItem('lonLugar'+ i);

			lugar = '<div class="lugar">'+
					'<p>'+
						'Lugar:            '+ nombreLugar +
						// '<br>Lat:          '+ latitud +
						// '<br>Lon:          '+ longitud +
						'<br>Precio:       '+ precioLugar +
						'<br>Categoría:    '+ categoLugar +
						'<br>Calificación: '+ califLugar +
						'<br><a href="mapalugar.html?lugar='+i+'">Ver Mapa</a>'+
						'<br>'+
						'</p>'+
					'</div>';
					//console.log(lugar);
		document.getElementById('contenido').innerHTML += lugar;
		i++;
	}
}


function getUrlVars() {
var vars = {};
var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
vars[key] = value;
});
return vars;
}