/**
 * @fileoverview added by tsickle
 * Generated from: src/validate/validators.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { isDecimal, isIdCard, isInt, isMobile, isNum, isUrl } from './validate';
/**
 * 一套日常验证器
 */
// tslint:disable-next-line:class-name
var /**
 * 一套日常验证器
 */
// tslint:disable-next-line:class-name
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
    /** 是否URL地址 */
    /**
     * 是否URL地址
     * @param {?} control
     * @return {?}
     */
    _Validators.url = /**
     * 是否URL地址
     * @param {?} control
     * @return {?}
     */
    function (control) {
        return isUrl(control.value) ? null : { url: true };
    };
    return _Validators;
}());
/**
 * 一套日常验证器
 */
// tslint:disable-next-line:class-name
export { _Validators };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi91dGlsLyIsInNvdXJjZXMiOlsic3JjL3ZhbGlkYXRlL3ZhbGlkYXRvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxZQUFZLENBQUM7Ozs7O0FBSWhGOzs7OztJQUFBO0lBOEJBLENBQUM7SUE3QkMsWUFBWTs7Ozs7O0lBQ0wsZUFBRzs7Ozs7SUFBVixVQUFXLE9BQXdCO1FBQ2pDLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FBQztJQUNyRCxDQUFDO0lBRUQsWUFBWTs7Ozs7O0lBQ0wsZUFBRzs7Ozs7SUFBVixVQUFXLE9BQXdCO1FBQ2pDLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FBQztJQUNyRCxDQUFDO0lBRUQsWUFBWTs7Ozs7O0lBQ0wsbUJBQU87Ozs7O0lBQWQsVUFBZSxPQUF3QjtRQUNyQyxPQUFPLFNBQVMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUM7SUFDN0QsQ0FBQztJQUVELGFBQWE7Ozs7OztJQUNOLGtCQUFNOzs7OztJQUFiLFVBQWMsT0FBd0I7UUFDcEMsT0FBTyxRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDO0lBQzNELENBQUM7SUFFRCxhQUFhOzs7Ozs7SUFDTixrQkFBTTs7Ozs7SUFBYixVQUFjLE9BQXdCO1FBQ3BDLE9BQU8sUUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQztJQUMzRCxDQUFDO0lBRUQsY0FBYzs7Ozs7O0lBQ1AsZUFBRzs7Ozs7SUFBVixVQUFXLE9BQXdCO1FBQ2pDLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FBQztJQUNyRCxDQUFDO0lBQ0gsa0JBQUM7QUFBRCxDQUFDLEFBOUJELElBOEJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sLCBWYWxpZGF0aW9uRXJyb3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgaXNEZWNpbWFsLCBpc0lkQ2FyZCwgaXNJbnQsIGlzTW9iaWxlLCBpc051bSwgaXNVcmwgfSBmcm9tICcuL3ZhbGlkYXRlJztcblxuLyoqIOS4gOWll+aXpeW4uOmqjOivgeWZqCAqL1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNsYXNzLW5hbWVcbmV4cG9ydCBjbGFzcyBfVmFsaWRhdG9ycyB7XG4gIC8qKiDmmK/lkKbkuLrmlbDlrZcgKi9cbiAgc3RhdGljIG51bShjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCB7XG4gICAgcmV0dXJuIGlzTnVtKGNvbnRyb2wudmFsdWUpID8gbnVsbCA6IHsgbnVtOiB0cnVlIH07XG4gIH1cblxuICAvKiog5piv5ZCm5Li65pW05pWwICovXG4gIHN0YXRpYyBpbnQoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xuICAgIHJldHVybiBpc0ludChjb250cm9sLnZhbHVlKSA/IG51bGwgOiB7IGludDogdHJ1ZSB9O1xuICB9XG5cbiAgLyoqIOaYr+WQpuS4uuWwj+aVsCAqL1xuICBzdGF0aWMgZGVjaW1hbChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCB7XG4gICAgcmV0dXJuIGlzRGVjaW1hbChjb250cm9sLnZhbHVlKSA/IG51bGwgOiB7IGRlY2ltYWw6IHRydWUgfTtcbiAgfVxuXG4gIC8qKiDmmK/lkKbkuLrouqvku73or4EgKi9cbiAgc3RhdGljIGlkQ2FyZChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCB7XG4gICAgcmV0dXJuIGlzSWRDYXJkKGNvbnRyb2wudmFsdWUpID8gbnVsbCA6IHsgaWRDYXJkOiB0cnVlIH07XG4gIH1cblxuICAvKiog5piv5ZCm5Li65omL5py65Y+3ICovXG4gIHN0YXRpYyBtb2JpbGUoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xuICAgIHJldHVybiBpc01vYmlsZShjb250cm9sLnZhbHVlKSA/IG51bGwgOiB7IG1vYmlsZTogdHJ1ZSB9O1xuICB9XG5cbiAgLyoqIOaYr+WQplVSTOWcsOWdgCAqL1xuICBzdGF0aWMgdXJsKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcbiAgICByZXR1cm4gaXNVcmwoY29udHJvbC52YWx1ZSkgPyBudWxsIDogeyB1cmw6IHRydWUgfTtcbiAgfVxufVxuIl19