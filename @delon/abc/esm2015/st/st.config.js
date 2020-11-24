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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QuY29uZmlnLmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9zdC8iLCJzb3VyY2VzIjpbInN0LmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFFQSxNQUFNLE9BQU8saUJBQWlCLEdBQWtCO0lBQzlDLEVBQUUsRUFBRSxDQUFDO0lBQ0wsRUFBRSxFQUFFLEVBQUU7SUFDTixJQUFJLEVBQUUsU0FBUztJQUNmLFVBQVUsRUFBRSxJQUFJO0lBQ2hCLDBCQUEwQixFQUFFLEtBQUs7SUFDakMsR0FBRyxFQUFFO1FBQ0gsSUFBSSxFQUFFLE1BQU07UUFDWixNQUFNLEVBQUUsS0FBSztRQUNiLFNBQVMsRUFBRSxLQUFLO1FBQ2hCLFFBQVEsRUFBRSxLQUFLO1FBQ2YsTUFBTSxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRTtLQUM3RDtJQUNELEdBQUcsRUFBRTtRQUNILE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFO0tBQzdDO0lBQ0QsSUFBSSxFQUFFO1FBQ0osS0FBSyxFQUFFLElBQUk7UUFDWCxXQUFXLEVBQUUsS0FBSztRQUNsQixRQUFRLEVBQUUsUUFBUTtRQUNsQixTQUFTLEVBQUUsT0FBTztRQUNsQixJQUFJLEVBQUUsSUFBSTtRQUNWLFFBQVEsRUFBRSxLQUFLO1FBQ2YsU0FBUyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUMvQixlQUFlLEVBQUUsS0FBSztRQUN0QixLQUFLLEVBQUUsSUFBSTtRQUNYLEtBQUssRUFBRSxJQUFJO1FBQ1gsV0FBVyxFQUFFLEdBQUc7UUFDaEIsVUFBVSxFQUFFLElBQUk7UUFDaEIsTUFBTSxFQUFFLEtBQUs7S0FDZDtJQUNELEtBQUssRUFBRTtRQUNMLFVBQVUsRUFBRSxRQUFRO1FBQ3BCLElBQUksRUFBRSxJQUFJO1FBQ1YsS0FBSyxFQUFFLElBQUk7S0FDWjtJQUNELE1BQU0sRUFBRTtRQUNOLFVBQVUsRUFBRSxRQUFRO1FBQ3BCLElBQUksRUFBRSxJQUFJO1FBQ1YsTUFBTSxFQUFFLElBQUk7UUFDWixZQUFZLEVBQUUsRUFBRTtLQUNqQjtJQUNELEdBQUcsRUFBRTtRQUNILEtBQUssRUFBRSxRQUFRO1FBQ2YsT0FBTyxFQUFFLE9BQU87UUFDaEIsU0FBUyxFQUFFLEtBQUs7S0FDakI7SUFDRCxZQUFZLEVBQUUsR0FBRztJQUNqQixPQUFPLEVBQUU7UUFDUCxLQUFLLEVBQUUsU0FBUztRQUNoQixJQUFJLEVBQUUsS0FBSztLQUNaO0lBQ0QsT0FBTyxFQUFFLENBQUM7SUFDVixnQkFBZ0IsRUFBRSxLQUFLO0lBQ3ZCLGVBQWUsRUFBRSxLQUFLO0lBQ3RCLFNBQVMsRUFBRTtRQUNULElBQUksRUFBRSxTQUFTO1FBQ2YsY0FBYyxFQUFFLFVBQVU7S0FDM0I7SUFDRCxlQUFlLEVBQUUsRUFBRTtJQUNuQixrQkFBa0IsRUFBRSxHQUFHO0lBQ3ZCLGtCQUFrQixFQUFFLEdBQUc7SUFDdkIsV0FBVyxFQUFFLE1BQU07SUFDbkIsWUFBWSxFQUFFLENBQUM7Q0FDaEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBbGFpblNUQ29uZmlnIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuXG5leHBvcnQgY29uc3QgU1RfREVGVUxBVF9DT05GSUc6IEFsYWluU1RDb25maWcgPSB7XG4gIHBpOiAxLFxuICBwczogMTAsXG4gIHNpemU6ICdkZWZhdWx0JyxcbiAgcmVzcG9uc2l2ZTogdHJ1ZSxcbiAgcmVzcG9uc2l2ZUhpZGVIZWFkZXJGb290ZXI6IGZhbHNlLFxuICByZXE6IHtcbiAgICB0eXBlOiAncGFnZScsXG4gICAgbWV0aG9kOiAnR0VUJyxcbiAgICBhbGxJbkJvZHk6IGZhbHNlLFxuICAgIGxhenlMb2FkOiBmYWxzZSxcbiAgICByZU5hbWU6IHsgcGk6ICdwaScsIHBzOiAncHMnLCBza2lwOiAnc2tpcCcsIGxpbWl0OiAnbGltaXQnIH0sXG4gIH0sXG4gIHJlczoge1xuICAgIHJlTmFtZTogeyBsaXN0OiBbJ2xpc3QnXSwgdG90YWw6IFsndG90YWwnXSB9LFxuICB9LFxuICBwYWdlOiB7XG4gICAgZnJvbnQ6IHRydWUsXG4gICAgemVyb0luZGV4ZWQ6IGZhbHNlLFxuICAgIHBvc2l0aW9uOiAnYm90dG9tJyxcbiAgICBwbGFjZW1lbnQ6ICdyaWdodCcsXG4gICAgc2hvdzogdHJ1ZSxcbiAgICBzaG93U2l6ZTogZmFsc2UsXG4gICAgcGFnZVNpemVzOiBbMTAsIDIwLCAzMCwgNDAsIDUwXSxcbiAgICBzaG93UXVpY2tKdW1wZXI6IGZhbHNlLFxuICAgIHRvdGFsOiB0cnVlLFxuICAgIHRvVG9wOiB0cnVlLFxuICAgIHRvVG9wT2Zmc2V0OiAxMDAsXG4gICAgaXRlbVJlbmRlcjogbnVsbCxcbiAgICBzaW1wbGU6IGZhbHNlLFxuICB9LFxuICBtb2RhbDoge1xuICAgIHBhcmFtc05hbWU6ICdyZWNvcmQnLFxuICAgIHNpemU6ICdsZycsXG4gICAgZXhhY3Q6IHRydWUsXG4gIH0sXG4gIGRyYXdlcjoge1xuICAgIHBhcmFtc05hbWU6ICdyZWNvcmQnLFxuICAgIHNpemU6ICdtZCcsXG4gICAgZm9vdGVyOiB0cnVlLFxuICAgIGZvb3RlckhlaWdodDogNTUsXG4gIH0sXG4gIHBvcDoge1xuICAgIHRpdGxlOiAn56Gu6K6k5Yig6Zmk5ZCX77yfJyxcbiAgICB0cmlnZ2VyOiAnY2xpY2snLFxuICAgIHBsYWNlbWVudDogJ3RvcCcsXG4gIH0sXG4gIHJvd0NsaWNrVGltZTogMjAwLFxuICBidG5JY29uOiB7XG4gICAgdGhlbWU6ICdvdXRsaW5lJyxcbiAgICBzcGluOiBmYWxzZSxcbiAgfSxcbiAgbm9JbmRleDogMSxcbiAgZXhwYW5kUm93QnlDbGljazogZmFsc2UsXG4gIGV4cGFuZEFjY29yZGlvbjogZmFsc2UsXG4gIHdpZHRoTW9kZToge1xuICAgIHR5cGU6ICdkZWZhdWx0JyxcbiAgICBzdHJpY3RCZWhhdmlvcjogJ3RydW5jYXRlJyxcbiAgfSxcbiAgdmlydHVhbEl0ZW1TaXplOiA1NCxcbiAgdmlydHVhbE1heEJ1ZmZlclB4OiAyMDAsXG4gIHZpcnR1YWxNaW5CdWZmZXJQeDogMTAwLFxuICBpaWZCZWhhdmlvcjogJ2hpZGUnLFxuICBsb2FkaW5nRGVsYXk6IDAsXG59O1xuIl19