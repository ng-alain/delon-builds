/**
 * @fileoverview added by tsickle
 * Generated from: loading.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
export class LoadingDefaultComponent {
    /**
     * @return {?}
     */
    get icon() {
        return (/** @type {?} */ (this.options.icon));
    }
    /**
     * @return {?}
     */
    get custom() {
        return (/** @type {?} */ (this.options.custom));
    }
}
LoadingDefaultComponent.decorators = [
    { type: Component, args: [{
                selector: 'loading-default',
                template: "<div class=\"loading-default__icon\" *ngIf=\"options.type !== 'text'\">\n  <ng-container [ngSwitch]=\"options.type\">\n    <nz-spin *ngSwitchCase=\"'spin'\" nzSimple></nz-spin>\n    <i *ngSwitchCase=\"'icon'\" nz-icon [nzType]=\"icon.type\" [nzTheme]=\"icon.theme\" [nzSpin]=\"icon.spin\"></i>\n    <div *ngSwitchDefault class=\"loading-default__custom\" [ngStyle]=\"custom.style\" [innerHTML]=\"custom.html\"></div>\n  </ng-container>\n</div>\n<div *ngIf=\"options.text\" class=\"loading-default__text\">{{ options.text }}</div>\n",
                host: {
                    '[class.loading-default]': 'true',
                },
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
if (false) {
    /** @type {?} */
    LoadingDefaultComponent.prototype.options;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL2xvYWRpbmcvIiwic291cmNlcyI6WyJsb2FkaW5nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFhdEYsTUFBTSxPQUFPLHVCQUF1Qjs7OztJQUdsQyxJQUFJLElBQUk7UUFDTixPQUFPLG1CQUFBLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFDLENBQUM7SUFDNUIsQ0FBQzs7OztJQUVELElBQUksTUFBTTtRQUNSLE9BQU8sbUJBQUEsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUMsQ0FBQztJQUM5QixDQUFDOzs7WUFuQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLCtoQkFBdUM7Z0JBQ3ZDLElBQUksRUFBRTtvQkFDSix5QkFBeUIsRUFBRSxNQUFNO2lCQUNsQztnQkFDRCxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDdEM7Ozs7SUFFQywwQ0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTG9hZGluZ1Nob3dPcHRpb25zIH0gZnJvbSAnLi9sb2FkaW5nLnR5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbG9hZGluZy1kZWZhdWx0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xvYWRpbmcuY29tcG9uZW50Lmh0bWwnLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5sb2FkaW5nLWRlZmF1bHRdJzogJ3RydWUnLFxuICB9LFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIExvYWRpbmdEZWZhdWx0Q29tcG9uZW50IHtcbiAgb3B0aW9uczogTG9hZGluZ1Nob3dPcHRpb25zO1xuXG4gIGdldCBpY29uKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuaWNvbiE7XG4gIH1cblxuICBnZXQgY3VzdG9tKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuY3VzdG9tITtcbiAgfVxufVxuIl19