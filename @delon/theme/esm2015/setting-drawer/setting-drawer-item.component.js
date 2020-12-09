/**
 * @fileoverview added by tsickle
 * Generated from: setting-drawer-item.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class SettingDrawerItemComponent {
    constructor() {
        this.i = {};
        this.pxVal = 0;
        this.format = (/**
         * @param {?} value
         * @return {?}
         */
        (value) => `${value} px`);
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set data(val) {
        this.i = val;
        if (val.type === 'px') {
            this.pxVal = +val.value.replace('px', '');
        }
    }
    /**
     * @param {?} val
     * @return {?}
     */
    pxChange(val) {
        this.i.value = `${val}px`;
    }
}
SettingDrawerItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'setting-drawer-item',
                template: "<span>\n  {{ i.label }}\n  <span class=\"pl-sm text-grey\">{{ i.tip }}</span>\n</span>\n<div [ngSwitch]=\"i.type\">\n  <ng-container *ngSwitchCase=\"'color'\">\n    <input nz-input type=\"color\" style=\"min-width: 88px\" [(ngModel)]=\"i.value\" [ngModelOptions]=\"{ standalone: true }\" />\n  </ng-container>\n  <ng-container *ngSwitchCase=\"'input'\">\n    <input nz-input style=\"min-width: 88px\" [(ngModel)]=\"i.value\" [ngModelOptions]=\"{ standalone: true }\" />\n  </ng-container>\n  <ng-container *ngSwitchCase=\"'px'\">\n    <nz-input-number\n      [(ngModel)]=\"pxVal\"\n      (ngModelChange)=\"pxChange($event)\"\n      [nzMin]=\"i.min\"\n      [nzMax]=\"i.max\"\n      [nzStep]=\"i.step || 2\"\n      [nzFormatter]=\"format\"\n    ></nz-input-number>\n  </ng-container>\n  <ng-container *ngSwitchCase=\"'switch'\">\n    <nz-switch nzSize=\"small\" [(ngModel)]=\"i.value\" [ngModelOptions]=\"{ standalone: true }\"></nz-switch>\n  </ng-container>\n  <ng-container *ngSwitchDefault>\n    <ng-content></ng-content>\n  </ng-container>\n</div>\n",
                host: {
                    '[class.setting-drawer__body-item]': 'true',
                }
            }] }
];
SettingDrawerItemComponent.propDecorators = {
    data: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    SettingDrawerItemComponent.prototype.i;
    /** @type {?} */
    SettingDrawerItemComponent.prototype.pxVal;
    /** @type {?} */
    SettingDrawerItemComponent.prototype.format;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZy1kcmF3ZXItaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvdGhlbWUvc2V0dGluZy1kcmF3ZXIvIiwic291cmNlcyI6WyJzZXR0aW5nLWRyYXdlci1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBU2pELE1BQU0sT0FBTywwQkFBMEI7SUFQdkM7UUFRRSxNQUFDLEdBQVEsRUFBRSxDQUFDO1FBVVosVUFBSyxHQUFHLENBQUMsQ0FBQztRQU1WLFdBQU07Ozs7UUFBRyxDQUFDLEtBQWEsRUFBRSxFQUFFLENBQUMsR0FBRyxLQUFLLEtBQUssRUFBQztJQUM1QyxDQUFDOzs7OztJQWZDLElBQ0ksSUFBSSxDQUFDLEdBQVE7UUFDZixJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUNiLElBQUksR0FBRyxDQUFDLElBQUksS0FBSyxJQUFJLEVBQUU7WUFDckIsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztTQUMzQztJQUNILENBQUM7Ozs7O0lBSUQsUUFBUSxDQUFDLEdBQVc7UUFDbEIsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQztJQUM1QixDQUFDOzs7WUF0QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLHlpQ0FBbUQ7Z0JBQ25ELElBQUksRUFBRTtvQkFDSixtQ0FBbUMsRUFBRSxNQUFNO2lCQUM1QzthQUNGOzs7bUJBSUUsS0FBSzs7OztJQUZOLHVDQUFZOztJQVVaLDJDQUFVOztJQU1WLDRDQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2V0dGluZy1kcmF3ZXItaXRlbScsXG4gIHRlbXBsYXRlVXJsOiAnLi9zZXR0aW5nLWRyYXdlci1pdGVtLmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdDoge1xuICAgICdbY2xhc3Muc2V0dGluZy1kcmF3ZXJfX2JvZHktaXRlbV0nOiAndHJ1ZScsXG4gIH0sXG59KVxuZXhwb3J0IGNsYXNzIFNldHRpbmdEcmF3ZXJJdGVtQ29tcG9uZW50IHtcbiAgaTogYW55ID0ge307XG5cbiAgQElucHV0KClcbiAgc2V0IGRhdGEodmFsOiBhbnkpIHtcbiAgICB0aGlzLmkgPSB2YWw7XG4gICAgaWYgKHZhbC50eXBlID09PSAncHgnKSB7XG4gICAgICB0aGlzLnB4VmFsID0gK3ZhbC52YWx1ZS5yZXBsYWNlKCdweCcsICcnKTtcbiAgICB9XG4gIH1cblxuICBweFZhbCA9IDA7XG5cbiAgcHhDaGFuZ2UodmFsOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmkudmFsdWUgPSBgJHt2YWx9cHhgO1xuICB9XG5cbiAgZm9ybWF0ID0gKHZhbHVlOiBudW1iZXIpID0+IGAke3ZhbHVlfSBweGA7XG59XG4iXX0=