import { ModalOptions } from 'ng-zorro-antd/modal';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { DisabledTimeFn, SupportTimeOptions, NzDateMode, PresetRanges } from 'ng-zorro-antd/date-picker';
import { SafeHtml } from '@angular/platform-browser';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import * as i0 from '@angular/core';
import { TemplateRef, TrackByFunction, InjectionToken, EnvironmentProviders } from '@angular/core';
import { Observable } from 'rxjs';
import { NzDrawerOptions } from 'ng-zorro-antd/drawer';
import { PaginationItemRenderContext } from 'ng-zorro-antd/pagination';
import { NzTableSortOrder } from 'ng-zorro-antd/table';
import { NzImagePreviewOptions } from 'ng-zorro-antd/image';
import { Options } from 'ajv';

interface AlainErrorCollectConfig {
    /**
     * 监听频率，默认：`500`
     */
    freq?: number;
    /**
     * 顶部偏移值，默认：`145`
     */
    offsetTop?: number;
}

interface AlainImageConfig {
    /**
     * 默认大小，默认值：`64`，单位：px
     */
    size?: number;
    /**
     * 错误图片，默认：`./assets/img/logo.svg`
     */
    error?: string;
    /**
     * 预览大图对话框参数
     */
    previewModalOptions?: ModalOptions;
}

interface AlainDateRangePickerConfig {
    /**
     * 默认：`yyyy-MM-dd`
     */
    nzFormat?: string;
    nzClassName?: string;
    nzSize?: string;
    nzStyle?: string;
    /**
     * 默认：`true`
     */
    nzAllowClear?: boolean;
    /**
     * 默认：`false`
     */
    nzAutoFocus?: boolean;
    nzDisabledDate?: (d: Date) => boolean;
    nzDisabledTime?: DisabledTimeFn;
    /**
     * 默认：`{ position: 'relative' }`
     */
    nzPopupStyle?: Record<string, unknown>;
    nzDropdownClassName?: string;
    nzRenderExtraFooter?: string;
    nzShowTime?: SupportTimeOptions | boolean;
    /**
     * 默认：`true`
     */
    nzShowToday?: boolean;
    nzMode?: NzDateMode | NzDateMode[];
    nzRanges?: PresetRanges;
    shortcuts?: AlainDateRangePickerShortcut;
}
interface AlainDateRangePickerShortcut {
    /** Whether to enable, default: `false` */
    enabled?: boolean;
    /** Whether to close the panel after clicking, default: `true` */
    closed?: boolean;
    /**
     * Shortcut list, default: `今天`, `昨天`, `近3天`, `近7天`, `本周`, `本月`, `全年`
     */
    list?: AlainDateRangePickerShortcutItem[];
}
interface AlainDateRangePickerShortcutItem {
    [key: string]: NzSafeAny;
    text: string;
    fn: (value: Array<Date | null>) => [Date | null, Date | null];
}

interface AlainLoadingConfig {
    /**
     * 类型，默认：`spin`
     */
    type?: 'text' | 'icon' | 'spin' | 'custom';
    /**
     * 显示文本，默认：`加载中...`
     */
    text?: string;
    icon?: {
        /** `nz-icon.nzType`，默认：`loading` */
        type?: string;
        /** `nz-icon.nzTheme`，默认：`outline` */
        theme?: 'fill' | 'outline' | 'twotone';
        /** `nz-icon.nzSpin`，默认：`true` */
        spin?: boolean;
    };
    custom?: {
        html?: string | SafeHtml;
        style?: Record<string, unknown>;
    };
    /**
     * 延迟，默认：`0`
     */
    delay?: number;
    /** 文字方向 */
    direction?: 'ltr' | 'rtl';
}

interface AlainLodopConfig {
    /**
     * 注册信息：主注册号
     */
    license?: string;
    /**
     * 注册信息：附加注册号A
     */
    licenseA?: string;
    /**
     * 注册信息：附加注册号B
     */
    licenseB?: string;
    /**
     * 注册信息：注册单位名称
     */
    companyName?: string;
    /**
     * Lodop 远程脚本URL地址，**注意**务必使用 `name` 属性指定变量值
     *
     * - http://localhost:18000/CLodopfuncs.js [默认]
     * - https://localhost:8443/CLodopfuncs.js
     */
    url?: string;
    /**
     * Lodop 变量名，默认：`CLODOP`
     */
    name?: string;
    /**
     * 检查次数，默认 `100`，当检查超过时视为异常，这是因为 Lodop 需要连接 WebSocket
     */
    checkMaxCount?: number;
}

interface AlainPageHeaderConfig {
    /**
     * 首页文本，若指定空表示不显示，默认：`首页`
     */
    home?: string;
    /**
     * 首页链接，默认：`/`
     */
    homeLink?: string;
    /**
     * 首页链接国际化参数
     */
    homeI18n?: string;
    /**
     * 自动生成导航，以当前路由从主菜单中定位，默认：`true`
     */
    autoBreadcrumb?: boolean;
    /**
     * 自动向上递归查找，默认：`false`
     *  - 菜单数据源包含 `/ware`，则 `/ware/1` 也视为 `/ware` 项
     */
    recursiveBreadcrumb?: boolean;
    /**
     * 自动生成标题，以当前路由从主菜单中定位，默认：`true`
     */
    autoTitle?: boolean;
    /**
     * 是否自动将标准信息同步至 `TitleService`、`ReuseService` 下，默认：`true`
     */
    syncTitle?: boolean;
    /**
     * 是否固定模式，默认：`false`
     */
    fixed?: boolean;
    /**
     * 固定偏移值，默认：`64`
     */
    fixedOffsetTop?: number;
}

