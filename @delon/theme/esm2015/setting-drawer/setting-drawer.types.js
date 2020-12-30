/**
 * @fileoverview added by tsickle
 * Generated from: setting-drawer.types.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export const ALAINDEFAULTVAR = 'alain-default-vars';
/** @type {?} */
export const DEFAULT_COLORS = [
    {
        key: 'dust',
        color: '#F5222D',
    },
    {
        key: 'volcano',
        color: '#FA541C',
    },
    {
        key: 'sunset',
        color: '#FAAD14',
    },
    {
        key: 'cyan',
        color: '#13C2C2',
    },
    {
        key: 'green',
        color: '#52C41A',
    },
    {
        key: 'daybreak',
        color: '#1890ff',
    },
    {
        key: 'geekblue',
        color: '#2F54EB',
    },
    {
        key: 'purple',
        color: '#722ED1',
    },
    {
        key: 'black',
        color: '#001529',
    },
];
/** @type {?} */
export const DEFAULT_VARS = {
    'primary-color': { label: '主颜色', type: 'color', default: '#1890ff' },
    'alain-default-header-hg': {
        label: '高',
        type: 'px',
        default: '64px',
        max: 300,
        min: 24,
    },
    'alain-default-header-bg': {
        label: '背景色',
        type: 'color',
        default: '@primary-color',
        tip: '默认同主色系',
    },
    'alain-default-header-padding': {
        label: '顶部左右内边距',
        type: 'px',
        default: '16px',
    },
    // 侧边栏
    'alain-default-aside-wd': { label: '宽度', type: 'px', default: '200px' },
    'alain-default-aside-bg': {
        label: '背景',
        type: 'color',
        default: '#ffffff',
    },
    'alain-default-aside-collapsed-wd': {
        label: '收缩宽度',
        type: 'px',
        default: '64px',
    },
    'alain-default-aside-nav-padding-top-bottom': {
        label: '项上下内边距',
        type: 'px',
        default: '8px',
        step: 8,
    },
    // 主菜单
    'alain-default-aside-nav-fs': {
        label: '菜单字号',
        type: 'px',
        default: '14px',
        min: 14,
        max: 30,
    },
    'alain-default-aside-collapsed-nav-fs': {
        label: '收缩菜单字号',
        type: 'px',
        default: '24px',
        min: 24,
        max: 32,
    },
    'alain-default-aside-nav-item-height': {
        label: '菜单项高度',
        type: 'px',
        default: '38px',
        min: 24,
        max: 64,
    },
    'alain-default-aside-nav-text-color': {
        label: '菜单文本颜色',
        type: 'color',
        default: 'rgba(0, 0, 0, 0.65)',
        rgba: true,
    },
    'alain-default-aside-nav-text-hover-color': {
        label: '菜单文本悬停颜色',
        type: 'color',
        default: '@primary-color',
        tip: '默认同主色系',
    },
    'alain-default-aside-nav-group-text-color': {
        label: '菜单分组文本颜色',
        type: 'color',
        default: 'rgba(0, 0, 0, 0.43)',
        rgba: true,
    },
    'alain-default-aside-nav-selected-text-color': {
        label: '菜单激活时文本颜色',
        type: 'color',
        default: '@primary-color',
        tip: '默认同主色系',
    },
    'alain-default-aside-nav-selected-bg': {
        label: '菜单激活时背景颜色',
        type: 'color',
        default: '#fcfcfc',
    },
    // 内容
    'alain-default-content-bg': {
        label: '背景色',
        type: 'color',
        default: '#f5f7fa',
    },
    'alain-default-content-heading-bg': {
        label: '标题背景色',
        type: 'color',
        default: '#fafbfc',
    },
    'alain-default-content-heading-border': {
        label: '标题底部边框色',
        type: 'color',
        default: '#efe3e5',
    },
    'alain-default-content-padding': {
        label: '内边距',
        type: 'px',
        default: '24px',
        min: 0,
        max: 128,
        step: 8,
    },
    // zorro组件修正
    'form-state-visual-feedback-enabled': {
        label: '开启表单元素的视觉反馈',
        type: 'switch',
        default: true,
    },
    'preserve-white-spaces-enabled': {
        label: '开启 preserveWhitespaces',
        type: 'switch',
        default: true,
    },
    'nz-table-img-radius': {
        label: '表格中：图片圆角',
        type: 'px',
        default: '4px',
        min: 0,
        max: 128,
    },
    'nz-table-img-margin-right': {
        label: '表格中：图片右外边距',
        type: 'px',
        default: '4px',
        min: 0,
        max: 128,
    },
    'nz-table-img-max-width': {
        label: '表格中：图片最大宽度',
        type: 'px',
        default: '32px',
        min: 8,
        max: 128,
    },
    'nz-table-img-max-height': {
        label: '表格中：图片最大高度',
        type: 'px',
        default: '32px',
        min: 8,
        max: 128,
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZy1kcmF3ZXIudHlwZXMuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvdGhlbWUvc2V0dGluZy1kcmF3ZXIvIiwic291cmNlcyI6WyJzZXR0aW5nLWRyYXdlci50eXBlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFFQSxNQUFNLE9BQU8sZUFBZSxHQUFHLG9CQUFvQjs7QUFDbkQsTUFBTSxPQUFPLGNBQWMsR0FBRztJQUM1QjtRQUNFLEdBQUcsRUFBRSxNQUFNO1FBQ1gsS0FBSyxFQUFFLFNBQVM7S0FDakI7SUFDRDtRQUNFLEdBQUcsRUFBRSxTQUFTO1FBQ2QsS0FBSyxFQUFFLFNBQVM7S0FDakI7SUFDRDtRQUNFLEdBQUcsRUFBRSxRQUFRO1FBQ2IsS0FBSyxFQUFFLFNBQVM7S0FDakI7SUFDRDtRQUNFLEdBQUcsRUFBRSxNQUFNO1FBQ1gsS0FBSyxFQUFFLFNBQVM7S0FDakI7SUFDRDtRQUNFLEdBQUcsRUFBRSxPQUFPO1FBQ1osS0FBSyxFQUFFLFNBQVM7S0FDakI7SUFDRDtRQUNFLEdBQUcsRUFBRSxVQUFVO1FBQ2YsS0FBSyxFQUFFLFNBQVM7S0FDakI7SUFDRDtRQUNFLEdBQUcsRUFBRSxVQUFVO1FBQ2YsS0FBSyxFQUFFLFNBQVM7S0FDakI7SUFDRDtRQUNFLEdBQUcsRUFBRSxRQUFRO1FBQ2IsS0FBSyxFQUFFLFNBQVM7S0FDakI7SUFDRDtRQUNFLEdBQUcsRUFBRSxPQUFPO1FBQ1osS0FBSyxFQUFFLFNBQVM7S0FDakI7Q0FDRjs7QUFDRCxNQUFNLE9BQU8sWUFBWSxHQUFpQztJQUN4RCxlQUFlLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRTtJQUNwRSx5QkFBeUIsRUFBRTtRQUN6QixLQUFLLEVBQUUsR0FBRztRQUNWLElBQUksRUFBRSxJQUFJO1FBQ1YsT0FBTyxFQUFFLE1BQU07UUFDZixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxFQUFFO0tBQ1I7SUFDRCx5QkFBeUIsRUFBRTtRQUN6QixLQUFLLEVBQUUsS0FBSztRQUNaLElBQUksRUFBRSxPQUFPO1FBQ2IsT0FBTyxFQUFFLGdCQUFnQjtRQUN6QixHQUFHLEVBQUUsUUFBUTtLQUNkO0lBQ0QsOEJBQThCLEVBQUU7UUFDOUIsS0FBSyxFQUFFLFNBQVM7UUFDaEIsSUFBSSxFQUFFLElBQUk7UUFDVixPQUFPLEVBQUUsTUFBTTtLQUNoQjs7SUFFRCx3QkFBd0IsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFO0lBQ3ZFLHdCQUF3QixFQUFFO1FBQ3hCLEtBQUssRUFBRSxJQUFJO1FBQ1gsSUFBSSxFQUFFLE9BQU87UUFDYixPQUFPLEVBQUUsU0FBUztLQUNuQjtJQUNELGtDQUFrQyxFQUFFO1FBQ2xDLEtBQUssRUFBRSxNQUFNO1FBQ2IsSUFBSSxFQUFFLElBQUk7UUFDVixPQUFPLEVBQUUsTUFBTTtLQUNoQjtJQUNELDRDQUE0QyxFQUFFO1FBQzVDLEtBQUssRUFBRSxRQUFRO1FBQ2YsSUFBSSxFQUFFLElBQUk7UUFDVixPQUFPLEVBQUUsS0FBSztRQUNkLElBQUksRUFBRSxDQUFDO0tBQ1I7O0lBRUQsNEJBQTRCLEVBQUU7UUFDNUIsS0FBSyxFQUFFLE1BQU07UUFDYixJQUFJLEVBQUUsSUFBSTtRQUNWLE9BQU8sRUFBRSxNQUFNO1FBQ2YsR0FBRyxFQUFFLEVBQUU7UUFDUCxHQUFHLEVBQUUsRUFBRTtLQUNSO0lBQ0Qsc0NBQXNDLEVBQUU7UUFDdEMsS0FBSyxFQUFFLFFBQVE7UUFDZixJQUFJLEVBQUUsSUFBSTtRQUNWLE9BQU8sRUFBRSxNQUFNO1FBQ2YsR0FBRyxFQUFFLEVBQUU7UUFDUCxHQUFHLEVBQUUsRUFBRTtLQUNSO0lBQ0QscUNBQXFDLEVBQUU7UUFDckMsS0FBSyxFQUFFLE9BQU87UUFDZCxJQUFJLEVBQUUsSUFBSTtRQUNWLE9BQU8sRUFBRSxNQUFNO1FBQ2YsR0FBRyxFQUFFLEVBQUU7UUFDUCxHQUFHLEVBQUUsRUFBRTtLQUNSO0lBQ0Qsb0NBQW9DLEVBQUU7UUFDcEMsS0FBSyxFQUFFLFFBQVE7UUFDZixJQUFJLEVBQUUsT0FBTztRQUNiLE9BQU8sRUFBRSxxQkFBcUI7UUFDOUIsSUFBSSxFQUFFLElBQUk7S0FDWDtJQUNELDBDQUEwQyxFQUFFO1FBQzFDLEtBQUssRUFBRSxVQUFVO1FBQ2pCLElBQUksRUFBRSxPQUFPO1FBQ2IsT0FBTyxFQUFFLGdCQUFnQjtRQUN6QixHQUFHLEVBQUUsUUFBUTtLQUNkO0lBQ0QsMENBQTBDLEVBQUU7UUFDMUMsS0FBSyxFQUFFLFVBQVU7UUFDakIsSUFBSSxFQUFFLE9BQU87UUFDYixPQUFPLEVBQUUscUJBQXFCO1FBQzlCLElBQUksRUFBRSxJQUFJO0tBQ1g7SUFDRCw2Q0FBNkMsRUFBRTtRQUM3QyxLQUFLLEVBQUUsV0FBVztRQUNsQixJQUFJLEVBQUUsT0FBTztRQUNiLE9BQU8sRUFBRSxnQkFBZ0I7UUFDekIsR0FBRyxFQUFFLFFBQVE7S0FDZDtJQUNELHFDQUFxQyxFQUFFO1FBQ3JDLEtBQUssRUFBRSxXQUFXO1FBQ2xCLElBQUksRUFBRSxPQUFPO1FBQ2IsT0FBTyxFQUFFLFNBQVM7S0FDbkI7O0lBRUQsMEJBQTBCLEVBQUU7UUFDMUIsS0FBSyxFQUFFLEtBQUs7UUFDWixJQUFJLEVBQUUsT0FBTztRQUNiLE9BQU8sRUFBRSxTQUFTO0tBQ25CO0lBQ0Qsa0NBQWtDLEVBQUU7UUFDbEMsS0FBSyxFQUFFLE9BQU87UUFDZCxJQUFJLEVBQUUsT0FBTztRQUNiLE9BQU8sRUFBRSxTQUFTO0tBQ25CO0lBQ0Qsc0NBQXNDLEVBQUU7UUFDdEMsS0FBSyxFQUFFLFNBQVM7UUFDaEIsSUFBSSxFQUFFLE9BQU87UUFDYixPQUFPLEVBQUUsU0FBUztLQUNuQjtJQUNELCtCQUErQixFQUFFO1FBQy9CLEtBQUssRUFBRSxLQUFLO1FBQ1osSUFBSSxFQUFFLElBQUk7UUFDVixPQUFPLEVBQUUsTUFBTTtRQUNmLEdBQUcsRUFBRSxDQUFDO1FBQ04sR0FBRyxFQUFFLEdBQUc7UUFDUixJQUFJLEVBQUUsQ0FBQztLQUNSOztJQUVELG9DQUFvQyxFQUFFO1FBQ3BDLEtBQUssRUFBRSxhQUFhO1FBQ3BCLElBQUksRUFBRSxRQUFRO1FBQ2QsT0FBTyxFQUFFLElBQUk7S0FDZDtJQUNELCtCQUErQixFQUFFO1FBQy9CLEtBQUssRUFBRSx3QkFBd0I7UUFDL0IsSUFBSSxFQUFFLFFBQVE7UUFDZCxPQUFPLEVBQUUsSUFBSTtLQUNkO0lBQ0QscUJBQXFCLEVBQUU7UUFDckIsS0FBSyxFQUFFLFVBQVU7UUFDakIsSUFBSSxFQUFFLElBQUk7UUFDVixPQUFPLEVBQUUsS0FBSztRQUNkLEdBQUcsRUFBRSxDQUFDO1FBQ04sR0FBRyxFQUFFLEdBQUc7S0FDVDtJQUNELDJCQUEyQixFQUFFO1FBQzNCLEtBQUssRUFBRSxZQUFZO1FBQ25CLElBQUksRUFBRSxJQUFJO1FBQ1YsT0FBTyxFQUFFLEtBQUs7UUFDZCxHQUFHLEVBQUUsQ0FBQztRQUNOLEdBQUcsRUFBRSxHQUFHO0tBQ1Q7SUFDRCx3QkFBd0IsRUFBRTtRQUN4QixLQUFLLEVBQUUsWUFBWTtRQUNuQixJQUFJLEVBQUUsSUFBSTtRQUNWLE9BQU8sRUFBRSxNQUFNO1FBQ2YsR0FBRyxFQUFFLENBQUM7UUFDTixHQUFHLEVBQUUsR0FBRztLQUNUO0lBQ0QseUJBQXlCLEVBQUU7UUFDekIsS0FBSyxFQUFFLFlBQVk7UUFDbkIsSUFBSSxFQUFFLElBQUk7UUFDVixPQUFPLEVBQUUsTUFBTTtRQUNmLEdBQUcsRUFBRSxDQUFDO1FBQ04sR0FBRyxFQUFFLEdBQUc7S0FDVDtDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuZXhwb3J0IGNvbnN0IEFMQUlOREVGQVVMVFZBUiA9ICdhbGFpbi1kZWZhdWx0LXZhcnMnO1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfQ09MT1JTID0gW1xuICB7XG4gICAga2V5OiAnZHVzdCcsXG4gICAgY29sb3I6ICcjRjUyMjJEJyxcbiAgfSxcbiAge1xuICAgIGtleTogJ3ZvbGNhbm8nLFxuICAgIGNvbG9yOiAnI0ZBNTQxQycsXG4gIH0sXG4gIHtcbiAgICBrZXk6ICdzdW5zZXQnLFxuICAgIGNvbG9yOiAnI0ZBQUQxNCcsXG4gIH0sXG4gIHtcbiAgICBrZXk6ICdjeWFuJyxcbiAgICBjb2xvcjogJyMxM0MyQzInLFxuICB9LFxuICB7XG4gICAga2V5OiAnZ3JlZW4nLFxuICAgIGNvbG9yOiAnIzUyQzQxQScsXG4gIH0sXG4gIHtcbiAgICBrZXk6ICdkYXlicmVhaycsXG4gICAgY29sb3I6ICcjMTg5MGZmJyxcbiAgfSxcbiAge1xuICAgIGtleTogJ2dlZWtibHVlJyxcbiAgICBjb2xvcjogJyMyRjU0RUInLFxuICB9LFxuICB7XG4gICAga2V5OiAncHVycGxlJyxcbiAgICBjb2xvcjogJyM3MjJFRDEnLFxuICB9LFxuICB7XG4gICAga2V5OiAnYmxhY2snLFxuICAgIGNvbG9yOiAnIzAwMTUyOScsXG4gIH0sXG5dO1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfVkFSUzogeyBba2V5OiBzdHJpbmddOiBOelNhZmVBbnkgfSA9IHtcbiAgJ3ByaW1hcnktY29sb3InOiB7IGxhYmVsOiAn5Li76aKc6ImyJywgdHlwZTogJ2NvbG9yJywgZGVmYXVsdDogJyMxODkwZmYnIH0sXG4gICdhbGFpbi1kZWZhdWx0LWhlYWRlci1oZyc6IHtcbiAgICBsYWJlbDogJ+mrmCcsXG4gICAgdHlwZTogJ3B4JyxcbiAgICBkZWZhdWx0OiAnNjRweCcsXG4gICAgbWF4OiAzMDAsXG4gICAgbWluOiAyNCxcbiAgfSxcbiAgJ2FsYWluLWRlZmF1bHQtaGVhZGVyLWJnJzoge1xuICAgIGxhYmVsOiAn6IOM5pmv6ImyJyxcbiAgICB0eXBlOiAnY29sb3InLFxuICAgIGRlZmF1bHQ6ICdAcHJpbWFyeS1jb2xvcicsXG4gICAgdGlwOiAn6buY6K6k5ZCM5Li76Imy57O7JyxcbiAgfSxcbiAgJ2FsYWluLWRlZmF1bHQtaGVhZGVyLXBhZGRpbmcnOiB7XG4gICAgbGFiZWw6ICfpobbpg6jlt6blj7PlhoXovrnot50nLFxuICAgIHR5cGU6ICdweCcsXG4gICAgZGVmYXVsdDogJzE2cHgnLFxuICB9LFxuICAvLyDkvqfovrnmoI9cbiAgJ2FsYWluLWRlZmF1bHQtYXNpZGUtd2QnOiB7IGxhYmVsOiAn5a695bqmJywgdHlwZTogJ3B4JywgZGVmYXVsdDogJzIwMHB4JyB9LFxuICAnYWxhaW4tZGVmYXVsdC1hc2lkZS1iZyc6IHtcbiAgICBsYWJlbDogJ+iDjOaZrycsXG4gICAgdHlwZTogJ2NvbG9yJyxcbiAgICBkZWZhdWx0OiAnI2ZmZmZmZicsXG4gIH0sXG4gICdhbGFpbi1kZWZhdWx0LWFzaWRlLWNvbGxhcHNlZC13ZCc6IHtcbiAgICBsYWJlbDogJ+aUtue8qeWuveW6picsXG4gICAgdHlwZTogJ3B4JyxcbiAgICBkZWZhdWx0OiAnNjRweCcsXG4gIH0sXG4gICdhbGFpbi1kZWZhdWx0LWFzaWRlLW5hdi1wYWRkaW5nLXRvcC1ib3R0b20nOiB7XG4gICAgbGFiZWw6ICfpobnkuIrkuIvlhoXovrnot50nLFxuICAgIHR5cGU6ICdweCcsXG4gICAgZGVmYXVsdDogJzhweCcsXG4gICAgc3RlcDogOCxcbiAgfSxcbiAgLy8g5Li76I+c5Y2VXG4gICdhbGFpbi1kZWZhdWx0LWFzaWRlLW5hdi1mcyc6IHtcbiAgICBsYWJlbDogJ+iPnOWNleWtl+WPtycsXG4gICAgdHlwZTogJ3B4JyxcbiAgICBkZWZhdWx0OiAnMTRweCcsXG4gICAgbWluOiAxNCxcbiAgICBtYXg6IDMwLFxuICB9LFxuICAnYWxhaW4tZGVmYXVsdC1hc2lkZS1jb2xsYXBzZWQtbmF2LWZzJzoge1xuICAgIGxhYmVsOiAn5pS257yp6I+c5Y2V5a2X5Y+3JyxcbiAgICB0eXBlOiAncHgnLFxuICAgIGRlZmF1bHQ6ICcyNHB4JyxcbiAgICBtaW46IDI0LFxuICAgIG1heDogMzIsXG4gIH0sXG4gICdhbGFpbi1kZWZhdWx0LWFzaWRlLW5hdi1pdGVtLWhlaWdodCc6IHtcbiAgICBsYWJlbDogJ+iPnOWNlemhuemrmOW6picsXG4gICAgdHlwZTogJ3B4JyxcbiAgICBkZWZhdWx0OiAnMzhweCcsXG4gICAgbWluOiAyNCxcbiAgICBtYXg6IDY0LFxuICB9LFxuICAnYWxhaW4tZGVmYXVsdC1hc2lkZS1uYXYtdGV4dC1jb2xvcic6IHtcbiAgICBsYWJlbDogJ+iPnOWNleaWh+acrOminOiJsicsXG4gICAgdHlwZTogJ2NvbG9yJyxcbiAgICBkZWZhdWx0OiAncmdiYSgwLCAwLCAwLCAwLjY1KScsXG4gICAgcmdiYTogdHJ1ZSxcbiAgfSxcbiAgJ2FsYWluLWRlZmF1bHQtYXNpZGUtbmF2LXRleHQtaG92ZXItY29sb3InOiB7XG4gICAgbGFiZWw6ICfoj5zljZXmlofmnKzmgqzlgZzpopzoibInLFxuICAgIHR5cGU6ICdjb2xvcicsXG4gICAgZGVmYXVsdDogJ0BwcmltYXJ5LWNvbG9yJyxcbiAgICB0aXA6ICfpu5jorqTlkIzkuLvoibLns7snLFxuICB9LFxuICAnYWxhaW4tZGVmYXVsdC1hc2lkZS1uYXYtZ3JvdXAtdGV4dC1jb2xvcic6IHtcbiAgICBsYWJlbDogJ+iPnOWNleWIhue7hOaWh+acrOminOiJsicsXG4gICAgdHlwZTogJ2NvbG9yJyxcbiAgICBkZWZhdWx0OiAncmdiYSgwLCAwLCAwLCAwLjQzKScsXG4gICAgcmdiYTogdHJ1ZSxcbiAgfSxcbiAgJ2FsYWluLWRlZmF1bHQtYXNpZGUtbmF2LXNlbGVjdGVkLXRleHQtY29sb3InOiB7XG4gICAgbGFiZWw6ICfoj5zljZXmv4DmtLvml7bmlofmnKzpopzoibInLFxuICAgIHR5cGU6ICdjb2xvcicsXG4gICAgZGVmYXVsdDogJ0BwcmltYXJ5LWNvbG9yJyxcbiAgICB0aXA6ICfpu5jorqTlkIzkuLvoibLns7snLFxuICB9LFxuICAnYWxhaW4tZGVmYXVsdC1hc2lkZS1uYXYtc2VsZWN0ZWQtYmcnOiB7XG4gICAgbGFiZWw6ICfoj5zljZXmv4DmtLvml7bog4zmma/popzoibInLFxuICAgIHR5cGU6ICdjb2xvcicsXG4gICAgZGVmYXVsdDogJyNmY2ZjZmMnLFxuICB9LFxuICAvLyDlhoXlrrlcbiAgJ2FsYWluLWRlZmF1bHQtY29udGVudC1iZyc6IHtcbiAgICBsYWJlbDogJ+iDjOaZr+iJsicsXG4gICAgdHlwZTogJ2NvbG9yJyxcbiAgICBkZWZhdWx0OiAnI2Y1ZjdmYScsXG4gIH0sXG4gICdhbGFpbi1kZWZhdWx0LWNvbnRlbnQtaGVhZGluZy1iZyc6IHtcbiAgICBsYWJlbDogJ+agh+mimOiDjOaZr+iJsicsXG4gICAgdHlwZTogJ2NvbG9yJyxcbiAgICBkZWZhdWx0OiAnI2ZhZmJmYycsXG4gIH0sXG4gICdhbGFpbi1kZWZhdWx0LWNvbnRlbnQtaGVhZGluZy1ib3JkZXInOiB7XG4gICAgbGFiZWw6ICfmoIfpopjlupXpg6jovrnmoYboibInLFxuICAgIHR5cGU6ICdjb2xvcicsXG4gICAgZGVmYXVsdDogJyNlZmUzZTUnLFxuICB9LFxuICAnYWxhaW4tZGVmYXVsdC1jb250ZW50LXBhZGRpbmcnOiB7XG4gICAgbGFiZWw6ICflhoXovrnot50nLFxuICAgIHR5cGU6ICdweCcsXG4gICAgZGVmYXVsdDogJzI0cHgnLFxuICAgIG1pbjogMCxcbiAgICBtYXg6IDEyOCxcbiAgICBzdGVwOiA4LFxuICB9LFxuICAvLyB6b3Jyb+e7hOS7tuS/ruato1xuICAnZm9ybS1zdGF0ZS12aXN1YWwtZmVlZGJhY2stZW5hYmxlZCc6IHtcbiAgICBsYWJlbDogJ+W8gOWQr+ihqOWNleWFg+e0oOeahOinhuinieWPjemmiCcsXG4gICAgdHlwZTogJ3N3aXRjaCcsXG4gICAgZGVmYXVsdDogdHJ1ZSxcbiAgfSxcbiAgJ3ByZXNlcnZlLXdoaXRlLXNwYWNlcy1lbmFibGVkJzoge1xuICAgIGxhYmVsOiAn5byA5ZCvIHByZXNlcnZlV2hpdGVzcGFjZXMnLFxuICAgIHR5cGU6ICdzd2l0Y2gnLFxuICAgIGRlZmF1bHQ6IHRydWUsXG4gIH0sXG4gICduei10YWJsZS1pbWctcmFkaXVzJzoge1xuICAgIGxhYmVsOiAn6KGo5qC85Lit77ya5Zu+54mH5ZyG6KeSJyxcbiAgICB0eXBlOiAncHgnLFxuICAgIGRlZmF1bHQ6ICc0cHgnLFxuICAgIG1pbjogMCxcbiAgICBtYXg6IDEyOCxcbiAgfSxcbiAgJ256LXRhYmxlLWltZy1tYXJnaW4tcmlnaHQnOiB7XG4gICAgbGFiZWw6ICfooajmoLzkuK3vvJrlm77niYflj7PlpJbovrnot50nLFxuICAgIHR5cGU6ICdweCcsXG4gICAgZGVmYXVsdDogJzRweCcsXG4gICAgbWluOiAwLFxuICAgIG1heDogMTI4LFxuICB9LFxuICAnbnotdGFibGUtaW1nLW1heC13aWR0aCc6IHtcbiAgICBsYWJlbDogJ+ihqOagvOS4re+8muWbvueJh+acgOWkp+WuveW6picsXG4gICAgdHlwZTogJ3B4JyxcbiAgICBkZWZhdWx0OiAnMzJweCcsXG4gICAgbWluOiA4LFxuICAgIG1heDogMTI4LFxuICB9LFxuICAnbnotdGFibGUtaW1nLW1heC1oZWlnaHQnOiB7XG4gICAgbGFiZWw6ICfooajmoLzkuK3vvJrlm77niYfmnIDlpKfpq5jluqYnLFxuICAgIHR5cGU6ICdweCcsXG4gICAgZGVmYXVsdDogJzMycHgnLFxuICAgIG1pbjogOCxcbiAgICBtYXg6IDEyOCxcbiAgfSxcbn07XG4iXX0=