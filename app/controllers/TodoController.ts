/// <reference path="../_all.ts" />
module doo {
    export class TodoController {
        static $inject = ['$routeParams'];       
        
        private index: number = 0;
        
        constructor($routeParams: IRouteParams) {
            this.index = $routeParams.index;
            console.log(this.index);
        };
    }

    angular.module('doo')
        .controller('todoCtrl', TodoController);
}