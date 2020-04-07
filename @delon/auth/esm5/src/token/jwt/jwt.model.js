/**
 * @fileoverview added by tsickle
 * Generated from: src/token/jwt/jwt.model.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { urlBase64Decode } from './jwt.helper';
var JWTTokenModel = /** @class */ (function () {
    function JWTTokenModel() {
    }
    Object.defineProperty(JWTTokenModel.prototype, "payload", {
        /**
         * 获取载荷信息
         */
        get: /**
         * 获取载荷信息
         * @return {?}
         */
        function () {
            /** @type {?} */
            var parts = (this.token || '').split('.');
            if (parts.length !== 3)
                throw new Error('JWT must have 3 parts');
            /** @type {?} */
            var decoded = urlBase64Decode(parts[1]);
            return JSON.parse(decoded);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 检查Token是否过期，`payload` 必须包含 `exp` 时有效
     *
     * @param offsetSeconds 偏移量
     */
    /**
     * 检查Token是否过期，`payload` 必须包含 `exp` 时有效
     *
     * @param {?=} offsetSeconds 偏移量
     * @return {?}
     */
    JWTTokenModel.prototype.isExpired = /**
     * 检查Token是否过期，`payload` 必须包含 `exp` 时有效
     *
     * @param {?=} offsetSeconds 偏移量
     * @return {?}
     */
    function (offsetSeconds) {
        if (offsetSeconds === void 0) { offsetSeconds = 0; }
        /** @type {?} */
        var decoded = this.payload;
        if (!decoded.hasOwnProperty('exp'))
            return null;
        /** @type {?} */
        var date = new Date(0);
        date.setUTCSeconds(decoded.exp);
        return !(date.valueOf() > new Date().valueOf() + offsetSeconds * 1000);
    };
    return JWTTokenModel;
}());
export { JWTTokenModel };
if (false) {
    /** @type {?} */
    JWTTokenModel.prototype.token;
    /* Skipping unhandled member: [key: string]: any;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiand0Lm1vZGVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2F1dGgvIiwic291cmNlcyI6WyJzcmMvdG9rZW4vand0L2p3dC5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFFL0M7SUFBQTtJQThCQSxDQUFDO0lBdEJDLHNCQUFJLGtDQUFPO1FBSFg7O1dBRUc7Ozs7O1FBQ0g7O2dCQUNRLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztZQUMzQyxJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQztnQkFBRSxNQUFNLElBQUksS0FBSyxDQUFDLHVCQUF1QixDQUFDLENBQUM7O2dCQUUzRCxPQUFPLEdBQUcsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN6QyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDN0IsQ0FBQzs7O09BQUE7SUFFRDs7OztPQUlHOzs7Ozs7O0lBQ0gsaUNBQVM7Ozs7OztJQUFULFVBQVUsYUFBeUI7UUFBekIsOEJBQUEsRUFBQSxpQkFBeUI7O1lBQzNCLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTztRQUM1QixJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUM7WUFBRSxPQUFPLElBQUksQ0FBQzs7WUFFMUMsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVoQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxhQUFhLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDekUsQ0FBQztJQUNILG9CQUFDO0FBQUQsQ0FBQyxBQTlCRCxJQThCQzs7OztJQTNCQyw4QkFBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJVG9rZW5Nb2RlbCB9IGZyb20gJy4uL2ludGVyZmFjZSc7XG5pbXBvcnQgeyB1cmxCYXNlNjREZWNvZGUgfSBmcm9tICcuL2p3dC5oZWxwZXInO1xuXG5leHBvcnQgY2xhc3MgSldUVG9rZW5Nb2RlbCBpbXBsZW1lbnRzIElUb2tlbk1vZGVsIHtcbiAgW2tleTogc3RyaW5nXTogYW55O1xuXG4gIHRva2VuOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkO1xuXG4gIC8qKlxuICAgKiDojrflj5bovb3ojbfkv6Hmga9cbiAgICovXG4gIGdldCBwYXlsb2FkKCk6IGFueSB7XG4gICAgY29uc3QgcGFydHMgPSAodGhpcy50b2tlbiB8fCAnJykuc3BsaXQoJy4nKTtcbiAgICBpZiAocGFydHMubGVuZ3RoICE9PSAzKSB0aHJvdyBuZXcgRXJyb3IoJ0pXVCBtdXN0IGhhdmUgMyBwYXJ0cycpO1xuXG4gICAgY29uc3QgZGVjb2RlZCA9IHVybEJhc2U2NERlY29kZShwYXJ0c1sxXSk7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UoZGVjb2RlZCk7XG4gIH1cblxuICAvKipcbiAgICog5qOA5p+lVG9rZW7mmK/lkKbov4fmnJ/vvIxgcGF5bG9hZGAg5b+F6aG75YyF5ZCrIGBleHBgIOaXtuacieaViFxuICAgKlxuICAgKiBAcGFyYW0gb2Zmc2V0U2Vjb25kcyDlgY/np7vph49cbiAgICovXG4gIGlzRXhwaXJlZChvZmZzZXRTZWNvbmRzOiBudW1iZXIgPSAwKTogYm9vbGVhbiB8IG51bGwge1xuICAgIGNvbnN0IGRlY29kZWQgPSB0aGlzLnBheWxvYWQ7XG4gICAgaWYgKCFkZWNvZGVkLmhhc093blByb3BlcnR5KCdleHAnKSkgcmV0dXJuIG51bGw7XG5cbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoMCk7XG4gICAgZGF0ZS5zZXRVVENTZWNvbmRzKGRlY29kZWQuZXhwKTtcblxuICAgIHJldHVybiAhKGRhdGUudmFsdWVPZigpID4gbmV3IERhdGUoKS52YWx1ZU9mKCkgKyBvZmZzZXRTZWNvbmRzICogMTAwMCk7XG4gIH1cbn1cbiJdfQ==