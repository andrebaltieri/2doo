/// <reference path="../_all.ts" />

module doo {
    export class TodoService implements ITodoService {
        static $inject = ['$rootScope'];
            
        private $rootScope: IRootScope;

        constructor(private rootScope: IRootScope) {
            this.$rootScope = rootScope;
        };

        getTodos(index): TodoItem[] {
            var data: TodoList[] = angular.fromJson(localStorage.getItem('2doo.lists'));
            return data[index].todos;
        };

        addTodoList(title): void {    
            this.$rootScope.TodoLists.push(new TodoList(title, []));
            localStorage.setItem('2doo.lists', angular.toJson(this.$rootScope.TodoLists));
        }
    }

    angular.module('doo')
        .service('todoService', TodoService);
}