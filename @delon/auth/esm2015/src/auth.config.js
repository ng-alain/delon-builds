/**
 * @fileoverview added by tsickle
 * Generated from: src/auth.config.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    refreshTime: 3000,
    refreshOffset: 6000,
};
/**
 * @param {?} srv
 * @return {?}
 */
export function mergeConfig(srv) {
    return (/** @type {?} */ (srv.merge('auth', AUTH_DEFAULT_CONFIG)));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5jb25maWcuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvdnN0cy93b3JrLzEvcy9wYWNrYWdlcy9hdXRoLyIsInNvdXJjZXMiOlsic3JjL2F1dGguY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLE1BQU0sT0FBTyxtQkFBbUIsR0FBb0I7SUFDbEQsU0FBUyxFQUFFLFFBQVE7SUFDbkIsc0JBQXNCLEVBQUUsSUFBSTtJQUM1QixnQkFBZ0IsRUFBRSxFQUFFO0lBQ3BCLGNBQWMsRUFBRSxPQUFPOztJQUV2QixtQkFBbUIsRUFBRSxVQUFVO0lBQy9CLGdCQUFnQixFQUFFLFFBQVE7SUFDMUIsU0FBUyxFQUFFLFFBQVE7SUFDbkIsT0FBTyxFQUFFLENBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLENBQUM7SUFDOUMsbUJBQW1CLEVBQUUsa0JBQWtCO0lBQ3ZDLHdCQUF3QixFQUFFLElBQUk7SUFDOUIsV0FBVyxFQUFFLElBQUk7SUFDakIsYUFBYSxFQUFFLElBQUk7Q0FDcEI7Ozs7O0FBRUQsTUFBTSxVQUFVLFdBQVcsQ0FBQyxHQUF1QjtJQUNqRCxPQUFPLG1CQUFBLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLG1CQUFtQixDQUFDLEVBQUMsQ0FBQztBQUNqRCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWxhaW5BdXRoQ29uZmlnLCBBbGFpbkNvbmZpZ1NlcnZpY2UgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5cbmV4cG9ydCBjb25zdCBBVVRIX0RFRkFVTFRfQ09ORklHOiBBbGFpbkF1dGhDb25maWcgPSB7XG4gIHN0b3JlX2tleTogYF90b2tlbmAsXG4gIHRva2VuX2ludmFsaWRfcmVkaXJlY3Q6IHRydWUsXG4gIHRva2VuX2V4cF9vZmZzZXQ6IDEwLFxuICB0b2tlbl9zZW5kX2tleTogYHRva2VuYCxcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1pbnZhbGlkLXRlbXBsYXRlLXN0cmluZ3NcbiAgdG9rZW5fc2VuZF90ZW1wbGF0ZTogJyR7dG9rZW59JyxcbiAgdG9rZW5fc2VuZF9wbGFjZTogJ2hlYWRlcicsXG4gIGxvZ2luX3VybDogJy9sb2dpbicsXG4gIGlnbm9yZXM6IFsvXFwvbG9naW4vLCAvYXNzZXRzXFwvLywgL3Bhc3Nwb3J0XFwvL10sXG4gIGFsbG93X2Fub255bW91c19rZXk6IGBfYWxsb3dfYW5vbnltb3VzYCxcbiAgZXhlY3V0ZU90aGVySW50ZXJjZXB0b3JzOiB0cnVlLFxuICByZWZyZXNoVGltZTogMzAwMCxcbiAgcmVmcmVzaE9mZnNldDogNjAwMCxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZUNvbmZpZyhzcnY6IEFsYWluQ29uZmlnU2VydmljZSk6IEFsYWluQXV0aENvbmZpZyB7XG4gIHJldHVybiBzcnYubWVyZ2UoJ2F1dGgnLCBBVVRIX0RFRkFVTFRfQ09ORklHKSE7XG59XG4iXX0=