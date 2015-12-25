/// <reference path="../_all.ts" />

module doo {
    export class SideBarController {
        static $inject = ['$mdSidenav', '$mdDialog', 'todoService'];

        private service: ITodoService;
        private todoLists: TodoList[];
        private listName: string;

        constructor(
            private $mdSidenav: ng.material.ISidenavService,
            private $mdDialog: ng.material.IDialogService,
            service: ITodoService) {
            this.service = service;
            this.todoLists = this.service.getLists();
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
            var id = this.todoLists.length + 1;
            var title = this.listName;
            
            this.todoLists.push(new TodoList(id, title));
            localStorage.setItem('2doo.lists', angular.toJson(this.todoLists));

            this.$mdDialog.cancel();
        }
    }

    angular.module('doo')
        .controller('sideBarCtrl', SideBarController);
}