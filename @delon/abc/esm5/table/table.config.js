/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var STConfig = /** @class */ (function () {
    function STConfig() {
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
            method: 'GET',
            allInBody: false,
            reName: { pi: 'pi', ps: 'ps' },
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
        this.multiSort = false;
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
    }
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy90YWJsZS8iLCJzb3VyY2VzIjpbInRhYmxlLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBWUE7SUFBQTs7OztRQWdCRSxTQUFJLEdBQW9DLFNBQVMsQ0FBQzs7OztRQUlsRCwrQkFBMEIsR0FBSSxLQUFLLENBQUM7Ozs7UUFFcEMsUUFBRyxHQUFXO1lBQ1osTUFBTSxFQUFFLEtBQUs7WUFDYixTQUFTLEVBQUUsS0FBSztZQUNoQixNQUFNLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUU7U0FDL0IsQ0FBQzs7OztRQUVGLFFBQUcsR0FBVztZQUNaLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1NBQzdDLENBQUM7Ozs7UUFFRixTQUFJLEdBQVk7WUFDZCxLQUFLLEVBQUUsSUFBSTtZQUNYLFdBQVcsRUFBRSxLQUFLO1lBQ2xCLFNBQVMsRUFBRSxPQUFPO1lBQ2xCLElBQUksRUFBRSxJQUFJO1lBQ1YsUUFBUSxFQUFFLEtBQUs7WUFDZixTQUFTLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO1lBQy9CLGVBQWUsRUFBRSxLQUFLO1lBQ3RCLEtBQUssRUFBRSxJQUFJO1lBQ1gsVUFBVSxFQUFFLElBQUk7WUFDaEIsS0FBSyxFQUFFLElBQUk7WUFDWCxXQUFXLEVBQUUsR0FBRztTQUNqQixDQUFDOzs7Ozs7UUFVRixlQUFVLEdBQWtCLElBQUksQ0FBQzs7OztRQUlqQyxjQUFTLEdBQTJCLEtBQUssQ0FBQzs7OztRQUkxQyxVQUFLLEdBQStCO1lBQ2xDLFVBQVUsRUFBRSxRQUFRO1lBQ3BCLElBQUksRUFBRSxJQUFJO1lBQ1YsS0FBSyxFQUFFLElBQUk7U0FDWixDQUFDOzs7O1FBSUYsV0FBTSxHQUFnQztZQUNwQyxVQUFVLEVBQUUsUUFBUTtZQUNwQixJQUFJLEVBQUUsSUFBSTtZQUNWLE1BQU0sRUFBRSxJQUFJO1lBQ1osWUFBWSxFQUFFLEVBQUU7U0FDakIsQ0FBQzs7OztRQUlGLGFBQVEsR0FBSSxRQUFRLENBQUM7Ozs7UUFJckIsaUJBQVksR0FBSSxHQUFHLENBQUM7Ozs7UUFJcEIsc0JBQWlCLEdBQUksSUFBSSxDQUFDOzs7O1FBSTFCLG9CQUFlLEdBQUksSUFBSSxDQUFDOzs7O1FBSXhCLFlBQU8sR0FBWTtZQUNqQixJQUFJLEVBQUUsRUFBRTtZQUNSLEtBQUssRUFBRSxTQUFTO1lBQ2hCLElBQUksRUFBRSxLQUFLO1NBQ1osQ0FBQzs7Ozs7UUFLRixZQUFPLEdBQUksQ0FBQyxDQUFDO0lBS2YsQ0FBQztJQUFELGVBQUM7QUFBRCxDQUFDLEFBN0dELElBNkdDOzs7Ozs7O0lBekdDLHNCQUFZOzs7OztJQUlaLHNCQUFZOzs7OztJQUlaLDRCQUFtQjs7Ozs7SUFJbkIsd0JBQWtEOzs7OztJQUlsRCw4Q0FBb0M7Ozs7O0lBRXBDLHVCQUlFOzs7OztJQUVGLHVCQUVFOzs7OztJQUVGLHdCQVlFOzs7OztJQUlGLDhCQUFtRDs7Ozs7OztJQU1uRCw4QkFBaUM7Ozs7O0lBSWpDLDZCQUEwQzs7Ozs7SUFJMUMseUJBSUU7Ozs7O0lBSUYsMEJBS0U7Ozs7O0lBSUYsNEJBQXFCOzs7OztJQUlyQixnQ0FBb0I7Ozs7O0lBSXBCLHFDQUEwQjs7Ozs7SUFJMUIsbUNBQXdCOzs7OztJQUl4QiwyQkFJRTs7Ozs7O0lBS0YsMkJBQWE7Ozs7O0lBSWIsZ0NBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgU1RNdWx0aVNvcnQsXG4gIFNUUmVxLFxuICBTVFJlcyxcbiAgU1RQYWdlLFxuICBTVENvbHVtbkJ1dHRvbk1vZGFsQ29uZmlnLFxuICBTVENvbHVtbkJ1dHRvbkRyYXdlckNvbmZpZyxcbiAgU1RJY29uLFxuICBTVFJvd0NsYXNzTmFtZSxcbiAgU1RTaW5nbGVTb3J0LFxufSBmcm9tICcuL3RhYmxlLmludGVyZmFjZXMnO1xuXG5leHBvcnQgY2xhc3MgU1RDb25maWcge1xuICAvKipcbiAgICog6LW35aeL6aG156CB77yM6buY6K6k5Li677yaYDFgXG4gICAqL1xuICBwaT86IG51bWJlcjtcbiAgLyoqXG4gICAqIOavj+mhteaVsOmHj++8jOW9k+iuvue9ruS4uiBgMGAg6KGo56S65LiN5YiG6aG177yM6buY6K6k77yaYDEwYFxuICAgKi9cbiAgcHM/OiBudW1iZXI7XG4gIC8qKlxuICAgKiDmmK/lkKbmmL7npLrovrnmoYZcbiAgICovXG4gIGJvcmRlcmVkPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIHRhYmxl5aSn5bCPXG4gICAqL1xuICBzaXplPzogJ3NtYWxsJyB8ICdtaWRkbGUnIHwgJ2RlZmF1bHQnID0gJ2RlZmF1bHQnO1xuICAvKipcbiAgICog5piv5ZCm6ZqQ6JeP5aS05ZKM5bC+77yM5b2T5bCP5bGP5bmV5LiL5omN5pi+56S677yM6buY6K6k77yaYGZhbHNlYFxuICAgKi9cbiAgcmVzcG9uc2l2ZUhpZGVIZWFkZXJGb290ZXI/ID0gZmFsc2U7XG4gIC8qKiDor7fmsYLkvZPphY3nva4gKi9cbiAgcmVxPzogU1RSZXEgPSB7XG4gICAgbWV0aG9kOiAnR0VUJyxcbiAgICBhbGxJbkJvZHk6IGZhbHNlLFxuICAgIHJlTmFtZTogeyBwaTogJ3BpJywgcHM6ICdwcycgfSxcbiAgfTtcbiAgLyoqIOi/lOWbnuS9k+mFjee9riAqL1xuICByZXM/OiBTVFJlcyA9IHtcbiAgICByZU5hbWU6IHsgbGlzdDogWydsaXN0J10sIHRvdGFsOiBbJ3RvdGFsJ10gfSxcbiAgfTtcbiAgLyoqIOi/lOWbnuS9k+mFjee9riAqL1xuICBwYWdlPzogU1RQYWdlID0ge1xuICAgIGZyb250OiB0cnVlLFxuICAgIHplcm9JbmRleGVkOiBmYWxzZSxcbiAgICBwbGFjZW1lbnQ6ICdyaWdodCcsXG4gICAgc2hvdzogdHJ1ZSxcbiAgICBzaG93U2l6ZTogZmFsc2UsXG4gICAgcGFnZVNpemVzOiBbMTAsIDIwLCAzMCwgNDAsIDUwXSxcbiAgICBzaG93UXVpY2tKdW1wZXI6IGZhbHNlLFxuICAgIHRvdGFsOiB0cnVlLFxuICAgIGluZGV4UmVzZXQ6IHRydWUsXG4gICAgdG9Ub3A6IHRydWUsXG4gICAgdG9Ub3BPZmZzZXQ6IDEwMCxcbiAgfTtcbiAgLyoqXG4gICAqIOmHjeWRveWQjeaOkuW6j+WAvO+8jGBjb2x1bW5zYCDnmoTph43lkb3lkI3pq5jkuo7lsZ7mgKdcbiAgICovXG4gIHNvcnRSZU5hbWU/OiB7IGFzY2VuZD86IHN0cmluZzsgZGVzY2VuZD86IHN0cmluZyB9O1xuICAvKipcbiAgICog5Y2V5o6S5bqP6KeE5YiZXG4gICAqIC0g6Iul5LiN5oyH5a6a77yM5YiZ6L+U5Zue77yaYGNvbHVtbk5hbWU9YXNjZW5kfGRlc2NlbmRgXG4gICAqIC0g6Iul5oyH5a6a77yM5YiZ6L+U5Zue77yaYHNvcnQ9Y29sdW1uTmFtZS4oYXNjZW5kfGRlc2NlbmQpYFxuICAgKi9cbiAgc2luZ2xlU29ydD86IFNUU2luZ2xlU29ydCA9IG51bGw7XG4gIC8qKlxuICAgKiDmmK/lkKblpJrmjpLluo/vvIzlvZMgYHNvcnRgIOWkmuS4quebuOWQjOWAvOaXtuiHquWKqOWQiOW5tu+8jOW7uuiuruWQjuerr+aUr+aMgeaXtuS9v+eUqFxuICAgKi9cbiAgbXVsdGlTb3J0PzogYm9vbGVhbiB8IFNUTXVsdGlTb3J0ID0gZmFsc2U7XG4gIC8qKlxuICAgKiDmjInpkq7mqKHmgIHmoYbphY3nva5cbiAgICovXG4gIG1vZGFsPzogU1RDb2x1bW5CdXR0b25Nb2RhbENvbmZpZyA9IHtcbiAgICBwYXJhbXNOYW1lOiAncmVjb3JkJyxcbiAgICBzaXplOiAnbGcnLFxuICAgIGV4YWN0OiB0cnVlLFxuICB9O1xuICAvKipcbiAgICog5oyJ6ZKu5oq95bGJ6YWN572uXG4gICAqL1xuICBkcmF3ZXI/OiBTVENvbHVtbkJ1dHRvbkRyYXdlckNvbmZpZyA9IHtcbiAgICBwYXJhbXNOYW1lOiAncmVjb3JkJyxcbiAgICBzaXplOiAnbWQnLFxuICAgIGZvb3RlcjogdHJ1ZSxcbiAgICBmb290ZXJIZWlnaHQ6IDU1LFxuICB9O1xuICAvKipcbiAgICog5rCU5rOh56Gu6K6k5qGG5YaF5a65XG4gICAqL1xuICBwb3BUaXRsZT8gPSAn56Gu6K6k5Yig6Zmk5ZCX77yfJztcbiAgLyoqXG4gICAqIOihjOWNleWHu+WkmuWwkeaXtumVv+S5i+exu+S4uuWPjOWHu++8iOWNleS9je+8muavq+enku+8ie+8jOm7mOiupO+8mmAyMDBgXG4gICAqL1xuICByb3dDbGlja1RpbWU/ID0gMjAwO1xuICAvKipcbiAgICog6L+H5ruk5oyJ6ZKu56Gu6K6k5paH5pys77yM6buY6K6k77yaYOehruiupGBcbiAgICovXG4gIGZpbHRlckNvbmZpcm1UZXh0PyA9ICfnoa7orqQnO1xuICAvKipcbiAgICog6L+H5ruk5oyJ6ZKu6YeN572u5paH5pys77yM6buY6K6k77yaYOmHjee9rmBcbiAgICovXG4gIGZpbHRlckNsZWFyVGV4dD8gPSAn6YeN572uJztcbiAgLyoqXG4gICAqIOaMiemSruWbvuagh1xuICAgKi9cbiAgYnRuSWNvbj86IFNUSWNvbiA9IHtcbiAgICB0eXBlOiAnJyxcbiAgICB0aGVtZTogJ291dGxpbmUnLFxuICAgIHNwaW46IGZhbHNlLFxuICB9O1xuICAvKipcbiAgICog6KGM5Y+357Si5byV77yM6buY6K6k77yaYDFgXG4gICAqIC0g6K6h566X6KeE5YiZ5Li677yaYGluZGV4ICsgbm9JbmRleGBcbiAgICovXG4gIG5vSW5kZXg/ID0gMTtcbiAgLyoqXG4gICAqIOihqOagvOihjOeahOexu+WQjVxuICAgKi9cbiAgcm93Q2xhc3NOYW1lPzogU1RSb3dDbGFzc05hbWU7XG59XG4iXX0=