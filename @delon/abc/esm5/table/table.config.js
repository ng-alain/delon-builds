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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy90YWJsZS8iLCJzb3VyY2VzIjpbInRhYmxlLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBU0EsSUFBQTs7Ozs7b0JBZ0IwQyxTQUFTOzs7OzBDQUluQixLQUFLOzs7O21CQUVyQjtZQUNaLE1BQU0sRUFBRSxLQUFLO1lBQ2IsU0FBUyxFQUFFLEtBQUs7WUFDaEIsTUFBTSxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFO1NBQy9COzs7O21CQUVhO1lBQ1osTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUU7U0FDN0M7Ozs7b0JBRWU7WUFDZCxLQUFLLEVBQUUsSUFBSTtZQUNYLFdBQVcsRUFBRSxLQUFLO1lBQ2xCLFNBQVMsRUFBRSxPQUFPO1lBQ2xCLElBQUksRUFBRSxJQUFJO1lBQ1YsUUFBUSxFQUFFLEtBQUs7WUFDZixTQUFTLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO1lBQy9CLGVBQWUsRUFBRSxLQUFLO1lBQ3RCLEtBQUssRUFBRSxJQUFJO1lBQ1gsVUFBVSxFQUFFLElBQUk7WUFDaEIsS0FBSyxFQUFFLElBQUk7WUFDWCxXQUFXLEVBQUUsR0FBRztTQUNqQjs7Ozt5QkFRbUMsS0FBSzs7OztxQkFJTDtZQUNsQyxVQUFVLEVBQUUsUUFBUTtZQUNwQixJQUFJLEVBQUUsSUFBSTtZQUNWLEtBQUssRUFBRSxJQUFJO1NBQ1o7Ozs7c0JBSXFDO1lBQ3BDLFVBQVUsRUFBRSxRQUFRO1lBQ3BCLElBQUksRUFBRSxJQUFJO1lBQ1YsTUFBTSxFQUFFLElBQUk7WUFDWixZQUFZLEVBQUUsRUFBRTtTQUNqQjs7Ozt3QkFJVyxRQUFROzs7OzRCQUlKLEdBQUc7Ozs7aUNBSUUsSUFBSTs7OzsrQkFJTixJQUFJOzttQkE5RnpCO0lBK0ZDLENBQUE7QUF0RkQsb0JBc0ZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgU1RNdWx0aVNvcnQsXG4gIFNUUmVxLFxuICBTVFJlcyxcbiAgU1RQYWdlLFxuICBTVENvbHVtbkJ1dHRvbk1vZGFsQ29uZmlnLFxuICBTVENvbHVtbkJ1dHRvbkRyYXdlckNvbmZpZyxcbn0gZnJvbSAnLi90YWJsZS5pbnRlcmZhY2VzJztcblxuZXhwb3J0IGNsYXNzIFNUQ29uZmlnIHtcbiAgLyoqXG4gICAqIOi1t+Wni+mhteegge+8jOm7mOiupOS4uu+8mmAxYFxuICAgKi9cbiAgcGk/OiBudW1iZXI7XG4gIC8qKlxuICAgKiDmr4/pobXmlbDph4/vvIzlvZPorr7nva7kuLogYDBgIOihqOekuuS4jeWIhumhte+8jOm7mOiupO+8mmAxMGBcbiAgICovXG4gIHBzPzogbnVtYmVyO1xuICAvKipcbiAgICog5piv5ZCm5pi+56S66L655qGGXG4gICAqL1xuICBib3JkZXJlZD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiB0YWJsZeWkp+Wwj1xuICAgKi9cbiAgc2l6ZT86ICdzbWFsbCcgfCAnbWlkZGxlJyB8ICdkZWZhdWx0JyA9ICdkZWZhdWx0JztcbiAgLyoqXG4gICAqIOaYr+WQpumakOiXj+WktOWSjOWwvu+8jOW9k+Wwj+Wxj+W5leS4i+aJjeaYvuekuu+8jOm7mOiupO+8mmBmYWxzZWBcbiAgICovXG4gIHJlc3BvbnNpdmVIaWRlSGVhZGVyRm9vdGVyPyA9IGZhbHNlO1xuICAvKiog6K+35rGC5L2T6YWN572uICovXG4gIHJlcT86IFNUUmVxID0ge1xuICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgYWxsSW5Cb2R5OiBmYWxzZSxcbiAgICByZU5hbWU6IHsgcGk6ICdwaScsIHBzOiAncHMnIH0sXG4gIH07XG4gIC8qKiDov5Tlm57kvZPphY3nva4gKi9cbiAgcmVzPzogU1RSZXMgPSB7XG4gICAgcmVOYW1lOiB7IGxpc3Q6IFsnbGlzdCddLCB0b3RhbDogWyd0b3RhbCddIH0sXG4gIH07XG4gIC8qKiDov5Tlm57kvZPphY3nva4gKi9cbiAgcGFnZT86IFNUUGFnZSA9IHtcbiAgICBmcm9udDogdHJ1ZSxcbiAgICB6ZXJvSW5kZXhlZDogZmFsc2UsXG4gICAgcGxhY2VtZW50OiAncmlnaHQnLFxuICAgIHNob3c6IHRydWUsXG4gICAgc2hvd1NpemU6IGZhbHNlLFxuICAgIHBhZ2VTaXplczogWzEwLCAyMCwgMzAsIDQwLCA1MF0sXG4gICAgc2hvd1F1aWNrSnVtcGVyOiBmYWxzZSxcbiAgICB0b3RhbDogdHJ1ZSxcbiAgICBpbmRleFJlc2V0OiB0cnVlLFxuICAgIHRvVG9wOiB0cnVlLFxuICAgIHRvVG9wT2Zmc2V0OiAxMDAsXG4gIH07XG4gIC8qKlxuICAgKiDph43lkb3lkI3mjpLluo/lgLzvvIxgY29sdW1uc2Ag55qE6YeN5ZG95ZCN6auY5LqO5bGe5oCnXG4gICAqL1xuICBzb3J0UmVOYW1lPzogeyBhc2NlbmQ/OiBzdHJpbmc7IGRlc2NlbmQ/OiBzdHJpbmcgfTtcbiAgLyoqXG4gICAqIOaYr+WQpuWkmuaOkuW6j++8jOW9kyBgc29ydGAg5aSa5Liq55u45ZCM5YC85pe26Ieq5Yqo5ZCI5bm277yM5bu66K6u5ZCO56uv5pSv5oyB5pe25L2/55SoXG4gICAqL1xuICBtdWx0aVNvcnQ/OiBib29sZWFuIHwgU1RNdWx0aVNvcnQgPSBmYWxzZTtcbiAgLyoqXG4gICAqIOaMiemSruaooeaAgeahhumFjee9rlxuICAgKi9cbiAgbW9kYWw/OiBTVENvbHVtbkJ1dHRvbk1vZGFsQ29uZmlnID0ge1xuICAgIHBhcmFtc05hbWU6ICdyZWNvcmQnLFxuICAgIHNpemU6ICdsZycsXG4gICAgZXhhY3Q6IHRydWUsXG4gIH07XG4gIC8qKlxuICAgKiDmjInpkq7mir3lsYnphY3nva5cbiAgICovXG4gIGRyYXdlcj86IFNUQ29sdW1uQnV0dG9uRHJhd2VyQ29uZmlnID0ge1xuICAgIHBhcmFtc05hbWU6ICdyZWNvcmQnLFxuICAgIHNpemU6ICdtZCcsXG4gICAgZm9vdGVyOiB0cnVlLFxuICAgIGZvb3RlckhlaWdodDogNTVcbiAgfTtcbiAgLyoqXG4gICAqIOawlOazoeehruiupOahhuWGheWuuVxuICAgKi9cbiAgcG9wVGl0bGU/ID0gJ+ehruiupOWIoOmZpOWQl++8nyc7XG4gIC8qKlxuICAgKiDooYzljZXlh7vlpJrlsJHml7bplb/kuYvnsbvkuLrlj4zlh7vvvIjljZXkvY3vvJrmr6vnp5LvvInvvIzpu5jorqTvvJpgMjAwYFxuICAgKi9cbiAgcm93Q2xpY2tUaW1lPyA9IDIwMDtcbiAgLyoqXG4gICAqIOi/h+a7pOaMiemSruehruiupOaWh+acrO+8jOm7mOiupO+8mmDnoa7orqRgXG4gICAqL1xuICBmaWx0ZXJDb25maXJtVGV4dD8gPSAn56Gu6K6kJztcbiAgLyoqXG4gICAqIOi/h+a7pOaMiemSrumHjee9ruaWh+acrO+8jOm7mOiupO+8mmDph43nva5gXG4gICAqL1xuICBmaWx0ZXJDbGVhclRleHQ/ID0gJ+mHjee9ric7XG59XG4iXX0=