/// <reference path="../_all.ts" />

module doo {
    export class TodoService implements ITodoService  {
        static $inject = ['$http'];

        constructor(private $http: ng.IHttpService) {

        };

        getTodos(list: string): ng.IPromise<{}> {
            return angular.fromJson(localStorage.getItem('2doo.todos'));  
        };
        
        getLists(): TodoList[] {
            return angular.fromJson(localStorage.getItem('2doo.lists'));
        };
    }
    
    angular.module('doo')
        .service('todoService', TodoService);
}