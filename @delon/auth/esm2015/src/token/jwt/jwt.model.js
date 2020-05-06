/**
 * @fileoverview added by tsickle
 * Generated from: src/token/jwt/jwt.model.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    /* Skipping unhandled member: [key: string]: NzSafeAny;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiand0Lm1vZGVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2F1dGgvIiwic291cmNlcyI6WyJzcmMvdG9rZW4vand0L2p3dC5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxjQUFjLENBQUM7Ozs7QUFFL0MseUJBZ0NDOzs7Ozs7SUE1QkMsa0JBQVk7Ozs7O0lBSVosa0JBQVk7Ozs7O0lBSVosa0JBQVk7Ozs7O0lBSVosa0JBQVk7Ozs7O0lBSVosa0JBQVk7Ozs7O0lBSVosa0JBQVk7Ozs7O0lBSVosa0JBQVk7Ozs7QUFNZCxNQUFNLE9BQU8sYUFBYTs7Ozs7SUFReEIsSUFBSSxPQUFPOztjQUNILEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUMzQyxJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQztZQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsdUJBQXVCLENBQUMsQ0FBQzs7Y0FFM0QsT0FBTyxHQUFHLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzdCLENBQUM7Ozs7O0lBS0QsSUFBSSxHQUFHOztjQUNDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTztRQUM1QixJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUM7WUFBRSxPQUFPLElBQUksQ0FBQzs7Y0FDMUMsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQyxPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN4QixDQUFDOzs7Ozs7O0lBT0QsU0FBUyxDQUFDLGdCQUF3QixDQUFDOztjQUMzQixHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUc7UUFDcEIsSUFBSSxHQUFHLElBQUksSUFBSTtZQUFFLE9BQU8sSUFBSSxDQUFDO1FBRTdCLE9BQU8sQ0FBQyxDQUFDLEdBQUcsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLGFBQWEsR0FBRyxJQUFJLENBQUMsQ0FBQztJQUM5RCxDQUFDO0NBQ0Y7OztJQW5DQyw4QkFBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgSVRva2VuTW9kZWwgfSBmcm9tICcuLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgdXJsQmFzZTY0RGVjb2RlIH0gZnJvbSAnLi9qd3QuaGVscGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBKV1Qge1xuICAvKipcbiAgICogSXNzdWVyZFxuICAgKi9cbiAgaXNzOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBJc3N1ZWQgQXRcbiAgICovXG4gIGlhdDogc3RyaW5nO1xuICAvKipcbiAgICogU3ViamVjdFxuICAgKi9cbiAgc3ViOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBFeHBpcmF0aW9uIFRpbWVcbiAgICovXG4gIGV4cDogbnVtYmVyO1xuICAvKipcbiAgICogQXVkaWVuY2VcbiAgICovXG4gIGF1ZDogc3RyaW5nO1xuICAvKipcbiAgICogTm90IEJlZm9yZVxuICAgKi9cbiAgbmJmOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBKV1QgSURcbiAgICovXG4gIGp0aTogc3RyaW5nO1xuXG4gIFtrZXk6IHN0cmluZ106IGFueTtcbiAgW2tleTogbnVtYmVyXTogYW55O1xufVxuXG5leHBvcnQgY2xhc3MgSldUVG9rZW5Nb2RlbCBpbXBsZW1lbnRzIElUb2tlbk1vZGVsIHtcbiAgW2tleTogc3RyaW5nXTogTnpTYWZlQW55O1xuXG4gIHRva2VuOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkO1xuXG4gIC8qKlxuICAgKiDojrflj5bovb3ojbfkv6Hmga9cbiAgICovXG4gIGdldCBwYXlsb2FkKCk6IEpXVCB7XG4gICAgY29uc3QgcGFydHMgPSAodGhpcy50b2tlbiB8fCAnJykuc3BsaXQoJy4nKTtcbiAgICBpZiAocGFydHMubGVuZ3RoICE9PSAzKSB0aHJvdyBuZXcgRXJyb3IoJ0pXVCBtdXN0IGhhdmUgMyBwYXJ0cycpO1xuXG4gICAgY29uc3QgZGVjb2RlZCA9IHVybEJhc2U2NERlY29kZShwYXJ0c1sxXSk7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UoZGVjb2RlZCk7XG4gIH1cblxuICAvKipcbiAgICog6I635Y+W6L+H5pyf5pe26Ze05oiz77yI5Y2V5L2N77yabXPvvIlcbiAgICovXG4gIGdldCBleHAoKTogbnVtYmVyIHwgbnVsbCB7XG4gICAgY29uc3QgZGVjb2RlZCA9IHRoaXMucGF5bG9hZDtcbiAgICBpZiAoIWRlY29kZWQuaGFzT3duUHJvcGVydHkoJ2V4cCcpKSByZXR1cm4gbnVsbDtcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoMCk7XG4gICAgZGF0ZS5zZXRVVENTZWNvbmRzKGRlY29kZWQuZXhwKTtcbiAgICByZXR1cm4gZGF0ZS52YWx1ZU9mKCk7XG4gIH1cblxuICAvKipcbiAgICog5qOA5p+lVG9rZW7mmK/lkKbov4fmnJ/vvIzlvZNgcGF5bG9hZGAg5YyF5ZCrIGBleHBgIOWtl+auteaXtuacieaViO+8jOiLpeaXoCBgZXhwYCDlrZfmrrXnm7TmjqXov5Tlm54gYG51bGxgXG4gICAqXG4gICAqIEBwYXJhbSBvZmZzZXRTZWNvbmRzIOWBj+enu+mHj1xuICAgKi9cbiAgaXNFeHBpcmVkKG9mZnNldFNlY29uZHM6IG51bWJlciA9IDApOiBib29sZWFuIHwgbnVsbCB7XG4gICAgY29uc3QgZXhwID0gdGhpcy5leHA7XG4gICAgaWYgKGV4cCA9PSBudWxsKSByZXR1cm4gbnVsbDtcblxuICAgIHJldHVybiAhKGV4cCA+IG5ldyBEYXRlKCkudmFsdWVPZigpICsgb2Zmc2V0U2Vjb25kcyAqIDEwMDApO1xuICB9XG59XG4iXX0=