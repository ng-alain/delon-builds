/**
 * @fileoverview added by tsickle
 * Generated from: src/config.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export var SF_DEFAULT_CONFIG = {
    formatMap: {
        'date-time': {
            widget: 'date',
            showTime: true,
            format: "yyyy-MM-dd'T'HH:mm:ss.SSSxxx",
        },
        date: { widget: 'date', format: 'yyyy-MM-dd' },
        'full-date': { widget: 'date', format: 'yyyy-MM-dd' },
        time: { widget: 'time', format: 'HH:mm:ss.SSSxxx' },
        'full-time': { widget: 'time' },
        week: { widget: 'date', mode: 'week', format: 'yyyy-WW' },
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
    return srv.merge('sf', SF_DEFAULT_CONFIG);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUlBLE1BQU0sS0FBTyxpQkFBaUIsR0FBa0I7SUFDOUMsU0FBUyxFQUFFO1FBQ1QsV0FBVyxFQUFFO1lBQ1gsTUFBTSxFQUFFLE1BQU07WUFDZCxRQUFRLEVBQUUsSUFBSTtZQUNkLE1BQU0sRUFBRSw4QkFBOEI7U0FDdkM7UUFDRCxJQUFJLEVBQUUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUU7UUFDOUMsV0FBVyxFQUFFLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFO1FBQ3JELElBQUksRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUFFO1FBQ25ELFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUU7UUFDL0IsSUFBSSxFQUFFLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUU7UUFDekQsS0FBSyxFQUFFLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUU7UUFDM0QsR0FBRyxFQUFFLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRTtRQUN6QixLQUFLLEVBQUUsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUU7UUFDaEQsS0FBSyxFQUFFLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFO1FBQzFDLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUU7S0FDekI7SUFDRCxjQUFjLEVBQUUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDO0lBQ2hDLFlBQVksRUFBRSxJQUFJO0lBQ2xCLFlBQVksRUFBRSxJQUFJO0lBQ2xCLFdBQVcsRUFBRSxLQUFLO0lBQ2xCLFVBQVUsRUFBRSxLQUFLO0lBQ2pCLE1BQU0sRUFBRSxFQUFFO0lBQ1YsRUFBRSxFQUFFLG1CQUFBLEVBQUUsRUFBa0I7SUFDeEIsTUFBTSxFQUFFLG1CQUFBLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLEVBQVk7SUFDckUsa0JBQWtCLEVBQUUscUJBQXFCO0lBQ3pDLGtCQUFrQixFQUFFLEdBQUc7SUFDdkIsa0JBQWtCLEVBQUUsVUFBVTtJQUM5QixrQkFBa0IsRUFBRSxHQUFHO0lBQ3ZCLGVBQWUsRUFBRSxDQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxZQUFZLENBQUM7Q0FDN0U7Ozs7O0FBRUQsTUFBTSxVQUFVLFdBQVcsQ0FBQyxHQUF1QjtJQUNqRCxPQUFPLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLGlCQUFpQixDQUFDLENBQUM7QUFDNUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFsYWluQ29uZmlnU2VydmljZSwgQWxhaW5TRkNvbmZpZyB9IGZyb20gJ0BkZWxvbi91dGlsJztcbmltcG9ydCB7IFNGQnV0dG9uIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgU0ZVSVNjaGVtYUl0ZW0gfSBmcm9tICcuL3NjaGVtYS91aSc7XG5cbmV4cG9ydCBjb25zdCBTRl9ERUZBVUxUX0NPTkZJRzogQWxhaW5TRkNvbmZpZyA9IHtcbiAgZm9ybWF0TWFwOiB7XG4gICAgJ2RhdGUtdGltZSc6IHtcbiAgICAgIHdpZGdldDogJ2RhdGUnLFxuICAgICAgc2hvd1RpbWU6IHRydWUsXG4gICAgICBmb3JtYXQ6IGB5eXl5LU1NLWRkJ1QnSEg6bW06c3MuU1NTeHh4YCxcbiAgICB9LFxuICAgIGRhdGU6IHsgd2lkZ2V0OiAnZGF0ZScsIGZvcm1hdDogJ3l5eXktTU0tZGQnIH0sXG4gICAgJ2Z1bGwtZGF0ZSc6IHsgd2lkZ2V0OiAnZGF0ZScsIGZvcm1hdDogJ3l5eXktTU0tZGQnIH0sXG4gICAgdGltZTogeyB3aWRnZXQ6ICd0aW1lJywgZm9ybWF0OiAnSEg6bW06c3MuU1NTeHh4JyB9LFxuICAgICdmdWxsLXRpbWUnOiB7IHdpZGdldDogJ3RpbWUnIH0sXG4gICAgd2VlazogeyB3aWRnZXQ6ICdkYXRlJywgbW9kZTogJ3dlZWsnLCBmb3JtYXQ6ICd5eXl5LVdXJyB9LFxuICAgIG1vbnRoOiB7IHdpZGdldDogJ2RhdGUnLCBtb2RlOiAnbW9udGgnLCBmb3JtYXQ6ICd5eXl5LU1NJyB9LFxuICAgIHVyaTogeyB3aWRnZXQ6ICd1cGxvYWQnIH0sXG4gICAgZW1haWw6IHsgd2lkZ2V0OiAnYXV0b2NvbXBsZXRlJywgdHlwZTogJ2VtYWlsJyB9LFxuICAgIGNvbG9yOiB7IHdpZGdldDogJ3N0cmluZycsIHR5cGU6ICdjb2xvcicgfSxcbiAgICAnJzogeyB3aWRnZXQ6ICdzdHJpbmcnIH0sXG4gIH0sXG4gIGluZ29yZUtleXdvcmRzOiBbJ3R5cGUnLCAnZW51bSddLFxuICBsaXZlVmFsaWRhdGU6IHRydWUsXG4gIGF1dG9jb21wbGV0ZTogbnVsbCxcbiAgZmlyc3RWaXN1YWw6IGZhbHNlLFxuICBvbmx5VmlzdWFsOiBmYWxzZSxcbiAgZXJyb3JzOiB7fSxcbiAgdWk6IHt9IGFzIFNGVUlTY2hlbWFJdGVtLFxuICBidXR0b246IHsgc3VibWl0X3R5cGU6ICdwcmltYXJ5JywgcmVzZXRfdHlwZTogJ2RlZmF1bHQnIH0gYXMgU0ZCdXR0b24sXG4gIHVpRGF0ZVN0cmluZ0Zvcm1hdDogJ3l5eXktTU0tZGQgSEg6bW06c3MnLFxuICB1aURhdGVOdW1iZXJGb3JtYXQ6ICdUJyxcbiAgdWlUaW1lU3RyaW5nRm9ybWF0OiAnSEg6bW06c3MnLFxuICB1aVRpbWVOdW1iZXJGb3JtYXQ6ICdUJyxcbiAgdWlFbWFpbFN1ZmZpeGVzOiBbJ3FxLmNvbScsICcxNjMuY29tJywgJ2dtYWlsLmNvbScsICcxMjYuY29tJywgJ2FsaXl1bi5jb20nXSxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZUNvbmZpZyhzcnY6IEFsYWluQ29uZmlnU2VydmljZSk6IEFsYWluU0ZDb25maWcge1xuICByZXR1cm4gc3J2Lm1lcmdlKCdzZicsIFNGX0RFRkFVTFRfQ09ORklHKTtcbn1cbiJdfQ==