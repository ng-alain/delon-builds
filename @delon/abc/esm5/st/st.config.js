/**
 * @fileoverview added by tsickle
 * Generated from: st.config.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { deprecation10Cog } from '@delon/util';
import * as i0 from "@angular/core";
/** @type {?} */
export var ST_DEFULAT_CONFIG = {
    pi: 1,
    ps: 10,
    size: 'default',
    responsive: true,
    responsiveHideHeaderFooter: false,
    req: {
        type: 'page',
        method: 'GET',
        allInBody: false,
        lazyLoad: false,
        reName: { pi: 'pi', ps: 'ps', skip: 'skip', limit: 'limit' },
    },
    res: {
        reName: { list: ['list'], total: ['total'] },
    },
    page: {
        front: true,
        zeroIndexed: false,
        position: 'bottom',
        placement: 'right',
        show: true,
        showSize: false,
        pageSizes: [10, 20, 30, 40, 50],
        showQuickJumper: false,
        total: true,
        toTop: true,
        toTopOffset: 100,
    },
    modal: {
        paramsName: 'record',
        size: 'lg',
        exact: true,
    },
    drawer: {
        paramsName: 'record',
        size: 'md',
        footer: true,
        footerHeight: 55,
    },
    pop: {
        title: '确认删除吗？',
        trigger: 'click',
        placement: 'top',
    },
    rowClickTime: 200,
    btnIcon: {
        type: '',
        theme: 'outline',
        spin: false,
    },
    noIndex: 1,
    expandRowByClick: false,
    expandAccordion: false,
    widthMode: {
        type: 'default',
        strictBehavior: 'truncate',
    },
    virtualItemSize: 54,
    virtualMaxBufferPx: 200,
    virtualMinBufferPx: 100,
    iifBehavior: 'hide',
};
/**
 * @deprecated `STConfig` is going to be removed in 10.0.0. Please refer to https://ng-alain.com/docs/global-config
 */
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
         * 气泡参数
         */
        this.pop = {
            title: '确认删除吗？',
        };
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
        deprecation10Cog("STConfig");
    }
    STConfig.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    STConfig.ctorParameters = function () { return []; };
    /** @nocollapse */ STConfig.ɵprov = i0.ɵɵdefineInjectable({ factory: function STConfig_Factory() { return new STConfig(); }, token: STConfig, providedIn: "root" });
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
     * 气泡参数
     * @type {?}
     */
    STConfig.prototype.pop;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QuY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9zdC8iLCJzb3VyY2VzIjpbInN0LmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sYUFBYSxDQUFDOzs7QUFnQi9DLE1BQU0sS0FBTyxpQkFBaUIsR0FBa0I7SUFDOUMsRUFBRSxFQUFFLENBQUM7SUFDTCxFQUFFLEVBQUUsRUFBRTtJQUNOLElBQUksRUFBRSxTQUFTO0lBQ2YsVUFBVSxFQUFFLElBQUk7SUFDaEIsMEJBQTBCLEVBQUUsS0FBSztJQUNqQyxHQUFHLEVBQUU7UUFDSCxJQUFJLEVBQUUsTUFBTTtRQUNaLE1BQU0sRUFBRSxLQUFLO1FBQ2IsU0FBUyxFQUFFLEtBQUs7UUFDaEIsUUFBUSxFQUFFLEtBQUs7UUFDZixNQUFNLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFO0tBQzdEO0lBQ0QsR0FBRyxFQUFFO1FBQ0gsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUU7S0FDN0M7SUFDRCxJQUFJLEVBQUU7UUFDSixLQUFLLEVBQUUsSUFBSTtRQUNYLFdBQVcsRUFBRSxLQUFLO1FBQ2xCLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFNBQVMsRUFBRSxPQUFPO1FBQ2xCLElBQUksRUFBRSxJQUFJO1FBQ1YsUUFBUSxFQUFFLEtBQUs7UUFDZixTQUFTLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBQy9CLGVBQWUsRUFBRSxLQUFLO1FBQ3RCLEtBQUssRUFBRSxJQUFJO1FB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YXIvY29yZSc7XG5pbXBvcnQgeyBBbGFpblNUQ29uZmlnIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcbmltcG9ydCB7IGRlcHJlY2F0aW9uMTBDb2cgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQge1xuICBJaWZCZWhhdmlvclR5cGUsXG4gIFNUQ29sdW1uQnV0dG9uRHJhd2VyQ29uZmlnLFxuICBTVENvbHVtbkJ1dHRvbk1vZGFsQ29uZmlnLFxuICBTVENvbHVtbkJ1dHRvblBvcCxcbiAgU1RJY29uLFxuICBTVE11bHRpU29ydCxcbiAgU1RQYWdlLFxuICBTVFJlcSxcbiAgU1RSZXMsXG4gIFNUUm93Q2xhc3NOYW1lLFxuICBTVFNpbmdsZVNvcnQsXG4gIFNUV2lkdGhNb2RlLFxufSBmcm9tICcuL3N0LmludGVyZmFjZXMnO1xuXG5leHBvcnQgY29uc3QgU1RfREVGVUxBVF9DT05GSUc6IEFsYWluU1RDb25maWcgPSB7XG4gIHBpOiAxLFxuICBwczogMTAsXG4gIHNpemU6ICdkZWZhdWx0JyxcbiAgcmVzcG9uc2l2ZTogdHJ1ZSxcbiAgcmVzcG9uc2l2ZUhpZGVIZWFkZXJGb290ZXI6IGZhbHNlLFxuICByZXE6IHtcbiAgICB0eXBlOiAncGFnZScsXG4gICAgbWV0aG9kOiAnR0VUJyxcbiAgICBhbGxJbkJvZHk6IGZhbHNlLFxuICAgIGxhenlMb2FkOiBmYWxzZSxcbiAgICByZU5hbWU6IHsgcGk6ICdwaScsIHBzOiAncHMnLCBza2lwOiAnc2tpcCcsIGxpbWl0OiAnbGltaXQnIH0sXG4gIH0sXG4gIHJlczoge1xuICAgIHJlTmFtZTogeyBsaXN0OiBbJ2xpc3QnXSwgdG90YWw6IFsndG90YWwnXSB9LFxuICB9LFxuICBwYWdlOiB7XG4gICAgZnJvbnQ6IHRydWUsXG4gICAgemVyb0luZGV4ZWQ6IGZhbHNlLFxuICAgIHBvc2l0aW9uOiAnYm90dG9tJyxcbiAgICBwbGFjZW1lbnQ6ICdyaWdodCcsXG4gICAgc2hvdzogdHJ1ZSxcbiAgICBzaG93U2l6ZTogZmFsc2UsXG4gICAgcGFnZVNpemVzOiBbMTAsIDIwLCAzMCwgNDAsIDUwXSxcbiAgICBzaG93UXVpY2tKdW1wZXI6IGZhbHNlLFxuICAgIHRvdGFsOiB0cnVlLFxuICAgIHRvVG9wOiB0cnVlLFxuICAgIHRvVG9wT2Zmc2V0OiAxMDAsXG4gIH0sXG4gIG1vZGFsOiB7XG4gICAgcGFyYW1zTmFtZTogJ3JlY29yZCcsXG4gICAgc2l6ZTogJ2xnJyxcbiAgICBleGFjdDogdHJ1ZSxcbiAgfSxcbiAgZHJhd2VyOiB7XG4gICAgcGFyYW1zTmFtZTogJ3JlY29yZCcsXG4gICAgc2l6ZTogJ21kJyxcbiAgICBmb290ZXI6IHRydWUsXG4gICAgZm9vdGVySGVpZ2h0OiA1NSxcbiAgfSxcbiAgcG9wOiB7XG4gICAgdGl0bGU6ICfnoa7orqTliKDpmaTlkJfvvJ8nLFxuICAgIHRyaWdnZXI6ICdjbGljaycsXG4gICAgcGxhY2VtZW50OiAndG9wJyxcbiAgfSxcbiAgcm93Q2xpY2tUaW1lOiAyMDAsXG4gIGJ0bkljb246IHtcbiAgICB0eXBlOiAnJyxcbiAgICB0aGVtZTogJ291dGxpbmUnLFxuICAgIHNwaW46IGZhbHNlLFxuICB9LFxuICBub0luZGV4OiAxLFxuICBleHBhbmRSb3dCeUNsaWNrOiBmYWxzZSxcbiAgZXhwYW5kQWNjb3JkaW9uOiBmYWxzZSxcbiAgd2lkdGhNb2RlOiB7XG4gICAgdHlwZTogJ2RlZmF1bHQnLFxuICAgIHN0cmljdEJlaGF2aW9yOiAndHJ1bmNhdGUnLFxuICB9LFxuICB2aXJ0dWFsSXRlbVNpemU6IDU0LFxuICB2aXJ0dWFsTWF4QnVmZmVyUHg6IDIwMCxcbiAgdmlydHVhbE1pbkJ1ZmZlclB4OiAxMDAsXG4gIGlpZkJlaGF2aW9yOiAnaGlkZScsXG59O1xuXG4vKipcbiAqIEBkZXByZWNhdGVkIGBTVENvbmZpZ2AgaXMgZ29pbmcgdG8gYmUgcmVtb3ZlZCBpbiAxMC4wLjAuIFBsZWFzZSByZWZlciB0byBodHRwczovL25nLWFsYWluLmNvbS9kb2NzL2dsb2JhbC1jb25maWdcbiAqL1xuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBTVENvbmZpZyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGRlcHJlY2F0aW9uMTBDb2coYFNUQ29uZmlnYCk7XG4gIH1cbiAgLyoqXG4gICAqIOi1t+Wni+mhteegge+8jOm7mOiupOS4uu+8mmAxYFxuICAgKi9cbiAgcGk/OiBudW1iZXI7XG4gIC8qKlxuICAgKiDmr4/pobXmlbDph4/vvIzlvZPorr7nva7kuLogYDBgIOihqOekuuS4jeWIhumhte+8jOm7mOiupO+8mmAxMGBcbiAgICovXG4gIHBzPzogbnVtYmVyO1xuICAvKipcbiAgICog5piv5ZCm5pi+56S66L655qGGXG4gICAqL1xuICBib3JkZXJlZD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiB0YWJsZeWkp+Wwj1xuICAgKi9cbiAgc2l6ZT86ICdzbWFsbCcgfCAnbWlkZGxlJyB8ICdkZWZhdWx0JyA9ICdkZWZhdWx0JztcbiAgLyoqXG4gICAqIOaYr+WQpuW8gOWQr+WTjeW6lOW8j++8jOm7mOiupO+8mmB0cnVlYFxuICAgKi9cbiAgcmVzcG9uc2l2ZT86IGJvb2xlYW4gPSB0cnVlO1xuICAvKipcbiAgICog5piv5ZCm5Zyo5bCP5bGP5bmV5LiL5omN5pi+56S66aG26YOo5LiO5bqV6YOo77yM6buY6K6k77yaYGZhbHNlYFxuICAgKi9cbiAgcmVzcG9uc2l2ZUhpZGVIZWFkZXJGb290ZXI/OiBib29sZWFuID0gZmFsc2U7XG4gIC8qKiDor7fmsYLkvZPphY3nva4gKi9cbiAgcmVxPzogU1RSZXEgPSB7XG4gICAgdHlwZTogJ3BhZ2UnLFxuICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgYWxsSW5Cb2R5OiBmYWxzZSxcbiAgICBsYXp5TG9hZDogZmFsc2UsXG4gICAgcmVOYW1lOiB7IHBpOiAncGknLCBwczogJ3BzJywgc2tpcDogJ3NraXAnLCBsaW1pdDogJ2xpbWl0JyB9LFxuICB9O1xuICAvKiog6L+U5Zue5L2T6YWN572uICovXG4gIHJlcz86IFNUUmVzID0ge1xuICAgIHJlTmFtZTogeyBsaXN0OiBbJ2xpc3QnXSwgdG90YWw6IFsndG90YWwnXSB9LFxuICB9O1xuICAvKiog6L+U5Zue5L2T6YWN572uICovXG4gIHBhZ2U/OiBTVFBhZ2UgPSB7XG4gICAgZnJvbnQ6IHRydWUsXG4gICAgemVyb0luZGV4ZWQ6IGZhbHNlLFxuICAgIHBvc2l0aW9uOiAnYm90dG9tJyxcbiAgICBwbGFjZW1lbnQ6ICdyaWdodCcsXG4gICAgc2hvdzogdHJ1ZSxcbiAgICBzaG93U2l6ZTogZmFsc2UsXG4gICAgcGFnZVNpemVzOiBbMTAsIDIwLCAzMCwgNDAsIDUwXSxcbiAgICBzaG93UXVpY2tKdW1wZXI6IGZhbHNlLFxuICAgIHRvdGFsOiB0cnVlLFxuICAgIHRvVG9wOiB0cnVlLFxuICAgIHRvVG9wT2Zmc2V0OiAxMDAsXG4gIH07XG4gIC8qKlxuICAgKiDph43lkb3lkI3mjpLluo/lgLzvvIxgY29sdW1uc2Ag55qE6YeN5ZG95ZCN6auY5LqO5bGe5oCnXG4gICAqL1xuICBzb3J0UmVOYW1lPzogeyBhc2NlbmQ/OiBzdHJpbmc7IGRlc2NlbmQ/OiBzdHJpbmcgfTtcbiAgLyoqXG4gICAqIOWNleaOkuW6j+inhOWImVxuICAgKiAtIOiLpeS4jeaMh+Wumu+8jOWImei/lOWbnu+8mmBjb2x1bW5OYW1lPWFzY2VuZHxkZXNjZW5kYFxuICAgKiAtIOiLpeaMh+Wumu+8jOWImei/lOWbnu+8mmBzb3J0PWNvbHVtbk5hbWUuKGFzY2VuZHxkZXNjZW5kKWBcbiAgICovXG4gIHNpbmdsZVNvcnQ/OiBTVFNpbmdsZVNvcnQgfCBudWxsID0gbnVsbDtcbiAgLyoqXG4gICAqIOaYr+WQpuWkmuaOkuW6j++8jOW9kyBgc29ydGAg5aSa5Liq55u45ZCM5YC85pe26Ieq5Yqo5ZCI5bm277yM5bu66K6u5ZCO56uv5pSv5oyB5pe25L2/55SoXG4gICAqL1xuICBtdWx0aVNvcnQ/OiBTVE11bHRpU29ydCB8IG51bGwgPSBudWxsO1xuICAvKipcbiAgICog5oyJ6ZKu5qih5oCB5qGG6YWN572uXG4gICAqL1xuICBtb2RhbD86IFNUQ29sdW1uQnV0dG9uTW9kYWxDb25maWcgPSB7XG4gICAgcGFyYW1zTmFtZTogJ3JlY29yZCcsXG4gICAgc2l6ZTogJ2xnJyxcbiAgICBleGFjdDogdHJ1ZSxcbiAgfTtcbiAgLyoqXG4gICAqIOaMiemSruaKveWxiemFjee9rlxuICAgKi9cbiAgZHJhd2VyPzogU1RDb2x1bW5CdXR0b25EcmF3ZXJDb25maWcgPSB7XG4gICAgcGFyYW1zTmFtZTogJ3JlY29yZCcsXG4gICAgc2l6ZTogJ21kJyxcbiAgICBmb290ZXI6IHRydWUsXG4gICAgZm9vdGVySGVpZ2h0OiA1NSxcbiAgfTtcbiAgLyoqXG4gICAqIOawlOazoeWPguaVsFxuICAgKi9cbiAgcG9wPzogU1RDb2x1bW5CdXR0b25Qb3AgPSB7XG4gICAgdGl0bGU6ICfnoa7orqTliKDpmaTlkJfvvJ8nLFxuICB9O1xuICAvKipcbiAgICog6KGM5Y2V5Ye75aSa5bCR5pe26ZW/5LmL57G75Li65Y+M5Ye777yI5Y2V5L2N77ya5q+r56eS77yJ77yM6buY6K6k77yaYDIwMGBcbiAgICovXG4gIHJvd0NsaWNrVGltZT86IG51bWJlciA9IDIwMDtcbiAgLyoqXG4gICAqIOi/h+a7pOaMiemSruehruiupOaWh+acrFxuICAgKi9cbiAgZmlsdGVyQ29uZmlybVRleHQ/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiDov4fmu6TmjInpkq7ph43nva7mlofmnKxcbiAgICovXG4gIGZpbHRlckNsZWFyVGV4dD86IHN0cmluZztcbiAgLyoqXG4gICAqIOaMiemSruWbvuagh1xuICAgKi9cbiAgYnRuSWNvbj86IFNUSWNvbiA9IHtcbiAgICB0eXBlOiAnJyxcbiAgICB0aGVtZTogJ291dGxpbmUnLFxuICAgIHNwaW46IGZhbHNlLFxuICB9O1xuICAvKipcbiAgICog6KGM5Y+357Si5byV77yM6buY6K6k77yaYDFgXG4gICAqIC0g6K6h566X6KeE5YiZ5Li677yaYGluZGV4ICsgbm9JbmRleGBcbiAgICovXG4gIG5vSW5kZXg/OiBudW1iZXIgPSAxO1xuICAvKipcbiAgICog6KGo5qC86KGM55qE57G75ZCNXG4gICAqL1xuICByb3dDbGFzc05hbWU/OiBTVFJvd0NsYXNzTmFtZTtcbiAgLyoqXG4gICAqIOmAmui/h+eCueWHu+ihjOadpeWxleW8gOWtkOihjFxuICAgKi9cbiAgZXhwYW5kUm93QnlDbGljaz86IGJvb2xlYW4gPSBmYWxzZTtcbiAgLyoqXG4gICAqIOaJi+mjjueQtOaooeW8j1xuICAgKi9cbiAgZXhwYW5kQWNjb3JkaW9uPzogYm9vbGVhbiA9IGZhbHNlO1xuICAvKipcbiAgICog5oyH5a6aIGB3aWR0aGAg5qih5byPXG4gICAqL1xuICB3aWR0aE1vZGU/OiBTVFdpZHRoTW9kZSA9IHtcbiAgICB0eXBlOiAnZGVmYXVsdCcsXG4gICAgc3RyaWN0QmVoYXZpb3I6ICd0cnVuY2F0ZScsXG4gIH07XG4gIHZpcnR1YWxJdGVtU2l6ZT8gPSA1NDtcbiAgdmlydHVhbE1heEJ1ZmZlclB4PyA9IDIwMDtcbiAgdmlydHVhbE1pbkJ1ZmZlclB4PyA9IDEwMDtcblxuICAvKipcbiAgICogQ29uZGl0aW9uYWwgZXhwcmVzc2lvbiByZW5kZXJpbmcgYmVoYXZpb3IsIGNhbiBiZSBzZXQgdG8gYGhpZGVgIChkZWZhdWx0KSBvciBgZGlzYWJsZWRgXG4gICAqL1xuICBpaWZCZWhhdmlvcj86IElpZkJlaGF2aW9yVHlwZSA9ICdoaWRlJztcbn1cbiJdfQ==