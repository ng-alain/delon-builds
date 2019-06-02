/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class STConfig {
    constructor() {
        /**
         * table大小
         */
        this.size = 'default';
        /**
         * 是否开启响应式，默认：`true`
         */
        this.responsive = true;
        /**
         * 是否在小屏幕下才显示顶部与底部，默认：`false`
         */
        this.responsiveHideHeaderFooter = false;
        /**
         * 请求体配置
         */
        this.req = {
            type: 'page',
            method: 'GET',
            allInBody: false,
            reName: { pi: 'pi', ps: 'ps', skip: 'skip', limit: 'limit' },
        };
        /**
         * 返回体配置
         */
        this.res = {
            reName: { list: ['list'], total: ['total'] },
        };
        /**
         * 返回体配置
         */
        this.page = {
            front: true,
            zeroIndexed: false,
            position: 'bottom',
            placement: 'right',
            show: true,
            showSize: false,
            pageSizes: [10, 20, 30, 40, 50],
            showQuickJumper: false,
            total: true,
            indexReset: true,
            toTop: true,
            toTopOffset: 100,
        };
        /**
         * 单排序规则
         * - 若不指定，则返回：`columnName=ascend|descend`
         * - 若指定，则返回：`sort=columnName.(ascend|descend)`
         */
        this.singleSort = null;
        /**
         * 是否多排序，当 `sort` 多个相同值时自动合并，建议后端支持时使用
         */
        this.multiSort = null;
        /**
         * 按钮模态框配置
         */
        this.modal = {
            paramsName: 'record',
            size: 'lg',
            exact: true,
        };
        /**
         * 按钮抽屉配置
         */
        this.drawer = {
            paramsName: 'record',
            size: 'md',
            footer: true,
            footerHeight: 55,
        };
        /**
         * 气泡确认框内容
         */
        this.popTitle = '确认删除吗？';
        /**
         * 行单击多少时长之类为双击（单位：毫秒），默认：`200`
         */
        this.rowClickTime = 200;
        /**
         * 过滤按钮确认文本，默认：`确认`
         */
        this.filterConfirmText = '确认';
        /**
         * 过滤按钮重置文本，默认：`重置`
         */
        this.filterClearText = '重置';
        /**
         * 按钮图标
         */
        this.btnIcon = {
            type: '',
            theme: 'outline',
            spin: false,
        };
        /**
         * 行号索引，默认：`1`
         * - 计算规则为：`index + noIndex`
         */
        this.noIndex = 1;
        /**
         * 通过点击行来展开子行
         */
        this.expandRowByClick = false;
        /**
         * 手风琴模式
         */
        this.expandAccordion = false;
        /**
         * 指定 `width` 模式
         */
        this.widthMode = {
            type: 'default',
            strictBehavior: 'truncate',
        };
        this.virtualItemSize = 54;
        this.virtualMaxBufferPx = 200;
        this.virtualMinBufferPx = 100;
    }
}
STConfig.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */ STConfig.ngInjectableDef = i0.defineInjectable({ factory: function STConfig_Factory() { return new STConfig(); }, token: STConfig, providedIn: "root" });
if (false) {
    /**
     * 起始页码，默认为：`1`
     * @type {?}
     */
    STConfig.prototype.pi;
    /**
     * 每页数量，当设置为 `0` 表示不分页，默认：`10`
     * @type {?}
     */
    STConfig.prototype.ps;
    /**
     * 是否显示边框
     * @type {?}
     */
    STConfig.prototype.bordered;
    /**
     * table大小
     * @type {?}
     */
    STConfig.prototype.size;
    /**
     * 是否开启响应式，默认：`true`
     * @type {?}
     */
    STConfig.prototype.responsive;
    /**
     * 是否在小屏幕下才显示顶部与底部，默认：`false`
     * @type {?}
     */
    STConfig.prototype.responsiveHideHeaderFooter;
    /**
     * 请求体配置
     * @type {?}
     */
    STConfig.prototype.req;
    /**
     * 返回体配置
     * @type {?}
     */
    STConfig.prototype.res;
    /**
     * 返回体配置
     * @type {?}
     */
    STConfig.prototype.page;
    /**
     * 重命名排序值，`columns` 的重命名高于属性
     * @type {?}
     */
    STConfig.prototype.sortReName;
    /**
     * 单排序规则
     * - 若不指定，则返回：`columnName=ascend|descend`
     * - 若指定，则返回：`sort=columnName.(ascend|descend)`
     * @type {?}
     */
    STConfig.prototype.singleSort;
    /**
     * 是否多排序，当 `sort` 多个相同值时自动合并，建议后端支持时使用
     * @type {?}
     */
    STConfig.prototype.multiSort;
    /**
     * 按钮模态框配置
     * @type {?}
     */
    STConfig.prototype.modal;
    /**
     * 按钮抽屉配置
     * @type {?}
     */
    STConfig.prototype.drawer;
    /**
     * 气泡确认框内容
     * @type {?}
     */
    STConfig.prototype.popTitle;
    /**
     * 行单击多少时长之类为双击（单位：毫秒），默认：`200`
     * @type {?}
     */
    STConfig.prototype.rowClickTime;
    /**
     * 过滤按钮确认文本，默认：`确认`
     * @type {?}
     */
    STConfig.prototype.filterConfirmText;
    /**
     * 过滤按钮重置文本，默认：`重置`
     * @type {?}
     */
    STConfig.prototype.filterClearText;
    /**
     * 按钮图标
     * @type {?}
     */
    STConfig.prototype.btnIcon;
    /**
     * 行号索引，默认：`1`
     * - 计算规则为：`index + noIndex`
     * @type {?}
     */
    STConfig.prototype.noIndex;
    /**
     * 表格行的类名
     * @type {?}
     */
    STConfig.prototype.rowClassName;
    /**
     * 通过点击行来展开子行
     * @type {?}
     */
    STConfig.prototype.expandRowByClick;
    /**
     * 手风琴模式
     * @type {?}
     */
    STConfig.prototype.expandAccordion;
    /**
     * 指定 `width` 模式
     * @type {?}
     */
    STConfig.prototype.widthMode;
    /** @type {?} */
    STConfig.prototype.virtualItemSize;
    /** @type {?} */
    STConfig.prototype.virtualMaxBufferPx;
    /** @type {?} */
    STConfig.prototype.virtualMinBufferPx;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy90YWJsZS8iLCJzb3VyY2VzIjpbInRhYmxlLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFlM0MsTUFBTSxPQUFPLFFBQVE7SUFEckI7Ozs7UUFpQkUsU0FBSSxHQUFvQyxTQUFTLENBQUM7Ozs7UUFJbEQsZUFBVSxHQUFhLElBQUksQ0FBQzs7OztRQUk1QiwrQkFBMEIsR0FBYSxLQUFLLENBQUM7Ozs7UUFFN0MsUUFBRyxHQUFXO1lBQ1osSUFBSSxFQUFFLE1BQU07WUFDWixNQUFNLEVBQUUsS0FBSztZQUNiLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLE1BQU0sRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUU7U0FDN0QsQ0FBQzs7OztRQUVGLFFBQUcsR0FBVztZQUNaLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1NBQzdDLENBQUM7Ozs7UUFFRixTQUFJLEdBQVk7WUFDZCxLQUFLLEVBQUUsSUFBSTtZQUNYLFdBQVcsRUFBRSxLQUFLO1lBQ2xCLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFNBQVMsRUFBRSxPQUFPO1lBQ2xCLElBQUksRUFBRSxJQUFJO1lBQ1YsUUFBUSxFQUFFLEtBQUs7WUFDZixTQUFTLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO1lBQy9CLGVBQWUsRUFBRSxLQUFLO1lBQ3RCLEtBQUssRUFBRSxJQUFJO1lBQ1gsVUFBVSxFQUFFLElBQUk7WUFDaEIsS0FBSyxFQUFFLElBQUk7WUFDWCxXQUFXLEVBQUUsR0FBRztTQUNqQixDQUFDOzs7Ozs7UUFVRixlQUFVLEdBQXlCLElBQUksQ0FBQzs7OztRQUl4QyxjQUFTLEdBQXdCLElBQUksQ0FBQzs7OztRQUl0QyxVQUFLLEdBQStCO1lBQ2xDLFVBQVUsRUFBRSxRQUFRO1lBQ3BCLElBQUksRUFBRSxJQUFJO1lBQ1YsS0FBSyxFQUFFLElBQUk7U0FDWixDQUFDOzs7O1FBSUYsV0FBTSxHQUFnQztZQUNwQyxVQUFVLEVBQUUsUUFBUTtZQUNwQixJQUFJLEVBQUUsSUFBSTtZQUNWLE1BQU0sRUFBRSxJQUFJO1lBQ1osWUFBWSxFQUFFLEVBQUU7U0FDakIsQ0FBQzs7OztRQUlGLGFBQVEsR0FBWSxRQUFRLENBQUM7Ozs7UUFJN0IsaUJBQVksR0FBWSxHQUFHLENBQUM7Ozs7UUFJNUIsc0JBQWlCLEdBQVksSUFBSSxDQUFDOzs7O1FBSWxDLG9CQUFlLEdBQVksSUFBSSxDQUFDOzs7O1FBSWhDLFlBQU8sR0FBWTtZQUNqQixJQUFJLEVBQUUsRUFBRTtZQUNSLEtBQUssRUFBRSxTQUFTO1lBQ2hCLElBQUksRUFBRSxLQUFLO1NBQ1osQ0FBQzs7Ozs7UUFLRixZQUFPLEdBQVksQ0FBQyxDQUFDOzs7O1FBUXJCLHFCQUFnQixHQUFhLEtBQUssQ0FBQzs7OztRQUluQyxvQkFBZSxHQUFhLEtBQUssQ0FBQzs7OztRQUlsQyxjQUFTLEdBQWlCO1lBQ3hCLElBQUksRUFBRSxTQUFTO1lBQ2YsY0FBYyxFQUFFLFVBQVU7U0FDM0IsQ0FBQztRQUNGLG9CQUFlLEdBQUksRUFBRSxDQUFDO1FBQ3RCLHVCQUFrQixHQUFJLEdBQUcsQ0FBQztRQUMxQix1QkFBa0IsR0FBSSxHQUFHLENBQUM7S0FDM0I7OztZQXRJQSxVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7Ozs7OztJQUtoQyxzQkFBWTs7Ozs7SUFJWixzQkFBWTs7Ozs7SUFJWiw0QkFBbUI7Ozs7O0lBSW5CLHdCQUFrRDs7Ozs7SUFJbEQsOEJBQTRCOzs7OztJQUk1Qiw4Q0FBNkM7Ozs7O0lBRTdDLHVCQUtFOzs7OztJQUVGLHVCQUVFOzs7OztJQUVGLHdCQWFFOzs7OztJQUlGLDhCQUFtRDs7Ozs7OztJQU1uRCw4QkFBd0M7Ozs7O0lBSXhDLDZCQUFzQzs7Ozs7SUFJdEMseUJBSUU7Ozs7O0lBSUYsMEJBS0U7Ozs7O0lBSUYsNEJBQTZCOzs7OztJQUk3QixnQ0FBNEI7Ozs7O0lBSTVCLHFDQUFrQzs7Ozs7SUFJbEMsbUNBQWdDOzs7OztJQUloQywyQkFJRTs7Ozs7O0lBS0YsMkJBQXFCOzs7OztJQUlyQixnQ0FBOEI7Ozs7O0lBSTlCLG9DQUFtQzs7Ozs7SUFJbkMsbUNBQWtDOzs7OztJQUlsQyw2QkFHRTs7SUFDRixtQ0FBc0I7O0lBQ3RCLHNDQUEwQjs7SUFDMUIsc0NBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgU1RDb2x1bW5CdXR0b25EcmF3ZXJDb25maWcsXG4gIFNUQ29sdW1uQnV0dG9uTW9kYWxDb25maWcsXG4gIFNUSWNvbixcbiAgU1RNdWx0aVNvcnQsXG4gIFNUUGFnZSxcbiAgU1RSZXEsXG4gIFNUUmVzLFxuICBTVFJvd0NsYXNzTmFtZSxcbiAgU1RTaW5nbGVTb3J0LFxuICBTVFdpZHRoTW9kZSxcbn0gZnJvbSAnLi90YWJsZS5pbnRlcmZhY2VzJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBTVENvbmZpZyB7XG4gIC8qKlxuICAgKiDotbflp4vpobXnoIHvvIzpu5jorqTkuLrvvJpgMWBcbiAgICovXG4gIHBpPzogbnVtYmVyO1xuICAvKipcbiAgICog5q+P6aG15pWw6YeP77yM5b2T6K6+572u5Li6IGAwYCDooajnpLrkuI3liIbpobXvvIzpu5jorqTvvJpgMTBgXG4gICAqL1xuICBwcz86IG51bWJlcjtcbiAgLyoqXG4gICAqIOaYr+WQpuaYvuekuui+ueahhlxuICAgKi9cbiAgYm9yZGVyZWQ/OiBib29sZWFuO1xuICAvKipcbiAgICogdGFibGXlpKflsI9cbiAgICovXG4gIHNpemU/OiAnc21hbGwnIHwgJ21pZGRsZScgfCAnZGVmYXVsdCcgPSAnZGVmYXVsdCc7XG4gIC8qKlxuICAgKiDmmK/lkKblvIDlkK/lk43lupTlvI/vvIzpu5jorqTvvJpgdHJ1ZWBcbiAgICovXG4gIHJlc3BvbnNpdmU/OiBib29sZWFuID0gdHJ1ZTtcbiAgLyoqXG4gICAqIOaYr+WQpuWcqOWwj+Wxj+W5leS4i+aJjeaYvuekuumhtumDqOS4juW6lemDqO+8jOm7mOiupO+8mmBmYWxzZWBcbiAgICovXG4gIHJlc3BvbnNpdmVIaWRlSGVhZGVyRm9vdGVyPzogYm9vbGVhbiA9IGZhbHNlO1xuICAvKiog6K+35rGC5L2T6YWN572uICovXG4gIHJlcT86IFNUUmVxID0ge1xuICAgIHR5cGU6ICdwYWdlJyxcbiAgICBtZXRob2Q6ICdHRVQnLFxuICAgIGFsbEluQm9keTogZmFsc2UsXG4gICAgcmVOYW1lOiB7IHBpOiAncGknLCBwczogJ3BzJywgc2tpcDogJ3NraXAnLCBsaW1pdDogJ2xpbWl0JyB9LFxuICB9O1xuICAvKiog6L+U5Zue5L2T6YWN572uICovXG4gIHJlcz86IFNUUmVzID0ge1xuICAgIHJlTmFtZTogeyBsaXN0OiBbJ2xpc3QnXSwgdG90YWw6IFsndG90YWwnXSB9LFxuICB9O1xuICAvKiog6L+U5Zue5L2T6YWN572uICovXG4gIHBhZ2U/OiBTVFBhZ2UgPSB7XG4gICAgZnJvbnQ6IHRydWUsXG4gICAgemVyb0luZGV4ZWQ6IGZhbHNlLFxuICAgIHBvc2l0aW9uOiAnYm90dG9tJyxcbiAgICBwbGFjZW1lbnQ6ICdyaWdodCcsXG4gICAgc2hvdzogdHJ1ZSxcbiAgICBzaG93U2l6ZTogZmFsc2UsXG4gICAgcGFnZVNpemVzOiBbMTAsIDIwLCAzMCwgNDAsIDUwXSxcbiAgICBzaG93UXVpY2tKdW1wZXI6IGZhbHNlLFxuICAgIHRvdGFsOiB0cnVlLFxuICAgIGluZGV4UmVzZXQ6IHRydWUsXG4gICAgdG9Ub3A6IHRydWUsXG4gICAgdG9Ub3BPZmZzZXQ6IDEwMCxcbiAgfTtcbiAgLyoqXG4gICAqIOmHjeWRveWQjeaOkuW6j+WAvO+8jGBjb2x1bW5zYCDnmoTph43lkb3lkI3pq5jkuo7lsZ7mgKdcbiAgICovXG4gIHNvcnRSZU5hbWU/OiB7IGFzY2VuZD86IHN0cmluZzsgZGVzY2VuZD86IHN0cmluZyB9O1xuICAvKipcbiAgICog5Y2V5o6S5bqP6KeE5YiZXG4gICAqIC0g6Iul5LiN5oyH5a6a77yM5YiZ6L+U5Zue77yaYGNvbHVtbk5hbWU9YXNjZW5kfGRlc2NlbmRgXG4gICAqIC0g6Iul5oyH5a6a77yM5YiZ6L+U5Zue77yaYHNvcnQ9Y29sdW1uTmFtZS4oYXNjZW5kfGRlc2NlbmQpYFxuICAgKi9cbiAgc2luZ2xlU29ydD86IFNUU2luZ2xlU29ydCB8IG51bGwgPSBudWxsO1xuICAvKipcbiAgICog5piv5ZCm5aSa5o6S5bqP77yM5b2TIGBzb3J0YCDlpJrkuKrnm7jlkIzlgLzml7boh6rliqjlkIjlubbvvIzlu7rorq7lkI7nq6/mlK/mjIHml7bkvb/nlKhcbiAgICovXG4gIG11bHRpU29ydD86IFNUTXVsdGlTb3J0IHwgbnVsbCA9IG51bGw7XG4gIC8qKlxuICAgKiDmjInpkq7mqKHmgIHmoYbphY3nva5cbiAgICovXG4gIG1vZGFsPzogU1RDb2x1bW5CdXR0b25Nb2RhbENvbmZpZyA9IHtcbiAgICBwYXJhbXNOYW1lOiAncmVjb3JkJyxcbiAgICBzaXplOiAnbGcnLFxuICAgIGV4YWN0OiB0cnVlLFxuICB9O1xuICAvKipcbiAgICog5oyJ6ZKu5oq95bGJ6YWN572uXG4gICAqL1xuICBkcmF3ZXI/OiBTVENvbHVtbkJ1dHRvbkRyYXdlckNvbmZpZyA9IHtcbiAgICBwYXJhbXNOYW1lOiAncmVjb3JkJyxcbiAgICBzaXplOiAnbWQnLFxuICAgIGZvb3RlcjogdHJ1ZSxcbiAgICBmb290ZXJIZWlnaHQ6IDU1LFxuICB9O1xuICAvKipcbiAgICog5rCU5rOh56Gu6K6k5qGG5YaF5a65XG4gICAqL1xuICBwb3BUaXRsZT86IHN0cmluZyA9ICfnoa7orqTliKDpmaTlkJfvvJ8nO1xuICAvKipcbiAgICog6KGM5Y2V5Ye75aSa5bCR5pe26ZW/5LmL57G75Li65Y+M5Ye777yI5Y2V5L2N77ya5q+r56eS77yJ77yM6buY6K6k77yaYDIwMGBcbiAgICovXG4gIHJvd0NsaWNrVGltZT86IG51bWJlciA9IDIwMDtcbiAgLyoqXG4gICAqIOi/h+a7pOaMiemSruehruiupOaWh+acrO+8jOm7mOiupO+8mmDnoa7orqRgXG4gICAqL1xuICBmaWx0ZXJDb25maXJtVGV4dD86IHN0cmluZyA9ICfnoa7orqQnO1xuICAvKipcbiAgICog6L+H5ruk5oyJ6ZKu6YeN572u5paH5pys77yM6buY6K6k77yaYOmHjee9rmBcbiAgICovXG4gIGZpbHRlckNsZWFyVGV4dD86IHN0cmluZyA9ICfph43nva4nO1xuICAvKipcbiAgICog5oyJ6ZKu5Zu+5qCHXG4gICAqL1xuICBidG5JY29uPzogU1RJY29uID0ge1xuICAgIHR5cGU6ICcnLFxuICAgIHRoZW1lOiAnb3V0bGluZScsXG4gICAgc3BpbjogZmFsc2UsXG4gIH07XG4gIC8qKlxuICAgKiDooYzlj7fntKLlvJXvvIzpu5jorqTvvJpgMWBcbiAgICogLSDorqHnrpfop4TliJnkuLrvvJpgaW5kZXggKyBub0luZGV4YFxuICAgKi9cbiAgbm9JbmRleD86IG51bWJlciA9IDE7XG4gIC8qKlxuICAgKiDooajmoLzooYznmoTnsbvlkI1cbiAgICovXG4gIHJvd0NsYXNzTmFtZT86IFNUUm93Q2xhc3NOYW1lO1xuICAvKipcbiAgICog6YCa6L+H54K55Ye76KGM5p2l5bGV5byA5a2Q6KGMXG4gICAqL1xuICBleHBhbmRSb3dCeUNsaWNrPzogYm9vbGVhbiA9IGZhbHNlO1xuICAvKipcbiAgICog5omL6aOO55C05qih5byPXG4gICAqL1xuICBleHBhbmRBY2NvcmRpb24/OiBib29sZWFuID0gZmFsc2U7XG4gIC8qKlxuICAgKiDmjIflrpogYHdpZHRoYCDmqKHlvI9cbiAgICovXG4gIHdpZHRoTW9kZT86IFNUV2lkdGhNb2RlID0ge1xuICAgIHR5cGU6ICdkZWZhdWx0JyxcbiAgICBzdHJpY3RCZWhhdmlvcjogJ3RydW5jYXRlJyxcbiAgfTtcbiAgdmlydHVhbEl0ZW1TaXplPyA9IDU0O1xuICB2aXJ0dWFsTWF4QnVmZmVyUHg/ID0gMjAwO1xuICB2aXJ0dWFsTWluQnVmZmVyUHg/ID0gMTAwO1xufVxuIl19