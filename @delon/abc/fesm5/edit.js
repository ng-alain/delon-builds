import { __decorate, __metadata, __spread } from 'tslib';
import { Component, Input, TemplateRef, Host, ElementRef, Renderer2, Optional, ContentChild, ChangeDetectorRef, ChangeDetectionStrategy, HostBinding, NgModule } from '@angular/core';
import { toNumber, InputNumber, InputBoolean, deepGet, DelonUtilModule } from '@delon/util';
import { animate, style, transition, trigger } from '@angular/animations';
import { NgModel, FormControlName } from '@angular/forms';
import { ResponsiveService } from '@delon/theme';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SEConfig = /** @class */ (function () {
    function SEConfig() {
        /**
         * 大小，默认：`default`
         * - `compact` 紧凑型，强制忽略 `error`、`extra` 展示
         */
        this.size = 'default';
        /**
         * 布局类型，等同 `nzLayout`
         * - `inline` 时强制大小为 `compact`
         */
        this.nzLayout = 'horizontal';
        /**
         * 间距，当 `nzLayout:horizontal` 时有效，默认：`32`
         */
        this.gutter = 32;
        /**
         * 列数，默认：`2`
         */
        this.col = 2;
        /**
         * 标签文本宽度，单位：`px`，默认：`150`
         */
        this.labelWidth = 150;
        /**
         * 是否立即呈现错误视觉
         */
        this.firstVisual = false;
    }
    return SEConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SEContainerComponent = /** @class */ (function () {
    //#endregion
    function SEContainerComponent(cog) {
        //#region fields
        this._title = '';
        this.line = false;
        Object.assign(this, cog);
    }
    Object.defineProperty(SEContainerComponent.prototype, "title", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value instanceof TemplateRef) {
                this._title = null;
                this._titleTpl = value;
            }
            else {
                this._title = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SEContainerComponent.prototype, "gutter", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzLayout === 'horizontal' ? this._gutter : 0;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._gutter = toNumber(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SEContainerComponent.prototype, "col", {
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
    Object.defineProperty(SEContainerComponent.prototype, "nzLayout", {
        get: /**
         * @return {?}
         */
        function () {
            return this._nzLayout;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._nzLayout = value;
            if (value === 'inline') {
                this.size = 'compact';
            }
        },
        enumerable: true,
        configurable: true
    });
    SEContainerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'se-container, [se-container]',
                    template: "<div class=\"ant-row se__container se__{{nzLayout}} se__{{size}}\" [ngStyle]=\"{'margin-left.px': -(gutter / 2), 'margin-right.px': -(gutter / 2)}\">\n  <se-title *ngIf=\"_title || _titleTpl\">\n    <ng-container *ngIf=\"_title; else _titleTpl\">{{_title}}</ng-container>\n  </se-title>\n  <ng-content></ng-content>\n</div>\n",
                    preserveWhitespaces: false
                }] }
    ];
    /** @nocollapse */
    SEContainerComponent.ctorParameters = function () { return [
        { type: SEConfig }
    ]; };
    SEContainerComponent.propDecorators = {
        title: [{ type: Input }],
        gutter: [{ type: Input }],
        col: [{ type: Input, args: ['se-container',] }],
        labelWidth: [{ type: Input }],
        nzLayout: [{ type: Input }],
        size: [{ type: Input }],
        firstVisual: [{ type: Input }],
        line: [{ type: Input }]
    };
    __decorate([
        InputNumber(null),
        __metadata("design:type", Number)
    ], SEContainerComponent.prototype, "labelWidth", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], SEContainerComponent.prototype, "firstVisual", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], SEContainerComponent.prototype, "line", void 0);
    return SEContainerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SEErrorComponent = /** @class */ (function () {
    function SEErrorComponent() {
    }
    SEErrorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'se-error',
                    preserveWhitespaces: false,
                    animations: [
                        trigger('errorAnt', [
                            transition('void => *', [
                                style({
                                    opacity: 0,
                                    transform: 'translateY(-5px)',
                                }),
                                animate('0.3s cubic-bezier(0.645, 0.045, 0.355, 1)', style({
                                    opacity: 1,
                                    transform: 'translateY(0)',
                                })),
                            ]),
                            transition('* => void', [
                                style({
                                    opacity: 1,
                                    transform: 'translateY(0)',
                                }),
                                animate('0.3s cubic-bezier(0.645, 0.045, 0.355, 1)', style({
                                    opacity: 0,
                                    transform: 'translateY(-5px)',
                                })),
                            ]),
                        ]),
                    ],
                    template: "\n  <div [@errorAnt]>\n    <ng-content></ng-content>\n  </div>",
                    host: {
                        '[class.ant-form-explain]': 'true',
                    },
                    styles: ["\n      :host {\n        display: block;\n      }\n    "]
                }] }
    ];
    return SEErrorComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SETitleComponent = /** @class */ (function () {
    function SETitleComponent(parent, el, ren) {
        this.parent = parent;
        this.ren = ren;
        if (parent == null) {
            throw new Error("[se-title] must include 'se-container' component");
        }
        this.el = el.nativeElement;
    }
    /**
     * @return {?}
     */
    SETitleComponent.prototype.setClass = /**
     * @return {?}
     */
    function () {
        var gutter = this.parent.gutter;
        var el = this.el;
        this.ren.setStyle(el, 'padding-left', gutter / 2 + "px");
        this.ren.setStyle(el, 'padding-right', gutter / 2 + "px");
    };
    /**
     * @return {?}
     */
    SETitleComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setClass();
    };
    SETitleComponent.decorators = [
        { type: Component, args: [{
                    selector: 'se-title, [se-title]',
                    template: '<ng-content></ng-content>',
                    host: {
                        '[class.se__title]': 'true',
                    }
                }] }
    ];
    /** @nocollapse */
    SETitleComponent.ctorParameters = function () { return [
        { type: SEContainerComponent, decorators: [{ type: Host }, { type: Optional }] },
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    return SETitleComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var prefixCls = "se";
/** @type {?} */
var nextUniqueId = 0;
var SEComponent = /** @class */ (function () {
    function SEComponent(parent, rep, el, ren, cd) {
        this.parent = parent;
        this.rep = rep;
        this.ren = ren;
        this.cd = cd;
        this.clsMap = [];
        this.inited = false;
        this.onceFlag = false;
        this.invalid = false;
        this.labelWidth = null;
        this._label = '';
        this.required = false;
        this.controlClass = '';
        this._id = "_se-" + nextUniqueId++;
        this._autoId = true;
        if (parent == null) {
            throw new Error("[se] must include 'se-container' component");
        }
        this.el = el.nativeElement;
    }
    Object.defineProperty(SEComponent.prototype, "label", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value instanceof TemplateRef) {
                this._label = null;
                this._labelTpl = value;
            }
            else {
                this._label = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SEComponent.prototype, "id", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._id = value;
            this._autoId = false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SEComponent.prototype, "paddingLeft", {
        // #endregion
        get: /**
         * @return {?}
         */
        function () {
            return this.parent.gutter / 2;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SEComponent.prototype, "paddingRight", {
        get: /**
         * @return {?}
         */
        function () {
            return this.parent.gutter / 2;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SEComponent.prototype, "showErr", {
        get: /**
         * @return {?}
         */
        function () {
            return this.invalid && this.parent.size !== 'compact' && !!this.error;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SEComponent.prototype, "ngControl", {
        get: /**
         * @return {?}
         */
        function () {
            return this.ngModel || this.formControlName;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SEComponent.prototype.setClass = /**
     * @return {?}
     */
    function () {
        var _a = this, el = _a.el, ren = _a.ren, clsMap = _a.clsMap, col = _a.col, parent = _a.parent, cd = _a.cd;
        this.labelWidth = parent.labelWidth;
        clsMap.forEach(function (cls) { return ren.removeClass(el, cls); });
        clsMap.length = 0;
        /** @type {?} */
        var repCls = parent.nzLayout === 'horizontal'
            ? this.rep.genCls(col != null ? col : parent.col)
            : [];
        clsMap.push.apply(clsMap, __spread(["ant-form-item"], repCls, [prefixCls + "__item"]));
        if (this.line || parent.line) {
            clsMap.push(prefixCls + "__line");
        }
        clsMap.forEach(function (cls) { return ren.addClass(el, cls); });
        cd.detectChanges();
        return this;
    };
    /**
     * @return {?}
     */
    SEComponent.prototype.bindModel = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.ngControl || this.status$)
            return;
        this.status$ = this.ngControl.statusChanges.subscribe(function (res) {
            /** @type {?} */
            var status = res !== 'VALID';
            if (!_this.onceFlag || _this.invalid === status) {
                _this.onceFlag = true;
                return;
            }
            _this.invalid = status;
            _this.cd.detectChanges();
        });
        if (this._autoId) {
            /** @type {?} */
            var control = /** @type {?} */ (deepGet(this.ngControl.valueAccessor, '_elementRef.nativeElement'));
            if (control) {
                control.id = this._id;
            }
        }
    };
    /**
     * @return {?}
     */
    SEComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.onceFlag = this.parent.firstVisual;
        if (this.inited)
            this.setClass().bindModel();
    };
    /**
     * @return {?}
     */
    SEComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.setClass().bindModel();
        this.inited = true;
    };
    /**
     * @return {?}
     */
    SEComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.status$) {
            this.status$.unsubscribe();
        }
    };
    SEComponent.decorators = [
        { type: Component, args: [{
                    selector: 'se',
                    template: "<div class=\"ant-form-item-label se__label\"\n  [class.se__nolabel]=\"!_label && !_labelTpl\" [style.width.px]=\"labelWidth\">\n  <label *ngIf=\"_label; else _labelTpl\" [attr.for]=\"_id\" [ngClass]=\"{'ant-form-item-required': required}\">\n    {{_label}}\n    <span class=\"se__label-optional\">\n      {{ optional }}\n      <nz-tooltip *ngIf=\"optionalHelp\" [nzTitle]=\"optionalHelp\">\n        <i nz-tooltip class=\"anticon anticon-question-circle-o\"></i>\n      </nz-tooltip>\n    </span>\n  </label>\n</div>\n<div class=\"ant-form-item-control-wrapper se__control\">\n  <div class=\"ant-form-item-control {{controlClass}}\" [class.has-error]=\"invalid\">\n    <ng-content></ng-content>\n    <se-error *ngIf=\"showErr\">{{error}}</se-error>\n    <div *ngIf=\"extra\" class=\"ant-form-extra\">{{extra}}</div>\n  </div>\n</div>\n",
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    SEComponent.ctorParameters = function () { return [
        { type: SEContainerComponent, decorators: [{ type: Optional }, { type: Host }] },
        { type: ResponsiveService },
        { type: ElementRef },
        { type: Renderer2 },
        { type: ChangeDetectorRef }
    ]; };
    SEComponent.propDecorators = {
        ngModel: [{ type: ContentChild, args: [NgModel,] }],
        formControlName: [{ type: ContentChild, args: [FormControlName,] }],
        optional: [{ type: Input }],
        optionalHelp: [{ type: Input }],
        error: [{ type: Input }],
        extra: [{ type: Input }],
        label: [{ type: Input }],
        col: [{ type: Input }],
        required: [{ type: Input }],
        controlClass: [{ type: Input }],
        id: [{ type: Input }],
        line: [{ type: Input }],
        paddingLeft: [{ type: HostBinding, args: ['style.padding-left.px',] }],
        paddingRight: [{ type: HostBinding, args: ['style.padding-right.px',] }],
        showErr: [{ type: HostBinding, args: ['class.ant-form-item-with-help',] }]
    };
    __decorate([
        InputNumber(null),
        __metadata("design:type", Number)
    ], SEComponent.prototype, "col", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], SEComponent.prototype, "required", void 0);
    __decorate([
        InputBoolean(null),
        __metadata("design:type", Boolean)
    ], SEComponent.prototype, "line", void 0);
    return SEComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var COMPONENTS = [
    SEContainerComponent,
    SEComponent,
    SEErrorComponent,
    SETitleComponent,
];
var SEModule = /** @class */ (function () {
    function SEModule() {
    }
    /**
     * @return {?}
     */
    SEModule.forRoot = /**
     * @return {?}
     */
    function () {
        return { ngModule: SEModule, providers: [SEConfig] };
    };
    SEModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, DelonUtilModule, NgZorroAntdModule],
                    declarations: __spread(COMPONENTS),
                    exports: __spread(COMPONENTS),
                },] }
    ];
    return SEModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { SEContainerComponent, SEErrorComponent, SETitleComponent, SEComponent, SEConfig, SEModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGRlbG9uL2FiYy9lZGl0L2VkaXQuY29uZmlnLnRzIiwibmc6Ly9AZGVsb24vYWJjL2VkaXQvZWRpdC1jb250YWluZXIuY29tcG9uZW50LnRzIiwibmc6Ly9AZGVsb24vYWJjL2VkaXQvZWRpdC1lcnJvci5jb21wb25lbnQudHMiLCJuZzovL0BkZWxvbi9hYmMvZWRpdC9lZGl0LXRpdGxlLmNvbXBvbmVudC50cyIsIm5nOi8vQGRlbG9uL2FiYy9lZGl0L2VkaXQuY29tcG9uZW50LnRzIiwibmc6Ly9AZGVsb24vYWJjL2VkaXQvZWRpdC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFNFQ29uZmlnIHtcbiAgLyoqXG4gICAqIMOlwqTCp8OlwrDCj8OvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmBkZWZhdWx0YFxuICAgKiAtIGBjb21wYWN0YCDDp8K0wqfDpcKHwpHDpcKewovDr8K8wozDpcK8wrrDpcKIwrbDpcK/wr3Dp8KVwqUgYGVycm9yYMOjwoDCgWBleHRyYWAgw6XCscKVw6fCpMK6XG4gICAqL1xuICBzaXplOiAnZGVmYXVsdCcgfCAnY29tcGFjdCcgPSAnZGVmYXVsdCc7XG4gIC8qKlxuICAgKiDDpcK4woPDpcKxwoDDp8KxwrvDpcKewovDr8K8wozDp8KtwonDpcKQwowgYG56TGF5b3V0YFxuICAgKiAtIGBpbmxpbmVgIMOmwpfCtsOlwrzCusOlwojCtsOlwqTCp8OlwrDCj8OkwrjCuiBgY29tcGFjdGBcbiAgICovXG4gIG56TGF5b3V0OiAnaG9yaXpvbnRhbCcgfCAndmVydGljYWwnIHwgJ2lubGluZScgPSAnaG9yaXpvbnRhbCc7XG4gIC8qKlxuICAgKiDDqcKXwrTDqMK3wp3Dr8K8wozDpcK9wpMgYG56TGF5b3V0Omhvcml6b250YWxgIMOmwpfCtsOmwpzCicOmwpXCiMOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmAzMmBcbiAgICovXG4gIGd1dHRlcj8gPSAzMjtcbiAgLyoqXG4gICAqIMOlwojCl8OmwpXCsMOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmAyYFxuICAgKi9cbiAgY29sPyA9IDI7XG4gIC8qKlxuICAgKiDDpsKgwofDp8Ktwr7DpsKWwofDpsKcwqzDpcKuwr3DpcK6wqbDr8K8wozDpcKNwpXDpMK9wo3Dr8K8wppgcHhgw6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYDE1MGBcbiAgICovXG4gIGxhYmVsV2lkdGg/ID0gMTUwO1xuICAvKipcbiAgICogw6bCmMKvw6XCkMKmw6fCq8KLw6XCjcKzw6XCkcKIw6fCjsKww6nClMKZw6jCr8Kvw6jCp8KGw6jCp8KJXG4gICAqL1xuICBmaXJzdFZpc3VhbD8gPSBmYWxzZTtcbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0b051bWJlciwgSW5wdXROdW1iZXIsIElucHV0Qm9vbGVhbiB9IGZyb20gJ0BkZWxvbi91dGlsJztcbmltcG9ydCB7IFNFQ29uZmlnIH0gZnJvbSAnLi9lZGl0LmNvbmZpZyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NlLWNvbnRhaW5lciwgW3NlLWNvbnRhaW5lcl0nLFxuICB0ZW1wbGF0ZVVybDogJy4vZWRpdC1jb250YWluZXIuY29tcG9uZW50Lmh0bWwnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbn0pXG5leHBvcnQgY2xhc3MgU0VDb250YWluZXJDb21wb25lbnQge1xuICAvLyNyZWdpb24gZmllbGRzXG5cbiAgX3RpdGxlID0gJyc7XG4gIF90aXRsZVRwbDogVGVtcGxhdGVSZWY8YW55PjtcbiAgQElucHV0KClcbiAgc2V0IHRpdGxlKHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+KSB7XG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcbiAgICAgIHRoaXMuX3RpdGxlID0gbnVsbDtcbiAgICAgIHRoaXMuX3RpdGxlVHBsID0gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3RpdGxlID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgQElucHV0KClcbiAgZ2V0IGd1dHRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5uekxheW91dCA9PT0gJ2hvcml6b250YWwnID8gdGhpcy5fZ3V0dGVyIDogMDtcbiAgfVxuICBzZXQgZ3V0dGVyKHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLl9ndXR0ZXIgPSB0b051bWJlcih2YWx1ZSk7XG4gIH1cbiAgcHJpdmF0ZSBfZ3V0dGVyOiBudW1iZXI7XG5cbiAgQElucHV0KCdzZS1jb250YWluZXInKVxuICBzZXQgY29sKHZhbHVlOiBhbnkpIHtcbiAgICBjb25zdCBhID0gdG9OdW1iZXIodmFsdWUsIDApO1xuICAgIGlmIChhIDw9IDApIHJldHVybjtcbiAgICB0aGlzLl9jb2wgPSB0b051bWJlcih2YWx1ZSwgMCk7XG4gIH1cbiAgZ2V0IGNvbCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29sO1xuICB9XG4gIHByaXZhdGUgX2NvbDogbnVtYmVyO1xuXG4gIEBJbnB1dCgpXG4gIEBJbnB1dE51bWJlcihudWxsKVxuICBsYWJlbFdpZHRoOiBudW1iZXI7XG5cbiAgQElucHV0KClcbiAgZ2V0IG56TGF5b3V0KCkge1xuICAgIHJldHVybiB0aGlzLl9uekxheW91dDtcbiAgfVxuICBzZXQgbnpMYXlvdXQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX256TGF5b3V0ID0gdmFsdWU7XG4gICAgaWYgKHZhbHVlID09PSAnaW5saW5lJykge1xuICAgICAgdGhpcy5zaXplID0gJ2NvbXBhY3QnO1xuICAgIH1cbiAgfVxuICBwcml2YXRlIF9uekxheW91dDogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIHNpemU6ICdkZWZhdWx0JyB8ICdjb21wYWN0JztcblxuICBASW5wdXQoKVxuICBASW5wdXRCb29sZWFuKClcbiAgZmlyc3RWaXN1YWw6IGJvb2xlYW47XG5cbiAgQElucHV0KClcbiAgQElucHV0Qm9vbGVhbigpXG4gIGxpbmUgPSBmYWxzZTtcblxuICAvLyNlbmRyZWdpb25cblxuICBjb25zdHJ1Y3Rvcihjb2c6IFNFQ29uZmlnKSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBjb2cpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGFuaW1hdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NlLWVycm9yJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdlcnJvckFudCcsIFtcbiAgICAgIHRyYW5zaXRpb24oJ3ZvaWQgPT4gKicsIFtcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtNXB4KScsXG4gICAgICAgIH0pLFxuICAgICAgICBhbmltYXRlKFxuICAgICAgICAgICcwLjNzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKScsXG4gICAgICAgICAgc3R5bGUoe1xuICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMCknLFxuICAgICAgICAgIH0pLFxuICAgICAgICApLFxuICAgICAgXSksXG4gICAgICB0cmFuc2l0aW9uKCcqID0+IHZvaWQnLCBbXG4gICAgICAgIHN0eWxlKHtcbiAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMCknLFxuICAgICAgICB9KSxcbiAgICAgICAgYW5pbWF0ZShcbiAgICAgICAgICAnMC4zcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSknLFxuICAgICAgICAgIHN0eWxlKHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC01cHgpJyxcbiAgICAgICAgICB9KSxcbiAgICAgICAgKSxcbiAgICAgIF0pLFxuICAgIF0pLFxuICBdLFxuICB0ZW1wbGF0ZTogYFxuICA8ZGl2IFtAZXJyb3JBbnRdPlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgPC9kaXY+YCxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuYW50LWZvcm0tZXhwbGFpbl0nOiAndHJ1ZScsXG4gIH0sXG4gIHN0eWxlczogW1xuICAgIGBcbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG4gICAgYCxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgU0VFcnJvckNvbXBvbmVudCB7fVxuIiwiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBIb3N0LFxuICBFbGVtZW50UmVmLFxuICBSZW5kZXJlcjIsXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU0VDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL2VkaXQtY29udGFpbmVyLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NlLXRpdGxlLCBbc2UtdGl0bGVdJyxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgaG9zdDoge1xuICAgICdbY2xhc3Muc2VfX3RpdGxlXSc6ICd0cnVlJyxcbiAgfSxcbn0pXG5leHBvcnQgY2xhc3MgU0VUaXRsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByaXZhdGUgZWw6IEhUTUxFbGVtZW50O1xuICBjb25zdHJ1Y3RvcihcbiAgICBASG9zdCgpXG4gICAgQE9wdGlvbmFsKClcbiAgICBwcml2YXRlIHBhcmVudDogU0VDb250YWluZXJDb21wb25lbnQsXG4gICAgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW46IFJlbmRlcmVyMixcbiAgKSB7XG4gICAgaWYgKHBhcmVudCA9PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFtzZS10aXRsZV0gbXVzdCBpbmNsdWRlICdzZS1jb250YWluZXInIGNvbXBvbmVudGApO1xuICAgIH1cbiAgICB0aGlzLmVsID0gZWwubmF0aXZlRWxlbWVudDtcbiAgfVxuXG4gIHByaXZhdGUgc2V0Q2xhc3MoKSB7XG4gICAgY29uc3QgeyBndXR0ZXIgfSA9IHRoaXMucGFyZW50O1xuICAgIGNvbnN0IHsgZWwgfSA9IHRoaXM7XG4gICAgdGhpcy5yZW4uc2V0U3R5bGUoZWwsICdwYWRkaW5nLWxlZnQnLCBgJHtndXR0ZXIgLyAyfXB4YCk7XG4gICAgdGhpcy5yZW4uc2V0U3R5bGUoZWwsICdwYWRkaW5nLXJpZ2h0JywgYCR7Z3V0dGVyIC8gMn1weGApO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zZXRDbGFzcygpO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBUZW1wbGF0ZVJlZixcbiAgT25DaGFuZ2VzLFxuICBFbGVtZW50UmVmLFxuICBSZW5kZXJlcjIsXG4gIENvbnRlbnRDaGlsZCxcbiAgSG9zdCxcbiAgT3B0aW9uYWwsXG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgT25EZXN0cm95LFxuICBIb3N0QmluZGluZyxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ01vZGVsLCBGb3JtQ29udHJvbE5hbWUsIE5nQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBSZXNwb25zaXZlU2VydmljZSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5pbXBvcnQgeyBkZWVwR2V0LCBJbnB1dE51bWJlciwgSW5wdXRCb29sZWFuIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuXG5pbXBvcnQgeyBTRUNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vZWRpdC1jb250YWluZXIuY29tcG9uZW50JztcblxuY29uc3QgcHJlZml4Q2xzID0gYHNlYDtcbmxldCBuZXh0VW5pcXVlSWQgPSAwO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9lZGl0LmNvbXBvbmVudC5odG1sJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBTRUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBlbDogSFRNTEVsZW1lbnQ7XG4gIHByaXZhdGUgc3RhdHVzJDogU3Vic2NyaXB0aW9uO1xuICBAQ29udGVudENoaWxkKE5nTW9kZWwpXG4gIHByaXZhdGUgcmVhZG9ubHkgbmdNb2RlbDogTmdNb2RlbDtcbiAgQENvbnRlbnRDaGlsZChGb3JtQ29udHJvbE5hbWUpXG4gIHByaXZhdGUgcmVhZG9ubHkgZm9ybUNvbnRyb2xOYW1lOiBGb3JtQ29udHJvbE5hbWU7XG4gIHByaXZhdGUgY2xzTWFwOiBzdHJpbmdbXSA9IFtdO1xuICBwcml2YXRlIGluaXRlZCA9IGZhbHNlO1xuICBwcml2YXRlIG9uY2VGbGFnID0gZmFsc2U7XG4gIGludmFsaWQgPSBmYWxzZTtcbiAgbGFiZWxXaWR0aCA9IG51bGw7XG5cbiAgLy8gI3JlZ2lvbiBmaWVsZHNcblxuICBASW5wdXQoKVxuICBvcHRpb25hbDogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIG9wdGlvbmFsSGVscDogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIGVycm9yOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgZXh0cmE6IHN0cmluZztcblxuICBfbGFiZWwgPSAnJztcbiAgX2xhYmVsVHBsOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBASW5wdXQoKVxuICBzZXQgbGFiZWwodmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT4pIHtcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xuICAgICAgdGhpcy5fbGFiZWwgPSBudWxsO1xuICAgICAgdGhpcy5fbGFiZWxUcGwgPSB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fbGFiZWwgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBASW5wdXQoKVxuICBASW5wdXROdW1iZXIobnVsbClcbiAgY29sOiBudW1iZXI7XG5cbiAgQElucHV0KClcbiAgQElucHV0Qm9vbGVhbigpXG4gIHJlcXVpcmVkID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgY29udHJvbENsYXNzOiBzdHJpbmcgPSAnJztcblxuICBASW5wdXQoKVxuICBzZXQgaWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2lkID0gdmFsdWU7XG4gICAgdGhpcy5fYXV0b0lkID0gZmFsc2U7XG4gIH1cblxuICBfaWQgPSBgX3NlLSR7bmV4dFVuaXF1ZUlkKyt9YDtcbiAgX2F1dG9JZCA9IHRydWU7XG5cbiAgQElucHV0KClcbiAgQElucHV0Qm9vbGVhbihudWxsKVxuICBsaW5lOiBib29sZWFuO1xuXG4gIC8vICNlbmRyZWdpb25cblxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLnBhZGRpbmctbGVmdC5weCcpXG4gIGdldCBwYWRkaW5nTGVmdCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnBhcmVudC5ndXR0ZXIgLyAyO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5wYWRkaW5nLXJpZ2h0LnB4JylcbiAgZ2V0IHBhZGRpbmdSaWdodCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnBhcmVudC5ndXR0ZXIgLyAyO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbnQtZm9ybS1pdGVtLXdpdGgtaGVscCcpXG4gIGdldCBzaG93RXJyKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmludmFsaWQgJiYgdGhpcy5wYXJlbnQuc2l6ZSAhPT0gJ2NvbXBhY3QnICYmICEhdGhpcy5lcnJvcjtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IG5nQ29udHJvbCgpOiBOZ0NvbnRyb2wge1xuICAgIHJldHVybiB0aGlzLm5nTW9kZWwgfHwgdGhpcy5mb3JtQ29udHJvbE5hbWU7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKVxuICAgIEBIb3N0KClcbiAgICBwcml2YXRlIHBhcmVudDogU0VDb250YWluZXJDb21wb25lbnQsXG4gICAgcHJpdmF0ZSByZXA6IFJlc3BvbnNpdmVTZXJ2aWNlLFxuICAgIGVsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICkge1xuICAgIGlmIChwYXJlbnQgPT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBbc2VdIG11c3QgaW5jbHVkZSAnc2UtY29udGFpbmVyJyBjb21wb25lbnRgKTtcbiAgICB9XG4gICAgdGhpcy5lbCA9IGVsLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBwcml2YXRlIHNldENsYXNzKCk6IHRoaXMge1xuICAgIGNvbnN0IHsgZWwsIHJlbiwgY2xzTWFwLCBjb2wsIHBhcmVudCwgY2QgfSA9IHRoaXM7XG4gICAgdGhpcy5sYWJlbFdpZHRoID0gcGFyZW50LmxhYmVsV2lkdGg7XG4gICAgY2xzTWFwLmZvckVhY2goY2xzID0+IHJlbi5yZW1vdmVDbGFzcyhlbCwgY2xzKSk7XG4gICAgY2xzTWFwLmxlbmd0aCA9IDA7XG4gICAgY29uc3QgcmVwQ2xzID1cbiAgICAgIHBhcmVudC5uekxheW91dCA9PT0gJ2hvcml6b250YWwnXG4gICAgICAgID8gdGhpcy5yZXAuZ2VuQ2xzKGNvbCAhPSBudWxsID8gY29sIDogcGFyZW50LmNvbClcbiAgICAgICAgOiBbXTtcbiAgICBjbHNNYXAucHVzaChgYW50LWZvcm0taXRlbWAsIC4uLnJlcENscywgYCR7cHJlZml4Q2xzfV9faXRlbWApO1xuICAgIGlmICh0aGlzLmxpbmUgfHwgcGFyZW50LmxpbmUpIHtcbiAgICAgIGNsc01hcC5wdXNoKGAke3ByZWZpeENsc31fX2xpbmVgKTtcbiAgICB9XG4gICAgY2xzTWFwLmZvckVhY2goY2xzID0+IHJlbi5hZGRDbGFzcyhlbCwgY2xzKSk7XG4gICAgY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHJpdmF0ZSBiaW5kTW9kZWwoKSB7XG4gICAgaWYgKCF0aGlzLm5nQ29udHJvbCB8fCB0aGlzLnN0YXR1cyQpIHJldHVybjtcblxuICAgIHRoaXMuc3RhdHVzJCA9IHRoaXMubmdDb250cm9sLnN0YXR1c0NoYW5nZXMuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICBjb25zdCBzdGF0dXMgPSByZXMgIT09ICdWQUxJRCc7XG4gICAgICBpZiAoIXRoaXMub25jZUZsYWcgfHwgdGhpcy5pbnZhbGlkID09PSBzdGF0dXMpIHtcbiAgICAgICAgdGhpcy5vbmNlRmxhZyA9IHRydWU7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuaW52YWxpZCA9IHN0YXR1cztcbiAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH0pO1xuICAgIGlmICh0aGlzLl9hdXRvSWQpIHtcbiAgICAgIGNvbnN0IGNvbnRyb2wgPSBkZWVwR2V0KFxuICAgICAgICB0aGlzLm5nQ29udHJvbC52YWx1ZUFjY2Vzc29yLFxuICAgICAgICAnX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCcsXG4gICAgICApIGFzIEhUTUxFbGVtZW50O1xuICAgICAgaWYgKGNvbnRyb2wpIHtcbiAgICAgICAgY29udHJvbC5pZCA9IHRoaXMuX2lkO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIHRoaXMub25jZUZsYWcgPSB0aGlzLnBhcmVudC5maXJzdFZpc3VhbDtcbiAgICBpZiAodGhpcy5pbml0ZWQpIHRoaXMuc2V0Q2xhc3MoKS5iaW5kTW9kZWwoKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNldENsYXNzKCkuYmluZE1vZGVsKCk7XG4gICAgdGhpcy5pbml0ZWQgPSB0cnVlO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc3RhdHVzJCkge1xuICAgICAgdGhpcy5zdGF0dXMkLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nWm9ycm9BbnRkTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZCc7XG5pbXBvcnQgeyBEZWxvblV0aWxNb2R1bGUgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5cbmltcG9ydCB7IFNFQ29uZmlnIH0gZnJvbSAnLi9lZGl0LmNvbmZpZyc7XG5pbXBvcnQgeyBTRUNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vZWRpdC1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFNFQ29tcG9uZW50IH0gZnJvbSAnLi9lZGl0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTRUVycm9yQ29tcG9uZW50IH0gZnJvbSAnLi9lZGl0LWVycm9yLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTRVRpdGxlQ29tcG9uZW50IH0gZnJvbSAnLi9lZGl0LXRpdGxlLmNvbXBvbmVudCc7XG5cbmNvbnN0IENPTVBPTkVOVFMgPSBbXG4gIFNFQ29udGFpbmVyQ29tcG9uZW50LFxuICBTRUNvbXBvbmVudCxcbiAgU0VFcnJvckNvbXBvbmVudCxcbiAgU0VUaXRsZUNvbXBvbmVudCxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIERlbG9uVXRpbE1vZHVsZSwgTmdab3Jyb0FudGRNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFsuLi5DT01QT05FTlRTXSxcbiAgZXhwb3J0czogWy4uLkNPTVBPTkVOVFNdLFxufSlcbmV4cG9ydCBjbGFzcyBTRU1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7IG5nTW9kdWxlOiBTRU1vZHVsZSwgcHJvdmlkZXJzOiBbU0VDb25maWddIH07XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQTs7Ozs7O29CQUtnQyxTQUFTOzs7Ozt3QkFLVSxZQUFZOzs7O3NCQUluRCxFQUFFOzs7O21CQUlMLENBQUM7Ozs7MEJBSU0sR0FBRzs7OzsyQkFJRixLQUFLOzttQkExQnRCO0lBMkJDOzs7Ozs7OztJQzhDQyw4QkFBWSxHQUFhOztzQkE3RGhCLEVBQUU7b0JBeURKLEtBQUs7UUFLVixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztLQUMxQjtJQTdERCxzQkFDSSx1Q0FBSzs7Ozs7UUFEVCxVQUNVLEtBQWdDO1lBQ3hDLElBQUksS0FBSyxZQUFZLFdBQVcsRUFBRTtnQkFDaEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO2FBQ3hCO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2FBQ3JCO1NBQ0Y7OztPQUFBO0lBRUQsc0JBQ0ksd0NBQU07Ozs7UUFEVjtZQUVFLE9BQU8sSUFBSSxDQUFDLFFBQVEsS0FBSyxZQUFZLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7U0FDMUQ7Ozs7O1FBQ0QsVUFBVyxLQUFVO1lBQ25C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