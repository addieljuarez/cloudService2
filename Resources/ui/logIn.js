var principal =  Titanium.UI.currentWindow;
principal.backgroundColor = '#000'


	//var principal = Titanium.UI.createView();
	
	
	var saludo = Titanium.UI.createLabel({
		text:'iniciar sesión',
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
	
	var logIn =  Titanium.UI.createButton({
		title:'iniciar sesion',
		top:'180dp',
		width:'180dp'
	});
	
	var registro =  Titanium.UI.createButton({
		title:'registrate',
		top:'280dp',
		width:'180dp',
	});

	principal.add(registro);
	principal.add(logIn);
	principal.add(saludo);
	principal.add(userName);
	principal.add(password);
	
	
	
	
	
	logIn.addEventListener('click', function(e){
		if(userName.value != '' || password.value != '')
		{
			var Cloud = require('ti.cloud');
			Cloud.debug = true
			
			Cloud.Users.login({
				login:userName.value,
				password:password.value,
			},
			
			function(e)
			{
				if (e.success) {
					var user = e.users[0];
					alert('id: '+ user.id  );
					Titanium.App.Properties.setBool('autentificacion', true);
					Titanium.App.Properties.setString('idUser', e.users[0].id);
					Titanium.App.fireEvent('autentificacion');
					principal.close();
					
					
					
				}
				else
				{
					alert('Usuario y/o password Incorrecto');
					Titanium.API.info('error: '+ e.error);
				}
				
			}
			
			
			);
			
						
		}
		else
		{
			alert('rellena todos los campos');
		}			
	});
	
	

	
	registro.addEventListener('click', function(e){
			var winRegistro = Ti.UI.createWindow
			({
				backgroundColor:'#000',
				navBarHidden:true,
				url:'/ui/registro.js'
			});
			winRegistro.open({modal:true});
			
	});
	
	
	
	
	
	
	
	