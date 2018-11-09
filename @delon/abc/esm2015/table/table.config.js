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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy90YWJsZS8iLCJzb3VyY2VzIjpbInRhYmxlLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBV0EsTUFBTTs7Ozs7b0JBZ0JvQyxTQUFTOzs7OzBDQUluQixLQUFLOzs7O21CQUVyQjtZQUNaLE1BQU0sRUFBRSxLQUFLO1lBQ2IsU0FBUyxFQUFFLEtBQUs7WUFDaEIsTUFBTSxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFO1NBQy9COzs7O21CQUVhO1lBQ1osTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUU7U0FDN0M7Ozs7b0JBRWU7WUFDZCxLQUFLLEVBQUUsSUFBSTtZQUNYLFdBQVcsRUFBRSxLQUFLO1lBQ2xCLFNBQVMsRUFBRSxPQUFPO1lBQ2xCLElBQUksRUFBRSxJQUFJO1lBQ1YsUUFBUSxFQUFFLEtBQUs7WUFDZixTQUFTLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO1lBQy9CLGVBQWUsRUFBRSxLQUFLO1lBQ3RCLEtBQUssRUFBRSxJQUFJO1lBQ1gsVUFBVSxFQUFFLElBQUk7WUFDaEIsS0FBSyxFQUFFLElBQUk7WUFDWCxXQUFXLEVBQUUsR0FBRztTQUNqQjs7Ozt5QkFRbUMsS0FBSzs7OztxQkFJTDtZQUNsQyxVQUFVLEVBQUUsUUFBUTtZQUNwQixJQUFJLEVBQUUsSUFBSTtZQUNWLEtBQUssRUFBRSxJQUFJO1NBQ1o7Ozs7c0JBSXFDO1lBQ3BDLFVBQVUsRUFBRSxRQUFRO1lBQ3BCLElBQUksRUFBRSxJQUFJO1lBQ1YsTUFBTSxFQUFFLElBQUk7WUFDWixZQUFZLEVBQUUsRUFBRTtTQUNqQjs7Ozt3QkFJVyxRQUFROzs7OzRCQUlKLEdBQUc7Ozs7aUNBSUUsSUFBSTs7OzsrQkFJTixJQUFJOzs7O3VCQUlKO1lBQ2pCLElBQUksRUFBRSxFQUFFO1lBQ1IsS0FBSyxFQUFFLFNBQVM7WUFDaEIsSUFBSSxFQUFFLEtBQUs7U0FDWjs7Ozs7dUJBS1UsQ0FBQzs7Q0FLYiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIFNUTXVsdGlTb3J0LFxuICBTVFJlcSxcbiAgU1RSZXMsXG4gIFNUUGFnZSxcbiAgU1RDb2x1bW5CdXR0b25Nb2RhbENvbmZpZyxcbiAgU1RDb2x1bW5CdXR0b25EcmF3ZXJDb25maWcsXG4gIFNUSWNvbixcbiAgU1RSb3dDbGFzc05hbWUsXG59IGZyb20gJy4vdGFibGUuaW50ZXJmYWNlcyc7XG5cbmV4cG9ydCBjbGFzcyBTVENvbmZpZyB7XG4gIC8qKlxuICAgKiDotbflp4vpobXnoIHvvIzpu5jorqTkuLrvvJpgMWBcbiAgICovXG4gIHBpPzogbnVtYmVyO1xuICAvKipcbiAgICog5q+P6aG15pWw6YeP77yM5b2T6K6+572u5Li6IGAwYCDooajnpLrkuI3liIbpobXvvIzpu5jorqTvvJpgMTBgXG4gICAqL1xuICBwcz86IG51bWJlcjtcbiAgLyoqXG4gICAqIOaYr+WQpuaYvuekuui+ueahhlxuICAgKi9cbiAgYm9yZGVyZWQ/OiBib29sZWFuO1xuICAvKipcbiAgICogdGFibGXlpKflsI9cbiAgICovXG4gIHNpemU/OiAnc21hbGwnIHwgJ21pZGRsZScgfCAnZGVmYXVsdCcgPSAnZGVmYXVsdCc7XG4gIC8qKlxuICAgKiDmmK/lkKbpmpDol4/lpLTlkozlsL7vvIzlvZPlsI/lsY/luZXkuIvmiY3mmL7npLrvvIzpu5jorqTvvJpgZmFsc2VgXG4gICAqL1xuICByZXNwb25zaXZlSGlkZUhlYWRlckZvb3Rlcj8gPSBmYWxzZTtcbiAgLyoqIOivt+axguS9k+mFjee9riAqL1xuICByZXE/OiBTVFJlcSA9IHtcbiAgICBtZXRob2Q6ICdHRVQnLFxuICAgIGFsbEluQm9keTogZmFsc2UsXG4gICAgcmVOYW1lOiB7IHBpOiAncGknLCBwczogJ3BzJyB9LFxuICB9O1xuICAvKiog6L+U5Zue5L2T6YWN572uICovXG4gIHJlcz86IFNUUmVzID0ge1xuICAgIHJlTmFtZTogeyBsaXN0OiBbJ2xpc3QnXSwgdG90YWw6IFsndG90YWwnXSB9LFxuICB9O1xuICAvKiog6L+U5Zue5L2T6YWN572uICovXG4gIHBhZ2U/OiBTVFBhZ2UgPSB7XG4gICAgZnJvbnQ6IHRydWUsXG4gICAgemVyb0luZGV4ZWQ6IGZhbHNlLFxuICAgIHBsYWNlbWVudDogJ3JpZ2h0JyxcbiAgICBzaG93OiB0cnVlLFxuICAgIHNob3dTaXplOiBmYWxzZSxcbiAgICBwYWdlU2l6ZXM6IFsxMCwgMjAsIDMwLCA0MCwgNTBdLFxuICAgIHNob3dRdWlja0p1bXBlcjogZmFsc2UsXG4gICAgdG90YWw6IHRydWUsXG4gICAgaW5kZXhSZXNldDogdHJ1ZSxcbiAgICB0b1RvcDogdHJ1ZSxcbiAgICB0b1RvcE9mZnNldDogMTAwLFxuICB9O1xuICAvKipcbiAgICog6YeN5ZG95ZCN5o6S5bqP5YC877yMYGNvbHVtbnNgIOeahOmHjeWRveWQjemrmOS6juWxnuaAp1xuICAgKi9cbiAgc29ydFJlTmFtZT86IHsgYXNjZW5kPzogc3RyaW5nOyBkZXNjZW5kPzogc3RyaW5nIH07XG4gIC8qKlxuICAgKiDmmK/lkKblpJrmjpLluo/vvIzlvZMgYHNvcnRgIOWkmuS4quebuOWQjOWAvOaXtuiHquWKqOWQiOW5tu+8jOW7uuiuruWQjuerr+aUr+aMgeaXtuS9v+eUqFxuICAgKi9cbiAgbXVsdGlTb3J0PzogYm9vbGVhbiB8IFNUTXVsdGlTb3J0ID0gZmFsc2U7XG4gIC8qKlxuICAgKiDmjInpkq7mqKHmgIHmoYbphY3nva5cbiAgICovXG4gIG1vZGFsPzogU1RDb2x1bW5CdXR0b25Nb2RhbENvbmZpZyA9IHtcbiAgICBwYXJhbXNOYW1lOiAncmVjb3JkJyxcbiAgICBzaXplOiAnbGcnLFxuICAgIGV4YWN0OiB0cnVlLFxuICB9O1xuICAvKipcbiAgICog5oyJ6ZKu5oq95bGJ6YWN572uXG4gICAqL1xuICBkcmF3ZXI/OiBTVENvbHVtbkJ1dHRvbkRyYXdlckNvbmZpZyA9IHtcbiAgICBwYXJhbXNOYW1lOiAncmVjb3JkJyxcbiAgICBzaXplOiAnbWQnLFxuICAgIGZvb3RlcjogdHJ1ZSxcbiAgICBmb290ZXJIZWlnaHQ6IDU1LFxuICB9O1xuICAvKipcbiAgICog5rCU5rOh56Gu6K6k5qGG5YaF5a65XG4gICAqL1xuICBwb3BUaXRsZT8gPSAn56Gu6K6k5Yig6Zmk5ZCX77yfJztcbiAgLyoqXG4gICAqIOihjOWNleWHu+WkmuWwkeaXtumVv+S5i+exu+S4uuWPjOWHu++8iOWNleS9je+8muavq+enku+8ie+8jOm7mOiupO+8mmAyMDBgXG4gICAqL1xuICByb3dDbGlja1RpbWU/ID0gMjAwO1xuICAvKipcbiAgICog6L+H5ruk5oyJ6ZKu56Gu6K6k5paH5pys77yM6buY6K6k77yaYOehruiupGBcbiAgICovXG4gIGZpbHRlckNvbmZpcm1UZXh0PyA9ICfnoa7orqQnO1xuICAvKipcbiAgICog6L+H5ruk5oyJ6ZKu6YeN572u5paH5pys77yM6buY6K6k77yaYOmHjee9rmBcbiAgICovXG4gIGZpbHRlckNsZWFyVGV4dD8gPSAn6YeN572uJztcbiAgLyoqXG4gICAqIOaMiemSruWbvuagh1xuICAgKi9cbiAgYnRuSWNvbj86IFNUSWNvbiA9IHtcbiAgICB0eXBlOiAnJyxcbiAgICB0aGVtZTogJ291dGxpbmUnLFxuICAgIHNwaW46IGZhbHNlLFxuICB9O1xuICAvKipcbiAgICog6KGM5Y+357Si5byV77yM6buY6K6k77yaYDFgXG4gICAqIC0g6K6h566X6KeE5YiZ5Li677yaYGluZGV4ICsgbm9JbmRleGBcbiAgICovXG4gIG5vSW5kZXg/ID0gMTtcbiAgLyoqXG4gICAqIOihqOagvOihjOeahOexu+WQjVxuICAgKi9cbiAgcm93Q2xhc3NOYW1lPzogU1RSb3dDbGFzc05hbWU7XG59XG4iXX0=