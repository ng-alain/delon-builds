/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiand0Lm1vZGVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2F1dGgvIiwic291cmNlcyI6WyJzcmMvdG9rZW4vand0L2p3dC5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUUvQyxJQUFBOzs7SUFRRSxzQkFBSSxrQ0FBTztRQUhYOztXQUVHOzs7OztRQUNIOztZQUNFLElBQU0sS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDNUMsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUM7Z0JBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDOztZQUVqRSxJQUFNLE9BQU8sR0FBRyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDMUMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzVCOzs7T0FBQTtJQUVEOzs7O09BSUc7Ozs7Ozs7SUFDSCxpQ0FBUzs7Ozs7O0lBQVQsVUFBVSxhQUF5QjtRQUF6Qiw4QkFBQSxFQUFBLGlCQUF5Qjs7UUFDakMsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUM3QixJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUM7WUFBRSxPQUFPLElBQUksQ0FBQzs7UUFFaEQsSUFBTSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFaEMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLEdBQUcsYUFBYSxHQUFHLElBQUksQ0FBQyxDQUFDO0tBQ3hFO3dCQWhDSDtJQWlDQyxDQUFBO0FBOUJELHlCQThCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElUb2tlbk1vZGVsIH0gZnJvbSAnLi4vaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgdXJsQmFzZTY0RGVjb2RlIH0gZnJvbSAnLi9qd3QuaGVscGVyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBKV1RUb2tlbk1vZGVsIGltcGxlbWVudHMgSVRva2VuTW9kZWwge1xyXG4gIFtrZXk6IHN0cmluZ106IGFueTtcclxuXHJcbiAgdG9rZW46IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICog6I635Y+W6L296I235L+h5oGvXHJcbiAgICovXHJcbiAgZ2V0IHBheWxvYWQoKTogYW55IHtcclxuICAgIGNvbnN0IHBhcnRzID0gKHRoaXMudG9rZW4gfHwgJycpLnNwbGl0KCcuJyk7XHJcbiAgICBpZiAocGFydHMubGVuZ3RoICE9PSAzKSB0aHJvdyBuZXcgRXJyb3IoJ0pXVCBtdXN0IGhhdmUgMyBwYXJ0cycpO1xyXG5cclxuICAgIGNvbnN0IGRlY29kZWQgPSB1cmxCYXNlNjREZWNvZGUocGFydHNbMV0pO1xyXG4gICAgcmV0dXJuIEpTT04ucGFyc2UoZGVjb2RlZCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDmo4Dmn6VUb2tlbuaYr+WQpui/h+acn++8jGBwYXlsb2FkYCDlv4XpobvljIXlkKsgYGV4cGAg5pe25pyJ5pWIXHJcbiAgICpcclxuICAgKiBAcGFyYW0gb2Zmc2V0U2Vjb25kcyDlgY/np7vph49cclxuICAgKi9cclxuICBpc0V4cGlyZWQob2Zmc2V0U2Vjb25kczogbnVtYmVyID0gMCk6IGJvb2xlYW4ge1xyXG4gICAgY29uc3QgZGVjb2RlZCA9IHRoaXMucGF5bG9hZDtcclxuICAgIGlmICghZGVjb2RlZC5oYXNPd25Qcm9wZXJ0eSgnZXhwJykpIHJldHVybiBudWxsO1xyXG5cclxuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgwKTtcclxuICAgIGRhdGUuc2V0VVRDU2Vjb25kcyhkZWNvZGVkLmV4cCk7XHJcblxyXG4gICAgcmV0dXJuICEoZGF0ZS52YWx1ZU9mKCkgPiBuZXcgRGF0ZSgpLnZhbHVlT2YoKSArIG9mZnNldFNlY29uZHMgKiAxMDAwKTtcclxuICB9XHJcbn1cclxuIl19