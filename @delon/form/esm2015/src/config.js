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
    return (/** @type {?} */ (srv.merge('sf', SF_DEFAULT_CONFIG)));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybS9zcmMvY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUlBLE1BQU0sT0FBTyxpQkFBaUIsR0FBa0I7SUFDOUMsU0FBUyxFQUFFO1FBQ1QsV0FBVyxFQUFFO1lBQ1gsTUFBTSxFQUFFLE1BQU07WUFDZCxRQUFRLEVBQUUsSUFBSTtZQUNkLE1BQU0sRUFBRSw4QkFBOEI7U0FDdkM7UUFDRCxJQUFJLEVBQUUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUU7UUFDOUMsV0FBVyxFQUFFLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFO1FBQ3JELElBQUksRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUFFO1FBQ25ELFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUU7UUFDL0IsSUFBSSxFQUFFLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUU7UUFDekQsS0FBSyxFQUFFLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUU7UUFDM0QsR0FBRyxFQUFFLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRTtRQUN6QixLQUFLLEVBQUUsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUU7UUFDaEQsS0FBSyxFQUFFLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFO1FBQzFDLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUU7S0FDekI7SUFDRCxjQUFjLEVBQUUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDO0lBQ2hDLFlBQVksRUFBRSxJQUFJO0lBQ2xCLFlBQVksRUFBRSxJQUFJO0lBQ2xCLFdBQVcsRUFBRSxLQUFLO0lBQ2xCLFVBQVUsRUFBRSxLQUFLO0lBQ2pCLE1BQU0sRUFBRSxFQUFFO0lBQ1YsRUFBRSxFQUFFLG1CQUFBLEVBQUUsRUFBa0I7SUFDeEIsTUFBTSxFQUFFLG1CQUFBLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLEVBQVk7SUFDckUsa0JBQWtCLEVBQUUscUJBQXFCO0lBQ3pDLGtCQUFrQixFQUFFLEdBQUc7SUFDdkIsa0JBQWtCLEVBQUUsVUFBVTtJQUM5QixrQkFBa0IsRUFBRSxHQUFHO0lBQ3ZCLGVBQWUsRUFBRSxDQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxZQUFZLENBQUM7Q0FDN0U7Ozs7O0FBRUQsTUFBTSxVQUFVLFdBQVcsQ0FBQyxHQUF1QjtJQUNqRCxPQUFPLG1CQUFBLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLGlCQUFpQixDQUFDLEVBQUMsQ0FBQztBQUM3QyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWxhaW5Db25maWdTZXJ2aWNlLCBBbGFpblNGQ29uZmlnIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuaW1wb3J0IHsgU0ZCdXR0b24gfSBmcm9tICcuL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBTRlVJU2NoZW1hSXRlbSB9IGZyb20gJy4vc2NoZW1hL3VpJztcblxuZXhwb3J0IGNvbnN0IFNGX0RFRkFVTFRfQ09ORklHOiBBbGFpblNGQ29uZmlnID0ge1xuICBmb3JtYXRNYXA6IHtcbiAgICAnZGF0ZS10aW1lJzoge1xuICAgICAgd2lkZ2V0OiAnZGF0ZScsXG4gICAgICBzaG93VGltZTogdHJ1ZSxcbiAgICAgIGZvcm1hdDogYHl5eXktTU0tZGQnVCdISDptbTpzcy5TU1N4eHhgLFxuICAgIH0sXG4gICAgZGF0ZTogeyB3aWRnZXQ6ICdkYXRlJywgZm9ybWF0OiAneXl5eS1NTS1kZCcgfSxcbiAgICAnZnVsbC1kYXRlJzogeyB3aWRnZXQ6ICdkYXRlJywgZm9ybWF0OiAneXl5eS1NTS1kZCcgfSxcbiAgICB0aW1lOiB7IHdpZGdldDogJ3RpbWUnLCBmb3JtYXQ6ICdISDptbTpzcy5TU1N4eHgnIH0sXG4gICAgJ2Z1bGwtdGltZSc6IHsgd2lkZ2V0OiAndGltZScgfSxcbiAgICB3ZWVrOiB7IHdpZGdldDogJ2RhdGUnLCBtb2RlOiAnd2VlaycsIGZvcm1hdDogJ3l5eXktV1cnIH0sXG4gICAgbW9udGg6IHsgd2lkZ2V0OiAnZGF0ZScsIG1vZGU6ICdtb250aCcsIGZvcm1hdDogJ3l5eXktTU0nIH0sXG4gICAgdXJpOiB7IHdpZGdldDogJ3VwbG9hZCcgfSxcbiAgICBlbWFpbDogeyB3aWRnZXQ6ICdhdXRvY29tcGxldGUnLCB0eXBlOiAnZW1haWwnIH0sXG4gICAgY29sb3I6IHsgd2lkZ2V0OiAnc3RyaW5nJywgdHlwZTogJ2NvbG9yJyB9LFxuICAgICcnOiB7IHdpZGdldDogJ3N0cmluZycgfSxcbiAgfSxcbiAgaW5nb3JlS2V5d29yZHM6IFsndHlwZScsICdlbnVtJ10sXG4gIGxpdmVWYWxpZGF0ZTogdHJ1ZSxcbiAgYXV0b2NvbXBsZXRlOiBudWxsLFxuICBmaXJzdFZpc3VhbDogZmFsc2UsXG4gIG9ubHlWaXN1YWw6IGZhbHNlLFxuICBlcnJvcnM6IHt9LFxuICB1aToge30gYXMgU0ZVSVNjaGVtYUl0ZW0sXG4gIGJ1dHRvbjogeyBzdWJtaXRfdHlwZTogJ3ByaW1hcnknLCByZXNldF90eXBlOiAnZGVmYXVsdCcgfSBhcyBTRkJ1dHRvbixcbiAgdWlEYXRlU3RyaW5nRm9ybWF0OiAneXl5eS1NTS1kZCBISDptbTpzcycsXG4gIHVpRGF0ZU51bWJlckZvcm1hdDogJ1QnLFxuICB1aVRpbWVTdHJpbmdGb3JtYXQ6ICdISDptbTpzcycsXG4gIHVpVGltZU51bWJlckZvcm1hdDogJ1QnLFxuICB1aUVtYWlsU3VmZml4ZXM6IFsncXEuY29tJywgJzE2My5jb20nLCAnZ21haWwuY29tJywgJzEyNi5jb20nLCAnYWxpeXVuLmNvbSddLFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlQ29uZmlnKHNydjogQWxhaW5Db25maWdTZXJ2aWNlKTogQWxhaW5TRkNvbmZpZyB7XG4gIHJldHVybiBzcnYubWVyZ2UoJ3NmJywgU0ZfREVGQVVMVF9DT05GSUcpITtcbn1cbiJdfQ==