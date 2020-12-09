/**
 * @fileoverview added by tsickle
 * Generated from: src/config.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export const SF_DEFAULT_CONFIG = {
    formatMap: {
        'date-time': {
            widget: 'date',
            showTime: true,
            format: `yyyy-MM-dd'T'HH:mm:ss.SSSxxx`,
        },
        date: { widget: 'date', format: 'yyyy-MM-dd' },
        'full-date': { widget: 'date', format: 'yyyy-MM-dd' },
        time: { widget: 'time', format: 'HH:mm:ss.SSSxxx' },
        'full-time': { widget: 'time' },
        week: { widget: 'date', mode: 'week', format: 'yyyy-ww' },
        month: { widget: 'date', mode: 'month', format: 'yyyy-MM' },
        uri: { widget: 'upload' },
        email: { widget: 'autocomplete', type: 'email' },
        color: { widget: 'string', type: 'color' },
        '': { widget: 'string' },
    },
    ingoreKeywords: ['type', 'enum'],
    liveValidate: true,
    autocomplete: null,
    firstVisual: false,
    onlyVisual: false,
    errors: {},
    ui: (/** @type {?} */ ({})),
    button: (/** @type {?} */ ({ submit_type: 'primary', reset_type: 'default' })),
    uiDateStringFormat: 'yyyy-MM-dd HH:mm:ss',
    uiDateNumberFormat: 'T',
    uiTimeStringFormat: 'HH:mm:ss',
    uiTimeNumberFormat: 'T',
    uiEmailSuffixes: ['qq.com', '163.com', 'gmail.com', '126.com', 'aliyun.com'],
};
/**
 * @param {?} srv
 * @return {?}
 */
