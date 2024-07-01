/* eslint-disable @typescript-eslint/no-explicit-any */
import { urlBase64Decode } from './jwt.helper';
export class JWTTokenModel {
    /**
     * 获取载荷信息
     */
    get payload() {
        const parts = (this.token || '').split('.');
        if (parts.length !== 3)
            throw new Error('JWT must have 3 parts');
        const decoded = urlBase64Decode(parts[1]);
        return JSON.parse(decoded);
    }
    /**
     * 获取过期时间戳（单位：ms）
     */
    get exp() {
        const decoded = this.payload;
        if (!decoded.hasOwnProperty('exp'))
            return null;
        const date = new Date(0);
        date.setUTCSeconds(decoded.exp);
        return date.valueOf();
    }
    /**
     * 检查Token是否过期，当`payload` 包含 `exp` 字段时有效，若无 `exp` 字段直接返回 `null`
     *
     * @param offsetSeconds 偏移量
     */
    isExpired(offsetSeconds = 0) {
        const exp = this.exp;
        if (exp == null)
            return null;
        return !(exp > new Date().valueOf() + offsetSeconds * 1000);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiand0Lm1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYXV0aC9zcmMvdG9rZW4vand0L2p3dC5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx1REFBdUQ7QUFDdkQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQXFDL0MsTUFBTSxPQUFPLGFBQWE7SUFPeEI7O09BRUc7SUFDSCxJQUFJLE9BQU87UUFDVCxNQUFNLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzVDLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDO1lBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBRWpFLE1BQU0sT0FBTyxHQUFHLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMxQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVEOztPQUVHO0lBQ0gsSUFBSSxHQUFHO1FBQ0wsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUM3QixJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUM7WUFBRSxPQUFPLElBQUksQ0FBQztRQUNoRCxNQUFNLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQyxPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILFNBQVMsQ0FBQyxnQkFBd0IsQ0FBQztRQUNqQyxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQ3JCLElBQUksR0FBRyxJQUFJLElBQUk7WUFBRSxPQUFPLElBQUksQ0FBQztRQUU3QixPQUFPLENBQUMsQ0FBQyxHQUFHLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxhQUFhLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDOUQsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueSAqL1xuaW1wb3J0IHsgdXJsQmFzZTY0RGVjb2RlIH0gZnJvbSAnLi9qd3QuaGVscGVyJztcbmltcG9ydCB7IElUb2tlbk1vZGVsIH0gZnJvbSAnLi4vaW50ZXJmYWNlJztcblxuZXhwb3J0IGludGVyZmFjZSBKV1Qge1xuICAvKipcbiAgICogSXNzdWVyZFxuICAgKi9cbiAgaXNzOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBJc3N1ZWQgQXRcbiAgICovXG4gIGlhdDogc3RyaW5nO1xuICAvKipcbiAgICogU3ViamVjdFxuICAgKi9cbiAgc3ViOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBFeHBpcmF0aW9uIFRpbWVcbiAgICovXG4gIGV4cDogbnVtYmVyO1xuICAvKipcbiAgICogQXVkaWVuY2VcbiAgICovXG4gIGF1ZDogc3RyaW5nO1xuICAvKipcbiAgICogTm90IEJlZm9yZVxuICAgKi9cbiAgbmJmOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBKV1QgSURcbiAgICovXG4gIGp0aTogc3RyaW5nO1xuXG4gIFtrZXk6IHN0cmluZ106IGFueTtcbiAgW2tleTogbnVtYmVyXTogYW55O1xufVxuXG5leHBvcnQgY2xhc3MgSldUVG9rZW5Nb2RlbCBpbXBsZW1lbnRzIElUb2tlbk1vZGVsIHtcbiAgW2tleTogc3RyaW5nXTogYW55O1xuXG4gIHRva2VuOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkO1xuXG4gIGV4cGlyZWQ/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIOiOt+WPlui9veiNt+S/oeaBr1xuICAgKi9cbiAgZ2V0IHBheWxvYWQoKTogSldUIHtcbiAgICBjb25zdCBwYXJ0cyA9ICh0aGlzLnRva2VuIHx8ICcnKS5zcGxpdCgnLicpO1xuICAgIGlmIChwYXJ0cy5sZW5ndGggIT09IDMpIHRocm93IG5ldyBFcnJvcignSldUIG11c3QgaGF2ZSAzIHBhcnRzJyk7XG5cbiAgICBjb25zdCBkZWNvZGVkID0gdXJsQmFzZTY0RGVjb2RlKHBhcnRzWzFdKTtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShkZWNvZGVkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDojrflj5bov4fmnJ/ml7bpl7TmiLPvvIjljZXkvY3vvJptc++8iVxuICAgKi9cbiAgZ2V0IGV4cCgpOiBudW1iZXIgfCBudWxsIHtcbiAgICBjb25zdCBkZWNvZGVkID0gdGhpcy5wYXlsb2FkO1xuICAgIGlmICghZGVjb2RlZC5oYXNPd25Qcm9wZXJ0eSgnZXhwJykpIHJldHVybiBudWxsO1xuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgwKTtcbiAgICBkYXRlLnNldFVUQ1NlY29uZHMoZGVjb2RlZC5leHApO1xuICAgIHJldHVybiBkYXRlLnZhbHVlT2YoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDmo4Dmn6VUb2tlbuaYr+WQpui/h+acn++8jOW9k2BwYXlsb2FkYCDljIXlkKsgYGV4cGAg5a2X5q615pe25pyJ5pWI77yM6Iul5pegIGBleHBgIOWtl+auteebtOaOpei/lOWbniBgbnVsbGBcbiAgICpcbiAgICogQHBhcmFtIG9mZnNldFNlY29uZHMg5YGP56e76YePXG4gICAqL1xuICBpc0V4cGlyZWQob2Zmc2V0U2Vjb25kczogbnVtYmVyID0gMCk6IGJvb2xlYW4gfCBudWxsIHtcbiAgICBjb25zdCBleHAgPSB0aGlzLmV4cDtcbiAgICBpZiAoZXhwID09IG51bGwpIHJldHVybiBudWxsO1xuXG4gICAgcmV0dXJuICEoZXhwID4gbmV3IERhdGUoKS52YWx1ZU9mKCkgKyBvZmZzZXRTZWNvbmRzICogMTAwMCk7XG4gIH1cbn1cbiJdfQ==