interface AlainSEConfig {
    /**
     * 大小，默认：`default`
     * - `compact` 紧凑型，强制忽略 `error`、`extra` 展示
     */
    size?: 'default' | 'compact';
    /**
     * 布局类型，等同 `nzLayout`，默认：`horizontal`
     * - `inline` 时强制大小为 `compact`
     */
    nzLayout?: 'horizontal' | 'vertical' | 'inline';
    /**
     * 间距，当 `nzLayout:horizontal` 时有效，默认：`32`
     */
    gutter?: number;
    /**
     * 列数，默认：`2`
     */
    col?: number;
    /**
     * 标签文本宽度，单位：`px`，默认：`150`
     */
    labelWidth?: number;
    /**
     * 是否立即呈现错误视觉，默认：`false`
     */
    firstVisual?: boolean;
    /**
     * 是否忽略 `dirty` 校验，默认：`false`
     */
    ingoreDirty?: boolean;
}

declare class AlainSVConfig {
    /** 大小，默认：`large` */
    size?: 'small' | 'large';
    /** 间距，默认：`32` */
    gutter?: number;
    /** 布局，默认：`horizontal` */
    layout?: 'horizontal' | 'vertical';
    /** 列数，默认：`3` */
    col?: number;
    /** 是否显示默认值，当内容为空值时显示 `-`，默认：`true` */
    default?: boolean;
    /** `label` 固定宽度，若 `null` 或 `undefined` 表示非固定，默认：`null` */
    labelWidth?: number;
}

interface AlainSGConfig {
    /**
     * 间距，默认：`32`
     */
    gutter?: number;
    /**
     * 列数，默认：`2`
     */
    col?: number;
}

