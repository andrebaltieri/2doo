/// <reference path="_all.ts" />

module doo {
    'use strict';

    function config(
        $routeProvider: ng.route.IRouteProvider,
        $mdThemingProvider: ng.material.IThemingProvider)
    {
        $routeProvider
            .when("/", {
                templateUrl: "pages/todo-list.html",
                controller: "todoListCtrl",
                controllerAs: "vm"
            });
        
        $mdThemingProvider.theme('default').primaryPalette('pink').accentPalette('orange');
    }

    config.$inject = ['$routeProvider', '$mdThemingProvider'];

    angular.module('doo').config(config);
}