export const SF_DEFAULT_CONFIG = {
    formatMap: {
        'date-time': {
            widget: 'date',
            showTime: true,
            format: `yyyy-MM-dd'T'HH:mm:ss.SSSxxx`
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
        '': { widget: 'string' }
    },
    ingoreKeywords: ['type', 'enum'],
    liveValidate: true,
    autocomplete: null,
    firstVisual: false,
    onlyVisual: false,
    errors: {},
    ui: {},
    button: { submit_type: 'primary', reset_type: 'default' },
    uiDateStringFormat: 'yyyy-MM-dd HH:mm:ss',
    uiDateNumberFormat: 'T',
    uiTimeStringFormat: 'HH:mm:ss',
    uiTimeNumberFormat: 'T',
    uiEmailSuffixes: ['qq.com', '163.com', 'gmail.com', '126.com', 'aliyun.com']
};
export function mergeConfig(srv) {
    return srv.merge('sf', SF_DEFAULT_CONFIG);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybS9zcmMvY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBLE1BQU0sQ0FBQyxNQUFNLGlCQUFpQixHQUFrQjtJQUM5QyxTQUFTLEVBQUU7UUFDVCxXQUFXLEVBQUU7WUFDWCxNQUFNLEVBQUUsTUFBTTtZQUNkLFFBQVEsRUFBRSxJQUFJO1lBQ2QsTUFBTSxFQUFFLDhCQUE4QjtTQUN2QztRQUNELElBQUksRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRTtRQUM5QyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUU7UUFDckQsSUFBSSxFQUFFLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsaUJBQWlCLEVBQUU7UUFDbkQsV0FBVyxFQUFFLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRTtRQUMvQixJQUFJLEVBQUUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRTtRQUN6RCxLQUFLLEVBQUUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRTtRQUMzRCxHQUFHLEVBQUUsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFO1FBQ3pCLEtBQUssRUFBRSxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRTtRQUNoRCxLQUFLLEVBQUUsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUU7UUFDMUMsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRTtLQUN6QjtJQUNELGNBQWMsRUFBRSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUM7SUFDaEMsWUFBWSxFQUFFLElBQUk7SUFDbEIsWUFBWSxFQUFFLElBQUk7SUFDbEIsV0FBVyxFQUFFLEtBQUs7SUFDbEIsVUFBVSxFQUFFLEtBQUs7SUFDakIsTUFBTSxFQUFFLEVBQUU7SUFDVixFQUFFLEVBQUUsRUFBb0I7SUFDeEIsTUFBTSxFQUFFLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFjO0lBQ3JFLGtCQUFrQixFQUFFLHFCQUFxQjtJQUN6QyxrQkFBa0IsRUFBRSxHQUFHO0lBQ3ZCLGtCQUFrQixFQUFFLFVBQVU7SUFDOUIsa0JBQWtCLEVBQUUsR0FBRztJQUN2QixlQUFlLEVBQUUsQ0FBQyxRQUFRLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsWUFBWSxDQUFDO0NBQzdFLENBQUM7QUFFRixNQUFNLFVBQVUsV0FBVyxDQUFDLEdBQXVCO0lBQ2pELE9BQU8sR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsaUJBQWlCLENBQUUsQ0FBQztBQUM3QyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWxhaW5Db25maWdTZXJ2aWNlLCBBbGFpblNGQ29uZmlnIH0gZnJvbSAnQGRlbG9uL3V0aWwvY29uZmlnJztcblxuaW1wb3J0IHsgU0ZCdXR0b24gfSBmcm9tICcuL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBTRlVJU2NoZW1hSXRlbSB9IGZyb20gJy4vc2NoZW1hL3VpJztcblxuZXhwb3J0IGNvbnN0IFNGX0RFRkFVTFRfQ09ORklHOiBBbGFpblNGQ29uZmlnID0ge1xuICBmb3JtYXRNYXA6IHtcbiAgICAnZGF0ZS10aW1lJzoge1xuICAgICAgd2lkZ2V0OiAnZGF0ZScsXG4gICAgICBzaG93VGltZTogdHJ1ZSxcbiAgICAgIGZvcm1hdDogYHl5eXktTU0tZGQnVCdISDptbTpzcy5TU1N4eHhgXG4gICAgfSxcbiAgICBkYXRlOiB7IHdpZGdldDogJ2RhdGUnLCBmb3JtYXQ6ICd5eXl5LU1NLWRkJyB9LFxuICAgICdmdWxsLWRhdGUnOiB7IHdpZGdldDogJ2RhdGUnLCBmb3JtYXQ6ICd5eXl5LU1NLWRkJyB9LFxuICAgIHRpbWU6IHsgd2lkZ2V0OiAndGltZScsIGZvcm1hdDogJ0hIOm1tOnNzLlNTU3h4eCcgfSxcbiAgICAnZnVsbC10aW1lJzogeyB3aWRnZXQ6ICd0aW1lJyB9LFxuICAgIHdlZWs6IHsgd2lkZ2V0OiAnZGF0ZScsIG1vZGU6ICd3ZWVrJywgZm9ybWF0OiAneXl5eS13dycgfSxcbiAgICBtb250aDogeyB3aWRnZXQ6ICdkYXRlJywgbW9kZTogJ21vbnRoJywgZm9ybWF0OiAneXl5eS1NTScgfSxcbiAgICB1cmk6IHsgd2lkZ2V0OiAndXBsb2FkJyB9LFxuICAgIGVtYWlsOiB7IHdpZGdldDogJ2F1dG9jb21wbGV0ZScsIHR5cGU6ICdlbWFpbCcgfSxcbiAgICBjb2xvcjogeyB3aWRnZXQ6ICdzdHJpbmcnLCB0eXBlOiAnY29sb3InIH0sXG4gICAgJyc6IHsgd2lkZ2V0OiAnc3RyaW5nJyB9XG4gIH0sXG4gIGluZ29yZUtleXdvcmRzOiBbJ3R5cGUnLCAnZW51bSddLFxuICBsaXZlVmFsaWRhdGU6IHRydWUsXG4gIGF1dG9jb21wbGV0ZTogbnVsbCxcbiAgZmlyc3RWaXN1YWw6IGZhbHNlLFxuICBvbmx5VmlzdWFsOiBmYWxzZSxcbiAgZXJyb3JzOiB7fSxcbiAgdWk6IHt9IGFzIFNGVUlTY2hlbWFJdGVtLFxuICBidXR0b246IHsgc3VibWl0X3R5cGU6ICdwcmltYXJ5JywgcmVzZXRfdHlwZTogJ2RlZmF1bHQnIH0gYXMgU0ZCdXR0b24sXG4gIHVpRGF0ZVN0cmluZ0Zvcm1hdDogJ3l5eXktTU0tZGQgSEg6bW06c3MnLFxuICB1aURhdGVOdW1iZXJGb3JtYXQ6ICdUJyxcbiAgdWlUaW1lU3RyaW5nRm9ybWF0OiAnSEg6bW06c3MnLFxuICB1aVRpbWVOdW1iZXJGb3JtYXQ6ICdUJyxcbiAgdWlFbWFpbFN1ZmZpeGVzOiBbJ3FxLmNvbScsICcxNjMuY29tJywgJ2dtYWlsLmNvbScsICcxMjYuY29tJywgJ2FsaXl1bi5jb20nXVxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlQ29uZmlnKHNydjogQWxhaW5Db25maWdTZXJ2aWNlKTogQWxhaW5TRkNvbmZpZyB7XG4gIHJldHVybiBzcnYubWVyZ2UoJ3NmJywgU0ZfREVGQVVMVF9DT05GSUcpITtcbn1cbiJdfQ==