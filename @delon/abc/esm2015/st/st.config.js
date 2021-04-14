export const ST_DEFAULT_CONFIG = {
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
    saftHtml: true,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QuY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL3N0L3N0LmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxNQUFNLENBQUMsTUFBTSxpQkFBaUIsR0FBa0I7SUFDOUMsRUFBRSxFQUFFLENBQUM7SUFDTCxFQUFFLEVBQUUsRUFBRTtJQUNOLElBQUksRUFBRSxTQUFTO0lBQ2YsVUFBVSxFQUFFLElBQUk7SUFDaEIsMEJBQTBCLEVBQUUsS0FBSztJQUNqQyxHQUFHLEVBQUU7UUFDSCxJQUFJLEVBQUUsTUFBTTtRQUNaLE1BQU0sRUFBRSxLQUFLO1FBQ2IsU0FBUyxFQUFFLEtBQUs7UUFDaEIsUUFBUSxFQUFFLEtBQUs7UUFDZixNQUFNLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFO0tBQzdEO0lBQ0QsR0FBRyxFQUFFO1FBQ0gsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUU7S0FDN0M7SUFDRCxJQUFJLEVBQUU7UUFDSixLQUFLLEVBQUUsSUFBSTtRQUNYLFdBQVcsRUFBRSxLQUFLO1FBQ2xCLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFNBQVMsRUFBRSxPQUFPO1FBQ2xCLElBQUksRUFBRSxJQUFJO1FBQ1YsUUFBUSxFQUFFLEtBQUs7UUFDZixTQUFTLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBQy9CLGVBQWUsRUFBRSxLQUFLO1FBQ3RCLEtBQUssRUFBRSxJQUFJO1FBQ1gsS0FBSyxFQUFFLElBQUk7UUFDWCxXQUFXLEVBQUUsR0FBRztRQUNoQixVQUFVLEVBQUUsSUFBSTtRQUNoQixNQUFNLEVBQUUsS0FBSztLQUNkO0lBQ0QsS0FBSyxFQUFFO1FBQ0wsVUFBVSxFQUFFLFFBQVE7UUFDcEIsSUFBSSxFQUFFLElBQUk7UUFDVixLQUFLLEVBQUUsSUFBSTtLQUNaO0lBQ0QsTUFBTSxFQUFFO1FBQ04sVUFBVSxFQUFFLFFBQVE7UUFDcEIsSUFBSSxFQUFFLElBQUk7UUFDVixNQUFNLEVBQUUsSUFBSTtRQUNaLFlBQVksRUFBRSxFQUFFO0tBQ2pCO0lBQ0QsR0FBRyxFQUFFO1FBQ0gsS0FBSyxFQUFFLFFBQVE7UUFDZixPQUFPLEVBQUUsT0FBTztRQUNoQixTQUFTLEVBQUUsS0FBSztLQUNqQjtJQUNELFlBQVksRUFBRSxHQUFHO0lBQ2pCLE9BQU8sRUFBRTtRQUNQLEtBQUssRUFBRSxTQUFTO1FBQ2hCLElBQUksRUFBRSxLQUFLO0tBQ1o7SUFDRCxPQUFPLEVBQUUsQ0FBQztJQUNWLGdCQUFnQixFQUFFLEtBQUs7SUFDdkIsZUFBZSxFQUFFLEtBQUs7SUFDdEIsU0FBUyxFQUFFO1FBQ1QsSUFBSSxFQUFFLFNBQVM7UUFDZixjQUFjLEVBQUUsVUFBVTtLQUMzQjtJQUNELGVBQWUsRUFBRSxFQUFFO0lBQ25CLGtCQUFrQixFQUFFLEdBQUc7SUFDdkIsa0JBQWtCLEVBQUUsR0FBRztJQUN2QixXQUFXLEVBQUUsTUFBTTtJQUNuQixZQUFZLEVBQUUsQ0FBQztJQUNmLFFBQVEsRUFBRSxJQUFJO0NBQ2YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFsYWluU1RDb25maWcgfSBmcm9tICdAZGVsb24vdXRpbC9jb25maWcnO1xuXG5leHBvcnQgY29uc3QgU1RfREVGQVVMVF9DT05GSUc6IEFsYWluU1RDb25maWcgPSB7XG4gIHBpOiAxLFxuICBwczogMTAsXG4gIHNpemU6ICdkZWZhdWx0JyxcbiAgcmVzcG9uc2l2ZTogdHJ1ZSxcbiAgcmVzcG9uc2l2ZUhpZGVIZWFkZXJGb290ZXI6IGZhbHNlLFxuICByZXE6IHtcbiAgICB0eXBlOiAncGFnZScsXG4gICAgbWV0aG9kOiAnR0VUJyxcbiAgICBhbGxJbkJvZHk6IGZhbHNlLFxuICAgIGxhenlMb2FkOiBmYWxzZSxcbiAgICByZU5hbWU6IHsgcGk6ICdwaScsIHBzOiAncHMnLCBza2lwOiAnc2tpcCcsIGxpbWl0OiAnbGltaXQnIH0sXG4gIH0sXG4gIHJlczoge1xuICAgIHJlTmFtZTogeyBsaXN0OiBbJ2xpc3QnXSwgdG90YWw6IFsndG90YWwnXSB9LFxuICB9LFxuICBwYWdlOiB7XG4gICAgZnJvbnQ6IHRydWUsXG4gICAgemVyb0luZGV4ZWQ6IGZhbHNlLFxuICAgIHBvc2l0aW9uOiAnYm90dG9tJyxcbiAgICBwbGFjZW1lbnQ6ICdyaWdodCcsXG4gICAgc2hvdzogdHJ1ZSxcbiAgICBzaG93U2l6ZTogZmFsc2UsXG4gICAgcGFnZVNpemVzOiBbMTAsIDIwLCAzMCwgNDAsIDUwXSxcbiAgICBzaG93UXVpY2tKdW1wZXI6IGZhbHNlLFxuICAgIHRvdGFsOiB0cnVlLFxuICAgIHRvVG9wOiB0cnVlLFxuICAgIHRvVG9wT2Zmc2V0OiAxMDAsXG4gICAgaXRlbVJlbmRlcjogbnVsbCxcbiAgICBzaW1wbGU6IGZhbHNlLFxuICB9LFxuICBtb2RhbDoge1xuICAgIHBhcmFtc05hbWU6ICdyZWNvcmQnLFxuICAgIHNpemU6ICdsZycsXG4gICAgZXhhY3Q6IHRydWUsXG4gIH0sXG4gIGRyYXdlcjoge1xuICAgIHBhcmFtc05hbWU6ICdyZWNvcmQnLFxuICAgIHNpemU6ICdtZCcsXG4gICAgZm9vdGVyOiB0cnVlLFxuICAgIGZvb3RlckhlaWdodDogNTUsXG4gIH0sXG4gIHBvcDoge1xuICAgIHRpdGxlOiAn56Gu6K6k5Yig6Zmk5ZCX77yfJyxcbiAgICB0cmlnZ2VyOiAnY2xpY2snLFxuICAgIHBsYWNlbWVudDogJ3RvcCcsXG4gIH0sXG4gIHJvd0NsaWNrVGltZTogMjAwLFxuICBidG5JY29uOiB7XG4gICAgdGhlbWU6ICdvdXRsaW5lJyxcbiAgICBzcGluOiBmYWxzZSxcbiAgfSxcbiAgbm9JbmRleDogMSxcbiAgZXhwYW5kUm93QnlDbGljazogZmFsc2UsXG4gIGV4cGFuZEFjY29yZGlvbjogZmFsc2UsXG4gIHdpZHRoTW9kZToge1xuICAgIHR5cGU6ICdkZWZhdWx0JyxcbiAgICBzdHJpY3RCZWhhdmlvcjogJ3RydW5jYXRlJyxcbiAgfSxcbiAgdmlydHVhbEl0ZW1TaXplOiA1NCxcbiAgdmlydHVhbE1heEJ1ZmZlclB4OiAyMDAsXG4gIHZpcnR1YWxNaW5CdWZmZXJQeDogMTAwLFxuICBpaWZCZWhhdmlvcjogJ2hpZGUnLFxuICBsb2FkaW5nRGVsYXk6IDAsXG4gIHNhZnRIdG1sOiB0cnVlLFxufTtcbiJdfQ==