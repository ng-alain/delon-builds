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
    Object.defineProperty(JWTTokenModel.prototype, "exp", {
        /**
         * 获取过期时间戳（单位：ms）
         */
        get: /**
         * 获取过期时间戳（单位：ms）
         * @return {?}
         */
        function () {
            /** @type {?} */
            var decoded = this.payload;
            if (!decoded.hasOwnProperty('exp'))
                return null;
            /** @type {?} */
            var date = new Date(0);
            date.setUTCSeconds(decoded.exp);
            return date.valueOf();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 检查Token是否过期，当`payload` 包含 `exp` 字段时有效，若无 `exp` 字段直接返回 `null`
     *
     * @param offsetSeconds 偏移量
     */
    /**
     * 检查Token是否过期，当`payload` 包含 `exp` 字段时有效，若无 `exp` 字段直接返回 `null`
     *
     * @param {?=} offsetSeconds 偏移量
     * @return {?}
     */
    JWTTokenModel.prototype.isExpired = /**
     * 检查Token是否过期，当`payload` 包含 `exp` 字段时有效，若无 `exp` 字段直接返回 `null`
     *
     * @param {?=} offsetSeconds 偏移量
     * @return {?}
     */
    function (offsetSeconds) {
        if (offsetSeconds === void 0) { offsetSeconds = 0; }
        /** @type {?} */
        var exp = this.exp;
        if (exp == null)
            return null;
        return !(exp > new Date().valueOf() + offsetSeconds * 1000);
    };
    return JWTTokenModel;
}());
export { JWTTokenModel };
if (false) {
    /** @type {?} */
    JWTTokenModel.prototype.token;
    /* Skipping unhandled member: [key: string]: NzSafeAny;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiand0Lm1vZGVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2F1dGgvIiwic291cmNlcyI6WyJzcmMvdG9rZW4vand0L2p3dC5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxjQUFjLENBQUM7Ozs7QUFFL0MseUJBZ0NDOzs7Ozs7SUE1QkMsa0JBQVk7Ozs7O0lBSVosa0JBQVk7Ozs7O0lBSVosa0JBQVk7Ozs7O0lBSVosa0JBQVk7Ozs7O0lBSVosa0JBQVk7Ozs7O0lBSVosa0JBQVk7Ozs7O0lBSVosa0JBQVk7Ozs7QUFNZDtJQUFBO0lBc0NBLENBQUM7SUE5QkMsc0JBQUksa0NBQU87UUFIWDs7V0FFRzs7Ozs7UUFDSDs7Z0JBQ1EsS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1lBQzNDLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDO2dCQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsdUJBQXVCLENBQUMsQ0FBQzs7Z0JBRTNELE9BQU8sR0FBRyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3pDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM3QixDQUFDOzs7T0FBQTtJQUtELHNCQUFJLDhCQUFHO1FBSFA7O1dBRUc7Ozs7O1FBQ0g7O2dCQUNRLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTztZQUM1QixJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUM7Z0JBQUUsT0FBTyxJQUFJLENBQUM7O2dCQUMxQyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2hDLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3hCLENBQUM7OztPQUFBO0lBRUQ7Ozs7T0FJRzs7Ozs7OztJQUNILGlDQUFTOzs7Ozs7SUFBVCxVQUFVLGFBQXlCO1FBQXpCLDhCQUFBLEVBQUEsaUJBQXlCOztZQUMzQixHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUc7UUFDcEIsSUFBSSxHQUFHLElBQUksSUFBSTtZQUFFLE9BQU8sSUFBSSxDQUFDO1FBRTdCLE9BQU8sQ0FBQyxDQUFDLEdBQUcsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLGFBQWEsR0FBRyxJQUFJLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBQ0gsb0JBQUM7QUFBRCxDQUFDLEFBdENELElBc0NDOzs7O0lBbkNDLDhCQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBJVG9rZW5Nb2RlbCB9IGZyb20gJy4uL2ludGVyZmFjZSc7XG5pbXBvcnQgeyB1cmxCYXNlNjREZWNvZGUgfSBmcm9tICcuL2p3dC5oZWxwZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIEpXVCB7XG4gIC8qKlxuICAgKiBJc3N1ZXJkXG4gICAqL1xuICBpc3M6IHN0cmluZztcbiAgLyoqXG4gICAqIElzc3VlZCBBdFxuICAgKi9cbiAgaWF0OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBTdWJqZWN0XG4gICAqL1xuICBzdWI6IHN0cmluZztcbiAgLyoqXG4gICAqIEV4cGlyYXRpb24gVGltZVxuICAgKi9cbiAgZXhwOiBudW1iZXI7XG4gIC8qKlxuICAgKiBBdWRpZW5jZVxuICAgKi9cbiAgYXVkOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBOb3QgQmVmb3JlXG4gICAqL1xuICBuYmY6IHN0cmluZztcbiAgLyoqXG4gICAqIEpXVCBJRFxuICAgKi9cbiAganRpOiBzdHJpbmc7XG5cbiAgW2tleTogc3RyaW5nXTogYW55O1xuICBba2V5OiBudW1iZXJdOiBhbnk7XG59XG5cbmV4cG9ydCBjbGFzcyBKV1RUb2tlbk1vZGVsIGltcGxlbWVudHMgSVRva2VuTW9kZWwge1xuICBba2V5OiBzdHJpbmddOiBOelNhZmVBbnk7XG5cbiAgdG9rZW46IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQ7XG5cbiAgLyoqXG4gICAqIOiOt+WPlui9veiNt+S/oeaBr1xuICAgKi9cbiAgZ2V0IHBheWxvYWQoKTogSldUIHtcbiAgICBjb25zdCBwYXJ0cyA9ICh0aGlzLnRva2VuIHx8ICcnKS5zcGxpdCgnLicpO1xuICAgIGlmIChwYXJ0cy5sZW5ndGggIT09IDMpIHRocm93IG5ldyBFcnJvcignSldUIG11c3QgaGF2ZSAzIHBhcnRzJyk7XG5cbiAgICBjb25zdCBkZWNvZGVkID0gdXJsQmFzZTY0RGVjb2RlKHBhcnRzWzFdKTtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShkZWNvZGVkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDojrflj5bov4fmnJ/ml7bpl7TmiLPvvIjljZXkvY3vvJptc++8iVxuICAgKi9cbiAgZ2V0IGV4cCgpOiBudW1iZXIgfCBudWxsIHtcbiAgICBjb25zdCBkZWNvZGVkID0gdGhpcy5wYXlsb2FkO1xuICAgIGlmICghZGVjb2RlZC5oYXNPd25Qcm9wZXJ0eSgnZXhwJykpIHJldHVybiBudWxsO1xuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgwKTtcbiAgICBkYXRlLnNldFVUQ1NlY29uZHMoZGVjb2RlZC5leHApO1xuICAgIHJldHVybiBkYXRlLnZhbHVlT2YoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDmo4Dmn6VUb2tlbuaYr+WQpui/h+acn++8jOW9k2BwYXlsb2FkYCDljIXlkKsgYGV4cGAg5a2X5q615pe25pyJ5pWI77yM6Iul5pegIGBleHBgIOWtl+auteebtOaOpei/lOWbniBgbnVsbGBcbiAgICpcbiAgICogQHBhcmFtIG9mZnNldFNlY29uZHMg5YGP56e76YePXG4gICAqL1xuICBpc0V4cGlyZWQob2Zmc2V0U2Vjb25kczogbnVtYmVyID0gMCk6IGJvb2xlYW4gfCBudWxsIHtcbiAgICBjb25zdCBleHAgPSB0aGlzLmV4cDtcbiAgICBpZiAoZXhwID09IG51bGwpIHJldHVybiBudWxsO1xuXG4gICAgcmV0dXJuICEoZXhwID4gbmV3IERhdGUoKS52YWx1ZU9mKCkgKyBvZmZzZXRTZWNvbmRzICogMTAwMCk7XG4gIH1cbn1cbiJdfQ==