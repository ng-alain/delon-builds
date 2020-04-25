/**
 * @fileoverview added by tsickle
 * Generated from: src/auth.config.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export const AUTH_DEFAULT_CONFIG = {
    store_key: `_token`,
    token_invalid_redirect: true,
    token_exp_offset: 10,
    token_send_key: `token`,
    // tslint:disable-next-line: no-invalid-template-strings
    token_send_template: '${token}',
    token_send_place: 'header',
    login_url: '/login',
    ignores: [/\/login/, /assets\//, /passport\//],
    allow_anonymous_key: `_allow_anonymous`,
    executeOtherInterceptors: true,
};
/**
 * @param {?} srv
 * @return {?}
 */
export function mergeConfig(srv) {
    return srv.merge('auth', AUTH_DEFAULT_CONFIG);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYXV0aC8iLCJzb3VyY2VzIjpbInNyYy9hdXRoLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFFQSxNQUFNLE9BQU8sbUJBQW1CLEdBQW9CO0lBQ2xELFNBQVMsRUFBRSxRQUFRO0lBQ25CLHNCQUFzQixFQUFFLElBQUk7SUFDNUIsZ0JBQWdCLEVBQUUsRUFBRTtJQUNwQixjQUFjLEVBQUUsT0FBTzs7SUFFdkIsbUJBQW1CLEVBQUUsVUFBVTtJQUMvQixnQkFBZ0IsRUFBRSxRQUFRO0lBQzFCLFNBQVMsRUFBRSxRQUFRO0lBQ25CLE9BQU8sRUFBRSxDQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxDQUFDO0lBQzlDLG1CQUFtQixFQUFFLGtCQUFrQjtJQUN2Qyx3QkFBd0IsRUFBRSxJQUFJO0NBQy9COzs7OztBQUVELE1BQU0sVUFBVSxXQUFXLENBQUMsR0FBdUI7SUFDakQsT0FBTyxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO0FBQ2hELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBbGFpbkF1dGhDb25maWcsIEFsYWluQ29uZmlnU2VydmljZSB9IGZyb20gJ0BkZWxvbi91dGlsJztcblxuZXhwb3J0IGNvbnN0IEFVVEhfREVGQVVMVF9DT05GSUc6IEFsYWluQXV0aENvbmZpZyA9IHtcbiAgc3RvcmVfa2V5OiBgX3Rva2VuYCxcbiAgdG9rZW5faW52YWxpZF9yZWRpcmVjdDogdHJ1ZSxcbiAgdG9rZW5fZXhwX29mZnNldDogMTAsXG4gIHRva2VuX3NlbmRfa2V5OiBgdG9rZW5gLFxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWludmFsaWQtdGVtcGxhdGUtc3RyaW5nc1xuICB0b2tlbl9zZW5kX3RlbXBsYXRlOiAnJHt0b2tlbn0nLFxuICB0b2tlbl9zZW5kX3BsYWNlOiAnaGVhZGVyJyxcbiAgbG9naW5fdXJsOiAnL2xvZ2luJyxcbiAgaWdub3JlczogWy9cXC9sb2dpbi8sIC9hc3NldHNcXC8vLCAvcGFzc3BvcnRcXC8vXSxcbiAgYWxsb3dfYW5vbnltb3VzX2tleTogYF9hbGxvd19hbm9ueW1vdXNgLFxuICBleGVjdXRlT3RoZXJJbnRlcmNlcHRvcnM6IHRydWUsXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VDb25maWcoc3J2OiBBbGFpbkNvbmZpZ1NlcnZpY2UpOiBBbGFpbkF1dGhDb25maWcge1xuICByZXR1cm4gc3J2Lm1lcmdlKCdhdXRoJywgQVVUSF9ERUZBVUxUX0NPTkZJRyk7XG59XG4iXX0=