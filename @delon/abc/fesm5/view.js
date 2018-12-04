import { ResponsiveService } from '@delon/theme';
import { updateHostClass, InputNumber, isEmpty, InputBoolean } from '@delon/util';
import { __decorate, __metadata, __spread } from 'tslib';
import { Component, Input, ElementRef, Renderer2, TemplateRef, Host, Optional, ViewChild, HostBinding, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObserversModule } from '@angular/cdk/observers';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SVConfig = /** @class */ (function () {
    function SVConfig() {
        /**
         * 间距，默认：`32`
         */
        this.gutter = 32;
        /**
         * 布局，默认：`horizontal`
         */
        this.layout = 'horizontal';
        /**
         * 列数，默认：`3`
         */
        this.col = 3;
        /**
         * 是否显示默认值，当内容为空值时显示 `-`，默认：`true`
         */
        this.default = true;
        /**
         * `label` 固定宽度，若 `null` 或 `undefined` 表示非固定，默认：`null`
         */
        this.labelWidth = null;
    }
    return SVConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var prefixCls = "sv";
var SVContainerComponent = /** @class */ (function () {
    //#endregion
    function SVContainerComponent(el, ren, cog) {
        this.ren = ren;
        //#region fields
        this._title = '';
        this.el = el.nativeElement;
        Object.assign(this, cog);
    }
    Object.defineProperty(SVContainerComponent.prototype, "title", {
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
    /**
     * @return {?}
     */
    SVContainerComponent.prototype.setClass = /**
     * @return {?}
     */
    function () {
        var _a;
        var _b = this, el = _b.el, ren = _b.ren, size = _b.size, layout = _b.layout;
        updateHostClass(el, ren, (_a = {},
            _a[prefixCls + "__container"] = true,
            _a[prefixCls + "__" + size] = true,
            _a[prefixCls + "__" + layout] = true,
            _a["clearfix"] = true,
            _a));
    };
    /**
     * @return {?}
     */
    SVContainerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setClass();
    };
    /**
     * @return {?}
     */
    SVContainerComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.setClass();
    };
    SVContainerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'sv-container, [sv-container]',
                    template: "<div class=\"ant-row\" [ngStyle]=\"{'margin-left.px': -(gutter / 2), 'margin-right.px': -(gutter / 2)}\">\n  <sv-title *ngIf=\"_title || _titleTpl\">\n    <ng-container *ngIf=\"_title; else _titleTpl\">{{_title}}</ng-container>\n  </sv-title>\n  <ng-content></ng-content>\n</div>\n",
                    preserveWhitespaces: false
                }] }
    ];
    /** @nocollapse */
    SVContainerComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: SVConfig }
    ]; };
    SVContainerComponent.propDecorators = {
        title: [{ type: Input }],
        size: [{ type: Input }],
        gutter: [{ type: Input }],
        layout: [{ type: Input }],
        labelWidth: [{ type: Input }],
        col: [{ type: Input }],
        default: [{ type: Input }]
    };
    __decorate([
        InputNumber(),
        __metadata("design:type", Number)
    ], SVContainerComponent.prototype, "gutter", void 0);
    __decorate([
        InputNumber(null),
        __metadata("design:type", Number)
    ], SVContainerComponent.prototype, "labelWidth", void 0);
    __decorate([
        InputNumber(),
        __metadata("design:type", Number)
    ], SVContainerComponent.prototype, "col", void 0);
    return SVContainerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SVTitleComponent = /** @class */ (function () {
    function SVTitleComponent(parent, el, ren) {
        this.parent = parent;
        this.ren = ren;
        if (parent == null) {
            throw new Error("[sv-title] must include 'sv-container' component");
        }
        this.el = el.nativeElement;
    }
    /**
     * @return {?}
     */
    SVTitleComponent.prototype.setClass = /**
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
    SVTitleComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setClass();
    };
    SVTitleComponent.decorators = [
        { type: Component, args: [{
                    selector: 'sv-title, [sv-title]',
                    template: '<ng-content></ng-content>',
                    host: {
                        '[class.sv__title]': 'true',
                    }
                }] }
    ];
    /** @nocollapse */
    SVTitleComponent.ctorParameters = function () { return [
        { type: SVContainerComponent, decorators: [{ type: Host }, { type: Optional }] },
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    return SVTitleComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var prefixCls$1 = "sv";
var SVComponent = /** @class */ (function () {
    function SVComponent(parent, rep, el, ren) {
        this.parent = parent;
        this.rep = rep;
        this.ren = ren;
        this.clsMap = [];
        //#region fields
        this._label = '';
        if (parent == null) {
            throw new Error("[sv] must include 'sv-container' component");
        }
        this.el = el.nativeElement;
    }
    Object.defineProperty(SVComponent.prototype, "label", {
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
    Object.defineProperty(SVComponent.prototype, "paddingLeft", {
        //#endregion
        get: /**
         * @return {?}
         */
        function () {
            return this.parent && this.parent.gutter / 2;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SVComponent.prototype, "paddingRight", {
        get: /**
         * @return {?}
         */
        function () {
            return this.parent && this.parent.gutter / 2;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SVComponent.prototype.setClass = /**
     * @return {?}
     */
    function () {
        var _a = this, el = _a.el, ren = _a.ren, col = _a.col, clsMap = _a.clsMap, type = _a.type, rep = _a.rep;
        clsMap.forEach(function (cls) { return ren.removeClass(el, cls); });
        clsMap.length = 0;
        clsMap.push.apply(clsMap, __spread(rep.genCls(col != null ? col : this.parent.col)));
        clsMap.push(prefixCls$1 + "__item");
        if (this.parent.labelWidth)
            clsMap.push(prefixCls$1 + "__item-fixed");
        if (type)
            clsMap.push(prefixCls$1 + "__type-" + type);
        clsMap.forEach(function (cls) { return ren.addClass(el, cls); });
    };
    /**
     * @return {?}
     */
    SVComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.setClass();
        this.checkContent();
    };
    /**
     * @return {?}
     */
    SVComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.setClass();
    };
    /**
     * @return {?}
     */
    SVComponent.prototype.checkContent = /**
     * @return {?}
     */
    function () {
        var conEl = this.conEl;
        /** @type {?} */
        var def = this.default;
        if (!(def != null ? def : this.parent.default))
            return;
        /** @type {?} */
        var el = /** @type {?} */ (conEl.nativeElement);
        /** @type {?} */
        var cls = "sv__default";
        if (el.classList.contains(cls)) {
            el.classList.remove(cls);
        }
        if (isEmpty(el)) {
            el.classList.add(cls);
        }
    };
    SVComponent.decorators = [
        { type: Component, args: [{
                    selector: 'sv, [sv]',
                    template: "<div class=\"sv__label\" [class.sv__label-empty]=\"!_label && !_labelTpl\"\n  [style.width.px]=\"parent.labelWidth\">\n  <ng-container *ngIf=\"_label; else _labelTpl\">{{_label}}</ng-container>\n</div>\n<div class=\"sv__detail\" (cdkObserveContent)=\"checkContent()\" #conEl>\n  <ng-content></ng-content>\n</div>\n",
                    preserveWhitespaces: false
                }] }
    ];
    /** @nocollapse */
    SVComponent.ctorParameters = function () { return [
        { type: SVContainerComponent, decorators: [{ type: Host }, { type: Optional }] },
        { type: ResponsiveService },
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    SVComponent.propDecorators = {
        conEl: [{ type: ViewChild, args: ['conEl',] }],
        label: [{ type: Input }],
        col: [{ type: Input }],
        default: [{ type: Input }],
        type: [{ type: Input }],
        paddingLeft: [{ type: HostBinding, args: ['style.padding-left.px',] }],
        paddingRight: [{ type: HostBinding, args: ['style.padding-right.px',] }]
    };
    __decorate([
        InputNumber(null),
        __metadata("design:type", Number)
    ], SVComponent.prototype, "col", void 0);
    __decorate([
        InputBoolean(null),
        __metadata("design:type", Boolean)
    ], SVComponent.prototype, "default", void 0);
    return SVComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var COMPONENTS = [SVContainerComponent, SVComponent, SVTitleComponent];
var SVModule = /** @class */ (function () {
    function SVModule() {
    }
    /**
     * @return {?}
     */
    SVModule.forRoot = /**
     * @return {?}
     */
    function () {
        return { ngModule: SVModule, providers: [SVConfig] };
    };
    SVModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, ObserversModule],
                    declarations: __spread(COMPONENTS),
                    exports: __spread(COMPONENTS),
                },] }
    ];
    return SVModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { SVContainerComponent, SVTitleComponent, SVComponent, SVConfig, SVModule };

//# sourceMappingURL=view.js.map