/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy90YWJsZS8iLCJzb3VyY2VzIjpbInRhYmxlLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBU0EsSUFBQTs7Ozs7b0JBZ0IwQyxTQUFTOzs7OzBDQUluQixLQUFLOzs7O21CQUVyQjtZQUNaLE1BQU0sRUFBRSxLQUFLO1lBQ2IsU0FBUyxFQUFFLEtBQUs7WUFDaEIsTUFBTSxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFO1NBQy9COzs7O21CQUVhO1lBQ1osTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUU7U0FDN0M7Ozs7b0JBRWU7WUFDZCxLQUFLLEVBQUUsSUFBSTtZQUNYLFdBQVcsRUFBRSxLQUFLO1lBQ2xCLFNBQVMsRUFBRSxPQUFPO1lBQ2xCLElBQUksRUFBRSxJQUFJO1lBQ1YsUUFBUSxFQUFFLEtBQUs7WUFDZixTQUFTLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO1lBQy9CLGVBQWUsRUFBRSxLQUFLO1lBQ3RCLEtBQUssRUFBRSxJQUFJO1lBQ1gsVUFBVSxFQUFFLElBQUk7WUFDaEIsS0FBSyxFQUFFLElBQUk7WUFDWCxXQUFXLEVBQUUsR0FBRztTQUNqQjs7Ozt5QkFRbUMsS0FBSzs7OztxQkFJTDtZQUNsQyxVQUFVLEVBQUUsUUFBUTtZQUNwQixJQUFJLEVBQUUsSUFBSTtZQUNWLEtBQUssRUFBRSxJQUFJO1NBQ1o7Ozs7c0JBSXFDO1lBQ3BDLFVBQVUsRUFBRSxRQUFRO1lBQ3BCLElBQUksRUFBRSxJQUFJO1lBQ1YsTUFBTSxFQUFFLElBQUk7WUFDWixZQUFZLEVBQUUsRUFBRTtTQUNqQjs7Ozt3QkFJVyxRQUFROzs7OzRCQUlKLEdBQUc7Ozs7aUNBSUUsSUFBSTs7OzsrQkFJTixJQUFJOzttQkE5RnpCO0lBK0ZDLENBQUE7QUF0RkQsb0JBc0ZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBTVE11bHRpU29ydCxcclxuICBTVFJlcSxcclxuICBTVFJlcyxcclxuICBTVFBhZ2UsXHJcbiAgU1RDb2x1bW5CdXR0b25Nb2RhbENvbmZpZyxcclxuICBTVENvbHVtbkJ1dHRvbkRyYXdlckNvbmZpZyxcclxufSBmcm9tICcuL3RhYmxlLmludGVyZmFjZXMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNUQ29uZmlnIHtcclxuICAvKipcclxuICAgKiDotbflp4vpobXnoIHvvIzpu5jorqTkuLrvvJpgMWBcclxuICAgKi9cclxuICBwaT86IG51bWJlcjtcclxuICAvKipcclxuICAgKiDmr4/pobXmlbDph4/vvIzlvZPorr7nva7kuLogYDBgIOihqOekuuS4jeWIhumhte+8jOm7mOiupO+8mmAxMGBcclxuICAgKi9cclxuICBwcz86IG51bWJlcjtcclxuICAvKipcclxuICAgKiDmmK/lkKbmmL7npLrovrnmoYZcclxuICAgKi9cclxuICBib3JkZXJlZD86IGJvb2xlYW47XHJcbiAgLyoqXHJcbiAgICogdGFibGXlpKflsI9cclxuICAgKi9cclxuICBzaXplPzogJ3NtYWxsJyB8ICdtaWRkbGUnIHwgJ2RlZmF1bHQnID0gJ2RlZmF1bHQnO1xyXG4gIC8qKlxyXG4gICAqIOaYr+WQpumakOiXj+WktOWSjOWwvu+8jOW9k+Wwj+Wxj+W5leS4i+aJjeaYvuekuu+8jOm7mOiupO+8mmBmYWxzZWBcclxuICAgKi9cclxuICByZXNwb25zaXZlSGlkZUhlYWRlckZvb3Rlcj8gPSBmYWxzZTtcclxuICAvKiog6K+35rGC5L2T6YWN572uICovXHJcbiAgcmVxPzogU1RSZXEgPSB7XHJcbiAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgYWxsSW5Cb2R5OiBmYWxzZSxcclxuICAgIHJlTmFtZTogeyBwaTogJ3BpJywgcHM6ICdwcycgfSxcclxuICB9O1xyXG4gIC8qKiDov5Tlm57kvZPphY3nva4gKi9cclxuICByZXM/OiBTVFJlcyA9IHtcclxuICAgIHJlTmFtZTogeyBsaXN0OiBbJ2xpc3QnXSwgdG90YWw6IFsndG90YWwnXSB9LFxyXG4gIH07XHJcbiAgLyoqIOi/lOWbnuS9k+mFjee9riAqL1xyXG4gIHBhZ2U/OiBTVFBhZ2UgPSB7XHJcbiAgICBmcm9udDogdHJ1ZSxcclxuICAgIHplcm9JbmRleGVkOiBmYWxzZSxcclxuICAgIHBsYWNlbWVudDogJ3JpZ2h0JyxcclxuICAgIHNob3c6IHRydWUsXHJcbiAgICBzaG93U2l6ZTogZmFsc2UsXHJcbiAgICBwYWdlU2l6ZXM6IFsxMCwgMjAsIDMwLCA0MCwgNTBdLFxyXG4gICAgc2hvd1F1aWNrSnVtcGVyOiBmYWxzZSxcclxuICAgIHRvdGFsOiB0cnVlLFxyXG4gICAgaW5kZXhSZXNldDogdHJ1ZSxcclxuICAgIHRvVG9wOiB0cnVlLFxyXG4gICAgdG9Ub3BPZmZzZXQ6IDEwMCxcclxuICB9O1xyXG4gIC8qKlxyXG4gICAqIOmHjeWRveWQjeaOkuW6j+WAvO+8jGBjb2x1bW5zYCDnmoTph43lkb3lkI3pq5jkuo7lsZ7mgKdcclxuICAgKi9cclxuICBzb3J0UmVOYW1lPzogeyBhc2NlbmQ/OiBzdHJpbmc7IGRlc2NlbmQ/OiBzdHJpbmcgfTtcclxuICAvKipcclxuICAgKiDmmK/lkKblpJrmjpLluo/vvIzlvZMgYHNvcnRgIOWkmuS4quebuOWQjOWAvOaXtuiHquWKqOWQiOW5tu+8jOW7uuiuruWQjuerr+aUr+aMgeaXtuS9v+eUqFxyXG4gICAqL1xyXG4gIG11bHRpU29ydD86IGJvb2xlYW4gfCBTVE11bHRpU29ydCA9IGZhbHNlO1xyXG4gIC8qKlxyXG4gICAqIOaMiemSruaooeaAgeahhumFjee9rlxyXG4gICAqL1xyXG4gIG1vZGFsPzogU1RDb2x1bW5CdXR0b25Nb2RhbENvbmZpZyA9IHtcclxuICAgIHBhcmFtc05hbWU6ICdyZWNvcmQnLFxyXG4gICAgc2l6ZTogJ2xnJyxcclxuICAgIGV4YWN0OiB0cnVlLFxyXG4gIH07XHJcbiAgLyoqXHJcbiAgICog5oyJ6ZKu5oq95bGJ6YWN572uXHJcbiAgICovXHJcbiAgZHJhd2VyPzogU1RDb2x1bW5CdXR0b25EcmF3ZXJDb25maWcgPSB7XHJcbiAgICBwYXJhbXNOYW1lOiAncmVjb3JkJyxcclxuICAgIHNpemU6ICdtZCcsXHJcbiAgICBmb290ZXI6IHRydWUsXHJcbiAgICBmb290ZXJIZWlnaHQ6IDU1XHJcbiAgfTtcclxuICAvKipcclxuICAgKiDmsJTms6Hnoa7orqTmoYblhoXlrrlcclxuICAgKi9cclxuICBwb3BUaXRsZT8gPSAn56Gu6K6k5Yig6Zmk5ZCX77yfJztcclxuICAvKipcclxuICAgKiDooYzljZXlh7vlpJrlsJHml7bplb/kuYvnsbvkuLrlj4zlh7vvvIjljZXkvY3vvJrmr6vnp5LvvInvvIzpu5jorqTvvJpgMjAwYFxyXG4gICAqL1xyXG4gIHJvd0NsaWNrVGltZT8gPSAyMDA7XHJcbiAgLyoqXHJcbiAgICog6L+H5ruk5oyJ6ZKu56Gu6K6k5paH5pys77yM6buY6K6k77yaYOehruiupGBcclxuICAgKi9cclxuICBmaWx0ZXJDb25maXJtVGV4dD8gPSAn56Gu6K6kJztcclxuICAvKipcclxuICAgKiDov4fmu6TmjInpkq7ph43nva7mlofmnKzvvIzpu5jorqTvvJpg6YeN572uYFxyXG4gICAqL1xyXG4gIGZpbHRlckNsZWFyVGV4dD8gPSAn6YeN572uJztcclxufVxyXG4iXX0=