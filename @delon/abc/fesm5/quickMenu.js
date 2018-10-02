import { __spread, __decorate, __metadata } from 'tslib';
import { Component, Input, HostListener, ChangeDetectionStrategy, ChangeDetectorRef, Renderer2, ElementRef, NgModule } from '@angular/core';
import { InputNumber, DelonUtilModule } from '@delon/util';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var QuickMenuComponent = /** @class */ (function () {
    // endregion
    function QuickMenuComponent(cd, el, render) {
        this.cd = cd;
        this.el = el;
        this.render = render;
        // region: fields
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpY2tNZW51LmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AZGVsb24vYWJjL3F1aWNrLW1lbnUvcXVpY2stbWVudS5jb21wb25lbnQudHMiLCJuZzovL0BkZWxvbi9hYmMvcXVpY2stbWVudS9xdWljay1tZW51Lm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBJbnB1dCxcclxuICBIb3N0TGlzdGVuZXIsXHJcbiAgT25Jbml0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBSZW5kZXJlcjIsXHJcbiAgRWxlbWVudFJlZixcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IElucHV0TnVtYmVyIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdxdWljay1tZW51JyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gIDxkaXYgY2xhc3M9XCJxdWljay1tZW51X19pbm5lclwiPlxyXG4gICAgPGRpdiBjbGFzcz1cInF1aWNrLW1lbnVfX2N0cmxcIiBbbmdTdHlsZV09XCJjdHJsU3R5bGVcIj5cclxuICAgICAgPGkgY2xhc3M9XCJxdWljay1tZW51X19jdHJsLWljb25cIiBbbmdDbGFzc109XCJpY29uXCI+PC9pPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgPC9kaXY+XHJcbiAgYCxcclxuICBob3N0OiB7ICdbY2xhc3MucXVpY2stbWVudV0nOiAndHJ1ZScgfSxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxufSlcclxuZXhwb3J0IGNsYXNzIFF1aWNrTWVudUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcclxuICAvLyByZWdpb246IGZpZWxkc1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGljb246XHJcbiAgICB8IHN0cmluZ1xyXG4gICAgfCBzdHJpbmdbXVxyXG4gICAgfCB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0gJ2FudGljb24gYW50aWNvbi1xdWVzdGlvbi1jaXJjbGUtbyc7XHJcblxyXG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIHRvcCA9IDEyMDtcclxuXHJcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgd2lkdGggPSAyMDA7XHJcblxyXG4gIEBJbnB1dCgpIGJnQ29sb3IgPSAnI2ZmZic7XHJcblxyXG4gIEBJbnB1dCgpIGJvcmRlckNvbG9yID0gJyNkZGQnO1xyXG5cclxuICAvLyBlbmRyZWdpb25cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIHJlbmRlcjogUmVuZGVyZXIyLFxyXG4gICkge31cclxuXHJcbiAgcHJpdmF0ZSBzaG93ID0gZmFsc2U7XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcclxuICBfY2xpY2soKSB7XHJcbiAgICB0aGlzLnNob3cgPSAhdGhpcy5zaG93O1xyXG4gICAgdGhpcy5zZXRTdHlsZSgpO1xyXG4gIH1cclxuXHJcbiAgY3RybFN0eWxlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge307XHJcbiAgcHJpdmF0ZSBzZXRTdHlsZSgpIHtcclxuICAgIHRoaXMuY3RybFN0eWxlID0ge1xyXG4gICAgICAnYmFja2dyb3VuZC1jb2xvcic6IHRoaXMuYmdDb2xvcixcclxuICAgICAgJ2JvcmRlci1jb2xvcic6IHRoaXMuYm9yZGVyQ29sb3IsXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHJlczogc3RyaW5nW10gPSBbXHJcbiAgICAgIGB0b3A6JHt0aGlzLnRvcH1weGAsXHJcbiAgICAgIGB3aWR0aDoke3RoaXMud2lkdGh9cHhgLFxyXG4gICAgICBgYmFja2dyb3VuZC1jb2xvcjoke3RoaXMuYmdDb2xvcn1gLFxyXG4gICAgICBgYm9yZGVyLWNvbG9yOiR7dGhpcy5ib3JkZXJDb2xvcn1gLFxyXG4gICAgICBgbWFyZ2luLXJpZ2h0Oi0ke3RoaXMuc2hvdyA/IDAgOiB0aGlzLndpZHRofXB4YCxcclxuICAgIF07XHJcbiAgICB0aGlzLnJlbmRlci5zZXRBdHRyaWJ1dGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnc3R5bGUnLCByZXMuam9pbignOycpKTtcclxuICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpbml0RmxhZyA9IGZhbHNlO1xyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5pbml0RmxhZyA9IHRydWU7XHJcbiAgICB0aGlzLnNldFN0eWxlKCk7XHJcbiAgfVxyXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaW5pdEZsYWcpIHRoaXMuc2V0U3R5bGUoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgRGVsb25VdGlsTW9kdWxlIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xyXG5cclxuaW1wb3J0IHsgUXVpY2tNZW51Q29tcG9uZW50IH0gZnJvbSAnLi9xdWljay1tZW51LmNvbXBvbmVudCc7XHJcblxyXG5jb25zdCBDT01QT05FTlRTID0gW1F1aWNrTWVudUNvbXBvbmVudF07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIERlbG9uVXRpbE1vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbLi4uQ09NUE9ORU5UU10sXHJcbiAgZXhwb3J0czogWy4uLkNPTVBPTkVOVFNdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUXVpY2tNZW51TW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7IG5nTW9kdWxlOiBRdWlja01lbnVNb2R1bGUsIHByb3ZpZGVyczogW10gfTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0lBK0NFLDRCQUNVLElBQ0EsSUFDQTtRQUZBLE9BQUUsR0FBRixFQUFFO1FBQ0YsT0FBRSxHQUFGLEVBQUU7UUFDRixXQUFNLEdBQU4sTUFBTTs7b0JBZmdCLG1DQUFtQzttQkFFckMsR0FBRztxQkFFRCxHQUFHO3VCQUVoQixNQUFNOzJCQUVGLE1BQU07b0JBVWQsS0FBSzt5QkFRbUIsRUFBRTt3QkFrQnRCLEtBQUs7S0E1QnBCOzs7O0lBS0osbUNBQU07OztJQUROO1FBRUUsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDdkIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0tBQ2pCOzs7O0lBR08scUNBQVE7Ozs7UUFDZCxJQUFJLENBQUMsU0FBUyxHQUFHO1lBQ2Ysa0JBQWtCLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDaEMsY0FBYyxFQUFFLElBQUksQ0FBQyxXQUFXO1NBQ2pDLENBQUM7O1FBRUYsSUFBTSxHQUFHLEdBQWE7WUFDcEIsU0FBTyxJQUFJLENBQUMsR0FBRyxPQUFJO1lBQ25CLFdBQVMsSUFBSSxDQUFDLEtBQUssT0FBSTtZQUN2QixzQkFBb0IsSUFBSSxDQUFDLE9BQVM7WUFDbEMsa0JBQWdCLElBQUksQ0FBQyxXQUFhO1lBQ2xDLG9CQUFpQixJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxRQUFJO1NBQ2hELENBQUM7UUFDRixJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxPQUFPLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3hFLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUM7Ozs7O0lBSTFCLHFDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztLQUNqQjs7OztJQUNELHdDQUFXOzs7SUFBWDtRQUNFLElBQUksSUFBSSxDQUFDLFFBQVE7WUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7S0FDcEM7O2dCQXhFRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLFFBQVEsRUFBRSxnT0FPVDtvQkFDRCxJQUFJLEVBQUUsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLEVBQUU7b0JBQ3RDLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDs7OztnQkFwQkMsaUJBQWlCO2dCQUVqQixVQUFVO2dCQURWLFNBQVM7Ozt1QkF1QlIsS0FBSztzQkFNTCxLQUFLO3dCQUVMLEtBQUs7MEJBRUwsS0FBSzs4QkFFTCxLQUFLO3lCQVlMLFlBQVksU0FBQyxPQUFPOzs7UUFsQlgsV0FBVyxFQUFFOzs7O1FBRWIsV0FBVyxFQUFFOzs7NkJBdkN6Qjs7Ozs7Ozs7QUNNQSxJQUFNLFVBQVUsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7Ozs7Ozs7SUFRL0IsdUJBQU87OztJQUFkO1FBQ0UsT0FBTyxFQUFFLFFBQVEsRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxDQUFDO0tBQ3JEOztnQkFSRixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGVBQWUsQ0FBQztvQkFDeEMsWUFBWSxXQUFNLFVBQVUsQ0FBQztvQkFDN0IsT0FBTyxXQUFNLFVBQVUsQ0FBQztpQkFDekI7OzBCQVpEOzs7Ozs7Ozs7Ozs7Ozs7In0=