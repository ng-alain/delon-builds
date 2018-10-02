/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { isNum, isInt, isDecimal, isIdCard, isMobile } from './validate';
/**
 * 一套日常验证器
 */
var /**
 * 一套日常验证器
 */
_Validators = /** @class */ (function () {
    function _Validators() {
    }
    /** 是否为数字 */
    /**
     * 是否为数字
     * @param {?} control
     * @return {?}
     */
    _Validators.num = /**
     * 是否为数字
     * @param {?} control
     * @return {?}
     */
    function (control) {
        return isNum(control.value) ? null : { num: true };
    };
    /** 是否为整数 */
    /**
     * 是否为整数
     * @param {?} control
     * @return {?}
     */
    _Validators.int = /**
     * 是否为整数
     * @param {?} control
     * @return {?}
     */
    function (control) {
        return isInt(control.value) ? null : { int: true };
    };
    /** 是否为小数 */
    /**
     * 是否为小数
     * @param {?} control
     * @return {?}
     */
    _Validators.decimal = /**
     * 是否为小数
     * @param {?} control
     * @return {?}
     */
    function (control) {
        return isDecimal(control.value) ? null : { decimal: true };
    };
    /** 是否为身份证 */
    /**
     * 是否为身份证
     * @param {?} control
     * @return {?}
     */
    _Validators.idCard = /**
     * 是否为身份证
     * @param {?} control
     * @return {?}
     */
    function (control) {
        return isIdCard(control.value) ? null : { idCard: true };
    };
    /** 是否为手机号 */
    /**
     * 是否为手机号
     * @param {?} control
     * @return {?}
     */
    _Validators.mobile = /**
     * 是否为手机号
     * @param {?} control
     * @return {?}
     */
    function (control) {
        return isMobile(control.value) ? null : { mobile: true };
    };
    return _Validators;
}());
/**
 * 一套日常验证器
 */
export { _Validators };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi91dGlsLyIsInNvdXJjZXMiOlsic3JjL3ZhbGlkYXRlL3ZhbGlkYXRvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sWUFBWSxDQUFDOzs7O0FBSXpFOzs7QUFBQTs7O0lBQ0UsWUFBWTs7Ozs7O0lBQ0wsZUFBRzs7Ozs7SUFBVixVQUFXLE9BQXdCO1FBQ2pDLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FBQztLQUNwRDtJQUVELFlBQVk7Ozs7OztJQUNMLGVBQUc7Ozs7O0lBQVYsVUFBVyxPQUF3QjtRQUNqQyxPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUM7S0FDcEQ7SUFFRCxZQUFZOzs7Ozs7SUFDTCxtQkFBTzs7Ozs7SUFBZCxVQUFlLE9BQXdCO1FBQ3JDLE9BQU8sU0FBUyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQztLQUM1RDtJQUVELGFBQWE7Ozs7OztJQUNOLGtCQUFNOzs7OztJQUFiLFVBQWMsT0FBd0I7UUFDcEMsT0FBTyxRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDO0tBQzFEO0lBRUQsYUFBYTs7Ozs7O0lBQ04sa0JBQU07Ozs7O0lBQWIsVUFBYyxPQUF3QjtRQUNwQyxPQUFPLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUM7S0FDMUQ7c0JBN0JIO0lBOEJDLENBQUE7Ozs7QUF6QkQsdUJBeUJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sLCBWYWxpZGF0aW9uRXJyb3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBpc051bSwgaXNJbnQsIGlzRGVjaW1hbCwgaXNJZENhcmQsIGlzTW9iaWxlIH0gZnJvbSAnLi92YWxpZGF0ZSc7XHJcblxyXG4vKiog5LiA5aWX5pel5bi46aqM6K+B5ZmoICovXHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjbGFzcy1uYW1lXHJcbmV4cG9ydCBjbGFzcyBfVmFsaWRhdG9ycyB7XHJcbiAgLyoqIOaYr+WQpuS4uuaVsOWtlyAqL1xyXG4gIHN0YXRpYyBudW0oY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xyXG4gICAgcmV0dXJuIGlzTnVtKGNvbnRyb2wudmFsdWUpID8gbnVsbCA6IHsgbnVtOiB0cnVlIH07XHJcbiAgfVxyXG5cclxuICAvKiog5piv5ZCm5Li65pW05pWwICovXHJcbiAgc3RhdGljIGludChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gaXNJbnQoY29udHJvbC52YWx1ZSkgPyBudWxsIDogeyBpbnQ6IHRydWUgfTtcclxuICB9XHJcblxyXG4gIC8qKiDmmK/lkKbkuLrlsI/mlbAgKi9cclxuICBzdGF0aWMgZGVjaW1hbChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gaXNEZWNpbWFsKGNvbnRyb2wudmFsdWUpID8gbnVsbCA6IHsgZGVjaW1hbDogdHJ1ZSB9O1xyXG4gIH1cclxuXHJcbiAgLyoqIOaYr+WQpuS4uui6q+S7veivgSAqL1xyXG4gIHN0YXRpYyBpZENhcmQoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xyXG4gICAgcmV0dXJuIGlzSWRDYXJkKGNvbnRyb2wudmFsdWUpID8gbnVsbCA6IHsgaWRDYXJkOiB0cnVlIH07XHJcbiAgfVxyXG5cclxuICAvKiog5piv5ZCm5Li65omL5py65Y+3ICovXHJcbiAgc3RhdGljIG1vYmlsZShjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gaXNNb2JpbGUoY29udHJvbC52YWx1ZSkgPyBudWxsIDogeyBtb2JpbGU6IHRydWUgfTtcclxuICB9XHJcbn1cclxuIl19