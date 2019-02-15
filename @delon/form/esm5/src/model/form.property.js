/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { combineLatest, BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { isBlank } from '../utils';
/**
 * @abstract
 */
var /**
 * @abstract
 */
FormProperty = /** @class */ (function () {
    function FormProperty(schemaValidatorFactory, schema, ui, formData, parent, path, options) {
        this.options = options;
        this._value = null;
        this._errors = null;
        this._objErrors = {};
        this._valueChanges = new BehaviorSubject(null);
        this._errorsChanges = new BehaviorSubject(null);
        this._visible = true;
        this._visibilityChanges = new BehaviorSubject(true);
        this.schema = schema;
        this.ui = ui;
        this.schemaValidator = schemaValidatorFactory.createValidatorFn(schema, {
            ingoreKeywords: (/** @type {?} */ (this.ui.ingoreKeywords)),
            debug: (/** @type {?} */ (((/** @type {?} */ (ui))))).debug,
        });
        this.formData = formData || schema.default;
        this._parent = parent;
        if (parent) {
            this._root = parent.root;
        }
        else if (this instanceof PropertyGroup) {
            this._root = (/** @type {?} */ (this));
        }
        this._path = path;
    }
    Object.defineProperty(FormProperty.prototype, "valueChanges", {
        get: /**
         * @return {?}
         */
        function () {
            return this._valueChanges;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormProperty.prototype, "errorsChanges", {
        get: /**
         * @return {?}
         */
        function () {
            return this._errorsChanges;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormProperty.prototype, "type", {
        get: /**
         * @return {?}
         */
        function () {
            return this.schema.type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormProperty.prototype, "parent", {
        get: /**
         * @return {?}
         */
        function () {
            return this._parent;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormProperty.prototype, "root", {
        get: /**
         * @return {?}
         */
        function () {
            // tslint:disable-next-line:no-any
            return this._root || ((/** @type {?} */ (((/** @type {?} */ (this))))));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormProperty.prototype, "path", {
        get: /**
         * @return {?}
         */
        function () {
            return this._path;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormProperty.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return this._value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormProperty.prototype, "errors", {
        get: /**
         * @return {?}
         */
        function () {
            return this._errors;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormProperty.prototype, "visible", {
        get: /**
         * @return {?}
         */
        function () {
            return this._visible;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormProperty.prototype, "valid", {
        get: /**
         * @return {?}
         */
        function () {
            return this._errors === null || this._errors.length === 0;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 更新值且校验数据
     *
     * @param [onlySelf=false] 是否包含上级字段
     * @param [emitValueEvent=true] 是否触发值变更通知
     */
    /**
     * 更新值且校验数据
     *
     * @param {?=} onlySelf
     * @param {?=} emitValueEvent
     * @param {?=} emitValidator
     * @return {?}
     */
    FormProperty.prototype.updateValueAndValidity = /**
     * 更新值且校验数据
     *
     * @param {?=} onlySelf
     * @param {?=} emitValueEvent
     * @param {?=} emitValidator
     * @return {?}
     */
    function (onlySelf, emitValueEvent, emitValidator) {
        if (onlySelf === void 0) { onlySelf = false; }
        if (emitValueEvent === void 0) { emitValueEvent = true; }
        if (emitValidator === void 0) { emitValidator = true; }
        this._updateValue();
        if (emitValueEvent) {
            this.valueChanges.next(this.value);
        }
        // `emitValidator` 每一次数据变更已经包含完整错误链路，后续父节点数据变更无须再触发校验
        if (emitValidator && this.ui.liveValidate === true) {
            this._runValidation();
        }
        if (this.parent && !onlySelf) {
            this.parent.updateValueAndValidity(onlySelf, emitValueEvent, false);
        }
    };
    /** 根据路径搜索表单属性 */
    /**
     * 根据路径搜索表单属性
     * @param {?} path
     * @return {?}
     */
    FormProperty.prototype.searchProperty = /**
     * 根据路径搜索表单属性
     * @param {?} path
     * @return {?}
     */
    function (path) {
        /** @type {?} */
        var prop = this;
        /** @type {?} */
        var base = null;
        /** @type {?} */
        var result = null;
        if (path[0] === '/') {
            base = this.findRoot();
            result = base.getProperty(path.substr(1));
        }
        else {
            while (result === null && prop.parent !== null) {
                prop = base = prop.parent;
                result = base.getProperty(path);
            }
        }
        return result;
    };
    /** 查找根表单属性 */
    /**
     * 查找根表单属性
     * @return {?}
     */
    FormProperty.prototype.findRoot = /**
     * 查找根表单属性
     * @return {?}
     */
    function () {
        /** @type {?} */
        var property = this;
        while (property.parent !== null) {
            property = property.parent;
        }
        return (/** @type {?} */ (property));
    };
    // #region process errors
    // #region process errors
    /**
     * @param {?} value
     * @return {?}
     */
    FormProperty.prototype.isEmptyData = 
    // #region process errors
    /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (isBlank(value))
            return true;
        switch (this.type) {
            case 'string':
                return ('' + value).length === 0;
        }
        return false;
    };
    /**
     * @internal
     */
    /**
     * \@internal
     * @return {?}
     */
    FormProperty.prototype._runValidation = /**
     * \@internal
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var errors;
        // The definition of some rules:
        // 1. Should not ajv validator when is empty data and required fields
        // 2. Should not ajv validator when is empty data
        /** @type {?} */
        var isEmpty = this.isEmptyData(this._value);
        if (isEmpty && this.ui._required) {
            errors = [{ keyword: 'required' }];
        }
        else if (isEmpty) {
            errors = [];
        }
        else {
            errors = this.schemaValidator(this._value) || [];
        }
        /** @type {?} */
        var customValidator = ((/** @type {?} */ (this.ui))).validator;
        if (typeof customValidator === 'function') {
            /** @type {?} */
            var customErrors = customValidator(this.value, this, this.findRoot());
            if (customErrors instanceof Observable) {
                customErrors.subscribe(function (res) {
                    _this.setCustomErrors(errors, res);
                    _this.widget.detectChanges();
                });
                return;
            }
            this.setCustomErrors(errors, customErrors);
            return;
        }
        this._errors = errors;
        this.setErrors(this._errors);
    };
    /**
     * @param {?} errors
     * @param {?} list
     * @return {?}
     */
    FormProperty.prototype.setCustomErrors = /**
     * @param {?} errors
     * @param {?} list
     * @return {?}
     */
    function (errors, list) {
        // fix error format
        /** @type {?} */
        var hasCustomError = list != null && list.length > 0;
        if (hasCustomError) {
            list.forEach(function (err, idx) {
                if (!err.message)
                    throw new Error("The custom validator must contain a 'message' attribute to viewed error text");
                err._custom = true;
            });
        }
        this._errors = this.mergeErrors(errors, list);
        this.setErrors(this._errors);
    };
    /**
     * @param {?} errors
     * @param {?} newErrors
     * @return {?}
     */
    FormProperty.prototype.mergeErrors = /**
     * @param {?} errors
     * @param {?} newErrors
     * @return {?}
     */
    function (errors, newErrors) {
        if (newErrors) {
            if (Array.isArray(newErrors)) {
                errors = errors.concat.apply(errors, tslib_1.__spread(newErrors));
            }
            else {
                errors.push(newErrors);
            }
        }
        return errors;
    };
    /**
     * @param {?} errors
     * @param {?=} emitFormat
     * @return {?}
     */
    FormProperty.prototype.setErrors = /**
     * @param {?} errors
     * @param {?=} emitFormat
     * @return {?}
     */
    function (errors, emitFormat) {
        var _this = this;
        if (emitFormat === void 0) { emitFormat = true; }
        if (emitFormat && errors && !this.ui.onlyVisual) {
            errors = errors.map(function (err) {
                /** @type {?} */
                var message = err._custom === true && err.message
                    ? err.message
                    : (_this.ui.errors || {})[err.keyword] || _this.options.errors[err.keyword] || "";
                if (message && typeof message === 'function') {
                    message = (/** @type {?} */ (message(err)));
                }
                if (message) {
                    if (~((/** @type {?} */ (message))).indexOf('{')) {
                        message = ((/** @type {?} */ (message))).replace(/{([\.a-z0-9]+)}/g, function (v, key) { return err.params[key] || ''; });
                    }
                    err.message = (/** @type {?} */ (message));
                }
                return err;
            });
        }
        this._errors = errors;
        this._errorsChanges.next(errors);
        // Should send errors to parent field
        if (this._parent) {
            this._parent.setParentAndPlatErrors(errors, this.path);
        }
    };
    /**
     * @param {?} errors
     * @param {?} path
     * @return {?}
     */
    FormProperty.prototype.setParentAndPlatErrors = /**
     * @param {?} errors
     * @param {?} path
     * @return {?}
     */
    function (errors, path) {
        var _this = this;
        this._objErrors[path] = errors;
        /** @type {?} */
        var platErrors = [];
        Object.keys(this._objErrors).forEach(function (p) {
            /** @type {?} */
            var property = _this.searchProperty(p);
            if (property && !property.visible)
                return;
            platErrors.push.apply(platErrors, tslib_1.__spread(_this._objErrors[p]));
        });
        this.setErrors(platErrors, false);
    };
    // #endregion
    // #region condition
    // #endregion
    // #region condition
    /**
     * @param {?} visible
     * @return {?}
     */
    FormProperty.prototype.setVisible = 
    // #endregion
    // #region condition
    /**
     * @param {?} visible
     * @return {?}
     */
    function (visible) {
        this._visible = visible;
        this._visibilityChanges.next(visible);
        // 部分数据源来自 reset
        this.resetValue(this.value, true);
    };
    // A field is visible if AT LEAST ONE of the properties it depends on is visible AND has a value in the list
    // A field is visible if AT LEAST ONE of the properties it depends on is visible AND has a value in the list
    /**
     * @return {?}
     */
    FormProperty.prototype._bindVisibility = 
    // A field is visible if AT LEAST ONE of the properties it depends on is visible AND has a value in the list
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var visibleIf = ((/** @type {?} */ (this.ui))).visibleIf;
        if (typeof visibleIf === 'object' && Object.keys(visibleIf).length === 0) {
            this.setVisible(false);
        }
        else if (visibleIf !== undefined) {
            /** @type {?} */
            var propertiesBinding = [];
            var _loop_1 = function (dependencyPath) {
                if (visibleIf.hasOwnProperty(dependencyPath)) {
                    /** @type {?} */
                    var property = this_1.searchProperty(dependencyPath);
                    if (property) {
                        /** @type {?} */
                        var valueCheck = property.valueChanges.pipe(map(function (value) {
                            /** @type {?} */
                            var vi = visibleIf[dependencyPath];
                            if (typeof vi === 'function')
                                return vi(value);
                            if (vi.indexOf('$ANY$') !== -1) {
                                return value.length > 0;
                            }
                            else {
                                return vi.indexOf(value) !== -1;
                            }
                        }));
                        /** @type {?} */
                        var visibilityCheck = property._visibilityChanges;
                        /** @type {?} */
                        var and = combineLatest(valueCheck, visibilityCheck).pipe(map(function (results) { return results[0] && results[1]; }));
                        propertiesBinding.push(and);
                    }
                    else {
                        console.warn("Can't find property " + dependencyPath + " for visibility check of " + this_1.path);
                    }
                }
            };
            var this_1 = this;
            for (var dependencyPath in visibleIf) {
                _loop_1(dependencyPath);
            }
            combineLatest(propertiesBinding)
                .pipe(map(function (values) { return values.indexOf(true) !== -1; }), distinctUntilChanged())
                .subscribe(function (visible) { return _this.setVisible(visible); });
        }
    };
    return FormProperty;
}());
/**
 * @abstract
 */
export { FormProperty };
if (false) {
    /** @type {?} */
    FormProperty.prototype.schemaValidator;
    /** @type {?} */
    FormProperty.prototype.schema;
    /** @type {?} */
    FormProperty.prototype.ui;
    /** @type {?} */
    FormProperty.prototype.formData;
    /** @type {?} */
    FormProperty.prototype._value;
    /** @type {?} */
    FormProperty.prototype.widget;
    /** @type {?} */
    FormProperty.prototype._errors;
    /** @type {?} */
    FormProperty.prototype._objErrors;
    /** @type {?} */
    FormProperty.prototype._valueChanges;
    /** @type {?} */
    FormProperty.prototype._errorsChanges;
    /** @type {?} */
    FormProperty.prototype._visible;
    /** @type {?} */
    FormProperty.prototype._visibilityChanges;
    /** @type {?} */
    FormProperty.prototype._root;
    /** @type {?} */
    FormProperty.prototype._parent;
    /** @type {?} */
    FormProperty.prototype._path;
    /** @type {?} */
    FormProperty.prototype.options;
    /**
     * 设置值
     *
     * @abstract
     * @param {?} value
     * @param {?} onlySelf `true` 只对当前字段更新值和校验；`false` 包含上级字段
     * @return {?}
     */
    FormProperty.prototype.setValue = function (value, onlySelf) { };
    /**
     * 重置值，默认值为 `schema.default`
     *
     * @abstract
     * @param {?} value
     * @param {?} onlySelf `true` 只对当前字段更新值和校验；`false` 包含上级字段
     * @return {?}
     */
    FormProperty.prototype.resetValue = function (value, onlySelf) { };
    /**
     * \@internal
     * @abstract
     * @return {?}
     */
    FormProperty.prototype._hasValue = function () { };
    /**
     * \@internal
     * @abstract
     * @return {?}
     */
    FormProperty.prototype._updateValue = function () { };
}
/**
 * @abstract
 */
var /**
 * @abstract
 */
PropertyGroup = /** @class */ (function (_super) {
    tslib_1.__extends(PropertyGroup, _super);
    function PropertyGroup() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.properties = null;
        return _this;
    }
    /**
     * @param {?} path
     * @return {?}
     */
    PropertyGroup.prototype.getProperty = /**
     * @param {?} path
     * @return {?}
     */
    function (path) {
        /** @type {?} */
        var subPathIdx = path.indexOf('/');
        /** @type {?} */
        var propertyId = subPathIdx !== -1 ? path.substr(0, subPathIdx) : path;
        /** @type {?} */
        var property = this.properties[propertyId];
        if (property !== null && subPathIdx !== -1 && property instanceof PropertyGroup) {
            /** @type {?} */
            var subPath = path.substr(subPathIdx + 1);
            property = ((/** @type {?} */ (property))).getProperty(subPath);
        }
        return property;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    PropertyGroup.prototype.forEachChild = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        for (var propertyId in this.properties) {
            if (this.properties.hasOwnProperty(propertyId)) {
                /** @type {?} */
                var property = this.properties[propertyId];
                fn(property, propertyId);
            }
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    PropertyGroup.prototype.forEachChildRecursive = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.forEachChild(function (child) {
            fn(child);
            if (child instanceof PropertyGroup) {
                ((/** @type {?} */ (child))).forEachChildRecursive(fn);
            }
        });
    };
    /**
     * @return {?}
     */
    PropertyGroup.prototype._bindVisibility = /**
     * @return {?}
     */
    function () {
        _super.prototype._bindVisibility.call(this);
        this._bindVisibilityRecursive();
    };
    /**
     * @return {?}
     */
    PropertyGroup.prototype._bindVisibilityRecursive = /**
     * @return {?}
     */
    function () {
        this.forEachChildRecursive(function (property) {
            property._bindVisibility();
        });
    };
    /**
     * @return {?}
     */
    PropertyGroup.prototype.isRoot = /**
     * @return {?}
     */
    function () {
        return this === this.root;
    };
    return PropertyGroup;
}(FormProperty));
/**
 * @abstract
 */
export { PropertyGroup };
if (false) {
    /** @type {?} */
    PropertyGroup.prototype.properties;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5wcm9wZXJ0eS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9mb3JtLyIsInNvdXJjZXMiOlsic3JjL21vZGVsL2Zvcm0ucHJvcGVydHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsYUFBYSxFQUFFLGVBQWUsRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBTzNELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxVQUFVLENBQUM7Ozs7QUFJbkM7Ozs7SUFpQkUsc0JBQ0Usc0JBQThDLEVBQzlDLE1BQWdCLEVBQ2hCLEVBQStCLEVBQy9CLFFBQVksRUFDWixNQUFxQixFQUNyQixJQUFZLEVBQ0osT0FBd0I7UUFBeEIsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7UUFuQmxDLFdBQU0sR0FBWSxJQUFJLENBQUM7UUFFZixZQUFPLEdBQWdCLElBQUksQ0FBQztRQUMxQixlQUFVLEdBQW1DLEVBQUUsQ0FBQztRQUNsRCxrQkFBYSxHQUFHLElBQUksZUFBZSxDQUFVLElBQUksQ0FBQyxDQUFDO1FBQ25ELG1CQUFjLEdBQUcsSUFBSSxlQUFlLENBQWMsSUFBSSxDQUFDLENBQUM7UUFDeEQsYUFBUSxHQUFHLElBQUksQ0FBQztRQUNoQix1QkFBa0IsR0FBRyxJQUFJLGVBQWUsQ0FBVSxJQUFJLENBQUMsQ0FBQztRQWM5RCxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxlQUFlLEdBQUcsc0JBQXNCLENBQUMsaUJBQWlCLENBQUMsTUFBTSxFQUFFO1lBQ3RFLGNBQWMsRUFBRSxtQkFBQSxJQUFJLENBQUMsRUFBRSxDQUFDLGNBQWMsRUFBWTtZQUNsRCxLQUFLLEVBQUUsbUJBQUEsQ0FBQyxtQkFBQSxFQUFFLEVBQWtCLENB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RSxDQUFDO0lBQ2xDLENBQUM7Ozs7SUFFTyxnREFBd0I7OztJQUFoQztRQUNFLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxVQUFBLFFBQVE7WUFDakMsUUFBUSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQzdCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELDhCQUFNOzs7SUFBTjtRQUNFLE9BQU8sSUFBSSxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDNUIsQ0FBQztJQUNILG9CQUFDO0FBQUQsQ0FBQyxBQS9DRCxDQUE0QyxZQUFZLEdBK0N2RDs7Ozs7OztJQTlDQyxtQ0FBb0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IERlbG9uRm9ybUNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZyc7XG5pbXBvcnQgeyBFcnJvckRhdGEgfSBmcm9tICcuLi9lcnJvcnMnO1xuaW1wb3J0IHsgU0ZWYWx1ZSB9IGZyb20gJy4uL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBTRlNjaGVtYSB9IGZyb20gJy4uL3NjaGVtYSc7XG5pbXBvcnQgeyBTRlVJU2NoZW1hLCBTRlVJU2NoZW1hSXRlbSwgU0ZVSVNjaGVtYUl0ZW1SdW4gfSBmcm9tICcuLi9zY2hlbWEvdWknO1xuaW1wb3J0IHsgaXNCbGFuayB9IGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7IFNjaGVtYVZhbGlkYXRvckZhY3RvcnkgfSBmcm9tICcuLi92YWxpZGF0b3IuZmFjdG9yeSc7XG5pbXBvcnQgeyBXaWRnZXQgfSBmcm9tICcuLi93aWRnZXQnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRm9ybVByb3BlcnR5IHtcbiAgc2NoZW1hVmFsaWRhdG9yOiAodmFsdWU6IFNGVmFsdWUpID0+IEVycm9yRGF0YVtdO1xuICBzY2hlbWE6IFNGU2NoZW1hO1xuICB1aTogU0ZVSVNjaGVtYSB8IFNGVUlTY2hlbWFJdGVtUnVuO1xuICBmb3JtRGF0YToge307XG4gIF92YWx1ZTogU0ZWYWx1ZSA9IG51bGw7XG4gIHdpZGdldDogV2lkZ2V0PEZvcm1Qcm9wZXJ0eT47XG4gIHByaXZhdGUgX2Vycm9yczogRXJyb3JEYXRhW10gPSBudWxsO1xuICBwcm90ZWN0ZWQgX29iakVycm9yczogeyBba2V5OiBzdHJpbmddOiBFcnJvckRhdGFbXSB9ID0ge307XG4gIHByaXZhdGUgX3ZhbHVlQ2hhbmdlcyA9IG5ldyBCZWhhdmlvclN1YmplY3Q8U0ZWYWx1ZT4obnVsbCk7XG4gIHByaXZhdGUgX2Vycm9yc0NoYW5nZXMgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PEVycm9yRGF0YVtdPihudWxsKTtcbiAgcHJpdmF0ZSBfdmlzaWJsZSA9IHRydWU7XG4gIHByaXZhdGUgX3Zpc2liaWxpdHlDaGFuZ2VzID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPih0cnVlKTtcbiAgcHJpdmF0ZSBfcm9vdDogUHJvcGVydHlHcm91cDtcbiAgcHJpdmF0ZSBfcGFyZW50OiBQcm9wZXJ0eUdyb3VwO1xuICBwcml2YXRlIF9wYXRoOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgc2NoZW1hVmFsaWRhdG9yRmFjdG9yeTogU2NoZW1hVmFsaWRhdG9yRmFjdG9yeSxcbiAgICBzY2hlbWE6IFNGU2NoZW1hLFxuICAgIHVpOiBTRlVJU2NoZW1hIHwgU0ZVSVNjaGVtYUl0ZW0sXG4gICAgZm9ybURhdGE6IHt9LFxuICAgIHBhcmVudDogUHJvcGVydHlHcm91cCxcbiAgICBwYXRoOiBzdHJpbmcsXG4gICAgcHJpdmF0ZSBvcHRpb25zOiBEZWxvbkZvcm1Db25maWcsXG4gICkge1xuICAgIHRoaXMuc2NoZW1hID0gc2NoZW1hO1xuICAgIHRoaXMudWkgPSB1aTtcbiAgICB0aGlzLnNjaGVtYVZhbGlkYXRvciA9IHNjaGVtYVZhbGlkYXRvckZhY3RvcnkuY3JlYXRlVmFsaWRhdG9yRm4oc2NoZW1hLCB7XG4gICAgICBpbmdvcmVLZXl3b3JkczogdGhpcy51aS5pbmdvcmVLZXl3b3JkcyBhcyBzdHJpbmdbXSxcbiAgICAgIGRlYnVnOiAodWkgYXMgU0ZVSVNjaGVtYUl0ZW0pIS5kZWJ1ZyxcbiAgICB9KTtcbiAgICB0aGlzLmZvcm1EYXRhID0gZm9ybURhdGEgfHwgc2NoZW1hLmRlZmF1bHQ7XG4gICAgdGhpcy5fcGFyZW50ID0gcGFyZW50O1xuICAgIGlmIChwYXJlbnQpIHtcbiAgICAgIHRoaXMuX3Jvb3QgPSBwYXJlbnQucm9vdDtcbiAgICB9IGVsc2UgaWYgKHRoaXMgaW5zdGFuY2VvZiBQcm9wZXJ0eUdyb3VwKSB7XG4gICAgICB0aGlzLl9yb290ID0gdGhpcyBhcyBQcm9wZXJ0eUdyb3VwO1xuICAgIH1cbiAgICB0aGlzLl9wYXRoID0gcGF0aDtcbiAgfVxuXG4gIGdldCB2YWx1ZUNoYW5nZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlQ2hhbmdlcztcbiAgfVxuXG4gIGdldCBlcnJvcnNDaGFuZ2VzKCkge1xuICAgIHJldHVybiB0aGlzLl9lcnJvcnNDaGFuZ2VzO1xuICB9XG5cbiAgZ2V0IHR5cGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5zY2hlbWEudHlwZTtcbiAgfVxuXG4gIGdldCBwYXJlbnQoKTogUHJvcGVydHlHcm91cCB7XG4gICAgcmV0dXJuIHRoaXMuX3BhcmVudDtcbiAgfVxuXG4gIGdldCByb290KCk6IFByb3BlcnR5R3JvdXAge1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgICByZXR1cm4gdGhpcy5fcm9vdCB8fCAoKHRoaXMgYXMgYW55KSBhcyBQcm9wZXJ0eUdyb3VwKTtcbiAgfVxuXG4gIGdldCBwYXRoKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3BhdGg7XG4gIH1cblxuICBnZXQgdmFsdWUoKTogU0ZWYWx1ZSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICB9XG5cbiAgZ2V0IGVycm9ycygpOiBFcnJvckRhdGFbXSB7XG4gICAgcmV0dXJuIHRoaXMuX2Vycm9ycztcbiAgfVxuXG4gIGdldCB2aXNpYmxlKCkge1xuICAgIHJldHVybiB0aGlzLl92aXNpYmxlO1xuICB9XG5cbiAgZ2V0IHZhbGlkKCkge1xuICAgIHJldHVybiB0aGlzLl9lcnJvcnMgPT09IG51bGwgfHwgdGhpcy5fZXJyb3JzLmxlbmd0aCA9PT0gMDtcbiAgfVxuXG4gIC8qKlxuICAgKiDorr7nva7lgLxcbiAgICpcbiAgICogQHBhcmFtIG9ubHlTZWxmIGB0cnVlYCDlj6rlr7nlvZPliY3lrZfmrrXmm7TmlrDlgLzlkozmoKHpqozvvJtgZmFsc2VgIOWMheWQq+S4iue6p+Wtl+autVxuICAgKi9cbiAgYWJzdHJhY3Qgc2V0VmFsdWUodmFsdWU6IFNGVmFsdWUsIG9ubHlTZWxmOiBib29sZWFuKTogdm9pZDtcblxuICAvKipcbiAgICog6YeN572u5YC877yM6buY6K6k5YC85Li6IGBzY2hlbWEuZGVmYXVsdGBcbiAgICpcbiAgICogQHBhcmFtIG9ubHlTZWxmIGB0cnVlYCDlj6rlr7nlvZPliY3lrZfmrrXmm7TmlrDlgLzlkozmoKHpqozvvJtgZmFsc2VgIOWMheWQq+S4iue6p+Wtl+autVxuICAgKi9cbiAgYWJzdHJhY3QgcmVzZXRWYWx1ZSh2YWx1ZTogU0ZWYWx1ZSwgb25seVNlbGY6IGJvb2xlYW4pOiB2b2lkO1xuXG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGFic3RyYWN0IF9oYXNWYWx1ZSgpOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiAgQGludGVybmFsXG4gICAqL1xuICBhYnN0cmFjdCBfdXBkYXRlVmFsdWUoKTogdm9pZDtcblxuICAvKipcbiAgICog5pu05paw5YC85LiU5qCh6aqM5pWw5o2uXG4gICAqXG4gICAqIEBwYXJhbSBbb25seVNlbGY9ZmFsc2VdIOaYr+WQpuWMheWQq+S4iue6p+Wtl+autVxuICAgKiBAcGFyYW0gW2VtaXRWYWx1ZUV2ZW50PXRydWVdIOaYr+WQpuinpuWPkeWAvOWPmOabtOmAmuefpVxuICAgKi9cbiAgdXBkYXRlVmFsdWVBbmRWYWxpZGl0eShvbmx5U2VsZiA9IGZhbHNlLCBlbWl0VmFsdWVFdmVudCA9IHRydWUsIGVtaXRWYWxpZGF0b3IgPSB0cnVlKSB7XG4gICAgdGhpcy5fdXBkYXRlVmFsdWUoKTtcblxuICAgIGlmIChlbWl0VmFsdWVFdmVudCkge1xuICAgICAgdGhpcy52YWx1ZUNoYW5nZXMubmV4dCh0aGlzLnZhbHVlKTtcbiAgICB9XG5cbiAgICAvLyBgZW1pdFZhbGlkYXRvcmAg5q+P5LiA5qyh5pWw5o2u5Y+Y5pu05bey57uP5YyF5ZCr5a6M5pW06ZSZ6K+v6ZO+6Lev77yM5ZCO57ut54i26IqC54K55pWw5o2u5Y+Y5pu05peg6aG75YaN6Kem5Y+R5qCh6aqMXG4gICAgaWYgKGVtaXRWYWxpZGF0b3IgJiYgdGhpcy51aS5saXZlVmFsaWRhdGUgPT09IHRydWUpIHtcbiAgICAgIHRoaXMuX3J1blZhbGlkYXRpb24oKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wYXJlbnQgJiYgIW9ubHlTZWxmKSB7XG4gICAgICB0aGlzLnBhcmVudC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KG9ubHlTZWxmLCBlbWl0VmFsdWVFdmVudCwgZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiDmoLnmja7ot6/lvoTmkJzntKLooajljZXlsZ7mgKcgKi9cbiAgc2VhcmNoUHJvcGVydHkocGF0aDogc3RyaW5nKTogRm9ybVByb3BlcnR5IHtcbiAgICBsZXQgcHJvcDogRm9ybVByb3BlcnR5ID0gdGhpcztcbiAgICBsZXQgYmFzZTogUHJvcGVydHlHcm91cCA9IG51bGw7XG5cbiAgICBsZXQgcmVzdWx0ID0gbnVsbDtcbiAgICBpZiAocGF0aFswXSA9PT0gJy8nKSB7XG4gICAgICBiYXNlID0gdGhpcy5maW5kUm9vdCgpO1xuICAgICAgcmVzdWx0ID0gYmFzZS5nZXRQcm9wZXJ0eShwYXRoLnN1YnN0cigxKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdoaWxlIChyZXN1bHQgPT09IG51bGwgJiYgcHJvcC5wYXJlbnQgIT09IG51bGwpIHtcbiAgICAgICAgcHJvcCA9IGJhc2UgPSBwcm9wLnBhcmVudDtcbiAgICAgICAgcmVzdWx0ID0gYmFzZS5nZXRQcm9wZXJ0eShwYXRoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8qKiDmn6Xmib7moLnooajljZXlsZ7mgKcgKi9cbiAgZmluZFJvb3QoKTogUHJvcGVydHlHcm91cCB7XG4gICAgbGV0IHByb3BlcnR5OiBGb3JtUHJvcGVydHkgPSB0aGlzO1xuICAgIHdoaWxlIChwcm9wZXJ0eS5wYXJlbnQgIT09IG51bGwpIHtcbiAgICAgIHByb3BlcnR5ID0gcHJvcGVydHkucGFyZW50O1xuICAgIH1cbiAgICByZXR1cm4gcHJvcGVydHkgYXMgUHJvcGVydHlHcm91cDtcbiAgfVxuXG4gIC8vICNyZWdpb24gcHJvY2VzcyBlcnJvcnNcblxuICBwcml2YXRlIGlzRW1wdHlEYXRhKHZhbHVlOiB7fSkge1xuICAgIGlmIChpc0JsYW5rKHZhbHVlKSkgcmV0dXJuIHRydWU7XG4gICAgc3dpdGNoICh0aGlzLnR5cGUpIHtcbiAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgIHJldHVybiAoJycgKyB2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogQGludGVybmFsXG4gICAqL1xuICBfcnVuVmFsaWRhdGlvbigpIHtcbiAgICBsZXQgZXJyb3JzOiBFcnJvckRhdGFbXTtcbiAgICAvLyBUaGUgZGVmaW5pdGlvbiBvZiBzb21lIHJ1bGVzOlxuICAgIC8vIDEuIFNob3VsZCBub3QgYWp2IHZhbGlkYXRvciB3aGVuIGlzIGVtcHR5IGRhdGEgYW5kIHJlcXVpcmVkIGZpZWxkc1xuICAgIC8vIDIuIFNob3VsZCBub3QgYWp2IHZhbGlkYXRvciB3aGVuIGlzIGVtcHR5IGRhdGFcbiAgICBjb25zdCBpc0VtcHR5ID0gdGhpcy5pc0VtcHR5RGF0YSh0aGlzLl92YWx1ZSk7XG4gICAgaWYgKGlzRW1wdHkgJiYgdGhpcy51aS5fcmVxdWlyZWQpIHtcbiAgICAgIGVycm9ycyA9IFt7IGtleXdvcmQ6ICdyZXF1aXJlZCcgfV07XG4gICAgfSBlbHNlIGlmIChpc0VtcHR5KSB7XG4gICAgICBlcnJvcnMgPSBbXTtcbiAgICB9IGVsc2Uge1xuICAgICAgZXJyb3JzID0gdGhpcy5zY2hlbWFWYWxpZGF0b3IodGhpcy5fdmFsdWUpIHx8IFtdO1xuICAgIH1cbiAgICBjb25zdCBjdXN0b21WYWxpZGF0b3IgPSAodGhpcy51aSBhcyBTRlVJU2NoZW1hSXRlbVJ1bikudmFsaWRhdG9yO1xuICAgIGlmICh0eXBlb2YgY3VzdG9tVmFsaWRhdG9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zdCBjdXN0b21FcnJvcnMgPSBjdXN0b21WYWxpZGF0b3IodGhpcy52YWx1ZSwgdGhpcywgdGhpcy5maW5kUm9vdCgpKTtcbiAgICAgIGlmIChjdXN0b21FcnJvcnMgaW5zdGFuY2VvZiBPYnNlcnZhYmxlKSB7XG4gICAgICAgIGN1c3RvbUVycm9ycy5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgICB0aGlzLnNldEN1c3RvbUVycm9ycyhlcnJvcnMsIHJlcyk7XG4gICAgICAgICAgdGhpcy53aWRnZXQuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5zZXRDdXN0b21FcnJvcnMoZXJyb3JzLCBjdXN0b21FcnJvcnMpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX2Vycm9ycyA9IGVycm9ycztcbiAgICB0aGlzLnNldEVycm9ycyh0aGlzLl9lcnJvcnMpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRDdXN0b21FcnJvcnMoZXJyb3JzOiBFcnJvckRhdGFbXSwgbGlzdDogRXJyb3JEYXRhW10pIHtcbiAgICAvLyBmaXggZXJyb3IgZm9ybWF0XG4gICAgY29uc3QgaGFzQ3VzdG9tRXJyb3IgPSBsaXN0ICE9IG51bGwgJiYgbGlzdC5sZW5ndGggPiAwO1xuICAgIGlmIChoYXNDdXN0b21FcnJvcikge1xuICAgICAgbGlzdC5mb3JFYWNoKChlcnIsIGlkeDogbnVtYmVyKSA9PiB7XG4gICAgICAgIGlmICghZXJyLm1lc3NhZ2UpXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgY3VzdG9tIHZhbGlkYXRvciBtdXN0IGNvbnRhaW4gYSAnbWVzc2FnZScgYXR0cmlidXRlIHRvIHZpZXdlZCBlcnJvciB0ZXh0YCk7XG4gICAgICAgIGVyci5fY3VzdG9tID0gdHJ1ZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLl9lcnJvcnMgPSB0aGlzLm1lcmdlRXJyb3JzKGVycm9ycywgbGlzdCk7XG4gICAgdGhpcy5zZXRFcnJvcnModGhpcy5fZXJyb3JzKTtcbiAgfVxuXG4gIHByaXZhdGUgbWVyZ2VFcnJvcnMoZXJyb3JzOiBFcnJvckRhdGFbXSwgbmV3RXJyb3JzOiBFcnJvckRhdGEgfCBFcnJvckRhdGFbXSkge1xuICAgIGlmIChuZXdFcnJvcnMpIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KG5ld0Vycm9ycykpIHtcbiAgICAgICAgZXJyb3JzID0gZXJyb3JzLmNvbmNhdCguLi5uZXdFcnJvcnMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZXJyb3JzLnB1c2gobmV3RXJyb3JzKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGVycm9ycztcbiAgfVxuXG4gIHByb3RlY3RlZCBzZXRFcnJvcnMoZXJyb3JzOiBFcnJvckRhdGFbXSwgZW1pdEZvcm1hdCA9IHRydWUpIHtcbiAgICBpZiAoZW1pdEZvcm1hdCAmJiBlcnJvcnMgJiYgIXRoaXMudWkub25seVZpc3VhbCkge1xuICAgICAgZXJyb3JzID0gZXJyb3JzLm1hcCgoZXJyOiBFcnJvckRhdGEpID0+IHtcbiAgICAgICAgbGV0IG1lc3NhZ2UgPVxuICAgICAgICAgIGVyci5fY3VzdG9tID09PSB0cnVlICYmIGVyci5tZXNzYWdlXG4gICAgICAgICAgICA/IGVyci5tZXNzYWdlXG4gICAgICAgICAgICA6ICh0aGlzLnVpLmVycm9ycyB8fCB7fSlbZXJyLmtleXdvcmRdIHx8IHRoaXMub3B0aW9ucy5lcnJvcnNbZXJyLmtleXdvcmRdIHx8IGBgO1xuXG4gICAgICAgIGlmIChtZXNzYWdlICYmIHR5cGVvZiBtZXNzYWdlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgbWVzc2FnZSA9IG1lc3NhZ2UoZXJyKSBhcyBzdHJpbmc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobWVzc2FnZSkge1xuICAgICAgICAgIGlmICh+KG1lc3NhZ2UgYXMgc3RyaW5nKS5pbmRleE9mKCd7JykpIHtcbiAgICAgICAgICAgIG1lc3NhZ2UgPSAobWVzc2FnZSBhcyBzdHJpbmcpLnJlcGxhY2UoXG4gICAgICAgICAgICAgIC97KFtcXC5hLXowLTldKyl9L2csXG4gICAgICAgICAgICAgICh2OiBzdHJpbmcsIGtleTogc3RyaW5nKSA9PiBlcnIucGFyYW1zW2tleV0gfHwgJycsXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlcnIubWVzc2FnZSA9IG1lc3NhZ2UgYXMgc3RyaW5nO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlcnI7XG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5fZXJyb3JzID0gZXJyb3JzO1xuICAgIHRoaXMuX2Vycm9yc0NoYW5nZXMubmV4dChlcnJvcnMpO1xuICAgIC8vIFNob3VsZCBzZW5kIGVycm9ycyB0byBwYXJlbnQgZmllbGRcbiAgICBpZiAodGhpcy5fcGFyZW50KSB7XG4gICAgICB0aGlzLl9wYXJlbnQuc2V0UGFyZW50QW5kUGxhdEVycm9ycyhlcnJvcnMsIHRoaXMucGF0aCk7XG4gICAgfVxuICB9XG5cbiAgc2V0UGFyZW50QW5kUGxhdEVycm9ycyhlcnJvcnM6IEVycm9yRGF0YVtdLCBwYXRoOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9vYmpFcnJvcnNbcGF0aF0gPSBlcnJvcnM7XG4gICAgY29uc3QgcGxhdEVycm9yczogRXJyb3JEYXRhW10gPSBbXTtcbiAgICBPYmplY3Qua2V5cyh0aGlzLl9vYmpFcnJvcnMpLmZvckVhY2gocCA9PiB7XG4gICAgICBjb25zdCBwcm9wZXJ0eSA9IHRoaXMuc2VhcmNoUHJvcGVydHkocCk7XG4gICAgICBpZiAocHJvcGVydHkgJiYgIXByb3BlcnR5LnZpc2libGUpIHJldHVybjtcbiAgICAgIHBsYXRFcnJvcnMucHVzaCguLi50aGlzLl9vYmpFcnJvcnNbcF0pO1xuICAgIH0pO1xuICAgIHRoaXMuc2V0RXJyb3JzKHBsYXRFcnJvcnMsIGZhbHNlKTtcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICAvLyAjcmVnaW9uIGNvbmRpdGlvblxuXG4gIHByaXZhdGUgc2V0VmlzaWJsZSh2aXNpYmxlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fdmlzaWJsZSA9IHZpc2libGU7XG4gICAgdGhpcy5fdmlzaWJpbGl0eUNoYW5nZXMubmV4dCh2aXNpYmxlKTtcbiAgICAvLyDpg6jliIbmlbDmja7mupDmnaXoh6ogcmVzZXRcbiAgICB0aGlzLnJlc2V0VmFsdWUodGhpcy52YWx1ZSwgdHJ1ZSk7XG4gIH1cblxuICAvLyBBIGZpZWxkIGlzIHZpc2libGUgaWYgQVQgTEVBU1QgT05FIG9mIHRoZSBwcm9wZXJ0aWVzIGl0IGRlcGVuZHMgb24gaXMgdmlzaWJsZSBBTkQgaGFzIGEgdmFsdWUgaW4gdGhlIGxpc3RcbiAgX2JpbmRWaXNpYmlsaXR5KCkge1xuICAgIGNvbnN0IHZpc2libGVJZiA9ICh0aGlzLnVpIGFzIFNGVUlTY2hlbWFJdGVtKS52aXNpYmxlSWY7XG4gICAgaWYgKHR5cGVvZiB2aXNpYmxlSWYgPT09ICdvYmplY3QnICYmIE9iamVjdC5rZXlzKHZpc2libGVJZikubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLnNldFZpc2libGUoZmFsc2UpO1xuICAgIH0gZWxzZSBpZiAodmlzaWJsZUlmICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IHByb3BlcnRpZXNCaW5kaW5nOiBBcnJheTxPYnNlcnZhYmxlPGJvb2xlYW4+PiA9IFtdO1xuICAgICAgZm9yIChjb25zdCBkZXBlbmRlbmN5UGF0aCBpbiB2aXNpYmxlSWYpIHtcbiAgICAgICAgaWYgKHZpc2libGVJZi5oYXNPd25Qcm9wZXJ0eShkZXBlbmRlbmN5UGF0aCkpIHtcbiAgICAgICAgICBjb25zdCBwcm9wZXJ0eSA9IHRoaXMuc2VhcmNoUHJvcGVydHkoZGVwZW5kZW5jeVBhdGgpO1xuICAgICAgICAgIGlmIChwcm9wZXJ0eSkge1xuICAgICAgICAgICAgY29uc3QgdmFsdWVDaGVjayA9IHByb3BlcnR5LnZhbHVlQ2hhbmdlcy5waXBlKFxuICAgICAgICAgICAgICBtYXAoKHZhbHVlOiBTRlZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmkgPSB2aXNpYmxlSWZbZGVwZW5kZW5jeVBhdGhdO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdmkgPT09ICdmdW5jdGlvbicpIHJldHVybiB2aSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgaWYgKHZpLmluZGV4T2YoJyRBTlkkJykgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUubGVuZ3RoID4gMDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHZpLmluZGV4T2YodmFsdWUpICE9PSAtMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNvbnN0IHZpc2liaWxpdHlDaGVjayA9IHByb3BlcnR5Ll92aXNpYmlsaXR5Q2hhbmdlcztcbiAgICAgICAgICAgIGNvbnN0IGFuZCA9IGNvbWJpbmVMYXRlc3QodmFsdWVDaGVjaywgdmlzaWJpbGl0eUNoZWNrKS5waXBlKFxuICAgICAgICAgICAgICBtYXAocmVzdWx0cyA9PiByZXN1bHRzWzBdICYmIHJlc3VsdHNbMV0pLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHByb3BlcnRpZXNCaW5kaW5nLnB1c2goYW5kKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICBgQ2FuJ3QgZmluZCBwcm9wZXJ0eSAke2RlcGVuZGVuY3lQYXRofSBmb3IgdmlzaWJpbGl0eSBjaGVjayBvZiAke3RoaXMucGF0aH1gLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29tYmluZUxhdGVzdChwcm9wZXJ0aWVzQmluZGluZylcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKHZhbHVlcyA9PiB2YWx1ZXMuaW5kZXhPZih0cnVlKSAhPT0gLTEpLFxuICAgICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgICAgIClcbiAgICAgICAgLnN1YnNjcmliZSh2aXNpYmxlID0+IHRoaXMuc2V0VmlzaWJsZSh2aXNpYmxlKSk7XG4gICAgfVxuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxufVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgUHJvcGVydHlHcm91cCBleHRlbmRzIEZvcm1Qcm9wZXJ0eSB7XG4gIHByb3BlcnRpZXM6IHsgW2tleTogc3RyaW5nXTogRm9ybVByb3BlcnR5IH0gfCBGb3JtUHJvcGVydHlbXSA9IG51bGw7XG5cbiAgZ2V0UHJvcGVydHkocGF0aDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc3ViUGF0aElkeCA9IHBhdGguaW5kZXhPZignLycpO1xuICAgIGNvbnN0IHByb3BlcnR5SWQgPSBzdWJQYXRoSWR4ICE9PSAtMSA/IHBhdGguc3Vic3RyKDAsIHN1YlBhdGhJZHgpIDogcGF0aDtcblxuICAgIGxldCBwcm9wZXJ0eSA9IHRoaXMucHJvcGVydGllc1twcm9wZXJ0eUlkXTtcbiAgICBpZiAocHJvcGVydHkgIT09IG51bGwgJiYgc3ViUGF0aElkeCAhPT0gLTEgJiYgcHJvcGVydHkgaW5zdGFuY2VvZiBQcm9wZXJ0eUdyb3VwKSB7XG4gICAgICBjb25zdCBzdWJQYXRoID0gcGF0aC5zdWJzdHIoc3ViUGF0aElkeCArIDEpO1xuICAgICAgcHJvcGVydHkgPSAocHJvcGVydHkgYXMgUHJvcGVydHlHcm91cCkuZ2V0UHJvcGVydHkoc3ViUGF0aCk7XG4gICAgfVxuICAgIHJldHVybiBwcm9wZXJ0eTtcbiAgfVxuXG4gIGZvckVhY2hDaGlsZChmbjogKGZvcm1Qcm9wZXJ0eTogRm9ybVByb3BlcnR5LCBzdHI6IHN0cmluZykgPT4gdm9pZCkge1xuICAgIGZvciAoY29uc3QgcHJvcGVydHlJZCBpbiB0aGlzLnByb3BlcnRpZXMpIHtcbiAgICAgIGlmICh0aGlzLnByb3BlcnRpZXMuaGFzT3duUHJvcGVydHkocHJvcGVydHlJZCkpIHtcbiAgICAgICAgY29uc3QgcHJvcGVydHkgPSB0aGlzLnByb3BlcnRpZXNbcHJvcGVydHlJZF07XG4gICAgICAgIGZuKHByb3BlcnR5LCBwcm9wZXJ0eUlkKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmb3JFYWNoQ2hpbGRSZWN1cnNpdmUoZm46IChmb3JtUHJvcGVydHk6IEZvcm1Qcm9wZXJ0eSkgPT4gdm9pZCkge1xuICAgIHRoaXMuZm9yRWFjaENoaWxkKGNoaWxkID0+IHtcbiAgICAgIGZuKGNoaWxkKTtcbiAgICAgIGlmIChjaGlsZCBpbnN0YW5jZW9mIFByb3BlcnR5R3JvdXApIHtcbiAgICAgICAgKGNoaWxkIGFzIFByb3BlcnR5R3JvdXApLmZvckVhY2hDaGlsZFJlY3Vyc2l2ZShmbik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBfYmluZFZpc2liaWxpdHkoKSB7XG4gICAgc3VwZXIuX2JpbmRWaXNpYmlsaXR5KCk7XG4gICAgdGhpcy5fYmluZFZpc2liaWxpdHlSZWN1cnNpdmUoKTtcbiAgfVxuXG4gIHByaXZhdGUgX2JpbmRWaXNpYmlsaXR5UmVjdXJzaXZlKCkge1xuICAgIHRoaXMuZm9yRWFjaENoaWxkUmVjdXJzaXZlKHByb3BlcnR5ID0+IHtcbiAgICAgIHByb3BlcnR5Ll9iaW5kVmlzaWJpbGl0eSgpO1xuICAgIH0pO1xuICB9XG5cbiAgaXNSb290KCkge1xuICAgIHJldHVybiB0aGlzID09PSB0aGlzLnJvb3Q7XG4gIH1cbn1cbiJdfQ==