interface AlainSTConfig {
    /**
     * 起始页码，默认为：`1`
     */
    pi?: number;
    /**
     * 每页数量，默认：`10`
     */
    ps?: number;
    /**
     * 是否显示边框，默认：`false`
     */
    bordered?: boolean;
    /**
     * table大小，默认：`default`
     */
    size?: 'small' | 'middle' | 'default';
    /**
     * 是否开启响应式，默认：`true`
     */
    responsive?: boolean;
    /**
     * 是否在小屏幕下才显示顶部与底部，默认：`false`
     */
    responsiveHideHeaderFooter?: boolean;
    /** 请求体配置 */
    req?: {
        /**
         * 分页类型，默认：`page`
         * - `page` 使用 `pi`，`ps` 组合
         * - `skip` 使用 `skip`，`limit` 组合
         */
        type?: 'page' | 'skip';
        /**
         * Whether to ignore `null` or `unfind` values in parameters
         *
         * 是否忽略参数中 `null` 或 `undefind` 值
         */
        ignoreParamNull?: boolean;
        /** 请求方法，默认：`GET` */
        method?: string;
        /** 请求体 `Header` */
        headers?: NzSafeAny;
        /**
         * 重命名参数 `pi`、`ps`，默认：`{ pi: 'pi', ps: 'ps', skip: 'skip', limit: 'limit' }`
         * - `{ pi: 'Page' }` => `pi` 会被替换成 Page
         */
        reName?: {
            pi?: string;
            ps?: string;
            skip?: string;
            limit?: string;
        };
        /**
         * 是否将请求所有参数数据都放入 `body` 当中（`url` 地址本身参数除外），仅当 `method: 'POST'` 时有效，默认：`false`
         */
        allInBody?: boolean;
        /**
         * 是否延迟加载数据，即渲染结束后不会主动发起请求，默认：`false`
         */
        lazyLoad?: boolean;
        /**
         * 请求前数据处理
         */
        process?: (requestOptions: NzSafeAny) => NzSafeAny;
    };
    /** 返回体配置 */
    res?: {
        /**
         * 重命名返回参数 `total`、`list`，默认：`{ list: ['list'], total: ['total'] }`
         * - `{ total: 'Total' }` => Total 会被当作 `total`
         */
        reName?: {
            total?: string | string[];
            list?: string | string[];
        } | ((result: NzSafeAny, options: {
            pi: number;
            ps: number;
            total: number;
        }) => {
            total: number;
            list: NzSafeAny[];
        });
        /**
         * 数据预处理
         */
        process?: (data: NzSafeAny[], rawData?: NzSafeAny) => NzSafeAny[];
    };
    /** 返回体配置 */
    page?: {
        /**
         * 前端分页，当 `data` 为`any[]` 或 `Observable<any[]>` 有效，默认：`true`
         * - `true` 由 `st` 根据 `data` 长度受控分页，包括：排序、过滤等
         * - `false` 由用户通过 `total` 和 `data` 参数受控分页，并维护 `(change)` 当分页变更时重新加载数据
         */
        front?: boolean;
        /**
         * 后端分页是否采用`0`基索引，只在`data`类型为`string`时有效，默认：`false`
         */
        zeroIndexed?: boolean;
        /**
         * 指定分页显示的位置，默认：`bottom`
         */
        position?: 'top' | 'bottom' | 'both';
        /**
         * 指定分页分页方向，默认：`right`
         */
        placement?: 'left' | 'center' | 'right';
        /**
         * 是否显示分页器，默认：`true`
         */
        show?: boolean;
        /**
         * 是否显示分页器中改变页数，默认：`false`
         */
        showSize?: boolean;
        /**
         * 分页器中每页显示条目数下拉框值，默认：`[10, 20, 30, 40, 50]`
         */
        pageSizes?: number[];
        /**
         * 是否显示分页器中快速跳转，默认：`false`
         */
        showQuickJumper?: boolean;
        /**
         * 是否显示总数据量，默认：`true`
         * - `boolean` 类型显示与否，默认模板：`共 {{total}} 条`
         * - `string` 自定义模板，模板变量：
         *  - `{{total}}` 表示数据总量
         *  - `{{range[0]}}` 表示当前页开始数量值
         *  - `{{range[1]}}` 表示当前页结束数量值
         */
        total?: string | boolean;
        /**
         * 用于自定义页码的结构，用法参照 Pagination 组件
         */
        itemRender?: TemplateRef<PaginationItemRenderContext> | null;
        /**
         * 当添加该属性时，显示为简单分页，默认：`false`
         */
        simple?: boolean;
        /**
         * 切换分页时返回顶部，默认：`true`
         */
        toTop?: boolean;
        /**
         * 返回顶部偏移值，默认：`100`
         */
        toTopOffset?: number;
    };
    /**
     * 重命名排序值，`columns` 的重命名高于属性
     */
    sortReName?: {
        ascend?: string;
        descend?: string;
    };
    /**
     * 排序状态
     */
    sortDirections?: NzTableSortOrder[];
    /**
     * 单排序规则
     * - 若不指定，则返回：`columnName=ascend|descend`
     * - 若指定，则返回：`sort=columnName.(ascend|descend)`
     */
    singleSort?: {
        /** 请求参数名，默认：`sort` */
        key?: string;
        /** 列名与状态间分隔符，默认：`.` */
        nameSeparator?: string;
    };
    /**
     * 是否多排序，当 `sort` 多个相同值时自动合并，建议后端支持时使用
     */
    multiSort?: {
        /** 请求参数名，默认：`sort` */
        key?: string;
        /** 不同属性间分隔符，默认：`-` */
        separator?: string;
        /** 列名与状态间分隔符，默认：`.` */
        nameSeparator?: string;
        /**
         * 是否以数组的形式传递参数
         * - `true` 表示使用 `url?sort=name.asc&sort=age.desc` 形式
         * - `false` 表示使用 `url?sort=name.asc-age.desc` 形式
         */
        arrayParam?: boolean;
        /**
         * 是否全局多排序模式，默认：`true`
         * - `true` 表示所有 `st` 默认为多排序
         * - `false` 表示需要为每个 `st` 添加 `multiSort` 才会视为多排序模式
         */
        global?: boolean;
        /**
         * 是否保持空值的键名，默认：`true`
         * - `true` 表示不管是否有排序都会发送 `key` 键名
         * - `false` 表示无排序动作时不会发送 `key` 键名
         */
        keepEmptyKey?: boolean;
    };
    /**
     * 按钮模态框配置
     */
    modal?: {
        /**
         * 是否只传递纯净数据
         */
        pureRecoard?: boolean;
        /**
         * 指定模态框目标组件的接收参数名，默认：`record`
         */
        paramsName?: string;
        /** 大小；例如：lg、600，默认：`lg` */
        size?: 'sm' | 'md' | 'lg' | 'xl' | '' | number;
        /** 对话框 [ModalOptions](https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/components/modal/modal-types.ts) 参数 */
        modalOptions?: ModalOptions;
        /** 是否精准（默认：`true`），若返回值非空值（`null`或`undefined`）视为成功，否则视为错误 */
        exact?: boolean;
    };
    /**
     * 按钮抽屉配置
     */
    drawer?: {
        /**
         * 是否只传递纯净数据
         */
        pureRecoard?: boolean;
        /**
         * 抽屉目标组件的接收参数名，默认：`record`
         */
        paramsName?: string;
        /**
         * 大小；例如：lg、600，默认：`md`
         *
         * | 类型 | 默认大小 |
         * | --- | ------ |
         * | `sm` | `300` |
         * | `md` | `600` |
         * | `lg` | `900` |
         * | `xl` | `1200` |
         *
         * > 以上值，可通过覆盖相应的LESS参数自行调整
         */
        size?: 'sm' | 'md' | 'lg' | 'xl' | number;
        /**
         * 是否包含底部工具条，默认：`true`
         */
        footer?: boolean;
        /**
         * 底部工具条高度，默认：`55`
         */
        footerHeight?: number;
        /** 抽屉 [NzDrawerOptions](https://ng.ant.design/components/drawer/zh#nzdraweroptions) 参数 */
        drawerOptions?: NzDrawerOptions;
    };
    /**
     * 气泡参数
     */
    pop?: {
        /**
         * Title of the popover, default: `确认删除吗？`
         */
        title?: string;
        /**
         * Popover trigger mode, default: `click`
         */
        trigger?: 'click' | 'focus' | 'hover';
        /**
         * The position of the popover relative to the target, default: `top`
         */
        placement?: 'top' | 'left' | 'right' | 'bottom' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' | 'leftTop' | 'leftBottom' | 'rightTop' | 'rightBottom';
        /**
         * Class name of the popover card
         */
        overlayClassName?: string;
        /**
         * Style of the popover card
         */
        overlayStyle?: Record<string, string>;
        /**
         * Text of the Cancel button
         */
        cancelText?: string;
        /**
         * Text of the Confirm button
         */
        okText?: string;
        /**
         * Button `type` of the Confirm button
         */
        okType?: 'primary' | 'ghost' | 'dashed' | 'danger' | 'default';
        /**
         * Customize icon of confirmation
         */
        icon?: string;
    };
    /**
     * 过滤按钮确认文本
     */
    filterConfirmText?: string;
    /**
     * 过滤按钮重置文本
     */
    filterClearText?: string;
    /**
     * 按钮图标
     */
    btnIcon?: {
        /** 图标主题风格，默认：`outline` */
        theme?: 'outline' | 'twotone' | 'fill';
        /** 是否有旋转动画，默认：`false` */
        spin?: boolean;
        /** 仅适用双色图标，设置双色图标的主要颜色，仅对当前 icon 生效 */
        twoToneColor?: string;
        /** 指定来自 IconFont 的图标类型 */
        iconfont?: string;
    };
    /**
     * 行号索引，默认：`1`
     * - 计算规则为：`index + noIndex`
     */
    noIndex?: number;
    /**
     * 表格行的类名
     */
    rowClassName?: (record: NzSafeAny, index: number) => string;
    /**
     * 通过点击行来展开子行，Default: `false`
     */
    expandRowByClick?: boolean;
    /**
     * 手风琴模式，Default: `false`
     */
    expandAccordion?: boolean;
    /**
     * 指定 `width` 模式
     */
    widthMode?: {
        /**
         * 宽度类型，默认：`default`
         * - `default` 默认行为
         * - `strict` 严格模式，即强制按 `width` 指定的宽度呈现，并根据 `strictBehavior` 类型处理
         */
        type?: 'strict' | 'default';
        /**
         * 严格模式的处理行为，默认：`truncate`
         * - `wrap` 强制换行
         * - `truncate` 截短
         */
        strictBehavior?: 'wrap' | 'truncate';
    };
    /**
     * Default: `54`
     */
    virtualItemSize?: number;
    /**
     * Default: `200`
     */
    virtualMaxBufferPx?: number;
    /**
     * Default: `100`
     */
    virtualMinBufferPx?: number;
    /**
     * The TrackByFunction to use for tracking changes
     */
    virtualForTrackBy?: TrackByFunction<unknown>;
    /**
     * Conditional expression rendering behavior, can be set to `hide` (default) or `disabled`, Default: `hide`
     */
    iifBehavior?: 'hide' | 'disabled';
    /**
     * The spinning indicator
     */
    loadingIndicator?: TemplateRef<void>;
    /**
     * Specifies a delay in milliseconds for loading state (prevent flush)
     */
    loadingDelay?: number;
    /**
     * Custom no result content
     */
    noResult?: string | TemplateRef<void>;
    /**
     * Safe rendering type, default: `safeHtml`
     *
     * 安全渲染方式，默认：`safeHtml`
     */
    safeType?: 'text' | 'html' | 'safeHtml';
    /**
     * Override the default request behavior, you can customize your own request implementation, for example: Graphql
     *
     * 覆盖默认的请求行为，可以自定义自己的请求实现，例如：Graphql
     */
    customRequest?: (options: {
        method: string;
        url: string;
        options: {
            body?: unknown;
            headers?: HttpHeaders | Record<string, string | string[]>;
            params?: HttpParams | Record<string, string | string[]>;
        };
    }) => Observable<NzSafeAny>;
    /**
     * Date format
     *
     * 日期格式化
     */
    date?: {
        /**
         * Format string, default: `yyyy-MM-dd HH:mm`
         *
         * 格式化字符串，默认：`yyyy-MM-dd HH:mm`
         */
        format: string;
    };
    yn?: {
        /**
         * 真值条件，（默认：`true`）
         */
        truth?: unknown;
        /**
         * 徽章 `true` 时文本，（默认：`是`）
         */
        yes?: string;
        /**
         * 徽章 `false` 时文本，（默认：`否`）
         */
        no?: string;
        /**
         * 徽章显示风格，默认：`icon`
         * - `full` 图标和文本
         * - `icon` 图标
         * - `text` 文本
         */
        mode?: 'full' | 'icon' | 'text';
    };
    /**
     * Max button option can be showed, and the extra part are auto generated under `more`
     *
     * 配置最多显示多少个按钮，多余部分自动生成至 `更多` 下面
     *
     * > 注意：若在 `buttons` 下配置过按钮组会导致其失效
     */
    maxMultipleButton?: {
        /**
         * 更多按钮文本，默认：`更多`
         */
        text?: string;
        /**
         * 超出数量自动合并，默认：`2`
         */
        count?: number;
    };
}

