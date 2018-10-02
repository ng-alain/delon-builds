import { __decorate, __metadata } from 'tslib';
import { Component, Input, HostBinding, ElementRef, Renderer2, Host, Optional, NgModule } from '@angular/core';
import { toNumber, InputNumber, DelonUtilModule } from '@delon/util';
import { ResponsiveService } from '@delon/theme';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class SGConfig {
    constructor() {
        /**
         * 间距，默认：`32`
         */
        this.gutter = 32;
        /**
         * 列数，默认：`2`
         */
        this.col = 2;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class SGContainerComponent {
    /**
     * @param {?} cog
     */
    constructor(cog) {
        Object.assign(this, cog);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set col(value) {
        /** @type {?} */
        const a = toNumber(value, 0);
        if (a <= 0)
            return;
        this._col = toNumber(value, 0);
    }
    /**
     * @return {?}
     */
    get col() {
        return this._col;
    }
    /**
     * @return {?}
     */
    get marginLeft() {
        return -(this.gutter / 2);
    }
    /**
     * @return {?}
     */
    get marginRight() {
        return -(this.gutter / 2);
    }
}
SGContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'sg-container, [sg-container]',
                template: `<ng-content></ng-content>`,
                host: {
                    '[class.ant-row]': 'true',
                    '[class.sg__wrap]': 'true',
                },
                preserveWhitespaces: false
            }] }
];
/** @nocollapse */
SGContainerComponent.ctorParameters = () => [
    { type: SGConfig }
];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const prefixCls = `sg`;
class SGComponent {
    /**
     * @param {?} parent
     * @param {?} rep
     * @param {?} el
     * @param {?} ren
     */
    constructor(parent, rep, el, ren) {
        this.parent = parent;
        this.rep = rep;
        this.ren = ren;
        this.clsMap = [];
        this.inited = false;
        if (parent == null) {
            throw new Error(`[sg] must include 'sg-container' component`);
        }
        this.el = el.nativeElement;
    }
    /**
     * @return {?}
     */
    get paddingLeft() {
        return this.parent.gutter / 2;
    }
    /**
     * @return {?}
     */
    get paddingRight() {
        return this.parent.gutter / 2;
    }
    /**
     * @return {?}
     */
    setClass() {
        const { el, ren, clsMap, col, parent } = this;
        clsMap.forEach(cls => ren.removeClass(el, cls));
        clsMap.length = 0;
        clsMap.push(...this.rep.genCls(col != null ? col : parent.col), `${prefixCls}__item`);
        clsMap.forEach(cls => ren.addClass(el, cls));
        return this;
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        if (this.inited)
            this.setClass();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.setClass();
        this.inited = true;
    }
}
SGComponent.decorators = [
    { type: Component, args: [{
                selector: 'sg',
                template: `<ng-content></ng-content>`,
                preserveWhitespaces: false
            }] }
];
/** @nocollapse */
SGComponent.ctorParameters = () => [
    { type: SGContainerComponent, decorators: [{ type: Optional }, { type: Host }] },
    { type: ResponsiveService },
    { type: ElementRef },
    { type: Renderer2 }
];
SGComponent.propDecorators = {
    col: [{ type: Input }],
    paddingLeft: [{ type: HostBinding, args: ['style.padding-left.px',] }],
    paddingRight: [{ type: HostBinding, args: ['style.padding-right.px',] }]
};
__decorate([
    InputNumber(null),
    __metadata("design:type", Number)
], SGComponent.prototype, "col", void 0);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const COMPONENTS = [SGContainerComponent, SGComponent];
class SGModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return { ngModule: SGModule, providers: [SGConfig] };
    }
}
SGModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, DelonUtilModule],
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

