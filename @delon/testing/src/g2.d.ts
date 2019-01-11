import { Type } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';
export declare type PageG2Type = 'geoms' | 'views';
export declare class PageG2<T> {
    fixture: ComponentFixture<T>;
    constructor(fixture?: ComponentFixture<T>);
    readonly dl: import("@angular/core").DebugElement;
    readonly context: T;
    readonly comp: any;
    readonly chart: any;
    makeModule<M>(module: M, comp: Type<T>, options?: {
        dc: boolean;
    }): PageG2<T>;
    dcFirst(): this;
    dc(): this;
    destroy(): void;
    newData(data: any): this;
    getEls(cls: string): NodeListOf<HTMLElement>;
    getEl(cls: string): HTMLElement;
    isCanvas(stauts?: boolean): this;
    isText(cls: string, value: string): this;
    isExists(cls: string, stauts?: boolean): this;
    checkOptions(key: string, value: any): this;
    checkAttrOptions(type: PageG2Type, key: string, value: any): this;
    isXScalesCount(num: number): this;
    isYScalesCount(num: number): this;
    isDataCount(type: PageG2Type, num: number): this;
}
