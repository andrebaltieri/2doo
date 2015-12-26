/// <reference path="../_all.ts" />

module doo {
    export class TodoService implements ITodoService {
        static $inject = ['$rootScope'];
            
        private $rootScope: IRootScope;

        constructor(private rootScope: IRootScope) {
            this.$rootScope = rootScope;
        };

        getTodos(id): TodoItem[] {
            var data: TodoList[] = angular.fromJson(localStorage.getItem('2doo.lists'));
            data.forEach(element => {
                if (element.id == id) {
                    return element.todos;
                }
            });
            
            return [];
        };

        addTodoList(title): void {
            var id = this.$rootScope.TodoLists.length + 1;            
            this.$rootScope.TodoLists.push(new TodoList(id, title, []));
            localStorage.setItem('2doo.lists', angular.toJson(this.$rootScope.TodoLists));
        }
    }

    angular.module('doo')
        .service('todoService', TodoService);
}