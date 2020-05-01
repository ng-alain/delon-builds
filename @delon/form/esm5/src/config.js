/**
 * @fileoverview added by tsickle
 * Generated from: src/config.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export var SF_DEFAULT_CONFIG = {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUlBLE1BQU0sS0FBTyxpQkFBaUIsR0FBa0I7SUFDOUMsY0FBYyxFQUFFLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQztJQUNoQyxZQUFZLEVBQUUsSUFBSTtJQUNsQixZQUFZLEVBQUUsSUFBSTtJQUNsQixXQUFXLEVBQUUsS0FBSztJQUNsQixVQUFVLEVBQUUsS0FBSztJQUNqQixNQUFNLEVBQUUsRUFBRTtJQUNWLEVBQUUsRUFBRSxtQkFBQSxFQUFFLEVBQWtCO0lBQ3hCLE1BQU0sRUFBRSxtQkFBQSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxFQUFZO0lBQ3JFLGtCQUFrQixFQUFFLHFCQUFxQjtJQUN6QyxrQkFBa0IsRUFBRSxHQUFHO0lBQ3ZCLGtCQUFrQixFQUFFLFVBQVU7SUFDOUIsa0JBQWtCLEVBQUUsR0FBRztJQUN2QixlQUFlLEVBQUUsQ0FBQyxRQUFRLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsWUFBWSxDQUFDO0NBQzdFOzs7OztBQUVELE1BQU0sVUFBVSxXQUFXLENBQUMsR0FBdUI7SUFDakQsT0FBTyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO0FBQzVDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBbGFpbkNvbmZpZ1NlcnZpY2UsIEFsYWluU0ZDb25maWcgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQgeyBTRkJ1dHRvbiB9IGZyb20gJy4vaW50ZXJmYWNlJztcbmltcG9ydCB7IFNGVUlTY2hlbWFJdGVtIH0gZnJvbSAnLi9zY2hlbWEvdWknO1xuXG5leHBvcnQgY29uc3QgU0ZfREVGQVVMVF9DT05GSUc6IEFsYWluU0ZDb25maWcgPSB7XG4gIGluZ29yZUtleXdvcmRzOiBbJ3R5cGUnLCAnZW51bSddLFxuICBsaXZlVmFsaWRhdGU6IHRydWUsXG4gIGF1dG9jb21wbGV0ZTogbnVsbCxcbiAgZmlyc3RWaXN1YWw6IGZhbHNlLFxuICBvbmx5VmlzdWFsOiBmYWxzZSxcbiAgZXJyb3JzOiB7fSxcbiAgdWk6IHt9IGFzIFNGVUlTY2hlbWFJdGVtLFxuICBidXR0b246IHsgc3VibWl0X3R5cGU6ICdwcmltYXJ5JywgcmVzZXRfdHlwZTogJ2RlZmF1bHQnIH0gYXMgU0ZCdXR0b24sXG4gIHVpRGF0ZVN0cmluZ0Zvcm1hdDogJ3l5eXktTU0tZGQgSEg6bW06c3MnLFxuICB1aURhdGVOdW1iZXJGb3JtYXQ6ICdUJyxcbiAgdWlUaW1lU3RyaW5nRm9ybWF0OiAnSEg6bW06c3MnLFxuICB1aVRpbWVOdW1iZXJGb3JtYXQ6ICdUJyxcbiAgdWlFbWFpbFN1ZmZpeGVzOiBbJ3FxLmNvbScsICcxNjMuY29tJywgJ2dtYWlsLmNvbScsICcxMjYuY29tJywgJ2FsaXl1bi5jb20nXSxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZUNvbmZpZyhzcnY6IEFsYWluQ29uZmlnU2VydmljZSk6IEFsYWluU0ZDb25maWcge1xuICByZXR1cm4gc3J2Lm1lcmdlKCdzZicsIFNGX0RFRkFVTFRfQ09ORklHKTtcbn1cbiJdfQ==