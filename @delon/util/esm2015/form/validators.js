/**
 * @fileoverview added by tsickle
 * Generated from: validators.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { isChinese, isColor, isDecimal, isIdCard, isInt, isIp, isMobile, isNum, isUrl } from '@delon/util/format';
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
    /**
     * Wheter is IPv4 address (Support v4, v6)
     *
     * 是否IP4地址（支持v4、v6）
     * @param {?} control
     * @return {?}
     */
    static ip(control) {
        return isIp(control.value) ? null : { ip: true };
    }
    /**
     * Wheter is color
     *
     * 是否颜色代码值
     * @param {?} control
     * @return {?}
     */
    static color(control) {
        return isColor(control.value) ? null : { color: true };
    }
    /**
     * Wheter is chinese
     *
     * 是否中文
     * @param {?} control
     * @return {?}
     */
    static chinese(control) {
        return isChinese(control.value) ? null : { chinese: true };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3V0aWwvZm9ybS92YWxpZGF0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7QUFRbEgsTUFBTSxPQUFPLFdBQVc7Ozs7Ozs7O0lBTXRCLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBd0I7UUFDakMsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDO0lBQ3JELENBQUM7Ozs7Ozs7O0lBT0QsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUF3QjtRQUNqQyxPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUM7SUFDckQsQ0FBQzs7Ozs7Ozs7SUFPRCxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQXdCO1FBQ3JDLE9BQU8sU0FBUyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQztJQUM3RCxDQUFDOzs7Ozs7OztJQU9ELE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBd0I7UUFDcEMsT0FBTyxRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDO0lBQzNELENBQUM7Ozs7Ozs7O0lBT0QsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUF3QjtRQUNwQyxPQUFPLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUM7SUFDM0QsQ0FBQzs7Ozs7Ozs7SUFPRCxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQXdCO1FBQ2pDLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FBQztJQUNyRCxDQUFDOzs7Ozs7OztJQU9ELE1BQU0sQ0FBQyxFQUFFLENBQUMsT0FBd0I7UUFDaEMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxDQUFDO0lBQ25ELENBQUM7Ozs7Ozs7O0lBT0QsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUF3QjtRQUNuQyxPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUM7SUFDekQsQ0FBQzs7Ozs7Ozs7SUFPRCxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQXdCO1FBQ3JDLE9BQU8sU0FBUyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQztJQUM3RCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wsIFZhbGlkYXRpb25FcnJvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBpc0NoaW5lc2UsIGlzQ29sb3IsIGlzRGVjaW1hbCwgaXNJZENhcmQsIGlzSW50LCBpc0lwLCBpc01vYmlsZSwgaXNOdW0sIGlzVXJsIH0gZnJvbSAnQGRlbG9uL3V0aWwvZm9ybWF0JztcblxuLyoqXG4gKiBBIHNldCBvZiB2YWxpZGF0b3JzIGZvciByZWFjdGl2ZSBmb3Jtc1xuICpcbiAqIOS4gOWll+eUqOS6juWTjeW6lOW8j+ihqOWNleeahOmqjOivgeWZqFxuICovXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y2xhc3MtbmFtZVxuZXhwb3J0IGNsYXNzIF9WYWxpZGF0b3JzIHtcbiAgLyoqXG4gICAqIFdoZXRlciBpcyBudW1iZXJcbiAgICpcbiAgICog5piv5ZCm5Li65pWw5a2XXG4gICAqL1xuICBzdGF0aWMgbnVtKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcbiAgICByZXR1cm4gaXNOdW0oY29udHJvbC52YWx1ZSkgPyBudWxsIDogeyBudW06IHRydWUgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGV0ZXIgaXMgaW50ZWdlclxuICAgKlxuICAgKiDmmK/lkKbkuLrmlbTmlbBcbiAgICovXG4gIHN0YXRpYyBpbnQoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xuICAgIHJldHVybiBpc0ludChjb250cm9sLnZhbHVlKSA/IG51bGwgOiB7IGludDogdHJ1ZSB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFdoZXRlciBpcyBkZWNpbWFsXG4gICAqXG4gICAqIOaYr+WQpuS4uuWwj+aVsOeCueaVsOWAvFxuICAgKi9cbiAgc3RhdGljIGRlY2ltYWwoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xuICAgIHJldHVybiBpc0RlY2ltYWwoY29udHJvbC52YWx1ZSkgPyBudWxsIDogeyBkZWNpbWFsOiB0cnVlIH07XG4gIH1cblxuICAvKipcbiAgICogV2hldGVyIGlzIFBlb3BsZSdzIFJlcHVibGljIG9mIENoaW5hIGlkZW50aXR5IGNhcmRcbiAgICpcbiAgICog5piv5ZCm5Li65Lit5Y2O5Lq65rCR5YWx5ZKM5Zu95bGF5rCR6Lqr5Lu96K+BXG4gICAqL1xuICBzdGF0aWMgaWRDYXJkKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcbiAgICByZXR1cm4gaXNJZENhcmQoY29udHJvbC52YWx1ZSkgPyBudWxsIDogeyBpZENhcmQ6IHRydWUgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGV0ZXIgaXMgY2hpbmEgbW9iaWxlIChDaGluYSlcbiAgICpcbiAgICog5piv5ZCm5Li65omL5py65Y+377yI5Lit5Zu977yJXG4gICAqL1xuICBzdGF0aWMgbW9iaWxlKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcbiAgICByZXR1cm4gaXNNb2JpbGUoY29udHJvbC52YWx1ZSkgPyBudWxsIDogeyBtb2JpbGU6IHRydWUgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGV0ZXIgaXMgdXJsIGFkZHJlc3NcbiAgICpcbiAgICog5piv5ZCmVVJM5Zyw5Z2AXG4gICAqL1xuICBzdGF0aWMgdXJsKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcbiAgICByZXR1cm4gaXNVcmwoY29udHJvbC52YWx1ZSkgPyBudWxsIDogeyB1cmw6IHRydWUgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGV0ZXIgaXMgSVB2NCBhZGRyZXNzIChTdXBwb3J0IHY0LCB2NilcbiAgICpcbiAgICog5piv5ZCmSVA05Zyw5Z2A77yI5pSv5oyBdjTjgIF2Nu+8iVxuICAgKi9cbiAgc3RhdGljIGlwKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcbiAgICByZXR1cm4gaXNJcChjb250cm9sLnZhbHVlKSA/IG51bGwgOiB7IGlwOiB0cnVlIH07XG4gIH1cblxuICAvKipcbiAgICogV2hldGVyIGlzIGNvbG9yXG4gICAqXG4gICAqIOaYr+WQpuminOiJsuS7o+eggeWAvFxuICAgKi9cbiAgc3RhdGljIGNvbG9yKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcbiAgICByZXR1cm4gaXNDb2xvcihjb250cm9sLnZhbHVlKSA/IG51bGwgOiB7IGNvbG9yOiB0cnVlIH07XG4gIH1cblxuICAvKipcbiAgICogV2hldGVyIGlzIGNoaW5lc2VcbiAgICpcbiAgICog5piv5ZCm5Lit5paHXG4gICAqL1xuICBzdGF0aWMgY2hpbmVzZShjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCB7XG4gICAgcmV0dXJuIGlzQ2hpbmVzZShjb250cm9sLnZhbHVlKSA/IG51bGwgOiB7IGNoaW5lc2U6IHRydWUgfTtcbiAgfVxufVxuIl19