import { Type } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';
export declare class TestContext<T> {
    fixture: ComponentFixture<T>;
    constructor(fixture: ComponentFixture<T>);
    readonly component: T;
    readonly el: HTMLElement;
    readonly dl: import("@angular/core/src/debug/debug_node").DebugElement;
    readonly context: T;
    detectChanges(): void;
    resolve<T1>(component: Type<T1>): T1;
}
export declare const configureTestSuite: (configureAction?: () => void) => void;
export declare const createTestContext: <T>(component: Type<T>) => TestContext<T>;
