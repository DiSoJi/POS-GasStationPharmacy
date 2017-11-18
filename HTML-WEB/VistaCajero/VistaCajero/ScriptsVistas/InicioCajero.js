/* Funciones de inicio en esta pagina aparecera la informacion personal del cajero.
   Versión 0.1
   Autor: Luis Fernando Murillo
   Parametros de entrada: Obtiene los datos de la base de datos para poner la informacion del usuario.
*/
var InicioCajero = angular.module('InicioCajero', ['ngRoute']);

console.log("Entro al ng-app")

/* Controlador encargada de recuperar la informacion de la base con la informacion del empleado.
   Versión 0.1
   Parametros de entrada: Recibe los scope obtenidos en la pagina mediante la utilizacion del ng-model.
*/
InicioCajero.controller('InicioCajeroController', function ($scope, $http) {
    console.log("Entro al controllador")

    $scope.Nombre = window.localStorage.getItem("usuario")
    $scope.Cantidad = window.localStorage.getItem("cantidad")


    //Funcion de login
    /*$scope.ingresar = function (usuario, contraseña, cantidad, $routeProvider) {
        console.log($scope.usuario, $scope.contraseña, $scope.cantidad);
        window.localStorage.setItem("usuario", usuario);
        window.localStorage.setItem("contraseña", contraseña);
        window.localStorage.setItem("usuario", cantidad);
        window.location = "http://localhost:23866/VistaCajero/Inicio/Inicio.html";*/ 
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
    //};








});