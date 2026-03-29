import { DebugElement, Type } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';

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

export { DROPDOWN_MIN_TIME, TestContext, cleanCdkOverlayHtml, createTestContext, dispatchDropDown, dispatchEvent, dispatchFakeEvent, typeInElement };
