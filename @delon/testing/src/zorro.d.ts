import { DebugElement } from '@angular/core';
export declare const DROPDOWN_MIN_TIME = 1000;
/**
 * 触发 dropdown
 */
export declare function dispatchDropDown(dl: DebugElement, trigger: 'mouseleave' | 'click', allowNull?: boolean): boolean;
