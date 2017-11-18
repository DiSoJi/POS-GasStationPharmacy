/* Funciones encargada de realizar una venta
   Versión 0.1
   Autor: Luis Fernando Murillo
   Parametros de entrada: Recibe los scope obtenidos en la pagina mediante la utilizacion del ng-model.
*/
var ventaCajero = angular.module('VentaCajero', ['ngRoute']);

console.log("Entro al ng-app")


/* Funcion para el registro de un usuario
   Versión 0.1
   Parametros de entrada: No recibe nada en especifico.
*/
ventaCajero.controller('UsuarioVentaController', function ($scope, $http) {

    console.log("Entro al controllador")


    var person = prompt("Digite la ID Usuario, si presiona cancelar se creara un nuevo usuario", "Temporal");
    if (person != null) {

    } else {
        alert("Ahora se creara un nuevo usuario");
    }
});

/* Controlador encargada de realizar el proceso de ingresar, hace una verificacion en la base de datos y posteriormente un select de los datos.
   Versión 0.1
   Parametros de entrada: Recibe los scope obtenidos en la pagina mediante la utilizacion del ng-model.
*/
ventaCajero.controller('finalizarVentaController', function ($scope, $http) {

    console.log("Entro al controllador")

    //Funcion de login


    $scope.ingresar = function (usuario, contraseña, cantidad, $routeProvider) {
        console.log($scope.usuario, $scope.contraseña, $scope.cantidad);
        if (usuario != null && contraseña != null && cantidad != null) {
            window.localStorage.setItem("usuario", usuario);
            window.localStorage.setItem("contraseña", contraseña);
            window.localStorage.setItem("cantidad", cantidad);
            window.location = "http://localhost:23866/VistaCajero/Inicio/Inicio.html";
            /*$http.get("http://localhost:64698/api/Persona/SignInAdministradorVerification?id=" + id + "&" + "contraseña=" + password)
                .then(function (response) {
                    $scope.res = response;
                    if (response.data == true) {
                        console.log("Logged");
                        window.localStorage.setItem("id", id);
                        $http.get("http://localhost:64698/api/Persona/GetSucursalPersona?id=" + window.localStorage.getItem("id"))
                            .then(function (response) {
                                $scope.res = response;
                                window.localStorage.setItem("idSucursal", response.data);
                                console.log(window.localStorage.getItem("id"), window.localStorage.getItem("idSucursal"));
                                window.location = "http://localhost:64698/mywebsite/Administrador/HomeAdministrador.html";
                            });
    
    
    
    
                    } else {
                        alert("El usuario o la contraseña no son correctos");
                    }
            */
            //});
        } else {
            alert("Falta agregar datos")
        }
    };

});


/* Controlador encargado de crear un nuevo usuario
   Versión 0.1
   Parametros de entrada: Recibe los scope obtenidos en la pagina mediante la utilizacion del ng-model.
*/
ventaCajero.controller('CrearUsuarioController', function ($scope, $http) {

    console.log("Entro al controllador")

    //Funcion de login



    $scope.Crear = function (cedula, primerNombre, segundoApellido, primeApellido, segundoApellido, telefono, provincia, canton, distrito, dirrecion, fecha) {
        console.log(cedula)
        console.log(primerNombre)
        console.log(segundoNombre)
        console.log(primeApellido)
        console.log(segundoApellido)
        console.log(provincia)
        console.log(canton)
        console.log(distrito)
        console.log(dirrecion)
        console.log(fecha)

        if (cedula != null && nombre != null && primeApellido != null && segundoApellido != null && telefono != null && provincia != null && canton != null && distrito != null && dirrecion != null && fecha != null) {
            var usuario = {
                IdCedula: cedula,
                Nombre1: primerNombre,
                Nombre2: segundoNombre,
                Apellido1: primeApellido,
                Apellido2: segundoApellido,
                Telefono: telefono,
                Provincia: provincia,
                Canton: canton,
                Distrito: distrito,
                DescripcionDireccion: dirrecion,
                FechaNacimiento: fecha,
            }

            window.location = "http://localhost:23866/VistaCajero/Venta/venta.html";


        } else {
            alert("Falta agregar datos")
        }
    };

    $scope.Regresar = function () {
        if (confirm("Desea regresar a ventas") == true) {
            window.location = "http://localhost:23866/VistaCajero/Venta/venta.html";
        } else {
        }
    };

});



function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        alert("Solo se permiten numeros")
        return false;
    }
    return true;
};