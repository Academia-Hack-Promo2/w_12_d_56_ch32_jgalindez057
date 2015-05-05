var uri_r = 'http://192.168.7.102/services/regpersonas.php';


function new_user() {

    var nombre = $('#nombre').val();
    var apellido = $('#apellido').val();
    var cedula = $('#cedula').val();
    var correo = $('#correo').val();
    var telefono = $('#telefeno').val();
    var direccion = $('#direccion').val();

    var user = {
        datos: {
            "nombres": nombre,
            "apellidos": apellido,
            "correo": correo,
            "cedula": cedula,
            "tel": "3344",
            "dir": direccion
        }
    };


    $.ajax({
        type: 'post',
        url: uri_r,
        data: user,
        success: function(data) {
            console.log(data);
            console.log("Listo")

            $('#test').dialog({
                title: 'Confirmando',
                text: 'Registro exitoso',
                autoOpen: true,
                modal: true,
                buttons: {
                    'Ver lista': function() {
                        window.location.assign('file:///home/juan/Descargas/ajax2.1.html');
                    },
                }
            });

        },
        error: function(data) {
            console.log(data);
        }
    })
}