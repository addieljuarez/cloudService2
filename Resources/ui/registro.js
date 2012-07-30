var registro =  Titanium.UI.currentWindow;
registro.backgroundColor = '#000'


var saludo = Titanium.UI.createLabel({
		text:'registrate',
		top:'30dp',
		color:'#000',
	});
	var userName = Titanium.UI.createTextField({
		width:'250dp',
		top:'60dp',
		hintText:'nombre de usuario',
	});
	
	var password = Titanium.UI.createTextField({
		width:'250dp',
		top:'120dp',
		hintText:'password',
		passwordMask:true,
	});
	
	
	var password2 = Titanium.UI.createTextField({
		width:'250dp',
		top:'180dp',
		hintText:'confirma tu password',
		passwordMask:true,
	});
	
	
	var send =  Titanium.UI.createButton({
		title:'enviar',
		top:'300dp',
		width:'180dp',
	});


registro.add(userName);
registro.add(password);
registro.add(password2);
registro.add(send);


send.addEventListener('click', function(e){
	if (userName.value != '' || password.value != '' || password2.value != '')
	{
		
		
			
		
			var indicador = Ti.UI.createActivityIndicator({
				message:'dado de alta',
			});
			
			var Cloud = require('ti.cloud');
			Cloud.debug = true;
			
			
			
			indicador.show();
			Cloud.Users.create({
	    		username: userName.value,
	    		password: password.value,
	    		password_confirmation: password2.value,
	    		//first_name: 'prueba1',
	    		//last_name: 'prueba1.1',
			}, 
			
			
			function (e) 
			{
	    		if (e.success) 
	    		{
					//alert(e.users[0].id);
					Titanium.API.info(e.users[0].id);
					var user = e.users[0];
					Titanium.App.Properties.setBool('autentificacion', true);
					Titanium.App.Properties.setString('idUser', e.users[0].id);
					Titanium.App.fireEvent('autentificacion');
					registro.close();
					
					var winFoto = Titanium.UI.createWindow({
						backgroundColor:'#000',
						url:'/ui/foto.js',
					})
					
					winFoto.open()
					
	    		} 
	    		
	    		else 
	    		{
	        		alert("error"+ e.error);// oops, something went wrong
	    		}
	    		indicador.hide();
			});
		
	}
	else
	{
		alert('pass muy pequeño o no coincide');
	}
});


