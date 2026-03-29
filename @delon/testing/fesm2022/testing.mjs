import { tick, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NzDropdownDirective } from 'ng-zorro-antd/dropdown';

/** Utility to dispatch any event on a Node. */
function dispatchEvent(node, event) {
    node.dispatchEvent(event);
    return event;
}
/** Shorthand to dispatch a fake event on a specified node. */
function dispatchFakeEvent(node, type, canBubble) {
    return dispatchEvent(node, typeof type === 'string' ? new Event(type, { bubbles: canBubble ?? true }) : type);
}

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
function typeInElement(value, element) {
    element.focus();
    element.value = value;
    dispatchFakeEvent(element, 'input');
    dispatchFakeEvent(element, 'change');
}

const DROPDOWN_MIN_TIME = 1000;
/**
 * 触发 dropdown
 */
function dispatchDropDown(dl, trigger, allowNull = true) {
    const directive = dl.query(By.directive(NzDropdownDirective));
    if (allowNull && directive == null) {
        return false;
    }
    const el = directive.injector.get(NzDropdownDirective).elementRef.nativeElement;
    if (trigger === 'click') {
        dispatchFakeEvent(el, 'click');
    }
    else {
        dispatchFakeEvent(el, 'mouseenter');
    }
    tick(DROPDOWN_MIN_TIME);
    return true;
}

class TestContext {
    fixture;
    constructor(fixture) {
        this.fixture = fixture;
    }
    get component() {
        return this.fixture.componentInstance;
    }
    get el() {
        return this.fixture.debugElement.nativeElement;
    }
    get dl() {
        return this.fixture.debugElement;
    }
    get context() {
        return this.fixture.componentInstance;
    }
    detectChanges() {
        this.fixture.detectChanges();
    }
    resolve(component) {
        return this.fixture.debugElement.injector.get(component);
    }
}
const createTestContext = (component) => {
    return new TestContext(TestBed.createComponent(component));
};

/**
 * 清除Cdk的窗体，以便下一次使用，一般这样使用：
 * ```ts
 * afterEach(cleanCdkOverlayHtml);
 * ```
 */
function cleanCdkOverlayHtml() {
    const els = document.querySelectorAll('.cdk-overlay-container');
    if (els && els.length > 0) {
        els.forEach(el => (el.innerHTML = ''));
    }
}

// from angular

/**
 * Generated bundle index. Do not edit.
 */

export { DROPDOWN_MIN_TIME, TestContext, cleanCdkOverlayHtml, createTestContext, dispatchDropDown, dispatchEvent, dispatchFakeEvent, typeInElement };
//# sourceMappingURL=testing.mjs.map
