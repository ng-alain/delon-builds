/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
var STConfig = /** @class */ (function () {
    function STConfig() {
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
            lazyLoad: false,
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
        /**
         * Conditional expression rendering behavior, can be set to `hide` (default) or `disabled`
         */
        this.iifBehavior = 'hide';
    }
    STConfig.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ STConfig.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function STConfig_Factory() { return new STConfig(); }, token: STConfig, providedIn: "root" });
    return STConfig;
}());
export { STConfig };
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
     * 过滤按钮确认文本
     * @type {?}
     */
    STConfig.prototype.filterConfirmText;
    /**
     * 过滤按钮重置文本
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
    /**
     * Conditional expression rendering behavior, can be set to `hide` (default) or `disabled`
     * @type {?}
     */
    STConfig.prototype.iifBehavior;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy90YWJsZS8iLCJzb3VyY2VzIjpbInRhYmxlLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFlM0M7SUFBQTs7OztRQWlCRSxTQUFJLEdBQW9DLFNBQVMsQ0FBQzs7OztRQUlsRCxlQUFVLEdBQWEsSUFBSSxDQUFDOzs7O1FBSTVCLCtCQUEwQixHQUFhLEtBQUssQ0FBQzs7OztRQUU3QyxRQUFHLEdBQVc7WUFDWixJQUFJLEVBQUUsTUFBTTtZQUNaLE1BQU0sRUFBRSxLQUFLO1lBQ2IsU0FBUyxFQUFFLEtBQUs7WUFDaEIsUUFBUSxFQUFFLEtBQUs7WUFDZixNQUFNLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFO1NBQzdELENBQUM7Ozs7UUFFRixRQUFHLEdBQVc7WUFDWixNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRTtTQUM3QyxDQUFDOzs7O1FBRUYsU0FBSSxHQUFZO1lBQ2QsS0FBSyxFQUFFLElBQUk7WUFDWCxXQUFXLEVBQUUsS0FBSztZQUNsQixRQUFRLEVBQUUsUUFBUTtZQUNsQixTQUFTLEVBQUUsT0FBTztZQUNsQixJQUFJLEVBQUUsSUFBSTtZQUNWLFFBQVEsRUFBRSxLQUFLO1lBQ2YsU0FBUyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztZQUMvQixlQUFlLEVBQUUsS0FBSztZQUN0QixLQUFLLEVBQUUsSUFBSTtZQUNYLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLEtBQUssRUFBRSxJQUFJO1lBQ1gsV0FBVyxFQUFFLEdBQUc7U0FDakIsQ0FBQzs7Ozs7O1FBVUYsZUFBVSxHQUF5QixJQUFJLENBQUM7Ozs7UUFJeEMsY0FBUyxHQUF3QixJQUFJLENBQUM7Ozs7UUFJdEMsVUFBSyxHQUErQjtZQUNsQyxVQUFVLEVBQUUsUUFBUTtZQUNwQixJQUFJLEVBQUUsSUFBSTtZQUNWLEtBQUssRUFBRSxJQUFJO1NBQ1osQ0FBQzs7OztRQUlGLFdBQU0sR0FBZ0M7WUFDcEMsVUFBVSxFQUFFLFFBQVE7WUFDcEIsSUFBSSxFQUFFLElBQUk7WUFDVixNQUFNLEVBQUUsSUFBSTtZQUNaLFlBQVksRUFBRSxFQUFFO1NBQ2pCLENBQUM7Ozs7UUFJRixhQUFRLEdBQVksUUFBUSxDQUFDOzs7O1FBSTdCLGlCQUFZLEdBQVksR0FBRyxDQUFDOzs7O1FBWTVCLFlBQU8sR0FBWTtZQUNqQixJQUFJLEVBQUUsRUFBRTtZQUNSLEtBQUssRUFBRSxTQUFTO1lBQ2hCLElBQUksRUFBRSxLQUFLO1NBQ1osQ0FBQzs7Ozs7UUFLRixZQUFPLEdBQVksQ0FBQyxDQUFDOzs7O1FBUXJCLHFCQUFnQixHQUFhLEtBQUssQ0FBQzs7OztRQUluQyxvQkFBZSxHQUFhLEtBQUssQ0FBQzs7OztRQUlsQyxjQUFTLEdBQWlCO1lBQ3hCLElBQUksRUFBRSxTQUFTO1lBQ2YsY0FBYyxFQUFFLFVBQVU7U0FDM0IsQ0FBQztRQUNGLG9CQUFlLEdBQUksRUFBRSxDQUFDO1FBQ3RCLHVCQUFrQixHQUFJLEdBQUcsQ0FBQztRQUMxQix1QkFBa0IsR0FBSSxHQUFHLENBQUM7Ozs7UUFLMUIsZ0JBQVcsR0FBcUIsTUFBTSxDQUFDO0tBQ3hDOztnQkE1SUEsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7O21CQWZsQztDQTJKQyxBQTVJRCxJQTRJQztTQTNJWSxRQUFROzs7Ozs7SUFJbkIsc0JBQVk7Ozs7O0lBSVosc0JBQVk7Ozs7O0lBSVosNEJBQW1COzs7OztJQUluQix3QkFBa0Q7Ozs7O0lBSWxELDhCQUE0Qjs7Ozs7SUFJNUIsOENBQTZDOzs7OztJQUU3Qyx1QkFNRTs7Ozs7SUFFRix1QkFFRTs7Ozs7SUFFRix3QkFhRTs7Ozs7SUFJRiw4QkFBbUQ7Ozs7Ozs7SUFNbkQsOEJBQXdDOzs7OztJQUl4Qyw2QkFBc0M7Ozs7O0lBSXRDLHlCQUlFOzs7OztJQUlGLDBCQUtFOzs7OztJQUlGLDRCQUE2Qjs7Ozs7SUFJN0IsZ0NBQTRCOzs7OztJQUk1QixxQ0FBMkI7Ozs7O0lBSTNCLG1DQUF5Qjs7Ozs7SUFJekIsMkJBSUU7Ozs7OztJQUtGLDJCQUFxQjs7Ozs7SUFJckIsZ0NBQThCOzs7OztJQUk5QixvQ0FBbUM7Ozs7O0lBSW5DLG1DQUFrQzs7Ozs7SUFJbEMsNkJBR0U7O0lBQ0YsbUNBQXNCOztJQUN0QixzQ0FBMEI7O0lBQzFCLHNDQUEwQjs7Ozs7SUFLMUIsK0JBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgU1RDb2x1bW5CdXR0b25EcmF3ZXJDb25maWcsXG4gIFNUQ29sdW1uQnV0dG9uTW9kYWxDb25maWcsXG4gIFNUSWNvbixcbiAgU1RNdWx0aVNvcnQsXG4gIFNUUGFnZSxcbiAgU1RSZXEsXG4gIFNUUmVzLFxuICBTVFJvd0NsYXNzTmFtZSxcbiAgU1RTaW5nbGVTb3J0LFxuICBTVFdpZHRoTW9kZSxcbiAgSWlmQmVoYXZpb3JUeXBlLFxufSBmcm9tICcuL3RhYmxlLmludGVyZmFjZXMnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIFNUQ29uZmlnIHtcbiAgLyoqXG4gICAqIOi1t+Wni+mhteegge+8jOm7mOiupOS4uu+8mmAxYFxuICAgKi9cbiAgcGk/OiBudW1iZXI7XG4gIC8qKlxuICAgKiDmr4/pobXmlbDph4/vvIzlvZPorr7nva7kuLogYDBgIOihqOekuuS4jeWIhumhte+8jOm7mOiupO+8mmAxMGBcbiAgICovXG4gIHBzPzogbnVtYmVyO1xuICAvKipcbiAgICog5piv5ZCm5pi+56S66L655qGGXG4gICAqL1xuICBib3JkZXJlZD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiB0YWJsZeWkp+Wwj1xuICAgKi9cbiAgc2l6ZT86ICdzbWFsbCcgfCAnbWlkZGxlJyB8ICdkZWZhdWx0JyA9ICdkZWZhdWx0JztcbiAgLyoqXG4gICAqIOaYr+WQpuW8gOWQr+WTjeW6lOW8j++8jOm7mOiupO+8mmB0cnVlYFxuICAgKi9cbiAgcmVzcG9uc2l2ZT86IGJvb2xlYW4gPSB0cnVlO1xuICAvKipcbiAgICog5piv5ZCm5Zyo5bCP5bGP5bmV5LiL5omN5pi+56S66aG26YOo5LiO5bqV6YOo77yM6buY6K6k77yaYGZhbHNlYFxuICAgKi9cbiAgcmVzcG9uc2l2ZUhpZGVIZWFkZXJGb290ZXI/OiBib29sZWFuID0gZmFsc2U7XG4gIC8qKiDor7fmsYLkvZPphY3nva4gKi9cbiAgcmVxPzogU1RSZXEgPSB7XG4gICAgdHlwZTogJ3BhZ2UnLFxuICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgYWxsSW5Cb2R5OiBmYWxzZSxcbiAgICBsYXp5TG9hZDogZmFsc2UsXG4gICAgcmVOYW1lOiB7IHBpOiAncGknLCBwczogJ3BzJywgc2tpcDogJ3NraXAnLCBsaW1pdDogJ2xpbWl0JyB9LFxuICB9O1xuICAvKiog6L+U5Zue5L2T6YWN572uICovXG4gIHJlcz86IFNUUmVzID0ge1xuICAgIHJlTmFtZTogeyBsaXN0OiBbJ2xpc3QnXSwgdG90YWw6IFsndG90YWwnXSB9LFxuICB9O1xuICAvKiog6L+U5Zue5L2T6YWN572uICovXG4gIHBhZ2U/OiBTVFBhZ2UgPSB7XG4gICAgZnJvbnQ6IHRydWUsXG4gICAgemVyb0luZGV4ZWQ6IGZhbHNlLFxuICAgIHBvc2l0aW9uOiAnYm90dG9tJyxcbiAgICBwbGFjZW1lbnQ6ICdyaWdodCcsXG4gICAgc2hvdzogdHJ1ZSxcbiAgICBzaG93U2l6ZTogZmFsc2UsXG4gICAgcGFnZVNpemVzOiBbMTAsIDIwLCAzMCwgNDAsIDUwXSxcbiAgICBzaG93UXVpY2tKdW1wZXI6IGZhbHNlLFxuICAgIHRvdGFsOiB0cnVlLFxuICAgIGluZGV4UmVzZXQ6IHRydWUsXG4gICAgdG9Ub3A6IHRydWUsXG4gICAgdG9Ub3BPZmZzZXQ6IDEwMCxcbiAgfTtcbiAgLyoqXG4gICAqIOmHjeWRveWQjeaOkuW6j+WAvO+8jGBjb2x1bW5zYCDnmoTph43lkb3lkI3pq5jkuo7lsZ7mgKdcbiAgICovXG4gIHNvcnRSZU5hbWU/OiB7IGFzY2VuZD86IHN0cmluZzsgZGVzY2VuZD86IHN0cmluZyB9O1xuICAvKipcbiAgICog5Y2V5o6S5bqP6KeE5YiZXG4gICAqIC0g6Iul5LiN5oyH5a6a77yM5YiZ6L+U5Zue77yaYGNvbHVtbk5hbWU9YXNjZW5kfGRlc2NlbmRgXG4gICAqIC0g6Iul5oyH5a6a77yM5YiZ6L+U5Zue77yaYHNvcnQ9Y29sdW1uTmFtZS4oYXNjZW5kfGRlc2NlbmQpYFxuICAgKi9cbiAgc2luZ2xlU29ydD86IFNUU2luZ2xlU29ydCB8IG51bGwgPSBudWxsO1xuICAvKipcbiAgICog5piv5ZCm5aSa5o6S5bqP77yM5b2TIGBzb3J0YCDlpJrkuKrnm7jlkIzlgLzml7boh6rliqjlkIjlubbvvIzlu7rorq7lkI7nq6/mlK/mjIHml7bkvb/nlKhcbiAgICovXG4gIG11bHRpU29ydD86IFNUTXVsdGlTb3J0IHwgbnVsbCA9IG51bGw7XG4gIC8qKlxuICAgKiDmjInpkq7mqKHmgIHmoYbphY3nva5cbiAgICovXG4gIG1vZGFsPzogU1RDb2x1bW5CdXR0b25Nb2RhbENvbmZpZyA9IHtcbiAgICBwYXJhbXNOYW1lOiAncmVjb3JkJyxcbiAgICBzaXplOiAnbGcnLFxuICAgIGV4YWN0OiB0cnVlLFxuICB9O1xuICAvKipcbiAgICog5oyJ6ZKu5oq95bGJ6YWN572uXG4gICAqL1xuICBkcmF3ZXI/OiBTVENvbHVtbkJ1dHRvbkRyYXdlckNvbmZpZyA9IHtcbiAgICBwYXJhbXNOYW1lOiAncmVjb3JkJyxcbiAgICBzaXplOiAnbWQnLFxuICAgIGZvb3RlcjogdHJ1ZSxcbiAgICBmb290ZXJIZWlnaHQ6IDU1LFxuICB9O1xuICAvKipcbiAgICog5rCU5rOh56Gu6K6k5qGG5YaF5a65XG4gICAqL1xuICBwb3BUaXRsZT86IHN0cmluZyA9ICfnoa7orqTliKDpmaTlkJfvvJ8nO1xuICAvKipcbiAgICog6KGM5Y2V5Ye75aSa5bCR5pe26ZW/5LmL57G75Li65Y+M5Ye777yI5Y2V5L2N77ya5q+r56eS77yJ77yM6buY6K6k77yaYDIwMGBcbiAgICovXG4gIHJvd0NsaWNrVGltZT86IG51bWJlciA9IDIwMDtcbiAgLyoqXG4gICAqIOi/h+a7pOaMiemSruehruiupOaWh+acrFxuICAgKi9cbiAgZmlsdGVyQ29uZmlybVRleHQ/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiDov4fmu6TmjInpkq7ph43nva7mlofmnKxcbiAgICovXG4gIGZpbHRlckNsZWFyVGV4dD86IHN0cmluZztcbiAgLyoqXG4gICAqIOaMiemSruWbvuagh1xuICAgKi9cbiAgYnRuSWNvbj86IFNUSWNvbiA9IHtcbiAgICB0eXBlOiAnJyxcbiAgICB0aGVtZTogJ291dGxpbmUnLFxuICAgIHNwaW46IGZhbHNlLFxuICB9O1xuICAvKipcbiAgICog6KGM5Y+357Si5byV77yM6buY6K6k77yaYDFgXG4gICAqIC0g6K6h566X6KeE5YiZ5Li677yaYGluZGV4ICsgbm9JbmRleGBcbiAgICovXG4gIG5vSW5kZXg/OiBudW1iZXIgPSAxO1xuICAvKipcbiAgICog6KGo5qC86KGM55qE57G75ZCNXG4gICAqL1xuICByb3dDbGFzc05hbWU/OiBTVFJvd0NsYXNzTmFtZTtcbiAgLyoqXG4gICAqIOmAmui/h+eCueWHu+ihjOadpeWxleW8gOWtkOihjFxuICAgKi9cbiAgZXhwYW5kUm93QnlDbGljaz86IGJvb2xlYW4gPSBmYWxzZTtcbiAgLyoqXG4gICAqIOaJi+mjjueQtOaooeW8j1xuICAgKi9cbiAgZXhwYW5kQWNjb3JkaW9uPzogYm9vbGVhbiA9IGZhbHNlO1xuICAvKipcbiAgICog5oyH5a6aIGB3aWR0aGAg5qih5byPXG4gICAqL1xuICB3aWR0aE1vZGU/OiBTVFdpZHRoTW9kZSA9IHtcbiAgICB0eXBlOiAnZGVmYXVsdCcsXG4gICAgc3RyaWN0QmVoYXZpb3I6ICd0cnVuY2F0ZScsXG4gIH07XG4gIHZpcnR1YWxJdGVtU2l6ZT8gPSA1NDtcbiAgdmlydHVhbE1heEJ1ZmZlclB4PyA9IDIwMDtcbiAgdmlydHVhbE1pbkJ1ZmZlclB4PyA9IDEwMDtcblxuICAvKipcbiAgICogQ29uZGl0aW9uYWwgZXhwcmVzc2lvbiByZW5kZXJpbmcgYmVoYXZpb3IsIGNhbiBiZSBzZXQgdG8gYGhpZGVgIChkZWZhdWx0KSBvciBgZGlzYWJsZWRgXG4gICAqL1xuICBpaWZCZWhhdmlvcj86IElpZkJlaGF2aW9yVHlwZSA9ICdoaWRlJztcbn1cbiJdfQ==