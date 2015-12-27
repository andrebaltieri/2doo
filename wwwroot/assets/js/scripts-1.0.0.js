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
        // http://www.getmdl.io/customize/index.html
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
            templateUrl: "pages/home.html",
            controller: "homeCtrl",
            controllerAs: "vm"
        })
            .when("/todos/:index", {
            templateUrl: "pages/todo-items.html",
            controller: "todoCtrl",
            controllerAs: "vm"
        })
            .otherwise({
            templateUrl: "pages/404.html",
            controller: "homeCtrl",
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
    function start($rootScope) {
        var lists = localStorage.getItem('2doo.lists');
        var todos = localStorage.getItem('2doo.todos');
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
    var HomeController = (function () {
        function HomeController() {
        }
        ;
        return HomeController;
    })();
    doo.HomeController = HomeController;
    angular.module('doo')
        .controller('homeCtrl', HomeController);
})(doo || (doo = {}));
/// <reference path="../_all.ts" />
var doo;
(function (doo) {
    var SideBarController = (function () {
        function SideBarController($mdSidenav, $mdDialog, service) {
            this.$mdSidenav = $mdSidenav;
            this.$mdDialog = $mdDialog;
            this.todoService = service;
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
            this.todoService.addTodoList(this.listName);
            this.$mdDialog.cancel();
        };
        SideBarController.$inject = ['$mdSidenav', '$mdDialog', 'todoService'];
        return SideBarController;
    })();
    doo.SideBarController = SideBarController;
    angular.module('doo')
        .controller('sideBarCtrl', SideBarController);
})(doo || (doo = {}));
/// <reference path="../_all.ts" />
var doo;
(function (doo) {
    var TodoController = (function () {
        function TodoController($routeParams) {
            this.index = 0;
            this.index = $routeParams.index;
            console.log(this.index);
        }
        ;
        TodoController.$inject = ['$routeParams'];
        return TodoController;
    })();
    doo.TodoController = TodoController;
    angular.module('doo')
        .controller('todoCtrl', TodoController);
})(doo || (doo = {}));
/// <reference path="../_all.ts" />
var doo;
(function (doo) {
    var TodoList = (function () {
        function TodoList(title, todos) {
            this.title = title;
            this.todos = todos;
        }
        return TodoList;
    })();
    doo.TodoList = TodoList;
})(doo || (doo = {}));
/// <reference path="../_all.ts" />
var doo;
(function (doo) {
    'use strict';
    var TodoItem = (function () {
        function TodoItem(id, title, done) {
            this.id = id;
            this.title = title;
            this.done = done;
        }
        return TodoItem;
    })();
    doo.TodoItem = TodoItem;
})(doo || (doo = {}));
/// <reference path="../_all.ts" />
/// <reference path="../_all.ts" />
/// <reference path="../_all.ts" />
/// <reference path="../_all.ts" />
var doo;
(function (doo) {
    var TodoService = (function () {
        function TodoService(rootScope) {
            this.rootScope = rootScope;
            this.$rootScope = rootScope;
        }
        ;
        TodoService.prototype.getTodos = function (index) {
            var data = angular.fromJson(localStorage.getItem('2doo.lists'));
            return data[index].todos;
        };
        ;
        TodoService.prototype.addTodoList = function (title) {
            this.$rootScope.TodoLists.push(new doo.TodoList(title, []));
            localStorage.setItem('2doo.lists', angular.toJson(this.$rootScope.TodoLists));
        };
        TodoService.$inject = ['$rootScope'];
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
/// <reference path="Startup.ts" />
/// <reference path="controllers/HomeController.ts" />
/// <reference path="controllers/SideBarController.ts" />
/// <reference path="controllers/TodoController.ts" />
/// <reference path="models/TodoList.ts" />
/// <reference path="models/TodoItem.ts" />
/// <reference path="contracts/IRootScope.ts" />
/// <reference path="contracts/ITodoService.ts" />
/// <reference path="contracts/IRouteParams.ts" />
/// <reference path="services/TodoService.ts" /> 
//# sourceMappingURL=scripts-1.0.0.js.map