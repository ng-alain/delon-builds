import { DebugElement, Type } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';
import { Chart } from '@antv/g2';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
export type PageG2Type = 'geometries' | 'views';
export declare const PageG2DataCount = 2;
export declare const PageG2Height = 100;
export declare class PageG2<T> {
    fixture: ComponentFixture<T> | null;
    constructor(fixture?: ComponentFixture<T> | null);
    get dl(): DebugElement;
    get context(): T;
    get comp(): NzSafeAny;
    get chart(): Chart;
    genModule<M>(module: M, comp: Type<T>): this;
    genComp(comp: Type<T>, dc?: boolean): this;
    makeModule<M>(module: M, comp: Type<T>, options?: {
        dc: boolean;
    }): PageG2<T>;
    dcFirst(): this;
    dc(): this;
    end(): this;
    destroy(): void;
    newData(data: NzSafeAny): this;
    getEls(cls: string): NodeListOf<HTMLElement>;
    getEl(cls: string): HTMLElement;
    getController(type: 'axis' | 'legend'): NzSafeAny;
    isCanvas(stauts?: boolean): this;
    isText(cls: string, value: string): this;
    isExists(cls: string, stauts?: boolean): this;
    checkOptions(key: string, value: NzSafeAny): this;
    checkAttrOptions(type: PageG2Type, key: string, value: NzSafeAny): this;
    isXScalesCount(num: number): this;
    isYScalesCount(num: number): this;
    isDataCount(type: PageG2Type, num: number): this;
    get firstDataPoint(): {
        x: number;
        y: number;
    };
    checkTooltip(_includeText: string | null, point?: {
        x: number;
        y: number;
    }): this;
    checkClickItem(): this;
}
export declare function checkDelay<M, T>(module: M, comp: Type<T>, page?: PageG2<T> | null): void;
