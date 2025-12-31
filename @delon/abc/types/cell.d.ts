import * as _angular_core from '@angular/core';
import { Type, OnDestroy, EnvironmentProviders } from '@angular/core';
import { SafeValue } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { FormatMaskOption, CurrencyMegaOptions, CurrencyFormatOptions, CurrencyCNYOptions } from '@delon/util/format';
import { NzImagePreviewOptions } from 'ng-zorro-antd/image';
import * as i1 from '@angular/common';
import * as i2 from '@angular/forms';
import * as i3 from 'ng-zorro-antd/checkbox';
import * as i4 from 'ng-zorro-antd/radio';
import * as i5 from 'ng-zorro-antd/badge';
import * as i6 from 'ng-zorro-antd/tag';
import * as i7 from 'ng-zorro-antd/tooltip';
import * as i8 from 'ng-zorro-antd/icon';
import * as i9 from 'ng-zorro-antd/experimental/image';
import { NzSafeAny } from 'ng-zorro-antd/core/types';

type CellRenderType = 'primary' | 'success' | 'danger' | 'warning';
type CellSize = 'large' | 'small';
type CellBaseValue = string | number | boolean | Date | null | undefined | SafeValue;
interface CellTextUnit {
    text?: string | SafeValue | string[] | number;
    color?: string;
    unit?: string;
}
interface CellTextResult {
    result: CellTextUnit;
    safeHtml?: 'text' | 'html' | 'safeHtml';
    options: CellOptions;
}
type CellValue = CellBaseValue | CellBaseValue[] | CellTextUnit | CellFuValue;
type CellFuValue = (value: unknown, options: CellOptions) => Observable<CellTextUnit>;
type CellWidgetFn = (value: unknown, options: CellOptions) => CellTextUnit;
interface CellWidget {
    type: 'fn' | 'widget';
    ref: Type<unknown> | CellWidgetFn;
}
type CellType = 'string' | 'number' | 'mega' | 'currency' | 'cny' | 'boolean' | 'date' | 'img' | 'link' | 'html' | 'badge' | 'tag' | 'checkbox' | 'radio' | 'enum' | 'widget';
interface CellOptions {
    /**
     * 指定渲染类型，若不指定则根据 `value` 类型自动转换
     */
    type?: CellType;
    tooltip?: string;
    /**
     * Render Type
     *
     * 渲染类型
     */
    renderType?: CellRenderType;
    /**
     * Size
     *
     * 大小
     */
    size?: CellSize;
    /**
     * Default Text
     *
     * 默认文本
     */
    default?: CellDefaultText;
    /**
     * Unit
     *
     * 单位
     */
    unit?: string;
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
        big?: true | string | ((value: unknown) => string);
        previewOptions?: NzImagePreviewOptions;
    };
    /**
     * Link, if it starts with `/`, it means routing jump
     *
     * 链接，若指定URL是以 `/` 开头视为路由跳转
     */
    link?: {
        /**
         * Link, if it starts with `/`, it means routing jump
         *
         * 链接，若指定URL是以 `/` 开头视为路由跳转
         */
        url?: string;
        /**
         * Open type of the external link
         *
         * 外链的打开方式
         */
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
    enum?: {
        [key: string]: string;
        [key: number]: string;
    };
}
/**
 * 徽标信息
 */
interface CellBadge {
    [key: number]: CellBadgeValue;
    [key: string]: CellBadgeValue;
}
interface CellBadgeValue {
    /**
     * 文本
     */
    text?: string;
    /**
     * 徽标颜色值
     */
    color?: 'success' | 'processing' | 'default' | 'error' | 'warning';
    /**
     * Text popup tip
     *
     * 文字提示
     */
    tooltip?: string;
}
/**
 * 标签信息
 */
