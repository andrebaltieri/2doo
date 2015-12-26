/// <reference path="_all.ts" />

module doo {
    'use strict';

    function config($routeProvider: ng.route.IRouteProvider)
    {
        $routeProvider
            .when("/", {
                templateUrl: "pages/todo-list.html",
                controller: "todoListCtrl",
                controllerAs: "vm"
            });
    }

    config.$inject = ['$routeProvider'];

    angular.module('doo').config(config);
}