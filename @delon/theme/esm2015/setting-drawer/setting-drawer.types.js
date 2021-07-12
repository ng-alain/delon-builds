export const ALAINDEFAULTVAR = 'alain-default-vars';
export const DEFAULT_COLORS = [
    {
        key: 'dust',
        color: '#F5222D'
    },
    {
        key: 'volcano',
        color: '#FA541C'
    },
    {
        key: 'sunset',
        color: '#FAAD14'
    },
    {
        key: 'cyan',
        color: '#13C2C2'
    },
    {
        key: 'green',
        color: '#52C41A'
    },
    {
        key: 'daybreak',
        color: '#1890ff'
    },
    {
        key: 'geekblue',
        color: '#2F54EB'
    },
    {
        key: 'purple',
        color: '#722ED1'
    },
    {
        key: 'black',
        color: '#001529'
    }
];
export const DEFAULT_VARS = {
    'primary-color': { label: '主颜色', type: 'color', default: '#1890ff' },
    'alain-default-header-hg': {
        label: '高',
        type: 'px',
        default: '64px',
        max: 300,
        min: 24
    },
    'alain-default-header-bg': {
        label: '背景色',
        type: 'color',
        default: '@primary-color',
        tip: '默认同主色系'
    },
    'alain-default-header-padding': {
        label: '顶部左右内边距',
        type: 'px',
        default: '16px'
    },
    // 侧边栏
    'alain-default-aside-wd': { label: '宽度', type: 'px', default: '200px' },
    'alain-default-aside-bg': {
        label: '背景',
        type: 'color',
        default: '#ffffff'
    },
    'alain-default-aside-collapsed-wd': {
        label: '收缩宽度',
        type: 'px',
        default: '64px'
    },
    'alain-default-aside-nav-padding-top-bottom': {
        label: '项上下内边距',
        type: 'px',
        default: '8px',
        step: 8
    },
    // 主菜单
    'alain-default-aside-nav-fs': {
        label: '菜单字号',
        type: 'px',
        default: '14px',
        min: 14,
        max: 30
    },
    'alain-default-aside-collapsed-nav-fs': {
        label: '收缩菜单字号',
        type: 'px',
        default: '24px',
        min: 24,
        max: 32
    },
    'alain-default-aside-nav-item-height': {
        label: '菜单项高度',
        type: 'px',
        default: '38px',
        min: 24,
        max: 64
    },
    'alain-default-aside-nav-text-color': {
        label: '菜单文本颜色',
        type: 'color',
        default: 'rgba(0, 0, 0, 0.65)',
        rgba: true
    },
    'alain-default-aside-nav-text-hover-color': {
        label: '菜单文本悬停颜色',
        type: 'color',
        default: '@primary-color',
        tip: '默认同主色系'
    },
    'alain-default-aside-nav-group-text-color': {
        label: '菜单分组文本颜色',
        type: 'color',
        default: 'rgba(0, 0, 0, 0.43)',
        rgba: true
    },
    'alain-default-aside-nav-selected-text-color': {
        label: '菜单激活时文本颜色',
        type: 'color',
        default: '@primary-color',
        tip: '默认同主色系'
    },
    'alain-default-aside-nav-selected-bg': {
        label: '菜单激活时背景颜色',
        type: 'color',
        default: '#fcfcfc'
    },
    // 内容
    'alain-default-content-bg': {
        label: '背景色',
        type: 'color',
        default: '#f5f7fa'
    },
    'alain-default-content-heading-bg': {
        label: '标题背景色',
        type: 'color',
        default: '#fafbfc'
    },
    'alain-default-content-heading-border': {
        label: '标题底部边框色',
        type: 'color',
        default: '#efe3e5'
    },
    'alain-default-content-padding': {
        label: '内边距',
        type: 'px',
        default: '24px',
        min: 0,
        max: 128,
        step: 8
    },
    // zorro组件修正
    'form-state-visual-feedback-enabled': {
        label: '开启表单元素的视觉反馈',
        type: 'switch',
        default: true
    },
    'preserve-white-spaces-enabled': {
        label: '开启 preserveWhitespaces',
        type: 'switch',
        default: true
    },
    'nz-table-img-radius': {
        label: '表格中：图片圆角',
        type: 'px',
        default: '4px',
        min: 0,
        max: 128
    },
    'nz-table-img-margin-right': {
        label: '表格中：图片右外边距',
        type: 'px',
        default: '4px',
        min: 0,
        max: 128
    },
    'nz-table-img-max-width': {
        label: '表格中：图片最大宽度',
        type: 'px',
        default: '32px',
        min: 8,
        max: 128
    },
    'nz-table-img-max-height': {
        label: '表格中：图片最大高度',
        type: 'px',
        default: '32px',
        min: 8,
        max: 128
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZy1kcmF3ZXIudHlwZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy90aGVtZS9zZXR0aW5nLWRyYXdlci9zZXR0aW5nLWRyYXdlci50eXBlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxNQUFNLENBQUMsTUFBTSxlQUFlLEdBQUcsb0JBQW9CLENBQUM7QUFDcEQsTUFBTSxDQUFDLE1BQU0sY0FBYyxHQUFHO0lBQzVCO1FBQ0UsR0FBRyxFQUFFLE1BQU07UUFDWCxLQUFLLEVBQUUsU0FBUztLQUNqQjtJQUNEO1FBQ0UsR0FBRyxFQUFFLFNBQVM7UUFDZCxLQUFLLEVBQUUsU0FBUztLQUNqQjtJQUNEO1FBQ0UsR0FBRyxFQUFFLFFBQVE7UUFDYixLQUFLLEVBQUUsU0FBUztLQUNqQjtJQUNEO1FBQ0UsR0FBRyxFQUFFLE1BQU07UUFDWCxLQUFLLEVBQUUsU0FBUztLQUNqQjtJQUNEO1FBQ0UsR0FBRyxFQUFFLE9BQU87UUFDWixLQUFLLEVBQUUsU0FBUztLQUNqQjtJQUNEO1FBQ0UsR0FBRyxFQUFFLFVBQVU7UUFDZixLQUFLLEVBQUUsU0FBUztLQUNqQjtJQUNEO1FBQ0UsR0FBRyxFQUFFLFVBQVU7UUFDZixLQUFLLEVBQUUsU0FBUztLQUNqQjtJQUNEO1FBQ0UsR0FBRyxFQUFFLFFBQVE7UUFDYixLQUFLLEVBQUUsU0FBUztLQUNqQjtJQUNEO1FBQ0UsR0FBRyxFQUFFLE9BQU87UUFDWixLQUFLLEVBQUUsU0FBUztLQUNqQjtDQUNGLENBQUM7QUFDRixNQUFNLENBQUMsTUFBTSxZQUFZLEdBQWlDO0lBQ3hELGVBQWUsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFO0lBQ3BFLHlCQUF5QixFQUFFO1FBQ3pCLEtBQUssRUFBRSxHQUFHO1FBQ1YsSUFBSSxFQUFFLElBQUk7UUFDVixPQUFPLEVBQUUsTUFB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QUFJLEVBQUUsSUFBSTtRQUNWLE9BQU8sRUFBRSxNQUFNO1FBQ2YsR0FBRyxFQUFFLENBQUM7UUFDTixHQUFHLEVBQUUsR0FBRztRQUNSLElBQUksRUFBRSxDQUFDO0tBQ1I7SUFDRCxZQUFZO0lBQ1osb0NBQW9DLEVBQUU7UUFDcEMsS0FBSyxFQUFFLGFBQWE7UUFDcEIsSUFBSSxFQUFFLFFBQVE7UUFDZCxPQUFPLEVBQUUsSUFBSTtLQUNkO0lBQ0QsK0JBQStCLEVBQUU7UUFDL0IsS0FBSyxFQUFFLHdCQUF3QjtRQUMvQixJQUFJLEVBQUUsUUFBUTtRQUNkLE9BQU8sRUFBRSxJQUFJO0tBQ2Q7SUFDRCxxQkFBcUIsRUFBRTtRQUNyQixLQUFLLEVBQUUsVUFBVTtRQUNqQixJQUFJLEVBQUUsSUFBSTtRQUNWLE9BQU8sRUFBRSxLQUFLO1FBQ2QsR0FBRyxFQUFFLENBQUM7UUFDTixHQUFHLEVBQUUsR0FBRztLQUNUO0lBQ0QsMkJBQTJCLEVBQUU7UUFDM0IsS0FBSyxFQUFFLFlBQVk7UUFDbkIsSUFBSSxFQUFFLElBQUk7UUFDVixPQUFPLEVBQUUsS0FBSztRQUNkLEdBQUcsRUFBRSxDQUFDO1FBQ04sR0FBRyxFQUFFLEdBQUc7S0FDVDtJQUNELHdCQUF3QixFQUFFO1FBQ3hCLEtBQUssRUFBRSxZQUFZO1FBQ25CLElBQUksRUFBRSxJQUFJO1FBQ1YsT0FBTyxFQUFFLE1BQU07UUFDZixHQUFHLEVBQUUsQ0FBQztRQUNOLEdBQUcsRUFBRSxHQUFHO0tBQ1Q7SUFDRCx5QkFBeUIsRUFBRTtRQUN6QixLQUFLLEVBQUUsWUFBWTtRQUNuQixJQUFJLEVBQUUsSUFBSTtRQUNWLE9BQU8sRUFBRSxNQUFNO1FBQ2YsR0FBRyxFQUFFLENBQUM7UUFDTixHQUFHLEVBQUUsR0FBRztLQUNUO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBBTEFJTkRFRkFVTFRWQVIgPSAnYWxhaW4tZGVmYXVsdC12YXJzJztcbmV4cG9ydCBjb25zdCBERUZBVUxUX0NPTE9SUyA9IFtcbiAge1xuICAgIGtleTogJ2R1c3QnLFxuICAgIGNvbG9yOiAnI0Y1MjIyRCdcbiAgfSxcbiAge1xuICAgIGtleTogJ3ZvbGNhbm8nLFxuICAgIGNvbG9yOiAnI0ZBNTQxQydcbiAgfSxcbiAge1xuICAgIGtleTogJ3N1bnNldCcsXG4gICAgY29sb3I6ICcjRkFBRDE0J1xuICB9LFxuICB7XG4gICAga2V5OiAnY3lhbicsXG4gICAgY29sb3I6ICcjMTNDMkMyJ1xuICB9LFxuICB7XG4gICAga2V5OiAnZ3JlZW4nLFxuICAgIGNvbG9yOiAnIzUyQzQxQSdcbiAgfSxcbiAge1xuICAgIGtleTogJ2RheWJyZWFrJyxcbiAgICBjb2xvcjogJyMxODkwZmYnXG4gIH0sXG4gIHtcbiAgICBrZXk6ICdnZWVrYmx1ZScsXG4gICAgY29sb3I6ICcjMkY1NEVCJ1xuICB9LFxuICB7XG4gICAga2V5OiAncHVycGxlJyxcbiAgICBjb2xvcjogJyM3MjJFRDEnXG4gIH0sXG4gIHtcbiAgICBrZXk6ICdibGFjaycsXG4gICAgY29sb3I6ICcjMDAxNTI5J1xuICB9XG5dO1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfVkFSUzogeyBba2V5OiBzdHJpbmddOiBOelNhZmVBbnkgfSA9IHtcbiAgJ3ByaW1hcnktY29sb3InOiB7IGxhYmVsOiAn5Li76aKc6ImyJywgdHlwZTogJ2NvbG9yJywgZGVmYXVsdDogJyMxODkwZmYnIH0sXG4gICdhbGFpbi1kZWZhdWx0LWhlYWRlci1oZyc6IHtcbiAgICBsYWJlbDogJ+mrmCcsXG4gICAgdHlwZTogJ3B4JyxcbiAgICBkZWZhdWx0OiAnNjRweCcsXG4gICAgbWF4OiAzMDAsXG4gICAgbWluOiAyNFxuICB9LFxuICAnYWxhaW4tZGVmYXVsdC1oZWFkZXItYmcnOiB7XG4gICAgbGFiZWw6ICfog4zmma/oibInLFxuICAgIHR5cGU6ICdjb2xvcicsXG4gICAgZGVmYXVsdDogJ0BwcmltYXJ5LWNvbG9yJyxcbiAgICB0aXA6ICfpu5jorqTlkIzkuLvoibLns7snXG4gIH0sXG4gICdhbGFpbi1kZWZhdWx0LWhlYWRlci1wYWRkaW5nJzoge1xuICAgIGxhYmVsOiAn6aG26YOo5bem5Y+z5YaF6L656LedJyxcbiAgICB0eXBlOiAncHgnLFxuICAgIGRlZmF1bHQ6ICcxNnB4J1xuICB9LFxuICAvLyDkvqfovrnmoI9cbiAgJ2FsYWluLWRlZmF1bHQtYXNpZGUtd2QnOiB7IGxhYmVsOiAn5a695bqmJywgdHlwZTogJ3B4JywgZGVmYXVsdDogJzIwMHB4JyB9LFxuICAnYWxhaW4tZGVmYXVsdC1hc2lkZS1iZyc6IHtcbiAgICBsYWJlbDogJ+iDjOaZrycsXG4gICAgdHlwZTogJ2NvbG9yJyxcbiAgICBkZWZhdWx0OiAnI2ZmZmZmZidcbiAgfSxcbiAgJ2FsYWluLWRlZmF1bHQtYXNpZGUtY29sbGFwc2VkLXdkJzoge1xuICAgIGxhYmVsOiAn5pS257yp5a695bqmJyxcbiAgICB0eXBlOiAncHgnLFxuICAgIGRlZmF1bHQ6ICc2NHB4J1xuICB9LFxuICAnYWxhaW4tZGVmYXVsdC1hc2lkZS1uYXYtcGFkZGluZy10b3AtYm90dG9tJzoge1xuICAgIGxhYmVsOiAn6aG55LiK5LiL5YaF6L656LedJyxcbiAgICB0eXBlOiAncHgnLFxuICAgIGRlZmF1bHQ6ICc4cHgnLFxuICAgIHN0ZXA6IDhcbiAgfSxcbiAgLy8g5Li76I+c5Y2VXG4gICdhbGFpbi1kZWZhdWx0LWFzaWRlLW5hdi1mcyc6IHtcbiAgICBsYWJlbDogJ+iPnOWNleWtl+WPtycsXG4gICAgdHlwZTogJ3B4JyxcbiAgICBkZWZhdWx0OiAnMTRweCcsXG4gICAgbWluOiAxNCxcbiAgICBtYXg6IDMwXG4gIH0sXG4gICdhbGFpbi1kZWZhdWx0LWFzaWRlLWNvbGxhcHNlZC1uYXYtZnMnOiB7XG4gICAgbGFiZWw6ICfmlLbnvKnoj5zljZXlrZflj7cnLFxuICAgIHR5cGU6ICdweCcsXG4gICAgZGVmYXVsdDogJzI0cHgnLFxuICAgIG1pbjogMjQsXG4gICAgbWF4OiAzMlxuICB9LFxuICAnYWxhaW4tZGVmYXVsdC1hc2lkZS1uYXYtaXRlbS1oZWlnaHQnOiB7XG4gICAgbGFiZWw6ICfoj5zljZXpobnpq5jluqYnLFxuICAgIHR5cGU6ICdweCcsXG4gICAgZGVmYXVsdDogJzM4cHgnLFxuICAgIG1pbjogMjQsXG4gICAgbWF4OiA2NFxuICB9LFxuICAnYWxhaW4tZGVmYXVsdC1hc2lkZS1uYXYtdGV4dC1jb2xvcic6IHtcbiAgICBsYWJlbDogJ+iPnOWNleaWh+acrOminOiJsicsXG4gICAgdHlwZTogJ2NvbG9yJyxcbiAgICBkZWZhdWx0OiAncmdiYSgwLCAwLCAwLCAwLjY1KScsXG4gICAgcmdiYTogdHJ1ZVxuICB9LFxuICAnYWxhaW4tZGVmYXVsdC1hc2lkZS1uYXYtdGV4dC1ob3Zlci1jb2xvcic6IHtcbiAgICBsYWJlbDogJ+iPnOWNleaWh+acrOaCrOWBnOminOiJsicsXG4gICAgdHlwZTogJ2NvbG9yJyxcbiAgICBkZWZhdWx0OiAnQHByaW1hcnktY29sb3InLFxuICAgIHRpcDogJ+m7mOiupOWQjOS4u+iJsuezuydcbiAgfSxcbiAgJ2FsYWluLWRlZmF1bHQtYXNpZGUtbmF2LWdyb3VwLXRleHQtY29sb3InOiB7XG4gICAgbGFiZWw6ICfoj5zljZXliIbnu4TmlofmnKzpopzoibInLFxuICAgIHR5cGU6ICdjb2xvcicsXG4gICAgZGVmYXVsdDogJ3JnYmEoMCwgMCwgMCwgMC40MyknLFxuICAgIHJnYmE6IHRydWVcbiAgfSxcbiAgJ2FsYWluLWRlZmF1bHQtYXNpZGUtbmF2LXNlbGVjdGVkLXRleHQtY29sb3InOiB7XG4gICAgbGFiZWw6ICfoj5zljZXmv4DmtLvml7bmlofmnKzpopzoibInLFxuICAgIHR5cGU6ICdjb2xvcicsXG4gICAgZGVmYXVsdDogJ0BwcmltYXJ5LWNvbG9yJyxcbiAgICB0aXA6ICfpu5jorqTlkIzkuLvoibLns7snXG4gIH0sXG4gICdhbGFpbi1kZWZhdWx0LWFzaWRlLW5hdi1zZWxlY3RlZC1iZyc6IHtcbiAgICBsYWJlbDogJ+iPnOWNlea/gOa0u+aXtuiDjOaZr+minOiJsicsXG4gICAgdHlwZTogJ2NvbG9yJyxcbiAgICBkZWZhdWx0OiAnI2ZjZmNmYydcbiAgfSxcbiAgLy8g5YaF5a65XG4gICdhbGFpbi1kZWZhdWx0LWNvbnRlbnQtYmcnOiB7XG4gICAgbGFiZWw6ICfog4zmma/oibInLFxuICAgIHR5cGU6ICdjb2xvcicsXG4gICAgZGVmYXVsdDogJyNmNWY3ZmEnXG4gIH0sXG4gICdhbGFpbi1kZWZhdWx0LWNvbnRlbnQtaGVhZGluZy1iZyc6IHtcbiAgICBsYWJlbDogJ+agh+mimOiDjOaZr+iJsicsXG4gICAgdHlwZTogJ2NvbG9yJyxcbiAgICBkZWZhdWx0OiAnI2ZhZmJmYydcbiAgfSxcbiAgJ2FsYWluLWRlZmF1bHQtY29udGVudC1oZWFkaW5nLWJvcmRlcic6IHtcbiAgICBsYWJlbDogJ+agh+mimOW6lemDqOi+ueahhuiJsicsXG4gICAgdHlwZTogJ2NvbG9yJyxcbiAgICBkZWZhdWx0OiAnI2VmZTNlNSdcbiAgfSxcbiAgJ2FsYWluLWRlZmF1bHQtY29udGVudC1wYWRkaW5nJzoge1xuICAgIGxhYmVsOiAn5YaF6L656LedJyxcbiAgICB0eXBlOiAncHgnLFxuICAgIGRlZmF1bHQ6ICcyNHB4JyxcbiAgICBtaW46IDAsXG4gICAgbWF4OiAxMjgsXG4gICAgc3RlcDogOFxuICB9LFxuICAvLyB6b3Jyb+e7hOS7tuS/ruato1xuICAnZm9ybS1zdGF0ZS12aXN1YWwtZmVlZGJhY2stZW5hYmxlZCc6IHtcbiAgICBsYWJlbDogJ+W8gOWQr+ihqOWNleWFg+e0oOeahOinhuinieWPjemmiCcsXG4gICAgdHlwZTogJ3N3aXRjaCcsXG4gICAgZGVmYXVsdDogdHJ1ZVxuICB9LFxuICAncHJlc2VydmUtd2hpdGUtc3BhY2VzLWVuYWJsZWQnOiB7XG4gICAgbGFiZWw6ICflvIDlkK8gcHJlc2VydmVXaGl0ZXNwYWNlcycsXG4gICAgdHlwZTogJ3N3aXRjaCcsXG4gICAgZGVmYXVsdDogdHJ1ZVxuICB9LFxuICAnbnotdGFibGUtaW1nLXJhZGl1cyc6IHtcbiAgICBsYWJlbDogJ+ihqOagvOS4re+8muWbvueJh+WchuinkicsXG4gICAgdHlwZTogJ3B4JyxcbiAgICBkZWZhdWx0OiAnNHB4JyxcbiAgICBtaW46IDAsXG4gICAgbWF4OiAxMjhcbiAgfSxcbiAgJ256LXRhYmxlLWltZy1tYXJnaW4tcmlnaHQnOiB7XG4gICAgbGFiZWw6ICfooajmoLzkuK3vvJrlm77niYflj7PlpJbovrnot50nLFxuICAgIHR5cGU6ICdweCcsXG4gICAgZGVmYXVsdDogJzRweCcsXG4gICAgbWluOiAwLFxuICAgIG1heDogMTI4XG4gIH0sXG4gICduei10YWJsZS1pbWctbWF4LXdpZHRoJzoge1xuICAgIGxhYmVsOiAn6KGo5qC85Lit77ya5Zu+54mH5pyA5aSn5a695bqmJyxcbiAgICB0eXBlOiAncHgnLFxuICAgIGRlZmF1bHQ6ICczMnB4JyxcbiAgICBtaW46IDgsXG4gICAgbWF4OiAxMjhcbiAgfSxcbiAgJ256LXRhYmxlLWltZy1tYXgtaGVpZ2h0Jzoge1xuICAgIGxhYmVsOiAn6KGo5qC85Lit77ya5Zu+54mH5pyA5aSn6auY5bqmJyxcbiAgICB0eXBlOiAncHgnLFxuICAgIGRlZmF1bHQ6ICczMnB4JyxcbiAgICBtaW46IDgsXG4gICAgbWF4OiAxMjhcbiAgfVxufTtcbiJdfQ==