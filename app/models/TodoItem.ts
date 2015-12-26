/// <reference path="../_all.ts" />

module doo{
    'use strict';
    
    export class TodoItem {
        constructor(public id: number, public title: string, public done: boolean) { }
    }
}