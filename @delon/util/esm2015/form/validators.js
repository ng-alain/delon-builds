/**
 * @fileoverview added by tsickle
 * Generated from: validators.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { isDecimal, isIdCard, isInt, isMobile, isNum, isUrl } from '@delon/util/format';
/**
 * A set of validators for reactive forms
 *
 * 一套用于响应式表单的验证器
 */
// tslint:disable-next-line:class-name
export class _Validators {
    /**
     * Wheter is number
     *
     * 是否为数字
     * @param {?} control
     * @return {?}
     */
    static num(control) {
        return isNum(control.value) ? null : { num: true };
    }
    /**
     * Wheter is integer
     *
     * 是否为整数
     * @param {?} control
     * @return {?}
     */
    static int(control) {
        return isInt(control.value) ? null : { int: true };
    }
    /**
     * Wheter is decimal
     *
     * 是否为小数点数值
     * @param {?} control
     * @return {?}
     */
    static decimal(control) {
        return isDecimal(control.value) ? null : { decimal: true };
    }
    /**
     * Wheter is People's Republic of China identity card
     *
     * 是否为中华人民共和国居民身份证
     * @param {?} control
     * @return {?}
     */
    static idCard(control) {
        return isIdCard(control.value) ? null : { idCard: true };
    }
    /**
     * Wheter is china mobile (China)
     *
     * 是否为手机号（中国）
     * @param {?} control
     * @return {?}
     */
    static mobile(control) {
        return isMobile(control.value) ? null : { mobile: true };
    }
    /**
     * Wheter is url address
     *
     * 是否URL地址
     * @param {?} control
     * @return {?}
     */
    static url(control) {
        return isUrl(control.value) ? null : { url: true };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3V0aWwvZm9ybS92YWxpZGF0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7QUFReEYsTUFBTSxPQUFPLFdBQVc7Ozs7Ozs7O0lBTXRCLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBd0I7UUFDakMsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDO0lBQ3JELENBQUM7Ozs7Ozs7O0lBT0QsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUF3QjtRQUNqQyxPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUM7SUFDckQsQ0FBQzs7Ozs7Ozs7SUFPRCxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQXdCO1FBQ3JDLE9BQU8sU0FBUyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQztJQUM3RCxDQUFDOzs7Ozs7OztJQU9ELE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBd0I7UUFDcEMsT0FBTyxRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDO0lBQzNELENBQUM7Ozs7Ozs7O0lBT0QsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUF3QjtRQUNwQyxPQUFPLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUM7SUFDM0QsQ0FBQzs7Ozs7Ozs7SUFPRCxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQXdCO1FBQ2pDLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FBQztJQUNyRCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wsIFZhbGlkYXRpb25FcnJvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBpc0RlY2ltYWwsIGlzSWRDYXJkLCBpc0ludCwgaXNNb2JpbGUsIGlzTnVtLCBpc1VybCB9IGZyb20gJ0BkZWxvbi91dGlsL2Zvcm1hdCc7XG5cbi8qKlxuICogQSBzZXQgb2YgdmFsaWRhdG9ycyBmb3IgcmVhY3RpdmUgZm9ybXNcbiAqXG4gKiDkuIDlpZfnlKjkuo7lk43lupTlvI/ooajljZXnmoTpqozor4HlmahcbiAqL1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNsYXNzLW5hbWVcbmV4cG9ydCBjbGFzcyBfVmFsaWRhdG9ycyB7XG4gIC8qKlxuICAgKiBXaGV0ZXIgaXMgbnVtYmVyXG4gICAqXG4gICAqIOaYr+WQpuS4uuaVsOWtl1xuICAgKi9cbiAgc3RhdGljIG51bShjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCB7XG4gICAgcmV0dXJuIGlzTnVtKGNvbnRyb2wudmFsdWUpID8gbnVsbCA6IHsgbnVtOiB0cnVlIH07XG4gIH1cblxuICAvKipcbiAgICogV2hldGVyIGlzIGludGVnZXJcbiAgICpcbiAgICog5piv5ZCm5Li65pW05pWwXG4gICAqL1xuICBzdGF0aWMgaW50KGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcbiAgICByZXR1cm4gaXNJbnQoY29udHJvbC52YWx1ZSkgPyBudWxsIDogeyBpbnQ6IHRydWUgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGV0ZXIgaXMgZGVjaW1hbFxuICAgKlxuICAgKiDmmK/lkKbkuLrlsI/mlbDngrnmlbDlgLxcbiAgICovXG4gIHN0YXRpYyBkZWNpbWFsKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcbiAgICByZXR1cm4gaXNEZWNpbWFsKGNvbnRyb2wudmFsdWUpID8gbnVsbCA6IHsgZGVjaW1hbDogdHJ1ZSB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFdoZXRlciBpcyBQZW9wbGUncyBSZXB1YmxpYyBvZiBDaGluYSBpZGVudGl0eSBjYXJkXG4gICAqXG4gICAqIOaYr+WQpuS4uuS4reWNjuS6uuawkeWFseWSjOWbveWxheawkei6q+S7veivgVxuICAgKi9cbiAgc3RhdGljIGlkQ2FyZChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCB7XG4gICAgcmV0dXJuIGlzSWRDYXJkKGNvbnRyb2wudmFsdWUpID8gbnVsbCA6IHsgaWRDYXJkOiB0cnVlIH07XG4gIH1cblxuICAvKipcbiAgICogV2hldGVyIGlzIGNoaW5hIG1vYmlsZSAoQ2hpbmEpXG4gICAqXG4gICAqIOaYr+WQpuS4uuaJi+acuuWPt++8iOS4reWbve+8iVxuICAgKi9cbiAgc3RhdGljIG1vYmlsZShjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCB7XG4gICAgcmV0dXJuIGlzTW9iaWxlKGNvbnRyb2wudmFsdWUpID8gbnVsbCA6IHsgbW9iaWxlOiB0cnVlIH07XG4gIH1cblxuICAvKipcbiAgICogV2hldGVyIGlzIHVybCBhZGRyZXNzXG4gICAqXG4gICAqIOaYr+WQplVSTOWcsOWdgFxuICAgKi9cbiAgc3RhdGljIHVybChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCB7XG4gICAgcmV0dXJuIGlzVXJsKGNvbnRyb2wudmFsdWUpID8gbnVsbCA6IHsgdXJsOiB0cnVlIH07XG4gIH1cbn1cbiJdfQ==