interface AlainXlsxConfig {
    /**
     * Xlsx library path, default: `//cdn.bootcss.com/xlsx/0.15.6/xlsx.full.min.js`
     */
    url?: string;
    /**
     * Defines which Xlsx optional modules should get loaded, e.g:
     *
     * `[ '//cdn.bootcss.com/xlsx/0.15.6/cpexcel.js' ]`
     */
    modules?: string[];
}

interface AlainZipConfig {
    /**
     * Zip library path, Default: `//cdn.bootcss.com/jszip/3.3.0/jszip.min.js`
     */
    url?: string;
    /**
     * Defines which zip optional utils should get loaded
     */
    utils?: string[];
}

interface AlainMediaConfig {
    /**
     * Plyr library path, default: `["https://cdn.bootcdn.net/ajax/libs/plyr/3.5.10/plyr.min.js", "https://cdn.bootcdn.net/ajax/libs/plyr/3.5.10/plyr.css"]`
     */
    urls?: string[];
    /**
     * Please refer to [plyr options](https://github.com/sampotts/plyr#options)
     */
    options?: NzSafeAny;
}

interface AlainPdfConfig {
    /**
     * [pdf.js](https://github.com/mozilla/pdf.js) library root url, Default: `https://cdn.jsdelivr.net/npm/pdfjs-dist@3.6.x/`
     *
     * **Note** That only the root path, muse be ending with `/`
     */
    lib?: string;
    /**
     * Show single or all pages altogether, Default: `true`
     */
    showAll?: boolean;
    /**
     * Enable text rendering, allows to select text, Default: `true`
     */
    renderText?: boolean;
    /**
     * Show page borders, Default: `false`
     */
    showBorders?: boolean;
    /**
     * Default: `true`
     * - if set to `true` - size will be as same as original document
     * - if set to `false` - size will be as same as container block
     */
    originalSize?: boolean;
    /**
     * You can show your document in original size, and make sure that it's not bigger then container block. Default: `false`
     */
    fitToPage?: boolean;
    /**
     * Turn on or off auto resize, Default: `true`
     * **Important** To make work - make sure that `[originalSize]="false"` and pdf-viewer tag has `max-width` or `display` are set.
     */
    autoReSize?: boolean;
}

