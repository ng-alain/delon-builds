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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiand0Lm1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYXV0aC9zcmMvdG9rZW4vand0L2p3dC5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxjQUFjLENBQUM7Ozs7QUFFL0MseUJBZ0NDOzs7Ozs7SUE1QkMsa0JBQVk7Ozs7O0lBSVosa0JBQVk7Ozs7O0lBSVosa0JBQVk7Ozs7O0lBSVosa0JBQVk7Ozs7O0lBSVosa0JBQVk7Ozs7O0lBSVosa0JBQVk7Ozs7O0lBSVosa0JBQVk7Ozs7QUFNZCxNQUFNLE9BQU8sYUFBYTs7Ozs7SUFVeEIsSUFBSSxPQUFPOztjQUNILEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUMzQyxJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQztZQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsdUJBQXVCLENBQUMsQ0FBQzs7Y0FFM0QsT0FBTyxHQUFHLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzdCLENBQUM7Ozs7O0lBS0QsSUFBSSxHQUFHOztjQUNDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTztRQUM1QixJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUM7WUFBRSxPQUFPLElBQUksQ0FBQzs7Y0FDMUMsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQyxPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN4QixDQUFDOzs7Ozs7O0lBT0QsU0FBUyxDQUFDLGdCQUF3QixDQUFDOztjQUMzQixHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUc7UUFDcEIsSUFBSSxHQUFHLElBQUksSUFBSTtZQUFFLE9BQU8sSUFBSSxDQUFDO1FBRTdCLE9BQU8sQ0FBQyxDQUFDLEdBQUcsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLGFBQWEsR0FBRyxJQUFJLENBQUMsQ0FBQztJQUM5RCxDQUFDO0NBQ0Y7OztJQXJDQyw4QkFBaUM7O0lBRWpDLGdDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBJVG9rZW5Nb2RlbCB9IGZyb20gJy4uL2ludGVyZmFjZSc7XG5pbXBvcnQgeyB1cmxCYXNlNjREZWNvZGUgfSBmcm9tICcuL2p3dC5oZWxwZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIEpXVCB7XG4gIC8qKlxuICAgKiBJc3N1ZXJkXG4gICAqL1xuICBpc3M6IHN0cmluZztcbiAgLyoqXG4gICAqIElzc3VlZCBBdFxuICAgKi9cbiAgaWF0OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBTdWJqZWN0XG4gICAqL1xuICBzdWI6IHN0cmluZztcbiAgLyoqXG4gICAqIEV4cGlyYXRpb24gVGltZVxuICAgKi9cbiAgZXhwOiBudW1iZXI7XG4gIC8qKlxuICAgKiBBdWRpZW5jZVxuICAgKi9cbiAgYXVkOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBOb3QgQmVmb3JlXG4gICAqL1xuICBuYmY6IHN0cmluZztcbiAgLyoqXG4gICAqIEpXVCBJRFxuICAgKi9cbiAganRpOiBzdHJpbmc7XG5cbiAgW2tleTogc3RyaW5nXTogYW55O1xuICBba2V5OiBudW1iZXJdOiBhbnk7XG59XG5cbmV4cG9ydCBjbGFzcyBKV1RUb2tlbk1vZGVsIGltcGxlbWVudHMgSVRva2VuTW9kZWwge1xuICBba2V5OiBzdHJpbmddOiBOelNhZmVBbnk7XG5cbiAgdG9rZW46IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQ7XG5cbiAgZXhwaXJlZD86IG51bWJlcjtcblxuICAvKipcbiAgICog6I635Y+W6L296I235L+h5oGvXG4gICAqL1xuICBnZXQgcGF5bG9hZCgpOiBKV1Qge1xuICAgIGNvbnN0IHBhcnRzID0gKHRoaXMudG9rZW4gfHwgJycpLnNwbGl0KCcuJyk7XG4gICAgaWYgKHBhcnRzLmxlbmd0aCAhPT0gMykgdGhyb3cgbmV3IEVycm9yKCdKV1QgbXVzdCBoYXZlIDMgcGFydHMnKTtcblxuICAgIGNvbnN0IGRlY29kZWQgPSB1cmxCYXNlNjREZWNvZGUocGFydHNbMV0pO1xuICAgIHJldHVybiBKU09OLnBhcnNlKGRlY29kZWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIOiOt+WPlui/h+acn+aXtumXtOaIs++8iOWNleS9je+8mm1z77yJXG4gICAqL1xuICBnZXQgZXhwKCk6IG51bWJlciB8IG51bGwge1xuICAgIGNvbnN0IGRlY29kZWQgPSB0aGlzLnBheWxvYWQ7XG4gICAgaWYgKCFkZWNvZGVkLmhhc093blByb3BlcnR5KCdleHAnKSkgcmV0dXJuIG51bGw7XG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKDApO1xuICAgIGRhdGUuc2V0VVRDU2Vjb25kcyhkZWNvZGVkLmV4cCk7XG4gICAgcmV0dXJuIGRhdGUudmFsdWVPZigpO1xuICB9XG5cbiAgLyoqXG4gICAqIOajgOafpVRva2Vu5piv5ZCm6L+H5pyf77yM5b2TYHBheWxvYWRgIOWMheWQqyBgZXhwYCDlrZfmrrXml7bmnInmlYjvvIzoi6Xml6AgYGV4cGAg5a2X5q6155u05o6l6L+U5ZueIGBudWxsYFxuICAgKlxuICAgKiBAcGFyYW0gb2Zmc2V0U2Vjb25kcyDlgY/np7vph49cbiAgICovXG4gIGlzRXhwaXJlZChvZmZzZXRTZWNvbmRzOiBudW1iZXIgPSAwKTogYm9vbGVhbiB8IG51bGwge1xuICAgIGNvbnN0IGV4cCA9IHRoaXMuZXhwO1xuICAgIGlmIChleHAgPT0gbnVsbCkgcmV0dXJuIG51bGw7XG5cbiAgICByZXR1cm4gIShleHAgPiBuZXcgRGF0ZSgpLnZhbHVlT2YoKSArIG9mZnNldFNlY29uZHMgKiAxMDAwKTtcbiAgfVxufVxuIl19