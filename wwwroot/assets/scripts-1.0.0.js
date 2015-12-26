/// <reference path="_all.ts" />
var doo;
(function (doo) {
    'use strict';
    angular.module('doo', ['ngRoute', 'ngMaterial']);
})(doo || (doo = {}));
/// <reference path="_all.ts" />
var doo;
(function (doo) {
    'use strict';
    function config($mdThemingProvider) {
        $mdThemingProvider.theme('default').primaryPalette('pink').accentPalette('orange');
    }
    config.$inject = ['$mdThemingProvider'];
    angular.module('doo').config(config);
})(doo || (doo = {}));
/// <reference path="_all.ts" />
var doo;
(function (doo) {
    'use strict';
    function config($routeProvider) {
        $routeProvider
            .when("/", {
            templateUrl: "pages/todo-list.html",
            controller: "todoListCtrl",
            controllerAs: "vm"
        });
    }
    config.$inject = ['$routeProvider'];
    angular.module('doo').config(config);
})(doo || (doo = {}));
/// <reference path="_all.ts" />
var doo;
(function (doo) {
    'use strict';
    angular.module('doo').constant('SETTINGS', {
        "LISTS_PATH": "2doo.lists",
        "TODOS_PATH": "2doo.todos"
    });
})(doo || (doo = {}));
/// <reference path="_all.ts" />
var doo;
(function (doo) {
    'use strict';
    function start($rootScope) {
        var lists = localStorage.getItem('2doo.lists');
        var todos = localStorage.getItem('2doo.todos');
        console.log(lists);
        if (lists == null || lists == undefined || lists == '') {
            $rootScope.TodoLists = [];
        }
        else {
            $rootScope.TodoLists = angular.fromJson(lists);
        }
    }
    start.$inject = ['$rootScope'];
    angular.module('doo').run(start);
})(doo || (doo = {}));
/// <reference path="../_all.ts" />
var doo;
(function (doo) {
    var TodoListController = (function () {
        function TodoListController() {
        }
        ;
        return TodoListController;
    })();
    doo.TodoListController = TodoListController;
    angular.module('doo')
        .controller('todoListCtrl', TodoListController);
})(doo || (doo = {}));
/// <reference path="../_all.ts" />
var doo;
(function (doo) {
    var SideBarController = (function () {
        function SideBarController(rootScope, $mdSidenav, $mdDialog, service) {
            this.rootScope = rootScope;
            this.$mdSidenav = $mdSidenav;
            this.$mdDialog = $mdDialog;
            this.$rootScope = rootScope;
        }
        ;
        SideBarController.prototype.close = function () {
            this.$mdSidenav('left').close();
        };
        SideBarController.prototype.open = function () {
            this.$mdSidenav('left').open();
        };
        SideBarController.prototype.toggle = function () {
            this.$mdSidenav('left').toggle();
        };
        SideBarController.prototype.showAddList = function () {
            this.$mdDialog.show({
                templateUrl: 'pages/add-list.html',
                clickOutsideToClose: true
            });
        };
        SideBarController.prototype.cancelAddList = function () {
            this.$mdDialog.cancel();
        };
        SideBarController.prototype.addList = function () {
            var id = this.$rootScope.TodoLists.length + 1;
            var title = this.listName;
            this.$rootScope.TodoLists.push(new doo.TodoList(id, title));
            localStorage.setItem('2doo.lists', angular.toJson(this.$rootScope.TodoLists));
            this.$mdDialog.cancel();
        };
        SideBarController.$inject = ['$rootScope', '$mdSidenav', '$mdDialog', 'todoService'];
        return SideBarController;
    })();
    doo.SideBarController = SideBarController;
    angular.module('doo')
        .controller('sideBarCtrl', SideBarController);
})(doo || (doo = {}));
/// <reference path="../_all.ts" />
var doo;
(function (doo) {
    var TodoList = (function () {
        function TodoList(id, title) {
            this.id = id;
            this.title = title;
        }
        return TodoList;
    })();
    doo.TodoList = TodoList;
})(doo || (doo = {}));
/// <reference path="../../_all.ts" />
/// <reference path="../_all.ts" />
/// <reference path="../_all.ts" />
var doo;
(function (doo) {
    var TodoService = (function () {
        function TodoService($http) {
            this.$http = $http;
        }
        ;
        TodoService.prototype.getTodos = function (list) {
            return angular.fromJson(localStorage.getItem('2doo.todos'));
        };
        ;
        TodoService.prototype.getLists = function () {
            return angular.fromJson(localStorage.getItem('2doo.lists'));
        };
        ;
        TodoService.$inject = ['$http'];
        return TodoService;
    })();
    doo.TodoService = TodoService;
    angular.module('doo')
        .service('todoService', TodoService);
})(doo || (doo = {}));
/// <reference path="../typings/angularjs/angular.d.ts" />
/// <reference path="../typings/angularjs/angular-route.d.ts" />
/// <reference path="../typings/angular-material/angular-material.d.ts" />
/// <reference path="Modules.ts" />
/// <reference path="Config.ts" />
/// <reference path="Routes.ts" />
/// <reference path="Settings.ts" />
/// <reference path="Startup.ts" />
/// <reference path="controllers/TodoListController.ts" />
/// <reference path="controllers/SideBarController.ts" />
/// <reference path="models/TodoList.ts" />
/// <reference path="models/contracts/IRootScope.ts" />
/// <reference path="contracts/ITodoService.ts" />
/// <reference path="services/TodoService.ts" /> 
//# sourceMappingURL=scripts-1.0.0.js.map