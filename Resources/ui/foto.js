Titanium.include('/ui/logOut.js');
Titanium.include('/ui/mostrarFoto.js');

var winFoto = Titanium.UI.currentWindow;
winFoto.backgroundColor = '#000';

var labelSaludo = Titanium.UI.createLabel({
	text : 'toma una foto y la subire con ayuda de ACS',
	color : '#000',
	left : '20dp',
	top : '20dp',
});

var buttonCapturar = Titanium.UI.createButton({
	title : 'tomar foto',
	width : '150dp',
	height : '50dp',
	top : '50dp',
});

var PhotoView = Ti.UI.createImageView({
	//image:'http://berepublic.es/newbeBlog/wp-content/uploads/appcelerator-logo1.png',
	width : '190dp',
	height : '250dp',
	top : '110dp',
	//backgroundColor:'#00000',
});

var botonEnviar = Ti.UI.createButton({
	title : 'enviar',
	top : '370dp',

});

winFoto.add(labelSaludo);
winFoto.add(buttonCapturar);
winFoto.add(PhotoView);
winFoto.add(botonEnviar);
winFoto.add(showButton);


////////////////////////////////////////////////////////////////////////////////////////////////////

// enviar una foto

//////////////////////////////////////////////////////////////////////////////////////////////
botonEnviar.addEventListener('click', function(e) {
	var Cloud = require('ti.cloud');
	Cloud.debug = true;

	Cloud.Photos.create({
		photo : PhotoView.image,
	}, function(e) {
		if (e.success) {
			var photo = e.photos[0];
			Titanium.API.info('algun dato de la foto: ' + e.photos[0]);
			alert('id: ' + photo.id + ', tamaño: ' + photo.size);
		} else {
			// oops, something went wrong
			alert('error: ' + e.error);
		}
	});
	Ti.API.info('informacion: ' + Cloud.Photos.create);

});
//indicador.hide();

buttonCapturar.addEventListener('click', function(e) {
	Titanium.Media.openPhotoGallery({
		success : function(event) {
			var image = event.media;
			if (event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
				PhotoView.image = image;
			}
		},
	});
})


/////////////////////////////////////////////////////////////////////////////////////////////

//buscar una foto

////////////////////////////////////////////////////////////////////////////////////////////


