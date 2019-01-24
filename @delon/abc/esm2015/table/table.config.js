/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy90YWJsZS8iLCJzb3VyY2VzIjpbInRhYmxlLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFjM0MsTUFBTSxPQUFPLFFBQVE7SUFEckI7Ozs7UUFpQkUsU0FBSSxHQUFvQyxTQUFTLENBQUM7Ozs7UUFJbEQsK0JBQTBCLEdBQUssS0FBSyxDQUFDOzs7O1FBRXJDLFFBQUcsR0FBVztZQUNaLElBQUksRUFBRSxNQUFNO1lBQ1osTUFBTSxFQUFFLEtBQUs7WUFDYixTQUFTLEVBQUUsS0FBSztZQUNoQixNQUFNLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFO1NBQzdELENBQUM7Ozs7UUFFRixRQUFHLEdBQVc7WUFDWixNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRTtTQUM3QyxDQUFDOzs7O1FBRUYsU0FBSSxHQUFZO1lBQ2QsS0FBSyxFQUFFLElBQUk7WUFDWCxXQUFXLEVBQUUsS0FBSztZQUNsQixTQUFTLEVBQUUsT0FBTztZQUNsQixJQUFJLEVBQUUsSUFBSTtZQUNWLFFBQVEsRUFBRSxLQUFLO1lBQ2YsU0FBUyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztZQUMvQixlQUFlLEVBQUUsS0FBSztZQUN0QixLQUFLLEVBQUUsSUFBSTtZQUNYLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLEtBQUssRUFBRSxJQUFJO1lBQ1gsV0FBVyxFQUFFLEdBQUc7U0FDakIsQ0FBQzs7Ozs7O1FBVUYsZUFBVSxHQUFrQixJQUFJLENBQUM7Ozs7UUFJakMsY0FBUyxHQUFpQixJQUFJLENBQUM7Ozs7UUFJL0IsVUFBSyxHQUErQjtZQUNsQyxVQUFVLEVBQUUsUUFBUTtZQUNwQixJQUFJLEVBQUUsSUFBSTtZQUNWLEtBQUssRUFBRSxJQUFJO1NBQ1osQ0FBQzs7OztRQUlGLFdBQU0sR0FBZ0M7WUFDcEMsVUFBVSxFQUFFLFFBQVE7WUFDcEIsSUFBSSxFQUFFLElBQUk7WUFDVixNQUFNLEVBQUUsSUFBSTtZQUNaLFlBQVksRUFBRSxFQUFFO1NBQ2pCLENBQUM7Ozs7UUFJRixhQUFRLEdBQUssUUFBUSxDQUFDOzs7O1FBSXRCLGlCQUFZLEdBQUssR0FBRyxDQUFDOzs7O1FBSXJCLHNCQUFpQixHQUFLLElBQUksQ0FBQzs7OztRQUkzQixvQkFBZSxHQUFLLElBQUksQ0FBQzs7OztRQUl6QixZQUFPLEdBQVk7WUFDakIsSUFBSSxFQUFFLEVBQUU7WUFDUixLQUFLLEVBQUUsU0FBUztZQUNoQixJQUFJLEVBQUUsS0FBSztTQUNaLENBQUM7Ozs7O1FBS0YsWUFBTyxHQUFLLENBQUMsQ0FBQzs7OztRQVFkLHFCQUFnQixHQUFLLEtBQUssQ0FBQztLQUM1Qjs7O1lBbkhBLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7Ozs7O0lBS2hDLHNCQUFZOzs7OztJQUlaLHNCQUFZOzs7OztJQUlaLDRCQUFtQjs7Ozs7SUFJbkIsd0JBQWtEOzs7OztJQUlsRCw4Q0FBcUM7Ozs7O0lBRXJDLHVCQUtFOzs7OztJQUVGLHVCQUVFOzs7OztJQUVGLHdCQVlFOzs7OztJQUlGLDhCQUFtRDs7Ozs7OztJQU1uRCw4QkFBaUM7Ozs7O0lBSWpDLDZCQUErQjs7Ozs7SUFJL0IseUJBSUU7Ozs7O0lBSUYsMEJBS0U7Ozs7O0lBSUYsNEJBQXNCOzs7OztJQUl0QixnQ0FBcUI7Ozs7O0lBSXJCLHFDQUEyQjs7Ozs7SUFJM0IsbUNBQXlCOzs7OztJQUl6QiwyQkFJRTs7Ozs7O0lBS0YsMkJBQWM7Ozs7O0lBSWQsZ0NBQThCOzs7OztJQUk5QixvQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBTVENvbHVtbkJ1dHRvbkRyYXdlckNvbmZpZyxcbiAgU1RDb2x1bW5CdXR0b25Nb2RhbENvbmZpZyxcbiAgU1RJY29uLFxuICBTVE11bHRpU29ydCxcbiAgU1RQYWdlLFxuICBTVFJlcSxcbiAgU1RSZXMsXG4gIFNUUm93Q2xhc3NOYW1lLFxuICBTVFNpbmdsZVNvcnQsXG59IGZyb20gJy4vdGFibGUuaW50ZXJmYWNlcyc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgU1RDb25maWcge1xuICAvKipcbiAgICog6LW35aeL6aG156CB77yM6buY6K6k5Li677yaYDFgXG4gICAqL1xuICBwaT86IG51bWJlcjtcbiAgLyoqXG4gICAqIOavj+mhteaVsOmHj++8jOW9k+iuvue9ruS4uiBgMGAg6KGo56S65LiN5YiG6aG177yM6buY6K6k77yaYDEwYFxuICAgKi9cbiAgcHM/OiBudW1iZXI7XG4gIC8qKlxuICAgKiDmmK/lkKbmmL7npLrovrnmoYZcbiAgICovXG4gIGJvcmRlcmVkPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIHRhYmxl5aSn5bCPXG4gICAqL1xuICBzaXplPzogJ3NtYWxsJyB8ICdtaWRkbGUnIHwgJ2RlZmF1bHQnID0gJ2RlZmF1bHQnO1xuICAvKipcbiAgICog5piv5ZCm6ZqQ6JeP5aS05ZKM5bC+77yM5b2T5bCP5bGP5bmV5LiL5omN5pi+56S677yM6buY6K6k77yaYGZhbHNlYFxuICAgKi9cbiAgcmVzcG9uc2l2ZUhpZGVIZWFkZXJGb290ZXIgPyA9IGZhbHNlO1xuICAvKiog6K+35rGC5L2T6YWN572uICovXG4gIHJlcT86IFNUUmVxID0ge1xuICAgIHR5cGU6ICdwYWdlJyxcbiAgICBtZXRob2Q6ICdHRVQnLFxuICAgIGFsbEluQm9keTogZmFsc2UsXG4gICAgcmVOYW1lOiB7IHBpOiAncGknLCBwczogJ3BzJywgc2tpcDogJ3NraXAnLCBsaW1pdDogJ2xpbWl0JyB9LFxuICB9O1xuICAvKiog6L+U5Zue5L2T6YWN572uICovXG4gIHJlcz86IFNUUmVzID0ge1xuICAgIHJlTmFtZTogeyBsaXN0OiBbJ2xpc3QnXSwgdG90YWw6IFsndG90YWwnXSB9LFxuICB9O1xuICAvKiog6L+U5Zue5L2T6YWN572uICovXG4gIHBhZ2U/OiBTVFBhZ2UgPSB7XG4gICAgZnJvbnQ6IHRydWUsXG4gICAgemVyb0luZGV4ZWQ6IGZhbHNlLFxuICAgIHBsYWNlbWVudDogJ3JpZ2h0JyxcbiAgICBzaG93OiB0cnVlLFxuICAgIHNob3dTaXplOiBmYWxzZSxcbiAgICBwYWdlU2l6ZXM6IFsxMCwgMjAsIDMwLCA0MCwgNTBdLFxuICAgIHNob3dRdWlja0p1bXBlcjogZmFsc2UsXG4gICAgdG90YWw6IHRydWUsXG4gICAgaW5kZXhSZXNldDogdHJ1ZSxcbiAgICB0b1RvcDogdHJ1ZSxcbiAgICB0b1RvcE9mZnNldDogMTAwLFxuICB9O1xuICAvKipcbiAgICog6YeN5ZG95ZCN5o6S5bqP5YC877yMYGNvbHVtbnNgIOeahOmHjeWRveWQjemrmOS6juWxnuaAp1xuICAgKi9cbiAgc29ydFJlTmFtZT86IHsgYXNjZW5kPzogc3RyaW5nOyBkZXNjZW5kPzogc3RyaW5nIH07XG4gIC8qKlxuICAgKiDljZXmjpLluo/op4TliJlcbiAgICogLSDoi6XkuI3mjIflrprvvIzliJnov5Tlm57vvJpgY29sdW1uTmFtZT1hc2NlbmR8ZGVzY2VuZGBcbiAgICogLSDoi6XmjIflrprvvIzliJnov5Tlm57vvJpgc29ydD1jb2x1bW5OYW1lLihhc2NlbmR8ZGVzY2VuZClgXG4gICAqL1xuICBzaW5nbGVTb3J0PzogU1RTaW5nbGVTb3J0ID0gbnVsbDtcbiAgLyoqXG4gICAqIOaYr+WQpuWkmuaOkuW6j++8jOW9kyBgc29ydGAg5aSa5Liq55u45ZCM5YC85pe26Ieq5Yqo5ZCI5bm277yM5bu66K6u5ZCO56uv5pSv5oyB5pe25L2/55SoXG4gICAqL1xuICBtdWx0aVNvcnQ/OiBTVE11bHRpU29ydCA9IG51bGw7XG4gIC8qKlxuICAgKiDmjInpkq7mqKHmgIHmoYbphY3nva5cbiAgICovXG4gIG1vZGFsPzogU1RDb2x1bW5CdXR0b25Nb2RhbENvbmZpZyA9IHtcbiAgICBwYXJhbXNOYW1lOiAncmVjb3JkJyxcbiAgICBzaXplOiAnbGcnLFxuICAgIGV4YWN0OiB0cnVlLFxuICB9O1xuICAvKipcbiAgICog5oyJ6ZKu5oq95bGJ6YWN572uXG4gICAqL1xuICBkcmF3ZXI/OiBTVENvbHVtbkJ1dHRvbkRyYXdlckNvbmZpZyA9IHtcbiAgICBwYXJhbXNOYW1lOiAncmVjb3JkJyxcbiAgICBzaXplOiAnbWQnLFxuICAgIGZvb3RlcjogdHJ1ZSxcbiAgICBmb290ZXJIZWlnaHQ6IDU1LFxuICB9O1xuICAvKipcbiAgICog5rCU5rOh56Gu6K6k5qGG5YaF5a65XG4gICAqL1xuICBwb3BUaXRsZSA/ID0gJ+ehruiupOWIoOmZpOWQl++8nyc7XG4gIC8qKlxuICAgKiDooYzljZXlh7vlpJrlsJHml7bplb/kuYvnsbvkuLrlj4zlh7vvvIjljZXkvY3vvJrmr6vnp5LvvInvvIzpu5jorqTvvJpgMjAwYFxuICAgKi9cbiAgcm93Q2xpY2tUaW1lID8gPSAyMDA7XG4gIC8qKlxuICAgKiDov4fmu6TmjInpkq7noa7orqTmlofmnKzvvIzpu5jorqTvvJpg56Gu6K6kYFxuICAgKi9cbiAgZmlsdGVyQ29uZmlybVRleHQgPyA9ICfnoa7orqQnO1xuICAvKipcbiAgICog6L+H5ruk5oyJ6ZKu6YeN572u5paH5pys77yM6buY6K6k77yaYOmHjee9rmBcbiAgICovXG4gIGZpbHRlckNsZWFyVGV4dCA/ID0gJ+mHjee9ric7XG4gIC8qKlxuICAgKiDmjInpkq7lm77moIdcbiAgICovXG4gIGJ0bkljb24/OiBTVEljb24gPSB7XG4gICAgdHlwZTogJycsXG4gICAgdGhlbWU6ICdvdXRsaW5lJyxcbiAgICBzcGluOiBmYWxzZSxcbiAgfTtcbiAgLyoqXG4gICAqIOihjOWPt+e0ouW8le+8jOm7mOiupO+8mmAxYFxuICAgKiAtIOiuoeeul+inhOWImeS4uu+8mmBpbmRleCArIG5vSW5kZXhgXG4gICAqL1xuICBub0luZGV4ID8gPSAxO1xuICAvKipcbiAgICog6KGo5qC86KGM55qE57G75ZCNXG4gICAqL1xuICByb3dDbGFzc05hbWU/OiBTVFJvd0NsYXNzTmFtZTtcbiAgLyoqXG4gICAqIOmAmui/h+eCueWHu+ihjOadpeWxleW8gOWtkOihjFxuICAgKi9cbiAgZXhwYW5kUm93QnlDbGljayA/ID0gZmFsc2U7XG59XG4iXX0=