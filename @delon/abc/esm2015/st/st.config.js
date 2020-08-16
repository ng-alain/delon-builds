/**
 * @fileoverview added by tsickle
 * Generated from: st.config.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export const ST_DEFULAT_CONFIG = {
    pi: 1,
    ps: 10,
    size: 'default',
    responsive: true,
    responsiveHideHeaderFooter: false,
    req: {
        type: 'page',
        method: 'GET',
        allInBody: false,
        lazyLoad: false,
        reName: { pi: 'pi', ps: 'ps', skip: 'skip', limit: 'limit' },
    },
    res: {
        reName: { list: ['list'], total: ['total'] },
    },
    page: {
        front: true,
        zeroIndexed: false,
        position: 'bottom',
        placement: 'right',
        show: true,
        showSize: false,
        pageSizes: [10, 20, 30, 40, 50],
        showQuickJumper: false,
        total: true,
        toTop: true,
        toTopOffset: 100,
    },
    modal: {
        paramsName: 'record',
        size: 'lg',
        exact: true,
    },
    drawer: {
        paramsName: 'record',
        size: 'md',
        footer: true,
        footerHeight: 55,
    },
    pop: {
        title: '确认删除吗？',
        trigger: 'click',
        placement: 'top',
    },
    rowClickTime: 200,
    btnIcon: {
        theme: 'outline',
        spin: false,
    },
    noIndex: 1,
    expandRowByClick: false,
    expandAccordion: false,
    widthMode: {
        type: 'default',
        strictBehavior: 'truncate',
    },
    virtualItemSize: 54,
    virtualMaxBufferPx: 200,
    virtualMinBufferPx: 100,
    iifBehavior: 'hide',
    loadingDelay: 0,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QuY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL3N0L3N0LmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFFQSxNQUFNLE9BQU8saUJBQWlCLEdBQWtCO0lBQzlDLEVBQUUsRUFBRSxDQUFDO0lBQ0wsRUFBRSxFQUFFLEVBQUU7SUFDTixJQUFJLEVBQUUsU0FBUztJQUNmLFVBQVUsRUFBRSxJQUFJO0lBQ2hCLDBCQUEwQixFQUFFLEtBQUs7SUFDakMsR0FBRyxFQUFFO1FBQ0gsSUFBSSxFQUFFLE1BQU07UUFDWixNQUFNLEVBQUUsS0FBSztRQUNiLFNBQVMsRUFBRSxLQUFLO1FBQ2hCLFFBQVEsRUFBRSxLQUFLO1FBQ2YsTUFBTSxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRTtLQUM3RDtJQUNELEdBQUcsRUFBRTtRQUNILE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFO0tBQzdDO0lBQ0QsSUFBSSxFQUFFO1FBQ0osS0FBSyxFQUFFLElBQUk7UUFDWCxXQUFXLEVBQUUsS0FBSztRQUNsQixRQUFRLEVBQUUsUUFBUTtRQUNsQixTQUFTLEVBQUUsT0FBTztRQUNsQixJQUFJLEVBQUUsSUFBSTtRQUNWLFFBQVEsRUFBRSxLQUFLO1FBQ2YsU0FBUyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUMvQixlQUFlLEVBQUUsS0FBSztRQUN0QixLQUFLLEVBQUUsSUFBSTtRQUNYLEtBQUssRUFBRSxJQUFJO1FBQ1gsV0FBVyxFQUFFLEdBQUc7S0FDakI7SUFDRCxLQUFLLEVBQUU7UUFDTCxVQUFVLEVBQUUsUUFBUTtRQUNwQixJQUFJLEVBQUUsSUFBSTtRQUNWLEtBQUssRUFBRSxJQUFJO0tBQ1o7SUFDRCxNQUFNLEVBQUU7UUFDTixVQUFVLEVBQUUsUUFBUTtRQUNwQixJQUFJLEVBQUUsSUFBSTtRQUNWLE1BQU0sRUFBRSxJQUFJO1FBQ1osWUFBWSxFQUFFLEVBQUU7S0FDakI7SUFDRCxHQUFHLEVBQUU7UUFDSCxLQUFLLEVBQUUsUUFBUTtRQUNmLE9BQU8sRUFBRSxPQUFPO1FBQ2hCLFNBQVMsRUFBRSxLQUFLO0tBQ2pCO0lBQ0QsWUFBWSxFQUFFLEdBQUc7SUFDakIsT0FBTyxFQUFFO1FBQ1AsS0FBSyxFQUFFLFNBQVM7UUFDaEIsSUFBSSxFQUFFLEtBQUs7S0FDWjtJQUNELE9BQU8sRUFBRSxDQUFDO0lBQ1YsZ0JBQWdCLEVBQUUsS0FBSztJQUN2QixlQUFlLEVBQUUsS0FBSztJQUN0QixTQUFTLEVBQUU7UUFDVCxJQUFJLEVBQUUsU0FBUztRQUNmLGNBQWMsRUFBRSxVQUFVO0tBQzNCO0lBQ0QsZUFBZSxFQUFFLEVBQUU7SUFDbkIsa0JBQWtCLEVBQUUsR0FBRztJQUN2QixrQkFBa0IsRUFBRSxHQUFHO0lBQ3ZCLFdBQVcsRUFBRSxNQUFNO0lBQ25CLFlBQVksRUFBRSxDQUFDO0NBQ2hCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWxhaW5TVENvbmZpZyB9IGZyb20gJ0BkZWxvbi91dGlsJztcblxuZXhwb3J0IGNvbnN0IFNUX0RFRlVMQVRfQ09ORklHOiBBbGFpblNUQ29uZmlnID0ge1xuICBwaTogMSxcbiAgcHM6IDEwLFxuICBzaXplOiAnZGVmYXVsdCcsXG4gIHJlc3BvbnNpdmU6IHRydWUsXG4gIHJlc3BvbnNpdmVIaWRlSGVhZGVyRm9vdGVyOiBmYWxzZSxcbiAgcmVxOiB7XG4gICAgdHlwZTogJ3BhZ2UnLFxuICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgYWxsSW5Cb2R5OiBmYWxzZSxcbiAgICBsYXp5TG9hZDogZmFsc2UsXG4gICAgcmVOYW1lOiB7IHBpOiAncGknLCBwczogJ3BzJywgc2tpcDogJ3NraXAnLCBsaW1pdDogJ2xpbWl0JyB9LFxuICB9LFxuICByZXM6IHtcbiAgICByZU5hbWU6IHsgbGlzdDogWydsaXN0J10sIHRvdGFsOiBbJ3RvdGFsJ10gfSxcbiAgfSxcbiAgcGFnZToge1xuICAgIGZyb250OiB0cnVlLFxuICAgIHplcm9JbmRleGVkOiBmYWxzZSxcbiAgICBwb3NpdGlvbjogJ2JvdHRvbScsXG4gICAgcGxhY2VtZW50OiAncmlnaHQnLFxuICAgIHNob3c6IHRydWUsXG4gICAgc2hvd1NpemU6IGZhbHNlLFxuICAgIHBhZ2VTaXplczogWzEwLCAyMCwgMzAsIDQwLCA1MF0sXG4gICAgc2hvd1F1aWNrSnVtcGVyOiBmYWxzZSxcbiAgICB0b3RhbDogdHJ1ZSxcbiAgICB0b1RvcDogdHJ1ZSxcbiAgICB0b1RvcE9mZnNldDogMTAwLFxuICB9LFxuICBtb2RhbDoge1xuICAgIHBhcmFtc05hbWU6ICdyZWNvcmQnLFxuICAgIHNpemU6ICdsZycsXG4gICAgZXhhY3Q6IHRydWUsXG4gIH0sXG4gIGRyYXdlcjoge1xuICAgIHBhcmFtc05hbWU6ICdyZWNvcmQnLFxuICAgIHNpemU6ICdtZCcsXG4gICAgZm9vdGVyOiB0cnVlLFxuICAgIGZvb3RlckhlaWdodDogNTUsXG4gIH0sXG4gIHBvcDoge1xuICAgIHRpdGxlOiAn56Gu6K6k5Yig6Zmk5ZCX77yfJyxcbiAgICB0cmlnZ2VyOiAnY2xpY2snLFxuICAgIHBsYWNlbWVudDogJ3RvcCcsXG4gIH0sXG4gIHJvd0NsaWNrVGltZTogMjAwLFxuICBidG5JY29uOiB7XG4gICAgdGhlbWU6ICdvdXRsaW5lJyxcbiAgICBzcGluOiBmYWxzZSxcbiAgfSxcbiAgbm9JbmRleDogMSxcbiAgZXhwYW5kUm93QnlDbGljazogZmFsc2UsXG4gIGV4cGFuZEFjY29yZGlvbjogZmFsc2UsXG4gIHdpZHRoTW9kZToge1xuICAgIHR5cGU6ICdkZWZhdWx0JyxcbiAgICBzdHJpY3RCZWhhdmlvcjogJ3RydW5jYXRlJyxcbiAgfSxcbiAgdmlydHVhbEl0ZW1TaXplOiA1NCxcbiAgdmlydHVhbE1heEJ1ZmZlclB4OiAyMDAsXG4gIHZpcnR1YWxNaW5CdWZmZXJQeDogMTAwLFxuICBpaWZCZWhhdmlvcjogJ2hpZGUnLFxuICBsb2FkaW5nRGVsYXk6IDAsXG59O1xuIl19