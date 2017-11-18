/* Funciones encargada de ingresar la informacion obtenida de la pagina para un correo, esto permite acceder a las funciones de cajero
   Versión 0.1
   Autor: Luis Fernando Murillo
   Parametros de entrada: Recibe los scope obtenidos en la pagina mediante la utilizacion del ng-model.
*/
var ingresarCajero = angular.module('IngresarCajero', ['ngRoute']);

console.log("Entro al ng-app")

/* Controlador encargada de realizar el proceso de ingresar, hace una verificacion en la base de datos y posteriormente un select de los datos.
   Versión 0.1
   Parametros de entrada: Recibe los scope obtenidos en la pagina mediante la utilizacion del ng-model.
*/
ingresarCajero.controller('ingresarCajeroController', function ($scope, $http) {
    window.localStorage.clear();//Limpia la informacion almacenado en el storage web.

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


function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        alert("Solo se permiten numeros")
        return false;
    }
    return true;
};