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
    STConfig.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ STConfig.ngInjectableDef = i0.defineInjectable({ factory: function STConfig_Factory() { return new STConfig(); }, token: STConfig, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy90YWJsZS8iLCJzb3VyY2VzIjpbInRhYmxlLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFjM0M7SUFBQTs7OztRQWlCRSxTQUFJLEdBQW9DLFNBQVMsQ0FBQzs7OztRQUlsRCwrQkFBMEIsR0FBYSxLQUFLLENBQUM7Ozs7UUFFN0MsUUFBRyxHQUFXO1lBQ1osSUFBSSxFQUFFLE1BQU07WUFDWixNQUFNLEVBQUUsS0FBSztZQUNiLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLE1BQU0sRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUU7U0FDN0QsQ0FBQzs7OztRQUVGLFFBQUcsR0FBVztZQUNaLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1NBQzdDLENBQUM7Ozs7UUFFRixTQUFJLEdBQVk7WUFDZCxLQUFLLEVBQUUsSUFBSTtZQUNYLFdBQVcsRUFBRSxLQUFLO1lBQ2xCLFNBQVMsRUFBRSxPQUFPO1lBQ2xCLElBQUksRUFBRSxJQUFJO1lBQ1YsUUFBUSxFQUFFLEtBQUs7WUFDZixTQUFTLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO1lBQy9CLGVBQWUsRUFBRSxLQUFLO1lBQ3RCLEtBQUssRUFBRSxJQUFJO1lBQ1gsVUFBVSxFQUFFLElBQUk7WUFDaEIsS0FBSyxFQUFFLElBQUk7WUFDWCxXQUFXLEVBQUUsR0FBRztTQUNqQixDQUFDOzs7Ozs7UUFVRixlQUFVLEdBQWtCLElBQUksQ0FBQzs7OztRQUlqQyxjQUFTLEdBQWlCLElBQUksQ0FBQzs7OztRQUkvQixVQUFLLEdBQStCO1lBQ2xDLFVBQVUsRUFBRSxRQUFRO1lBQ3BCLElBQUksRUFBRSxJQUFJO1lBQ1YsS0FBSyxFQUFFLElBQUk7U0FDWixDQUFDOzs7O1FBSUYsV0FBTSxHQUFnQztZQUNwQyxVQUFVLEVBQUUsUUFBUTtZQUNwQixJQUFJLEVBQUUsSUFBSTtZQUNWLE1BQU0sRUFBRSxJQUFJO1lBQ1osWUFBWSxFQUFFLEVBQUU7U0FDakIsQ0FBQzs7OztRQUlGLGFBQVEsR0FBWSxRQUFRLENBQUM7Ozs7UUFJN0IsaUJBQVksR0FBWSxHQUFHLENBQUM7Ozs7UUFJNUIsc0JBQWlCLEdBQVksSUFBSSxDQUFDOzs7O1FBSWxDLG9CQUFlLEdBQVksSUFBSSxDQUFDOzs7O1FBSWhDLFlBQU8sR0FBWTtZQUNqQixJQUFJLEVBQUUsRUFBRTtZQUNSLEtBQUssRUFBRSxTQUFTO1lBQ2hCLElBQUksRUFBRSxLQUFLO1NBQ1osQ0FBQzs7Ozs7UUFLRixZQUFPLEdBQVksQ0FBQyxDQUFDOzs7O1FBUXJCLHFCQUFnQixHQUFhLEtBQUssQ0FBQzs7OztRQUluQyxjQUFTLEdBQWlCO1lBQ3hCLElBQUksRUFBRSxTQUFTO1lBQ2YsY0FBYyxFQUFFLFVBQVU7U0FDM0IsQ0FBQztLQUNIOztnQkExSEEsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7O21CQWRsQztDQXdJQyxBQTFIRCxJQTBIQztTQXpIWSxRQUFROzs7Ozs7SUFJbkIsc0JBQVk7Ozs7O0lBSVosc0JBQVk7Ozs7O0lBSVosNEJBQW1COzs7OztJQUluQix3QkFBa0Q7Ozs7O0lBSWxELDhDQUE2Qzs7Ozs7SUFFN0MsdUJBS0U7Ozs7O0lBRUYsdUJBRUU7Ozs7O0lBRUYsd0JBWUU7Ozs7O0lBSUYsOEJBQW1EOzs7Ozs7O0lBTW5ELDhCQUFpQzs7Ozs7SUFJakMsNkJBQStCOzs7OztJQUkvQix5QkFJRTs7Ozs7SUFJRiwwQkFLRTs7Ozs7SUFJRiw0QkFBNkI7Ozs7O0lBSTdCLGdDQUE0Qjs7Ozs7SUFJNUIscUNBQWtDOzs7OztJQUlsQyxtQ0FBZ0M7Ozs7O0lBSWhDLDJCQUlFOzs7Ozs7SUFLRiwyQkFBcUI7Ozs7O0lBSXJCLGdDQUE4Qjs7Ozs7SUFJOUIsb0NBQW1DOzs7OztJQUluQyw2QkFHRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIFNUQ29sdW1uQnV0dG9uRHJhd2VyQ29uZmlnLFxuICBTVENvbHVtbkJ1dHRvbk1vZGFsQ29uZmlnLFxuICBTVEljb24sXG4gIFNUTXVsdGlTb3J0LFxuICBTVFBhZ2UsXG4gIFNUUmVxLFxuICBTVFJlcyxcbiAgU1RSb3dDbGFzc05hbWUsXG4gIFNUU2luZ2xlU29ydCxcbiAgU1RXaWR0aE1vZGUsXG59IGZyb20gJy4vdGFibGUuaW50ZXJmYWNlcyc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgU1RDb25maWcge1xuICAvKipcbiAgICog6LW35aeL6aG156CB77yM6buY6K6k5Li677yaYDFgXG4gICAqL1xuICBwaT86IG51bWJlcjtcbiAgLyoqXG4gICAqIOavj+mhteaVsOmHj++8jOW9k+iuvue9ruS4uiBgMGAg6KGo56S65LiN5YiG6aG177yM6buY6K6k77yaYDEwYFxuICAgKi9cbiAgcHM/OiBudW1iZXI7XG4gIC8qKlxuICAgKiDmmK/lkKbmmL7npLrovrnmoYZcbiAgICovXG4gIGJvcmRlcmVkPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIHRhYmxl5aSn5bCPXG4gICAqL1xuICBzaXplPzogJ3NtYWxsJyB8ICdtaWRkbGUnIHwgJ2RlZmF1bHQnID0gJ2RlZmF1bHQnO1xuICAvKipcbiAgICog5piv5ZCm6ZqQ6JeP5aS05ZKM5bC+77yM5b2T5bCP5bGP5bmV5LiL5omN5pi+56S677yM6buY6K6k77yaYGZhbHNlYFxuICAgKi9cbiAgcmVzcG9uc2l2ZUhpZGVIZWFkZXJGb290ZXI/OiBib29sZWFuID0gZmFsc2U7XG4gIC8qKiDor7fmsYLkvZPphY3nva4gKi9cbiAgcmVxPzogU1RSZXEgPSB7XG4gICAgdHlwZTogJ3BhZ2UnLFxuICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgYWxsSW5Cb2R5OiBmYWxzZSxcbiAgICByZU5hbWU6IHsgcGk6ICdwaScsIHBzOiAncHMnLCBza2lwOiAnc2tpcCcsIGxpbWl0OiAnbGltaXQnIH0sXG4gIH07XG4gIC8qKiDov5Tlm57kvZPphY3nva4gKi9cbiAgcmVzPzogU1RSZXMgPSB7XG4gICAgcmVOYW1lOiB7IGxpc3Q6IFsnbGlzdCddLCB0b3RhbDogWyd0b3RhbCddIH0sXG4gIH07XG4gIC8qKiDov5Tlm57kvZPphY3nva4gKi9cbiAgcGFnZT86IFNUUGFnZSA9IHtcbiAgICBmcm9udDogdHJ1ZSxcbiAgICB6ZXJvSW5kZXhlZDogZmFsc2UsXG4gICAgcGxhY2VtZW50OiAncmlnaHQnLFxuICAgIHNob3c6IHRydWUsXG4gICAgc2hvd1NpemU6IGZhbHNlLFxuICAgIHBhZ2VTaXplczogWzEwLCAyMCwgMzAsIDQwLCA1MF0sXG4gICAgc2hvd1F1aWNrSnVtcGVyOiBmYWxzZSxcbiAgICB0b3RhbDogdHJ1ZSxcbiAgICBpbmRleFJlc2V0OiB0cnVlLFxuICAgIHRvVG9wOiB0cnVlLFxuICAgIHRvVG9wT2Zmc2V0OiAxMDAsXG4gIH07XG4gIC8qKlxuICAgKiDph43lkb3lkI3mjpLluo/lgLzvvIxgY29sdW1uc2Ag55qE6YeN5ZG95ZCN6auY5LqO5bGe5oCnXG4gICAqL1xuICBzb3J0UmVOYW1lPzogeyBhc2NlbmQ/OiBzdHJpbmc7IGRlc2NlbmQ/OiBzdHJpbmcgfTtcbiAgLyoqXG4gICAqIOWNleaOkuW6j+inhOWImVxuICAgKiAtIOiLpeS4jeaMh+Wumu+8jOWImei/lOWbnu+8mmBjb2x1bW5OYW1lPWFzY2VuZHxkZXNjZW5kYFxuICAgKiAtIOiLpeaMh+Wumu+8jOWImei/lOWbnu+8mmBzb3J0PWNvbHVtbk5hbWUuKGFzY2VuZHxkZXNjZW5kKWBcbiAgICovXG4gIHNpbmdsZVNvcnQ/OiBTVFNpbmdsZVNvcnQgPSBudWxsO1xuICAvKipcbiAgICog5piv5ZCm5aSa5o6S5bqP77yM5b2TIGBzb3J0YCDlpJrkuKrnm7jlkIzlgLzml7boh6rliqjlkIjlubbvvIzlu7rorq7lkI7nq6/mlK/mjIHml7bkvb/nlKhcbiAgICovXG4gIG11bHRpU29ydD86IFNUTXVsdGlTb3J0ID0gbnVsbDtcbiAgLyoqXG4gICAqIOaMiemSruaooeaAgeahhumFjee9rlxuICAgKi9cbiAgbW9kYWw/OiBTVENvbHVtbkJ1dHRvbk1vZGFsQ29uZmlnID0ge1xuICAgIHBhcmFtc05hbWU6ICdyZWNvcmQnLFxuICAgIHNpemU6ICdsZycsXG4gICAgZXhhY3Q6IHRydWUsXG4gIH07XG4gIC8qKlxuICAgKiDmjInpkq7mir3lsYnphY3nva5cbiAgICovXG4gIGRyYXdlcj86IFNUQ29sdW1uQnV0dG9uRHJhd2VyQ29uZmlnID0ge1xuICAgIHBhcmFtc05hbWU6ICdyZWNvcmQnLFxuICAgIHNpemU6ICdtZCcsXG4gICAgZm9vdGVyOiB0cnVlLFxuICAgIGZvb3RlckhlaWdodDogNTUsXG4gIH07XG4gIC8qKlxuICAgKiDmsJTms6Hnoa7orqTmoYblhoXlrrlcbiAgICovXG4gIHBvcFRpdGxlPzogc3RyaW5nID0gJ+ehruiupOWIoOmZpOWQl++8nyc7XG4gIC8qKlxuICAgKiDooYzljZXlh7vlpJrlsJHml7bplb/kuYvnsbvkuLrlj4zlh7vvvIjljZXkvY3vvJrmr6vnp5LvvInvvIzpu5jorqTvvJpgMjAwYFxuICAgKi9cbiAgcm93Q2xpY2tUaW1lPzogbnVtYmVyID0gMjAwO1xuICAvKipcbiAgICog6L+H5ruk5oyJ6ZKu56Gu6K6k5paH5pys77yM6buY6K6k77yaYOehruiupGBcbiAgICovXG4gIGZpbHRlckNvbmZpcm1UZXh0Pzogc3RyaW5nID0gJ+ehruiupCc7XG4gIC8qKlxuICAgKiDov4fmu6TmjInpkq7ph43nva7mlofmnKzvvIzpu5jorqTvvJpg6YeN572uYFxuICAgKi9cbiAgZmlsdGVyQ2xlYXJUZXh0Pzogc3RyaW5nID0gJ+mHjee9ric7XG4gIC8qKlxuICAgKiDmjInpkq7lm77moIdcbiAgICovXG4gIGJ0bkljb24/OiBTVEljb24gPSB7XG4gICAgdHlwZTogJycsXG4gICAgdGhlbWU6ICdvdXRsaW5lJyxcbiAgICBzcGluOiBmYWxzZSxcbiAgfTtcbiAgLyoqXG4gICAqIOihjOWPt+e0ouW8le+8jOm7mOiupO+8mmAxYFxuICAgKiAtIOiuoeeul+inhOWImeS4uu+8mmBpbmRleCArIG5vSW5kZXhgXG4gICAqL1xuICBub0luZGV4PzogbnVtYmVyID0gMTtcbiAgLyoqXG4gICAqIOihqOagvOihjOeahOexu+WQjVxuICAgKi9cbiAgcm93Q2xhc3NOYW1lPzogU1RSb3dDbGFzc05hbWU7XG4gIC8qKlxuICAgKiDpgJrov4fngrnlh7vooYzmnaXlsZXlvIDlrZDooYxcbiAgICovXG4gIGV4cGFuZFJvd0J5Q2xpY2s/OiBib29sZWFuID0gZmFsc2U7XG4gIC8qKlxuICAgKiDmjIflrpogYHdpZHRoYCDmqKHlvI9cbiAgICovXG4gIHdpZHRoTW9kZT86IFNUV2lkdGhNb2RlID0ge1xuICAgIHR5cGU6ICdkZWZhdWx0JyxcbiAgICBzdHJpY3RCZWhhdmlvcjogJ3RydW5jYXRlJyxcbiAgfTtcbn1cbiJdfQ==