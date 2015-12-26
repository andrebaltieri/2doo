/// <reference path="../_all.ts" />

module doo {
    export interface ITodoService {
        getTodos(id: number): TodoItem[];
        addTodoList(title: string): void;
    }
}