export function mergeConfig(srv) {
    return (/** @type {?} */ (srv.merge('sf', SF_DEFAULT_CONFIG)));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3ZzdHMvd29yay8xL3MvcGFja2FnZXMvZm9ybS8iLCJzb3VyY2VzIjpbInNyYy9jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBSUEsTUFBTSxPQUFPLGlCQUFpQixHQUFrQjtJQUM5QyxTQUFTLEVBQUU7UUFDVCxXQUFXLEVBQUU7WUFDWCxNQUFNLEVBQUUsTUFBTTtZQUNkLFFBQVEsRUFBRSxJQUFJO1lBQ2QsTUFBTSxFQUFFLDhCQUE4QjtTQUN2QztRQUNELElBQUksRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRTtRQUM5QyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUU7UUFDckQsSUFBSSxFQUFFLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsaUJBQWlCLEVBQUU7UUFDbkQsV0FBVyxFQUFFLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRTtRQUMvQixJQUFJLEVBQUUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRTtRQUN6RCxLQUFLLEVBQUUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRTtRQUMzRCxHQUFHLEVBQUUsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFO1FBQ3pCLEtBQUssRUFBRSxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRTtRQUNoRCxLQUFLLEVBQUUsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUU7UUFDMUMsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRTtLQUN6QjtJQUNELGNBQWMsRUFBRSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUM7SUFDaEMsWUFBWSxFQUFFLElBQUk7SUFDbEIsWUFBWSxFQUFFLElBQUk7SUFDbEIsV0FBVyxFQUFFLEtBQUs7SUFDbEIsVUFBVSxFQUFFLEtBQUs7SUFDakIsTUFBTSxFQUFFLEVBQUU7SUFDVixFQUFFLEVBQUUsbUJBQUEsRUFBRSxFQUFrQjtJQUN4QixNQUFNLEVBQUUsbUJBQUEsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsRUFBWTtJQUNyRSxrQkFBa0IsRUFBRSxxQkFBcUI7SUFDekMsa0JBQWtCLEVBQUUsR0FBRztJQUN2QixrQkFBa0IsRUFBRSxVQUFVO0lBQzlCLGtCQUFrQixFQUFFLEdBQUc7SUFDdkIsZUFBZSxFQUFFLENBQUMsUUFBUSxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLFlBQVksQ0FBQztDQUM3RTs7Ozs7QUFFRCxNQUFNLFVBQVUsV0FBVyxDQUFDLEdBQXVCO0lBQ2pELE9BQU8sbUJBQUEsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsaUJBQWlCLENBQUMsRUFBQyxDQUFDO0FBQzdDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBbGFpbkNvbmZpZ1NlcnZpY2UsIEFsYWluU0ZDb25maWcgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQgeyBTRkJ1dHRvbiB9IGZyb20gJy4vaW50ZXJmYWNlJztcbmltcG9ydCB7IFNGVUlTY2hlbWFJdGVtIH0gZnJvbSAnLi9zY2hlbWEvdWknO1xuXG5leHBvcnQgY29uc3QgU0ZfREVGQVVMVF9DT05GSUc6IEFsYWluU0ZDb25maWcgPSB7XG4gIGZvcm1hdE1hcDoge1xuICAgICdkYXRlLXRpbWUnOiB7XG4gICAgICB3aWRnZXQ6ICdkYXRlJyxcbiAgICAgIHNob3dUaW1lOiB0cnVlLFxuICAgICAgZm9ybWF0OiBgeXl5eS1NTS1kZCdUJ0hIOm1tOnNzLlNTU3h4eGAsXG4gICAgfSxcbiAgICBkYXRlOiB7IHdpZGdldDogJ2RhdGUnLCBmb3JtYXQ6ICd5eXl5LU1NLWRkJyB9LFxuICAgICdmdWxsLWRhdGUnOiB7IHdpZGdldDogJ2RhdGUnLCBmb3JtYXQ6ICd5eXl5LU1NLWRkJyB9LFxuICAgIHRpbWU6IHsgd2lkZ2V0OiAndGltZScsIGZvcm1hdDogJ0hIOm1tOnNzLlNTU3h4eCcgfSxcbiAgICAnZnVsbC10aW1lJzogeyB3aWRnZXQ6ICd0aW1lJyB9LFxuICAgIHdlZWs6IHsgd2lkZ2V0OiAnZGF0ZScsIG1vZGU6ICd3ZWVrJywgZm9ybWF0OiAneXl5eS13dycgfSxcbiAgICBtb250aDogeyB3aWRnZXQ6ICdkYXRlJywgbW9kZTogJ21vbnRoJywgZm9ybWF0OiAneXl5eS1NTScgfSxcbiAgICB1cmk6IHsgd2lkZ2V0OiAndXBsb2FkJyB9LFxuICAgIGVtYWlsOiB7IHdpZGdldDogJ2F1dG9jb21wbGV0ZScsIHR5cGU6ICdlbWFpbCcgfSxcbiAgICBjb2xvcjogeyB3aWRnZXQ6ICdzdHJpbmcnLCB0eXBlOiAnY29sb3InIH0sXG4gICAgJyc6IHsgd2lkZ2V0OiAnc3RyaW5nJyB9LFxuICB9LFxuICBpbmdvcmVLZXl3b3JkczogWyd0eXBlJywgJ2VudW0nXSxcbiAgbGl2ZVZhbGlkYXRlOiB0cnVlLFxuICBhdXRvY29tcGxldGU6IG51bGwsXG4gIGZpcnN0VmlzdWFsOiBmYWxzZSxcbiAgb25seVZpc3VhbDogZmFsc2UsXG4gIGVycm9yczoge30sXG4gIHVpOiB7fSBhcyBTRlVJU2NoZW1hSXRlbSxcbiAgYnV0dG9uOiB7IHN1Ym1pdF90eXBlOiAncHJpbWFyeScsIHJlc2V0X3R5cGU6ICdkZWZhdWx0JyB9IGFzIFNGQnV0dG9uLFxuICB1aURhdGVTdHJpbmdGb3JtYXQ6ICd5eXl5LU1NLWRkIEhIOm1tOnNzJyxcbiAgdWlEYXRlTnVtYmVyRm9ybWF0OiAnVCcsXG4gIHVpVGltZVN0cmluZ0Zvcm1hdDogJ0hIOm1tOnNzJyxcbiAgdWlUaW1lTnVtYmVyRm9ybWF0OiAnVCcsXG4gIHVpRW1haWxTdWZmaXhlczogWydxcS5jb20nLCAnMTYzLmNvbScsICdnbWFpbC5jb20nLCAnMTI2LmNvbScsICdhbGl5dW4uY29tJ10sXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VDb25maWcoc3J2OiBBbGFpbkNvbmZpZ1NlcnZpY2UpOiBBbGFpblNGQ29uZmlnIHtcbiAgcmV0dXJuIHNydi5tZXJnZSgnc2YnLCBTRl9ERUZBVUxUX0NPTkZJRykhO1xufVxuIl19