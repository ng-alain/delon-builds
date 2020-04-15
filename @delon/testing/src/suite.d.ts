import { Type } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';
export declare class TestContext<T> {
    fixture: ComponentFixture<T>;
    constructor(fixture: ComponentFixture<T>);
    get component(): T;
    get el(): HTMLElement;
    get dl(): import("@angular/core").DebugElement;
    get context(): T;
    detectChanges(): void;
    resolve<T1>(component: Type<T1>): T1;
}
export declare const createTestContext: <T>(component: Type<T>) => TestContext<T>;
