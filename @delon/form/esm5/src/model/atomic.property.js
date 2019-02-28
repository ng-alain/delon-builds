/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { FormProperty } from './form.property';
/**
 * @abstract
 */
var /**
 * @abstract
 */
AtomicProperty = /** @class */ (function (_super) {
    tslib_1.__extends(AtomicProperty, _super);
    function AtomicProperty() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} value
     * @param {?} onlySelf
     * @return {?}
     */
    AtomicProperty.prototype.setValue = /**
     * @param {?} value
     * @param {?} onlySelf
     * @return {?}
     */
    function (value, onlySelf) {
        this._value = value;
        this.updateValueAndValidity(onlySelf, true);
    };
    /**
     * @param {?} value
     * @param {?} onlySelf
     * @return {?}
     */
    AtomicProperty.prototype.resetValue = /**
     * @param {?} value
     * @param {?} onlySelf
     * @return {?}
     */
    function (value, onlySelf) {
        if (value == null) {
            if (this.schema.default !== undefined) {
                value = this.schema.default;
            }
            else {
                value = this.fallbackValue();
            }
        }
        this._value = value;
        this.updateValueAndValidity(onlySelf, true);
        if (this.widget)
            this.widget.reset(value);
    };
    /**
     * @return {?}
     */
    AtomicProperty.prototype._hasValue = /**
     * @return {?}
     */
    function () {
        return this.fallbackValue() !== this.value;
    };
    /**
     * @return {?}
     */
    AtomicProperty.prototype._updateValue = /**
     * @return {?}
     */
    function () { };
    return AtomicProperty;
}(FormProperty));
/**
 * @abstract
 */
export { AtomicProperty };
if (false) {
    /**
     * @abstract
     * @return {?}
     */
    AtomicProperty.prototype.fallbackValue = function () { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXRvbWljLnByb3BlcnR5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvbW9kZWwvYXRvbWljLnByb3BlcnR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7O0FBRS9DOzs7O0lBQTZDLDBDQUFZO0lBQXpEOztJQTRCQSxDQUFDOzs7Ozs7SUF6QkMsaUNBQVE7Ozs7O0lBQVIsVUFBUyxLQUFjLEVBQUUsUUFBaUI7UUFDeEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLHNCQUFzQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM5QyxDQUFDOzs7Ozs7SUFFRCxtQ0FBVTs7Ozs7SUFBVixVQUFXLEtBQWMsRUFBRSxRQUFpQjtRQUMxQyxJQUFJLEtBQUssSUFBSSxJQUFJLEVBQUU7WUFDakIsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sS0FBSyxTQUFTLEVBQUU7Z0JBQ3JDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQzthQUM3QjtpQkFBTTtnQkFDTCxLQUFLLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO2FBQzlCO1NBQ0Y7UUFDRCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUVwQixJQUFJLENBQUMsc0JBQXNCLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRTVDLElBQUksSUFBSSxDQUFDLE1BQU07WUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QyxDQUFDOzs7O0lBRUQsa0NBQVM7OztJQUFUO1FBQ0UsT0FBTyxJQUFJLENBQUMsYUFBYSxFQUFFLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQztJQUM3QyxDQUFDOzs7O0lBRUQscUNBQVk7OztJQUFaLGNBQWdCLENBQUM7SUFDbkIscUJBQUM7QUFBRCxDQUFDLEFBNUJELENBQTZDLFlBQVksR0E0QnhEOzs7Ozs7Ozs7O0lBM0JDLHlEQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNGVmFsdWUgfSBmcm9tICcuLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgRm9ybVByb3BlcnR5IH0gZnJvbSAnLi9mb3JtLnByb3BlcnR5JztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEF0b21pY1Byb3BlcnR5IGV4dGVuZHMgRm9ybVByb3BlcnR5IHtcbiAgYWJzdHJhY3QgZmFsbGJhY2tWYWx1ZSgpOiBTRlZhbHVlO1xuXG4gIHNldFZhbHVlKHZhbHVlOiBTRlZhbHVlLCBvbmx5U2VsZjogYm9vbGVhbikge1xuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KG9ubHlTZWxmLCB0cnVlKTtcbiAgfVxuXG4gIHJlc2V0VmFsdWUodmFsdWU6IFNGVmFsdWUsIG9ubHlTZWxmOiBib29sZWFuKSB7XG4gICAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICAgIGlmICh0aGlzLnNjaGVtYS5kZWZhdWx0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdmFsdWUgPSB0aGlzLnNjaGVtYS5kZWZhdWx0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsdWUgPSB0aGlzLmZhbGxiYWNrVmFsdWUoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcblxuICAgIHRoaXMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eShvbmx5U2VsZiwgdHJ1ZSk7XG5cbiAgICBpZiAodGhpcy53aWRnZXQpIHRoaXMud2lkZ2V0LnJlc2V0KHZhbHVlKTtcbiAgfVxuXG4gIF9oYXNWYWx1ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5mYWxsYmFja1ZhbHVlKCkgIT09IHRoaXMudmFsdWU7XG4gIH1cblxuICBfdXBkYXRlVmFsdWUoKSB7fVxufVxuIl19