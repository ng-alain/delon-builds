/**
 * @fileoverview added by tsickle
 * Generated from: src/model/form.property.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __extends, __read, __spread } from "tslib";
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { SF_SEQ } from '../const';
import { isBlank } from '../utils';
/**
 * @abstract
 */
var /**
 * @abstract
 */
FormProperty = /** @class */ (function () {
    function FormProperty(schemaValidatorFactory, schema, ui, formData, parent, path, _options) {
        this._options = _options;
        this._errors = null;
        this._valueChanges = new BehaviorSubject(null);
        this._errorsChanges = new BehaviorSubject(null);
        this._visible = true;
        this._visibilityChanges = new BehaviorSubject(true);
        this._objErrors = {};
        this._value = null;
        this.schema = schema;
        this.ui = ui;
        this.schemaValidator = schemaValidatorFactory.createValidatorFn(schema, {
            ingoreKeywords: (/** @type {?} */ (this.ui.ingoreKeywords)),
            debug: (/** @type {?} */ ((/** @type {?} */ (((/** @type {?} */ (ui))))).debug)),
        });
        this.formData = formData || schema.default;
        this._parent = parent;
        if (parent) {
            this._root = parent.root;
        }
        else {
            this._root = (/** @type {?} */ (this));
        }
        this.path = path;
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
            return (/** @type {?} */ (this.schema.type));
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
            return this._root;
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
    Object.defineProperty(FormProperty.prototype, "options", {
        get: /**
         * @return {?}
         */
        function () {
            return this._options;
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
        if (path[0] === SF_SEQ) {
            base = this.findRoot();
            result = base.getProperty(path.substr(1));
        }
        else {
            while (result === null && prop.parent !== null) {
                prop = base = prop.parent;
                result = base.getProperty(path);
            }
        }
        return (/** @type {?} */ (result));
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
     * @private
     * @param {?} value
     * @return {?}
     */
    FormProperty.prototype.isEmptyData = 
    // #region process errors
    /**
     * @private
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
                customErrors.subscribe((/**
                 * @param {?} res
                 * @return {?}
                 */
                function (res) {
                    _this.setCustomErrors(errors, res);
                    _this.widget.detectChanges();
                }));
                return;
            }
            this.setCustomErrors(errors, customErrors);
            return;
        }
        this._errors = errors;
        this.setErrors(this._errors);
    };
    /**
     * @private
     * @param {?} errors
     * @param {?} list
     * @return {?}
     */
    FormProperty.prototype.setCustomErrors = /**
     * @private
     * @param {?} errors
     * @param {?} list
     * @return {?}
     */
    function (errors, list) {
        // fix error format
        /** @type {?} */
        var hasCustomError = list != null && list.length > 0;
        if (hasCustomError) {
            list.forEach((/**
             * @param {?} err
             * @return {?}
             */
            function (err) {
                if (!err.message) {
                    throw new Error("The custom validator must contain a 'message' attribute to viewed error text");
                }
                err._custom = true;
            }));
        }
        this._errors = this.mergeErrors(errors, list);
        this.setErrors(this._errors);
    };
    /**
     * @private
     * @param {?} errors
     * @param {?} newErrors
     * @return {?}
     */
    FormProperty.prototype.mergeErrors = /**
     * @private
     * @param {?} errors
     * @param {?} newErrors
     * @return {?}
     */
    function (errors, newErrors) {
        if (newErrors) {
            if (Array.isArray(newErrors)) {
                errors = errors.concat.apply(errors, __spread(newErrors));
            }
            else {
                errors.push(newErrors);
            }
        }
        return errors;
    };
    /**
     * @protected
     * @param {?} errors
     * @param {?=} emitFormat
     * @return {?}
     */
    FormProperty.prototype.setErrors = /**
     * @protected
     * @param {?} errors
     * @param {?=} emitFormat
     * @return {?}
     */
    function (errors, emitFormat) {
        var _this = this;
        if (emitFormat === void 0) { emitFormat = true; }
        if (emitFormat && errors && !this.ui.onlyVisual) {
            /** @type {?} */
            var l_1 = (this.widget && this.widget.l.error) || {};
            errors = errors.map((/**
             * @param {?} err
             * @return {?}
             */
            function (err) {
                /** @type {?} */
                var message = err._custom === true && err.message
                    ? err.message
                    : (_this.ui.errors || {})[err.keyword] || (/** @type {?} */ (_this._options.errors))[err.keyword] || l_1[err.keyword] || "";
                if (message && typeof message === 'function') {
                    message = (/** @type {?} */ (message(err)));
                }
                if (message) {
                    if (~((/** @type {?} */ (message))).indexOf('{')) {
                        message = ((/** @type {?} */ (message))).replace(/{([\.a-z0-9]+)}/g, (/**
                         * @param {?} _v
                         * @param {?} key
                         * @return {?}
                         */
                        function (_v, key) { return (/** @type {?} */ (err.params))[key] || ''; }));
                    }
                    err.message = (/** @type {?} */ (message));
                }
                return err;
            }));
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
        Object.keys(this._objErrors).forEach((/**
         * @param {?} p
         * @return {?}
         */
        function (p) {
            /** @type {?} */
            var property = _this.searchProperty(p);
            if (property && !property.visible)
                return;
            platErrors.push.apply(platErrors, __spread(_this._objErrors[p]));
        }));
        this.setErrors(platErrors, false);
    };
    // #endregion
    // #region condition
    // #endregion
    // #region condition
    /**
     * @private
     * @param {?} visible
     * @return {?}
     */
    FormProperty.prototype.setVisible = 
    // #endregion
    // #region condition
    /**
     * @private
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
                        var valueCheck = property.valueChanges.pipe(map((/**
                         * @param {?} value
                         * @return {?}
                         */
                        function (value) {
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
                        })));
                        /** @type {?} */
                        var visibilityCheck = property._visibilityChanges;
                        /** @type {?} */
                        var and = combineLatest([valueCheck, visibilityCheck]).pipe(map((/**
                         * @param {?} results
                         * @return {?}
                         */
                        function (results) { return results[0] && results[1]; })));
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
                .pipe(map((/**
             * @param {?} values
             * @return {?}
             */
            function (values) { return values.indexOf(true) !== -1; })), distinctUntilChanged())
                .subscribe((/**
             * @param {?} visible
             * @return {?}
             */
            function (visible) { return _this.setVisible(visible); }));
        }
    };
    return FormProperty;
}());
/**
 * @abstract
 */
