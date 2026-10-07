import * as i0 from "@angular/core";
import { Renderer2, Signal } from "@angular/core";
/**
 * System color scheme
 *
 * 系统颜色方案
 */
export type ColorScheme = 'light' | 'dark';
export interface ColorSchemeOptions {
  /**
   * Fallback value used when the environment does not support `matchMedia`, e.g. SSR, default `light`
   *
   * 运行环境不支持 `matchMedia`（如 SSR）时使用的兜底值，默认 `light`
   */
  fallback?: ColorScheme;
}
/**
 * System color scheme, updates in real time by following `prefers-color-scheme`
 *
 * 系统颜色方案，跟随 `prefers-color-scheme` 实时更新
 *
 * It is a global singleton, so `options` only takes effect on the first call.
 *
 * 全局单例，`options` 仅在首次调用时生效。
 */
export declare function colorScheme(options?: ColorSchemeOptions): Signal<ColorScheme>;
export interface CookieOptions {
  path?: string;
  domain?: string;
  /**
   * Expiration time, `number` is seconds
   *
   * 过期时间，`number` 类型表示秒数
   */
  expires?: number | Date | string;
  secure?: boolean;
  HttpOnly?: boolean;
  SameSite?: boolean | 'lax' | 'strict' | 'none';
}
/**
 * A set of simple Cookie manipulation classes.
 *
 * 一组简单的 Cookie 操作类。
 */
export declare class CookieService {
  private readonly _doc;
  private readonly platform;
  private get doc();
  /**
   * Original cookie value
   *
   * 原始Cookie值
   */
  get cookie(): string;
  /**
   * Get all cookie key-value pairs
   *
   * 获取所有Cookie键值对
   */
  getAll(): Record<string, string>;
  /**
   * Get the value of given cookie `key`
   *
   * 获取指定 `key` 的值
   */
  get(key: string): string | undefined;
  /**
   * Sets a value for given cookie key
   *
   * 设置指定 Cookie 键的值
   */
  put(key: string, value: string, options?: CookieOptions): void;
  /**
   * Remove given cookie
   *
   * 移除指定 Cookie
   */
  remove(key: string, options?: CookieOptions): void;
  /**
   * Remove all cookies
   *
   * 移除所有 Cookies
   */
  removeAll(): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<CookieService, never>;
  static ɵprov: i0.ɵɵInjectableDeclaration<any>;
}
/**
 * Copy text to clipboard
 *
 * 复制字符串文档至剪贴板
 */
export declare function copy(value: string): Promise<string>;
/**
 * Used to verify `<ng-content />` is empty, useful for custom components.
 *
 * 用于校验 `<ng-content />` 是否为空，自定义组件时蛮有用。
 */
export declare function isEmpty(element: HTMLElement): boolean;
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
  static ɵprov: i0.ɵɵInjectableDeclaration<any>;
}
/**
 * Update host component style `class`
 *
 * 更新宿主组件样式 `class`
 *
 * ```ts
 * updateHostClass(
 *  this.el.nativeElement,
 *  this.renderer,
 *  {
 *    [ 'classname' ]: true,
 *    [ 'classname' ]: this.type === '1',
 *    [ this.cls ]: true,
 *    [ `a-${this.cls}` ]: true
 *  })
 * ```
 */
export declare function updateHostClass(el: HTMLElement, renderer: Renderer2, classMap: Record<string, unknown>, preClean?: boolean): void;