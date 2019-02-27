import { DebugElement } from '@angular/core';
/**
 * [nz-dropdown](https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/components/dropdown/nz-dropdown.component.ts#L88) 抖动合理值
 */
export declare const DROPDOWN_MIN_TIME = 51;
/**
 * 触发 dropdown
 */
export declare function dispatchDropDown(dl: DebugElement, trigger: 'mouseleave' | 'click', allowNull?: boolean): boolean;
