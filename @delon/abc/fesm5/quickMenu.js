import { __decorate, __metadata, __spread } from 'tslib';
import { Component, Input, HostListener, ChangeDetectionStrategy, ChangeDetectorRef, Renderer2, ElementRef, NgModule } from '@angular/core';
import { InputNumber, DelonUtilModule } from '@delon/util';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var QuickMenuComponent = /** @class */ (function () {
    // #endregion
    function QuickMenuComponent(cd, el, render) {
        this.cd = cd;
        this.el = el;
        this.render = render;
        // #region fields
        this.icon = 'anticon anticon-question-circle-o';
        this.top = 120;
        this.width = 200;
        this.bgColor = '#fff';
        this.borderColor = '#ddd';
        this.show = false;
        this.ctrlStyle = {};
        this.initFlag = false;
    }
    /**
     * @return {?}
     */
    QuickMenuComponent.prototype._click = /**
     * @return {?}
     */
    function () {
        this.show = !this.show;
        this.setStyle();
    };
    /**
     * @return {?}
     */
    QuickMenuComponent.prototype.setStyle = /**
     * @return {?}
     */
    function () {
        this.ctrlStyle = {
            'background-color': this.bgColor,
            'border-color': this.borderColor,
        };
        /** @type {?} */
        var res = [
            "top:" + this.top + "px",
            "width:" + this.width + "px",
            "background-color:" + this.bgColor,
            "border-color:" + this.borderColor,
            "margin-right:-" + (this.show ? 0 : this.width) + "px",
        ];
        this.render.setAttribute(this.el.nativeElement, 'style', res.join(';'));
        this.cd.detectChanges();
    };
    /**
     * @return {?}
     */
    QuickMenuComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.initFlag = true;
        this.setStyle();
    };
    /**
     * @return {?}
     */
    QuickMenuComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        if (this.initFlag)
            this.setStyle();
    };
    QuickMenuComponent.decorators = [
        { type: Component, args: [{
                    selector: 'quick-menu',
                    template: "\n  <div class=\"quick-menu__inner\">\n    <div class=\"quick-menu__ctrl\" [ngStyle]=\"ctrlStyle\">\n      <i class=\"quick-menu__ctrl-icon\" [ngClass]=\"icon\"></i>\n    </div>\n    <ng-content></ng-content>\n  </div>\n  ",
                    host: { '[class.quick-menu]': 'true' },
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    QuickMenuComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
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
    return QuickMenuComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var COMPONENTS = [QuickMenuComponent];
var QuickMenuModule = /** @class */ (function () {
    function QuickMenuModule() {
    }
    /**
     * @return {?}
     */
    QuickMenuModule.forRoot = /**
     * @return {?}
     */
    function () {
        return { ngModule: QuickMenuModule, providers: [] };
    };
    QuickMenuModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, DelonUtilModule],
                    declarations: __spread(COMPONENTS),
                    exports: __spread(COMPONENTS),
                },] }
    ];
    return QuickMenuModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { QuickMenuComponent, QuickMenuModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpY2tNZW51LmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AZGVsb24vYWJjL3F1aWNrLW1lbnUvcXVpY2stbWVudS5jb21wb25lbnQudHMiLCJuZzovL0BkZWxvbi9hYmMvcXVpY2stbWVudS9xdWljay1tZW51Lm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBIb3N0TGlzdGVuZXIsXG4gIE9uSW5pdCxcbiAgT25DaGFuZ2VzLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIFJlbmRlcmVyMixcbiAgRWxlbWVudFJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IElucHV0TnVtYmVyIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdxdWljay1tZW51JyxcbiAgdGVtcGxhdGU6IGBcbiAgPGRpdiBjbGFzcz1cInF1aWNrLW1lbnVfX2lubmVyXCI+XG4gICAgPGRpdiBjbGFzcz1cInF1aWNrLW1lbnVfX2N0cmxcIiBbbmdTdHlsZV09XCJjdHJsU3R5bGVcIj5cbiAgICAgIDxpIGNsYXNzPVwicXVpY2stbWVudV9fY3RybC1pY29uXCIgW25nQ2xhc3NdPVwiaWNvblwiPjwvaT5cbiAgICA8L2Rpdj5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIDwvZGl2PlxuICBgLFxuICBob3N0OiB7ICdbY2xhc3MucXVpY2stbWVudV0nOiAndHJ1ZScgfSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBRdWlja01lbnVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIC8vICNyZWdpb24gZmllbGRzXG5cbiAgQElucHV0KClcbiAgaWNvbjpcbiAgICB8IHN0cmluZ1xuICAgIHwgc3RyaW5nW11cbiAgICB8IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSAnYW50aWNvbiBhbnRpY29uLXF1ZXN0aW9uLWNpcmNsZS1vJztcblxuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSB0b3AgPSAxMjA7XG5cbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgd2lkdGggPSAyMDA7XG5cbiAgQElucHV0KCkgYmdDb2xvciA9ICcjZmZmJztcblxuICBASW5wdXQoKSBib3JkZXJDb2xvciA9ICcjZGRkJztcblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJlbmRlcjogUmVuZGVyZXIyLFxuICApIHt9XG5cbiAgcHJpdmF0ZSBzaG93ID0gZmFsc2U7XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxuICBfY2xpY2soKSB7XG4gICAgdGhpcy5zaG93ID0gIXRoaXMuc2hvdztcbiAgICB0aGlzLnNldFN0eWxlKCk7XG4gIH1cblxuICBjdHJsU3R5bGU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7fTtcbiAgcHJpdmF0ZSBzZXRTdHlsZSgpIHtcbiAgICB0aGlzLmN0cmxTdHlsZSA9IHtcbiAgICAgICdiYWNrZ3JvdW5kLWNvbG9yJzogdGhpcy5iZ0NvbG9yLFxuICAgICAgJ2JvcmRlci1jb2xvcic6IHRoaXMuYm9yZGVyQ29sb3IsXG4gICAgfTtcblxuICAgIGNvbnN0IHJlczogc3RyaW5nW10gPSBbXG4gICAgICBgdG9wOiR7dGhpcy50b3B9cHhgLFxuICAgICAgYHdpZHRoOiR7dGhpcy53aWR0aH1weGAsXG4gICAgICBgYmFja2dyb3VuZC1jb2xvcjoke3RoaXMuYmdDb2xvcn1gLFxuICAgICAgYGJvcmRlci1jb2xvcjoke3RoaXMuYm9yZGVyQ29sb3J9YCxcbiAgICAgIGBtYXJnaW4tcmlnaHQ6LSR7dGhpcy5zaG93ID8gMCA6IHRoaXMud2lkdGh9cHhgLFxuICAgIF07XG4gICAgdGhpcy5yZW5kZXIuc2V0QXR0cmlidXRlKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ3N0eWxlJywgcmVzLmpvaW4oJzsnKSk7XG4gICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBwcml2YXRlIGluaXRGbGFnID0gZmFsc2U7XG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaW5pdEZsYWcgPSB0cnVlO1xuICAgIHRoaXMuc2V0U3R5bGUoKTtcbiAgfVxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pbml0RmxhZykgdGhpcy5zZXRTdHlsZSgpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IERlbG9uVXRpbE1vZHVsZSB9IGZyb20gJ0BkZWxvbi91dGlsJztcblxuaW1wb3J0IHsgUXVpY2tNZW51Q29tcG9uZW50IH0gZnJvbSAnLi9xdWljay1tZW51LmNvbXBvbmVudCc7XG5cbmNvbnN0IENPTVBPTkVOVFMgPSBbUXVpY2tNZW51Q29tcG9uZW50XTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRGVsb25VdGlsTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbLi4uQ09NUE9ORU5UU10sXG4gIGV4cG9ydHM6IFsuLi5DT01QT05FTlRTXSxcbn0pXG5leHBvcnQgY2xhc3MgUXVpY2tNZW51TW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHsgbmdNb2R1bGU6IFF1aWNrTWVudU1vZHVsZSwgcHJvdmlkZXJzOiBbXSB9O1xuICB9XG59XG4i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