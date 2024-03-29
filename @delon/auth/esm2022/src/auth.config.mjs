export const AUTH_DEFAULT_CONFIG = {
    store_key: `_token`,
    token_invalid_redirect: true,
    token_exp_offset: 10,
    token_send_key: `token`,
    token_send_template: '${token}',
    token_send_place: 'header',
    login_url: '/login',
    refreshTime: 3000,
    refreshOffset: 6000,
    ignores: [/\/assets\//]
};
export function mergeConfig(srv) {
    return srv.merge('auth', AUTH_DEFAULT_CONFIG);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5jb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hdXRoL3NyYy9hdXRoLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxNQUFNLENBQUMsTUFBTSxtQkFBbUIsR0FBb0I7SUFDbEQsU0FBUyxFQUFFLFFBQVE7SUFDbkIsc0JBQXNCLEVBQUUsSUFBSTtJQUM1QixnQkFBZ0IsRUFBRSxFQUFFO0lBQ3BCLGNBQWMsRUFBRSxPQUFPO0lBQ3ZCLG1CQUFtQixFQUFFLFVBQVU7SUFDL0IsZ0JBQWdCLEVBQUUsUUFBUTtJQUMxQixTQUFTLEVBQUUsUUFBUTtJQUNuQixXQUFXLEVBQUUsSUFBSTtJQUNqQixhQUFhLEVBQUUsSUFBSTtJQUNuQixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7Q0FDeEIsQ0FBQztBQUVGLE1BQU0sVUFBVSxXQUFXLENBQUMsR0FBdUI7SUFDakQsT0FBTyxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxtQkFBbUIsQ0FBRSxDQUFDO0FBQ2pELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEFsYWluQXV0aENvbmZpZywgQWxhaW5Db25maWdTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3V0aWwvY29uZmlnJztcblxuZXhwb3J0IGNvbnN0IEFVVEhfREVGQVVMVF9DT05GSUc6IEFsYWluQXV0aENvbmZpZyA9IHtcbiAgc3RvcmVfa2V5OiBgX3Rva2VuYCxcbiAgdG9rZW5faW52YWxpZF9yZWRpcmVjdDogdHJ1ZSxcbiAgdG9rZW5fZXhwX29mZnNldDogMTAsXG4gIHRva2VuX3NlbmRfa2V5OiBgdG9rZW5gLFxuICB0b2tlbl9zZW5kX3RlbXBsYXRlOiAnJHt0b2tlbn0nLFxuICB0b2tlbl9zZW5kX3BsYWNlOiAnaGVhZGVyJyxcbiAgbG9naW5fdXJsOiAnL2xvZ2luJyxcbiAgcmVmcmVzaFRpbWU6IDMwMDAsXG4gIHJlZnJlc2hPZmZzZXQ6IDYwMDAsXG4gIGlnbm9yZXM6IFsvXFwvYXNzZXRzXFwvL11cbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZUNvbmZpZyhzcnY6IEFsYWluQ29uZmlnU2VydmljZSk6IEFsYWluQXV0aENvbmZpZyB7XG4gIHJldHVybiBzcnYubWVyZ2UoJ2F1dGgnLCBBVVRIX0RFRkFVTFRfQ09ORklHKSE7XG59XG4iXX0=