export { FormProperty };
if (false) {
    /**
     * @type {?}
     * @private
     */
    FormProperty.prototype._errors;
    /**
     * @type {?}
     * @private
     */
    FormProperty.prototype._valueChanges;
    /**
     * @type {?}
     * @private
     */
    FormProperty.prototype._errorsChanges;
    /**
     * @type {?}
     * @private
     */
    FormProperty.prototype._visible;
    /**
     * @type {?}
     * @private
     */
    FormProperty.prototype._visibilityChanges;
    /**
     * @type {?}
     * @private
     */
    FormProperty.prototype._root;
    /**
     * @type {?}
     * @private
     */
    FormProperty.prototype._parent;
    /** @type {?} */
    FormProperty.prototype._objErrors;
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
    FormProperty.prototype.path;
    /**
     * @type {?}
     * @private
     */
    FormProperty.prototype._options;
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
    __extends(PropertyGroup, _super);
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
        var subPathIdx = path.indexOf(SF_SEQ);
        /** @type {?} */
        var propertyId = subPathIdx !== -1 ? path.substr(0, subPathIdx) : path;
        /** @type {?} */
        var property = ((/** @type {?} */ (this.properties)))[propertyId];
        if (property !== null && subPathIdx !== -1 && property instanceof PropertyGroup) {
            /** @type {?} */
            var subPath = path.substr(subPathIdx + 1);
            property = (/** @type {?} */ (((/** @type {?} */ (property))).getProperty(subPath)));
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
                var property = ((/** @type {?} */ (this.properties)))[propertyId];
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
        this.forEachChild((/**
         * @param {?} child
         * @return {?}
         */
        function (child) {
            fn(child);
            if (child instanceof PropertyGroup) {
                ((/** @type {?} */ (child))).forEachChildRecursive(fn);
            }
        }));
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
     * @private
     * @return {?}
     */
    PropertyGroup.prototype._bindVisibilityRecursive = /**
     * @private
     * @return {?}
     */
    function () {
        this.forEachChildRecursive((/**
         * @param {?} property
         * @return {?}
         */
        function (property) {
            property._bindVisibility();
        }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5wcm9wZXJ0eS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9mb3JtLyIsInNvdXJjZXMiOlsic3JjL21vZGVsL2Zvcm0ucHJvcGVydHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsT0FBTyxFQUFFLGVBQWUsRUFBRSxhQUFhLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBS2xDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxVQUFVLENBQUM7Ozs7QUFJbkM7Ozs7SUFpQkUsc0JBQ0Usc0JBQThDLEVBQzlDLE1BQWdCLEVBQ2hCLEVBQStCLEVBQy9CLFFBQVksRUFDWixNQUE0QixFQUM1QixJQUFZLEVBQ0osUUFBdUI7UUFBdkIsYUFBUSxHQUFSLFFBQVEsQ0FBZTtRQXZCekIsWUFBTyxHQUF1QixJQUFJLENBQUM7UUFDbkMsa0JBQWEsR0FBRyxJQUFJLGVBQWUsQ0FBVSxJQUFJLENBQUMsQ0FBQztRQUNuRCxtQkFBYyxHQUFHLElBQUksZUFBZSxDQUFxQixJQUFJLENBQUMsQ0FBQztRQUMvRCxhQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLHVCQUFrQixHQUFHLElBQUksZUFBZSxDQUFVLElBQUksQ0FBQyxDQUFDO1FBR2hFLGVBQVUsR0FBbUMsRUFBRSxDQUFDO1FBS2hELFdBQU0sR0FBWSxJQUFJLENBQUM7UUFhckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsZUFBZSxHQUFHLHNCQUFzQixDQUFDLGlCQUFpQixDQUFDLE1BQU0sRUFBRTtZQUN0RSxjQUFjLEVBQUUsbUJBQUEsSUFBSSxDQUFDLEVBQUUsQ0FBQyxjQUFjLEVBQVk7WUFD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QyxZQUFZOzs7O1FBQUMsVUFBQSxLQUFLO1lBQ3JCLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNWLElBQUksS0FBSyxZQUFZLGFBQWEsRUFBRTtnQkFDbEMsQ0FBQyxtQkFBQSxLQUFLLEVBQWlCLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUNwRDtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELHVDQUFlOzs7SUFBZjtRQUNFLGlCQUFNLGVBQWUsV0FBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO0lBQ2xDLENBQUM7Ozs7O0lBRU8sZ0RBQXdCOzs7O0lBQWhDO1FBQ0UsSUFBSSxDQUFDLHFCQUFxQjs7OztRQUFDLFVBQUEsUUFBUTtZQUNqQyxRQUFRLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDN0IsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsOEJBQU07OztJQUFOO1FBQ0UsT0FBTyxJQUFJLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQztJQUM1QixDQUFDO0lBQ0gsb0JBQUM7QUFBRCxDQUFDLEFBL0NELENBQTRDLFlBQVksR0ErQ3ZEOzs7Ozs7O0lBOUNDLG1DQUEyRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFsYWluU0ZDb25maWcgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIGNvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBTRl9TRVEgfSBmcm9tICcuLi9jb25zdCc7XG5pbXBvcnQgeyBFcnJvckRhdGEgfSBmcm9tICcuLi9lcnJvcnMnO1xuaW1wb3J0IHsgU0ZWYWx1ZSB9IGZyb20gJy4uL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBTRlNjaGVtYSwgU0ZTY2hlbWFUeXBlIH0gZnJvbSAnLi4vc2NoZW1hJztcbmltcG9ydCB7IFNGVUlTY2hlbWEsIFNGVUlTY2hlbWFJdGVtLCBTRlVJU2NoZW1hSXRlbVJ1biB9IGZyb20gJy4uL3NjaGVtYS91aSc7XG5pbXBvcnQgeyBpc0JsYW5rIH0gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgU2NoZW1hVmFsaWRhdG9yRmFjdG9yeSB9IGZyb20gJy4uL3ZhbGlkYXRvci5mYWN0b3J5JztcbmltcG9ydCB7IFdpZGdldCB9IGZyb20gJy4uL3dpZGdldCc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBGb3JtUHJvcGVydHkge1xuICBwcml2YXRlIF9lcnJvcnM6IEVycm9yRGF0YVtdIHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgX3ZhbHVlQ2hhbmdlcyA9IG5ldyBCZWhhdmlvclN1YmplY3Q8U0ZWYWx1ZT4obnVsbCk7XG4gIHByaXZhdGUgX2Vycm9yc0NoYW5nZXMgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PEVycm9yRGF0YVtdIHwgbnVsbD4obnVsbCk7XG4gIHByaXZhdGUgX3Zpc2libGUgPSB0cnVlO1xuICBwcml2YXRlIF92aXNpYmlsaXR5Q2hhbmdlcyA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4odHJ1ZSk7XG4gIHByaXZhdGUgX3Jvb3Q6IFByb3BlcnR5R3JvdXA7XG4gIHByaXZhdGUgX3BhcmVudDogUHJvcGVydHlHcm91cCB8IG51bGw7XG4gIF9vYmpFcnJvcnM6IHsgW2tleTogc3RyaW5nXTogRXJyb3JEYXRhW10gfSA9IHt9O1xuICBzY2hlbWFWYWxpZGF0b3I6ICh2YWx1ZTogU0ZWYWx1ZSkgPT4gRXJyb3JEYXRhW107XG4gIHNjaGVtYTogU0ZTY2hlbWE7XG4gIHVpOiBTRlVJU2NoZW1hIHwgU0ZVSVNjaGVtYUl0ZW1SdW47XG4gIGZvcm1EYXRhOiB7fTtcbiAgX3ZhbHVlOiBTRlZhbHVlID0gbnVsbDtcbiAgd2lkZ2V0OiBXaWRnZXQ8Rm9ybVByb3BlcnR5LCBTRlVJU2NoZW1hSXRlbT47XG4gIHBhdGg6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBzY2hlbWFWYWxpZGF0b3JGYWN0b3J5OiBTY2hlbWFWYWxpZGF0b3JGYWN0b3J5LFxuICAgIHNjaGVtYTogU0ZTY2hlbWEsXG4gICAgdWk6IFNGVUlTY2hlbWEgfCBTRlVJU2NoZW1hSXRlbSxcbiAgICBmb3JtRGF0YToge30sXG4gICAgcGFyZW50OiBQcm9wZXJ0eUdyb3VwIHwgbnVsbCxcbiAgICBwYXRoOiBzdHJpbmcsXG4gICAgcHJpdmF0ZSBfb3B0aW9uczogQWxhaW5TRkNvbmZpZyxcbiAgKSB7XG4gICAgdGhpcy5zY2hlbWEgPSBzY2hlbWE7XG4gICAgdGhpcy51aSA9IHVpO1xuICAgIHRoaXMuc2NoZW1hVmFsaWRhdG9yID0gc2NoZW1hVmFsaWRhdG9yRmFjdG9yeS5jcmVhdGVWYWxpZGF0b3JGbihzY2hlbWEsIHtcbiAgICAgIGluZ29yZUtleXdvcmRzOiB0aGlzLnVpLmluZ29yZUtleXdvcmRzIGFzIHN0cmluZ1tdLFxuICAgICAgZGVidWc6ICh1aSBhcyBTRlVJU2NoZW1hSXRlbSkhLmRlYnVnISxcbiAgICB9KTtcbiAgICB0aGlzLmZvcm1EYXRhID0gZm9ybURhdGEgfHwgc2NoZW1hLmRlZmF1bHQ7XG4gICAgdGhpcy5fcGFyZW50ID0gcGFyZW50O1xuICAgIGlmIChwYXJlbnQpIHtcbiAgICAgIHRoaXMuX3Jvb3QgPSBwYXJlbnQucm9vdDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fcm9vdCA9IHRoaXMgYXMgYW55O1xuICAgIH1cbiAgICB0aGlzLnBhdGggPSBwYXRoO1xuICB9XG5cbiAgZ2V0IHZhbHVlQ2hhbmdlcygpIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWVDaGFuZ2VzO1xuICB9XG5cbiAgZ2V0IGVycm9yc0NoYW5nZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Vycm9yc0NoYW5nZXM7XG4gIH1cblxuICBnZXQgdHlwZSgpOiBTRlNjaGVtYVR5cGUge1xuICAgIHJldHVybiB0aGlzLnNjaGVtYS50eXBlITtcbiAgfVxuXG4gIGdldCBwYXJlbnQoKTogUHJvcGVydHlHcm91cCB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLl9wYXJlbnQ7XG4gIH1cblxuICBnZXQgcm9vdCgpOiBQcm9wZXJ0eUdyb3VwIHtcbiAgICByZXR1cm4gdGhpcy5fcm9vdDtcbiAgfVxuXG4gIGdldCB2YWx1ZSgpOiBTRlZhbHVlIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cblxuICBnZXQgZXJyb3JzKCk6IEVycm9yRGF0YVtdIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuX2Vycm9ycztcbiAgfVxuXG4gIGdldCB2aXNpYmxlKCkge1xuICAgIHJldHVybiB0aGlzLl92aXNpYmxlO1xuICB9XG5cbiAgZ2V0IHZhbGlkKCkge1xuICAgIHJldHVybiB0aGlzLl9lcnJvcnMgPT09IG51bGwgfHwgdGhpcy5fZXJyb3JzLmxlbmd0aCA9PT0gMDtcbiAgfVxuXG4gIGdldCBvcHRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLl9vcHRpb25zO1xuICB9XG5cbiAgLyoqXG4gICAqIOiuvue9ruWAvFxuICAgKlxuICAgKiBAcGFyYW0gb25seVNlbGYgYHRydWVgIOWPquWvueW9k+WJjeWtl+auteabtOaWsOWAvOWSjOagoemqjO+8m2BmYWxzZWAg5YyF5ZCr5LiK57qn5a2X5q61XG4gICAqL1xuICBhYnN0cmFjdCBzZXRWYWx1ZSh2YWx1ZTogU0ZWYWx1ZSwgb25seVNlbGY6IGJvb2xlYW4pOiB2b2lkO1xuXG4gIC8qKlxuICAgKiDph43nva7lgLzvvIzpu5jorqTlgLzkuLogYHNjaGVtYS5kZWZhdWx0YFxuICAgKlxuICAgKiBAcGFyYW0gb25seVNlbGYgYHRydWVgIOWPquWvueW9k+WJjeWtl+auteabtOaWsOWAvOWSjOagoemqjO+8m2BmYWxzZWAg5YyF5ZCr5LiK57qn5a2X5q61XG4gICAqL1xuICBhYnN0cmFjdCByZXNldFZhbHVlKHZhbHVlOiBTRlZhbHVlLCBvbmx5U2VsZjogYm9vbGVhbik6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgYWJzdHJhY3QgX2hhc1ZhbHVlKCk6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqICBAaW50ZXJuYWxcbiAgICovXG4gIGFic3RyYWN0IF91cGRhdGVWYWx1ZSgpOiB2b2lkO1xuXG4gIC8qKlxuICAgKiDmm7TmlrDlgLzkuJTmoKHpqozmlbDmja5cbiAgICpcbiAgICogQHBhcmFtIFtvbmx5U2VsZj1mYWxzZV0g5piv5ZCm5YyF5ZCr5LiK57qn5a2X5q61XG4gICAqIEBwYXJhbSBbZW1pdFZhbHVlRXZlbnQ9dHJ1ZV0g5piv5ZCm6Kem5Y+R5YC85Y+Y5pu06YCa55+lXG4gICAqL1xuICB1cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KG9ubHlTZWxmID0gZmFsc2UsIGVtaXRWYWx1ZUV2ZW50ID0gdHJ1ZSwgZW1pdFZhbGlkYXRvciA9IHRydWUpIHtcbiAgICB0aGlzLl91cGRhdGVWYWx1ZSgpO1xuXG4gICAgaWYgKGVtaXRWYWx1ZUV2ZW50KSB7XG4gICAgICB0aGlzLnZhbHVlQ2hhbmdlcy5uZXh0KHRoaXMudmFsdWUpO1xuICAgIH1cblxuICAgIC8vIGBlbWl0VmFsaWRhdG9yYCDmr4/kuIDmrKHmlbDmja7lj5jmm7Tlt7Lnu4/ljIXlkKvlrozmlbTplJnor6/pk77ot6/vvIzlkI7nu63niLboioLngrnmlbDmja7lj5jmm7Tml6Dpobvlho3op6blj5HmoKHpqoxcbiAgICBpZiAoZW1pdFZhbGlkYXRvciAmJiB0aGlzLnVpLmxpdmVWYWxpZGF0ZSA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy5fcnVuVmFsaWRhdGlvbigpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnBhcmVudCAmJiAhb25seVNlbGYpIHtcbiAgICAgIHRoaXMucGFyZW50LnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkob25seVNlbGYsIGVtaXRWYWx1ZUV2ZW50LCBmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqIOagueaNrui3r+W+hOaQnOe0ouihqOWNleWxnuaApyAqL1xuICBzZWFyY2hQcm9wZXJ0eShwYXRoOiBzdHJpbmcpOiBGb3JtUHJvcGVydHkgfCBudWxsIHtcbiAgICBsZXQgcHJvcDogRm9ybVByb3BlcnR5ID0gdGhpcztcbiAgICBsZXQgYmFzZTogUHJvcGVydHlHcm91cCB8IG51bGwgPSBudWxsO1xuXG4gICAgbGV0IHJlc3VsdCA9IG51bGw7XG4gICAgaWYgKHBhdGhbMF0gPT09IFNGX1NFUSkge1xuICAgICAgYmFzZSA9IHRoaXMuZmluZFJvb3QoKTtcbiAgICAgIHJlc3VsdCA9IGJhc2UuZ2V0UHJvcGVydHkocGF0aC5zdWJzdHIoMSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB3aGlsZSAocmVzdWx0ID09PSBudWxsICYmIHByb3AucGFyZW50ICE9PSBudWxsKSB7XG4gICAgICAgIHByb3AgPSBiYXNlID0gcHJvcC5wYXJlbnQ7XG4gICAgICAgIHJlc3VsdCA9IGJhc2UuZ2V0UHJvcGVydHkocGF0aCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQhO1xuICB9XG5cbiAgLyoqIOafpeaJvuagueihqOWNleWxnuaApyAqL1xuICBmaW5kUm9vdCgpOiBQcm9wZXJ0eUdyb3VwIHtcbiAgICBsZXQgcHJvcGVydHk6IEZvcm1Qcm9wZXJ0eSA9IHRoaXM7XG4gICAgd2hpbGUgKHByb3BlcnR5LnBhcmVudCAhPT0gbnVsbCkge1xuICAgICAgcHJvcGVydHkgPSBwcm9wZXJ0eS5wYXJlbnQ7XG4gICAgfVxuICAgIHJldHVybiBwcm9wZXJ0eSBhcyBQcm9wZXJ0eUdyb3VwO1xuICB9XG5cbiAgLy8gI3JlZ2lvbiBwcm9jZXNzIGVycm9yc1xuXG4gIHByaXZhdGUgaXNFbXB0eURhdGEodmFsdWU6IHt9KSB7XG4gICAgaWYgKGlzQmxhbmsodmFsdWUpKSByZXR1cm4gdHJ1ZTtcbiAgICBzd2l0Y2ggKHRoaXMudHlwZSkge1xuICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgcmV0dXJuICgnJyArIHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIF9ydW5WYWxpZGF0aW9uKCkge1xuICAgIGxldCBlcnJvcnM6IEVycm9yRGF0YVtdO1xuICAgIC8vIFRoZSBkZWZpbml0aW9uIG9mIHNvbWUgcnVsZXM6XG4gICAgLy8gMS4gU2hvdWxkIG5vdCBhanYgdmFsaWRhdG9yIHdoZW4gaXMgZW1wdHkgZGF0YSBhbmQgcmVxdWlyZWQgZmllbGRzXG4gICAgLy8gMi4gU2hvdWxkIG5vdCBhanYgdmFsaWRhdG9yIHdoZW4gaXMgZW1wdHkgZGF0YVxuICAgIGNvbnN0IGlzRW1wdHkgPSB0aGlzLmlzRW1wdHlEYXRhKHRoaXMuX3ZhbHVlKTtcbiAgICBpZiAoaXNFbXB0eSAmJiB0aGlzLnVpLl9yZXF1aXJlZCkge1xuICAgICAgZXJyb3JzID0gW3sga2V5d29yZDogJ3JlcXVpcmVkJyB9XTtcbiAgICB9IGVsc2UgaWYgKGlzRW1wdHkpIHtcbiAgICAgIGVycm9ycyA9IFtdO1xuICAgIH0gZWxzZSB7XG4gICAgICBlcnJvcnMgPSB0aGlzLnNjaGVtYVZhbGlkYXRvcih0aGlzLl92YWx1ZSkgfHwgW107XG4gICAgfVxuICAgIGNvbnN0IGN1c3RvbVZhbGlkYXRvciA9ICh0aGlzLnVpIGFzIFNGVUlTY2hlbWFJdGVtUnVuKS52YWxpZGF0b3I7XG4gICAgaWYgKHR5cGVvZiBjdXN0b21WYWxpZGF0b3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnN0IGN1c3RvbUVycm9ycyA9IGN1c3RvbVZhbGlkYXRvcih0aGlzLnZhbHVlLCB0aGlzLCB0aGlzLmZpbmRSb290KCkpO1xuICAgICAgaWYgKGN1c3RvbUVycm9ycyBpbnN0YW5jZW9mIE9ic2VydmFibGUpIHtcbiAgICAgICAgY3VzdG9tRXJyb3JzLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0Q3VzdG9tRXJyb3JzKGVycm9ycywgcmVzKTtcbiAgICAgICAgICB0aGlzLndpZGdldC5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLnNldEN1c3RvbUVycm9ycyhlcnJvcnMsIGN1c3RvbUVycm9ycyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fZXJyb3JzID0gZXJyb3JzO1xuICAgIHRoaXMuc2V0RXJyb3JzKHRoaXMuX2Vycm9ycyk7XG4gIH1cblxuICBwcml2YXRlIHNldEN1c3RvbUVycm9ycyhlcnJvcnM6IEVycm9yRGF0YVtdLCBsaXN0OiBFcnJvckRhdGFbXSkge1xuICAgIC8vIGZpeCBlcnJvciBmb3JtYXRcbiAgICBjb25zdCBoYXNDdXN0b21FcnJvciA9IGxpc3QgIT0gbnVsbCAmJiBsaXN0Lmxlbmd0aCA+IDA7XG4gICAgaWYgKGhhc0N1c3RvbUVycm9yKSB7XG4gICAgICBsaXN0LmZvckVhY2goZXJyID0+IHtcbiAgICAgICAgaWYgKCFlcnIubWVzc2FnZSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGN1c3RvbSB2YWxpZGF0b3IgbXVzdCBjb250YWluIGEgJ21lc3NhZ2UnIGF0dHJpYnV0ZSB0byB2aWV3ZWQgZXJyb3IgdGV4dGApO1xuICAgICAgICB9XG4gICAgICAgIGVyci5fY3VzdG9tID0gdHJ1ZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLl9lcnJvcnMgPSB0aGlzLm1lcmdlRXJyb3JzKGVycm9ycywgbGlzdCk7XG4gICAgdGhpcy5zZXRFcnJvcnModGhpcy5fZXJyb3JzKTtcbiAgfVxuXG4gIHByaXZhdGUgbWVyZ2VFcnJvcnMoZXJyb3JzOiBFcnJvckRhdGFbXSwgbmV3RXJyb3JzOiBFcnJvckRhdGEgfCBFcnJvckRhdGFbXSkge1xuICAgIGlmIChuZXdFcnJvcnMpIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KG5ld0Vycm9ycykpIHtcbiAgICAgICAgZXJyb3JzID0gZXJyb3JzLmNvbmNhdCguLi5uZXdFcnJvcnMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZXJyb3JzLnB1c2gobmV3RXJyb3JzKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGVycm9ycztcbiAgfVxuXG4gIHByb3RlY3RlZCBzZXRFcnJvcnMoZXJyb3JzOiBFcnJvckRhdGFbXSwgZW1pdEZvcm1hdCA9IHRydWUpIHtcbiAgICBpZiAoZW1pdEZvcm1hdCAmJiBlcnJvcnMgJiYgIXRoaXMudWkub25seVZpc3VhbCkge1xuICAgICAgY29uc3QgbCA9ICh0aGlzLndpZGdldCAmJiB0aGlzLndpZGdldC5sLmVycm9yKSB8fCB7fTtcbiAgICAgIGVycm9ycyA9IGVycm9ycy5tYXAoKGVycjogRXJyb3JEYXRhKSA9PiB7XG4gICAgICAgIGxldCBtZXNzYWdlID1cbiAgICAgICAgICBlcnIuX2N1c3RvbSA9PT0gdHJ1ZSAmJiBlcnIubWVzc2FnZVxuICAgICAgICAgICAgPyBlcnIubWVzc2FnZVxuICAgICAgICAgICAgOiAodGhpcy51aS5lcnJvcnMgfHwge30pW2Vyci5rZXl3b3JkXSB8fCB0aGlzLl9vcHRpb25zLmVycm9ycyFbZXJyLmtleXdvcmRdIHx8IGxbZXJyLmtleXdvcmRdIHx8IGBgO1xuXG4gICAgICAgIGlmIChtZXNzYWdlICYmIHR5cGVvZiBtZXNzYWdlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgbWVzc2FnZSA9IG1lc3NhZ2UoZXJyKSBhcyBzdHJpbmc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobWVzc2FnZSkge1xuICAgICAgICAgIGlmICh+KG1lc3NhZ2UgYXMgc3RyaW5nKS5pbmRleE9mKCd7JykpIHtcbiAgICAgICAgICAgIG1lc3NhZ2UgPSAobWVzc2FnZSBhcyBzdHJpbmcpLnJlcGxhY2UoL3soW1xcLmEtejAtOV0rKX0vZywgKF92OiBzdHJpbmcsIGtleTogc3RyaW5nKSA9PiBlcnIucGFyYW1zIVtrZXldIHx8ICcnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZXJyLm1lc3NhZ2UgPSBtZXNzYWdlIGFzIHN0cmluZztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZXJyO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMuX2Vycm9ycyA9IGVycm9ycztcbiAgICB0aGlzLl9lcnJvcnNDaGFuZ2VzLm5leHQoZXJyb3JzKTtcbiAgICAvLyBTaG91bGQgc2VuZCBlcnJvcnMgdG8gcGFyZW50IGZpZWxkXG4gICAgaWYgKHRoaXMuX3BhcmVudCkge1xuICAgICAgdGhpcy5fcGFyZW50LnNldFBhcmVudEFuZFBsYXRFcnJvcnMoZXJyb3JzLCB0aGlzLnBhdGgpO1xuICAgIH1cbiAgfVxuXG4gIHNldFBhcmVudEFuZFBsYXRFcnJvcnMoZXJyb3JzOiBFcnJvckRhdGFbXSwgcGF0aDogc3RyaW5nKSB7XG4gICAgdGhpcy5fb2JqRXJyb3JzW3BhdGhdID0gZXJyb3JzO1xuICAgIGNvbnN0IHBsYXRFcnJvcnM6IEVycm9yRGF0YVtdID0gW107XG4gICAgT2JqZWN0LmtleXModGhpcy5fb2JqRXJyb3JzKS5mb3JFYWNoKHAgPT4ge1xuICAgICAgY29uc3QgcHJvcGVydHkgPSB0aGlzLnNlYXJjaFByb3BlcnR5KHApO1xuICAgICAgaWYgKHByb3BlcnR5ICYmICFwcm9wZXJ0eS52aXNpYmxlKSByZXR1cm47XG4gICAgICBwbGF0RXJyb3JzLnB1c2goLi4udGhpcy5fb2JqRXJyb3JzW3BdKTtcbiAgICB9KTtcbiAgICB0aGlzLnNldEVycm9ycyhwbGF0RXJyb3JzLCBmYWxzZSk7XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgLy8gI3JlZ2lvbiBjb25kaXRpb25cblxuICBwcml2YXRlIHNldFZpc2libGUodmlzaWJsZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3Zpc2libGUgPSB2aXNpYmxlO1xuICAgIHRoaXMuX3Zpc2liaWxpdHlDaGFuZ2VzLm5leHQodmlzaWJsZSk7XG4gICAgLy8g6YOo5YiG5pWw5o2u5rqQ5p2l6IeqIHJlc2V0XG4gICAgdGhpcy5yZXNldFZhbHVlKHRoaXMudmFsdWUsIHRydWUpO1xuICB9XG5cbiAgLy8gQSBmaWVsZCBpcyB2aXNpYmxlIGlmIEFUIExFQVNUIE9ORSBvZiB0aGUgcHJvcGVydGllcyBpdCBkZXBlbmRzIG9uIGlzIHZpc2libGUgQU5EIGhhcyBhIHZhbHVlIGluIHRoZSBsaXN0XG4gIF9iaW5kVmlzaWJpbGl0eSgpIHtcbiAgICBjb25zdCB2aXNpYmxlSWYgPSAodGhpcy51aSBhcyBTRlVJU2NoZW1hSXRlbSkudmlzaWJsZUlmO1xuICAgIGlmICh0eXBlb2YgdmlzaWJsZUlmID09PSAnb2JqZWN0JyAmJiBPYmplY3Qua2V5cyh2aXNpYmxlSWYpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5zZXRWaXNpYmxlKGZhbHNlKTtcbiAgICB9IGVsc2UgaWYgKHZpc2libGVJZiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCBwcm9wZXJ0aWVzQmluZGluZzogQXJyYXk8T2JzZXJ2YWJsZTxib29sZWFuPj4gPSBbXTtcbiAgICAgIGZvciAoY29uc3QgZGVwZW5kZW5jeVBhdGggaW4gdmlzaWJsZUlmKSB7XG4gICAgICAgIGlmICh2aXNpYmxlSWYuaGFzT3duUHJvcGVydHkoZGVwZW5kZW5jeVBhdGgpKSB7XG4gICAgICAgICAgY29uc3QgcHJvcGVydHkgPSB0aGlzLnNlYXJjaFByb3BlcnR5KGRlcGVuZGVuY3lQYXRoKTtcbiAgICAgICAgICBpZiAocHJvcGVydHkpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlQ2hlY2sgPSBwcm9wZXJ0eS52YWx1ZUNoYW5nZXMucGlwZShcbiAgICAgICAgICAgICAgbWFwKCh2YWx1ZTogU0ZWYWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZpID0gdmlzaWJsZUlmW2RlcGVuZGVuY3lQYXRoXTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZpID09PSAnZnVuY3Rpb24nKSByZXR1cm4gdmkodmFsdWUpO1xuICAgICAgICAgICAgICAgIGlmICh2aS5pbmRleE9mKCckQU5ZJCcpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlLmxlbmd0aCA+IDA7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB2aS5pbmRleE9mKHZhbHVlKSAhPT0gLTE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjb25zdCB2aXNpYmlsaXR5Q2hlY2sgPSBwcm9wZXJ0eS5fdmlzaWJpbGl0eUNoYW5nZXM7XG4gICAgICAgICAgICBjb25zdCBhbmQgPSBjb21iaW5lTGF0ZXN0KFt2YWx1ZUNoZWNrLCB2aXNpYmlsaXR5Q2hlY2tdKS5waXBlKG1hcChyZXN1bHRzID0+IHJlc3VsdHNbMF0gJiYgcmVzdWx0c1sxXSkpO1xuICAgICAgICAgICAgcHJvcGVydGllc0JpbmRpbmcucHVzaChhbmQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYENhbid0IGZpbmQgcHJvcGVydHkgJHtkZXBlbmRlbmN5UGF0aH0gZm9yIHZpc2liaWxpdHkgY2hlY2sgb2YgJHt0aGlzLnBhdGh9YCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbWJpbmVMYXRlc3QocHJvcGVydGllc0JpbmRpbmcpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcCh2YWx1ZXMgPT4gdmFsdWVzLmluZGV4T2YodHJ1ZSkgIT09IC0xKSxcbiAgICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUodmlzaWJsZSA9PiB0aGlzLnNldFZpc2libGUodmlzaWJsZSkpO1xuICAgIH1cbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cbn1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFByb3BlcnR5R3JvdXAgZXh0ZW5kcyBGb3JtUHJvcGVydHkge1xuICBwcm9wZXJ0aWVzOiB7IFtrZXk6IHN0cmluZ106IEZvcm1Qcm9wZXJ0eSB9IHwgRm9ybVByb3BlcnR5W10gfCBudWxsID0gbnVsbDtcblxuICBnZXRQcm9wZXJ0eShwYXRoOiBzdHJpbmcpOiBGb3JtUHJvcGVydHkgfCB1bmRlZmluZWQge1xuICAgIGNvbnN0IHN1YlBhdGhJZHggPSBwYXRoLmluZGV4T2YoU0ZfU0VRKTtcbiAgICBjb25zdCBwcm9wZXJ0eUlkID0gc3ViUGF0aElkeCAhPT0gLTEgPyBwYXRoLnN1YnN0cigwLCBzdWJQYXRoSWR4KSA6IHBhdGg7XG5cbiAgICBsZXQgcHJvcGVydHkgPSAodGhpcy5wcm9wZXJ0aWVzIGFzIHsgW2tleTogc3RyaW5nXTogRm9ybVByb3BlcnR5IH0pW3Byb3BlcnR5SWRdO1xuICAgIGlmIChwcm9wZXJ0eSAhPT0gbnVsbCAmJiBzdWJQYXRoSWR4ICE9PSAtMSAmJiBwcm9wZXJ0eSBpbnN0YW5jZW9mIFByb3BlcnR5R3JvdXApIHtcbiAgICAgIGNvbnN0IHN1YlBhdGggPSBwYXRoLnN1YnN0cihzdWJQYXRoSWR4ICsgMSk7XG4gICAgICBwcm9wZXJ0eSA9IChwcm9wZXJ0eSBhcyBQcm9wZXJ0eUdyb3VwKS5nZXRQcm9wZXJ0eShzdWJQYXRoKSE7XG4gICAgfVxuICAgIHJldHVybiBwcm9wZXJ0eTtcbiAgfVxuXG4gIGZvckVhY2hDaGlsZChmbjogKGZvcm1Qcm9wZXJ0eTogRm9ybVByb3BlcnR5LCBzdHI6IHN0cmluZykgPT4gdm9pZCkge1xuICAgIGZvciAoY29uc3QgcHJvcGVydHlJZCBpbiB0aGlzLnByb3BlcnRpZXMpIHtcbiAgICAgIGlmICh0aGlzLnByb3BlcnRpZXMuaGFzT3duUHJvcGVydHkocHJvcGVydHlJZCkpIHtcbiAgICAgICAgY29uc3QgcHJvcGVydHkgPSAodGhpcy5wcm9wZXJ0aWVzIGFzIHsgW2tleTogc3RyaW5nXTogRm9ybVByb3BlcnR5IH0pW3Byb3BlcnR5SWRdO1xuICAgICAgICBmbihwcm9wZXJ0eSwgcHJvcGVydHlJZCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZm9yRWFjaENoaWxkUmVjdXJzaXZlKGZuOiAoZm9ybVByb3BlcnR5OiBGb3JtUHJvcGVydHkpID0+IHZvaWQpIHtcbiAgICB0aGlzLmZvckVhY2hDaGlsZChjaGlsZCA9PiB7XG4gICAgICBmbihjaGlsZCk7XG4gICAgICBpZiAoY2hpbGQgaW5zdGFuY2VvZiBQcm9wZXJ0eUdyb3VwKSB7XG4gICAgICAgIChjaGlsZCBhcyBQcm9wZXJ0eUdyb3VwKS5mb3JFYWNoQ2hpbGRSZWN1cnNpdmUoZm4pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgX2JpbmRWaXNpYmlsaXR5KCkge1xuICAgIHN1cGVyLl9iaW5kVmlzaWJpbGl0eSgpO1xuICAgIHRoaXMuX2JpbmRWaXNpYmlsaXR5UmVjdXJzaXZlKCk7XG4gIH1cblxuICBwcml2YXRlIF9iaW5kVmlzaWJpbGl0eVJlY3Vyc2l2ZSgpIHtcbiAgICB0aGlzLmZvckVhY2hDaGlsZFJlY3Vyc2l2ZShwcm9wZXJ0eSA9PiB7XG4gICAgICBwcm9wZXJ0eS5fYmluZFZpc2liaWxpdHkoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGlzUm9vdCgpIHtcbiAgICByZXR1cm4gdGhpcyA9PT0gdGhpcy5yb290O1xuICB9XG59XG4iXX0=