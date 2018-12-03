/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { urlBase64Decode } from './jwt.helper';
export class JWTTokenModel {
    /**
     * 获取载荷信息
     * @return {?}
     */
    // tslint:disable-next-line:no-any
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
    /* Skipping unhandled member: [key: string]: any;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiand0Lm1vZGVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2F1dGgvIiwic291cmNlcyI6WyJzcmMvdG9rZW4vand0L2p3dC5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUUvQyxNQUFNLE9BQU8sYUFBYTs7Ozs7O0lBVXhCLElBQUksT0FBTzs7Y0FDSCxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDM0MsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUM7WUFBRSxNQUFNLElBQUksS0FBSyxDQUFDLHVCQUF1QixDQUFDLENBQUM7O2NBRTNELE9BQU8sR0FBRyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM3QixDQUFDOzs7Ozs7O0lBT0QsU0FBUyxDQUFDLGdCQUF3QixDQUFDOztjQUMzQixPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU87UUFDNUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDO1lBQUUsT0FBTyxJQUFJLENBQUM7O2NBRTFDLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFaEMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLEdBQUcsYUFBYSxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQ3pFLENBQUM7Q0FDRjs7O0lBNUJDLDhCQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSVRva2VuTW9kZWwgfSBmcm9tICcuLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgdXJsQmFzZTY0RGVjb2RlIH0gZnJvbSAnLi9qd3QuaGVscGVyJztcblxuZXhwb3J0IGNsYXNzIEpXVFRva2VuTW9kZWwgaW1wbGVtZW50cyBJVG9rZW5Nb2RlbCB7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgW2tleTogc3RyaW5nXTogYW55O1xuXG4gIHRva2VuOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIOiOt+WPlui9veiNt+S/oeaBr1xuICAgKi9cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBnZXQgcGF5bG9hZCgpOiBhbnkge1xuICAgIGNvbnN0IHBhcnRzID0gKHRoaXMudG9rZW4gfHwgJycpLnNwbGl0KCcuJyk7XG4gICAgaWYgKHBhcnRzLmxlbmd0aCAhPT0gMykgdGhyb3cgbmV3IEVycm9yKCdKV1QgbXVzdCBoYXZlIDMgcGFydHMnKTtcblxuICAgIGNvbnN0IGRlY29kZWQgPSB1cmxCYXNlNjREZWNvZGUocGFydHNbMV0pO1xuICAgIHJldHVybiBKU09OLnBhcnNlKGRlY29kZWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIOajgOafpVRva2Vu5piv5ZCm6L+H5pyf77yMYHBheWxvYWRgIOW/hemhu+WMheWQqyBgZXhwYCDml7bmnInmlYhcbiAgICpcbiAgICogQHBhcmFtIG9mZnNldFNlY29uZHMg5YGP56e76YePXG4gICAqL1xuICBpc0V4cGlyZWQob2Zmc2V0U2Vjb25kczogbnVtYmVyID0gMCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGRlY29kZWQgPSB0aGlzLnBheWxvYWQ7XG4gICAgaWYgKCFkZWNvZGVkLmhhc093blByb3BlcnR5KCdleHAnKSkgcmV0dXJuIG51bGw7XG5cbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoMCk7XG4gICAgZGF0ZS5zZXRVVENTZWNvbmRzKGRlY29kZWQuZXhwKTtcblxuICAgIHJldHVybiAhKGRhdGUudmFsdWVPZigpID4gbmV3IERhdGUoKS52YWx1ZU9mKCkgKyBvZmZzZXRTZWNvbmRzICogMTAwMCk7XG4gIH1cbn1cbiJdfQ==