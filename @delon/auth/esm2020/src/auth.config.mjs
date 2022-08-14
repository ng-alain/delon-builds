export const AUTH_DEFAULT_CONFIG = {
    store_key: `_token`,
    token_invalid_redirect: true,
    token_exp_offset: 10,
    token_send_key: `token`,
    token_send_template: '${token}',
    token_send_place: 'header',
    login_url: '/login',
    ignores: [/\/login/, /assets\//, /passport\//],
    allow_anonymous_key: `_allow_anonymous`,
    executeOtherInterceptors: true,
    refreshTime: 3000,
    refreshOffset: 6000
};
export function mergeConfig(srv) {
    return srv.merge('auth', AUTH_DEFAULT_CONFIG);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5jb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hdXRoL3NyYy9hdXRoLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxNQUFNLENBQUMsTUFBTSxtQkFBbUIsR0FBb0I7SUFDbEQsU0FBUyxFQUFFLFFBQVE7SUFDbkIsc0JBQXNCLEVBQUUsSUFBSTtJQUM1QixnQkFBZ0IsRUFBRSxFQUFFO0lBQ3BCLGNBQWMsRUFBRSxPQUFPO0lBQ3ZCLG1CQUFtQixFQUFFLFVBQVU7SUFDL0IsZ0JBQWdCLEVBQUUsUUFBUTtJQUMxQixTQUFTLEVBQUUsUUFBUTtJQUNuQixPQUFPLEVBQUUsQ0FBQyxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksQ0FBQztJQUM5QyxtQkFBbUIsRUFBRSxrQkFBa0I7SUFDdkMsd0JBQXdCLEVBQUUsSUFBSTtJQUM5QixXQUFXLEVBQUUsSUFBSTtJQUNqQixhQUFhLEVBQUUsSUFBSTtDQUNwQixDQUFDO0FBRUYsTUFBTSxVQUFVLFdBQVcsQ0FBQyxHQUF1QjtJQUNqRCxPQUFPLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLG1CQUFtQixDQUFFLENBQUM7QUFDakQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgQWxhaW5BdXRoQ29uZmlnLCBBbGFpbkNvbmZpZ1NlcnZpY2UgfSBmcm9tICdAZGVsb24vdXRpbC9jb25maWcnO1xuXG5leHBvcnQgY29uc3QgQVVUSF9ERUZBVUxUX0NPTkZJRzogQWxhaW5BdXRoQ29uZmlnID0ge1xuICBzdG9yZV9rZXk6IGBfdG9rZW5gLFxuICB0b2tlbl9pbnZhbGlkX3JlZGlyZWN0OiB0cnVlLFxuICB0b2tlbl9leHBfb2Zmc2V0OiAxMCxcbiAgdG9rZW5fc2VuZF9rZXk6IGB0b2tlbmAsXG4gIHRva2VuX3NlbmRfdGVtcGxhdGU6ICcke3Rva2VufScsXG4gIHRva2VuX3NlbmRfcGxhY2U6ICdoZWFkZXInLFxuICBsb2dpbl91cmw6ICcvbG9naW4nLFxuICBpZ25vcmVzOiBbL1xcL2xvZ2luLywgL2Fzc2V0c1xcLy8sIC9wYXNzcG9ydFxcLy9dLFxuICBhbGxvd19hbm9ueW1vdXNfa2V5OiBgX2FsbG93X2Fub255bW91c2AsXG4gIGV4ZWN1dGVPdGhlckludGVyY2VwdG9yczogdHJ1ZSxcbiAgcmVmcmVzaFRpbWU6IDMwMDAsXG4gIHJlZnJlc2hPZmZzZXQ6IDYwMDBcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZUNvbmZpZyhzcnY6IEFsYWluQ29uZmlnU2VydmljZSk6IEFsYWluQXV0aENvbmZpZyB7XG4gIHJldHVybiBzcnYubWVyZ2UoJ2F1dGgnLCBBVVRIX0RFRkFVTFRfQ09ORklHKSE7XG59XG4iXX0=