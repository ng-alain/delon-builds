import { DebugElement, Type } from "@angular/core";
import { ComponentFixture } from "@angular/core/testing";
import { Chart, G2Spec } from "@antv/g2";
import { NzSafeAny } from "ng-zorro-antd/core/types";
/** Utility to dispatch any event on a Node. */
export declare function dispatchEvent(node: Node | Window, event: Event): Event;
/** Shorthand to dispatch a fake event on a specified node. */
export declare function dispatchFakeEvent(node: Node | Window, type: string | Event, canBubble?: boolean): Event;
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
export declare function typeInElement(value: string, element: HTMLInputElement): void;
export declare const DROPDOWN_MIN_TIME = 1000;
/**
 * 触发 dropdown
 */
export declare function dispatchDropDown(dl: DebugElement, trigger: 'mouseleave' | 'click', allowNull?: boolean): boolean;
export declare const PageG2DataCount = 2;
export declare const PageG2Height = 100;
export declare class PageG2<T> {
  fixture: ComponentFixture<T> | null;
  constructor(fixture?: ComponentFixture<T> | null);
  get dl(): DebugElement;
  get context(): T;
  get comp(): NzSafeAny;
  get chart(): Chart;
  /** 等待首次渲染完成并跑一次变更检测 */
  ready(): Promise<void>;
  genComp(comp: Type<T>, dc?: boolean): this;
  /** 同步版引导：仅创建组件并补一次 CD；随后必须 `await page.ready()` */
  dcFirst(): this;
  end(): Promise<void>;
  dc(): this;
  destroy(): void;
  newData(data: NzSafeAny): this;
  getEls(cls: string): NodeListOf<HTMLElement>;
  getEl(cls: string): HTMLElement;
  /** 断言当前生效的 v5 spec */
  expectSpec(assert: (spec: G2Spec) => void): this;
  /** 断言 spec 顶层 `data` 的行数 */
  isDataCount(num: number): this;
  isCanvas(stauts?: boolean): this;
  isText(cls: string, value: string): this;
  isExists(cls: string, stauts?: boolean): this;
  /** 断言 spec 顶层字段 */
  checkSpec(key: string, value: NzSafeAny): this;
}
export declare function checkDelay<T>(comp: Type<T>, page?: PageG2<T> | null): Promise<void>;
export declare class TestContext<T> {
  fixture: ComponentFixture<T>;
  constructor(fixture: ComponentFixture<T>);
  get component(): T;
  get el(): HTMLElement;
  get dl(): DebugElement;
  get context(): T;
  detectChanges(): void;
  resolve<T1>(component: Type<T1>): T1;
}
export declare const createTestContext: <T>(component: Type<T>) => TestContext<T>;
/**
 * 清除Cdk的窗体，以便下一次使用，一般这样使用：
 * ```ts
 * afterEach(cleanCdkOverlayHtml);
 * ```
 */
export declare function cleanCdkOverlayHtml(): void;