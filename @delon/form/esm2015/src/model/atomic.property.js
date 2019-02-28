/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { FormProperty } from './form.property';
/**
 * @abstract
 */
export class AtomicProperty extends FormProperty {
    /**
     * @param {?} value
     * @param {?} onlySelf
     * @return {?}
     */
    setValue(value, onlySelf) {
        this._value = value;
        this.updateValueAndValidity(onlySelf, true);
    }
    /**
     * @param {?} value
     * @param {?} onlySelf
     * @return {?}
     */
    resetValue(value, onlySelf) {
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
    }
    /**
     * @return {?}
     */
    _hasValue() {
        return this.fallbackValue() !== this.value;
    }
    /**
     * @return {?}
     */
    _updateValue() { }
}
if (false) {
    /**
     * @abstract
     * @return {?}
     */
    AtomicProperty.prototype.fallbackValue = function () { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXRvbWljLnByb3BlcnR5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvbW9kZWwvYXRvbWljLnByb3BlcnR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7Ozs7QUFFL0MsTUFBTSxPQUFnQixjQUFlLFNBQVEsWUFBWTs7Ozs7O0lBR3ZELFFBQVEsQ0FBQyxLQUFjLEVBQUUsUUFBaUI7UUFDeEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLHNCQUFzQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM5QyxDQUFDOzs7Ozs7SUFFRCxVQUFVLENBQUMsS0FBYyxFQUFFLFFBQWlCO1FBQzFDLElBQUksS0FBSyxJQUFJLElBQUksRUFBRTtZQUNqQixJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxLQUFLLFNBQVMsRUFBRTtnQkFDckMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO2FBQzdCO2lCQUFNO2dCQUNMLEtBQUssR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7YUFDOUI7U0FDRjtRQUNELElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBRXBCLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFNUMsSUFBSSxJQUFJLENBQUMsTUFBTTtZQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVDLENBQUM7Ozs7SUFFRCxTQUFTO1FBQ1AsT0FBTyxJQUFJLENBQUMsYUFBYSxFQUFFLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQztJQUM3QyxDQUFDOzs7O0lBRUQsWUFBWSxLQUFJLENBQUM7Q0FDbEI7Ozs7OztJQTNCQyx5REFBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTRlZhbHVlIH0gZnJvbSAnLi4vaW50ZXJmYWNlJztcbmltcG9ydCB7IEZvcm1Qcm9wZXJ0eSB9IGZyb20gJy4vZm9ybS5wcm9wZXJ0eSc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBdG9taWNQcm9wZXJ0eSBleHRlbmRzIEZvcm1Qcm9wZXJ0eSB7XG4gIGFic3RyYWN0IGZhbGxiYWNrVmFsdWUoKTogU0ZWYWx1ZTtcblxuICBzZXRWYWx1ZSh2YWx1ZTogU0ZWYWx1ZSwgb25seVNlbGY6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eShvbmx5U2VsZiwgdHJ1ZSk7XG4gIH1cblxuICByZXNldFZhbHVlKHZhbHVlOiBTRlZhbHVlLCBvbmx5U2VsZjogYm9vbGVhbikge1xuICAgIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgICBpZiAodGhpcy5zY2hlbWEuZGVmYXVsdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHZhbHVlID0gdGhpcy5zY2hlbWEuZGVmYXVsdDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbHVlID0gdGhpcy5mYWxsYmFja1ZhbHVlKCk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG5cbiAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkob25seVNlbGYsIHRydWUpO1xuXG4gICAgaWYgKHRoaXMud2lkZ2V0KSB0aGlzLndpZGdldC5yZXNldCh2YWx1ZSk7XG4gIH1cblxuICBfaGFzVmFsdWUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZmFsbGJhY2tWYWx1ZSgpICE9PSB0aGlzLnZhbHVlO1xuICB9XG5cbiAgX3VwZGF0ZVZhbHVlKCkge31cbn1cbiJdfQ==