/// <reference path="../_all.ts" />

module doo {
    export interface ITodoService {
        getLists(): TodoList[];
        getTodos(list: string): ng.IPromise<{}>;
    }
}