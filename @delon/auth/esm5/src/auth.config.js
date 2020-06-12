/**
 * @fileoverview added by tsickle
 * Generated from: src/auth.config.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export var AUTH_DEFAULT_CONFIG = {
    store_key: "_token",
    token_invalid_redirect: true,
    token_exp_offset: 10,
    token_send_key: "token",
    // tslint:disable-next-line: no-invalid-template-strings
    token_send_template: '${token}',
    token_send_place: 'header',
    login_url: '/login',
    ignores: [/\/login/, /assets\//, /passport\//],
    allow_anonymous_key: "_allow_anonymous",
    executeOtherInterceptors: true,
};
/**
 * @param {?} srv
 * @return {?}
 */
export function mergeConfig(srv) {
    return (/** @type {?} */ (srv.merge('auth', AUTH_DEFAULT_CONFIG)));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYXV0aC8iLCJzb3VyY2VzIjpbInNyYy9hdXRoLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFFQSxNQUFNLEtBQU8sbUJBQW1CLEdBQW9CO0lBQ2xELFNBQVMsRUFBRSxRQUFRO0lBQ25CLHNCQUFzQixFQUFFLElBQUk7SUFDNUIsZ0JBQWdCLEVBQUUsRUFBRTtJQUNwQixjQUFjLEVBQUUsT0FBTzs7SUFFdkIsbUJBQW1CLEVBQUUsVUFBVTtJQUMvQixnQkFBZ0IsRUFBRSxRQUFRO0lBQzFCLFNBQVMsRUFBRSxRQUFRO0lBQ25CLE9BQU8sRUFBRSxDQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxDQUFDO0lBQzlDLG1CQUFtQixFQUFFLGtCQUFrQjtJQUN2Qyx3QkFBd0IsRUFBRSxJQUFJO0NBQy9COzs7OztBQUVELE1BQU0sVUFBVSxXQUFXLENBQUMsR0FBdUI7SUFDakQsT0FBTyxtQkFBQSxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxtQkFBbUIsQ0FBQyxFQUFDLENBQUM7QUFDakQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFsYWluQXV0aENvbmZpZywgQWxhaW5Db25maWdTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuXG5leHBvcnQgY29uc3QgQVVUSF9ERUZBVUxUX0NPTkZJRzogQWxhaW5BdXRoQ29uZmlnID0ge1xuICBzdG9yZV9rZXk6IGBfdG9rZW5gLFxuICB0b2tlbl9pbnZhbGlkX3JlZGlyZWN0OiB0cnVlLFxuICB0b2tlbl9leHBfb2Zmc2V0OiAxMCxcbiAgdG9rZW5fc2VuZF9rZXk6IGB0b2tlbmAsXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8taW52YWxpZC10ZW1wbGF0ZS1zdHJpbmdzXG4gIHRva2VuX3NlbmRfdGVtcGxhdGU6ICcke3Rva2VufScsXG4gIHRva2VuX3NlbmRfcGxhY2U6ICdoZWFkZXInLFxuICBsb2dpbl91cmw6ICcvbG9naW4nLFxuICBpZ25vcmVzOiBbL1xcL2xvZ2luLywgL2Fzc2V0c1xcLy8sIC9wYXNzcG9ydFxcLy9dLFxuICBhbGxvd19hbm9ueW1vdXNfa2V5OiBgX2FsbG93X2Fub255bW91c2AsXG4gIGV4ZWN1dGVPdGhlckludGVyY2VwdG9yczogdHJ1ZSxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZUNvbmZpZyhzcnY6IEFsYWluQ29uZmlnU2VydmljZSk6IEFsYWluQXV0aENvbmZpZyB7XG4gIHJldHVybiBzcnYubWVyZ2UoJ2F1dGgnLCBBVVRIX0RFRkFVTFRfQ09ORklHKSE7XG59XG4iXX0=