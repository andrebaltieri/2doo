/// <reference path="../_all.ts" />

module doo {
    export class SideBarController {
        static $inject = ['$rootScope', '$mdSidenav', '$mdDialog', 'todoService'];

        private $rootScope: IRootScope;
        private listName: string;

        constructor(
            private rootScope: IRootScope,
            private $mdSidenav: ng.material.ISidenavService,
            private $mdDialog: ng.material.IDialogService,
            service: ITodoService) {
            this.$rootScope = rootScope;
        };

        close(): void {
            this.$mdSidenav('left').close();
        }

        open(): void {
            this.$mdSidenav('left').open();
        }

        toggle(): void {
            this.$mdSidenav('left').toggle();
        }

        showAddList(): void {
            this.$mdDialog.show({
                templateUrl: 'pages/add-list.html',
                clickOutsideToClose: true
            });
        }

        cancelAddList(): void {
            this.$mdDialog.cancel();
        }

        addList(): void {
            var id = this.$rootScope.TodoLists.length + 1;
            var title = this.listName;
            
            this.$rootScope.TodoLists.push(new TodoList(id, title));
            localStorage.setItem('2doo.lists', angular.toJson(this.$rootScope.TodoLists));
            
            this.$mdDialog.cancel();
        }
    }

    angular.module('doo')
        .controller('sideBarCtrl', SideBarController);
}