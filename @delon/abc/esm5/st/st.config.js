/**
 * @fileoverview added by tsickle
 * Generated from: st.config.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export var ST_DEFULAT_CONFIG = {
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
        type: '',
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
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QuY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9zdC8iLCJzb3VyY2VzIjpbInN0LmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFFQSxNQUFNLEtBQU8saUJBQWlCLEdBQWtCO0lBQzlDLEVBQUUsRUFBRSxDQUFDO0lBQ0wsRUFBRSxFQUFFLEVBQUU7SUFDTixJQUFJLEVBQUUsU0FBUztJQUNmLFVBQVUsRUFBRSxJQUFJO0lBQ2hCLDBCQUEwQixFQUFFLEtBQUs7SUFDakMsR0FBRyxFQUFFO1FBQ0gsSUFBSSxFQUFFLE1BQU07UUFDWixNQUFNLEVBQUUsS0FBSztRQUNiLFNBQVMsRUFBRSxLQUFLO1FBQ2hCLFFBQVEsRUFBRSxLQUFLO1FBQ2YsTUFBTSxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRTtLQUM3RDtJQUNELEdBQUcsRUFBRTtRQUNILE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFO0tBQzdDO0lBQ0QsSUFBSSxFQUFFO1FBQ0osS0FBSyxFQUFFLElBQUk7UUFDWCxXQUFXLEVBQUUsS0FBSztRQUNsQixRQUFRLEVBQUUsUUFBUTtRQUNsQixTQUFTLEVBQUUsT0FBTztRQUNsQixJQUFJLEVBQUUsSUFBSTtRQUNWLFFBQVEsRUFBRSxLQUFLO1FBQ2YsU0FBUyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUMvQixlQUFlLEVBQUUsS0FBSztRQUN0QixLQUFLLEVBQUUsSUFBSTtRQUNYLEtBQUssRUFBRSxJQUFJO1FBQ1gsV0FBVyxFQUFFLEdBQUc7S0FDakI7SUFDRCxLQUFLLEVBQUU7UUFDTCxVQUFVLEVBQUUsUUFBUTtRQUNwQixJQUFJLEVBQUUsSUFBSTtRQUNWLEtBQUssRUFBRSxJQUFJO0tBQ1o7SUFDRCxNQUFNLEVBQUU7UUFDTixVQUFVLEVBQUUsUUFBUTtRQUNwQixJQUFJLEVBQUUsSUFBSTtRQUNWLE1BQU0sRUFBRSxJQUFJO1FBQ1osWUFBWSxFQUFFLEVBQUU7S0FDakI7SUFDRCxHQUFHLEVBQUU7UUFDSCxLQUFLLEVBQUUsUUFBUTtRQUNmLE9BQU8sRUFBRSxPQUFPO1FBQ2hCLFNBQVMsRUFBRSxLQUFLO0tBQ2pCO0lBQ0QsWUFBWSxFQUFFLEdBQUc7SUFDakIsT0FBTyxFQUFFO1FBQ1AsSUFBSSxFQUFFLEVBQUU7UUFDUixLQUFLLEVBQUUsU0FBUztRQUNoQixJQUFJLEVBQUUsS0FBSztLQUNaO0lBQ0QsT0FBTyxFQUFFLENBQUM7SUFDVixnQkFBZ0IsRUFBRSxLQUFLO0lBQ3ZCLGVBQWUsRUFBRSxLQUFLO0lBQ3RCLFNBQVMsRUFBRTtRQUNULElBQUksRUFBRSxTQUFTO1FBQ2YsY0FBYyxFQUFFLFVBQVU7S0FDM0I7SUFDRCxlQUFlLEVBQUUsRUFBRTtJQUNuQixrQkFBa0IsRUFBRSxHQUFHO0lBQ3ZCLGtCQUFrQixFQUFFLEdBQUc7SUFDdkIsV0FBVyxFQUFFLE1BQU07Q0FDcEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBbGFpblNUQ29uZmlnIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuXG5leHBvcnQgY29uc3QgU1RfREVGVUxBVF9DT05GSUc6IEFsYWluU1RDb25maWcgPSB7XG4gIHBpOiAxLFxuICBwczogMTAsXG4gIHNpemU6ICdkZWZhdWx0JyxcbiAgcmVzcG9uc2l2ZTogdHJ1ZSxcbiAgcmVzcG9uc2l2ZUhpZGVIZWFkZXJGb290ZXI6IGZhbHNlLFxuICByZXE6IHtcbiAgICB0eXBlOiAncGFnZScsXG4gICAgbWV0aG9kOiAnR0VUJyxcbiAgICBhbGxJbkJvZHk6IGZhbHNlLFxuICAgIGxhenlMb2FkOiBmYWxzZSxcbiAgICByZU5hbWU6IHsgcGk6ICdwaScsIHBzOiAncHMnLCBza2lwOiAnc2tpcCcsIGxpbWl0OiAnbGltaXQnIH0sXG4gIH0sXG4gIHJlczoge1xuICAgIHJlTmFtZTogeyBsaXN0OiBbJ2xpc3QnXSwgdG90YWw6IFsndG90YWwnXSB9LFxuICB9LFxuICBwYWdlOiB7XG4gICAgZnJvbnQ6IHRydWUsXG4gICAgemVyb0luZGV4ZWQ6IGZhbHNlLFxuICAgIHBvc2l0aW9uOiAnYm90dG9tJyxcbiAgICBwbGFjZW1lbnQ6ICdyaWdodCcsXG4gICAgc2hvdzogdHJ1ZSxcbiAgICBzaG93U2l6ZTogZmFsc2UsXG4gICAgcGFnZVNpemVzOiBbMTAsIDIwLCAzMCwgNDAsIDUwXSxcbiAgICBzaG93UXVpY2tKdW1wZXI6IGZhbHNlLFxuICAgIHRvdGFsOiB0cnVlLFxuICAgIHRvVG9wOiB0cnVlLFxuICAgIHRvVG9wT2Zmc2V0OiAxMDAsXG4gIH0sXG4gIG1vZGFsOiB7XG4gICAgcGFyYW1zTmFtZTogJ3JlY29yZCcsXG4gICAgc2l6ZTogJ2xnJyxcbiAgICBleGFjdDogdHJ1ZSxcbiAgfSxcbiAgZHJhd2VyOiB7XG4gICAgcGFyYW1zTmFtZTogJ3JlY29yZCcsXG4gICAgc2l6ZTogJ21kJyxcbiAgICBmb290ZXI6IHRydWUsXG4gICAgZm9vdGVySGVpZ2h0OiA1NSxcbiAgfSxcbiAgcG9wOiB7XG4gICAgdGl0bGU6ICfnoa7orqTliKDpmaTlkJfvvJ8nLFxuICAgIHRyaWdnZXI6ICdjbGljaycsXG4gICAgcGxhY2VtZW50OiAndG9wJyxcbiAgfSxcbiAgcm93Q2xpY2tUaW1lOiAyMDAsXG4gIGJ0bkljb246IHtcbiAgICB0eXBlOiAnJyxcbiAgICB0aGVtZTogJ291dGxpbmUnLFxuICAgIHNwaW46IGZhbHNlLFxuICB9LFxuICBub0luZGV4OiAxLFxuICBleHBhbmRSb3dCeUNsaWNrOiBmYWxzZSxcbiAgZXhwYW5kQWNjb3JkaW9uOiBmYWxzZSxcbiAgd2lkdGhNb2RlOiB7XG4gICAgdHlwZTogJ2RlZmF1bHQnLFxuICAgIHN0cmljdEJlaGF2aW9yOiAndHJ1bmNhdGUnLFxuICB9LFxuICB2aXJ0dWFsSXRlbVNpemU6IDU0LFxuICB2aXJ0dWFsTWF4QnVmZmVyUHg6IDIwMCxcbiAgdmlydHVhbE1pbkJ1ZmZlclB4OiAxMDAsXG4gIGlpZkJlaGF2aW9yOiAnaGlkZScsXG59O1xuIl19