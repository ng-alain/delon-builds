import type { Type } from '@angular/core';
import type { SafeHtml } from '@angular/platform-browser';
import type { Observable } from 'rxjs';
import type { CurrencyCNYOptions, CurrencyFormatOptions, CurrencyMegaOptions, FormatMaskOption } from '@delon/util/format';
import type { NzImagePreviewOptions } from 'ng-zorro-antd/image';
export interface CellTextUnit {
    text?: string | SafeHtml | string[] | number;
    color?: string;
    unit?: string;
}
export declare type CellTextType = string | CellTextUnit | undefined | null;
export interface CellTextResult {
    result: CellTextUnit;
    safeHtml?: 'text' | 'html' | 'safeHtml';
    options: CellOptions;
}
export declare type CellFuValue = (value: unknown, options: CellOptions) => Observable<CellTextUnit>;
export declare type CellWidgetFn = (value: unknown, options: CellOptions) => CellTextUnit;
export interface CellWidget {
    type: 'fn' | 'widget';
    ref: Type<unknown> | CellWidgetFn;
}
export declare type CellType = 'string' | 'number' | 'mega' | 'currency' | 'cny' | 'boolean' | 'date' | 'img' | 'link' | 'html' | 'badge' | 'tag' | 'checkbox' | 'radio' | 'widget';
export interface CellOptions {
    /**
     * 指定渲染类型，若不指定则根据 `value` 类型自动转换
     */
    type?: CellType;
    tooltip?: string;
    /**
     * Format mask, [Document](https://ng-alain.com/util/format/en#formatMask)
     *
     * 格式化掩码, 参考[文档](https://ng-alain.com/util/format/zh#formatMask)
     */
    mask?: string | FormatMaskOption;
    widget?: {
        key?: string;
        data?: unknown;
    };
    /**
     * Date config, supports `minutes ago` formatting
     *
     * 日期配置，支持 `几分钟前` 格式化
     */
    date?: {
        /**
         * 格式化字符，默认：`yyyy-MM-dd HH:mm:ss`
         * - 若值为 `fn` 时，渲染为 `几分钟前`
         */
        format?: string;
    };
    /**
     * Large number format filter, [Document](https://ng-alain.com/util/format/en#mega)
     *
     * 大数据格式化，[文档](https://ng-alain.com/util/format/en#mega)
     */
    mega?: CurrencyMegaOptions;
    /**
     * 货币
     */
    currency?: CurrencyFormatOptions;
    /**
     * Converted into RMB notation
     *
     * 转化成人民币表示法
     */
    cny?: CurrencyCNYOptions;
    /**
     * 布尔
     */
    boolean?: {
        yes?: string;
        no?: string;
        mode?: 'full' | 'icon' | 'text';
    };
    /**
     * Image config, support large image preview
     *
     * 图像配置，支持大图预览
     */
    img?: {
        size?: number;
        /**
         * 点击查看大图，若 `true` 表示直接使用当前作为大图
         */
        big?: boolean | ((value: unknown) => string);
        previewOptions?: NzImagePreviewOptions;
    };
    /**
     * Link, if it starts with `/`, it means routing jump
     *
     * 链接，若指定URL是以 `/` 开头视为路由跳转
     */
    link?: {
        url?: string;
        target?: '_blank' | '_self' | '_parent' | '_top';
    };
    /**
     * HTML config
     *
     * HTML 配置
     */
    html?: {
        safe?: 'text' | 'html' | 'safeHtml';
    };
    /**
     * Badge config
     *
     * 徽章配置
     */
    badge?: {
        data?: CellBadge;
    };
    /**
     * Tag config
     *
     * 标签配置
     */
    tag?: {
        data?: CellTag;
    };
    /**
     * Checkbox config
     *
     * 复选框配置
     */
    checkbox?: {
        label?: string;
    };
    /**
     * Radio config
     *
     * 单选框配置
     */
    radio?: {
        label?: string;
    };
}
/**
 * 徽标信息
 */
export interface CellBadge {
    [key: number]: CellBadgeValue;
    [key: string]: CellBadgeValue;
}
export interface CellBadgeValue {
    /**
     * 文本
     */
    text?: string;
    /**
     * 徽标颜色值
     */
    color?: 'success' | 'processing' | 'default' | 'error' | 'warning';
}
/**
 * 标签信息
 */
export interface CellTag {
    [key: number]: CellTagValue;
    [key: string]: CellTagValue;
}
export interface CellTagValue {
    /**
     * 文本
     */
    text?: string;
    /**
     * 颜色值，支持预设和色值
     * - 预设：geekblue,blue,purple,success,red,volcano,orange,gold,lime,green,cyan
     * - 色值：#f50,#ff0
     */
    color?: 'geekblue' | 'blue' | 'purple' | 'success' | 'red' | 'volcano' | 'orange' | 'gold' | 'lime' | 'green' | 'cyan' | string;
}
export interface CellWidgetData {
    value?: unknown;
    default?: unknown;
    defaultCondition?: unknown;
    options?: CellOptions;
    truncate?: boolean;
}