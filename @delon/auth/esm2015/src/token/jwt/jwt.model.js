/**
 * @fileoverview added by tsickle
 * Generated from: src/token/jwt/jwt.model.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { urlBase64Decode } from './jwt.helper';
export class JWTTokenModel {
    /**
     * 获取载荷信息
     * @return {?}
     */
    get payload() {
        /** @type {?} */
        const parts = (this.token || '').split('.');
        if (parts.length !== 3)
            throw new Error('JWT must have 3 parts');
        /** @type {?} */
        const decoded = urlBase64Decode(parts[1]);
        return JSON.parse(decoded);
    }
    /**
     * 检查Token是否过期，`payload` 必须包含 `exp` 时有效
     *
     * @param {?=} offsetSeconds 偏移量
     * @return {?}
     */
    isExpired(offsetSeconds = 0) {
        /** @type {?} */
        const decoded = this.payload;
        if (!decoded.hasOwnProperty('exp'))
            return null;
        /** @type {?} */
        const date = new Date(0);
        date.setUTCSeconds(decoded.exp);
        return !(date.valueOf() > new Date().valueOf() + offsetSeconds * 1000);
    }
}
if (false) {
    /** @type {?} */
    JWTTokenModel.prototype.token;
    /* Skipping unhandled member: [key: string]: NzSafeAny;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiand0Lm1vZGVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2F1dGgvIiwic291cmNlcyI6WyJzcmMvdG9rZW4vand0L2p3dC5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFFL0MsTUFBTSxPQUFPLGFBQWE7Ozs7O0lBUXhCLElBQUksT0FBTzs7Y0FDSCxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDM0MsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUM7WUFBRSxNQUFNLElBQUksS0FBSyxDQUFDLHVCQUF1QixDQUFDLENBQUM7O2NBRTNELE9BQU8sR0FBRyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM3QixDQUFDOzs7Ozs7O0lBT0QsU0FBUyxDQUFDLGdCQUF3QixDQUFDOztjQUMzQixPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU87UUFDNUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDO1lBQUUsT0FBTyxJQUFJLENBQUM7O2NBRTFDLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFaEMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLEdBQUcsYUFBYSxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQ3pFLENBQUM7Q0FDRjs7O0lBM0JDLDhCQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBJVG9rZW5Nb2RlbCB9IGZyb20gJy4uL2ludGVyZmFjZSc7XG5pbXBvcnQgeyB1cmxCYXNlNjREZWNvZGUgfSBmcm9tICcuL2p3dC5oZWxwZXInO1xuXG5leHBvcnQgY2xhc3MgSldUVG9rZW5Nb2RlbCBpbXBsZW1lbnRzIElUb2tlbk1vZGVsIHtcbiAgW2tleTogc3RyaW5nXTogTnpTYWZlQW55O1xuXG4gIHRva2VuOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkO1xuXG4gIC8qKlxuICAgKiDojrflj5bovb3ojbfkv6Hmga9cbiAgICovXG4gIGdldCBwYXlsb2FkKCk6IE56U2FmZUFueSB7XG4gICAgY29uc3QgcGFydHMgPSAodGhpcy50b2tlbiB8fCAnJykuc3BsaXQoJy4nKTtcbiAgICBpZiAocGFydHMubGVuZ3RoICE9PSAzKSB0aHJvdyBuZXcgRXJyb3IoJ0pXVCBtdXN0IGhhdmUgMyBwYXJ0cycpO1xuXG4gICAgY29uc3QgZGVjb2RlZCA9IHVybEJhc2U2NERlY29kZShwYXJ0c1sxXSk7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UoZGVjb2RlZCk7XG4gIH1cblxuICAvKipcbiAgICog5qOA5p+lVG9rZW7mmK/lkKbov4fmnJ/vvIxgcGF5bG9hZGAg5b+F6aG75YyF5ZCrIGBleHBgIOaXtuacieaViFxuICAgKlxuICAgKiBAcGFyYW0gb2Zmc2V0U2Vjb25kcyDlgY/np7vph49cbiAgICovXG4gIGlzRXhwaXJlZChvZmZzZXRTZWNvbmRzOiBudW1iZXIgPSAwKTogYm9vbGVhbiB8IG51bGwge1xuICAgIGNvbnN0IGRlY29kZWQgPSB0aGlzLnBheWxvYWQ7XG4gICAgaWYgKCFkZWNvZGVkLmhhc093blByb3BlcnR5KCdleHAnKSkgcmV0dXJuIG51bGw7XG5cbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoMCk7XG4gICAgZGF0ZS5zZXRVVENTZWNvbmRzKGRlY29kZWQuZXhwKTtcblxuICAgIHJldHVybiAhKGRhdGUudmFsdWVPZigpID4gbmV3IERhdGUoKS52YWx1ZU9mKCkgKyBvZmZzZXRTZWNvbmRzICogMTAwMCk7XG4gIH1cbn1cbiJdfQ==