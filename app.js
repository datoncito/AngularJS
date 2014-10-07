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
        {action:'Llamar a campitos',done:false}
        
    ]
};

var todoApp=angular.module('todoApp',[]);
todoApp.controller("ToDoCtrl",function($scope){
    $scope.todo=model;

});