interface AlainOnboardingConfig {
    /** 文字方向 */
    direction?: 'ltr' | 'rtl';
}

interface AlainCellConfig {
    /**
     * Size
     *
     * 大小
     */
    size?: 'large' | 'small';
    /**
     * Default Text
     *
     * 默认文本
     */
    default?: {
        text?: string;
        condition?: unknown;
    };
    /**
     * 日期
     */
    date?: {
        /**
         * 格式化字符，默认：`yyyy-MM-dd HH:mm:ss`
         */
        format?: string;
    };
    /**
     * 货币
     */
    currency?: {
        /**
         * The starting unit of the value, `yuan` means 元, `cent` means 分, default: `yuan`
         *
         * 值的起始单位，`yuan` 元，`cent` 分，默认：`yuan`
         */
        startingUnit?: 'yuan' | 'cent';
        /**
         * Using `DEFAULT_CURRENCY_CODE` when value is `true
         *
         * 是否使用 `CurrencyPipe` 来替代
         */
        useAngular?: boolean;
        /**
         * 精度，默认：`2`
         */
        precision?: number;
        /**
         * 是否忽略精度 `.0` 或 `.00` 结尾的字符，默认：`true`
         */
        ingoreZeroPrecision?: boolean;
        /**
         * Use anguar `currency` pipe parse when is set, pls refer to [document](https://angular.io/api/common/CurrencyPipe)
         *
         * 若指定则表示使用 Angular 自带的 `currency` 管道来解析，见[文档](https://angular.cn/api/common/CurrencyPipe)
         */
        ngCurrency?: {
            display: 'code' | 'symbol' | 'symbol-narrow';
            currencyCode?: string;
            digitsInfo?: string;
            locale?: string;
        };
    };
    /**
     * Converted into RMB notation
     *
     * 转化成人民币表示法
     */
    cny?: {
        /**
         * The starting unit of the value, `yuan` means 元, `cent` means 分, default: `yuan`
         *
         * 值的起始单位，`yuan` 元，`cent` 分，默认：`yuan`
         */
        startingUnit?: 'yuan' | 'cent';
        /**
         * Whether to return to uppercase notation, default: `true`
         *
         * 是否返回大写表示法，默认：`true`
         */
        inWords?: boolean;
        /**
         * Specify negative sign, default: `negative`
         *
         * 指定负数符号，默认：`负`
         */
        minusSymbol?: string;
    };
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
        /**
         * 大小，默认：`32`
         */
        size?: number;
        /**
         * 是否允许点击查看大图，默认：`true`
         */
        big?: boolean;
        previewOptions?: NzImagePreviewOptions;
    };
    /**
     * HTML 配置
     */
    html?: {
        safe?: 'text' | 'html' | 'safeHtml';
    };
}

interface AlainExceptionType {
    typeDict?: Record<number | string, {
        img: string;
        title: string;
        desc?: string;
    }>;
}

interface AlainACLConfig {
    /**
     * Router URL when guard fail, default: `/403`
     */
    guard_url?: string;
    /**
     * `can` before execution callback
     */
    preCan?: ((roleOrAbility: number | number[] | string | string[] | AlainACLType) => AlainACLType | null) | null;
}
interface AlainACLType {
    /**
     * 角色
     */
    role?: string[];
    /**
     * 权限点
     */
    ability?: number[] | string[];
    /**
     * Validated against, default: `oneOf`
     * - `allOf` the value validates against all the roles or abilities
     * - `oneOf` the value validates against exactly one of the roles or abilities
     */
    mode?: 'allOf' | 'oneOf';
    /**
     * 是否取反，即结果为 `true` 时表示未授权
     */
    except?: boolean;
    [key: string]: NzSafeAny;
}

