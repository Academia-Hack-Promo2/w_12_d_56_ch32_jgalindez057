var uri_r = 'http://192.168.7.102/services/listpersonas.php';

function response(){
	$.ajax({
		url: uri_r,
		type: 'get',

		success: function(data){
			for (var i =0; i< data.length; i++) {
				var alldata = data[i];
				$('#nombre').append(alldata.nombres + "<br>" + "<hr>");
				$('#apellido').append(alldata.apellidos + "<br>" + "<hr>");
				$('#cedula').append(alldata.cedula + "<br>" + "<hr>");
				$('#correo').append(alldata.correo + "<br>" + "<hr>");
				$('#telefono').append(alldata.telefono + "<br>" + "<hr>");
				$('#direccion').append(alldata.direccion + "<br>" + "<hr>");	
			};
		},

		error: function(data){
			console.log(data);
		}
	})
}

response();