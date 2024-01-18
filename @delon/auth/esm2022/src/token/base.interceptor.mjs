/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ToLogin } from './helper';
import { ALLOW_ANONYMOUS } from '../token';
export function isAnonymous(req, options) {
    if (req.context.get(ALLOW_ANONYMOUS))
        return true;
    if (Array.isArray(options.ignores)) {
        for (const item of options.ignores) {
            if (item.test(req.url))
                return true;
        }
    }
    return false;
}
export function throwErr(req, options) {
    ToLogin(options);
    // Interrupt Http request, so need to generate a new Observable
    return new Observable((observer) => {
        let statusText = '';
        if (typeof ngDevMode === 'undefined' || ngDevMode) {
            statusText = `来自 @delon/auth 的拦截，所请求URL未授权，若是登录API可加入 new HttpContext().set(ALLOW_ANONYMOUS, true) 来表示忽略校验，更多方法请参考： https://ng-alain.com/auth/getting-started#AlainAuthConfig\nThe interception from @delon/auth, the requested URL is not authorized. If the login API can add new HttpContext().set(ALLOW_ANONYMOUS, true) to ignore the check, please refer to: https://ng-alain.com/auth/getting-started#AlainAuthConfig`;
        }
        const res = new HttpErrorResponse({
            url: req.url,
            headers: req.headers,
            status: 401,
            statusText
        });
        observer.error(res);
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2F1dGgvc3JjL3Rva2VuL2Jhc2UuaW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsdURBQXVEO0FBQ3ZELE9BQU8sRUFBRSxpQkFBaUIsRUFBMEIsTUFBTSxzQkFBc0IsQ0FBQztBQUNqRixPQUFPLEVBQUUsVUFBVSxFQUFZLE1BQU0sTUFBTSxDQUFDO0FBSTVDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDbkMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUUzQyxNQUFNLFVBQVUsV0FBVyxDQUFDLEdBQXlCLEVBQUUsT0FBd0I7SUFDN0UsSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUM7UUFBRSxPQUFPLElBQUksQ0FBQztJQUNsRCxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7UUFDbkMsS0FBSyxNQUFNLElBQUksSUFBSSxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDbkMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7Z0JBQUUsT0FBTyxJQUFJLENBQUM7UUFDdEMsQ0FBQztJQUNILENBQUM7SUFDRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUM7QUFFRCxNQUFNLFVBQVUsUUFBUSxDQUFDLEdBQXlCLEVBQUUsT0FBd0I7SUFDMUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBRWpCLCtEQUErRDtJQUMvRCxPQUFPLElBQUksVUFBVSxDQUFDLENBQUMsUUFBa0MsRUFBRSxFQUFFO1FBQzNELElBQUksVUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNwQixJQUFJLE9BQU8sU0FBUyxLQUFLLFdBQVcsSUFBSSxTQUFTLEVBQUUsQ0FBQztZQUNsRCxVQUFVLEdBQUcsZ1pBQWdaLENBQUM7UUFDaGEsQ0FBQztRQUNELE1BQU0sR0FBRyxHQUFHLElBQUksaUJBQWlCLENBQUM7WUFDaEMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHO1lBQ1osT0FBTyxFQUFFLEdBQUcsQ0FBQyxPQUFPO1lBQ3BCLE1BQU0sRUFBRSxHQUFHO1lBQ1gsVUFBVTtTQUNYLENBQUMsQ0FBQztRQUNILFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdEIsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueSAqL1xuaW1wb3J0IHsgSHR0cEVycm9yUmVzcG9uc2UsIEh0dHBFdmVudCwgSHR0cFJlcXVlc3QgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBPYnNlcnZlciB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBBbGFpbkF1dGhDb25maWcgfSBmcm9tICdAZGVsb24vdXRpbC9jb25maWcnO1xuXG5pbXBvcnQgeyBUb0xvZ2luIH0gZnJvbSAnLi9oZWxwZXInO1xuaW1wb3J0IHsgQUxMT1dfQU5PTllNT1VTIH0gZnJvbSAnLi4vdG9rZW4nO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNBbm9ueW1vdXMocmVxOiBIdHRwUmVxdWVzdDx1bmtub3duPiwgb3B0aW9uczogQWxhaW5BdXRoQ29uZmlnKTogYm9vbGVhbiB7XG4gIGlmIChyZXEuY29udGV4dC5nZXQoQUxMT1dfQU5PTllNT1VTKSkgcmV0dXJuIHRydWU7XG4gIGlmIChBcnJheS5pc0FycmF5KG9wdGlvbnMuaWdub3JlcykpIHtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2Ygb3B0aW9ucy5pZ25vcmVzKSB7XG4gICAgICBpZiAoaXRlbS50ZXN0KHJlcS51cmwpKSByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGhyb3dFcnIocmVxOiBIdHRwUmVxdWVzdDx1bmtub3duPiwgb3B0aW9uczogQWxhaW5BdXRoQ29uZmlnKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8dW5rbm93bj4+IHtcbiAgVG9Mb2dpbihvcHRpb25zKTtcblxuICAvLyBJbnRlcnJ1cHQgSHR0cCByZXF1ZXN0LCBzbyBuZWVkIHRvIGdlbmVyYXRlIGEgbmV3IE9ic2VydmFibGVcbiAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKChvYnNlcnZlcjogT2JzZXJ2ZXI8SHR0cEV2ZW50PGFueT4+KSA9PiB7XG4gICAgbGV0IHN0YXR1c1RleHQgPSAnJztcbiAgICBpZiAodHlwZW9mIG5nRGV2TW9kZSA9PT0gJ3VuZGVmaW5lZCcgfHwgbmdEZXZNb2RlKSB7XG4gICAgICBzdGF0dXNUZXh0ID0gYOadpeiHqiBAZGVsb24vYXV0aCDnmoTmi6bmiKrvvIzmiYDor7fmsYJVUkzmnKrmjojmnYPvvIzoi6XmmK/nmbvlvZVBUEnlj6/liqDlhaUgbmV3IEh0dHBDb250ZXh0KCkuc2V0KEFMTE9XX0FOT05ZTU9VUywgdHJ1ZSkg5p2l6KGo56S65b+955Wl5qCh6aqM77yM5pu05aSa5pa55rOV6K+35Y+C6ICD77yaIGh0dHBzOi8vbmctYWxhaW4uY29tL2F1dGgvZ2V0dGluZy1zdGFydGVkI0FsYWluQXV0aENvbmZpZ1xcblRoZSBpbnRlcmNlcHRpb24gZnJvbSBAZGVsb24vYXV0aCwgdGhlIHJlcXVlc3RlZCBVUkwgaXMgbm90IGF1dGhvcml6ZWQuIElmIHRoZSBsb2dpbiBBUEkgY2FuIGFkZCBuZXcgSHR0cENvbnRleHQoKS5zZXQoQUxMT1dfQU5PTllNT1VTLCB0cnVlKSB0byBpZ25vcmUgdGhlIGNoZWNrLCBwbGVhc2UgcmVmZXIgdG86IGh0dHBzOi8vbmctYWxhaW4uY29tL2F1dGgvZ2V0dGluZy1zdGFydGVkI0FsYWluQXV0aENvbmZpZ2A7XG4gICAgfVxuICAgIGNvbnN0IHJlcyA9IG5ldyBIdHRwRXJyb3JSZXNwb25zZSh7XG4gICAgICB1cmw6IHJlcS51cmwsXG4gICAgICBoZWFkZXJzOiByZXEuaGVhZGVycyxcbiAgICAgIHN0YXR1czogNDAxLFxuICAgICAgc3RhdHVzVGV4dFxuICAgIH0pO1xuICAgIG9ic2VydmVyLmVycm9yKHJlcyk7XG4gIH0pO1xufVxuIl19