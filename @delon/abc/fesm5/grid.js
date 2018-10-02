import { __spread, __decorate, __metadata } from 'tslib';
import { Component, Input, HostBinding, ElementRef, Renderer2, Host, Optional, NgModule } from '@angular/core';
import { toNumber, InputNumber, DelonUtilModule } from '@delon/util';
import { ResponsiveService } from '@delon/theme';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SGConfig = /** @class */ (function () {
    function SGConfig() {
        /**
         * 间距，默认：`32`
         */
        this.gutter = 32;
        /**
         * 列数，默认：`2`
         */
        this.col = 2;
    }
    return SGConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SGContainerComponent = /** @class */ (function () {
    function SGContainerComponent(cog) {
        Object.assign(this, cog);
    }
    Object.defineProperty(SGContainerComponent.prototype, "col", {
        get: /**
         * @return {?}
         */
        function () {
            return this._col;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            /** @type {?} */
            var a = toNumber(value, 0);
            if (a <= 0)
                return;
            this._col = toNumber(value, 0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SGContainerComponent.prototype, "marginLeft", {
        //#endregion
        get: /**
         * @return {?}
         */
        function () {
            return -(this.gutter / 2);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SGContainerComponent.prototype, "marginRight", {
        get: /**
         * @return {?}
         */
        function () {
            return -(this.gutter / 2);
        },
        enumerable: true,
        configurable: true
    });
    SGContainerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'sg-container, [sg-container]',
                    template: "<ng-content></ng-content>",
                    host: {
                        '[class.ant-row]': 'true',
                        '[class.sg__wrap]': 'true',
                    },
                    preserveWhitespaces: false
                }] }
    ];
    /** @nocollapse */
    SGContainerComponent.ctorParameters = function () { return [
        { type: SGConfig }
    ]; };
    SGContainerComponent.propDecorators = {
        gutter: [{ type: Input }],
        col: [{ type: Input, args: ['sg-container',] }],
        marginLeft: [{ type: HostBinding, args: ['style.margin-left.px',] }],
        marginRight: [{ type: HostBinding, args: ['style.margin-right.px',] }]
    };
    __decorate([
        InputNumber(),
        __metadata("design:type", Number)
    ], SGContainerComponent.prototype, "gutter", void 0);
    return SGContainerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var prefixCls = "sg";
var SGComponent = /** @class */ (function () {
    function SGComponent(parent, rep, el, ren) {
        this.parent = parent;
        this.rep = rep;
        this.ren = ren;
        this.clsMap = [];
        this.inited = false;
        if (parent == null) {
            throw new Error("[sg] must include 'sg-container' component");
        }
        this.el = el.nativeElement;
    }
    Object.defineProperty(SGComponent.prototype, "paddingLeft", {
        get: /**
         * @return {?}
         */
        function () {
            return this.parent.gutter / 2;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SGComponent.prototype, "paddingRight", {
        get: /**
         * @return {?}
         */
        function () {
            return this.parent.gutter / 2;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SGComponent.prototype.setClass = /**
     * @return {?}
     */
    function () {
        var _a = this, el = _a.el, ren = _a.ren, clsMap = _a.clsMap, col = _a.col, parent = _a.parent;
        clsMap.forEach(function (cls) { return ren.removeClass(el, cls); });
        clsMap.length = 0;
        clsMap.push.apply(clsMap, __spread(this.rep.genCls(col != null ? col : parent.col), [prefixCls + "__item"]));
        clsMap.forEach(function (cls) { return ren.addClass(el, cls); });
        return this;
    };
    /**
     * @return {?}
     */
    SGComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        if (this.inited)
            this.setClass();
    };
    /**
     * @return {?}
     */
    SGComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.setClass();
        this.inited = true;
    };
    SGComponent.decorators = [
        { type: Component, args: [{
                    selector: 'sg',
                    template: "<ng-content></ng-content>",
                    preserveWhitespaces: false
                }] }
    ];
    /** @nocollapse */
    SGComponent.ctorParameters = function () { return [
        { type: SGContainerComponent, decorators: [{ type: Optional }, { type: Host }] },
        { type: ResponsiveService },
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    SGComponent.propDecorators = {
        col: [{ type: Input }],
        paddingLeft: [{ type: HostBinding, args: ['style.padding-left.px',] }],
        paddingRight: [{ type: HostBinding, args: ['style.padding-right.px',] }]
    };
    __decorate([
        InputNumber(null),
        __metadata("design:type", Number)
    ], SGComponent.prototype, "col", void 0);
    return SGComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var COMPONENTS = [SGContainerComponent, SGComponent];
var SGModule = /** @class */ (function () {
    function SGModule() {
    }
    /**
     * @return {?}
     */
    SGModule.forRoot = /**
     * @return {?}
     */
    function () {
        return { ngModule: SGModule, providers: [SGConfig] };
    };
    SGModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, DelonUtilModule],
                    declarations: __spread(COMPONENTS),
                    exports: __spread(COMPONENTS),
                },] }
    ];
    return SGModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { SGContainerComponent, SGComponent, SGConfig, SGModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGRlbG9uL2FiYy9ncmlkL2dyaWQuY29uZmlnLnRzIiwibmc6Ly9AZGVsb24vYWJjL2dyaWQvZ3JpZC1jb250YWluZXIuY29tcG9uZW50LnRzIiwibmc6Ly9AZGVsb24vYWJjL2dyaWQvZ3JpZC5jb21wb25lbnQudHMiLCJuZzovL0BkZWxvbi9hYmMvZ3JpZC9ncmlkLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgU0dDb25maWcge1xyXG4gIC8qKlxyXG4gICAqIMOpwpfCtMOowrfCncOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmAzMmBcclxuICAgKi9cclxuICBndXR0ZXI/ID0gMzI7XHJcbiAgLyoqXHJcbiAgICogw6XCiMKXw6bClcKww6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYDJgXHJcbiAgICovXHJcbiAgY29sPyA9IDI7XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgSG9zdEJpbmRpbmcgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgdG9OdW1iZXIsIElucHV0TnVtYmVyIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xyXG5pbXBvcnQgeyBTR0NvbmZpZyB9IGZyb20gJy4vZ3JpZC5jb25maWcnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzZy1jb250YWluZXIsIFtzZy1jb250YWluZXJdJyxcclxuICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50PjwvbmctY29udGVudD5gLFxyXG4gIGhvc3Q6IHtcclxuICAgICdbY2xhc3MuYW50LXJvd10nOiAndHJ1ZScsXHJcbiAgICAnW2NsYXNzLnNnX193cmFwXSc6ICd0cnVlJyxcclxuICB9LFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU0dDb250YWluZXJDb21wb25lbnQge1xyXG4gIC8vI3JlZ2lvbiBmaWVsZHNcclxuXHJcbiAgQElucHV0KClcclxuICBASW5wdXROdW1iZXIoKVxyXG4gIGd1dHRlcjogbnVtYmVyO1xyXG5cclxuICBASW5wdXQoJ3NnLWNvbnRhaW5lcicpXHJcbiAgc2V0IGNvbCh2YWx1ZTogYW55KSB7XHJcbiAgICBjb25zdCBhID0gdG9OdW1iZXIodmFsdWUsIDApO1xyXG4gICAgaWYgKGEgPD0gMCkgcmV0dXJuO1xyXG4gICAgdGhpcy5fY29sID0gdG9OdW1iZXIodmFsdWUsIDApO1xyXG4gIH1cclxuICBnZXQgY29sKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NvbDtcclxuICB9XHJcbiAgcHJpdmF0ZSBfY29sOiBudW1iZXI7XHJcblxyXG4gIC8vI2VuZHJlZ2lvblxyXG5cclxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLm1hcmdpbi1sZWZ0LnB4JylcclxuICBnZXQgbWFyZ2luTGVmdCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIC0odGhpcy5ndXR0ZXIgLyAyKTtcclxuICB9XHJcblxyXG4gIEBIb3N0QmluZGluZygnc3R5bGUubWFyZ2luLXJpZ2h0LnB4JylcclxuICBnZXQgbWFyZ2luUmlnaHQoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiAtKHRoaXMuZ3V0dGVyIC8gMik7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihjb2c6IFNHQ29uZmlnKSB7XHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGNvZyk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBFbGVtZW50UmVmLFxyXG4gIFJlbmRlcmVyMixcclxuICBIb3N0LFxyXG4gIE9wdGlvbmFsLFxyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgSG9zdEJpbmRpbmcsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBSZXNwb25zaXZlU2VydmljZSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XHJcbmltcG9ydCB7IElucHV0TnVtYmVyIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xyXG5cclxuaW1wb3J0IHsgU0dDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL2dyaWQtY29udGFpbmVyLmNvbXBvbmVudCc7XHJcblxyXG5jb25zdCBwcmVmaXhDbHMgPSBgc2dgO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzZycsXHJcbiAgdGVtcGxhdGU6IGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+YCxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFNHQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBBZnRlclZpZXdJbml0IHtcclxuICBwcml2YXRlIGVsOiBIVE1MRWxlbWVudDtcclxuICBwcml2YXRlIGNsc01hcDogc3RyaW5nW10gPSBbXTtcclxuICBwcml2YXRlIGluaXRlZCA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIEBJbnB1dE51bWJlcihudWxsKVxyXG4gIGNvbDogbnVtYmVyO1xyXG5cclxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLnBhZGRpbmctbGVmdC5weCcpXHJcbiAgZ2V0IHBhZGRpbmdMZWZ0KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQuZ3V0dGVyIC8gMjtcclxuICB9XHJcblxyXG4gIEBIb3N0QmluZGluZygnc3R5bGUucGFkZGluZy1yaWdodC5weCcpXHJcbiAgZ2V0IHBhZGRpbmdSaWdodCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMucGFyZW50Lmd1dHRlciAvIDI7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIEBPcHRpb25hbCgpXHJcbiAgICBASG9zdCgpXHJcbiAgICBwcml2YXRlIHBhcmVudDogU0dDb250YWluZXJDb21wb25lbnQsXHJcbiAgICBwcml2YXRlIHJlcDogUmVzcG9uc2l2ZVNlcnZpY2UsXHJcbiAgICBlbDogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgcmVuOiBSZW5kZXJlcjIsXHJcbiAgKSB7XHJcbiAgICBpZiAocGFyZW50ID09IG51bGwpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBbc2ddIG11c3QgaW5jbHVkZSAnc2ctY29udGFpbmVyJyBjb21wb25lbnRgKTtcclxuICAgIH1cclxuICAgIHRoaXMuZWwgPSBlbC5uYXRpdmVFbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRDbGFzcygpOiB0aGlzIHtcclxuICAgIGNvbnN0IHsgZWwsIHJlbiwgY2xzTWFwLCBjb2wsIHBhcmVudCB9ID0gdGhpcztcclxuICAgIGNsc01hcC5mb3JFYWNoKGNscyA9PiByZW4ucmVtb3ZlQ2xhc3MoZWwsIGNscykpO1xyXG4gICAgY2xzTWFwLmxlbmd0aCA9IDA7XHJcbiAgICBjbHNNYXAucHVzaChcclxuICAgICAgLi4udGhpcy5yZXAuZ2VuQ2xzKGNvbCAhPSBudWxsID8gY29sIDogcGFyZW50LmNvbCksXHJcbiAgICAgIGAke3ByZWZpeENsc31fX2l0ZW1gLFxyXG4gICAgKTtcclxuICAgIGNsc01hcC5mb3JFYWNoKGNscyA9PiByZW4uYWRkQ2xhc3MoZWwsIGNscykpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcygpIHtcclxuICAgIGlmICh0aGlzLmluaXRlZCkgdGhpcy5zZXRDbGFzcygpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRDbGFzcygpO1xyXG4gICAgdGhpcy5pbml0ZWQgPSB0cnVlO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBEZWxvblV0aWxNb2R1bGUgfSBmcm9tICdAZGVsb24vdXRpbCc7XHJcblxyXG5pbXBvcnQgeyBTR0NvbmZpZyB9IGZyb20gJy4vZ3JpZC5jb25maWcnO1xyXG5pbXBvcnQgeyBTR0NvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vZ3JpZC1jb250YWluZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU0dDb21wb25lbnQgfSBmcm9tICcuL2dyaWQuY29tcG9uZW50JztcclxuXHJcbmNvbnN0IENPTVBPTkVOVFMgPSBbU0dDb250YWluZXJDb21wb25lbnQsIFNHQ29tcG9uZW50XTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRGVsb25VdGlsTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFsuLi5DT01QT05FTlRTXSxcclxuICBleHBvcnRzOiBbLi4uQ09NUE9ORU5UU10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTR01vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4geyBuZ01vZHVsZTogU0dNb2R1bGUsIHByb3ZpZGVyczogW1NHQ29uZmlnXSB9O1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLElBQUE7Ozs7O3NCQUlZLEVBQUU7Ozs7bUJBSUwsQ0FBQzs7bUJBUlY7SUFTQzs7Ozs7OztJQ2tDQyw4QkFBWSxHQUFhO1FBQ3ZCLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0tBQzFCO0lBekJELHNCQUNJLHFDQUFHOzs7O1FBS1A7WUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7U0FDbEI7Ozs7O1FBUkQsVUFDUSxLQUFVOztZQUNoQixJQUFNLENBQUMsR0FBRyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzdCLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQUUsT0FBTztZQUNuQixJQUFJLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDaEM7OztPQUFBO0lBUUQsc0JBQ0ksNENBQVU7Ozs7O1FBRGQ7WUFFRSxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztTQUMzQjs7O09BQUE7SUFFRCxzQkFDSSw2Q0FBVzs7OztRQURmO1lBRUUsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDM0I7OztPQUFBOztnQkFyQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSw4QkFBOEI7b0JBQ3hDLFFBQVEsRUFBRSwyQkFBMkI7b0JBQ3JDLElBQUksRUFBRTt3QkFDSixpQkFBaUIsRUFBRSxNQUFNO3dCQUN6QixrQkFBa0IsRUFBRSxNQUFNO3FCQUMzQjtvQkFDRCxtQkFBbUIsRUFBRSxLQUFLO2lCQUMzQjs7OztnQkFWUSxRQUFROzs7eUJBY2QsS0FBSztzQkFJTCxLQUFLLFNBQUMsY0FBYzs2QkFhcEIsV0FBVyxTQUFDLHNCQUFzQjs4QkFLbEMsV0FBVyxTQUFDLHVCQUF1Qjs7O1FBckJuQyxXQUFXLEVBQUU7OzsrQkFqQmhCOzs7Ozs7OztBQ2lCQSxJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUM7O0lBMEJyQixxQkFHVSxNQUE0QixFQUM1QixLQUNSLEVBQWMsRUFDTjtRQUhBLFdBQU0sR0FBTixNQUFNLENBQXNCO1FBQzVCLFFBQUcsR0FBSCxHQUFHO1FBRUgsUUFBRyxHQUFILEdBQUc7c0JBdkJjLEVBQUU7c0JBQ1osS0FBSztRQXdCcEIsSUFBSSxNQUFNLElBQUksSUFBSSxFQUFFO1lBQ2xCLE1BQU0sSUFBSSxLQUFLLENBQUMsNENBQTRDLENBQUMsQ0FBQztTQUMvRDtRQUNELElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQztLQUM1QjtJQXRCRCxzQkFDSSxvQ0FBVzs7OztRQURmO1lBRUUsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7U0FDL0I7OztPQUFBO0lBRUQsc0JBQ0kscUNBQVk7Ozs7UUFEaEI7WUFFRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztTQUMvQjs7O09BQUE7Ozs7SUFnQk8sOEJBQVE7Ozs7UUFDZCxlQUFRLFVBQUUsRUFBRSxZQUFHLEVBQUUsa0JBQU0sRUFBRSxZQUFHLEVBQUUsa0JBQU0sQ0FBVTtRQUM5QyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLFdBQVcsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLEdBQUEsQ0FBQyxDQUFDO1FBQ2hELE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLE1BQU0sQ0FBQyxJQUFJLE9BQVgsTUFBTSxXQUNELElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxJQUFJLEdBQUcsR0FBRyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FDL0MsU0FBUyxXQUFRLElBQ3BCO1FBQ0YsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxHQUFBLENBQUMsQ0FBQztRQUM3QyxPQUFPLElBQUksQ0FBQzs7Ozs7SUFHZCxpQ0FBVzs7O0lBQVg7UUFDRSxJQUFJLElBQUksQ0FBQyxNQUFNO1lBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0tBQ2xDOzs7O0lBRUQscUNBQWU7OztJQUFmO1FBQ0UsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0tBQ3BCOztnQkF6REYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxJQUFJO29CQUNkLFFBQVEsRUFBRSwyQkFBMkI7b0JBQ3JDLG1CQUFtQixFQUFFLEtBQUs7aUJBQzNCOzs7O2dCQVJRLG9CQUFvQix1QkE2QnhCLFFBQVEsWUFDUixJQUFJO2dCQWpDQSxpQkFBaUI7Z0JBUnhCLFVBQVU7Z0JBQ1YsU0FBUzs7O3NCQXdCUixLQUFLOzhCQUlMLFdBQVcsU0FBQyx1QkFBdUI7K0JBS25DLFdBQVcsU0FBQyx3QkFBd0I7OztRQVJwQyxXQUFXLENBQUMsSUFBSSxDQUFDOzs7c0JBOUJwQjs7Ozs7Ozs7QUNRQSxJQUFNLFVBQVUsR0FBRyxDQUFDLG9CQUFvQixFQUFFLFdBQVcsQ0FBQyxDQUFDOzs7Ozs7O0lBUTlDLGdCQUFPOzs7SUFBZDtRQUNFLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUM7S0FDdEQ7O2dCQVJGLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsZUFBZSxDQUFDO29CQUN4QyxZQUFZLFdBQU0sVUFBVSxDQUFDO29CQUM3QixPQUFPLFdBQU0sVUFBVSxDQUFDO2lCQUN6Qjs7bUJBZEQ7Ozs7Ozs7Ozs7Ozs7OzsifQ==