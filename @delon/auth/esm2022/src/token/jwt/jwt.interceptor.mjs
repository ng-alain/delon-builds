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
        next(newReq(req, model));
    return throwErr(req, options);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiand0LmludGVyY2VwdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYXV0aC9zcmMvdG9rZW4vand0L2p3dC5pbnRlcmNlcHRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXZDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBR3hELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzVELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDckMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRWhELFNBQVMsTUFBTSxDQUFDLEdBQXlCLEVBQUUsS0FBb0I7SUFDN0QsT0FBTyxHQUFHLENBQUMsS0FBSyxDQUFDO1FBQ2YsVUFBVSxFQUFFO1lBQ1YsYUFBYSxFQUFFLFVBQVUsS0FBSyxDQUFDLEtBQUssRUFBRTtTQUN2QztLQUNGLENBQUMsQ0FBQztBQUNMLENBQUM7QUFFRCxNQUFNLENBQUMsTUFBTSxrQkFBa0IsR0FBc0IsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQUU7SUFDakUsTUFBTSxPQUFPLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7SUFFeEQsSUFBSSxXQUFXLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQztRQUFFLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBRWhELE1BQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLEdBQUcsRUFBaUIsQ0FBQztJQUM1RCxJQUFJLFFBQVEsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLGdCQUFpQixDQUFDO1FBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUV6RSxPQUFPLFFBQVEsQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDaEMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueSAqL1xuaW1wb3J0IHsgSHR0cEludGVyY2VwdG9yRm4sIEh0dHBSZXF1ZXN0IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgaW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFsYWluQ29uZmlnU2VydmljZSB9IGZyb20gJ0BkZWxvbi91dGlsL2NvbmZpZyc7XG5cbmltcG9ydCB7IEpXVFRva2VuTW9kZWwgfSBmcm9tICcuL2p3dC5tb2RlbCc7XG5pbXBvcnQgeyBtZXJnZUNvbmZpZyB9IGZyb20gJy4uLy4uL2F1dGguY29uZmlnJztcbmltcG9ydCB7IGlzQW5vbnltb3VzLCB0aHJvd0VyciB9IGZyb20gJy4uL2Jhc2UuaW50ZXJjZXB0b3InO1xuaW1wb3J0IHsgQ2hlY2tKd3QgfSBmcm9tICcuLi9oZWxwZXInO1xuaW1wb3J0IHsgREFfU0VSVklDRV9UT0tFTiB9IGZyb20gJy4uL2ludGVyZmFjZSc7XG5cbmZ1bmN0aW9uIG5ld1JlcShyZXE6IEh0dHBSZXF1ZXN0PHVua25vd24+LCBtb2RlbDogSldUVG9rZW5Nb2RlbCk6IEh0dHBSZXF1ZXN0PHVua25vd24+IHtcbiAgcmV0dXJuIHJlcS5jbG9uZSh7XG4gICAgc2V0SGVhZGVyczoge1xuICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke21vZGVsLnRva2VufWBcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgY29uc3QgYXV0aEpXVEludGVyY2VwdG9yOiBIdHRwSW50ZXJjZXB0b3JGbiA9IChyZXEsIG5leHQpID0+IHtcbiAgY29uc3Qgb3B0aW9ucyA9IG1lcmdlQ29uZmlnKGluamVjdChBbGFpbkNvbmZpZ1NlcnZpY2UpKTtcblxuICBpZiAoaXNBbm9ueW1vdXMocmVxLCBvcHRpb25zKSkgcmV0dXJuIG5leHQocmVxKTtcblxuICBjb25zdCBtb2RlbCA9IGluamVjdChEQV9TRVJWSUNFX1RPS0VOKS5nZXQ8SldUVG9rZW5Nb2RlbD4oKTtcbiAgaWYgKENoZWNrSnd0KG1vZGVsLCBvcHRpb25zLnRva2VuX2V4cF9vZmZzZXQhKSkgbmV4dChuZXdSZXEocmVxLCBtb2RlbCkpO1xuXG4gIHJldHVybiB0aHJvd0VycihyZXEsIG9wdGlvbnMpO1xufTtcbiJdfQ==