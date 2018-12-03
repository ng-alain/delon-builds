/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { isDecimal, isIdCard, isInt, isMobile, isNum } from './validate';
/**
 * 一套日常验证器
 */
// tslint:disable-next-line:class-name
export class _Validators {
    /**
     * 是否为数字
     * @param {?} control
     * @return {?}
     */
    static num(control) {
        return isNum(control.value) ? null : { num: true };
    }
    /**
     * 是否为整数
     * @param {?} control
     * @return {?}
     */
    static int(control) {
        return isInt(control.value) ? null : { int: true };
    }
    /**
     * 是否为小数
     * @param {?} control
     * @return {?}
     */
    static decimal(control) {
        return isDecimal(control.value) ? null : { decimal: true };
    }
    /**
     * 是否为身份证
     * @param {?} control
     * @return {?}
     */
    static idCard(control) {
        return isIdCard(control.value) ? null : { idCard: true };
    }
    /**
     * 是否为手机号
     * @param {?} control
     * @return {?}
     */
    static mobile(control) {
        return isMobile(control.value) ? null : { mobile: true };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi91dGlsLyIsInNvdXJjZXMiOlsic3JjL3ZhbGlkYXRlL3ZhbGlkYXRvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLE1BQU0sWUFBWSxDQUFDOzs7OztBQUl6RSxNQUFNLE9BQU8sV0FBVzs7Ozs7O0lBRXRCLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBd0I7UUFDakMsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDO0lBQ3JELENBQUM7Ozs7OztJQUdELE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBd0I7UUFDakMsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDO0lBQ3JELENBQUM7Ozs7OztJQUdELE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBd0I7UUFDckMsT0FBTyxTQUFTLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDO0lBQzdELENBQUM7Ozs7OztJQUdELE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBd0I7UUFDcEMsT0FBTyxRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDO0lBQzNELENBQUM7Ozs7OztJQUdELE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBd0I7UUFDcEMsT0FBTyxRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDO0lBQzNELENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFic3RyYWN0Q29udHJvbCwgVmFsaWRhdGlvbkVycm9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IGlzRGVjaW1hbCwgaXNJZENhcmQsIGlzSW50LCBpc01vYmlsZSwgaXNOdW0gfSBmcm9tICcuL3ZhbGlkYXRlJztcblxuLyoqIOS4gOWll+aXpeW4uOmqjOivgeWZqCAqL1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNsYXNzLW5hbWVcbmV4cG9ydCBjbGFzcyBfVmFsaWRhdG9ycyB7XG4gIC8qKiDmmK/lkKbkuLrmlbDlrZcgKi9cbiAgc3RhdGljIG51bShjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCB7XG4gICAgcmV0dXJuIGlzTnVtKGNvbnRyb2wudmFsdWUpID8gbnVsbCA6IHsgbnVtOiB0cnVlIH07XG4gIH1cblxuICAvKiog5piv5ZCm5Li65pW05pWwICovXG4gIHN0YXRpYyBpbnQoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xuICAgIHJldHVybiBpc0ludChjb250cm9sLnZhbHVlKSA/IG51bGwgOiB7IGludDogdHJ1ZSB9O1xuICB9XG5cbiAgLyoqIOaYr+WQpuS4uuWwj+aVsCAqL1xuICBzdGF0aWMgZGVjaW1hbChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCB7XG4gICAgcmV0dXJuIGlzRGVjaW1hbChjb250cm9sLnZhbHVlKSA/IG51bGwgOiB7IGRlY2ltYWw6IHRydWUgfTtcbiAgfVxuXG4gIC8qKiDmmK/lkKbkuLrouqvku73or4EgKi9cbiAgc3RhdGljIGlkQ2FyZChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCB7XG4gICAgcmV0dXJuIGlzSWRDYXJkKGNvbnRyb2wudmFsdWUpID8gbnVsbCA6IHsgaWRDYXJkOiB0cnVlIH07XG4gIH1cblxuICAvKiog5piv5ZCm5Li65omL5py65Y+3ICovXG4gIHN0YXRpYyBtb2JpbGUoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xuICAgIHJldHVybiBpc01vYmlsZShjb250cm9sLnZhbHVlKSA/IG51bGwgOiB7IG1vYmlsZTogdHJ1ZSB9O1xuICB9XG59XG4iXX0=