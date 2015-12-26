/// <reference path="../_all.ts" />

module doo {
    export class SideBarController {
        static $inject = ['$mdSidenav', '$mdDialog', 'todoService'];

        private todoService: ITodoService;        
        private listName: string;

        constructor(
            private $mdSidenav: ng.material.ISidenavService,
            private $mdDialog: ng.material.IDialogService,
            service: ITodoService) {
            this.todoService = service;
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
            this.todoService.addTodoList(this.listName);
            this.$mdDialog.cancel();
        }
    }

    angular.module('doo')
        .controller('sideBarCtrl', SideBarController);
}