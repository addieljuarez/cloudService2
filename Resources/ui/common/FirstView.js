//FirstView Component Constructor
function FirstView() {
	//create object instance, a parasitic subclass of Observable
	var self = Ti.UI.createView();
	
	//label using localization-ready strings from <app dir>/i18n/en/strings.xml
	var name = Titanium.UI.createTextField({
		top:'80dp',
		//value:'Nombre',
		width:'200dp',
		hintText:'nombre',
		keyboardType:Titanium.UI.KEYBOARD_EMAIL,
	});
	self.add(name);
	
	
	var password = Titanium.UI.createTextField({
		top:'150dp',
		width:'200dp',
		//value:'password',		
		passwordMask:true,
		hintText:'password',
	})
	self.add(password);
	
	
	var logIn = Ti.UI.createButton({
		title:'ingresar',
		top:'220dp',
		width:'150dp'
	});
	self.add(logIn);
	
	
	var registrar = Titanium.UI.createButton({
		title:'registrar',
		top:'280dp',
		width:'150dp'
	})
	self.add(registrar);
	
	registrar.addEventListener('click', function(e){
		
		
		var indicador = Ti.UI.createActivityIndicator({
			message:'dado de alta',
		});
		
		var Cloud = require('ti.cloud');
		Cloud.debug = true;
		
		
		indicador.show();
		Cloud.Users.create({
    		username: name.value,
    		password: password.value,
    		password_confirmation: password.value,
    		//first_name: 'prueba1',
    		//last_name: 'prueba1.1',
		}, 
		
		
		function (e) 
		{
    		if (e.success) 
    		{
				alert(e.users[0].id);
    		} 
    		
    		else 
    		{
        		alert("error"+ e.error);// oops, something went wrong
    		}
    		indicador.hide();
		});
	});
	
	
	return self;
}

module.exports = FirstView;
