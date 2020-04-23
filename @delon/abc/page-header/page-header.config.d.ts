/**
 * @deprecated `PageHeaderConfig` is going to be removed in 10.0.0. Please refer to https://ng-alain.com/docs/global-config
 */
export declare class PageHeaderConfig {
    constructor();
    /**
     * 首页文本，若指定空表示不显示
     */
    home?: string;
    /**
     * 首页链接
     */
    homeLink?: string;
    /**
     * 首页链接国际化参数
     */
    homeI18n?: string;
    /**
     * 自动生成导航，以当前路由从主菜单中定位
     */
    autoBreadcrumb?: boolean;
    /**
     * 自动向上递归查找
     *  - 菜单数据源包含 `/ware`，则 `/ware/1` 也视为 `/ware` 项
     */
    recursiveBreadcrumb?: boolean;
    /**
     * 自动生成标题，以当前路由从主菜单中定位
     */
    autoTitle?: boolean;
    /**
     * 是否自动将标准信息同步至 `TitleService`、`ReuseService` 下
     */
    syncTitle?: boolean;
    /**
     * 是否固定模式
     */
    fixed?: boolean;
    /**
     * 固定偏移值
     */
    fixedOffsetTop?: number;
}
