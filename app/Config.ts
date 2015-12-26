/// <reference path="_all.ts" />

module doo {
    'use strict';

    function config($mdThemingProvider: ng.material.IThemingProvider)
    {
        $mdThemingProvider.theme('default').primaryPalette('pink').accentPalette('orange');
    }

    config.$inject = ['$mdThemingProvider'];

    angular.module('doo').config(config);
}