export { SGContainerComponent, SGComponent, SGConfig, SGModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGRlbG9uL2FiYy9ncmlkL2dyaWQuY29uZmlnLnRzIiwibmc6Ly9AZGVsb24vYWJjL2dyaWQvZ3JpZC1jb250YWluZXIuY29tcG9uZW50LnRzIiwibmc6Ly9AZGVsb24vYWJjL2dyaWQvZ3JpZC5jb21wb25lbnQudHMiLCJuZzovL0BkZWxvbi9hYmMvZ3JpZC9ncmlkLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgU0dDb25maWcge1xyXG4gIC8qKlxyXG4gICAqIMOpwpfCtMOowrfCncOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmAzMmBcclxuICAgKi9cclxuICBndXR0ZXI/ID0gMzI7XHJcbiAgLyoqXHJcbiAgICogw6XCiMKXw6bClcKww6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYDJgXHJcbiAgICovXHJcbiAgY29sPyA9IDI7XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgSG9zdEJpbmRpbmcgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgdG9OdW1iZXIsIElucHV0TnVtYmVyIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xyXG5pbXBvcnQgeyBTR0NvbmZpZyB9IGZyb20gJy4vZ3JpZC5jb25maWcnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzZy1jb250YWluZXIsIFtzZy1jb250YWluZXJdJyxcclxuICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50PjwvbmctY29udGVudD5gLFxyXG4gIGhvc3Q6IHtcclxuICAgICdbY2xhc3MuYW50LXJvd10nOiAndHJ1ZScsXHJcbiAgICAnW2NsYXNzLnNnX193cmFwXSc6ICd0cnVlJyxcclxuICB9LFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU0dDb250YWluZXJDb21wb25lbnQge1xyXG4gIC8vI3JlZ2lvbiBmaWVsZHNcclxuXHJcbiAgQElucHV0KClcclxuICBASW5wdXROdW1iZXIoKVxyXG4gIGd1dHRlcjogbnVtYmVyO1xyXG5cclxuICBASW5wdXQoJ3NnLWNvbnRhaW5lcicpXHJcbiAgc2V0IGNvbCh2YWx1ZTogYW55KSB7XHJcbiAgICBjb25zdCBhID0gdG9OdW1iZXIodmFsdWUsIDApO1xyXG4gICAgaWYgKGEgPD0gMCkgcmV0dXJuO1xyXG4gICAgdGhpcy5fY29sID0gdG9OdW1iZXIodmFsdWUsIDApO1xyXG4gIH1cclxuICBnZXQgY29sKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NvbDtcclxuICB9XHJcbiAgcHJpdmF0ZSBfY29sOiBudW1iZXI7XHJcblxyXG4gIC8vI2VuZHJlZ2lvblxyXG5cclxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLm1hcmdpbi1sZWZ0LnB4JylcclxuICBnZXQgbWFyZ2luTGVmdCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIC0odGhpcy5ndXR0ZXIgLyAyKTtcclxuICB9XHJcblxyXG4gIEBIb3N0QmluZGluZygnc3R5bGUubWFyZ2luLXJpZ2h0LnB4JylcclxuICBnZXQgbWFyZ2luUmlnaHQoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiAtKHRoaXMuZ3V0dGVyIC8gMik7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihjb2c6IFNHQ29uZmlnKSB7XHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGNvZyk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBFbGVtZW50UmVmLFxyXG4gIFJlbmRlcmVyMixcclxuICBIb3N0LFxyXG4gIE9wdGlvbmFsLFxyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgSG9zdEJpbmRpbmcsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBSZXNwb25zaXZlU2VydmljZSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XHJcbmltcG9ydCB7IElucHV0TnVtYmVyIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xyXG5cclxuaW1wb3J0IHsgU0dDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL2dyaWQtY29udGFpbmVyLmNvbXBvbmVudCc7XHJcblxyXG5jb25zdCBwcmVmaXhDbHMgPSBgc2dgO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzZycsXHJcbiAgdGVtcGxhdGU6IGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+YCxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFNHQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBBZnRlclZpZXdJbml0IHtcclxuICBwcml2YXRlIGVsOiBIVE1MRWxlbWVudDtcclxuICBwcml2YXRlIGNsc01hcDogc3RyaW5nW10gPSBbXTtcclxuICBwcml2YXRlIGluaXRlZCA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIEBJbnB1dE51bWJlcihudWxsKVxyXG4gIGNvbDogbnVtYmVyO1xyXG5cclxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLnBhZGRpbmctbGVmdC5weCcpXHJcbiAgZ2V0IHBhZGRpbmdMZWZ0KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQuZ3V0dGVyIC8gMjtcclxuICB9XHJcblxyXG4gIEBIb3N0QmluZGluZygnc3R5bGUucGFkZGluZy1yaWdodC5weCcpXHJcbiAgZ2V0IHBhZGRpbmdSaWdodCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMucGFyZW50Lmd1dHRlciAvIDI7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIEBPcHRpb25hbCgpXHJcbiAgICBASG9zdCgpXHJcbiAgICBwcml2YXRlIHBhcmVudDogU0dDb250YWluZXJDb21wb25lbnQsXHJcbiAgICBwcml2YXRlIHJlcDogUmVzcG9uc2l2ZVNlcnZpY2UsXHJcbiAgICBlbDogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgcmVuOiBSZW5kZXJlcjIsXHJcbiAgKSB7XHJcbiAgICBpZiAocGFyZW50ID09IG51bGwpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBbc2ddIG11c3QgaW5jbHVkZSAnc2ctY29udGFpbmVyJyBjb21wb25lbnRgKTtcclxuICAgIH1cclxuICAgIHRoaXMuZWwgPSBlbC5uYXRpdmVFbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRDbGFzcygpOiB0aGlzIHtcclxuICAgIGNvbnN0IHsgZWwsIHJlbiwgY2xzTWFwLCBjb2wsIHBhcmVudCB9ID0gdGhpcztcclxuICAgIGNsc01hcC5mb3JFYWNoKGNscyA9PiByZW4ucmVtb3ZlQ2xhc3MoZWwsIGNscykpO1xyXG4gICAgY2xzTWFwLmxlbmd0aCA9IDA7XHJcbiAgICBjbHNNYXAucHVzaChcclxuICAgICAgLi4udGhpcy5yZXAuZ2VuQ2xzKGNvbCAhPSBudWxsID8gY29sIDogcGFyZW50LmNvbCksXHJcbiAgICAgIGAke3ByZWZpeENsc31fX2l0ZW1gLFxyXG4gICAgKTtcclxuICAgIGNsc01hcC5mb3JFYWNoKGNscyA9PiByZW4uYWRkQ2xhc3MoZWwsIGNscykpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcygpIHtcclxuICAgIGlmICh0aGlzLmluaXRlZCkgdGhpcy5zZXRDbGFzcygpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRDbGFzcygpO1xyXG4gICAgdGhpcy5pbml0ZWQgPSB0cnVlO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBEZWxvblV0aWxNb2R1bGUgfSBmcm9tICdAZGVsb24vdXRpbCc7XHJcblxyXG5pbXBvcnQgeyBTR0NvbmZpZyB9IGZyb20gJy4vZ3JpZC5jb25maWcnO1xyXG5pbXBvcnQgeyBTR0NvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vZ3JpZC1jb250YWluZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU0dDb21wb25lbnQgfSBmcm9tICcuL2dyaWQuY29tcG9uZW50JztcclxuXHJcbmNvbnN0IENPTVBPTkVOVFMgPSBbU0dDb250YWluZXJDb21wb25lbnQsIFNHQ29tcG9uZW50XTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRGVsb25VdGlsTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFsuLi5DT01QT05FTlRTXSxcclxuICBleHBvcnRzOiBbLi4uQ09NUE9ORU5UU10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTR01vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4geyBuZ01vZHVsZTogU0dNb2R1bGUsIHByb3ZpZGVyczogW1NHQ29uZmlnXSB9O1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7OztzQkFJWSxFQUFFOzs7O21CQUlMLENBQUM7O0NBQ1Q7Ozs7Ozs7Ozs7SUNrQ0MsWUFBWSxHQUFhO1FBQ3ZCLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0tBQzFCOzs7OztJQXpCRCxJQUNJLEdBQUcsQ0FBQyxLQUFVOztRQUNoQixNQUFNLENBQUMsR0FBRyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxJQUFJLENBQUM7WUFBRSxPQUFPO1FBQ25CLElBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztLQUNoQzs7OztJQUNELElBQUksR0FBRztRQUNMLE9B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