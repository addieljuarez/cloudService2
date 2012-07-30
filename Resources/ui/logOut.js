var activity = Ti.Android.currentActivity;

activity.onCreateOptionsMenu = function(e) {
	var Cloud = require('ti.cloud');
		Cloud.debug = true;
	var menu = e.menu;
	
	var desautentificacion = menu.add({
			title : "Salir"
			});
		//cuando se selecciona 'salir' se cambia el valor de
		//autenficacion a falso, y se activa el evento desautenticacion
		//para que se abra la ventana de autentificacion
		desautentificacion.addEventListener("click", function(e) {
			Titanium.App.Properties.setBool('autentificacion', false);
			Cloud.Users.logout(function (e) {
        		if (e.success) {
            		alert('Sesion Cerrada');
        		} else {
            		alert('Error:' +
                	((e.error && e.message) || JSON.stringify(e)));
        		}
    		});
			Ti.App.fireEvent('desautentificacion');
		});
	
	}