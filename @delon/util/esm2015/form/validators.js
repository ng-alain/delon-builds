/**
 * @fileoverview added by tsickle
 * Generated from: validators.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { isDecimal, isIdCard, isInt, isIp4, isMobile, isNum, isUrl } from '@delon/util/format';
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
     * Wheter is IPv4 address
     *
     * 是否IP4地址
     * @param {?} control
     * @return {?}
     */
    static ip4(control) {
        return isIp4(control.value) ? null : { ip4: true };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3V0aWwvZm9ybS92YWxpZGF0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7Ozs7O0FBUS9GLE1BQU0sT0FBTyxXQUFXOzs7Ozs7OztJQU10QixNQUFNLENBQUMsR0FBRyxDQUFDLE9BQXdCO1FBQ2pDLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FBQztJQUNyRCxDQUFDOzs7Ozs7OztJQU9ELE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBd0I7UUFDakMsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDO0lBQ3JELENBQUM7Ozs7Ozs7O0lBT0QsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUF3QjtRQUNyQyxPQUFPLFNBQVMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUM7SUFDN0QsQ0FBQzs7Ozs7Ozs7SUFPRCxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQXdCO1FBQ3BDLE9BQU8sUUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQztJQUMzRCxDQUFDOzs7Ozs7OztJQU9ELE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBd0I7UUFDcEMsT0FBTyxRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDO0lBQzNELENBQUM7Ozs7Ozs7O0lBT0QsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUF3QjtRQUNqQyxPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUM7SUFDckQsQ0FBQzs7Ozs7Ozs7SUFPRCxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQXdCO1FBQ2pDLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FBQztJQUNyRCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wsIFZhbGlkYXRpb25FcnJvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBpc0RlY2ltYWwsIGlzSWRDYXJkLCBpc0ludCwgaXNJcDQsIGlzTW9iaWxlLCBpc051bSwgaXNVcmwgfSBmcm9tICdAZGVsb24vdXRpbC9mb3JtYXQnO1xuXG4vKipcbiAqIEEgc2V0IG9mIHZhbGlkYXRvcnMgZm9yIHJlYWN0aXZlIGZvcm1zXG4gKlxuICog5LiA5aWX55So5LqO5ZON5bqU5byP6KGo5Y2V55qE6aqM6K+B5ZmoXG4gKi9cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjbGFzcy1uYW1lXG5leHBvcnQgY2xhc3MgX1ZhbGlkYXRvcnMge1xuICAvKipcbiAgICogV2hldGVyIGlzIG51bWJlclxuICAgKlxuICAgKiDmmK/lkKbkuLrmlbDlrZdcbiAgICovXG4gIHN0YXRpYyBudW0oY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xuICAgIHJldHVybiBpc051bShjb250cm9sLnZhbHVlKSA/IG51bGwgOiB7IG51bTogdHJ1ZSB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFdoZXRlciBpcyBpbnRlZ2VyXG4gICAqXG4gICAqIOaYr+WQpuS4uuaVtOaVsFxuICAgKi9cbiAgc3RhdGljIGludChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCB7XG4gICAgcmV0dXJuIGlzSW50KGNvbnRyb2wudmFsdWUpID8gbnVsbCA6IHsgaW50OiB0cnVlIH07XG4gIH1cblxuICAvKipcbiAgICogV2hldGVyIGlzIGRlY2ltYWxcbiAgICpcbiAgICog5piv5ZCm5Li65bCP5pWw54K55pWw5YC8XG4gICAqL1xuICBzdGF0aWMgZGVjaW1hbChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCB7XG4gICAgcmV0dXJuIGlzRGVjaW1hbChjb250cm9sLnZhbHVlKSA/IG51bGwgOiB7IGRlY2ltYWw6IHRydWUgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGV0ZXIgaXMgUGVvcGxlJ3MgUmVwdWJsaWMgb2YgQ2hpbmEgaWRlbnRpdHkgY2FyZFxuICAgKlxuICAgKiDmmK/lkKbkuLrkuK3ljY7kurrmsJHlhbHlkozlm73lsYXmsJHouqvku73or4FcbiAgICovXG4gIHN0YXRpYyBpZENhcmQoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xuICAgIHJldHVybiBpc0lkQ2FyZChjb250cm9sLnZhbHVlKSA/IG51bGwgOiB7IGlkQ2FyZDogdHJ1ZSB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFdoZXRlciBpcyBjaGluYSBtb2JpbGUgKENoaW5hKVxuICAgKlxuICAgKiDmmK/lkKbkuLrmiYvmnLrlj7fvvIjkuK3lm73vvIlcbiAgICovXG4gIHN0YXRpYyBtb2JpbGUoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xuICAgIHJldHVybiBpc01vYmlsZShjb250cm9sLnZhbHVlKSA/IG51bGwgOiB7IG1vYmlsZTogdHJ1ZSB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFdoZXRlciBpcyB1cmwgYWRkcmVzc1xuICAgKlxuICAgKiDmmK/lkKZVUkzlnLDlnYBcbiAgICovXG4gIHN0YXRpYyB1cmwoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xuICAgIHJldHVybiBpc1VybChjb250cm9sLnZhbHVlKSA/IG51bGwgOiB7IHVybDogdHJ1ZSB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFdoZXRlciBpcyBJUHY0IGFkZHJlc3NcbiAgICpcbiAgICog5piv5ZCmSVA05Zyw5Z2AXG4gICAqL1xuICBzdGF0aWMgaXA0KGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcbiAgICByZXR1cm4gaXNJcDQoY29udHJvbC52YWx1ZSkgPyBudWxsIDogeyBpcDQ6IHRydWUgfTtcbiAgfVxufVxuIl19