interface AlainAuthConfig {
    /**
     * 存储KEY值，默认：`_token`
     */
    store_key?: string;
    /**
     * 无效时跳转至登录页，默认：`true`，包括：
     * - 无效token值
     * - token已过期（限JWT）
     */
    token_invalid_redirect?: boolean;
    /**
     * token过期时间偏移值，默认：`10` 秒（单位：秒）
     */
    token_exp_offset?: number;
    /**
     * 发送token参数名，默认：·
     */
    token_send_key?: string;
    /**
     * 发送token模板（默认为：`'${token}'`），使用 `${token}` 表示token点位符（**注意：**请务必使用 \`\` 包裹），例如：
     *
     * - `Bearer ${token}`
     */
    token_send_template?: string;
    /**
     * 发送token参数位置，默认：`header`
     */
    token_send_place?: 'header' | 'body' | 'url';
    /**
     * 登录页路由地址，默认：`/login`
     */
    login_url?: string;
    /**
     * 忽略TOKEN的URL地址列表，默认值为：`[/\/assets\//]`
     */
    ignores?: RegExp[];
    /**
     * 刷新间隔时长（单位：ms），默认：`3000`
     */
    refreshTime?: number;
    /**
     * 过期计算偏移值（单位：ms），默认：`6000`
     * - **建议**根据 `refreshTime` 倍数来设置
     */
    refreshOffset?: number;
}

interface AlainCacheConfig {
    /**
     * Cache mode, default: `promise`
     * - `promise` Convention mode, allowing `key` to get data as http
     * - `none` Normal mode
     */
    mode?: 'promise' | 'none';
    /**
     * Rename the return parameters, default: ``, for example:
     * - `null` The response body is content
     * - `list` The response body should be `{ list: [] }`
     * - `result.list` The response body should be `{ result: { list: [] } }`
     */
    reName?: string | string[];
    /**
     * Set the default storage type
     * - `m` Storage via memory
     * - `s` Storage via `localStorage`
     */
    type?: 'm' | 's';
    /**
     * Set the default expire time (Unit: second)
     */
    expire?: number;
    /**
     * Key prefix of persistent data, default: ``
     */
    prefix?: string;
    /**
     * Key name of persistent data metadata storage, default: `__cache_meta`
     */
    meta_key?: string;
    /**
     * 自定义请求体
     *
     * Custom request
     */
    request?: (key: string) => Observable<unknown>;
    /**
     * Default configuration of interceptor
     *
     * 拦截器默认配置项
     */
    interceptor?: AlainCacheInterceptor;
}
interface AlainCacheInterceptor {
    /**
     * Whether to enable, default `true`
     *
     * 是否启用，默认 `true`
     */
    enabled?: boolean;
    /**
     * Specify the storage method, `m` means memory, `s` means persistence; default: `m`
     *
     * 指定存储方式，`m` 表示内存，`s` 表示持久化；默认：`m`
     */
    saveType?: 'm' | 's';
    /**
     * Whether to trigger a notification, default: `true`
     *
     * 是否触发通知，默认：`true`
     */
    emitNotify?: boolean;
}

interface AlainChartConfig {
    /**
     * [G2](https://g2.antv.vision/zh/docs/manual/getting-started) library path
     * default: `[
     *  "https://gw.alipayobjects.com/os/lib/antv/g2/4.1.14/dist/g2.min.js",
     *  "https://gw.alipayobjects.com/os/lib/antv/data-set/0.11.8/dist/data-set.js",
     * ]`
     */
    libs?: string[];
    theme?: string | Record<string, NzSafeAny>;
    /**
     * [ECharts](https://echarts.apache.org/) library path
     * default: `[
     *  "https://cdnjs.cloudflare.com/ajax/libs/echarts/5.1.0/echarts.min.js",
     *  "https://cdnjs.cloudflare.com/ajax/libs/echarts/5.1.0/i18n/langZH.min.js",
     *  "https://cdnjs.cloudflare.com/ajax/libs/echarts/5.1.0/theme/dark.min.js"
     * ]`
     */
    echartsLib?: string;
    /**
     * [ECharts](https://echarts.apache.org/zh/download-extension.html) library path, like i18n, theme etc
     */
    echartsExtensions?: string[];
    /**
     * Theme configuration item, you can load the default theme file with `echartsExtensions`
     *
     * 主题配置项，可以配合 `echartsExtensions` 加载默认的主题文件
     */
    echartsTheme?: string | Record<string, unknown> | null;
}

interface AlainUtilArrayConfig {
    /** 深度项名，默认：`'deep'` */
    deepMapName?: string;
    /** 扁平后数组的父数据项名，默认：`'parent'` */
    parentMapName?: string;
    /** 编号项名，默认：`'id'` */
    idMapName?: string;
    /** 父编号项名，默认：`'parent_id'` */
    parentIdMapName?: string;
    /** 源数据子项名，默认：`'children'` */
    childrenMapName?: string;
    /** 标题项名，默认：`'title'` */
    titleMapName?: string;
    /** 节点 Checkbox 是否选中项名，默认：`'checked'` */
    checkedMapname?: string;
    /** 节点本身是否选中项名，默认：`'selected'` */
    selectedMapname?: string;
    /** 节点是否展开(叶子节点无效)项名，默认：`'expanded'` */
    expandedMapname?: string;
    /** 设置是否禁用节点(不可进行任何操作)项名，默认：`'disabled'` */
    disabledMapname?: string;
}

