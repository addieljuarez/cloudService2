Titanium.UI.setBackgroundColor = '#000'


//los property guarda de forma temporal el login
if(!Titanium.App.Properties.hasProperty('autentificacion')) 
{
	Titanium.App.Properties.setBool('autentificacion', false);
}


//Se crean la ventana para autentificar y una para la aplicacion
var logIn = Ti.UI.createWindow({
	url:'/ui/logIn.js'
	});

var winFoto = Ti.UI.createWindow({
	url:'/ui/foto.js'
	});




//Si 'login' es 'true' el usuario esta 'autentificado'
if(Titanium.App.Properties.getBool('autentificacion')) {
	//Se accesa a la aplicacion
		winFoto.open();

	}else{
	//Se va a que inicie sesion o que se registre 	
		logIn.open();
	};
	
	
	
//Esta función se activan cuando se desautentifica el usuario, se cierra
//la ventana de la aplicacion y se abre la de autentificacion
Ti.App.addEventListener('desautentificacion', function(e) {
	logIn.open();
	winFoto.close();
});

//Este se activan cuando se autentifica el usuario, se cierra 
//la ventana de autentificacion y se abre la de la aplicacion
Ti.App.addEventListener('autentificacion', function(e) {
	winFoto.open();
	logIn.close();

});