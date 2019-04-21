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
         * 是否隐藏头和尾，当小屏幕下才显示，默认：`false`
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
         * 指定 `width` 模式
         */
        this.widthMode = {
            type: 'default',
            strictBehavior: 'truncate',
        };
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
     * 是否隐藏头和尾，当小屏幕下才显示，默认：`false`
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
     * 指定 `width` 模式
     * @type {?}
     */
    STConfig.prototype.widthMode;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy90YWJsZS8iLCJzb3VyY2VzIjpbInRhYmxlLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFlM0MsTUFBTSxPQUFPLFFBQVE7SUFEckI7Ozs7UUFpQkUsU0FBSSxHQUFvQyxTQUFTLENBQUM7Ozs7UUFJbEQsK0JBQTBCLEdBQWEsS0FBSyxDQUFDOzs7O1FBRTdDLFFBQUcsR0FBVztZQUNaLElBQUksRUFBRSxNQUFNO1lBQ1osTUFBTSxFQUFFLEtBQUs7WUFDYixTQUFTLEVBQUUsS0FBSztZQUNoQixNQUFNLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFO1NBQzdELENBQUM7Ozs7UUFFRixRQUFHLEdBQVc7WUFDWixNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRTtTQUM3QyxDQUFDOzs7O1FBRUYsU0FBSSxHQUFZO1lBQ2QsS0FBSyxFQUFFLElBQUk7WUFDWCxXQUFXLEVBQUUsS0FBSztZQUNsQixTQUFTLEVBQUUsT0FBTztZQUNsQixJQUFJLEVBQUUsSUFBSTtZQUNWLFFBQVEsRUFBRSxLQUFLO1lBQ2YsU0FBUyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztZQUMvQixlQUFlLEVBQUUsS0FBSztZQUN0QixLQUFLLEVBQUUsSUFBSTtZQUNYLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLEtBQUssRUFBRSxJQUFJO1lBQ1gsV0FBVyxFQUFFLEdBQUc7U0FDakIsQ0FBQzs7Ozs7O1FBVUYsZUFBVSxHQUFrQixJQUFJLENBQUM7Ozs7UUFJakMsY0FBUyxHQUFpQixJQUFJLENBQUM7Ozs7UUFJL0IsVUFBSyxHQUErQjtZQUNsQyxVQUFVLEVBQUUsUUFBUTtZQUNwQixJQUFJLEVBQUUsSUFBSTtZQUNWLEtBQUssRUFBRSxJQUFJO1NBQ1osQ0FBQzs7OztRQUlGLFdBQU0sR0FBZ0M7WUFDcEMsVUFBVSxFQUFFLFFBQVE7WUFDcEIsSUFBSSxFQUFFLElBQUk7WUFDVixNQUFNLEVBQUUsSUFBSTtZQUNaLFlBQVksRUFBRSxFQUFFO1NBQ2pCLENBQUM7Ozs7UUFJRixhQUFRLEdBQVksUUFBUSxDQUFDOzs7O1FBSTdCLGlCQUFZLEdBQVksR0FBRyxDQUFDOzs7O1FBSTVCLHNCQUFpQixHQUFZLElBQUksQ0FBQzs7OztRQUlsQyxvQkFBZSxHQUFZLElBQUksQ0FBQzs7OztRQUloQyxZQUFPLEdBQVk7WUFDakIsSUFBSSxFQUFFLEVBQUU7WUFDUixLQUFLLEVBQUUsU0FBUztZQUNoQixJQUFJLEVBQUUsS0FBSztTQUNaLENBQUM7Ozs7O1FBS0YsWUFBTyxHQUFZLENBQUMsQ0FBQzs7OztRQVFyQixxQkFBZ0IsR0FBYSxLQUFLLENBQUM7Ozs7UUFJbkMsY0FBUyxHQUFpQjtZQUN4QixJQUFJLEVBQUUsU0FBUztZQUNmLGNBQWMsRUFBRSxVQUFVO1NBQzNCLENBQUM7S0FDSDs7O1lBMUhBLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7Ozs7O0lBS2hDLHNCQUFZOzs7OztJQUlaLHNCQUFZOzs7OztJQUlaLDRCQUFtQjs7Ozs7SUFJbkIsd0JBQWtEOzs7OztJQUlsRCw4Q0FBNkM7Ozs7O0lBRTdDLHVCQUtFOzs7OztJQUVGLHVCQUVFOzs7OztJQUVGLHdCQVlFOzs7OztJQUlGLDhCQUFtRDs7Ozs7OztJQU1uRCw4QkFBaUM7Ozs7O0lBSWpDLDZCQUErQjs7Ozs7SUFJL0IseUJBSUU7Ozs7O0lBSUYsMEJBS0U7Ozs7O0lBSUYsNEJBQTZCOzs7OztJQUk3QixnQ0FBNEI7Ozs7O0lBSTVCLHFDQUFrQzs7Ozs7SUFJbEMsbUNBQWdDOzs7OztJQUloQywyQkFJRTs7Ozs7O0lBS0YsMkJBQXFCOzs7OztJQUlyQixnQ0FBOEI7Ozs7O0lBSTlCLG9DQUFtQzs7Ozs7SUFJbkMsNkJBR0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBTVENvbHVtbkJ1dHRvbkRyYXdlckNvbmZpZyxcbiAgU1RDb2x1bW5CdXR0b25Nb2RhbENvbmZpZyxcbiAgU1RJY29uLFxuICBTVE11bHRpU29ydCxcbiAgU1RQYWdlLFxuICBTVFJlcSxcbiAgU1RSZXMsXG4gIFNUUm93Q2xhc3NOYW1lLFxuICBTVFNpbmdsZVNvcnQsXG4gIFNUV2lkdGhNb2RlLFxufSBmcm9tICcuL3RhYmxlLmludGVyZmFjZXMnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIFNUQ29uZmlnIHtcbiAgLyoqXG4gICAqIOi1t+Wni+mhteegge+8jOm7mOiupOS4uu+8mmAxYFxuICAgKi9cbiAgcGk/OiBudW1iZXI7XG4gIC8qKlxuICAgKiDmr4/pobXmlbDph4/vvIzlvZPorr7nva7kuLogYDBgIOihqOekuuS4jeWIhumhte+8jOm7mOiupO+8mmAxMGBcbiAgICovXG4gIHBzPzogbnVtYmVyO1xuICAvKipcbiAgICog5piv5ZCm5pi+56S66L655qGGXG4gICAqL1xuICBib3JkZXJlZD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiB0YWJsZeWkp+Wwj1xuICAgKi9cbiAgc2l6ZT86ICdzbWFsbCcgfCAnbWlkZGxlJyB8ICdkZWZhdWx0JyA9ICdkZWZhdWx0JztcbiAgLyoqXG4gICAqIOaYr+WQpumakOiXj+WktOWSjOWwvu+8jOW9k+Wwj+Wxj+W5leS4i+aJjeaYvuekuu+8jOm7mOiupO+8mmBmYWxzZWBcbiAgICovXG4gIHJlc3BvbnNpdmVIaWRlSGVhZGVyRm9vdGVyPzogYm9vbGVhbiA9IGZhbHNlO1xuICAvKiog6K+35rGC5L2T6YWN572uICovXG4gIHJlcT86IFNUUmVxID0ge1xuICAgIHR5cGU6ICdwYWdlJyxcbiAgICBtZXRob2Q6ICdHRVQnLFxuICAgIGFsbEluQm9keTogZmFsc2UsXG4gICAgcmVOYW1lOiB7IHBpOiAncGknLCBwczogJ3BzJywgc2tpcDogJ3NraXAnLCBsaW1pdDogJ2xpbWl0JyB9LFxuICB9O1xuICAvKiog6L+U5Zue5L2T6YWN572uICovXG4gIHJlcz86IFNUUmVzID0ge1xuICAgIHJlTmFtZTogeyBsaXN0OiBbJ2xpc3QnXSwgdG90YWw6IFsndG90YWwnXSB9LFxuICB9O1xuICAvKiog6L+U5Zue5L2T6YWN572uICovXG4gIHBhZ2U/OiBTVFBhZ2UgPSB7XG4gICAgZnJvbnQ6IHRydWUsXG4gICAgemVyb0luZGV4ZWQ6IGZhbHNlLFxuICAgIHBsYWNlbWVudDogJ3JpZ2h0JyxcbiAgICBzaG93OiB0cnVlLFxuICAgIHNob3dTaXplOiBmYWxzZSxcbiAgICBwYWdlU2l6ZXM6IFsxMCwgMjAsIDMwLCA0MCwgNTBdLFxuICAgIHNob3dRdWlja0p1bXBlcjogZmFsc2UsXG4gICAgdG90YWw6IHRydWUsXG4gICAgaW5kZXhSZXNldDogdHJ1ZSxcbiAgICB0b1RvcDogdHJ1ZSxcbiAgICB0b1RvcE9mZnNldDogMTAwLFxuICB9O1xuICAvKipcbiAgICog6YeN5ZG95ZCN5o6S5bqP5YC877yMYGNvbHVtbnNgIOeahOmHjeWRveWQjemrmOS6juWxnuaAp1xuICAgKi9cbiAgc29ydFJlTmFtZT86IHsgYXNjZW5kPzogc3RyaW5nOyBkZXNjZW5kPzogc3RyaW5nIH07XG4gIC8qKlxuICAgKiDljZXmjpLluo/op4TliJlcbiAgICogLSDoi6XkuI3mjIflrprvvIzliJnov5Tlm57vvJpgY29sdW1uTmFtZT1hc2NlbmR8ZGVzY2VuZGBcbiAgICogLSDoi6XmjIflrprvvIzliJnov5Tlm57vvJpgc29ydD1jb2x1bW5OYW1lLihhc2NlbmR8ZGVzY2VuZClgXG4gICAqL1xuICBzaW5nbGVTb3J0PzogU1RTaW5nbGVTb3J0ID0gbnVsbDtcbiAgLyoqXG4gICAqIOaYr+WQpuWkmuaOkuW6j++8jOW9kyBgc29ydGAg5aSa5Liq55u45ZCM5YC85pe26Ieq5Yqo5ZCI5bm277yM5bu66K6u5ZCO56uv5pSv5oyB5pe25L2/55SoXG4gICAqL1xuICBtdWx0aVNvcnQ/OiBTVE11bHRpU29ydCA9IG51bGw7XG4gIC8qKlxuICAgKiDmjInpkq7mqKHmgIHmoYbphY3nva5cbiAgICovXG4gIG1vZGFsPzogU1RDb2x1bW5CdXR0b25Nb2RhbENvbmZpZyA9IHtcbiAgICBwYXJhbXNOYW1lOiAncmVjb3JkJyxcbiAgICBzaXplOiAnbGcnLFxuICAgIGV4YWN0OiB0cnVlLFxuICB9O1xuICAvKipcbiAgICog5oyJ6ZKu5oq95bGJ6YWN572uXG4gICAqL1xuICBkcmF3ZXI/OiBTVENvbHVtbkJ1dHRvbkRyYXdlckNvbmZpZyA9IHtcbiAgICBwYXJhbXNOYW1lOiAncmVjb3JkJyxcbiAgICBzaXplOiAnbWQnLFxuICAgIGZvb3RlcjogdHJ1ZSxcbiAgICBmb290ZXJIZWlnaHQ6IDU1LFxuICB9O1xuICAvKipcbiAgICog5rCU5rOh56Gu6K6k5qGG5YaF5a65XG4gICAqL1xuICBwb3BUaXRsZT86IHN0cmluZyA9ICfnoa7orqTliKDpmaTlkJfvvJ8nO1xuICAvKipcbiAgICog6KGM5Y2V5Ye75aSa5bCR5pe26ZW/5LmL57G75Li65Y+M5Ye777yI5Y2V5L2N77ya5q+r56eS77yJ77yM6buY6K6k77yaYDIwMGBcbiAgICovXG4gIHJvd0NsaWNrVGltZT86IG51bWJlciA9IDIwMDtcbiAgLyoqXG4gICAqIOi/h+a7pOaMiemSruehruiupOaWh+acrO+8jOm7mOiupO+8mmDnoa7orqRgXG4gICAqL1xuICBmaWx0ZXJDb25maXJtVGV4dD86IHN0cmluZyA9ICfnoa7orqQnO1xuICAvKipcbiAgICog6L+H5ruk5oyJ6ZKu6YeN572u5paH5pys77yM6buY6K6k77yaYOmHjee9rmBcbiAgICovXG4gIGZpbHRlckNsZWFyVGV4dD86IHN0cmluZyA9ICfph43nva4nO1xuICAvKipcbiAgICog5oyJ6ZKu5Zu+5qCHXG4gICAqL1xuICBidG5JY29uPzogU1RJY29uID0ge1xuICAgIHR5cGU6ICcnLFxuICAgIHRoZW1lOiAnb3V0bGluZScsXG4gICAgc3BpbjogZmFsc2UsXG4gIH07XG4gIC8qKlxuICAgKiDooYzlj7fntKLlvJXvvIzpu5jorqTvvJpgMWBcbiAgICogLSDorqHnrpfop4TliJnkuLrvvJpgaW5kZXggKyBub0luZGV4YFxuICAgKi9cbiAgbm9JbmRleD86IG51bWJlciA9IDE7XG4gIC8qKlxuICAgKiDooajmoLzooYznmoTnsbvlkI1cbiAgICovXG4gIHJvd0NsYXNzTmFtZT86IFNUUm93Q2xhc3NOYW1lO1xuICAvKipcbiAgICog6YCa6L+H54K55Ye76KGM5p2l5bGV5byA5a2Q6KGMXG4gICAqL1xuICBleHBhbmRSb3dCeUNsaWNrPzogYm9vbGVhbiA9IGZhbHNlO1xuICAvKipcbiAgICog5oyH5a6aIGB3aWR0aGAg5qih5byPXG4gICAqL1xuICB3aWR0aE1vZGU/OiBTVFdpZHRoTW9kZSA9IHtcbiAgICB0eXBlOiAnZGVmYXVsdCcsXG4gICAgc3RyaWN0QmVoYXZpb3I6ICd0cnVuY2F0ZScsXG4gIH07XG59XG4iXX0=