interface AlainUtilCurrencyConfig {
    /**
     * Starting unit, default: `yuan`
     *
     * 起始单位，默认：`yuan`
     * - `yuan` 人民币：元
     * - `cent` 人民币：分
     */
    startingUnit?: 'yuan' | 'cent';
    /**
     * 单位国际化，默认：`{Q: '京', T: '兆', B: '亿', M: '万', K: '千',}`
     */
    megaUnit?: {
        Q: string;
        T: string;
        B: string;
        M: string;
        K: string;
    };
    /**
     * 精度，默认：`2`
     */
    precision?: number;
    /**
     * 是否忽略精度 `.0` 或 `.00` 结尾的字符，默认：`true`
     */
    ingoreZeroPrecision: boolean;
    /**
     * Use anguar `currency` pipe parse when is set, pls refer to [document](https://angular.io/api/common/CurrencyPipe)
     *
     * 若指定则表示使用 Angular 自带的 `currency` 管道来解析，见[文档](https://angular.cn/api/common/CurrencyPipe)
     */
    ngCurrency?: {
        display: 'code' | 'symbol' | 'symbol-narrow';
        currencyCode?: string;
        digitsInfo?: string;
        locale?: string;
    };
}

interface AlainThemeHttpClientConfig {
    /**
     * 空值处理，默认：`include`
     * - include：包含
     * - ignore：忽略
     */
    nullValueHandling?: 'include' | 'ignore';
    /**
     * 时间值处理，默认：`timestamp`
     * - timestamp：时间戳毫秒级
     * - timestampSecond：时间戳秒级
     * - ignore：忽略处理，保持原始状态
     */
    dateValueHandling?: 'timestamp' | 'timestampSecond' | 'ignore';
}

interface AlainThemeResponsiveConfig {
    rules: Record<number, {
        xs: number;
        sm?: number;
        md?: number;
        lg?: number;
        xl?: number;
        xxl?: number;
    }>;
}

interface AlainThemeI18nConfig {
    /**
     * Overrides the default interpolation start and end delimiters ({{ and }}).
     *
     * 改写默认的插值表达式起止分界符（{{ 和 }}）。
     */
    interpolation?: [string, string];
    /**
     * Internationalization code URL guard parameter name, default: `i18n`
     *
     * 国际化代码 URL 守卫参数名，默认：`i18n`
     */
    paramNameOfUrlGuard?: string;
}

interface AlainThemePipeConfig {
    dateFormat?: string;
    dateFormatCustom?: AlainThemePipeDateFormatCustom;
}
type AlainThemePipeDateFormatCustom = (value: Date, formatString?: string | null, options?: {
    locale?: Locale;
}) => string;

interface AlainMockConfig {
    /**
     * 请求延迟，单位：毫秒，默认：`300`
     */
    delay?: number;
    /**
     * 是否强制所有请求都Mock，默认：`false`，`true` 表示当请求的URL不存在时直接返回 404 错误，`false` 表示未命中时发送真实HTTP请求
     */
    force?: boolean;
    /**
     * 是否打印 Mock 请求信息，弥补浏览器无Network信息，默认：`true`
     */
    log?: boolean;
}

