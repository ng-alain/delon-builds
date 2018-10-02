/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
            footerHeight: 55
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
    }
}
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
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy90YWJsZS8iLCJzb3VyY2VzIjpbInRhYmxlLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBU0EsTUFBTTs7Ozs7b0JBZ0JvQyxTQUFTOzs7OzBDQUluQixLQUFLOzs7O21CQUVyQjtZQUNaLE1BQU0sRUFBRSxLQUFLO1lBQ2IsU0FBUyxFQUFFLEtBQUs7WUFDaEIsTUFBTSxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFO1NBQy9COzs7O21CQUVhO1lBQ1osTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUU7U0FDN0M7Ozs7b0JBRWU7WUFDZCxLQUFLLEVBQUUsSUFBSTtZQUNYLFdBQVcsRUFBRSxLQUFLO1lBQ2xCLFNBQVMsRUFBRSxPQUFPO1lBQ2xCLElBQUksRUFBRSxJQUFJO1lBQ1YsUUFBUSxFQUFFLEtBQUs7WUFDZixTQUFTLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO1lBQy9CLGVBQWUsRUFBRSxLQUFLO1lBQ3RCLEtBQUssRUFBRSxJQUFJO1lBQ1gsVUFBVSxFQUFFLElBQUk7WUFDaEIsS0FBSyxFQUFFLElBQUk7WUFDWCxXQUFXLEVBQUUsR0FBRztTQUNqQjs7Ozt5QkFRbUMsS0FBSzs7OztxQkFJTDtZQUNsQyxVQUFVLEVBQUUsUUFBUTtZQUNwQixJQUFJLEVBQUUsSUFBSTtZQUNWLEtBQUssRUFBRSxJQUFJO1NBQ1o7Ozs7c0JBSXFDO1lBQ3BDLFVBQVUsRUFBRSxRQUFRO1lBQ3BCLElBQUksRUFBRSxJQUFJO1lBQ1YsTUFBTSxFQUFFLElBQUk7WUFDWixZQUFZLEVBQUUsRUFBRTtTQUNqQjs7Ozt3QkFJVyxRQUFROzs7OzRCQUlKLEdBQUc7Ozs7aUNBSUUsSUFBSTs7OzsrQkFJTixJQUFJOztDQUN4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgU1RNdWx0aVNvcnQsXHJcbiAgU1RSZXEsXHJcbiAgU1RSZXMsXHJcbiAgU1RQYWdlLFxyXG4gIFNUQ29sdW1uQnV0dG9uTW9kYWxDb25maWcsXHJcbiAgU1RDb2x1bW5CdXR0b25EcmF3ZXJDb25maWcsXHJcbn0gZnJvbSAnLi90YWJsZS5pbnRlcmZhY2VzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBTVENvbmZpZyB7XHJcbiAgLyoqXHJcbiAgICog6LW35aeL6aG156CB77yM6buY6K6k5Li677yaYDFgXHJcbiAgICovXHJcbiAgcGk/OiBudW1iZXI7XHJcbiAgLyoqXHJcbiAgICog5q+P6aG15pWw6YeP77yM5b2T6K6+572u5Li6IGAwYCDooajnpLrkuI3liIbpobXvvIzpu5jorqTvvJpgMTBgXHJcbiAgICovXHJcbiAgcHM/OiBudW1iZXI7XHJcbiAgLyoqXHJcbiAgICog5piv5ZCm5pi+56S66L655qGGXHJcbiAgICovXHJcbiAgYm9yZGVyZWQ/OiBib29sZWFuO1xyXG4gIC8qKlxyXG4gICAqIHRhYmxl5aSn5bCPXHJcbiAgICovXHJcbiAgc2l6ZT86ICdzbWFsbCcgfCAnbWlkZGxlJyB8ICdkZWZhdWx0JyA9ICdkZWZhdWx0JztcclxuICAvKipcclxuICAgKiDmmK/lkKbpmpDol4/lpLTlkozlsL7vvIzlvZPlsI/lsY/luZXkuIvmiY3mmL7npLrvvIzpu5jorqTvvJpgZmFsc2VgXHJcbiAgICovXHJcbiAgcmVzcG9uc2l2ZUhpZGVIZWFkZXJGb290ZXI/ID0gZmFsc2U7XHJcbiAgLyoqIOivt+axguS9k+mFjee9riAqL1xyXG4gIHJlcT86IFNUUmVxID0ge1xyXG4gICAgbWV0aG9kOiAnR0VUJyxcclxuICAgIGFsbEluQm9keTogZmFsc2UsXHJcbiAgICByZU5hbWU6IHsgcGk6ICdwaScsIHBzOiAncHMnIH0sXHJcbiAgfTtcclxuICAvKiog6L+U5Zue5L2T6YWN572uICovXHJcbiAgcmVzPzogU1RSZXMgPSB7XHJcbiAgICByZU5hbWU6IHsgbGlzdDogWydsaXN0J10sIHRvdGFsOiBbJ3RvdGFsJ10gfSxcclxuICB9O1xyXG4gIC8qKiDov5Tlm57kvZPphY3nva4gKi9cclxuICBwYWdlPzogU1RQYWdlID0ge1xyXG4gICAgZnJvbnQ6IHRydWUsXHJcbiAgICB6ZXJvSW5kZXhlZDogZmFsc2UsXHJcbiAgICBwbGFjZW1lbnQ6ICdyaWdodCcsXHJcbiAgICBzaG93OiB0cnVlLFxyXG4gICAgc2hvd1NpemU6IGZhbHNlLFxyXG4gICAgcGFnZVNpemVzOiBbMTAsIDIwLCAzMCwgNDAsIDUwXSxcclxuICAgIHNob3dRdWlja0p1bXBlcjogZmFsc2UsXHJcbiAgICB0b3RhbDogdHJ1ZSxcclxuICAgIGluZGV4UmVzZXQ6IHRydWUsXHJcbiAgICB0b1RvcDogdHJ1ZSxcclxuICAgIHRvVG9wT2Zmc2V0OiAxMDAsXHJcbiAgfTtcclxuICAvKipcclxuICAgKiDph43lkb3lkI3mjpLluo/lgLzvvIxgY29sdW1uc2Ag55qE6YeN5ZG95ZCN6auY5LqO5bGe5oCnXHJcbiAgICovXHJcbiAgc29ydFJlTmFtZT86IHsgYXNjZW5kPzogc3RyaW5nOyBkZXNjZW5kPzogc3RyaW5nIH07XHJcbiAgLyoqXHJcbiAgICog5piv5ZCm5aSa5o6S5bqP77yM5b2TIGBzb3J0YCDlpJrkuKrnm7jlkIzlgLzml7boh6rliqjlkIjlubbvvIzlu7rorq7lkI7nq6/mlK/mjIHml7bkvb/nlKhcclxuICAgKi9cclxuICBtdWx0aVNvcnQ/OiBib29sZWFuIHwgU1RNdWx0aVNvcnQgPSBmYWxzZTtcclxuICAvKipcclxuICAgKiDmjInpkq7mqKHmgIHmoYbphY3nva5cclxuICAgKi9cclxuICBtb2RhbD86IFNUQ29sdW1uQnV0dG9uTW9kYWxDb25maWcgPSB7XHJcbiAgICBwYXJhbXNOYW1lOiAncmVjb3JkJyxcclxuICAgIHNpemU6ICdsZycsXHJcbiAgICBleGFjdDogdHJ1ZSxcclxuICB9O1xyXG4gIC8qKlxyXG4gICAqIOaMiemSruaKveWxiemFjee9rlxyXG4gICAqL1xyXG4gIGRyYXdlcj86IFNUQ29sdW1uQnV0dG9uRHJhd2VyQ29uZmlnID0ge1xyXG4gICAgcGFyYW1zTmFtZTogJ3JlY29yZCcsXHJcbiAgICBzaXplOiAnbWQnLFxyXG4gICAgZm9vdGVyOiB0cnVlLFxyXG4gICAgZm9vdGVySGVpZ2h0OiA1NVxyXG4gIH07XHJcbiAgLyoqXHJcbiAgICog5rCU5rOh56Gu6K6k5qGG5YaF5a65XHJcbiAgICovXHJcbiAgcG9wVGl0bGU/ID0gJ+ehruiupOWIoOmZpOWQl++8nyc7XHJcbiAgLyoqXHJcbiAgICog6KGM5Y2V5Ye75aSa5bCR5pe26ZW/5LmL57G75Li65Y+M5Ye777yI5Y2V5L2N77ya5q+r56eS77yJ77yM6buY6K6k77yaYDIwMGBcclxuICAgKi9cclxuICByb3dDbGlja1RpbWU/ID0gMjAwO1xyXG4gIC8qKlxyXG4gICAqIOi/h+a7pOaMiemSruehruiupOaWh+acrO+8jOm7mOiupO+8mmDnoa7orqRgXHJcbiAgICovXHJcbiAgZmlsdGVyQ29uZmlybVRleHQ/ID0gJ+ehruiupCc7XHJcbiAgLyoqXHJcbiAgICog6L+H5ruk5oyJ6ZKu6YeN572u5paH5pys77yM6buY6K6k77yaYOmHjee9rmBcclxuICAgKi9cclxuICBmaWx0ZXJDbGVhclRleHQ/ID0gJ+mHjee9ric7XHJcbn1cclxuIl19