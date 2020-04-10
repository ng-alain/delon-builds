import { Type } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
export declare type PageG2Type = 'geoms' | 'views';
export declare const PageG2DataCount = 2;
export declare const PageG2Height = 100;
export declare class PageG2<T> {
    fixture: ComponentFixture<T> | null;
    constructor(fixture?: ComponentFixture<T> | null);
    get dl(): import("@angular/core").DebugElement;
    get context(): NzSafeAny;
    get comp(): any;
    get chart(): any;
    genModule<M>(module: M, comp: Type<T>): this;
    genComp(comp: Type<T>, dc?: boolean): this;
    makeModule<M>(module: M, comp: Type<T>, options?: {
        dc: boolean;
    }): PageG2<T>;
    dcFirst(): this;
    dc(): this;
    end(): this;
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
    checkTooltip(includeText: string | null, point?: {
        x: number;
        y: number;
    }): this;
}
export declare function checkDelay<M, T>(module: M, comp: Type<T>, page?: PageG2<T> | null): void;
