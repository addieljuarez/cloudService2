Ti.include('/ui/foto');


var showButton = Titanium.UI.createButton({
	title:'ver foto',
	top:'420dp',
});


showButton.addEventListener('click', function(e){

	var Cloud = require('ti.cloud');
	Cloud.debug = true;
	
//	Titanium.App.Properties.getString('valor');
	
	Cloud.Photos.search({
		
	        user_id: Ti.App.Properties.getString('idUser')
	    }, function (e) {
	        if (e.success) {
	            alert('Success:\\n' +
	                'Count: ' + e.photos.length);
	            for (var i = 0; i < e.photos.length; i++) {
	                var photo = e.photos[i];
	                alert('id: ' + photo.id + '\\n' +
	                		'url: ' + photo.urls.square + '\\n'+
	                       'name: ' + photo.name + '\\n' +
	                       'filename: ' + photo.filename + '\\n' +
	                       'updated_at: ' + photo.updated_at);
	                      
	                  
	            }
	        } else {
	            alert('Error:\\n' +
	                ((e.error && e.message) || JSON.stringify(e)));
	        }
	    });
		
});






