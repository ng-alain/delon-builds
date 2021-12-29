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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZy1kcmF3ZXIudHlwZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy90aGVtZS9zZXR0aW5nLWRyYXdlci9zZXR0aW5nLWRyYXdlci50eXBlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxNQUFNLENBQUMsTUFBTSxlQUFlLEdBQUcsb0JBQW9CLENBQUM7QUFDcEQsTUFBTSxDQUFDLE1BQU0sY0FBYyxHQUFHO0lBQzVCO1FBQ0UsR0FBRyxFQUFFLE1BQU07UUFDWCxLQUFLLEVBQUUsU0FBUztLQUNqQjtJQUNEO1FBQ0UsR0FBRyxFQUFFLFNBQVM7UUFDZCxLQUFLLEVBQUUsU0FBUztLQUNqQjtJQUNEO1FBQ0UsR0FBRyxFQUFFLFFBQVE7UUFDYixLQUFLLEVBQUUsU0FBUztLQUNqQjtJQUNEO1FBQ0UsR0FBRyxFQUFFLE1BQU07UUFDWCxLQUFLLEVBQUUsU0FBUztLQUNqQjtJQUNEO1FBQ0UsR0FBRyxFQUFFLE9BQU87UUFDWixLQUFLLEVBQUUsU0FBUztLQUNqQjtJQUNEO1FBQ0UsR0FBRyxFQUFFLFVBQVU7UUFDZixLQUFLLEVBQUUsU0FBUztLQUNqQjtJQUNEO1FBQ0UsR0FBRyxFQUFFLFVBQVU7UUFDZixLQUFLLEVBQUUsU0FBUztLQUNqQjtJQUNEO1FBQ0UsR0FBRyxFQUFFLFFBQVE7UUFDYixLQUFLLEVBQUUsU0FBUztLQUNqQjtJQUNEO1FBQ0UsR0FBRyxFQUFFLE9BQU87UUFDWixLQUFLLEVBQUUsU0FBUztLQUNqQjtDQUNGLENBQUM7QUFDRixNQUFNLENBQUMsTUFBTSxZQUFZLEdBQWlDO0lBQ3hELGVBQWUsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFO0lBQ3BFLHlCQUF5QixFQUFFO1FBQ3pCLEtBQUssRUFBRSxHQUFHO1FBQ1YsSUFBSSxFQUFFLElBQUk7UUFDVixPQUFPLEVBQUUsTUFB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QUFJLEVBQUUsSUFBSTtRQUNWLE9BQU8sRUFBRSxNQUFNO1FBQ2YsR0FBRyxFQUFFLENBQUM7UUFDTixHQUFHLEVBQUUsR0FBRztRQUNSLElBQUksRUFBRSxDQUFDO0tBQ1I7SUFDRCxZQUFZO0lBQ1osb0NBQW9DLEVBQUU7UUFDcEMsS0FBSyxFQUFFLGFBQWE7UUFDcEIsSUFBSSxFQUFFLFFBQVE7UUFDZCxPQUFPLEVBQUUsSUFBSTtLQUNkO0lBQ0QsK0JBQStCLEVBQUU7UUFDL0IsS0FBSyxFQUFFLHdCQUF3QjtRQUMvQixJQUFJLEVBQUUsUUFBUTtRQUNkLE9BQU8sRUFBRSxJQUFJO0tBQ2Q7SUFDRCxxQkFBcUIsRUFBRTtRQUNyQixLQUFLLEVBQUUsVUFBVTtRQUNqQixJQUFJLEVBQUUsSUFBSTtRQUNWLE9BQU8sRUFBRSxLQUFLO1FBQ2QsR0FBRyxFQUFFLENBQUM7UUFDTixHQUFHLEVBQUUsR0FBRztLQUNUO0lBQ0QsMkJBQTJCLEVBQUU7UUFDM0IsS0FBSyxFQUFFLFlBQVk7UUFDbkIsSUFBSSxFQUFFLElBQUk7UUFDVixPQUFPLEVBQUUsS0FBSztRQUNkLEdBQUcsRUFBRSxDQUFDO1FBQ04sR0FBRyxFQUFFLEdBQUc7S0FDVDtJQUNELHdCQUF3QixFQUFFO1FBQ3hCLEtBQUssRUFBRSxZQUFZO1FBQ25CLElBQUksRUFBRSxJQUFJO1FBQ1YsT0FBTyxFQUFFLE1BQU07UUFDZixHQUFHLEVBQUUsQ0FBQztRQUNOLEdBQUcsRUFBRSxHQUFHO0tBQ1Q7SUFDRCx5QkFBeUIsRUFBRTtRQUN6QixLQUFLLEVBQUUsWUFBWTtRQUNuQixJQUFJLEVBQUUsSUFBSTtRQUNWLE9BQU8sRUFBRSxNQUFNO1FBQ2YsR0FBRyxFQUFFLENBQUM7UUFDTixHQUFHLEVBQUUsR0FBRztLQUNUO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuZXhwb3J0IGNvbnN0IEFMQUlOREVGQVVMVFZBUiA9ICdhbGFpbi1kZWZhdWx0LXZhcnMnO1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfQ09MT1JTID0gW1xuICB7XG4gICAga2V5OiAnZHVzdCcsXG4gICAgY29sb3I6ICcjRjUyMjJEJ1xuICB9LFxuICB7XG4gICAga2V5OiAndm9sY2FubycsXG4gICAgY29sb3I6ICcjRkE1NDFDJ1xuICB9LFxuICB7XG4gICAga2V5OiAnc3Vuc2V0JyxcbiAgICBjb2xvcjogJyNGQUFEMTQnXG4gIH0sXG4gIHtcbiAgICBrZXk6ICdjeWFuJyxcbiAgICBjb2xvcjogJyMxM0MyQzInXG4gIH0sXG4gIHtcbiAgICBrZXk6ICdncmVlbicsXG4gICAgY29sb3I6ICcjNTJDNDFBJ1xuICB9LFxuICB7XG4gICAga2V5OiAnZGF5YnJlYWsnLFxuICAgIGNvbG9yOiAnIzE4OTBmZidcbiAgfSxcbiAge1xuICAgIGtleTogJ2dlZWtibHVlJyxcbiAgICBjb2xvcjogJyMyRjU0RUInXG4gIH0sXG4gIHtcbiAgICBrZXk6ICdwdXJwbGUnLFxuICAgIGNvbG9yOiAnIzcyMkVEMSdcbiAgfSxcbiAge1xuICAgIGtleTogJ2JsYWNrJyxcbiAgICBjb2xvcjogJyMwMDE1MjknXG4gIH1cbl07XG5leHBvcnQgY29uc3QgREVGQVVMVF9WQVJTOiB7IFtrZXk6IHN0cmluZ106IE56U2FmZUFueSB9ID0ge1xuICAncHJpbWFyeS1jb2xvcic6IHsgbGFiZWw6ICfkuLvpopzoibInLCB0eXBlOiAnY29sb3InLCBkZWZhdWx0OiAnIzE4OTBmZicgfSxcbiAgJ2FsYWluLWRlZmF1bHQtaGVhZGVyLWhnJzoge1xuICAgIGxhYmVsOiAn6auYJyxcbiAgICB0eXBlOiAncHgnLFxuICAgIGRlZmF1bHQ6ICc2NHB4JyxcbiAgICBtYXg6IDMwMCxcbiAgICBtaW46IDI0XG4gIH0sXG4gICdhbGFpbi1kZWZhdWx0LWhlYWRlci1iZyc6IHtcbiAgICBsYWJlbDogJ+iDjOaZr+iJsicsXG4gICAgdHlwZTogJ2NvbG9yJyxcbiAgICBkZWZhdWx0OiAnQHByaW1hcnktY29sb3InLFxuICAgIHRpcDogJ+m7mOiupOWQjOS4u+iJsuezuydcbiAgfSxcbiAgJ2FsYWluLWRlZmF1bHQtaGVhZGVyLXBhZGRpbmcnOiB7XG4gICAgbGFiZWw6ICfpobbpg6jlt6blj7PlhoXovrnot50nLFxuICAgIHR5cGU6ICdweCcsXG4gICAgZGVmYXVsdDogJzE2cHgnXG4gIH0sXG4gIC8vIOS+p+i+ueagj1xuICAnYWxhaW4tZGVmYXVsdC1hc2lkZS13ZCc6IHsgbGFiZWw6ICflrr3luqYnLCB0eXBlOiAncHgnLCBkZWZhdWx0OiAnMjAwcHgnIH0sXG4gICdhbGFpbi1kZWZhdWx0LWFzaWRlLWJnJzoge1xuICAgIGxhYmVsOiAn6IOM5pmvJyxcbiAgICB0eXBlOiAnY29sb3InLFxuICAgIGRlZmF1bHQ6ICcjZmZmZmZmJ1xuICB9LFxuICAnYWxhaW4tZGVmYXVsdC1hc2lkZS1jb2xsYXBzZWQtd2QnOiB7XG4gICAgbGFiZWw6ICfmlLbnvKnlrr3luqYnLFxuICAgIHR5cGU6ICdweCcsXG4gICAgZGVmYXVsdDogJzY0cHgnXG4gIH0sXG4gICdhbGFpbi1kZWZhdWx0LWFzaWRlLW5hdi1wYWRkaW5nLXRvcC1ib3R0b20nOiB7XG4gICAgbGFiZWw6ICfpobnkuIrkuIvlhoXovrnot50nLFxuICAgIHR5cGU6ICdweCcsXG4gICAgZGVmYXVsdDogJzhweCcsXG4gICAgc3RlcDogOFxuICB9LFxuICAvLyDkuLvoj5zljZVcbiAgJ2FsYWluLWRlZmF1bHQtYXNpZGUtbmF2LWZzJzoge1xuICAgIGxhYmVsOiAn6I+c5Y2V5a2X5Y+3JyxcbiAgICB0eXBlOiAncHgnLFxuICAgIGRlZmF1bHQ6ICcxNHB4JyxcbiAgICBtaW46IDE0LFxuICAgIG1heDogMzBcbiAgfSxcbiAgJ2FsYWluLWRlZmF1bHQtYXNpZGUtY29sbGFwc2VkLW5hdi1mcyc6IHtcbiAgICBsYWJlbDogJ+aUtue8qeiPnOWNleWtl+WPtycsXG4gICAgdHlwZTogJ3B4JyxcbiAgICBkZWZhdWx0OiAnMjRweCcsXG4gICAgbWluOiAyNCxcbiAgICBtYXg6IDMyXG4gIH0sXG4gICdhbGFpbi1kZWZhdWx0LWFzaWRlLW5hdi1pdGVtLWhlaWdodCc6IHtcbiAgICBsYWJlbDogJ+iPnOWNlemhuemrmOW6picsXG4gICAgdHlwZTogJ3B4JyxcbiAgICBkZWZhdWx0OiAnMzhweCcsXG4gICAgbWluOiAyNCxcbiAgICBtYXg6IDY0XG4gIH0sXG4gICdhbGFpbi1kZWZhdWx0LWFzaWRlLW5hdi10ZXh0LWNvbG9yJzoge1xuICAgIGxhYmVsOiAn6I+c5Y2V5paH5pys6aKc6ImyJyxcbiAgICB0eXBlOiAnY29sb3InLFxuICAgIGRlZmF1bHQ6ICdyZ2JhKDAsIDAsIDAsIDAuNjUpJyxcbiAgICByZ2JhOiB0cnVlXG4gIH0sXG4gICdhbGFpbi1kZWZhdWx0LWFzaWRlLW5hdi10ZXh0LWhvdmVyLWNvbG9yJzoge1xuICAgIGxhYmVsOiAn6I+c5Y2V5paH5pys5oKs5YGc6aKc6ImyJyxcbiAgICB0eXBlOiAnY29sb3InLFxuICAgIGRlZmF1bHQ6ICdAcHJpbWFyeS1jb2xvcicsXG4gICAgdGlwOiAn6buY6K6k5ZCM5Li76Imy57O7J1xuICB9LFxuICAnYWxhaW4tZGVmYXVsdC1hc2lkZS1uYXYtZ3JvdXAtdGV4dC1jb2xvcic6IHtcbiAgICBsYWJlbDogJ+iPnOWNleWIhue7hOaWh+acrOminOiJsicsXG4gICAgdHlwZTogJ2NvbG9yJyxcbiAgICBkZWZhdWx0OiAncmdiYSgwLCAwLCAwLCAwLjQzKScsXG4gICAgcmdiYTogdHJ1ZVxuICB9LFxuICAnYWxhaW4tZGVmYXVsdC1hc2lkZS1uYXYtc2VsZWN0ZWQtdGV4dC1jb2xvcic6IHtcbiAgICBsYWJlbDogJ+iPnOWNlea/gOa0u+aXtuaWh+acrOminOiJsicsXG4gICAgdHlwZTogJ2NvbG9yJyxcbiAgICBkZWZhdWx0OiAnQHByaW1hcnktY29sb3InLFxuICAgIHRpcDogJ+m7mOiupOWQjOS4u+iJsuezuydcbiAgfSxcbiAgJ2FsYWluLWRlZmF1bHQtYXNpZGUtbmF2LXNlbGVjdGVkLWJnJzoge1xuICAgIGxhYmVsOiAn6I+c5Y2V5r+A5rS75pe26IOM5pmv6aKc6ImyJyxcbiAgICB0eXBlOiAnY29sb3InLFxuICAgIGRlZmF1bHQ6ICcjZmNmY2ZjJ1xuICB9LFxuICAvLyDlhoXlrrlcbiAgJ2FsYWluLWRlZmF1bHQtY29udGVudC1iZyc6IHtcbiAgICBsYWJlbDogJ+iDjOaZr+iJsicsXG4gICAgdHlwZTogJ2NvbG9yJyxcbiAgICBkZWZhdWx0OiAnI2Y1ZjdmYSdcbiAgfSxcbiAgJ2FsYWluLWRlZmF1bHQtY29udGVudC1oZWFkaW5nLWJnJzoge1xuICAgIGxhYmVsOiAn5qCH6aKY6IOM5pmv6ImyJyxcbiAgICB0eXBlOiAnY29sb3InLFxuICAgIGRlZmF1bHQ6ICcjZmFmYmZjJ1xuICB9LFxuICAnYWxhaW4tZGVmYXVsdC1jb250ZW50LWhlYWRpbmctYm9yZGVyJzoge1xuICAgIGxhYmVsOiAn5qCH6aKY5bqV6YOo6L655qGG6ImyJyxcbiAgICB0eXBlOiAnY29sb3InLFxuICAgIGRlZmF1bHQ6ICcjZWZlM2U1J1xuICB9LFxuICAnYWxhaW4tZGVmYXVsdC1jb250ZW50LXBhZGRpbmcnOiB7XG4gICAgbGFiZWw6ICflhoXovrnot50nLFxuICAgIHR5cGU6ICdweCcsXG4gICAgZGVmYXVsdDogJzI0cHgnLFxuICAgIG1pbjogMCxcbiAgICBtYXg6IDEyOCxcbiAgICBzdGVwOiA4XG4gIH0sXG4gIC8vIHpvcnJv57uE5Lu25L+u5q2jXG4gICdmb3JtLXN0YXRlLXZpc3VhbC1mZWVkYmFjay1lbmFibGVkJzoge1xuICAgIGxhYmVsOiAn5byA5ZCv6KGo5Y2V5YWD57Sg55qE6KeG6KeJ5Y+N6aaIJyxcbiAgICB0eXBlOiAnc3dpdGNoJyxcbiAgICBkZWZhdWx0OiB0cnVlXG4gIH0sXG4gICdwcmVzZXJ2ZS13aGl0ZS1zcGFjZXMtZW5hYmxlZCc6IHtcbiAgICBsYWJlbDogJ+W8gOWQryBwcmVzZXJ2ZVdoaXRlc3BhY2VzJyxcbiAgICB0eXBlOiAnc3dpdGNoJyxcbiAgICBkZWZhdWx0OiB0cnVlXG4gIH0sXG4gICduei10YWJsZS1pbWctcmFkaXVzJzoge1xuICAgIGxhYmVsOiAn6KGo5qC85Lit77ya5Zu+54mH5ZyG6KeSJyxcbiAgICB0eXBlOiAncHgnLFxuICAgIGRlZmF1bHQ6ICc0cHgnLFxuICAgIG1pbjogMCxcbiAgICBtYXg6IDEyOFxuICB9LFxuICAnbnotdGFibGUtaW1nLW1hcmdpbi1yaWdodCc6IHtcbiAgICBsYWJlbDogJ+ihqOagvOS4re+8muWbvueJh+WPs+Wklui+uei3nScsXG4gICAgdHlwZTogJ3B4JyxcbiAgICBkZWZhdWx0OiAnNHB4JyxcbiAgICBtaW46IDAsXG4gICAgbWF4OiAxMjhcbiAgfSxcbiAgJ256LXRhYmxlLWltZy1tYXgtd2lkdGgnOiB7XG4gICAgbGFiZWw6ICfooajmoLzkuK3vvJrlm77niYfmnIDlpKflrr3luqYnLFxuICAgIHR5cGU6ICdweCcsXG4gICAgZGVmYXVsdDogJzMycHgnLFxuICAgIG1pbjogOCxcbiAgICBtYXg6IDEyOFxuICB9LFxuICAnbnotdGFibGUtaW1nLW1heC1oZWlnaHQnOiB7XG4gICAgbGFiZWw6ICfooajmoLzkuK3vvJrlm77niYfmnIDlpKfpq5jluqYnLFxuICAgIHR5cGU6ICdweCcsXG4gICAgZGVmYXVsdDogJzMycHgnLFxuICAgIG1pbjogOCxcbiAgICBtYXg6IDEyOFxuICB9XG59O1xuIl19