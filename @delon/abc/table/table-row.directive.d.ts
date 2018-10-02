import { TemplateRef, OnInit } from '@angular/core';
export declare class STRowSource {
    private titles;
    private rows;
    add(type: string, path: string, ref: TemplateRef<any>): void;
    getTitle(path: string): TemplateRef<any>;
    getRow(path: string): TemplateRef<any>;
}
export declare class STRowDirective implements OnInit {
    private ref;
    private source;
    id: string;
    type: 'title';
    constructor(ref: TemplateRef<any>, source: STRowSource);
    ngOnInit(): void;
}
