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
        itemRender: null,
        simple: false,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QuY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL3N0L3N0LmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFFQSxNQUFNLE9BQU8saUJBQWlCLEdBQWtCO0lBQzlDLEVBQUUsRUFBRSxDQUFDO0lBQ0wsRUFBRSxFQUFFLEVBQUU7SUFDTixJQUFJLEVBQUUsU0FBUztJQUNmLFVBQVUsRUFBRSxJQUFJO0lBQ2hCLDBCQUEwQixFQUFFLEtBQUs7SUFDakMsR0FBRyxFQUFFO1FBQ0gsSUFBSSxFQUFFLE1BQU07UUFDWixNQUFNLEVBQUUsS0FBSztRQUNiLFNBQVMsRUFBRSxLQUFLO1FBQ2hCLFFBQVEsRUFBRSxLQUFLO1FBQ2YsTUFBTSxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRTtLQUM3RDtJQUNELEdBQUcsRUFBRTtRQUNILE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFO0tBQzdDO0lBQ0QsSUFBSSxFQUFFO1FBQ0osS0FBSyxFQUFFLElBQUk7UUFDWCxXQUFXLEVBQUUsS0FBSztRQUNsQixRQUFRLEVBQUUsUUFBUTtRQUNsQixTQUFTLEVBQUUsT0FBTztRQUNsQixJQUFJLEVBQUUsSUFBSTtRQUNWLFFBQVEsRUFBRSxLQUFLO1FBQ2YsU0FBUyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUMvQixlQUFlLEVBQUUsS0FBSztRQUN0QixLQUFLLEVBQUUsSUFBSTtRQUNYLEtBQUssRUFBRSxJQUFJO1FBQ1gsV0FBVyxFQUFFLEdBQUc7UUFDaEIsVUFBVSxFQUFFLElBQUk7UUFDaEIsTUFBTSxFQUFFLEtBQUs7S0FDZDtJQUNELEtBQUssRUFBRTtRQUNMLFVBQVUsRUFBRSxRQUFRO1FBQ3BCLElBQUksRUFBRSxJQUFJO1FBQ1YsS0FBSyxFQUFFLElBQUk7S0FDWjtJQUNELE1BQU0sRUFBRTtRQUNOLFVBQVUsRUFBRSxRQUFRO1FBQ3BCLElBQUksRUFBRSxJQUFJO1FBQ1YsTUFBTSxFQUFFLElBQUk7UUFDWixZQUFZLEVBQUUsRUFBRTtLQUNqQjtJQUNELEdBQUcsRUFBRTtRQUNILEtBQUssRUFBRSxRQUFRO1FBQ2YsT0FBTyxFQUFFLE9BQU87UUFDaEIsU0FBUyxFQUFFLEtBQUs7S0FDakI7SUFDRCxZQUFZLEVBQUUsR0FBRztJQUNqQixPQUFPLEVBQUU7UUFDUCxLQUFLLEVBQUUsU0FBUztRQUNoQixJQUFJLEVBQUUsS0FBSztLQUNaO0lBQ0QsT0FBTyxFQUFFLENBQUM7SUFDVixnQkFBZ0IsRUFBRSxLQUFLO0lBQ3ZCLGVBQWUsRUFBRSxLQUFLO0lBQ3RCLFNBQVMsRUFBRTtRQUNULElBQUksRUFBRSxTQUFTO1FBQ2YsY0FBYyxFQUFFLFVBQVU7S0FDM0I7SUFDRCxlQUFlLEVBQUUsRUFBRTtJQUNuQixrQkFBa0IsRUFBRSxHQUFHO0lBQ3ZCLGtCQUFrQixFQUFFLEdBQUc7SUFDdkIsV0FBVyxFQUFFLE1BQU07SUFDbkIsWUFBWSxFQUFFLENBQUM7Q0FDaEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBbGFpblNUQ29uZmlnIH0gZnJvbSAnQGRlbG9uL3V0aWwvY29uZmlnJztcblxuZXhwb3J0IGNvbnN0IFNUX0RFRlVMQVRfQ09ORklHOiBBbGFpblNUQ29uZmlnID0ge1xuICBwaTogMSxcbiAgcHM6IDEwLFxuICBzaXplOiAnZGVmYXVsdCcsXG4gIHJlc3BvbnNpdmU6IHRydWUsXG4gIHJlc3BvbnNpdmVIaWRlSGVhZGVyRm9vdGVyOiBmYWxzZSxcbiAgcmVxOiB7XG4gICAgdHlwZTogJ3BhZ2UnLFxuICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgYWxsSW5Cb2R5OiBmYWxzZSxcbiAgICBsYXp5TG9hZDogZmFsc2UsXG4gICAgcmVOYW1lOiB7IHBpOiAncGknLCBwczogJ3BzJywgc2tpcDogJ3NraXAnLCBsaW1pdDogJ2xpbWl0JyB9LFxuICB9LFxuICByZXM6IHtcbiAgICByZU5hbWU6IHsgbGlzdDogWydsaXN0J10sIHRvdGFsOiBbJ3RvdGFsJ10gfSxcbiAgfSxcbiAgcGFnZToge1xuICAgIGZyb250OiB0cnVlLFxuICAgIHplcm9JbmRleGVkOiBmYWxzZSxcbiAgICBwb3NpdGlvbjogJ2JvdHRvbScsXG4gICAgcGxhY2VtZW50OiAncmlnaHQnLFxuICAgIHNob3c6IHRydWUsXG4gICAgc2hvd1NpemU6IGZhbHNlLFxuICAgIHBhZ2VTaXplczogWzEwLCAyMCwgMzAsIDQwLCA1MF0sXG4gICAgc2hvd1F1aWNrSnVtcGVyOiBmYWxzZSxcbiAgICB0b3RhbDogdHJ1ZSxcbiAgICB0b1RvcDogdHJ1ZSxcbiAgICB0b1RvcE9mZnNldDogMTAwLFxuICAgIGl0ZW1SZW5kZXI6IG51bGwsXG4gICAgc2ltcGxlOiBmYWxzZSxcbiAgfSxcbiAgbW9kYWw6IHtcbiAgICBwYXJhbXNOYW1lOiAncmVjb3JkJyxcbiAgICBzaXplOiAnbGcnLFxuICAgIGV4YWN0OiB0cnVlLFxuICB9LFxuICBkcmF3ZXI6IHtcbiAgICBwYXJhbXNOYW1lOiAncmVjb3JkJyxcbiAgICBzaXplOiAnbWQnLFxuICAgIGZvb3RlcjogdHJ1ZSxcbiAgICBmb290ZXJIZWlnaHQ6IDU1LFxuICB9LFxuICBwb3A6IHtcbiAgICB0aXRsZTogJ+ehruiupOWIoOmZpOWQl++8nycsXG4gICAgdHJpZ2dlcjogJ2NsaWNrJyxcbiAgICBwbGFjZW1lbnQ6ICd0b3AnLFxuICB9LFxuICByb3dDbGlja1RpbWU6IDIwMCxcbiAgYnRuSWNvbjoge1xuICAgIHRoZW1lOiAnb3V0bGluZScsXG4gICAgc3BpbjogZmFsc2UsXG4gIH0sXG4gIG5vSW5kZXg6IDEsXG4gIGV4cGFuZFJvd0J5Q2xpY2s6IGZhbHNlLFxuICBleHBhbmRBY2NvcmRpb246IGZhbHNlLFxuICB3aWR0aE1vZGU6IHtcbiAgICB0eXBlOiAnZGVmYXVsdCcsXG4gICAgc3RyaWN0QmVoYXZpb3I6ICd0cnVuY2F0ZScsXG4gIH0sXG4gIHZpcnR1YWxJdGVtU2l6ZTogNTQsXG4gIHZpcnR1YWxNYXhCdWZmZXJQeDogMjAwLFxuICB2aXJ0dWFsTWluQnVmZmVyUHg6IDEwMCxcbiAgaWlmQmVoYXZpb3I6ICdoaWRlJyxcbiAgbG9hZGluZ0RlbGF5OiAwLFxufTtcbiJdfQ==