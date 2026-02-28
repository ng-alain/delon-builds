import { DebugElement, Type } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';
import { Chart } from '@antv/g2';
import { NzSafeAny } from 'ng-zorro-antd/core/types';

/** Utility to dispatch any event on a Node. */
declare function dispatchEvent(node: Node | Window, event: Event): Event;
/** Shorthand to dispatch a fake event on a specified node. */
declare function dispatchFakeEvent(node: Node | Window, type: string | Event, canBubble?: boolean): Event;

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Focuses an input, sets its value and dispatches
 * the `input` event, simulating the user typing.
 *
 * @param value Value to be set on the input.
 * @param element Element onto which to set the value.
 */
declare function typeInElement(value: string, element: HTMLInputElement): void;

declare const DROPDOWN_MIN_TIME = 1000;
/**
 * 触发 dropdown
 */
declare function dispatchDropDown(dl: DebugElement, trigger: 'mouseleave' | 'click', allowNull?: boolean): boolean;

type PageG2Type = 'geometries' | 'views';
declare const PageG2DataCount = 2;
declare const PageG2Height = 100;
declare class PageG2<T> {
    fixture: ComponentFixture<T> | null;
    constructor(fixture?: ComponentFixture<T> | null);
    get dl(): DebugElement;
    get context(): T;
    get comp(): NzSafeAny;
    get chart(): Chart;
    genComp(comp: Type<T>, dc?: boolean): this;
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
declare function checkDelay<T>(comp: Type<T>, page?: PageG2<T> | null): void;

declare class TestContext<T> {
    fixture: ComponentFixture<T>;
    constructor(fixture: ComponentFixture<T>);
    get component(): T;
    get el(): HTMLElement;
    get dl(): DebugElement;
    get context(): T;
    detectChanges(): void;
    resolve<T1>(component: Type<T1>): T1;
}
declare const createTestContext: <T>(component: Type<T>) => TestContext<T>;

/**
 * 清除Cdk的窗体，以便下一次使用，一般这样使用：
 * ```ts
 * afterEach(cleanCdkOverlayHtml);
 * ```
 */
declare function cleanCdkOverlayHtml(): void;

export { DROPDOWN_MIN_TIME, PageG2, PageG2DataCount, PageG2Height, TestContext, checkDelay, cleanCdkOverlayHtml, createTestContext, dispatchDropDown, dispatchEvent, dispatchFakeEvent, typeInElement };
export type { PageG2Type };