interface CellTag {
    [key: number]: CellTagValue;
    [key: string]: CellTagValue;
}
interface CellTagValue {
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
    /**
     * Text popup tip
     *
     * 文字提示
     */
    tooltip?: string;
}
interface CellDefaultText {
    text?: string;
    condition?: unknown;
}
interface CellWidgetInstance {
    readonly data: CellTextResult;
}

declare class CellComponent implements OnDestroy {
    private readonly srv;
    private readonly router;
    private readonly renderer;
    private readonly imgSrv;
    private readonly win;
    private readonly el;
    private destroy$?;
    _text: _angular_core.WritableSignal<string | number | SafeValue | string[]>;
    _unit: _angular_core.WritableSignal<string | undefined>;
    _res: _angular_core.WritableSignal<CellTextResult | undefined>;
    showDefault: _angular_core.Signal<boolean>;
    value: _angular_core.ModelSignal<CellValue>;
    options: _angular_core.InputSignal<CellOptions | undefined>;
    loading: _angular_core.InputSignalWithTransform<boolean, unknown>;
    disabled: _angular_core.InputSignalWithTransform<boolean, unknown>;
    get safeOpt(): CellOptions;
    isText: _angular_core.Signal<boolean>;
    constructor();
    private setClass;
    _link(e: Event): void;
    _showImg(img: string): void;
    ngOnDestroy(): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<CellComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<CellComponent, "cell, [cell]", ["cell"], { "value": { "alias": "value"; "required": false; "isSignal": true; }; "options": { "alias": "options"; "required": false; "isSignal": true; }; "loading": { "alias": "loading"; "required": false; "isSignal": true; }; "disabled": { "alias": "disabled"; "required": false; "isSignal": true; }; }, { "value": "valueChange"; }, never, never, true, never>;
}

declare class CellHostDirective {
    private readonly srv;
    private readonly vcr;
    data: _angular_core.InputSignal<CellTextResult>;
    constructor();
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<CellHostDirective, never>;
    static ɵdir: _angular_core.ɵɵDirectiveDeclaration<CellHostDirective, "[cell-widget-host]", never, { "data": { "alias": "data"; "required": true; "isSignal": true; }; }, {}, never, never, true, never>;
}

declare class CellModule {
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<CellModule, never>;
    static ɵmod: _angular_core.ɵɵNgModuleDeclaration<CellModule, never, [typeof i1.CommonModule, typeof i2.FormsModule, typeof i3.NzCheckboxModule, typeof i4.NzRadioModule, typeof i5.NzBadgeModule, typeof i6.NzTagModule, typeof i7.NzTooltipModule, typeof i8.NzIconModule, typeof i9.NzImageModule, typeof CellComponent, typeof CellHostDirective], [typeof CellComponent]>;
    static ɵinj: _angular_core.ɵɵInjectorDeclaration<CellModule>;
}

declare class CellService {
    private readonly nzI18n;
    private readonly currency;
    private readonly dom;
    private readonly configSrv;
    private globalOptions;
    private widgets;
    registerWidget(key: string, widget: Type<unknown>): void;
    getWidget(key: string): CellWidget | undefined;
    private genType;
    fixOptions(options?: CellOptions): CellOptions;
    get(value: unknown, options?: CellOptions): Observable<CellTextResult>;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<CellService, never>;
    static ɵprov: _angular_core.ɵɵInjectableDeclaration<CellService>;
}

interface CellWidgetProvideConfig {
    KEY: string;
    type: NzSafeAny;
}
/**
 * Just only using Standalone widgets
 */
declare function provideCellWidgets(...widgets: CellWidgetProvideConfig[]): EnvironmentProviders;

export { CellComponent, CellHostDirective, CellModule, CellService, provideCellWidgets };
export type { CellBadge, CellBadgeValue, CellBaseValue, CellDefaultText, CellFuValue, CellOptions, CellRenderType, CellSize, CellTag, CellTagValue, CellTextResult, CellTextUnit, CellType, CellValue, CellWidget, CellWidgetFn, CellWidgetInstance, CellWidgetProvideConfig };
