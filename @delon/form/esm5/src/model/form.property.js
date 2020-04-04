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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5wcm9wZXJ0eS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9mb3JtLyIsInNvdXJjZXMiOlsic3JjL21vZGVsL2Zvcm0ucHJvcGVydHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxhQUFhLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBS2xDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxVQUFVLENBQUM7Ozs7QUFJbkM7Ozs7SUFpQkUsc0JBQ0Usc0JBQThDLEVBQzlDLE1BQWdCLEVBQ2hCLEVBQStCLEVBQy9CLFFBQVksRUFDWixNQUE0QixFQUM1QixJQUFZLEVBQ0osUUFBeUI7UUFBekIsYUFBUSxHQUFSLFFBQVEsQ0FBaUI7UUF2QjNCLFlBQU8sR0FBdUIsSUFBSSxDQUFDO1FBQ25DLGtCQUFhLEdBQUcsSUFBSSxlQUFlLENBQVUsSUFBSSxDQUFDLENBQUM7UUFDbkQsbUJBQWMsR0FBRyxJQUFJLGVBQWUsQ0FBcUIsSUFBSSxDQUFDLENBQUM7UUFDL0QsYUFBUSxHQUFHLElBQUksQ0FBQztRQUNoQix1QkFBa0IsR0FBRyxJQUFJLGVBQWUsQ0FBVSxJQUFJLENBQUMsQ0FBQztRQUdoRSxlQUFVLEdBQW1DLEVBQUUsQ0FBQztRQUtoRCxXQUFNLEdBQVksSUFBSSxDQUFDO1FBYXJCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLGVBQWUsR0FBRyxzQkFBc0IsQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEVBQUU7WUFDdEUsY0FBYyxFQUFFLG1CQUFBLElBQUksQ0FBQyxFQUFFLENBQUMsY0FBYyxFQUFZO1lB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QUMsWUFBWTs7OztRQUFDLFVBQUEsS0FBSztZQUNyQixFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDVixJQUFJLEtBQUssWUFBWSxhQUFhLEVBQUU7Z0JBQ2xDLENBQUMsbUJBQUEsS0FBSyxFQUFpQixDQUFDLENBQUMscUJBQXFCLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDcEQ7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCx1Q0FBZTs7O0lBQWY7UUFDRSxpQkFBTSxlQUFlLFdBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztJQUNsQyxDQUFDOzs7OztJQUVPLGdEQUF3Qjs7OztJQUFoQztRQUNFLElBQUksQ0FBQyxxQkFBcUI7Ozs7UUFBQyxVQUFBLFFBQVE7WUFDakMsUUFBUSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQzdCLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELDhCQUFNOzs7SUFBTjtRQUNFLE9BQU8sSUFBSSxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDNUIsQ0FBQztJQUNILG9CQUFDO0FBQUQsQ0FBQyxBQS9DRCxDQUE0QyxZQUFZLEdBK0N2RDs7Ozs7OztJQTlDQyxtQ0FBMkUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIGNvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBEZWxvbkZvcm1Db25maWcgfSBmcm9tICcuLi9jb25maWcnO1xuaW1wb3J0IHsgU0ZfU0VRIH0gZnJvbSAnLi4vY29uc3QnO1xuaW1wb3J0IHsgRXJyb3JEYXRhIH0gZnJvbSAnLi4vZXJyb3JzJztcbmltcG9ydCB7IFNGVmFsdWUgfSBmcm9tICcuLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgU0ZTY2hlbWEsIFNGU2NoZW1hVHlwZSB9IGZyb20gJy4uL3NjaGVtYSc7XG5pbXBvcnQgeyBTRlVJU2NoZW1hLCBTRlVJU2NoZW1hSXRlbSwgU0ZVSVNjaGVtYUl0ZW1SdW4gfSBmcm9tICcuLi9zY2hlbWEvdWknO1xuaW1wb3J0IHsgaXNCbGFuayB9IGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7IFNjaGVtYVZhbGlkYXRvckZhY3RvcnkgfSBmcm9tICcuLi92YWxpZGF0b3IuZmFjdG9yeSc7XG5pbXBvcnQgeyBXaWRnZXQgfSBmcm9tICcuLi93aWRnZXQnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRm9ybVByb3BlcnR5IHtcbiAgcHJpdmF0ZSBfZXJyb3JzOiBFcnJvckRhdGFbXSB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIF92YWx1ZUNoYW5nZXMgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFNGVmFsdWU+KG51bGwpO1xuICBwcml2YXRlIF9lcnJvcnNDaGFuZ2VzID0gbmV3IEJlaGF2aW9yU3ViamVjdDxFcnJvckRhdGFbXSB8IG51bGw+KG51bGwpO1xuICBwcml2YXRlIF92aXNpYmxlID0gdHJ1ZTtcbiAgcHJpdmF0ZSBfdmlzaWJpbGl0eUNoYW5nZXMgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KHRydWUpO1xuICBwcml2YXRlIF9yb290OiBQcm9wZXJ0eUdyb3VwO1xuICBwcml2YXRlIF9wYXJlbnQ6IFByb3BlcnR5R3JvdXAgfCBudWxsO1xuICBfb2JqRXJyb3JzOiB7IFtrZXk6IHN0cmluZ106IEVycm9yRGF0YVtdIH0gPSB7fTtcbiAgc2NoZW1hVmFsaWRhdG9yOiAodmFsdWU6IFNGVmFsdWUpID0+IEVycm9yRGF0YVtdO1xuICBzY2hlbWE6IFNGU2NoZW1hO1xuICB1aTogU0ZVSVNjaGVtYSB8IFNGVUlTY2hlbWFJdGVtUnVuO1xuICBmb3JtRGF0YToge307XG4gIF92YWx1ZTogU0ZWYWx1ZSA9IG51bGw7XG4gIHdpZGdldDogV2lkZ2V0PEZvcm1Qcm9wZXJ0eSwgU0ZVSVNjaGVtYUl0ZW0+O1xuICBwYXRoOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgc2NoZW1hVmFsaWRhdG9yRmFjdG9yeTogU2NoZW1hVmFsaWRhdG9yRmFjdG9yeSxcbiAgICBzY2hlbWE6IFNGU2NoZW1hLFxuICAgIHVpOiBTRlVJU2NoZW1hIHwgU0ZVSVNjaGVtYUl0ZW0sXG4gICAgZm9ybURhdGE6IHt9LFxuICAgIHBhcmVudDogUHJvcGVydHlHcm91cCB8IG51bGwsXG4gICAgcGF0aDogc3RyaW5nLFxuICAgIHByaXZhdGUgX29wdGlvbnM6IERlbG9uRm9ybUNvbmZpZyxcbiAgKSB7XG4gICAgdGhpcy5zY2hlbWEgPSBzY2hlbWE7XG4gICAgdGhpcy51aSA9IHVpO1xuICAgIHRoaXMuc2NoZW1hVmFsaWRhdG9yID0gc2NoZW1hVmFsaWRhdG9yRmFjdG9yeS5jcmVhdGVWYWxpZGF0b3JGbihzY2hlbWEsIHtcbiAgICAgIGluZ29yZUtleXdvcmRzOiB0aGlzLnVpLmluZ29yZUtleXdvcmRzIGFzIHN0cmluZ1tdLFxuICAgICAgZGVidWc6ICh1aSBhcyBTRlVJU2NoZW1hSXRlbSkhLmRlYnVnISxcbiAgICB9KTtcbiAgICB0aGlzLmZvcm1EYXRhID0gZm9ybURhdGEgfHwgc2NoZW1hLmRlZmF1bHQ7XG4gICAgdGhpcy5fcGFyZW50ID0gcGFyZW50O1xuICAgIGlmIChwYXJlbnQpIHtcbiAgICAgIHRoaXMuX3Jvb3QgPSBwYXJlbnQucm9vdDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fcm9vdCA9IHRoaXMgYXMgYW55O1xuICAgIH1cbiAgICB0aGlzLnBhdGggPSBwYXRoO1xuICB9XG5cbiAgZ2V0IHZhbHVlQ2hhbmdlcygpIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWVDaGFuZ2VzO1xuICB9XG5cbiAgZ2V0IGVycm9yc0NoYW5nZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Vycm9yc0NoYW5nZXM7XG4gIH1cblxuICBnZXQgdHlwZSgpOiBTRlNjaGVtYVR5cGUge1xuICAgIHJldHVybiB0aGlzLnNjaGVtYS50eXBlITtcbiAgfVxuXG4gIGdldCBwYXJlbnQoKTogUHJvcGVydHlHcm91cCB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLl9wYXJlbnQ7XG4gIH1cblxuICBnZXQgcm9vdCgpOiBQcm9wZXJ0eUdyb3VwIHtcbiAgICByZXR1cm4gdGhpcy5fcm9vdDtcbiAgfVxuXG4gIGdldCB2YWx1ZSgpOiBTRlZhbHVlIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cblxuICBnZXQgZXJyb3JzKCk6IEVycm9yRGF0YVtdIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuX2Vycm9ycztcbiAgfVxuXG4gIGdldCB2aXNpYmxlKCkge1xuICAgIHJldHVybiB0aGlzLl92aXNpYmxlO1xuICB9XG5cbiAgZ2V0IHZhbGlkKCkge1xuICAgIHJldHVybiB0aGlzLl9lcnJvcnMgPT09IG51bGwgfHwgdGhpcy5fZXJyb3JzLmxlbmd0aCA9PT0gMDtcbiAgfVxuXG4gIGdldCBvcHRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLl9vcHRpb25zO1xuICB9XG5cbiAgLyoqXG4gICAqIOiuvue9ruWAvFxuICAgKlxuICAgKiBAcGFyYW0gb25seVNlbGYgYHRydWVgIOWPquWvueW9k+WJjeWtl+auteabtOaWsOWAvOWSjOagoemqjO+8m2BmYWxzZWAg5YyF5ZCr5LiK57qn5a2X5q61XG4gICAqL1xuICBhYnN0cmFjdCBzZXRWYWx1ZSh2YWx1ZTogU0ZWYWx1ZSwgb25seVNlbGY6IGJvb2xlYW4pOiB2b2lkO1xuXG4gIC8qKlxuICAgKiDph43nva7lgLzvvIzpu5jorqTlgLzkuLogYHNjaGVtYS5kZWZhdWx0YFxuICAgKlxuICAgKiBAcGFyYW0gb25seVNlbGYgYHRydWVgIOWPquWvueW9k+WJjeWtl+auteabtOaWsOWAvOWSjOagoemqjO+8m2BmYWxzZWAg5YyF5ZCr5LiK57qn5a2X5q61XG4gICAqL1xuICBhYnN0cmFjdCByZXNldFZhbHVlKHZhbHVlOiBTRlZhbHVlLCBvbmx5U2VsZjogYm9vbGVhbik6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgYWJzdHJhY3QgX2hhc1ZhbHVlKCk6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqICBAaW50ZXJuYWxcbiAgICovXG4gIGFic3RyYWN0IF91cGRhdGVWYWx1ZSgpOiB2b2lkO1xuXG4gIC8qKlxuICAgKiDmm7TmlrDlgLzkuJTmoKHpqozmlbDmja5cbiAgICpcbiAgICogQHBhcmFtIFtvbmx5U2VsZj1mYWxzZV0g5piv5ZCm5YyF5ZCr5LiK57qn5a2X5q61XG4gICAqIEBwYXJhbSBbZW1pdFZhbHVlRXZlbnQ9dHJ1ZV0g5piv5ZCm6Kem5Y+R5YC85Y+Y5pu06YCa55+lXG4gICAqL1xuICB1cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KG9ubHlTZWxmID0gZmFsc2UsIGVtaXRWYWx1ZUV2ZW50ID0gdHJ1ZSwgZW1pdFZhbGlkYXRvciA9IHRydWUpIHtcbiAgICB0aGlzLl91cGRhdGVWYWx1ZSgpO1xuXG4gICAgaWYgKGVtaXRWYWx1ZUV2ZW50KSB7XG4gICAgICB0aGlzLnZhbHVlQ2hhbmdlcy5uZXh0KHRoaXMudmFsdWUpO1xuICAgIH1cblxuICAgIC8vIGBlbWl0VmFsaWRhdG9yYCDmr4/kuIDmrKHmlbDmja7lj5jmm7Tlt7Lnu4/ljIXlkKvlrozmlbTplJnor6/pk77ot6/vvIzlkI7nu63niLboioLngrnmlbDmja7lj5jmm7Tml6Dpobvlho3op6blj5HmoKHpqoxcbiAgICBpZiAoZW1pdFZhbGlkYXRvciAmJiB0aGlzLnVpLmxpdmVWYWxpZGF0ZSA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy5fcnVuVmFsaWRhdGlvbigpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnBhcmVudCAmJiAhb25seVNlbGYpIHtcbiAgICAgIHRoaXMucGFyZW50LnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkob25seVNlbGYsIGVtaXRWYWx1ZUV2ZW50LCBmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqIOagueaNrui3r+W+hOaQnOe0ouihqOWNleWxnuaApyAqL1xuICBzZWFyY2hQcm9wZXJ0eShwYXRoOiBzdHJpbmcpOiBGb3JtUHJvcGVydHkgfCBudWxsIHtcbiAgICBsZXQgcHJvcDogRm9ybVByb3BlcnR5ID0gdGhpcztcbiAgICBsZXQgYmFzZTogUHJvcGVydHlHcm91cCB8IG51bGwgPSBudWxsO1xuXG4gICAgbGV0IHJlc3VsdCA9IG51bGw7XG4gICAgaWYgKHBhdGhbMF0gPT09IFNGX1NFUSkge1xuICAgICAgYmFzZSA9IHRoaXMuZmluZFJvb3QoKTtcbiAgICAgIHJlc3VsdCA9IGJhc2UuZ2V0UHJvcGVydHkocGF0aC5zdWJzdHIoMSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB3aGlsZSAocmVzdWx0ID09PSBudWxsICYmIHByb3AucGFyZW50ICE9PSBudWxsKSB7XG4gICAgICAgIHByb3AgPSBiYXNlID0gcHJvcC5wYXJlbnQ7XG4gICAgICAgIHJlc3VsdCA9IGJhc2UuZ2V0UHJvcGVydHkocGF0aCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQhO1xuICB9XG5cbiAgLyoqIOafpeaJvuagueihqOWNleWxnuaApyAqL1xuICBmaW5kUm9vdCgpOiBQcm9wZXJ0eUdyb3VwIHtcbiAgICBsZXQgcHJvcGVydHk6IEZvcm1Qcm9wZXJ0eSA9IHRoaXM7XG4gICAgd2hpbGUgKHByb3BlcnR5LnBhcmVudCAhPT0gbnVsbCkge1xuICAgICAgcHJvcGVydHkgPSBwcm9wZXJ0eS5wYXJlbnQ7XG4gICAgfVxuICAgIHJldHVybiBwcm9wZXJ0eSBhcyBQcm9wZXJ0eUdyb3VwO1xuICB9XG5cbiAgLy8gI3JlZ2lvbiBwcm9jZXNzIGVycm9yc1xuXG4gIHByaXZhdGUgaXNFbXB0eURhdGEodmFsdWU6IHt9KSB7XG4gICAgaWYgKGlzQmxhbmsodmFsdWUpKSByZXR1cm4gdHJ1ZTtcbiAgICBzd2l0Y2ggKHRoaXMudHlwZSkge1xuICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgcmV0dXJuICgnJyArIHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIF9ydW5WYWxpZGF0aW9uKCkge1xuICAgIGxldCBlcnJvcnM6IEVycm9yRGF0YVtdO1xuICAgIC8vIFRoZSBkZWZpbml0aW9uIG9mIHNvbWUgcnVsZXM6XG4gICAgLy8gMS4gU2hvdWxkIG5vdCBhanYgdmFsaWRhdG9yIHdoZW4gaXMgZW1wdHkgZGF0YSBhbmQgcmVxdWlyZWQgZmllbGRzXG4gICAgLy8gMi4gU2hvdWxkIG5vdCBhanYgdmFsaWRhdG9yIHdoZW4gaXMgZW1wdHkgZGF0YVxuICAgIGNvbnN0IGlzRW1wdHkgPSB0aGlzLmlzRW1wdHlEYXRhKHRoaXMuX3ZhbHVlKTtcbiAgICBpZiAoaXNFbXB0eSAmJiB0aGlzLnVpLl9yZXF1aXJlZCkge1xuICAgICAgZXJyb3JzID0gW3sga2V5d29yZDogJ3JlcXVpcmVkJyB9XTtcbiAgICB9IGVsc2UgaWYgKGlzRW1wdHkpIHtcbiAgICAgIGVycm9ycyA9IFtdO1xuICAgIH0gZWxzZSB7XG4gICAgICBlcnJvcnMgPSB0aGlzLnNjaGVtYVZhbGlkYXRvcih0aGlzLl92YWx1ZSkgfHwgW107XG4gICAgfVxuICAgIGNvbnN0IGN1c3RvbVZhbGlkYXRvciA9ICh0aGlzLnVpIGFzIFNGVUlTY2hlbWFJdGVtUnVuKS52YWxpZGF0b3I7XG4gICAgaWYgKHR5cGVvZiBjdXN0b21WYWxpZGF0b3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnN0IGN1c3RvbUVycm9ycyA9IGN1c3RvbVZhbGlkYXRvcih0aGlzLnZhbHVlLCB0aGlzLCB0aGlzLmZpbmRSb290KCkpO1xuICAgICAgaWYgKGN1c3RvbUVycm9ycyBpbnN0YW5jZW9mIE9ic2VydmFibGUpIHtcbiAgICAgICAgY3VzdG9tRXJyb3JzLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0Q3VzdG9tRXJyb3JzKGVycm9ycywgcmVzKTtcbiAgICAgICAgICB0aGlzLndpZGdldC5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLnNldEN1c3RvbUVycm9ycyhlcnJvcnMsIGN1c3RvbUVycm9ycyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fZXJyb3JzID0gZXJyb3JzO1xuICAgIHRoaXMuc2V0RXJyb3JzKHRoaXMuX2Vycm9ycyk7XG4gIH1cblxuICBwcml2YXRlIHNldEN1c3RvbUVycm9ycyhlcnJvcnM6IEVycm9yRGF0YVtdLCBsaXN0OiBFcnJvckRhdGFbXSkge1xuICAgIC8vIGZpeCBlcnJvciBmb3JtYXRcbiAgICBjb25zdCBoYXNDdXN0b21FcnJvciA9IGxpc3QgIT0gbnVsbCAmJiBsaXN0Lmxlbmd0aCA+IDA7XG4gICAgaWYgKGhhc0N1c3RvbUVycm9yKSB7XG4gICAgICBsaXN0LmZvckVhY2goZXJyID0+IHtcbiAgICAgICAgaWYgKCFlcnIubWVzc2FnZSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGN1c3RvbSB2YWxpZGF0b3IgbXVzdCBjb250YWluIGEgJ21lc3NhZ2UnIGF0dHJpYnV0ZSB0byB2aWV3ZWQgZXJyb3IgdGV4dGApO1xuICAgICAgICB9XG4gICAgICAgIGVyci5fY3VzdG9tID0gdHJ1ZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLl9lcnJvcnMgPSB0aGlzLm1lcmdlRXJyb3JzKGVycm9ycywgbGlzdCk7XG4gICAgdGhpcy5zZXRFcnJvcnModGhpcy5fZXJyb3JzKTtcbiAgfVxuXG4gIHByaXZhdGUgbWVyZ2VFcnJvcnMoZXJyb3JzOiBFcnJvckRhdGFbXSwgbmV3RXJyb3JzOiBFcnJvckRhdGEgfCBFcnJvckRhdGFbXSkge1xuICAgIGlmIChuZXdFcnJvcnMpIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KG5ld0Vycm9ycykpIHtcbiAgICAgICAgZXJyb3JzID0gZXJyb3JzLmNvbmNhdCguLi5uZXdFcnJvcnMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZXJyb3JzLnB1c2gobmV3RXJyb3JzKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGVycm9ycztcbiAgfVxuXG4gIHByb3RlY3RlZCBzZXRFcnJvcnMoZXJyb3JzOiBFcnJvckRhdGFbXSwgZW1pdEZvcm1hdCA9IHRydWUpIHtcbiAgICBpZiAoZW1pdEZvcm1hdCAmJiBlcnJvcnMgJiYgIXRoaXMudWkub25seVZpc3VhbCkge1xuICAgICAgY29uc3QgbCA9ICh0aGlzLndpZGdldCAmJiB0aGlzLndpZGdldC5sLmVycm9yKSB8fCB7fTtcbiAgICAgIGVycm9ycyA9IGVycm9ycy5tYXAoKGVycjogRXJyb3JEYXRhKSA9PiB7XG4gICAgICAgIGxldCBtZXNzYWdlID1cbiAgICAgICAgICBlcnIuX2N1c3RvbSA9PT0gdHJ1ZSAmJiBlcnIubWVzc2FnZVxuICAgICAgICAgICAgPyBlcnIubWVzc2FnZVxuICAgICAgICAgICAgOiAodGhpcy51aS5lcnJvcnMgfHwge30pW2Vyci5rZXl3b3JkXSB8fCB0aGlzLl9vcHRpb25zLmVycm9ycyFbZXJyLmtleXdvcmRdIHx8IGxbZXJyLmtleXdvcmRdIHx8IGBgO1xuXG4gICAgICAgIGlmIChtZXNzYWdlICYmIHR5cGVvZiBtZXNzYWdlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgbWVzc2FnZSA9IG1lc3NhZ2UoZXJyKSBhcyBzdHJpbmc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobWVzc2FnZSkge1xuICAgICAgICAgIGlmICh+KG1lc3NhZ2UgYXMgc3RyaW5nKS5pbmRleE9mKCd7JykpIHtcbiAgICAgICAgICAgIG1lc3NhZ2UgPSAobWVzc2FnZSBhcyBzdHJpbmcpLnJlcGxhY2UoL3soW1xcLmEtejAtOV0rKX0vZywgKF92OiBzdHJpbmcsIGtleTogc3RyaW5nKSA9PiBlcnIucGFyYW1zIVtrZXldIHx8ICcnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZXJyLm1lc3NhZ2UgPSBtZXNzYWdlIGFzIHN0cmluZztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZXJyO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMuX2Vycm9ycyA9IGVycm9ycztcbiAgICB0aGlzLl9lcnJvcnNDaGFuZ2VzLm5leHQoZXJyb3JzKTtcbiAgICAvLyBTaG91bGQgc2VuZCBlcnJvcnMgdG8gcGFyZW50IGZpZWxkXG4gICAgaWYgKHRoaXMuX3BhcmVudCkge1xuICAgICAgdGhpcy5fcGFyZW50LnNldFBhcmVudEFuZFBsYXRFcnJvcnMoZXJyb3JzLCB0aGlzLnBhdGgpO1xuICAgIH1cbiAgfVxuXG4gIHNldFBhcmVudEFuZFBsYXRFcnJvcnMoZXJyb3JzOiBFcnJvckRhdGFbXSwgcGF0aDogc3RyaW5nKSB7XG4gICAgdGhpcy5fb2JqRXJyb3JzW3BhdGhdID0gZXJyb3JzO1xuICAgIGNvbnN0IHBsYXRFcnJvcnM6IEVycm9yRGF0YVtdID0gW107XG4gICAgT2JqZWN0LmtleXModGhpcy5fb2JqRXJyb3JzKS5mb3JFYWNoKHAgPT4ge1xuICAgICAgY29uc3QgcHJvcGVydHkgPSB0aGlzLnNlYXJjaFByb3BlcnR5KHApO1xuICAgICAgaWYgKHByb3BlcnR5ICYmICFwcm9wZXJ0eS52aXNpYmxlKSByZXR1cm47XG4gICAgICBwbGF0RXJyb3JzLnB1c2goLi4udGhpcy5fb2JqRXJyb3JzW3BdKTtcbiAgICB9KTtcbiAgICB0aGlzLnNldEVycm9ycyhwbGF0RXJyb3JzLCBmYWxzZSk7XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgLy8gI3JlZ2lvbiBjb25kaXRpb25cblxuICBwcml2YXRlIHNldFZpc2libGUodmlzaWJsZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3Zpc2libGUgPSB2aXNpYmxlO1xuICAgIHRoaXMuX3Zpc2liaWxpdHlDaGFuZ2VzLm5leHQodmlzaWJsZSk7XG4gICAgLy8g6YOo5YiG5pWw5o2u5rqQ5p2l6IeqIHJlc2V0XG4gICAgdGhpcy5yZXNldFZhbHVlKHRoaXMudmFsdWUsIHRydWUpO1xuICB9XG5cbiAgLy8gQSBmaWVsZCBpcyB2aXNpYmxlIGlmIEFUIExFQVNUIE9ORSBvZiB0aGUgcHJvcGVydGllcyBpdCBkZXBlbmRzIG9uIGlzIHZpc2libGUgQU5EIGhhcyBhIHZhbHVlIGluIHRoZSBsaXN0XG4gIF9iaW5kVmlzaWJpbGl0eSgpIHtcbiAgICBjb25zdCB2aXNpYmxlSWYgPSAodGhpcy51aSBhcyBTRlVJU2NoZW1hSXRlbSkudmlzaWJsZUlmO1xuICAgIGlmICh0eXBlb2YgdmlzaWJsZUlmID09PSAnb2JqZWN0JyAmJiBPYmplY3Qua2V5cyh2aXNpYmxlSWYpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5zZXRWaXNpYmxlKGZhbHNlKTtcbiAgICB9IGVsc2UgaWYgKHZpc2libGVJZiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCBwcm9wZXJ0aWVzQmluZGluZzogQXJyYXk8T2JzZXJ2YWJsZTxib29sZWFuPj4gPSBbXTtcbiAgICAgIGZvciAoY29uc3QgZGVwZW5kZW5jeVBhdGggaW4gdmlzaWJsZUlmKSB7XG4gICAgICAgIGlmICh2aXNpYmxlSWYuaGFzT3duUHJvcGVydHkoZGVwZW5kZW5jeVBhdGgpKSB7XG4gICAgICAgICAgY29uc3QgcHJvcGVydHkgPSB0aGlzLnNlYXJjaFByb3BlcnR5KGRlcGVuZGVuY3lQYXRoKTtcbiAgICAgICAgICBpZiAocHJvcGVydHkpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlQ2hlY2sgPSBwcm9wZXJ0eS52YWx1ZUNoYW5nZXMucGlwZShcbiAgICAgICAgICAgICAgbWFwKCh2YWx1ZTogU0ZWYWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZpID0gdmlzaWJsZUlmW2RlcGVuZGVuY3lQYXRoXTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZpID09PSAnZnVuY3Rpb24nKSByZXR1cm4gdmkodmFsdWUpO1xuICAgICAgICAgICAgICAgIGlmICh2aS5pbmRleE9mKCckQU5ZJCcpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlLmxlbmd0aCA+IDA7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB2aS5pbmRleE9mKHZhbHVlKSAhPT0gLTE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjb25zdCB2aXNpYmlsaXR5Q2hlY2sgPSBwcm9wZXJ0eS5fdmlzaWJpbGl0eUNoYW5nZXM7XG4gICAgICAgICAgICBjb25zdCBhbmQgPSBjb21iaW5lTGF0ZXN0KFt2YWx1ZUNoZWNrLCB2aXNpYmlsaXR5Q2hlY2tdKS5waXBlKG1hcChyZXN1bHRzID0+IHJlc3VsdHNbMF0gJiYgcmVzdWx0c1sxXSkpO1xuICAgICAgICAgICAgcHJvcGVydGllc0JpbmRpbmcucHVzaChhbmQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYENhbid0IGZpbmQgcHJvcGVydHkgJHtkZXBlbmRlbmN5UGF0aH0gZm9yIHZpc2liaWxpdHkgY2hlY2sgb2YgJHt0aGlzLnBhdGh9YCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbWJpbmVMYXRlc3QocHJvcGVydGllc0JpbmRpbmcpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcCh2YWx1ZXMgPT4gdmFsdWVzLmluZGV4T2YodHJ1ZSkgIT09IC0xKSxcbiAgICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUodmlzaWJsZSA9PiB0aGlzLnNldFZpc2libGUodmlzaWJsZSkpO1xuICAgIH1cbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cbn1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFByb3BlcnR5R3JvdXAgZXh0ZW5kcyBGb3JtUHJvcGVydHkge1xuICBwcm9wZXJ0aWVzOiB7IFtrZXk6IHN0cmluZ106IEZvcm1Qcm9wZXJ0eSB9IHwgRm9ybVByb3BlcnR5W10gfCBudWxsID0gbnVsbDtcblxuICBnZXRQcm9wZXJ0eShwYXRoOiBzdHJpbmcpOiBGb3JtUHJvcGVydHkgfCB1bmRlZmluZWQge1xuICAgIGNvbnN0IHN1YlBhdGhJZHggPSBwYXRoLmluZGV4T2YoU0ZfU0VRKTtcbiAgICBjb25zdCBwcm9wZXJ0eUlkID0gc3ViUGF0aElkeCAhPT0gLTEgPyBwYXRoLnN1YnN0cigwLCBzdWJQYXRoSWR4KSA6IHBhdGg7XG5cbiAgICBsZXQgcHJvcGVydHkgPSAodGhpcy5wcm9wZXJ0aWVzIGFzIHsgW2tleTogc3RyaW5nXTogRm9ybVByb3BlcnR5IH0pW3Byb3BlcnR5SWRdO1xuICAgIGlmIChwcm9wZXJ0eSAhPT0gbnVsbCAmJiBzdWJQYXRoSWR4ICE9PSAtMSAmJiBwcm9wZXJ0eSBpbnN0YW5jZW9mIFByb3BlcnR5R3JvdXApIHtcbiAgICAgIGNvbnN0IHN1YlBhdGggPSBwYXRoLnN1YnN0cihzdWJQYXRoSWR4ICsgMSk7XG4gICAgICBwcm9wZXJ0eSA9IChwcm9wZXJ0eSBhcyBQcm9wZXJ0eUdyb3VwKS5nZXRQcm9wZXJ0eShzdWJQYXRoKSE7XG4gICAgfVxuICAgIHJldHVybiBwcm9wZXJ0eTtcbiAgfVxuXG4gIGZvckVhY2hDaGlsZChmbjogKGZvcm1Qcm9wZXJ0eTogRm9ybVByb3BlcnR5LCBzdHI6IHN0cmluZykgPT4gdm9pZCkge1xuICAgIGZvciAoY29uc3QgcHJvcGVydHlJZCBpbiB0aGlzLnByb3BlcnRpZXMpIHtcbiAgICAgIGlmICh0aGlzLnByb3BlcnRpZXMuaGFzT3duUHJvcGVydHkocHJvcGVydHlJZCkpIHtcbiAgICAgICAgY29uc3QgcHJvcGVydHkgPSAodGhpcy5wcm9wZXJ0aWVzIGFzIHsgW2tleTogc3RyaW5nXTogRm9ybVByb3BlcnR5IH0pW3Byb3BlcnR5SWRdO1xuICAgICAgICBmbihwcm9wZXJ0eSwgcHJvcGVydHlJZCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZm9yRWFjaENoaWxkUmVjdXJzaXZlKGZuOiAoZm9ybVByb3BlcnR5OiBGb3JtUHJvcGVydHkpID0+IHZvaWQpIHtcbiAgICB0aGlzLmZvckVhY2hDaGlsZChjaGlsZCA9PiB7XG4gICAgICBmbihjaGlsZCk7XG4gICAgICBpZiAoY2hpbGQgaW5zdGFuY2VvZiBQcm9wZXJ0eUdyb3VwKSB7XG4gICAgICAgIChjaGlsZCBhcyBQcm9wZXJ0eUdyb3VwKS5mb3JFYWNoQ2hpbGRSZWN1cnNpdmUoZm4pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgX2JpbmRWaXNpYmlsaXR5KCkge1xuICAgIHN1cGVyLl9iaW5kVmlzaWJpbGl0eSgpO1xuICAgIHRoaXMuX2JpbmRWaXNpYmlsaXR5UmVjdXJzaXZlKCk7XG4gIH1cblxuICBwcml2YXRlIF9iaW5kVmlzaWJpbGl0eVJlY3Vyc2l2ZSgpIHtcbiAgICB0aGlzLmZvckVhY2hDaGlsZFJlY3Vyc2l2ZShwcm9wZXJ0eSA9PiB7XG4gICAgICBwcm9wZXJ0eS5fYmluZFZpc2liaWxpdHkoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGlzUm9vdCgpIHtcbiAgICByZXR1cm4gdGhpcyA9PT0gdGhpcy5yb290O1xuICB9XG59XG4iXX0=