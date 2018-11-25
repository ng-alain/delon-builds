import { __decorate, __metadata } from 'tslib';
import { Component, Input, HostListener, ChangeDetectionStrategy, ChangeDetectorRef, Renderer2, ElementRef, TemplateRef, NgModule } from '@angular/core';
import { InputNumber, DelonUtilModule } from '@delon/util';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class QuickMenuComponent {
    /**
     * @param {?} cd
     * @param {?} el
     * @param {?} render
     */
    constructor(cd, el, render) {
        this.cd = cd;
        this.el = el;
        this.render = render;
        // #region fields
        this._icon = 'question-circle';
        this.top = 120;
        this.width = 200;
        this.bgColor = '#fff';
        this.borderColor = '#ddd';
        this.show = false;
        this.ctrlStyle = {};
        this.initFlag = false;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set icon(value) {
        if (value instanceof TemplateRef) {
            this._icon = null;
            this._iconTpl = value;
        }
        else {
            this._icon = value;
        }
    }
    /**
     * @return {?}
     */
    _click() {
        this.show = !this.show;
        this.setStyle();
    }
    /**
     * @return {?}
     */
    setStyle() {
        this.ctrlStyle = {
            'background-color': this.bgColor,
            'border-color': this.borderColor,
        };
        /** @type {?} */
        const res = [
            `top:${this.top}px`,
            `width:${this.width}px`,
            `background-color:${this.bgColor}`,
            `border-color:${this.borderColor}`,
            `margin-right:-${this.show ? 0 : this.width}px`,
        ];
        this.render.setAttribute(this.el.nativeElement, 'style', res.join(';'));
        this.cd.detectChanges();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.initFlag = true;
        this.setStyle();
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        if (this.initFlag)
            this.setStyle();
    }
}
QuickMenuComponent.decorators = [
    { type: Component, args: [{
                selector: 'quick-menu',
                template: "<div class=\"quick-menu__inner\">\n  <div class=\"quick-menu__ctrl\" [ngStyle]=\"ctrlStyle\">\n    <div class=\"quick-menu__ctrl-icon\">\n      <ng-container *ngIf=\"_icon; else _iconTpl\">\n        <i nz-icon [type]=\"_icon\"></i>\n      </ng-container>\n    </div>\n  </div>\n  <ng-content></ng-content>\n</div>\n",
                host: { '[class.quick-menu]': 'true' },
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
QuickMenuComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: Renderer2 }
];
QuickMenuComponent.propDecorators = {
    icon: [{ type: Input }],
    top: [{ type: Input }],
    width: [{ type: Input }],
    bgColor: [{ type: Input }],
    borderColor: [{ type: Input }],
    _click: [{ type: HostListener, args: ['click',] }]
};
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], QuickMenuComponent.prototype, "top", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], QuickMenuComponent.prototype, "width", void 0);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const COMPONENTS = [QuickMenuComponent];
class QuickMenuModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return { ngModule: QuickMenuModule, providers: [] };
    }
}
QuickMenuModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, NgZorroAntdModule, DelonUtilModule],
                declarations: [...COMPONENTS],
                exports: [...COMPONENTS],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { QuickMenuComponent, QuickMenuModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpY2tNZW51LmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AZGVsb24vYWJjL3F1aWNrLW1lbnUvcXVpY2stbWVudS5jb21wb25lbnQudHMiLCJuZzovL0BkZWxvbi9hYmMvcXVpY2stbWVudS9xdWljay1tZW51Lm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBIb3N0TGlzdGVuZXIsXG4gIE9uSW5pdCxcbiAgT25DaGFuZ2VzLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIFJlbmRlcmVyMixcbiAgRWxlbWVudFJlZixcbiAgVGVtcGxhdGVSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBJbnB1dE51bWJlciB9IGZyb20gJ0BkZWxvbi91dGlsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncXVpY2stbWVudScsXG4gIHRlbXBsYXRlVXJsOiAnLi9xdWljay1tZW51LmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdDogeyAnW2NsYXNzLnF1aWNrLW1lbnVdJzogJ3RydWUnIH0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgUXVpY2tNZW51Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICAvLyAjcmVnaW9uIGZpZWxkc1xuXG4gIF9pY29uID0gJ3F1ZXN0aW9uLWNpcmNsZSc7XG4gIF9pY29uVHBsOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBASW5wdXQoKVxuICBzZXQgaWNvbih2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55Pikge1xuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XG4gICAgICB0aGlzLl9pY29uID0gbnVsbDtcbiAgICAgIHRoaXMuX2ljb25UcGwgPSB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5faWNvbiA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIHRvcCA9IDEyMDtcblxuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSB3aWR0aCA9IDIwMDtcblxuICBASW5wdXQoKSBiZ0NvbG9yID0gJyNmZmYnO1xuXG4gIEBJbnB1dCgpIGJvcmRlckNvbG9yID0gJyNkZGQnO1xuXG4gIC8vICNlbmRyZWdpb25cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZGVyOiBSZW5kZXJlcjIsXG4gICkge31cblxuICBwcml2YXRlIHNob3cgPSBmYWxzZTtcblxuICBASG9zdExpc3RlbmVyKCdjbGljaycpXG4gIF9jbGljaygpIHtcbiAgICB0aGlzLnNob3cgPSAhdGhpcy5zaG93O1xuICAgIHRoaXMuc2V0U3R5bGUoKTtcbiAgfVxuXG4gIGN0cmxTdHlsZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9O1xuICBwcml2YXRlIHNldFN0eWxlKCkge1xuICAgIHRoaXMuY3RybFN0eWxlID0ge1xuICAgICAgJ2JhY2tncm91bmQtY29sb3InOiB0aGlzLmJnQ29sb3IsXG4gICAgICAnYm9yZGVyLWNvbG9yJzogdGhpcy5ib3JkZXJDb2xvcixcbiAgICB9O1xuXG4gICAgY29uc3QgcmVzOiBzdHJpbmdbXSA9IFtcbiAgICAgIGB0b3A6JHt0aGlzLnRvcH1weGAsXG4gICAgICBgd2lkdGg6JHt0aGlzLndpZHRofXB4YCxcbiAgICAgIGBiYWNrZ3JvdW5kLWNvbG9yOiR7dGhpcy5iZ0NvbG9yfWAsXG4gICAgICBgYm9yZGVyLWNvbG9yOiR7dGhpcy5ib3JkZXJDb2xvcn1gLFxuICAgICAgYG1hcmdpbi1yaWdodDotJHt0aGlzLnNob3cgPyAwIDogdGhpcy53aWR0aH1weGAsXG4gICAgXTtcbiAgICB0aGlzLnJlbmRlci5zZXRBdHRyaWJ1dGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnc3R5bGUnLCByZXMuam9pbignOycpKTtcbiAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdEZsYWcgPSBmYWxzZTtcbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pbml0RmxhZyA9IHRydWU7XG4gICAgdGhpcy5zZXRTdHlsZSgpO1xuICB9XG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmluaXRGbGFnKSB0aGlzLnNldFN0eWxlKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdab3Jyb0FudGRNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkJztcbmltcG9ydCB7IERlbG9uVXRpbE1vZHVsZSB9IGZyb20gJ0BkZWxvbi91dGlsJztcblxuaW1wb3J0IHsgUXVpY2tNZW51Q29tcG9uZW50IH0gZnJvbSAnLi9xdWljay1tZW51LmNvbXBvbmVudCc7XG5cbmNvbnN0IENPTVBPTkVOVFMgPSBbUXVpY2tNZW51Q29tcG9uZW50XTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgTmdab3Jyb0FudGRNb2R1bGUsIERlbG9uVXRpbE1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogWy4uLkNPTVBPTkVOVFNdLFxuICBleHBvcnRzOiBbLi4uQ09NUE9ORU5UU10sXG59KVxuZXhwb3J0IGNsYXNzIFF1aWNrTWVudU1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7IG5nTW9kdWxlOiBRdWlja01lbnVNb2R1bGUsIHByb3ZpZGVyczogW10gfTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7SUErQ0UsWUFDVSxJQUNBLElBQ0E7UUFGQSxPQUFFLEdBQUYsRUFBRTtRQUNGLE9BQUUsR0FBRixFQUFFO1FBQ0YsV0FBTSxHQUFOLE1BQU07O3FCQXpCUixpQkFBaUI7bUJBWUssR0FBRztxQkFFRCxHQUFHO3VCQUVoQixNQUFNOzJCQUVGLE1BQU07b0JBVWQsS0FBSzt5QkFRbUIsRUFBRTt3QkFrQnRCLEtBQUs7S0E1QnBCOzs7OztJQXhCSixJQUNJLElBQUksQ0FBQyxLQUFnQztRQUN2QyxJQUFJLEtBQUssWUFBWSxXQUFXLEVBQUU7WUFDaEMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7WUFDbEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7U0FDdkI7YUFBTTtZQUNMLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1NBQ3BCO0tBQ0Y7Ozs7SUFxQkQsTUFBTTtRQUNKLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztLQUNqQjs7OztJQUdPLFFBQVE7UUFDZCxJQUFJLENBQUMsU0FBUyxHQUFHO1lBQ2Ysa0JBQWtCLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDaEMsY0FBYyxFQUFFLElBQUksQ0FBQyxXQUFXO1NBQ2pDLENBQUM7O1FBRUYsTUFBTSxHQUFHLEdBQWE7WUFDcEIsT0FBTyxJQUFJLENBQUMsR0FBRyxJQUFJO1lBQ25CLFNBQVMsSUFBSSxDQUFDLEtBQUssSUFBSTtZQUN2QixvQkFBb0IsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNsQyxnQkFBZ0IsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNsQyxpQkFBaUIsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssSUFBSTtTQUNoRCxDQUFDO1FBQ0YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsT0FBTyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN4RSxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDOzs7OztJQUkxQixRQUFRO1FBQ04sSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0tBQ2pCOzs7O0lBQ0QsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLFFBQVE7WUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7S0FDcEM7OztZQXZFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLHVVQUEwQztnQkFDMUMsSUFBSSxFQUFFLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxFQUFFO2dCQUN0QyxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7OztZQWRDLGlCQUFpQjtZQUVqQixVQUFVO1lBRFYsU0FBUzs7O21CQW1CUixLQUFLO2tCQVVMLEtBQUs7b0JBRUwsS0FBSztzQkFFTCxLQUFLOzBCQUVMLEtBQUs7cUJBWUwsWUFBWSxTQUFDLE9BQU87OztJQWxCWCxXQUFXLEVBQUU7Ozs7SUFFYixXQUFXLEVBQUU7Ozs7Ozs7O0FDdkN6QjtBQU9BLE1BQU0sVUFBVSxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQU94Qzs7OztJQUNFLE9BQU8sT0FBTztRQUNaLE9BQU8sRUFBRSxRQUFRLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsQ0FBQztLQUNyRDs7O1lBUkYsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxpQkFBaUIsRUFBRSxlQUFlLENBQUM7Z0JBQzNELFlBQVksRUFBRSxDQUFDLEdBQUcsVUFBVSxDQUFDO2dCQUM3QixPQUFPLEVBQUUsQ0FBQyxHQUFHLFVBQVUsQ0FBQzthQUN6Qjs7Ozs7Ozs7Ozs7Ozs7OyJ9