import { inject } from '@angular/core';
import { AlainConfigService } from '@delon/util/config';
import { mergeConfig } from '../../auth.config';
import { isAnonymous, throwErr } from '../base.interceptor';
import { CheckJwt } from '../helper';
import { DA_SERVICE_TOKEN } from '../interface';
function newReq(req, model) {
    return req.clone({
        setHeaders: {
            Authorization: `Bearer ${model.token}`
        }
    });
}
export const authJWTInterceptor = (req, next) => {
    const options = mergeConfig(inject(AlainConfigService));
    if (isAnonymous(req, options))
        return next(req);
    const model = inject(DA_SERVICE_TOKEN).get();
    if (CheckJwt(model, options.token_exp_offset))
        return next(newReq(req, model));
    return throwErr(req, options);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiand0LmludGVyY2VwdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYXV0aC9zcmMvdG9rZW4vand0L2p3dC5pbnRlcmNlcHRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXZDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBR3hELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzVELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDckMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRWhELFNBQVMsTUFBTSxDQUFDLEdBQXlCLEVBQUUsS0FBb0I7SUFDN0QsT0FBTyxHQUFHLENBQUMsS0FBSyxDQUFDO1FBQ2YsVUFBVSxFQUFFO1lBQ1YsYUFBYSxFQUFFLFVBQVUsS0FBSyxDQUFDLEtBQUssRUFBRTtTQUN2QztLQUNGLENBQUMsQ0FBQztBQUNMLENBQUM7QUFFRCxNQUFNLENBQUMsTUFBTSxrQkFBa0IsR0FBc0IsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQUU7SUFDakUsTUFBTSxPQUFPLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7SUFFeEQsSUFBSSxXQUFXLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQztRQUFFLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBRWhELE1BQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLEdBQUcsRUFBaUIsQ0FBQztJQUM1RCxJQUFJLFFBQVEsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLGdCQUFpQixDQUFDO1FBQUUsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBRWhGLE9BQU8sUUFBUSxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUNoQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55ICovXG5pbXBvcnQgeyBIdHRwSW50ZXJjZXB0b3JGbiwgSHR0cFJlcXVlc3QgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBpbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQWxhaW5Db25maWdTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3V0aWwvY29uZmlnJztcblxuaW1wb3J0IHsgSldUVG9rZW5Nb2RlbCB9IGZyb20gJy4vand0Lm1vZGVsJztcbmltcG9ydCB7IG1lcmdlQ29uZmlnIH0gZnJvbSAnLi4vLi4vYXV0aC5jb25maWcnO1xuaW1wb3J0IHsgaXNBbm9ueW1vdXMsIHRocm93RXJyIH0gZnJvbSAnLi4vYmFzZS5pbnRlcmNlcHRvcic7XG5pbXBvcnQgeyBDaGVja0p3dCB9IGZyb20gJy4uL2hlbHBlcic7XG5pbXBvcnQgeyBEQV9TRVJWSUNFX1RPS0VOIH0gZnJvbSAnLi4vaW50ZXJmYWNlJztcblxuZnVuY3Rpb24gbmV3UmVxKHJlcTogSHR0cFJlcXVlc3Q8dW5rbm93bj4sIG1vZGVsOiBKV1RUb2tlbk1vZGVsKTogSHR0cFJlcXVlc3Q8dW5rbm93bj4ge1xuICByZXR1cm4gcmVxLmNsb25lKHtcbiAgICBzZXRIZWFkZXJzOiB7XG4gICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7bW9kZWwudG9rZW59YFxuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBjb25zdCBhdXRoSldUSW50ZXJjZXB0b3I6IEh0dHBJbnRlcmNlcHRvckZuID0gKHJlcSwgbmV4dCkgPT4ge1xuICBjb25zdCBvcHRpb25zID0gbWVyZ2VDb25maWcoaW5qZWN0KEFsYWluQ29uZmlnU2VydmljZSkpO1xuXG4gIGlmIChpc0Fub255bW91cyhyZXEsIG9wdGlvbnMpKSByZXR1cm4gbmV4dChyZXEpO1xuXG4gIGNvbnN0IG1vZGVsID0gaW5qZWN0KERBX1NFUlZJQ0VfVE9LRU4pLmdldDxKV1RUb2tlbk1vZGVsPigpO1xuICBpZiAoQ2hlY2tKd3QobW9kZWwsIG9wdGlvbnMudG9rZW5fZXhwX29mZnNldCEpKSByZXR1cm4gbmV4dChuZXdSZXEocmVxLCBtb2RlbCkpO1xuXG4gIHJldHVybiB0aHJvd0VycihyZXEsIG9wdGlvbnMpO1xufTtcbiJdfQ==