/**
 * @fileoverview added by tsickle
 * Generated from: src/token/jwt/jwt.model.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { urlBase64Decode } from './jwt.helper';
/**
 * @record
 */
export function JWT() { }
if (false) {
    /**
     * Issuerd
     * @type {?}
     */
    JWT.prototype.iss;
    /**
     * Issued At
     * @type {?}
     */
    JWT.prototype.iat;
    /**
     * Subject
     * @type {?}
     */
    JWT.prototype.sub;
    /**
     * Expiration Time
     * @type {?}
     */
    JWT.prototype.exp;
    /**
     * Audience
     * @type {?}
     */
    JWT.prototype.aud;
    /**
     * Not Before
     * @type {?}
     */
    JWT.prototype.nbf;
    /**
     * JWT ID
     * @type {?}
     */
    JWT.prototype.jti;
    /* Skipping unhandled member: [key: string]: any;*/
    /* Skipping unhandled member: [key: number]: any;*/
}
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
     * 获取过期时间戳（单位：ms）
     * @return {?}
     */
    get exp() {
        /** @type {?} */
        const decoded = this.payload;
        if (!decoded.hasOwnProperty('exp'))
            return null;
        /** @type {?} */
        const date = new Date(0);
        date.setUTCSeconds(decoded.exp);
        return date.valueOf();
    }
    /**
     * 检查Token是否过期，当`payload` 包含 `exp` 字段时有效，若无 `exp` 字段直接返回 `null`
     *
     * @param {?=} offsetSeconds 偏移量
     * @return {?}
     */
    isExpired(offsetSeconds = 0) {
        /** @type {?} */
        const exp = this.exp;
        if (exp == null)
            return null;
        return !(exp > new Date().valueOf() + offsetSeconds * 1000);
    }
}
if (false) {
    /** @type {?} */
    JWTTokenModel.prototype.token;
    /** @type {?} */
    JWTTokenModel.prototype.expired;
    /* Skipping unhandled member: [key: string]: NzSafeAny;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiand0Lm1vZGVsLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3ZzdHMvd29yay8xL3MvcGFja2FnZXMvYXV0aC8iLCJzb3VyY2VzIjpbInNyYy90b2tlbi9qd3Qvand0Lm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7OztBQUUvQyx5QkFnQ0M7Ozs7OztJQTVCQyxrQkFBWTs7Ozs7SUFJWixrQkFBWTs7Ozs7SUFJWixrQkFBWTs7Ozs7SUFJWixrQkFBWTs7Ozs7SUFJWixrQkFBWTs7Ozs7SUFJWixrQkFBWTs7Ozs7SUFJWixrQkFBWTs7OztBQU1kLE1BQU0sT0FBTyxhQUFhOzs7OztJQVV4QixJQUFJLE9BQU87O2NBQ0gsS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQzNDLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDO1lBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDOztjQUUzRCxPQUFPLEdBQUcsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6QyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7Ozs7SUFLRCxJQUFJLEdBQUc7O2NBQ0MsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPO1FBQzVCLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQztZQUFFLE9BQU8sSUFBSSxDQUFDOztjQUMxQyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3hCLENBQUM7Ozs7Ozs7SUFPRCxTQUFTLENBQUMsZ0JBQXdCLENBQUM7O2NBQzNCLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRztRQUNwQixJQUFJLEdBQUcsSUFBSSxJQUFJO1lBQUUsT0FBTyxJQUFJLENBQUM7UUFFN0IsT0FBTyxDQUFDLENBQUMsR0FBRyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLEdBQUcsYUFBYSxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQzlELENBQUM7Q0FDRjs7O0lBckNDLDhCQUFpQzs7SUFFakMsZ0NBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IElUb2tlbk1vZGVsIH0gZnJvbSAnLi4vaW50ZXJmYWNlJztcbmltcG9ydCB7IHVybEJhc2U2NERlY29kZSB9IGZyb20gJy4vand0LmhlbHBlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSldUIHtcbiAgLyoqXG4gICAqIElzc3VlcmRcbiAgICovXG4gIGlzczogc3RyaW5nO1xuICAvKipcbiAgICogSXNzdWVkIEF0XG4gICAqL1xuICBpYXQ6IHN0cmluZztcbiAgLyoqXG4gICAqIFN1YmplY3RcbiAgICovXG4gIHN1Yjogc3RyaW5nO1xuICAvKipcbiAgICogRXhwaXJhdGlvbiBUaW1lXG4gICAqL1xuICBleHA6IG51bWJlcjtcbiAgLyoqXG4gICAqIEF1ZGllbmNlXG4gICAqL1xuICBhdWQ6IHN0cmluZztcbiAgLyoqXG4gICAqIE5vdCBCZWZvcmVcbiAgICovXG4gIG5iZjogc3RyaW5nO1xuICAvKipcbiAgICogSldUIElEXG4gICAqL1xuICBqdGk6IHN0cmluZztcblxuICBba2V5OiBzdHJpbmddOiBhbnk7XG4gIFtrZXk6IG51bWJlcl06IGFueTtcbn1cblxuZXhwb3J0IGNsYXNzIEpXVFRva2VuTW9kZWwgaW1wbGVtZW50cyBJVG9rZW5Nb2RlbCB7XG4gIFtrZXk6IHN0cmluZ106IE56U2FmZUFueTtcblxuICB0b2tlbjogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZDtcblxuICBleHBpcmVkPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiDojrflj5bovb3ojbfkv6Hmga9cbiAgICovXG4gIGdldCBwYXlsb2FkKCk6IEpXVCB7XG4gICAgY29uc3QgcGFydHMgPSAodGhpcy50b2tlbiB8fCAnJykuc3BsaXQoJy4nKTtcbiAgICBpZiAocGFydHMubGVuZ3RoICE9PSAzKSB0aHJvdyBuZXcgRXJyb3IoJ0pXVCBtdXN0IGhhdmUgMyBwYXJ0cycpO1xuXG4gICAgY29uc3QgZGVjb2RlZCA9IHVybEJhc2U2NERlY29kZShwYXJ0c1sxXSk7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UoZGVjb2RlZCk7XG4gIH1cblxuICAvKipcbiAgICog6I635Y+W6L+H5pyf5pe26Ze05oiz77yI5Y2V5L2N77yabXPvvIlcbiAgICovXG4gIGdldCBleHAoKTogbnVtYmVyIHwgbnVsbCB7XG4gICAgY29uc3QgZGVjb2RlZCA9IHRoaXMucGF5bG9hZDtcbiAgICBpZiAoIWRlY29kZWQuaGFzT3duUHJvcGVydHkoJ2V4cCcpKSByZXR1cm4gbnVsbDtcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoMCk7XG4gICAgZGF0ZS5zZXRVVENTZWNvbmRzKGRlY29kZWQuZXhwKTtcbiAgICByZXR1cm4gZGF0ZS52YWx1ZU9mKCk7XG4gIH1cblxuICAvKipcbiAgICog5qOA5p+lVG9rZW7mmK/lkKbov4fmnJ/vvIzlvZNgcGF5bG9hZGAg5YyF5ZCrIGBleHBgIOWtl+auteaXtuacieaViO+8jOiLpeaXoCBgZXhwYCDlrZfmrrXnm7TmjqXov5Tlm54gYG51bGxgXG4gICAqXG4gICAqIEBwYXJhbSBvZmZzZXRTZWNvbmRzIOWBj+enu+mHj1xuICAgKi9cbiAgaXNFeHBpcmVkKG9mZnNldFNlY29uZHM6IG51bWJlciA9IDApOiBib29sZWFuIHwgbnVsbCB7XG4gICAgY29uc3QgZXhwID0gdGhpcy5leHA7XG4gICAgaWYgKGV4cCA9PSBudWxsKSByZXR1cm4gbnVsbDtcblxuICAgIHJldHVybiAhKGV4cCA+IG5ldyBEYXRlKCkudmFsdWVPZigpICsgb2Zmc2V0U2Vjb25kcyAqIDEwMDApO1xuICB9XG59XG4iXX0=