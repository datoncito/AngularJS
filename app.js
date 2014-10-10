/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/*
var model={
    user:'Campitos Ley',
    items:[
        { action:'Comprar Flores', done:false},
        {action:'Comprar papos', done:false},
        {action:'Re-coger boletos',done:true},
        {action:'Llamar a campitos',done:false},
        {action:'Entregar proyecto', done:true}
        
    ]
};
*/
//aqui viene json

var model={
    user:"Campitos Ley"
};



var todoApp=angular.module('todoApp',[]);

// el tan amado y esperado ajax, sorprendeme angularjs
todoApp.run(function($http){
   $http.get("http://localhost:8091/jelastic_campitos/servicios/todo").success(function(data){
     model.items=data;
   });
});

todoApp.filter("checkedItems",function(){
    return function(items,showComplete){
        var resultArr=[];
        angular.forEach(items, function(item){
            if(item.done==false ||showComplete==true) {
                resultArr.push(item);
            }
        });
        return resultArr;
    }
});

var modeloUsuario={
    items:[
        {nombre:'juan', edad:28},
        {nombre:'erika',edad:24},
        {nombre:'celia',edad:33}
    ]
}
todoApp.controller("ToDoCtrl",function($scope){
    $scope.todita=model;
    $scope.usuarios=modeloUsuario;
    //crecera el controller
    $scope.incompleteCount=function(){
        var count=0;
        angular.forEach($scope.todita.items,function(item){
            if(!item.done){count++}
        });
        return count;
    }

    $scope.warningLevel=function(){
        return $scope.incompleteCount()< 3 ? "label-success": "label-warning"
    }
    $scope.addNewItem=function(actionText){
        $scope.todita.items.push({action:actionText,done:false})
    };

});

todoApp.controller("UsuarioCtrl", function($scope){
    $scope.usuarios=modeloUsuario;
});