interface AlainSFConfigFormatMap {
    'date-time': {
        widget?: string;
        showTime?: boolean;
        format?: string;
    };
    date: {
        widget?: string;
        format?: string;
    };
    'full-date': {
        widget?: string;
        format?: string;
    };
    time: {
        widget?: string;
        format?: string;
    };
    'full-time': {
        widget?: string;
        format?: string;
    };
    week: {
        widget?: string;
        mode?: string;
        format?: string;
    };
    month: {
        widget?: string;
        mode?: string;
        format?: string;
    };
    uri: {
        widget?: string;
    };
    email: {
        widget?: string;
        type?: string;
    };
    color: {
        widget?: string;
        type?: string;
    };
    '': {
        widget?: string;
    };
}
interface AlainSFConfig {
    formatMap?: AlainSFConfigFormatMap;
    /**
     * 是否忽略某些数据类型校验 `ERRORSDEFAULT`，默认：`[ 'type', 'enum' ]`
     *
     * - `type` 限定 Schema 中 `type` 类型
     * - `enum` 限定应当是预设定的枚举值之一
     */
    ingoreKeywords?: string[];
    /**
     * [ajv](https://ajv.js.org/options.html) 参数
     */
    ajv?: Options;
    /**
     * 是否实时校验，默认：`true`
     * - `true` 每一次都校验
     * - `false` 提交时校验
     */
    liveValidate?: boolean;
    /**
     * 指定表单 `autocomplete` 值，默认：`on`
     */
    autocomplete?: 'on' | 'off' | null;
    /**
     * 是否立即呈现错误视觉，默认：`false`
     */
    firstVisual?: boolean;
    /**
     * 是否只展示错误视觉不显示错误文本，默认：`false`
     */
    onlyVisual?: boolean;
    /**
     * 自定义通用错误信息，默认：`{}`
     */
    errors?: Record<string, string>;
    /**
     * 默认全局布局，类型为：`SFUISchemaItem`，使用时加上可智能提示，例如：
     *
     * ```ts
     * ui: {} as SFUISchemaItem
     * ```
     */
    ui?: NzSafeAny;
    /**
     * 元素组件大小，用于 `nzSize` 值
     */
    size?: 'default' | 'large' | 'small';
    /**
     * 按钮风格，类型为：`SFButton`，使用时加上可智能提示，例如：
     *
     * ```ts
     * button: {} as SFButton
     * ```
     */
    button?: NzSafeAny;
    /**
     * date小部件：`type="string"` 且不指定 `schema.format` 和 `ui.format` 时日期格式，默认：`yyyy-MM-dd HH:mm:ss`
     */
    uiDateStringFormat?: string;
    /**
     * date小部件：`type="number"` 且不指定 `schema.format` 和 `ui.format` 时日期格式，默认：`T` 13位 Unix Timestamp
     */
    uiDateNumberFormat?: string;
    /**
     * time小部件：`type="string"` 且不指定 `schema.format` 和 `ui.format` 时日期格式，默认：`HH:mm:ss`
     */
    uiTimeStringFormat?: string;
    /**
     * time小部件：`type="number"` 且不指定 `schema.format` 和 `ui.format` 时日期格式，默认：`T` 13位 Unix Timestamp，日期统一使用 `1970-01-01`
     */
    uiTimeNumberFormat?: string;
    /**
     * 指定 `format: 'email'` 的默认Email后缀，默认：`['qq.com', '163.com', 'gmail.com', '126.com', 'aliyun.com']`
     */
    uiEmailSuffixes?: string[];
    /**
     * Whether to delay rendering, should be manually call `refreshSchema()`
     *
     * 是否延迟渲染，需要手动调用 `refreshSchema()`
     */
    delay?: boolean;
}

interface AlainConfig {
    dataRange?: AlainDateRangePickerConfig;
    exception?: AlainExceptionType;
    errorCollect?: AlainErrorCollectConfig;
    image?: AlainImageConfig;
    loading?: AlainLoadingConfig;
    onboarding?: AlainOnboardingConfig;
    lodop?: AlainLodopConfig;
    pageHeader?: AlainPageHeaderConfig;
    se?: AlainSEConfig;
    sg?: AlainSGConfig;
    sv?: AlainSVConfig;
    st?: AlainSTConfig;
    sf?: AlainSFConfig;
    cell?: AlainCellConfig;
    xlsx?: AlainXlsxConfig;
    zip?: AlainZipConfig;
    pdf?: AlainPdfConfig;
    media?: AlainMediaConfig;
    acl?: AlainACLConfig;
    auth?: AlainAuthConfig;
    cache?: AlainCacheConfig;
    chart?: AlainChartConfig;
    mock?: AlainMockConfig;
    utilArray?: AlainUtilArrayConfig;
    utilCurrency?: AlainUtilCurrencyConfig;
    themeHttp?: AlainThemeHttpClientConfig;
    themeResponsive?: AlainThemeResponsiveConfig;
    themeI18n?: AlainThemeI18nConfig;
    themePipe?: AlainThemePipeConfig;
}
type AlainConfigKey = keyof AlainConfig;
declare const ALAIN_CONFIG: InjectionToken<AlainConfig>;
declare function ALAIN_CONFIG_FACTORY(): AlainConfig;
declare function provideAlainConfig(config: AlainConfig): EnvironmentProviders;

declare class AlainConfigService {
    private readonly config;
    get<T extends AlainConfigKey>(componentName: T, key?: string): AlainConfig[T];
    merge<T extends AlainConfigKey>(componentName: T, ...defaultValues: Array<AlainConfig[T]>): AlainConfig[T];
    /**
     * 将配置附加到当前实例中，支持 Signal 信号
     */
    attach<T extends AlainConfigKey>(componentThis: unknown, componentName: T, defaultValues: AlainConfig[T]): void;
    set<T extends AlainConfigKey>(componentName: T, value: AlainConfig[T]): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AlainConfigService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AlainConfigService>;
}

export { ALAIN_CONFIG, ALAIN_CONFIG_FACTORY, AlainConfigService, AlainSVConfig, provideAlainConfig };
export type { AlainACLConfig, AlainACLType, AlainAuthConfig, AlainCacheConfig, AlainCacheInterceptor, AlainCellConfig, AlainChartConfig, AlainConfig, AlainConfigKey, AlainDateRangePickerConfig, AlainDateRangePickerShortcut, AlainDateRangePickerShortcutItem, AlainErrorCollectConfig, AlainExceptionType, AlainImageConfig, AlainLoadingConfig, AlainLodopConfig, AlainMediaConfig, AlainMockConfig, AlainOnboardingConfig, AlainPageHeaderConfig, AlainPdfConfig, AlainSEConfig, AlainSFConfig, AlainSFConfigFormatMap, AlainSGConfig, AlainSTConfig, AlainThemeHttpClientConfig, AlainThemeI18nConfig, AlainThemePipeConfig, AlainThemePipeDateFormatCustom, AlainThemeResponsiveConfig, AlainUtilArrayConfig, AlainUtilCurrencyConfig, AlainXlsxConfig, AlainZipConfig };
