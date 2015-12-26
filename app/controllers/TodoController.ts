/// <reference path="../_all.ts" />
module doo {
    export class TodoController {
        static $inject = ['todoService'];
        
        private todoService: ITodoService;
        
        constructor(service: ITodoService) {
            this.todoService = service;
        };
    }

    angular.module('doo')
        .controller('todoCtrl', TodoController);
}