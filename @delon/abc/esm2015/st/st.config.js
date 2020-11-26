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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QuY29uZmlnLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3ZzdHMvd29yay8xL3MvcGFja2FnZXMvYWJjL3N0LyIsInNvdXJjZXMiOlsic3QuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLE1BQU0sT0FBTyxpQkFBaUIsR0FBa0I7SUFDOUMsRUFBRSxFQUFFLENBQUM7SUFDTCxFQUFFLEVBQUUsRUFBRTtJQUNOLElBQUksRUFBRSxTQUFTO0lBQ2YsVUFBVSxFQUFFLElBQUk7SUFDaEIsMEJBQTBCLEVBQUUsS0FBSztJQUNqQyxHQUFHLEVBQUU7UUFDSCxJQUFJLEVBQUUsTUFBTTtRQUNaLE1BQU0sRUFBRSxLQUFLO1FBQ2IsU0FBUyxFQUFFLEtBQUs7UUFDaEIsUUFBUSxFQUFFLEtBQUs7UUFDZixNQUFNLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFO0tBQzdEO0lBQ0QsR0FBRyxFQUFFO1FBQ0gsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUU7S0FDN0M7SUFDRCxJQUFJLEVBQUU7UUFDSixLQUFLLEVBQUUsSUFBSTtRQUNYLFdBQVcsRUFBRSxLQUFLO1FBQ2xCLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFNBQVMsRUFBRSxPQUFPO1FBQ2xCLElBQUksRUFBRSxJQUFJO1FBQ1YsUUFBUSxFQUFFLEtBQUs7UUFDZixTQUFTLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBQy9CLGVBQWUsRUFBRSxLQUFLO1FBQ3RCLEtBQUssRUFBRSxJQUFJO1FBQ1gsS0FBSyxFQUFFLElBQUk7UUFDWCxXQUFXLEVBQUUsR0FBRztRQUNoQixVQUFVLEVBQUUsSUFBSTtRQUNoQixNQUFNLEVBQUUsS0FBSztLQUNkO0lBQ0QsS0FBSyxFQUFFO1FBQ0wsVUFBVSxFQUFFLFFBQVE7UUFDcEIsSUFBSSxFQUFFLElBQUk7UUFDVixLQUFLLEVBQUUsSUFBSTtLQUNaO0lBQ0QsTUFBTSxFQUFFO1FBQ04sVUFBVSxFQUFFLFFBQVE7UUFDcEIsSUFBSSxFQUFFLElBQUk7UUFDVixNQUFNLEVBQUUsSUFBSTtRQUNaLFlBQVksRUFBRSxFQUFFO0tBQ2pCO0lBQ0QsR0FBRyxFQUFFO1FBQ0gsS0FBSyxFQUFFLFFBQVE7UUFDZixPQUFPLEVBQUUsT0FBTztRQUNoQixTQUFTLEVBQUUsS0FBSztLQUNqQjtJQUNELFlBQVksRUFBRSxHQUFHO0lBQ2pCLE9BQU8sRUFBRTtRQUNQLEtBQUssRUFBRSxTQUFTO1FBQ2hCLElBQUksRUFBRSxLQUFLO0tBQ1o7SUFDRCxPQUFPLEVBQUUsQ0FBQztJQUNWLGdCQUFnQixFQUFFLEtBQUs7SUFDdkIsZUFBZSxFQUFFLEtBQUs7SUFDdEIsU0FBUyxFQUFFO1FBQ1QsSUFBSSxFQUFFLFNBQVM7UUFDZixjQUFjLEVBQUUsVUFBVTtLQUMzQjtJQUNELGVBQWUsRUFBRSxFQUFFO0lBQ25CLGtCQUFrQixFQUFFLEdBQUc7SUFDdkIsa0JBQWtCLEVBQUUsR0FBRztJQUN2QixXQUFXLEVBQUUsTUFBTTtJQUNuQixZQUFZLEVBQUUsQ0FBQztDQUNoQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFsYWluU1RDb25maWcgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5cbmV4cG9ydCBjb25zdCBTVF9ERUZVTEFUX0NPTkZJRzogQWxhaW5TVENvbmZpZyA9IHtcbiAgcGk6IDEsXG4gIHBzOiAxMCxcbiAgc2l6ZTogJ2RlZmF1bHQnLFxuICByZXNwb25zaXZlOiB0cnVlLFxuICByZXNwb25zaXZlSGlkZUhlYWRlckZvb3RlcjogZmFsc2UsXG4gIHJlcToge1xuICAgIHR5cGU6ICdwYWdlJyxcbiAgICBtZXRob2Q6ICdHRVQnLFxuICAgIGFsbEluQm9keTogZmFsc2UsXG4gICAgbGF6eUxvYWQ6IGZhbHNlLFxuICAgIHJlTmFtZTogeyBwaTogJ3BpJywgcHM6ICdwcycsIHNraXA6ICdza2lwJywgbGltaXQ6ICdsaW1pdCcgfSxcbiAgfSxcbiAgcmVzOiB7XG4gICAgcmVOYW1lOiB7IGxpc3Q6IFsnbGlzdCddLCB0b3RhbDogWyd0b3RhbCddIH0sXG4gIH0sXG4gIHBhZ2U6IHtcbiAgICBmcm9udDogdHJ1ZSxcbiAgICB6ZXJvSW5kZXhlZDogZmFsc2UsXG4gICAgcG9zaXRpb246ICdib3R0b20nLFxuICAgIHBsYWNlbWVudDogJ3JpZ2h0JyxcbiAgICBzaG93OiB0cnVlLFxuICAgIHNob3dTaXplOiBmYWxzZSxcbiAgICBwYWdlU2l6ZXM6IFsxMCwgMjAsIDMwLCA0MCwgNTBdLFxuICAgIHNob3dRdWlja0p1bXBlcjogZmFsc2UsXG4gICAgdG90YWw6IHRydWUsXG4gICAgdG9Ub3A6IHRydWUsXG4gICAgdG9Ub3BPZmZzZXQ6IDEwMCxcbiAgICBpdGVtUmVuZGVyOiBudWxsLFxuICAgIHNpbXBsZTogZmFsc2UsXG4gIH0sXG4gIG1vZGFsOiB7XG4gICAgcGFyYW1zTmFtZTogJ3JlY29yZCcsXG4gICAgc2l6ZTogJ2xnJyxcbiAgICBleGFjdDogdHJ1ZSxcbiAgfSxcbiAgZHJhd2VyOiB7XG4gICAgcGFyYW1zTmFtZTogJ3JlY29yZCcsXG4gICAgc2l6ZTogJ21kJyxcbiAgICBmb290ZXI6IHRydWUsXG4gICAgZm9vdGVySGVpZ2h0OiA1NSxcbiAgfSxcbiAgcG9wOiB7XG4gICAgdGl0bGU6ICfnoa7orqTliKDpmaTlkJfvvJ8nLFxuICAgIHRyaWdnZXI6ICdjbGljaycsXG4gICAgcGxhY2VtZW50OiAndG9wJyxcbiAgfSxcbiAgcm93Q2xpY2tUaW1lOiAyMDAsXG4gIGJ0bkljb246IHtcbiAgICB0aGVtZTogJ291dGxpbmUnLFxuICAgIHNwaW46IGZhbHNlLFxuICB9LFxuICBub0luZGV4OiAxLFxuICBleHBhbmRSb3dCeUNsaWNrOiBmYWxzZSxcbiAgZXhwYW5kQWNjb3JkaW9uOiBmYWxzZSxcbiAgd2lkdGhNb2RlOiB7XG4gICAgdHlwZTogJ2RlZmF1bHQnLFxuICAgIHN0cmljdEJlaGF2aW9yOiAndHJ1bmNhdGUnLFxuICB9LFxuICB2aXJ0dWFsSXRlbVNpemU6IDU0LFxuICB2aXJ0dWFsTWF4QnVmZmVyUHg6IDIwMCxcbiAgdmlydHVhbE1pbkJ1ZmZlclB4OiAxMDAsXG4gIGlpZkJlaGF2aW9yOiAnaGlkZScsXG4gIGxvYWRpbmdEZWxheTogMCxcbn07XG4iXX0=