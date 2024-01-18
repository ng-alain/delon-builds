import * as i0 from "@angular/core";
export declare class ScrollService {
    private readonly _doc;
    private readonly platform;
    private _getDoc;
    private _getWin;
    /**
     * 获取滚动条位置
     *
     * @param element 指定元素，默认 `window`
     */
    getScrollPosition(element?: Element | Window | null): [number, number];
    /**
     * 设置滚动条位置
     *
     * @param element 指定元素
     */
    scrollToPosition(element: Element | Window | null | undefined, position: [number, number]): void;
    /**
     * 设置滚动条至指定元素
     *
     * @param element 指定元素，默认 `document.body`
     * @param topOffset 偏移值，默认 `0`
     */
    scrollToElement(element?: Element | null, topOffset?: number): void;
    /**
     * 滚动至顶部
     *
     * @param topOffset 偏移值，默认 `0`
     */
    scrollToTop(topOffset?: number): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ScrollService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ScrollService>;
}
