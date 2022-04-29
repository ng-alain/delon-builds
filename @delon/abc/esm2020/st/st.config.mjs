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
        reName: { pi: 'pi', ps: 'ps', skip: 'skip', limit: 'limit' }
    },
    res: {
        reName: { list: ['list'], total: ['total'] }
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
        simple: false
    },
    modal: {
        paramsName: 'record',
        size: 'lg',
        exact: true
    },
    drawer: {
        paramsName: 'record',
        size: 'md',
        footer: true,
        footerHeight: 55
    },
    pop: {
        title: '确认删除吗？',
        trigger: 'click',
        placement: 'top'
    },
    btnIcon: {
        theme: 'outline',
        spin: false
    },
    noIndex: 1,
    expandRowByClick: false,
    expandAccordion: false,
    widthMode: {
        type: 'default',
        strictBehavior: 'truncate'
    },
    virtualItemSize: 54,
    virtualMaxBufferPx: 200,
    virtualMinBufferPx: 100,
    iifBehavior: 'hide',
    loadingDelay: 0,
    safeType: 'safeHtml',
    date: {
        format: `yyyy-MM-dd HH:mm`
    },
    yn: {
        truth: true,
        yes: '是',
        mode: 'icon'
    },
    maxMultipleButton: {
        text: '更多',
        count: 2
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QuY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL3N0L3N0LmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxNQUFNLENBQUMsTUFBTSxpQkFBaUIsR0FBa0I7SUFDOUMsRUFBRSxFQUFFLENBQUM7SUFDTCxFQUFFLEVBQUUsRUFBRTtJQUNOLElBQUksRUFBRSxTQUFTO0lBQ2YsVUFBVSxFQUFFLElBQUk7SUFDaEIsMEJBQTBCLEVBQUUsS0FBSztJQUNqQyxHQUFHLEVBQUU7UUFDSCxJQUFJLEVBQUUsTUFBTTtRQUNaLE1BQU0sRUFBRSxLQUFLO1FBQ2IsU0FBUyxFQUFFLEtBQUs7UUFDaEIsUUFBUSxFQUFFLEtBQUs7UUFDZixNQUFNLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFO0tBQzdEO0lBQ0QsR0FBRyxFQUFFO1FBQ0gsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUU7S0FDN0M7SUFDRCxJQUFJLEVBQUU7UUFDSixLQUFLLEVBQUUsSUFBSTtRQUNYLFdBQVcsRUFBRSxLQUFLO1FBQ2xCLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFNBQVMsRUFBRSxPQUFPO1FBQ2xCLElBQUksRUFBRSxJQUFJO1FBQ1YsUUFBUSxFQUFFLEtBQUs7UUFDZixTQUFTLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBQy9CLGVBQWUsRUFBRSxLQUFLO1FBQ3RCLEtBQUssRUFBRSxJQUFJO1FBQ1gsS0FBSyxFQUFFLElBQUk7UUFDWCxXQUFXLEVBQUUsR0FBRztRQUNoQixVQUFVLEVBQUUsSUFBSTtRQUNoQixNQUFNLEVBQUUsS0FBSztLQUNkO0lBQ0QsS0FBSyxFQUFFO1FBQ0wsVUFBVSxFQUFFLFFBQVE7UUFDcEIsSUFBSSxFQUFFLElBQUk7UUFDVixLQUFLLEVBQUUsSUFBSTtLQUNaO0lBQ0QsTUFBTSxFQUFFO1FBQ04sVUFBVSxFQUFFLFFBQVE7UUFDcEIsSUFBSSxFQUFFLElBQUk7UUFDVixNQUFNLEVBQUUsSUFBSTtRQUNaLFlBQVksRUFBRSxFQUFFO0tBQ2pCO0lBQ0QsR0FBRyxFQUFFO1FBQ0gsS0FBSyxFQUFFLFFBQVE7UUFDZixPQUFPLEVBQUUsT0FBTztRQUNoQixTQUFTLEVBQUUsS0FBSztLQUNqQjtJQUNELE9BQU8sRUFBRTtRQUNQLEtBQUssRUFBRSxTQUFTO1FBQ2hCLElBQUksRUFBRSxLQUFLO0tBQ1o7SUFDRCxPQUFPLEVBQUUsQ0FBQztJQUNWLGdCQUFnQixFQUFFLEtBQUs7SUFDdkIsZUFBZSxFQUFFLEtBQUs7SUFDdEIsU0FBUyxFQUFFO1FBQ1QsSUFBSSxFQUFFLFNBQVM7UUFDZixjQUFjLEVBQUUsVUFBVTtLQUMzQjtJQUNELGVBQWUsRUFBRSxFQUFFO0lBQ25CLGtCQUFrQixFQUFFLEdBQUc7SUFDdkIsa0JBQWtCLEVBQUUsR0FBRztJQUN2QixXQUFXLEVBQUUsTUFBTTtJQUNuQixZQUFZLEVBQUUsQ0FBQztJQUNmLFFBQVEsRUFBRSxVQUFVO0lBQ3BCLElBQUksRUFBRTtRQUNKLE1BQU0sRUFBRSxrQkFBa0I7S0FDM0I7SUFDRCxFQUFFLEVBQUU7UUFDRixLQUFLLEVBQUUsSUFBSTtRQUNYLEdBQUcsRUFBRSxHQUFHO1FBQ1IsSUFBSSxFQUFFLE1BQU07S0FDYjtJQUNELGlCQUFpQixFQUFFO1FBQ2pCLElBQUksRUFBRSxJQUFJO1FBQ1YsS0FBSyxFQUFFLENBQUM7S0FDVDtDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBbGFpblNUQ29uZmlnIH0gZnJvbSAnQGRlbG9uL3V0aWwvY29uZmlnJztcblxuZXhwb3J0IGNvbnN0IFNUX0RFRkFVTFRfQ09ORklHOiBBbGFpblNUQ29uZmlnID0ge1xuICBwaTogMSxcbiAgcHM6IDEwLFxuICBzaXplOiAnZGVmYXVsdCcsXG4gIHJlc3BvbnNpdmU6IHRydWUsXG4gIHJlc3BvbnNpdmVIaWRlSGVhZGVyRm9vdGVyOiBmYWxzZSxcbiAgcmVxOiB7XG4gICAgdHlwZTogJ3BhZ2UnLFxuICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgYWxsSW5Cb2R5OiBmYWxzZSxcbiAgICBsYXp5TG9hZDogZmFsc2UsXG4gICAgcmVOYW1lOiB7IHBpOiAncGknLCBwczogJ3BzJywgc2tpcDogJ3NraXAnLCBsaW1pdDogJ2xpbWl0JyB9XG4gIH0sXG4gIHJlczoge1xuICAgIHJlTmFtZTogeyBsaXN0OiBbJ2xpc3QnXSwgdG90YWw6IFsndG90YWwnXSB9XG4gIH0sXG4gIHBhZ2U6IHtcbiAgICBmcm9udDogdHJ1ZSxcbiAgICB6ZXJvSW5kZXhlZDogZmFsc2UsXG4gICAgcG9zaXRpb246ICdib3R0b20nLFxuICAgIHBsYWNlbWVudDogJ3JpZ2h0JyxcbiAgICBzaG93OiB0cnVlLFxuICAgIHNob3dTaXplOiBmYWxzZSxcbiAgICBwYWdlU2l6ZXM6IFsxMCwgMjAsIDMwLCA0MCwgNTBdLFxuICAgIHNob3dRdWlja0p1bXBlcjogZmFsc2UsXG4gICAgdG90YWw6IHRydWUsXG4gICAgdG9Ub3A6IHRydWUsXG4gICAgdG9Ub3BPZmZzZXQ6IDEwMCxcbiAgICBpdGVtUmVuZGVyOiBudWxsLFxuICAgIHNpbXBsZTogZmFsc2VcbiAgfSxcbiAgbW9kYWw6IHtcbiAgICBwYXJhbXNOYW1lOiAncmVjb3JkJyxcbiAgICBzaXplOiAnbGcnLFxuICAgIGV4YWN0OiB0cnVlXG4gIH0sXG4gIGRyYXdlcjoge1xuICAgIHBhcmFtc05hbWU6ICdyZWNvcmQnLFxuICAgIHNpemU6ICdtZCcsXG4gICAgZm9vdGVyOiB0cnVlLFxuICAgIGZvb3RlckhlaWdodDogNTVcbiAgfSxcbiAgcG9wOiB7XG4gICAgdGl0bGU6ICfnoa7orqTliKDpmaTlkJfvvJ8nLFxuICAgIHRyaWdnZXI6ICdjbGljaycsXG4gICAgcGxhY2VtZW50OiAndG9wJ1xuICB9LFxuICBidG5JY29uOiB7XG4gICAgdGhlbWU6ICdvdXRsaW5lJyxcbiAgICBzcGluOiBmYWxzZVxuICB9LFxuICBub0luZGV4OiAxLFxuICBleHBhbmRSb3dCeUNsaWNrOiBmYWxzZSxcbiAgZXhwYW5kQWNjb3JkaW9uOiBmYWxzZSxcbiAgd2lkdGhNb2RlOiB7XG4gICAgdHlwZTogJ2RlZmF1bHQnLFxuICAgIHN0cmljdEJlaGF2aW9yOiAndHJ1bmNhdGUnXG4gIH0sXG4gIHZpcnR1YWxJdGVtU2l6ZTogNTQsXG4gIHZpcnR1YWxNYXhCdWZmZXJQeDogMjAwLFxuICB2aXJ0dWFsTWluQnVmZmVyUHg6IDEwMCxcbiAgaWlmQmVoYXZpb3I6ICdoaWRlJyxcbiAgbG9hZGluZ0RlbGF5OiAwLFxuICBzYWZlVHlwZTogJ3NhZmVIdG1sJyxcbiAgZGF0ZToge1xuICAgIGZvcm1hdDogYHl5eXktTU0tZGQgSEg6bW1gXG4gIH0sXG4gIHluOiB7XG4gICAgdHJ1dGg6IHRydWUsXG4gICAgeWVzOiAn5pivJyxcbiAgICBtb2RlOiAnaWNvbidcbiAgfSxcbiAgbWF4TXVsdGlwbGVCdXR0b246IHtcbiAgICB0ZXh0OiAn5pu05aSaJyxcbiAgICBjb3VudDogMlxuICB9XG59O1xuIl19