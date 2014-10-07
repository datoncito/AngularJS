/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var model={
    user:'Adam',
    items:[
        { action:'Comprar Flores', done:false},
        {action:'Comprar papos', done:false},
        {action:'Re-coger boletos',done:true},
        {action:'Llamar a campitos',done:false},
        {action:'Entregar proyecto', done:true}
        
    ]
};

var todoApp=angular.module('todoApp',[]);

var modeloUsuario={
    items:[
        {nombre:'juan', edad:28},
        {nombre:'erika',edad:24},
        {nombre:'celia',edad:33}
    ]
}
todoApp.controller("ToDoCtrl",function($scope){
    $scope.todita=model;

});

todoApp.controller("UsuarioCtrl", function($scope){
    $scope.usuarios=modeloUsuario;
});