/**
 * @fileoverview added by tsickle
 * Generated from: st.interfaces.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function STWidthMode() { }
if (false) {
    /**
     * 宽度类型
     * - `default` 默认行为
     * - `strict` 严格模式，即强制按 `width` 指定的宽度呈现，并根据 `strictBehavior` 类型处理
     * @type {?|undefined}
     */
    STWidthMode.prototype.type;
    /**
     * 严格模式的处理行为
     * - `wrap` 强制换行
     * - `truncate` 截短
     * @type {?|undefined}
     */
    STWidthMode.prototype.strictBehavior;
}
/**
 * @record
 */
export function STResetColumnsOption() { }
if (false) {
    /** @type {?|undefined} */
    STResetColumnsOption.prototype.pi;
    /** @type {?|undefined} */
    STResetColumnsOption.prototype.ps;
    /** @type {?|undefined} */
    STResetColumnsOption.prototype.columns;
    /**
     * Whether to pre-clear data, Default: `false`
     * @type {?|undefined}
     */
    STResetColumnsOption.prototype.preClearData;
    /**
     * Whether to trigger a data load, Default: `true`
     * @type {?|undefined}
     */
    STResetColumnsOption.prototype.emitReload;
}
/**
 * @record
 */
export function STReq() { }
if (false) {
    /**
     * 分页类型，默认：`page`
     * - `page` 使用 `pi`，`ps` 组合
     * - `skip` 使用 `skip`，`limit` 组合
     * @type {?|undefined}
     */
    STReq.prototype.type;
    /**
     * 额外请求参数，默认自动附加 `pi`、`ps` 至URL
     * - `{ status: 'new' }` => `url?pi=1&ps=10&status=new`
     * @type {?|undefined}
     */
    STReq.prototype.params;
    /**
     * 请求方法，默认：`GET`
     * @type {?|undefined}
     */
    STReq.prototype.method;
    /**
     * 请求体 `body`
     * @type {?|undefined}
     */
    STReq.prototype.body;
    /**
     * 请求体 `Header`
     * @type {?|undefined}
     */
    STReq.prototype.headers;
    /**
     * 重命名参数 `pi`、`ps`，默认：`{ pi: 'pi', ps: 'ps' }`
     * - `{ pi: 'Page' }` => `pi` 会被替换成 Page
     * @type {?|undefined}
     */
    STReq.prototype.reName;
    /**
     * 是否将请求所有参数数据都放入 `body` 当中（`url` 地址本身参数除外），仅当 `method: 'POST'` 时有效，默认：`false`
     * @type {?|undefined}
     */
    STReq.prototype.allInBody;
    /**
     * 是否延迟加载数据，即渲染结束后不会主动发起请求，默认：`false`
     * @type {?|undefined}
     */
    STReq.prototype.lazyLoad;
    /**
     * 请求前数据处理
     * @type {?|undefined}
     */
    STReq.prototype.process;
}
/**
 * @record
 */
export function STRequestOptions() { }
if (false) {
    /** @type {?|undefined} */
    STRequestOptions.prototype.body;
    /** @type {?|undefined} */
    STRequestOptions.prototype.headers;
    /** @type {?|undefined} */
    STRequestOptions.prototype.params;
    /** @type {?|undefined} */
    STRequestOptions.prototype.observe;
    /** @type {?|undefined} */
    STRequestOptions.prototype.reportProgress;
    /** @type {?|undefined} */
    STRequestOptions.prototype.responseType;
    /** @type {?|undefined} */
    STRequestOptions.prototype.withCredentials;
}
/**
 * @record
 */
export function STLoadOptions() { }
if (false) {
    /**
     * 是否合并，默认：`false`
     * @type {?|undefined}
     */
    STLoadOptions.prototype.merge;
    /**
     * 是否跳转至顶部，若不指定由 `page.toTop` 来决定
     * @type {?|undefined}
     */
    STLoadOptions.prototype.toTop;
}
/**
 * @record
 */
export function STRes() { }
if (false) {
    /**
     * 重命名返回参数 `total`、`list`
     * - `{ total: 'Total' }` => Total 会被当作 `total`
     * @type {?|undefined}
     */
    STRes.prototype.reName;
    /**
     * 数据预处理
     * @type {?|undefined}
     */
    STRes.prototype.process;
}
/**
 * @record
 */
export function STPage() { }
if (false) {
    /**
     * 前端分页，当 `data` 为`any[]` 或 `Observable<any[]>` 有效，默认：`true`
     * - `true` 由 `st` 根据 `data` 长度受控分页，包括：排序、过滤等
     * - `false` 由用户通过 `total` 和 `data` 参数受控分页，并维护 `(change)` 当分页变更时重新加载数据
     * @type {?|undefined}
     */
    STPage.prototype.front;
    /**
     * 后端分页是否采用`0`基索引，只在`data`类型为`string`时有效，默认：`false`
     * @type {?|undefined}
     */
    STPage.prototype.zeroIndexed;
    /**
     * 指定分页显示的位置，默认：`bottom`
     * @type {?|undefined}
     */
    STPage.prototype.position;
    /**
     * 指定分页显示的尺寸，默认：`default`
     * @type {?|undefined}
     */
    STPage.prototype.type;
    /**
     * 指定分页分页方向，默认：`right`
     * @type {?|undefined}
     */
    STPage.prototype.placement;
    /**
     * 是否显示分页器，默认：`true`
     * @type {?|undefined}
     */
    STPage.prototype.show;
    /**
     * 是否显示分页器中改变页数，默认：`false`
     * @type {?|undefined}
     */
    STPage.prototype.showSize;
    /**
     * 分页器中每页显示条目数下拉框值，默认：`[10, 20, 30, 40, 50]`
     * @type {?|undefined}
     */
    STPage.prototype.pageSizes;
    /**
     * 是否显示分页器中快速跳转，默认：`false`
     * @type {?|undefined}
     */
    STPage.prototype.showQuickJumper;
    /**
     * 用于自定义页码的结构，用法参照 Pagination 组件
     * @type {?|undefined}
     */
    STPage.prototype.itemRender;
    /**
     * 当添加该属性时，显示为简单分页，默认：`false`
     * @type {?|undefined}
     */
    STPage.prototype.simple;
    /**
     * 是否显示总数据量
     * - `boolean` 类型显示与否，默认模板：`共 {{total}} 条`
     * - `string` 自定义模板，模板变量：
     *  - `{{total}}` 表示数据总量
     *  - `{{range[0]}}` 表示当前页开始数量值
     *  - `{{range[1]}}` 表示当前页结束数量值
     * @type {?|undefined}
     */
    STPage.prototype.total;
    /**
     * 切换分页时返回顶部，默认：`true`
     * @type {?|undefined}
     */
    STPage.prototype.toTop;
    /**
     * 返回顶部偏移值，默认：`100`
     * @type {?|undefined}
     */
    STPage.prototype.toTopOffset;
}
/**
 * 数据源
 * @record
 */
export function STData() { }
if (false) {
    /**
     * 选择框或单选框状态值
     * @type {?|undefined}
     */
    STData.prototype.checked;
    /**
     * 选择框或单选框 `disabled` 值
     * @type {?|undefined}
     */
    STData.prototype.disabled;
    /**
     * 是否展开状态
     * @type {?|undefined}
     */
    STData.prototype.expand;
    /**
     * 是否显示展开按钮
     * @type {?|undefined}
     */
    STData.prototype.showExpand;
    /* Skipping unhandled member: [key: string]: any;*/
}
/**
 * @record
 */
export function STColumnEventOptions() { }
if (false) {
    /** @type {?} */
    STColumnEventOptions.prototype.record;
    /** @type {?} */
    STColumnEventOptions.prototype.column;
    /** @type {?} */
    STColumnEventOptions.prototype.index;
    /** @type {?} */
    STColumnEventOptions.prototype.instance;
    /** @type {?|undefined} */
    STColumnEventOptions.prototype.event;
}
/**
 * 列描述
 * @record
 */
export function STColumn() { }
if (false) {
    /**
     * 用于定义数据源主键，例如：`statistical`
     * @type {?|undefined}
     */
    STColumn.prototype.key;
    /**
     * 列标题
     * @type {?|undefined}
     */
    STColumn.prototype.title;
    /**
     * 列数据在数据项中对应的 key，支持 `a.b.c` 的嵌套写法，例如：
     * - `id`
     * - `price.market`
     * - `[ 'price', 'market' ]`
     * @type {?|undefined}
     */
    STColumn.prototype.index;
    /**
     * 类型
     * - `no` 行号，计算规则：`index + noIndex`
     * - `checkbox` 多选
     * - `radio` 单选
     * - `link` 链接，务必指定 `event`
     * - `badge` [徽标](https://ng.ant.design/components/badge/zh)，务必指定 `badge` 参数配置徽标对应值
     * - `tag` [标签](https://ng.ant.design/components/tag/zh)，务必指定 `tag` 参数配置标签对应值
     * - `enum` 枚举转换，务必指定 `enum` 参数配置标签对应值
     * - `img` 图片且居中(若 `className` 存在则优先)
     * - `number` 数字且居右(若 `className` 存在则优先)
     * - `currency` 货币且居右(若 `className` 存在则优先)
     * - `date` 日期格式且居中(若 `className` 存在则优先)，使用 `dateFormat` 自定义格式
     * - `yn` 将`boolean`类型徽章化 [document](https://ng-alain.com/docs/data-render#yn)
     * - `widget` 使用自定义小部件动态创建
     * @type {?|undefined}
     */
    STColumn.prototype.type;
    /**
     * 链接回调，若返回一个字符串表示导航URL会自动触发 `router.navigateByUrl`
     * @deprecated Will be removed in 13.0.0, Pls used `event` instead
     * @type {?|undefined}
     */
    STColumn.prototype.click;
    /**
     * 事件回调（例如：`type: 'link'` 时有效），若函数返回值为字符串表示导航URL会自动触发 `router.navigateByUrl`
     * @type {?|undefined}
     */
    STColumn.prototype.event;
    /**
     * 按钮组
     * @type {?|undefined}
     */
    STColumn.prototype.buttons;
    /**
     * 自定义渲染ID
     * \@example
     * <ng-template st-row="custom" let-item let-index="index" let-column="column">
     *  {{ c.title }}
     * </ng-template>
     * @type {?|undefined}
     */
    STColumn.prototype.render;
    /**
     * 标题自定义渲染ID
     * \@example
     * <ng-template st-row="custom" type="title" let-c>
     *  {{ item | json }}
     * </ng-template>
     * @type {?|undefined}
     */
    STColumn.prototype.renderTitle;
    /**
     * 列宽（数字型表示 `px` 值），例如：`100`、`10%`、`100px`
     *
     * **注意：** 若固定列必须是数字
     * @type {?|undefined}
     */
    STColumn.prototype.width;
    /**
     * 排序配置项，远程数据配置**优先**规则：
     * - `true` 表示允许排序，且若数据源为本地时自动生成 `compare: (a, b) => a[index] - b[index]` 方法
     * - `string` 表示远程数据排序相对应 `key` 值
     * @type {?|undefined}
     */
    STColumn.prototype.sort;
    /**
     * 过滤配置项
     * @type {?|undefined}
     */
    STColumn.prototype.filter;
    /**
     * 格式化列值
     * @type {?|undefined}
     */
    STColumn.prototype.format;
    /**
     * 自定义全/反选选择项
     * @type {?|undefined}
     */
    STColumn.prototype.selections;
    /**
     * 列 `class` 属性值（注：无须 `.` 点）多个用空格隔开，例如：
     * - `text-center` 居中
     * - `text-right` 居右
     * - `text-success` 成功色
     * - `text-error` 异常色
     * @type {?|undefined}
     */
    STColumn.prototype.className;
    /**
     * 合并列
     * @type {?|undefined}
     */
    STColumn.prototype.colSpan;
    /**
     * 数字格式，`type=number` 有效
     * @type {?|undefined}
     */
    STColumn.prototype.numberDigits;
    /**
     * 日期格式，`type=date` 有效，（默认：`yyyy-MM-dd HH:mm`）
     * @type {?|undefined}
     */
    STColumn.prototype.dateFormat;
    /**
     * 当 `type=yn` 有效
     * @type {?|undefined}
     */
    STColumn.prototype.yn;
    /**
     * 是否允许导出，默认 `true`
     * @type {?|undefined}
     */
    STColumn.prototype.exported;
    /**
     * 权限，等同 [ACLCanType](https://ng-alain.com/acl/getting-started/#ACLCanType) 参数值
     * @type {?|undefined}
     */
    STColumn.prototype.acl;
    /**
     * 当不存在数据时以默认值替代
     * @type {?|undefined}
     */
    STColumn.prototype.default;
    /**
     * 固定前后列，当指定时务必指定 `width` 否则视为无效，有若干 **注意：** 项：
     *
     * - 若列头与内容不对齐或出现列重复，请指定列的宽度 `width`
     * - 建议指定 `scroll.x` 为大于表格宽度的固定值或百分比。注意，且非固定列宽度之和不要超过 `scroll.x`
     * @type {?|undefined}
     */
    STColumn.prototype.fixed;
    /**
     * 徽标配置项
     * @type {?|undefined}
     */
    STColumn.prototype.badge;
    /**
     * 标签配置项
     * @type {?|undefined}
     */
    STColumn.prototype.tag;
    /**
     * 行号索引，默认：`1`
     * - 计算规则为：`index + noIndex`
     * - 支持自定义方法
     * @type {?|undefined}
     */
    STColumn.prototype.noIndex;
    /**
     * 条件表达式
     * - 仅赋值 `columns` 时执行一次
     * - 可调用 `resetColumns()` 再一次触发
     * @type {?|undefined}
     */
    STColumn.prototype.iif;
    /**
     * 统计列数据
     * - 若使用自定义统计函数可无须指定 `index`
     * - 可以根据 `key` 来定义生成后需要的键名，如果未指定 `key` 则使用 `index` 来表示键名
     * - 当无法找到有效键名时，使用下标（从 `0` 开始）来代替
     * @type {?|undefined}
     */
    STColumn.prototype.statistical;
    /** @type {?|undefined} */
    STColumn.prototype.widget;
    /** @type {?|undefined} */
    STColumn.prototype.enum;
    /**
     * 分组表头
     * @type {?|undefined}
     */
    STColumn.prototype.children;
    /** @type {?|undefined} */
    STColumn.prototype.rowSpan;
    /**
     * 调整表头配置
     * - 注意：**不要忘记**在 `src/styles` 下增加 `nz-resizable` Less 样式文件：`\@import '~ng-zorro-antd/resizable/style/entry.less';`
     * - **不支持多表头**
     * @type {?|undefined}
     */
    STColumn.prototype.resizable;
}
/**
 * @record
 */
export function STWidgetColumn() { }
if (false) {
    /** @type {?} */
    STWidgetColumn.prototype.type;
    /** @type {?|undefined} */
    STWidgetColumn.prototype.params;
}
/**
 * @record
 */
export function STColumnTitle() { }
if (false) {
    /**
     * Text of header, can be choose one of `text` or `i18n`
     * @type {?|undefined}
     */
    STColumnTitle.prototype.text;
    /**
     * I18n key of header, can be choose one of `text` or `i18n`
     * @type {?|undefined}
     */
    STColumnTitle.prototype.i18n;
    /**
     * Optional information of header
     * @type {?|undefined}
     */
    STColumnTitle.prototype.optional;
    /**
     * Optional help of header
     * @type {?|undefined}
     */
    STColumnTitle.prototype.optionalHelp;
    /* Skipping unhandled member: [key: string]: any;*/
}
/**
 * @record
 */
export function STStatistical() { }
if (false) {
    /** @type {?} */
    STStatistical.prototype.type;
    /**
     * 保留小数位数，默认：`2`
     * @type {?|undefined}
     */
    STStatistical.prototype.digits;
    /**
     * 是否需要货币格式化，默认以下情况为 `true`
     * - `type` 为 `STStatisticalFn`、 `sum`、`average`、`max`、`min`
     * @type {?|undefined}
     */
    STStatistical.prototype.currency;
}
/**
 * @record
 */
export function STStatisticalResults() { }
/**
 * @record
 */
export function STStatisticalResult() { }
if (false) {
    /** @type {?} */
    STStatisticalResult.prototype.value;
    /** @type {?|undefined} */
    STStatisticalResult.prototype.text;
}
/**
 * @record
 */
export function STColumnSort() { }
if (false) {
    /**
     * 排序的默认受控属性
     * @type {?|undefined}
     */
    STColumnSort.prototype.default;
    /**
     * 本地数据的排序函数，使用一个函数(参考 [Array.sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) 的 compareFunction)
     * - `null` 忽略本地排序，但保持排序功能
     * - 若数据源为本地时自动生成 `(a, b) => a[index] - b[index]` 方法
     * @type {?|undefined}
     */
    STColumnSort.prototype.compare;
    /**
     * 远程数据的排序时后端相对应的KEY，默认使用 `index` 属性
     * - 若 `multiSort: false` 时：`key: 'name' => ?name=1&pi=1`
     * - 若 `multiSort: true` 允许多个排序 key 存在，或使用 `STMultiSort` 指定多列排序key合并规则
     * @type {?|undefined}
     */
    STColumnSort.prototype.key;
    /**
     * 远程数据的排序时后端相对应的VALUE
     * - `{ ascend: '0', descend: '1' }` 结果 `?name=1&pi=1`
     * - `{ ascend: 'asc', descend: 'desc' }` 结果 `?name=desc&pi=1`
     * @type {?|undefined}
     */
    STColumnSort.prototype.reName;
}
/**
 * @record
 */
export function STSortMap() { }
if (false) {
    /**
     * 是否启用排序
     * @type {?|undefined}
     */
    STSortMap.prototype.enabled;
    /* Skipping unhandled member: [key: string]: any;*/
}
/**
 * @record
 */
export function STColumnFilter() { }
if (false) {
    /**
     * 搜索方式
     * - `defualt` 默认形式
     * - `keyword` 文本框形式
     * @type {?|undefined}
     */
    STColumnFilter.prototype.type;
    /**
     * 表头的筛选菜单项，至少一项才会生效
     * - 当 `type='keyword'` 时可为空
     * @type {?|undefined}
     */
    STColumnFilter.prototype.menus;
    /**
     * 本地数据的筛选函数
     * @type {?|undefined}
     */
    STColumnFilter.prototype.fn;
    /**
     * 标识数据是否已过滤，筛选图标会高亮
     * @type {?|undefined}
     */
    STColumnFilter.prototype.default;
    /**
     * 自定义 filter 图标
     * - 当 `type='default'` 默认 `filter`
     * - 当 `type='keyword'` 默认 `search`
     * @type {?|undefined}
     */
    STColumnFilter.prototype.icon;
    /**
     * 确认按钮文本，默认 `确认`
     * @type {?|undefined}
     */
    STColumnFilter.prototype.confirmText;
    /**
     * 清除按钮文本，默认 `重置`
     * @type {?|undefined}
     */
    STColumnFilter.prototype.clearText;
    /**
     * 是否多选，默认 `true`
     * @type {?|undefined}
     */
    STColumnFilter.prototype.multiple;
    /**
     * 远程数据的过滤时后端相对应的KEY，默认使用 `index` 属性
     * `key: 'name'` 结果 `?name=1&pi=1`
     * @type {?|undefined}
     */
    STColumnFilter.prototype.key;
    /**
     * 远程数据的过滤时后端相对应的VALUE
     * - 默认当 `multiple: true` 时以英文逗号拼接的字符串
     * \@return 返回为 Object 对象
     * @type {?|undefined}
     */
    STColumnFilter.prototype.reName;
}
/**
 * @record
 */
export function STColumnFilterMenu() { }
if (false) {
    /**
     * 文本
     * - 当 `type: 'keyword'` 时表示 `placeholder`
     * @type {?|undefined}
     */
    STColumnFilterMenu.prototype.text;
    /**
     * 值
     * @type {?|undefined}
     */
    STColumnFilterMenu.prototype.value;
    /**
     * 是否选中
     * @type {?|undefined}
     */
    STColumnFilterMenu.prototype.checked;
    /**
     * 权限，等同 [ACLCanType](https://ng-alain.com/acl/getting-started/#ACLCanType) 参数值
     * @type {?|undefined}
     */
    STColumnFilterMenu.prototype.acl;
    /* Skipping unhandled member: [key: string]: any;*/
}
/**
 * @record
 */
export function STColumnSelection() { }
if (false) {
    /**
     * 选择项显示的文字
     * @type {?}
     */
    STColumnSelection.prototype.text;
    /**
     * 选择项点击回调，允许对参数 `data.checked` 进行操作
     * @type {?}
     */
    STColumnSelection.prototype.select;
    /**
     * 权限，等同 `can()` 参数值
     * @type {?|undefined}
     */
    STColumnSelection.prototype.acl;
}
/**
 * 当 `type=yn` 有效
 * @record
 */
export function STColumnYn() { }
if (false) {
    /**
     * 真值条件，（默认：`true`）
     * @type {?|undefined}
     */
    STColumnYn.prototype.truth;
    /**
     * 徽章 `true` 时文本，（默认：`是`）
     * @type {?|undefined}
     */
    STColumnYn.prototype.yes;
    /**
     * 徽章 `false` 时文本，（默认：`否`）
     * @type {?|undefined}
     */
    STColumnYn.prototype.no;
    /**
     * 徽章显示风格
     * - `full` 图标和文本
     * - `icon` 图标
     * - `text` 文本
     * @type {?|undefined}
     */
    STColumnYn.prototype.mode;
}
/**
 * @record
 */
export function STIcon() { }
if (false) {
    /**
     * 图标类型
     * @type {?}
     */
    STIcon.prototype.type;
    /**
     * 图标主题风格，默认：`outline`
     * @type {?|undefined}
     */
    STIcon.prototype.theme;
    /**
     * 是否有旋转动画，默认：`false`
     * @type {?|undefined}
     */
    STIcon.prototype.spin;
    /**
     * 仅适用双色图标，设置双色图标的主要颜色，仅对当前 icon 生效
     * @type {?|undefined}
     */
    STIcon.prototype.twoToneColor;
    /**
     * 指定来自 IconFont 的图标类型
     * @type {?|undefined}
     */
    STIcon.prototype.iconfont;
}
/**
 * @record
 */
export function STColumnButtonEventOptions() { }
if (false) {
    /** @type {?} */
    STColumnButtonEventOptions.prototype.record;
    /** @type {?} */
    STColumnButtonEventOptions.prototype.instance;
    /** @type {?} */
    STColumnButtonEventOptions.prototype.btn;
    /** @type {?|undefined} */
    STColumnButtonEventOptions.prototype.event;
    /**
     * 当 `type=modal` 或 `type=drawer` 的返回值
     * @type {?|undefined}
     */
    STColumnButtonEventOptions.prototype.modal;
}
/**
 * 按钮配置
 * @record
 */
export function STColumnButton() { }
if (false) {
    /**
     * 文本
     * @type {?|undefined}
     */
    STColumnButton.prototype.text;
    /**
     * 文本 i18n
     * @type {?|undefined}
     */
    STColumnButton.prototype.i18n;
    /**
     * 图标
     * @type {?|undefined}
     */
    STColumnButton.prototype.icon;
    /**
     * 按钮类型
     * - `none` 无任何互动
     * - `del` 删除，默认开启 `pop: true`
     * - `modal` 对话框，需要指定 `component` 才会生效
     * - `static` 静态对话框，需要指定 `component` 才会生效
     * - `drawer` 抽屉，需要指定 `component` 才会生效
     * - `link` 链接，当 `click` 返回字符串时自动调用 `navigateByUrl` 导航
     * - `divider` 分割线
     * @type {?|undefined}
     */
    STColumnButton.prototype.type;
    /**
     * 点击回调
     * - Function
     *  - `type=modal` 只会在当有传回值时才会触发回调
     * - reload：重新刷新当前页
     * - load：重新加载数据，并重置页码为：`1`
     *
     * @deprecated Will be removed in 13.0.0, Pls used `event` instead
     * @type {?|undefined}
     */
    STColumnButton.prototype.click;
    /**
     * 事件回调，以下情况都会触发一次：
     *  - 当 `type` 为 `modal`、`static`、`drawer`、`link` 时
     *  - 当 `pop` 指定值 `nzOnConfirm` 的确认事件
     *
     * 或直接返回 `reload` 或 `load` 表示刷新当前表格数据方式：
     *  - reload：重新刷新当前页
     *  - load：重新加载数据，并重置页码为：`1`
     * @type {?|undefined}
     */
    STColumnButton.prototype.event;
    /**
     * 气泡确认框参数，若 `string` 类型表示标题
     * @type {?|undefined}
     */
    STColumnButton.prototype.pop;
    /**
     * 对话框参数
     * @type {?|undefined}
     */
    STColumnButton.prototype.modal;
    /**
     * 抽屉参数
     * @type {?|undefined}
     */
    STColumnButton.prototype.drawer;
    /**
     * 下拉菜单，当存在时以 `dropdown` 形式渲染
     * - 只支持一级
     * @type {?|undefined}
     */
    STColumnButton.prototype.children;
    /**
     * 权限，等同 [ACLCanType](https://ng-alain.com/acl/getting-started/#ACLCanType) 参数值
     * @type {?|undefined}
     */
    STColumnButton.prototype.acl;
    /**
     * Conditional expression
     *
     * \@todo Bad parameter design
     * @type {?|undefined}
     */
    STColumnButton.prototype.iif;
    /**
     * Conditional expression rendering behavior, can be set to `hide` (default) or `disabled`
     * @type {?|undefined}
     */
    STColumnButton.prototype.iifBehavior;
    /** @type {?|undefined} */
    STColumnButton.prototype.tooltip;
    /**
     * 按钮 `class` 属性值（注：无须 `.` 点）多个用空格隔开，例如：
     * - `text-success` 成功色
     * - `text-error` 错误色
     * @type {?|undefined}
     */
    STColumnButton.prototype.className;
    /* Skipping unhandled member: [key: string]: any;*/
}
/**
 * @record
 */
export function STColumnButtonOK() { }
if (false) {
    /** @type {?} */
    STColumnButtonOK.prototype.record;
    /**
     * Modal or drawer return value when trigger confirm.
     * @type {?|undefined}
     */
    STColumnButtonOK.prototype.ret;
    /** @type {?|undefined} */
    STColumnButtonOK.prototype.instance;
    /** @type {?} */
    STColumnButtonOK.prototype.event;
}
/**
 * @record
 */
export function STColumnButtonModal() { }
if (false) {
    /**
     * 对话框组件对象
     * @type {?|undefined}
     */
    STColumnButtonModal.prototype.component;
    /**
     * 对话框参数
     * @type {?|undefined}
     */
    STColumnButtonModal.prototype.params;
    /**
     * 对话框目标组件的接收参数名，默认：`record`
     * @type {?|undefined}
     */
    STColumnButtonModal.prototype.paramsName;
}
/**
 * @record
 */
export function STColumnButtonModalConfig() { }
if (false) {
    /**
     * 指定模态框目标组件的接收参数名，默认：`record`
     * @type {?|undefined}
     */
    STColumnButtonModalConfig.prototype.paramsName;
    /**
     * 大小；例如：lg、600，默认：`lg`
     * @type {?|undefined}
     */
    STColumnButtonModalConfig.prototype.size;
    /**
     * 对话框 [ModalOptions](https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/components/modal/modal-types.ts) 参数
     * @type {?|undefined}
     */
    STColumnButtonModalConfig.prototype.modalOptions;
    /**
     * 是否精准（默认：`true`），若返回值非空值（`null`或`undefined`）视为成功，否则视为错误
     * @type {?|undefined}
     */
    STColumnButtonModalConfig.prototype.exact;
}
/**
 * @record
 */
export function STColumnButtonDrawer() { }
if (false) {
    /**
     * 标题
     * @type {?|undefined}
     */
    STColumnButtonDrawer.prototype.title;
    /**
     * 抽屉组件对象
     * @type {?|undefined}
     */
    STColumnButtonDrawer.prototype.component;
    /**
     * 抽屉参数
     * @type {?|undefined}
     */
    STColumnButtonDrawer.prototype.params;
    /**
     * 抽屉目标组件的接收参数名，默认：`record`
     * @type {?|undefined}
     */
    STColumnButtonDrawer.prototype.paramsName;
}
/**
 * @record
 */
export function STColumnButtonDrawerConfig() { }
if (false) {
    /**
     * 抽屉目标组件的接收参数名，默认：`record`
     * @type {?|undefined}
     */
    STColumnButtonDrawerConfig.prototype.paramsName;
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
     * @type {?|undefined}
     */
    STColumnButtonDrawerConfig.prototype.size;
    /**
     * 是否包含底部工具条，默认：`true`
     * @type {?|undefined}
     */
    STColumnButtonDrawerConfig.prototype.footer;
    /**
     * 底部工具条高度，默认：`55`
     * @type {?|undefined}
     */
    STColumnButtonDrawerConfig.prototype.footerHeight;
    /**
     * 抽屉 [NzDrawerOptions](https://ng.ant.design/components/drawer/zh#nzdraweroptions) 参数
     * @type {?|undefined}
     */
    STColumnButtonDrawerConfig.prototype.drawerOptions;
}
/**
 * @record
 */
export function STColumnButtonPop() { }
if (false) {
    /**
     * Title of the popover, default: `确认删除吗？`
     * @type {?|undefined}
     */
    STColumnButtonPop.prototype.title;
    /**
     * Popover trigger mode, default: `click`
     * @type {?|undefined}
     */
    STColumnButtonPop.prototype.trigger;
    /**
     * The position of the popover relative to the target, default: `top`
     * @type {?|undefined}
     */
    STColumnButtonPop.prototype.placement;
    /**
     * Class name of the popover card
     * @type {?|undefined}
     */
    STColumnButtonPop.prototype.overlayClassName;
    /**
     * Style of the popover card
     * @type {?|undefined}
     */
    STColumnButtonPop.prototype.overlayStyle;
    /**
     * Text of the Cancel button
     * @type {?|undefined}
     */
    STColumnButtonPop.prototype.cancelText;
    /**
     * Text of the Confirm button
     * @type {?|undefined}
     */
    STColumnButtonPop.prototype.okText;
    /**
     * Button `type` of the Confirm button
     * @type {?|undefined}
     */
    STColumnButtonPop.prototype.okType;
    /**
     * Customize icon of confirmation
     * @type {?|undefined}
     */
    STColumnButtonPop.prototype.icon;
    /**
     * Whether to directly emit `onConfirm` without showing Popconfirm, default: `() => false`
     * @type {?|undefined}
     */
    STColumnButtonPop.prototype.condition;
}
/**
 * @record
 */
export function STReqReNameType() { }
if (false) {
    /** @type {?|undefined} */
    STReqReNameType.prototype.pi;
    /** @type {?|undefined} */
    STReqReNameType.prototype.ps;
    /** @type {?|undefined} */
    STReqReNameType.prototype.skip;
    /** @type {?|undefined} */
    STReqReNameType.prototype.limit;
}
/**
 * @record
 */
export function STResReNameType() { }
if (false) {
    /** @type {?|undefined} */
    STResReNameType.prototype.total;
    /** @type {?|undefined} */
    STResReNameType.prototype.list;
}
/**
 * @record
 */
export function STExportOptions() { }
if (false) {
    /**
     * Specify the currently exported data, default the current table data
     * @type {?|undefined}
     */
    STExportOptions.prototype.data;
    /**
     * Specify the currently exported column configuration, default the current table data
     * @type {?|undefined}
     */
    STExportOptions.prototype.columens;
    /**
     * 工作溥名
     * @type {?|undefined}
     */
    STExportOptions.prototype.sheetname;
    /**
     * 文件名
     * @type {?|undefined}
     */
    STExportOptions.prototype.filename;
    /**
     * triggers when saveas
     * @type {?|undefined}
     */
    STExportOptions.prototype.callback;
}
/**
 * 单排序规则
 * - 若不指定，则返回：`columnName=ascend|descend`
 * - 若指定，则返回：`sort=columnName.(ascend|descend)`
 * @record
 */
export function STSingleSort() { }
if (false) {
    /**
     * 请求参数名，默认：`sort`
     * @type {?|undefined}
     */
    STSingleSort.prototype.key;
    /**
     * 列名与状态间分隔符，默认：`.`
     * @type {?|undefined}
     */
    STSingleSort.prototype.nameSeparator;
}
/**
 * 多排序相同排序 key 时合并规则
 * @record
 */
export function STMultiSort() { }
if (false) {
    /**
     * 请求参数名，默认：`sort`
     * @type {?|undefined}
     */
    STMultiSort.prototype.key;
    /**
     * 不同属性间分隔符，默认：`-`
     * @type {?|undefined}
     */
    STMultiSort.prototype.separator;
    /**
     * 列名与状态间分隔符，默认：`.`
     * @type {?|undefined}
     */
    STMultiSort.prototype.nameSeparator;
    /**
     * 是否以数组的形式传递参数，默认：`false`
     * - `true` 表示使用 `url?sort=name.asc&sort=age.desc` 形式
     * - `false` 表示使用 `url?sort=name.asc-age.desc` 形式
     * @type {?|undefined}
     */
    STMultiSort.prototype.arrayParam;
    /**
     * 是否保持空值的键名，默认：`true`
     * - `true` 表示不管是否有排序都会发送 `key` 键名
     * - `false` 表示无排序动作时不会发送 `key` 键名
     * @type {?|undefined}
     */
    STMultiSort.prototype.keepEmptyKey;
    /**
     * ## 仅限全局配置项有效
     *
     * 是否全局多排序模式，默认：`true`
     * - `true` 表示所有 `st` 默认为多排序
     * - `false` 表示需要为每个 `st` 添加 `multiSort` 才会视为多排序模式
     * @type {?|undefined}
     */
    STMultiSort.prototype.global;
}
/**
 * 徽标信息
 * @record
 */
export function STColumnBadge() { }
/**
 * @record
 */
export function STColumnBadgeValue() { }
if (false) {
    /**
     * 文本
     * @type {?|undefined}
     */
    STColumnBadgeValue.prototype.text;
    /**
     * 徽标颜色值
     * @type {?|undefined}
     */
    STColumnBadgeValue.prototype.color;
}
/**
 * 标签信息
 * @record
 */
export function STColumnTag() { }
/**
 * @record
 */
export function STColumnTagValue() { }
if (false) {
    /**
     * 文本
     * @type {?|undefined}
     */
    STColumnTagValue.prototype.text;
    /**
     * 颜色值，支持预设和色值
     * - 预设：geekblue,blue,purple,success,red,volcano,orange,gold,lime,green,cyan
     * - 色值：#f50,#ff0
     * @type {?|undefined}
     */
    STColumnTagValue.prototype.color;
}
/**
 * 回调数据
 * @record
 */
export function STChange() { }
if (false) {
    /**
     * 回调类型
     * @type {?}
     */
    STChange.prototype.type;
    /**
     * 当前页码
     * @type {?}
     */
    STChange.prototype.pi;
    /**
     * 每页数量
     * @type {?}
     */
    STChange.prototype.ps;
    /**
     * 数据总量
     * @type {?}
     */
    STChange.prototype.total;
    /**
     * `loaded` 参数
     * @type {?|undefined}
     */
    STChange.prototype.loaded;
    /**
     * `checkbox` 参数
     * @type {?|undefined}
     */
    STChange.prototype.checkbox;
    /**
     * `radio` 参数
     * @type {?|undefined}
     */
    STChange.prototype.radio;
    /**
     * 排序参数
     * @type {?|undefined}
     */
    STChange.prototype.sort;
    /**
     * 过滤参数
     * @type {?|undefined}
     */
    STChange.prototype.filter;
    /**
     * 行点击参数
     * @type {?|undefined}
     */
    STChange.prototype.click;
    /**
     * 行双击参数
     * @type {?|undefined}
     */
    STChange.prototype.dblClick;
    /**
     * `expand` 参数
     * @type {?|undefined}
     */
    STChange.prototype.expand;
    /**
     * `resize` 参数
     * @type {?|undefined}
     */
    STChange.prototype.resize;
}
/**
 * 行单击参数
 * @record
 */
export function STChangeSort() { }
if (false) {
    /** @type {?|undefined} */
    STChangeSort.prototype.value;
    /** @type {?|undefined} */
    STChangeSort.prototype.map;
    /** @type {?|undefined} */
    STChangeSort.prototype.column;
}
/**
 * 行单击参数
 * @record
 */
export function STChangeRowClick() { }
if (false) {
    /** @type {?|undefined} */
    STChangeRowClick.prototype.e;
    /** @type {?|undefined} */
    STChangeRowClick.prototype.item;
    /** @type {?|undefined} */
    STChangeRowClick.prototype.index;
}
/**
 * @record
 */
export function STError() { }
if (false) {
    /** @type {?|undefined} */
    STError.prototype.type;
    /** @type {?|undefined} */
    STError.prototype.error;
}
/**
 * @record
 */
export function STColumnGroupType() { }
if (false) {
    /** @type {?} */
    STColumnGroupType.prototype.column;
    /** @type {?} */
    STColumnGroupType.prototype.colStart;
    /** @type {?|undefined} */
    STColumnGroupType.prototype.colEnd;
    /** @type {?|undefined} */
    STColumnGroupType.prototype.colSpan;
    /** @type {?|undefined} */
    STColumnGroupType.prototype.rowSpan;
    /** @type {?|undefined} */
    STColumnGroupType.prototype.hasSubColumns;
}
/**
 * @record
 */
export function STResizable() { }
if (false) {
    /**
     * Disable resize, Default: `true`
     * @type {?|undefined}
     */
    STResizable.prototype.disabled;
    /**
     * Specifies resize boundaries, Default: `window`
     * @type {?|undefined}
     */
    STResizable.prototype.bounds;
    /**
     * Maximum width of resizable elemen, Default: `60`
     * @type {?|undefined}
     */
    STResizable.prototype.maxWidth;
    /**
     * Minimum width of resizable element, Default: `360`
     * @type {?|undefined}
     */
    STResizable.prototype.minWidth;
    /**
     * Enable preview when resizing, Default: `true`
     * @type {?|undefined}
     */
    STResizable.prototype.preview;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QuaW50ZXJmYWNlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9zdC9zdC5pbnRlcmZhY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBVUEsaUNBYUM7Ozs7Ozs7O0lBUEMsMkJBQTRCOzs7Ozs7O0lBTTVCLHFDQUFxQzs7Ozs7QUFHdkMsMENBWUM7OztJQVhDLGtDQUFZOztJQUNaLGtDQUFZOztJQUNaLHVDQUFxQjs7Ozs7SUFJckIsNENBQXVCOzs7OztJQUl2QiwwQ0FBcUI7Ozs7O0FBR3ZCLDJCQW1DQzs7Ozs7Ozs7SUE3QkMscUJBQXVCOzs7Ozs7SUFLdkIsdUJBQWE7Ozs7O0lBRWIsdUJBQWdCOzs7OztJQUVoQixxQkFBVzs7Ozs7SUFFWCx3QkFBYzs7Ozs7O0lBS2QsdUJBQXlCOzs7OztJQUl6QiwwQkFBb0I7Ozs7O0lBSXBCLHlCQUFtQjs7Ozs7SUFJbkIsd0JBQWlFOzs7OztBQUduRSxzQ0FnQkM7OztJQWZDLGdDQUFXOztJQUNYLG1DQUlNOztJQUNOLGtDQUlNOztJQUNOLG1DQUF5Qzs7SUFDekMsMENBQXlCOztJQUN6Qix3Q0FBd0Q7O0lBQ3hELDJDQUEwQjs7Ozs7QUFHNUIsbUNBS0M7Ozs7OztJQUhDLDhCQUFnQjs7Ozs7SUFFaEIsOEJBQWdCOzs7OztBQUdsQiwyQkFVQzs7Ozs7OztJQUxDLHVCQUF5Qjs7Ozs7SUFJekIsd0JBQXNEOzs7OztBQUd4RCw0QkFnRUM7Ozs7Ozs7O0lBMURDLHVCQUFnQjs7Ozs7SUFJaEIsNkJBQXNCOzs7OztJQUl0QiwwQkFBcUM7Ozs7O0lBSXJDLHNCQUE2Qjs7Ozs7SUFJN0IsMkJBQXdDOzs7OztJQUl4QyxzQkFBZTs7Ozs7SUFJZiwwQkFBbUI7Ozs7O0lBSW5CLDJCQUFxQjs7Ozs7SUFJckIsaUNBQTBCOzs7OztJQUkxQiw0QkFBNkQ7Ozs7O0lBSTdELHdCQUFpQjs7Ozs7Ozs7OztJQVNqQix1QkFBeUI7Ozs7O0lBSXpC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TkMsbUNBQWlCOztJQUNqQixxQ0FBaUI7O0lBQ2pCLG1DQUFnQjs7SUFDaEIsb0NBQWlCOztJQUNqQixvQ0FBaUI7O0lBQ2pCLDBDQUF3Qjs7Ozs7QUFHMUIsaUNBcUJDOzs7Ozs7SUFqQkMsK0JBQW1COzs7OztJQUluQiw2QkFBdUQ7Ozs7O0lBSXZELCtCQUFrQjs7Ozs7SUFJbEIsK0JBQWtCOzs7OztJQUlsQiw4QkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwSGVhZGVycywgSHR0cFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEVsZW1lbnRSZWYsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBQ0xDYW5UeXBlIH0gZnJvbSAnQGRlbG9uL2FjbCc7XG5pbXBvcnQgeyBEcmF3ZXJIZWxwZXJPcHRpb25zLCBNb2RhbEhlbHBlck9wdGlvbnMsIFlOTW9kZSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5pbXBvcnQgeyBOekRyYXdlck9wdGlvbnMgfSBmcm9tICduZy16b3Jyby1hbnRkL2RyYXdlcic7XG5pbXBvcnQgeyBNb2RhbE9wdGlvbnMgfSBmcm9tICduZy16b3Jyby1hbnRkL21vZGFsJztcbmltcG9ydCB7IFBhZ2luYXRpb25JdGVtUmVuZGVyQ29udGV4dCB9IGZyb20gJ25nLXpvcnJvLWFudGQvcGFnaW5hdGlvbic7XG5pbXBvcnQgeyBOelRhYmxlUGFnaW5hdGlvblR5cGUgfSBmcm9tICduZy16b3Jyby1hbnRkL3RhYmxlJztcbmltcG9ydCB7IFNUQ29tcG9uZW50IH0gZnJvbSAnLi9zdC5jb21wb25lbnQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNUV2lkdGhNb2RlIHtcbiAgLyoqXG4gICAqIOWuveW6puexu+Wei1xuICAgKiAtIGBkZWZhdWx0YCDpu5jorqTooYzkuLpcbiAgICogLSBgc3RyaWN0YCDkuKXmoLzmqKHlvI/vvIzljbPlvLrliLbmjIkgYHdpZHRoYCDmjIflrprnmoTlrr3luqblkYjnjrDvvIzlubbmoLnmja4gYHN0cmljdEJlaGF2aW9yYCDnsbvlnovlpITnkIZcbiAgICovXG4gIHR5cGU/OiAnc3RyaWN0JyB8ICdkZWZhdWx0JztcbiAgLyoqXG4gICAqIOS4peagvOaooeW8j+eahOWkhOeQhuihjOS4ulxuICAgKiAtIGB3cmFwYCDlvLrliLbmjaLooYxcbiAgICogLSBgdHJ1bmNhdGVgIOaIquefrVxuICAgKi9cbiAgc3RyaWN0QmVoYXZpb3I/OiAnd3JhcCcgfCAndHJ1bmNhdGUnO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNUUmVzZXRDb2x1bW5zT3B0aW9uIHtcbiAgcGk/OiBudW1iZXI7XG4gIHBzPzogbnVtYmVyO1xuICBjb2x1bW5zPzogU1RDb2x1bW5bXTtcbiAgLyoqXG4gICAqIFdoZXRoZXIgdG8gcHJlLWNsZWFyIGRhdGEsIERlZmF1bHQ6IGBmYWxzZWBcbiAgICovXG4gIHByZUNsZWFyRGF0YT86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBXaGV0aGVyIHRvIHRyaWdnZXIgYSBkYXRhIGxvYWQsIERlZmF1bHQ6IGB0cnVlYFxuICAgKi9cbiAgZW1pdFJlbG9hZD86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1RSZXEge1xuICAvKipcbiAgICog5YiG6aG157G75Z6L77yM6buY6K6k77yaYHBhZ2VgXG4gICAqIC0gYHBhZ2VgIOS9v+eUqCBgcGlg77yMYHBzYCDnu4TlkIhcbiAgICogLSBgc2tpcGAg5L2/55SoIGBza2lwYO+8jGBsaW1pdGAg57uE5ZCIXG4gICAqL1xuICB0eXBlPzogJ3BhZ2UnIHwgJ3NraXAnO1xuICAvKipcbiAgICog6aKd5aSW6K+35rGC5Y+C5pWw77yM6buY6K6k6Ieq5Yqo6ZmE5YqgIGBwaWDjgIFgcHNgIOiHs1VSTFxuICAgKiAtIGB7IHN0YXR1czogJ25ldycgfWAgPT4gYHVybD9waT0xJnBzPTEwJnN0YXR1cz1uZXdgXG4gICAqL1xuICBwYXJhbXM/OiBhbnk7XG4gIC8qKiDor7fmsYLmlrnms5XvvIzpu5jorqTvvJpgR0VUYCAqL1xuICBtZXRob2Q/OiBzdHJpbmc7XG4gIC8qKiDor7fmsYLkvZMgYGJvZHlgICovXG4gIGJvZHk/OiBhbnk7XG4gIC8qKiDor7fmsYLkvZMgYEhlYWRlcmAgKi9cbiAgaGVhZGVycz86IGFueTtcbiAgLyoqXG4gICAqIOmHjeWRveWQjeWPguaVsCBgcGlg44CBYHBzYO+8jOm7mOiupO+8mmB7IHBpOiAncGknLCBwczogJ3BzJyB9YFxuICAgKiAtIGB7IHBpOiAnUGFnZScgfWAgPT4gYHBpYCDkvJrooqvmm7/mjaLmiJAgUGFnZVxuICAgKi9cbiAgcmVOYW1lPzogU1RSZXFSZU5hbWVUeXBlO1xuICAvKipcbiAgICog5piv5ZCm5bCG6K+35rGC5omA5pyJ5Y+C5pWw5pWw5o2u6YO95pS+5YWlIGBib2R5YCDlvZPkuK3vvIhgdXJsYCDlnLDlnYDmnKzouqvlj4LmlbDpmaTlpJbvvInvvIzku4XlvZMgYG1ldGhvZDogJ1BPU1QnYCDml7bmnInmlYjvvIzpu5jorqTvvJpgZmFsc2VgXG4gICAqL1xuICBhbGxJbkJvZHk/OiBib29sZWFuO1xuICAvKipcbiAgICog5piv5ZCm5bu26L+f5Yqg6L295pWw5o2u77yM5Y2z5riy5p+T57uT5p2f5ZCO5LiN5Lya5Li75Yqo5Y+R6LW36K+35rGC77yM6buY6K6k77yaYGZhbHNlYFxuICAgKi9cbiAgbGF6eUxvYWQ/OiBib29sZWFuO1xuICAvKipcbiAgICog6K+35rGC5YmN5pWw5o2u5aSE55CGXG4gICAqL1xuICBwcm9jZXNzPzogKHJlcXVlc3RPcHRpb25zOiBTVFJlcXVlc3RPcHRpb25zKSA9PiBTVFJlcXVlc3RPcHRpb25zO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNUUmVxdWVzdE9wdGlvbnMge1xuICBib2R5PzogYW55O1xuICBoZWFkZXJzPzpcbiAgICB8IEh0dHBIZWFkZXJzXG4gICAgfCB7XG4gICAgICAgIFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xuICAgICAgfTtcbiAgcGFyYW1zPzpcbiAgICB8IEh0dHBQYXJhbXNcbiAgICB8IHtcbiAgICAgICAgW3BhcmFtOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcbiAgICAgIH07XG4gIG9ic2VydmU/OiAnYm9keScgfCAnZXZlbnRzJyB8ICdyZXNwb25zZSc7XG4gIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcbiAgcmVzcG9uc2VUeXBlPzogJ2FycmF5YnVmZmVyJyB8ICdibG9iJyB8ICdqc29uJyB8ICd0ZXh0JztcbiAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTVExvYWRPcHRpb25zIHtcbiAgLyoqIOaYr+WQpuWQiOW5tu+8jOm7mOiupO+8mmBmYWxzZWAgKi9cbiAgbWVyZ2U/OiBib29sZWFuO1xuICAvKiog5piv5ZCm6Lez6L2s6Iez6aG26YOo77yM6Iul5LiN5oyH5a6a55SxIGBwYWdlLnRvVG9wYCDmnaXlhrPlrpogKi9cbiAgdG9Ub3A/OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNUUmVzIHtcbiAgLyoqXG4gICAqIOmHjeWRveWQjei/lOWbnuWPguaVsCBgdG90YWxg44CBYGxpc3RgXG4gICAqIC0gYHsgdG90YWw6ICdUb3RhbCcgfWAgPT4gVG90YWwg5Lya6KKr5b2T5L2cIGB0b3RhbGBcbiAgICovXG4gIHJlTmFtZT86IFNUUmVzUmVOYW1lVHlwZTtcbiAgLyoqXG4gICAqIOaVsOaNrumihOWkhOeQhlxuICAgKi9cbiAgcHJvY2Vzcz86IChkYXRhOiBTVERhdGFbXSwgcmF3RGF0YT86IGFueSkgPT4gU1REYXRhW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1RQYWdlIHtcbiAgLyoqXG4gICAqIOWJjeerr+WIhumhte+8jOW9kyBgZGF0YWAg5Li6YGFueVtdYCDmiJYgYE9ic2VydmFibGU8YW55W10+YCDmnInmlYjvvIzpu5jorqTvvJpgdHJ1ZWBcbiAgICogLSBgdHJ1ZWAg55SxIGBzdGAg5qC55o2uIGBkYXRhYCDplb/luqblj5fmjqfliIbpobXvvIzljIXmi6zvvJrmjpLluo/jgIHov4fmu6TnrYlcbiAgICogLSBgZmFsc2VgIOeUseeUqOaIt+mAmui/hyBgdG90YWxgIOWSjCBgZGF0YWAg5Y+C5pWw5Y+X5o6n5YiG6aG177yM5bm257u05oqkIGAoY2hhbmdlKWAg5b2T5YiG6aG15Y+Y5pu05pe26YeN5paw5Yqg6L295pWw5o2uXG4gICAqL1xuICBmcm9udD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDlkI7nq6/liIbpobXmmK/lkKbph4fnlKhgMGDln7rntKLlvJXvvIzlj6rlnKhgZGF0YWDnsbvlnovkuLpgc3RyaW5nYOaXtuacieaViO+8jOm7mOiupO+8mmBmYWxzZWBcbiAgICovXG4gIHplcm9JbmRleGVkPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIOaMh+WumuWIhumhteaYvuekuueahOS9jee9ru+8jOm7mOiupO+8mmBib3R0b21gXG4gICAqL1xuICBwb3NpdGlvbj86ICd0b3AnIHwgJ2JvdHRvbScgfCAnYm90aCc7XG4gIC8qKlxuICAgKiDmjIflrprliIbpobXmmL7npLrnmoTlsLrlr7jvvIzpu5jorqTvvJpgZGVmYXVsdGBcbiAgICovXG4gIHR5cGU/OiBOelRhYmxlUGFnaW5hdGlvblR5cGU7XG4gIC8qKlxuICAgKiDmjIflrprliIbpobXliIbpobXmlrnlkJHvvIzpu5jorqTvvJpgcmlnaHRgXG4gICAqL1xuICBwbGFjZW1lbnQ/OiAnbGVmdCcgfCAnY2VudGVyJyB8ICdyaWdodCc7XG4gIC8qKlxuICAgKiDmmK/lkKbmmL7npLrliIbpobXlmajvvIzpu5jorqTvvJpgdHJ1ZWBcbiAgICovXG4gIHNob3c/OiBib29sZWFuO1xuICAvKipcbiAgICog5piv5ZCm5pi+56S65YiG6aG15Zmo5Lit5pS55Y+Y6aG15pWw77yM6buY6K6k77yaYGZhbHNlYFxuICAgKi9cbiAgc2hvd1NpemU/OiBib29sZWFuO1xuICAvKipcbiAgICog5YiG6aG15Zmo5Lit5q+P6aG15pi+56S65p2h55uu5pWw5LiL5ouJ5qGG5YC877yM6buY6K6k77yaYFsxMCwgMjAsIDMwLCA0MCwgNTBdYFxuICAgKi9cbiAgcGFnZVNpemVzPzogbnVtYmVyW107XG4gIC8qKlxuICAgKiDmmK/lkKbmmL7npLrliIbpobXlmajkuK3lv6vpgJ/ot7PovazvvIzpu5jorqTvvJpgZmFsc2VgXG4gICAqL1xuICBzaG93UXVpY2tKdW1wZXI/OiBib29sZWFuO1xuICAvKipcbiAgICog55So5LqO6Ieq5a6a5LmJ6aG156CB55qE57uT5p6E77yM55So5rOV5Y+C54WnIFBhZ2luYXRpb24g57uE5Lu2XG4gICAqL1xuICBpdGVtUmVuZGVyPzogVGVtcGxhdGVSZWY8UGFnaW5hdGlvbkl0ZW1SZW5kZXJDb250ZXh0PiB8IG51bGw7XG4gIC8qKlxuICAgKiDlvZPmt7vliqDor6XlsZ7mgKfml7bvvIzmmL7npLrkuLrnroDljZXliIbpobXvvIzpu5jorqTvvJpgZmFsc2VgXG4gICAqL1xuICBzaW1wbGU/OiBib29sZWFuO1xuICAvKipcbiAgICog5piv5ZCm5pi+56S65oC75pWw5o2u6YePXG4gICAqIC0gYGJvb2xlYW5gIOexu+Wei+aYvuekuuS4juWQpu+8jOm7mOiupOaooeadv++8mmDlhbEge3t0b3RhbH19IOadoWBcbiAgICogLSBgc3RyaW5nYCDoh6rlrprkuYnmqKHmnb/vvIzmqKHmnb/lj5jph4/vvJpcbiAgICogIC0gYHt7dG90YWx9fWAg6KGo56S65pWw5o2u5oC76YePXG4gICAqICAtIGB7e3JhbmdlWzBdfX1gIOihqOekuuW9k+WJjemhteW8gOWni+aVsOmHj+WAvFxuICAgKiAgLSBge3tyYW5nZVsxXX19YCDooajnpLrlvZPliY3pobXnu5PmnZ/mlbDph4/lgLxcbiAgICovXG4gIHRvdGFsPzogc3RyaW5nIHwgYm9vbGVhbjtcbiAgLyoqXG4gICAqIOWIh+aNouWIhumhteaXtui/lOWbnumhtumDqO+8jOm7mOiupO+8mmB0cnVlYFxuICAgKi9cbiAgdG9Ub3A/OiBib29sZWFuO1xuICAvKipcbiAgICog6L+U5Zue6aG26YOo5YGP56e75YC877yM6buY6K6k77yaYDEwMGBcbiAgICovXG4gIHRvVG9wT2Zmc2V0PzogbnVtYmVyO1xufVxuXG4vKipcbiAqIOaVsOaNrua6kFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFNURGF0YSB7XG4gIC8qKlxuICAgKiDpgInmi6nmoYbmiJbljZXpgInmoYbnirbmgIHlgLxcbiAgICovXG4gIGNoZWNrZWQ/OiBib29sZWFuO1xuICAvKipcbiAgICog6YCJ5oup5qGG5oiW5Y2V6YCJ5qGGIGBkaXNhYmxlZGAg5YC8XG4gICAqL1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDmmK/lkKblsZXlvIDnirbmgIFcbiAgICovXG4gIGV4cGFuZD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDmmK/lkKbmmL7npLrlsZXlvIDmjInpkq5cbiAgICovXG4gIHNob3dFeHBhbmQ/OiBib29sZWFuO1xuXG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTVENvbHVtbkV2ZW50T3B0aW9ucyB7XG4gIHJlY29yZDogU1REYXRhO1xuICBjb2x1bW46IFNUQ29sdW1uO1xuICBpbmRleDogbnVtYmVyO1xuICBpbnN0YW5jZTogU1RDb21wb25lbnQ7XG4gIGV2ZW50PzogRXZlbnQ7XG59XG5cbi8qKlxuICog5YiX5o+P6L+wXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU1RDb2x1bW4ge1xuICAvKipcbiAgICog55So5LqO5a6a5LmJ5pWw5o2u5rqQ5Li76ZSu77yM5L6L5aaC77yaYHN0YXRpc3RpY2FsYFxuICAgKi9cbiAga2V5Pzogc3RyaW5nO1xuICAvKipcbiAgICog5YiX5qCH6aKYXG4gICAqL1xuICB0aXRsZT86IHN0cmluZyB8IFNUQ29sdW1uVGl0bGU7XG4gIC8qKlxuICAgKiDliJfmlbDmja7lnKjmlbDmja7pobnkuK3lr7nlupTnmoQga2V577yM5pSv5oyBIGBhLmIuY2Ag55qE5bWM5aWX5YaZ5rOV77yM5L6L5aaC77yaXG4gICAqIC0gYGlkYFxuICAgKiAtIGBwcmljZS5tYXJrZXRgXG4gICAqIC0gYFsgJ3ByaWNlJywgJ21hcmtldCcgXWBcbiAgICovXG4gIGluZGV4Pzogc3RyaW5nIHwgc3RyaW5nW10gfCBudWxsO1xuICAvKipcbiAgICog57G75Z6LXG4gICAqIC0gYG5vYCDooYzlj7fvvIzorqHnrpfop4TliJnvvJpgaW5kZXggKyBub0luZGV4YFxuICAgKiAtIGBjaGVja2JveGAg5aSa6YCJXG4gICAqIC0gYHJhZGlvYCDljZXpgIlcbiAgICogLSBgbGlua2Ag6ZO+5o6l77yM5Yqh5b+F5oyH5a6aIGBldmVudGBcbiAgICogLSBgYmFkZ2VgIFvlvr3moIddKGh0dHBzOi8vbmcuYW50LmRlc2lnbi9jb21wb25lbnRzL2JhZGdlL3poKe+8jOWKoeW/heaMh+WumiBgYmFkZ2VgIOWPguaVsOmFjee9ruW+veagh+WvueW6lOWAvFxuICAgKiAtIGB0YWdgIFvmoIfnrb5dKGh0dHBzOi8vbmcuYW50LmRlc2lnbi9jb21wb25lbnRzL3RhZy96aCnvvIzliqHlv4XmjIflrpogYHRhZ2Ag5Y+C5pWw6YWN572u5qCH562+5a+55bqU5YC8XG4gICAqIC0gYGVudW1gIOaemuS4vui9rOaNou+8jOWKoeW/heaMh+WumiBgZW51bWAg5Y+C5pWw6YWN572u5qCH562+5a+55bqU5YC8XG4gICAqIC0gYGltZ2Ag5Zu+54mH5LiU5bGF5LitKOiLpSBgY2xhc3NOYW1lYCDlrZjlnKjliJnkvJjlhYgpXG4gICAqIC0gYG51bWJlcmAg5pWw5a2X5LiU5bGF5Y+zKOiLpSBgY2xhc3NOYW1lYCDlrZjlnKjliJnkvJjlhYgpXG4gICAqIC0gYGN1cnJlbmN5YCDotKfluIHkuJTlsYXlj7Mo6IulIGBjbGFzc05hbWVgIOWtmOWcqOWImeS8mOWFiClcbiAgICogLSBgZGF0ZWAg5pel5pyf5qC85byP5LiU5bGF5LitKOiLpSBgY2xhc3NOYW1lYCDlrZjlnKjliJnkvJjlhYgp77yM5L2/55SoIGBkYXRlRm9ybWF0YCDoh6rlrprkuYnmoLzlvI9cbiAgICogLSBgeW5gIOWwhmBib29sZWFuYOexu+Wei+W+veeroOWMliBbZG9jdW1lbnRdKGh0dHBzOi8vbmctYWxhaW4uY29tL2RvY3MvZGF0YS1yZW5kZXIjeW4pXG4gICAqIC0gYHdpZGdldGAg5L2/55So6Ieq5a6a5LmJ5bCP6YOo5Lu25Yqo5oCB5Yib5bu6XG4gICAqL1xuICB0eXBlPzogJycgfCAnY2hlY2tib3gnIHwgJ2xpbmsnIHwgJ2JhZGdlJyB8ICd0YWcnIHwgJ2VudW0nIHwgJ3JhZGlvJyB8ICdpbWcnIHwgJ2N1cnJlbmN5JyB8ICdudW1iZXInIHwgJ2RhdGUnIHwgJ3luJyB8ICdubycgfCAnd2lkZ2V0JztcbiAgLyoqXG4gICAqIOmTvuaOpeWbnuiwg++8jOiLpei/lOWbnuS4gOS4quWtl+espuS4suihqOekuuWvvOiIqlVSTOS8muiHquWKqOinpuWPkSBgcm91dGVyLm5hdmlnYXRlQnlVcmxgXG4gICAqIEBkZXByZWNhdGVkIFdpbGwgYmUgcmVtb3ZlZCBpbiAxMy4wLjAsIFBscyB1c2VkIGBldmVudGAgaW5zdGVhZFxuICAgKi9cbiAgY2xpY2s/OiAocmVjb3JkOiBTVERhdGEsIGluc3RhbmNlPzogU1RDb21wb25lbnQpID0+IGFueTtcbiAgLyoqXG4gICAqIOS6i+S7tuWbnuiwg++8iOS+i+Wmgu+8mmB0eXBlOiAnbGluaydgIOaXtuacieaViO+8ie+8jOiLpeWHveaVsOi/lOWbnuWAvOS4uuWtl+espuS4suihqOekuuWvvOiIqlVSTOS8muiHquWKqOinpuWPkSBgcm91dGVyLm5hdmlnYXRlQnlVcmxgXG4gICAqL1xuICBldmVudD86IChvcHRpb25zOiBTVENvbHVtbkV2ZW50T3B0aW9ucykgPT4gYW55O1xuICAvKipcbiAgICog5oyJ6ZKu57uEXG4gICAqL1xuICBidXR0b25zPzogU1RDb2x1bW5CdXR0b25bXTtcbiAgLyoqXG4gICAqIOiHquWumuS5iea4suafk0lEXG4gICAqIEBleGFtcGxlXG4gICAqIDxuZy10ZW1wbGF0ZSBzdC1yb3c9XCJjdXN0b21cIiBsZXQtaXRlbSBsZXQtaW5kZXg9XCJpbmRleFwiIGxldC1jb2x1bW49XCJjb2x1bW5cIj5cbiAgICogIHt7IGMudGl0bGUgfX1cbiAgICogPC9uZy10ZW1wbGF0ZT5cbiAgICovXG4gIHJlbmRlcj86IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+IHwgVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IFNURGF0YTsgaW5kZXg6IG51bWJlciB9PjtcbiAgLyoqXG4gICAqIOagh+mimOiHquWumuS5iea4suafk0lEXG4gICAqIEBleGFtcGxlXG4gICAqIDxuZy10ZW1wbGF0ZSBzdC1yb3c9XCJjdXN0b21cIiB0eXBlPVwidGl0bGVcIiBsZXQtYz5cbiAgICogIHt7IGl0ZW0gfCBqc29uIH19XG4gICAqIDwvbmctdGVtcGxhdGU+XG4gICAqL1xuICByZW5kZXJUaXRsZT86IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+IHwgVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IFNUQ29sdW1uOyBpbmRleDogbnVtYmVyIH0+O1xuICAvKipcbiAgICog5YiX5a6977yI5pWw5a2X5Z6L6KGo56S6IGBweGAg5YC877yJ77yM5L6L5aaC77yaYDEwMGDjgIFgMTAlYOOAgWAxMDBweGBcbiAgICpcbiAgICogKirms6jmhI/vvJoqKiDoi6Xlm7rlrprliJflv4XpobvmmK/mlbDlrZdcbiAgICovXG4gIHdpZHRoPzogc3RyaW5nIHwgbnVtYmVyO1xuICAvKipcbiAgICog5o6S5bqP6YWN572u6aG577yM6L+c56iL5pWw5o2u6YWN572uKirkvJjlhYgqKuinhOWIme+8mlxuICAgKiAtIGB0cnVlYCDooajnpLrlhYHorrjmjpLluo/vvIzkuJToi6XmlbDmja7mupDkuLrmnKzlnLDml7boh6rliqjnlJ/miJAgYGNvbXBhcmU6IChhLCBiKSA9PiBhW2luZGV4XSAtIGJbaW5kZXhdYCDmlrnms5VcbiAgICogLSBgc3RyaW5nYCDooajnpLrov5znqIvmlbDmja7mjpLluo/nm7jlr7nlupQgYGtleWAg5YC8XG4gICAqL1xuICBzb3J0PzogdHJ1ZSB8IHN0cmluZyB8IFNUQ29sdW1uU29ydDtcbiAgLyoqXG4gICAqIOi/h+a7pOmFjee9rumhuVxuICAgKi9cbiAgZmlsdGVyPzogU1RDb2x1bW5GaWx0ZXI7XG4gIC8qKlxuICAgKiDmoLzlvI/ljJbliJflgLxcbiAgICovXG4gIGZvcm1hdD86IChpdGVtOiBTVERhdGEsIGNvbDogU1RDb2x1bW4sIGluZGV4OiBudW1iZXIpID0+IHN0cmluZztcbiAgLyoqXG4gICAqIOiHquWumuS5ieWFqC/lj43pgInpgInmi6npoblcbiAgICovXG4gIHNlbGVjdGlvbnM/OiBTVENvbHVtblNlbGVjdGlvbltdO1xuICAvKipcbiAgICog5YiXIGBjbGFzc2Ag5bGe5oCn5YC877yI5rOo77ya5peg6aG7IGAuYCDngrnvvInlpJrkuKrnlKjnqbrmoLzpmpTlvIDvvIzkvovlpoLvvJpcbiAgICogLSBgdGV4dC1jZW50ZXJgIOWxheS4rVxuICAgKiAtIGB0ZXh0LXJpZ2h0YCDlsYXlj7NcbiAgICogLSBgdGV4dC1zdWNjZXNzYCDmiJDlip/oibJcbiAgICogLSBgdGV4dC1lcnJvcmAg5byC5bi46ImyXG4gICAqL1xuICBjbGFzc05hbWU/OiBzdHJpbmcgfCBzdHJpbmdbXSB8IFNldDxzdHJpbmc+IHwgeyBba2xhc3M6IHN0cmluZ106IGFueSB9O1xuICAvKipcbiAgICog5ZCI5bm25YiXXG4gICAqL1xuICBjb2xTcGFuPzogbnVtYmVyO1xuICAvKipcbiAgICog5pWw5a2X5qC85byP77yMYHR5cGU9bnVtYmVyYCDmnInmlYhcbiAgICovXG4gIG51bWJlckRpZ2l0cz86IHN0cmluZztcbiAgLyoqXG4gICAqIOaXpeacn+agvOW8j++8jGB0eXBlPWRhdGVgIOacieaViO+8jO+8iOm7mOiupO+8mmB5eXl5LU1NLWRkIEhIOm1tYO+8iVxuICAgKi9cbiAgZGF0ZUZvcm1hdD86IHN0cmluZztcbiAgLyoqXG4gICAqIOW9kyBgdHlwZT15bmAg5pyJ5pWIXG4gICAqL1xuICB5bj86IFNUQ29sdW1uWW47XG4gIC8qKlxuICAgKiDmmK/lkKblhYHorrjlr7zlh7rvvIzpu5jorqQgYHRydWVgXG4gICAqL1xuICBleHBvcnRlZD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDmnYPpmZDvvIznrYnlkIwgW0FDTENhblR5cGVdKGh0dHBzOi8vbmctYWxhaW4uY29tL2FjbC9nZXR0aW5nLXN0YXJ0ZWQvI0FDTENhblR5cGUpIOWPguaVsOWAvFxuICAgKi9cbiAgYWNsPzogQUNMQ2FuVHlwZTtcbiAgLyoqIOW9k+S4jeWtmOWcqOaVsOaNruaXtuS7pem7mOiupOWAvOabv+S7oyAqL1xuICBkZWZhdWx0Pzogc3RyaW5nO1xuICAvKipcbiAgICog5Zu65a6a5YmN5ZCO5YiX77yM5b2T5oyH5a6a5pe25Yqh5b+F5oyH5a6aIGB3aWR0aGAg5ZCm5YiZ6KeG5Li65peg5pWI77yM5pyJ6Iul5bmyICoq5rOo5oSP77yaKiog6aG577yaXG4gICAqXG4gICAqIC0g6Iul5YiX5aS05LiO5YaF5a655LiN5a+56b2Q5oiW5Ye6546w5YiX6YeN5aSN77yM6K+35oyH5a6a5YiX55qE5a695bqmIGB3aWR0aGBcbiAgICogLSDlu7rorq7mjIflrpogYHNjcm9sbC54YCDkuLrlpKfkuo7ooajmoLzlrr3luqbnmoTlm7rlrprlgLzmiJbnmb7liIbmr5TjgILms6jmhI/vvIzkuJTpnZ7lm7rlrprliJflrr3luqbkuYvlkozkuI3opoHotoXov4cgYHNjcm9sbC54YFxuICAgKi9cbiAgZml4ZWQ/OiAnbGVmdCcgfCAncmlnaHQnO1xuICAvKipcbiAgICog5b695qCH6YWN572u6aG5XG4gICAqL1xuICBiYWRnZT86IFNUQ29sdW1uQmFkZ2UgfCBudWxsO1xuICAvKipcbiAgICog5qCH562+6YWN572u6aG5XG4gICAqL1xuICB0YWc/OiBTVENvbHVtblRhZyB8IG51bGw7XG4gIC8qKlxuICAgKiDooYzlj7fntKLlvJXvvIzpu5jorqTvvJpgMWBcbiAgICogLSDorqHnrpfop4TliJnkuLrvvJpgaW5kZXggKyBub0luZGV4YFxuICAgKiAtIOaUr+aMgeiHquWumuS5ieaWueazlVxuICAgKi9cbiAgbm9JbmRleD86IG51bWJlciB8ICgoaXRlbTogU1REYXRhLCBjb2w6IFNUQ29sdW1uLCBpZHg6IG51bWJlcikgPT4gbnVtYmVyKTtcbiAgLyoqXG4gICAqIOadoeS7tuihqOi+vuW8j1xuICAgKiAtIOS7hei1i+WAvCBgY29sdW1uc2Ag5pe25omn6KGM5LiA5qyhXG4gICAqIC0g5Y+v6LCD55SoIGByZXNldENvbHVtbnMoKWAg5YaN5LiA5qyh6Kem5Y+RXG4gICAqL1xuICBpaWY/OiAoaXRlbTogU1RDb2x1bW4pID0+IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIOe7n+iuoeWIl+aVsOaNrlxuICAgKiAtIOiLpeS9v+eUqOiHquWumuS5iee7n+iuoeWHveaVsOWPr+aXoOmhu+aMh+WumiBgaW5kZXhgXG4gICAqIC0g5Y+v5Lul5qC55o2uIGBrZXlgIOadpeWumuS5ieeUn+aIkOWQjumcgOimgeeahOmUruWQje+8jOWmguaenOacquaMh+WumiBga2V5YCDliJnkvb/nlKggYGluZGV4YCDmnaXooajnpLrplK7lkI1cbiAgICogLSDlvZPml6Dms5Xmib7liLDmnInmlYjplK7lkI3ml7bvvIzkvb/nlKjkuIvmoIfvvIjku44gYDBgIOW8gOWni++8ieadpeS7o+abv1xuICAgKi9cbiAgc3RhdGlzdGljYWw/OiBTVFN0YXRpc3RpY2FsVHlwZSB8IFNUU3RhdGlzdGljYWw7XG5cbiAgd2lkZ2V0PzogU1RXaWRnZXRDb2x1bW47XG5cbiAgZW51bT86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nOyBba2V5OiBudW1iZXJdOiBzdHJpbmcgfTtcblxuICAvKipcbiAgICog5YiG57uE6KGo5aS0XG4gICAqL1xuICBjaGlsZHJlbj86IFNUQ29sdW1uW107XG5cbiAgcm93U3Bhbj86IG51bWJlcjtcblxuICAvKipcbiAgICog6LCD5pW06KGo5aS06YWN572uXG4gICAqIC0g5rOo5oSP77yaKirkuI3opoHlv5jorrAqKuWcqCBgc3JjL3N0eWxlc2Ag5LiL5aKe5YqgIGBuei1yZXNpemFibGVgIExlc3Mg5qC35byP5paH5Lu277yaYEBpbXBvcnQgJ35uZy16b3Jyby1hbnRkL3Jlc2l6YWJsZS9zdHlsZS9lbnRyeS5sZXNzJztgXG4gICAqIC0gKirkuI3mlK/mjIHlpJrooajlpLQqKlxuICAgKi9cbiAgcmVzaXphYmxlPzogU1RSZXNpemFibGUgfCBib29sZWFuO1xuXG4gIC8vIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTVFdpZGdldENvbHVtbiB7XG4gIHR5cGU6IHN0cmluZztcblxuICBwYXJhbXM/OiAob3B0aW9uczogeyByZWNvcmQ6IFNURGF0YTsgY29sdW1uOiBTVENvbHVtbiB9KSA9PiB7fTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTVENvbHVtblRpdGxlIHtcbiAgW2tleTogc3RyaW5nXTogYW55O1xuXG4gIC8qKlxuICAgKiBUZXh0IG9mIGhlYWRlciwgY2FuIGJlIGNob29zZSBvbmUgb2YgYHRleHRgIG9yIGBpMThuYFxuICAgKi9cbiAgdGV4dD86IHN0cmluZztcblxuICAvKipcbiAgICogSTE4biBrZXkgb2YgaGVhZGVyLCBjYW4gYmUgY2hvb3NlIG9uZSBvZiBgdGV4dGAgb3IgYGkxOG5gXG4gICAqL1xuICBpMThuPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBPcHRpb25hbCBpbmZvcm1hdGlvbiBvZiBoZWFkZXJcbiAgICovXG4gIG9wdGlvbmFsPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBPcHRpb25hbCBoZWxwIG9mIGhlYWRlclxuICAgKi9cbiAgb3B0aW9uYWxIZWxwPzogc3RyaW5nO1xufVxuXG5leHBvcnQgdHlwZSBTVFN0YXRpc3RpY2FsVHlwZSA9ICdjb3VudCcgfCAnZGlzdGluY3RDb3VudCcgfCAnc3VtJyB8ICdhdmVyYWdlJyB8ICdtYXgnIHwgJ21pbic7XG5cbmV4cG9ydCB0eXBlIFNUU3RhdGlzdGljYWxGbiA9ICh2YWx1ZXM6IG51bWJlcltdLCBjb2w6IFNUQ29sdW1uLCBsaXN0OiBTVERhdGFbXSwgcmF3RGF0YT86IGFueSkgPT4gU1RTdGF0aXN0aWNhbFJlc3VsdDtcblxuZXhwb3J0IGludGVyZmFjZSBTVFN0YXRpc3RpY2FsIHtcbiAgdHlwZTogU1RTdGF0aXN0aWNhbFR5cGUgfCBTVFN0YXRpc3RpY2FsRm47XG4gIC8qKlxuICAgKiDkv53nlZnlsI/mlbDkvY3mlbDvvIzpu5jorqTvvJpgMmBcbiAgICovXG4gIGRpZ2l0cz86IG51bWJlcjtcbiAgLyoqXG4gICAqIOaYr+WQpumcgOimgei0p+W4geagvOW8j+WMlu+8jOm7mOiupOS7peS4i+aDheWGteS4uiBgdHJ1ZWBcbiAgICogLSBgdHlwZWAg5Li6IGBTVFN0YXRpc3RpY2FsRm5g44CBIGBzdW1g44CBYGF2ZXJhZ2Vg44CBYG1heGDjgIFgbWluYFxuICAgKi9cbiAgY3VycmVuY3k/OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNUU3RhdGlzdGljYWxSZXN1bHRzIHtcbiAgW2tleTogc3RyaW5nXTogU1RTdGF0aXN0aWNhbFJlc3VsdDtcbiAgW2luZGV4OiBudW1iZXJdOiBTVFN0YXRpc3RpY2FsUmVzdWx0O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNUU3RhdGlzdGljYWxSZXN1bHQge1xuICB2YWx1ZTogbnVtYmVyO1xuICB0ZXh0Pzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNUQ29sdW1uU29ydCB7XG4gIC8qKlxuICAgKiDmjpLluo/nmoTpu5jorqTlj5fmjqflsZ7mgKdcbiAgICovXG4gIGRlZmF1bHQ/OiAnYXNjZW5kJyB8ICdkZXNjZW5kJyB8IG51bGw7XG4gIC8qKlxuICAgKiDmnKzlnLDmlbDmja7nmoTmjpLluo/lh73mlbDvvIzkvb/nlKjkuIDkuKrlh73mlbAo5Y+C6ICDIFtBcnJheS5zb3J0XShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9BcnJheS9zb3J0KSDnmoQgY29tcGFyZUZ1bmN0aW9uKVxuICAgKiAtIGBudWxsYCDlv73nlaXmnKzlnLDmjpLluo/vvIzkvYbkv53mjIHmjpLluo/lip/og71cbiAgICogLSDoi6XmlbDmja7mupDkuLrmnKzlnLDml7boh6rliqjnlJ/miJAgYChhLCBiKSA9PiBhW2luZGV4XSAtIGJbaW5kZXhdYCDmlrnms5VcbiAgICovXG4gIGNvbXBhcmU/OiAoKGE6IFNURGF0YSwgYjogU1REYXRhKSA9PiBudW1iZXIpIHwgbnVsbDtcbiAgLyoqXG4gICAqIOi/nOeoi+aVsOaNrueahOaOkuW6j+aXtuWQjuerr+ebuOWvueW6lOeahEtFWe+8jOm7mOiupOS9v+eUqCBgaW5kZXhgIOWxnuaAp1xuICAgKiAtIOiLpSBgbXVsdGlTb3J0OiBmYWxzZWAg5pe277yaYGtleTogJ25hbWUnID0+ID9uYW1lPTEmcGk9MWBcbiAgICogLSDoi6UgYG11bHRpU29ydDogdHJ1ZWAg5YWB6K645aSa5Liq5o6S5bqPIGtleSDlrZjlnKjvvIzmiJbkvb/nlKggYFNUTXVsdGlTb3J0YCDmjIflrprlpJrliJfmjpLluo9rZXnlkIjlubbop4TliJlcbiAgICovXG4gIGtleT86IHN0cmluZyB8IG51bGw7XG4gIC8qKlxuICAgKiDov5znqIvmlbDmja7nmoTmjpLluo/ml7blkI7nq6/nm7jlr7nlupTnmoRWQUxVRVxuICAgKiAtIGB7IGFzY2VuZDogJzAnLCBkZXNjZW5kOiAnMScgfWAg57uT5p6cIGA/bmFtZT0xJnBpPTFgXG4gICAqIC0gYHsgYXNjZW5kOiAnYXNjJywgZGVzY2VuZDogJ2Rlc2MnIH1gIOe7k+aenCBgP25hbWU9ZGVzYyZwaT0xYFxuICAgKi9cbiAgcmVOYW1lPzogeyBhc2NlbmQ/OiBzdHJpbmc7IGRlc2NlbmQ/OiBzdHJpbmcgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTVFNvcnRNYXAgZXh0ZW5kcyBTVENvbHVtblNvcnQge1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG5cbiAgLyoqIOaYr+WQpuWQr+eUqOaOkuW6jyAqL1xuICBlbmFibGVkPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTVENvbHVtbkZpbHRlciB7XG4gIC8qKlxuICAgKiDmkJzntKLmlrnlvI9cbiAgICogLSBgZGVmdWFsdGAg6buY6K6k5b2i5byPXG4gICAqIC0gYGtleXdvcmRgIOaWh+acrOahhuW9ouW8j1xuICAgKi9cbiAgdHlwZT86ICdkZWZhdWx0JyB8ICdrZXl3b3JkJztcbiAgLyoqXG4gICAqIOihqOWktOeahOetm+mAieiPnOWNlemhue+8jOiHs+WwkeS4gOmhueaJjeS8mueUn+aViFxuICAgKiAtIOW9kyBgdHlwZT0na2V5d29yZCdgIOaXtuWPr+S4uuepulxuICAgKi9cbiAgbWVudXM/OiBTVENvbHVtbkZpbHRlck1lbnVbXTtcbiAgLyoqXG4gICAqIOacrOWcsOaVsOaNrueahOetm+mAieWHveaVsFxuICAgKi9cbiAgZm4/OiAoKGZpbHRlcjogU1RDb2x1bW5GaWx0ZXJNZW51LCByZWNvcmQ6IFNURGF0YSkgPT4gYm9vbGVhbikgfCBudWxsO1xuICAvKipcbiAgICog5qCH6K+G5pWw5o2u5piv5ZCm5bey6L+H5ruk77yM562b6YCJ5Zu+5qCH5Lya6auY5LquXG4gICAqL1xuICBkZWZhdWx0PzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIOiHquWumuS5iSBmaWx0ZXIg5Zu+5qCHXG4gICAqIC0g5b2TIGB0eXBlPSdkZWZhdWx0J2Ag6buY6K6kIGBmaWx0ZXJgXG4gICAqIC0g5b2TIGB0eXBlPSdrZXl3b3JkJ2Ag6buY6K6kIGBzZWFyY2hgXG4gICAqL1xuICBpY29uPzogc3RyaW5nIHwgU1RJY29uO1xuICAvKipcbiAgICog56Gu6K6k5oyJ6ZKu5paH5pys77yM6buY6K6kIGDnoa7orqRgXG4gICAqL1xuICBjb25maXJtVGV4dD86IHN0cmluZztcbiAgLyoqXG4gICAqIOa4hemZpOaMiemSruaWh+acrO+8jOm7mOiupCBg6YeN572uYFxuICAgKi9cbiAgY2xlYXJUZXh0Pzogc3RyaW5nO1xuICAvKipcbiAgICog5piv5ZCm5aSa6YCJ77yM6buY6K6kIGB0cnVlYFxuICAgKi9cbiAgbXVsdGlwbGU/OiBib29sZWFuO1xuICAvKipcbiAgICog6L+c56iL5pWw5o2u55qE6L+H5ruk5pe25ZCO56uv55u45a+55bqU55qES0VZ77yM6buY6K6k5L2/55SoIGBpbmRleGAg5bGe5oCnXG4gICAqIGBrZXk6ICduYW1lJ2Ag57uT5p6cIGA/bmFtZT0xJnBpPTFgXG4gICAqL1xuICBrZXk/OiBzdHJpbmcgfCBudWxsO1xuICAvKipcbiAgICog6L+c56iL5pWw5o2u55qE6L+H5ruk5pe25ZCO56uv55u45a+55bqU55qEVkFMVUVcbiAgICogLSDpu5jorqTlvZMgYG11bHRpcGxlOiB0cnVlYCDml7bku6Xoi7HmlofpgJflj7fmi7zmjqXnmoTlrZfnrKbkuLJcbiAgICogQHJldHVybiDov5Tlm57kuLogT2JqZWN0IOWvueixoVxuICAgKi9cbiAgcmVOYW1lPzogKGxpc3Q6IFNUQ29sdW1uRmlsdGVyTWVudVtdLCBjb2w6IFNUQ29sdW1uKSA9PiB7fTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTVENvbHVtbkZpbHRlck1lbnUge1xuICAvKipcbiAgICog5paH5pysXG4gICAqIC0g5b2TIGB0eXBlOiAna2V5d29yZCdgIOaXtuihqOekuiBgcGxhY2Vob2xkZXJgXG4gICAqL1xuICB0ZXh0Pzogc3RyaW5nO1xuICAvKipcbiAgICog5YC8XG4gICAqL1xuICB2YWx1ZT86IGFueTtcbiAgLyoqXG4gICAqIOaYr+WQpumAieS4rVxuICAgKi9cbiAgY2hlY2tlZD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDmnYPpmZDvvIznrYnlkIwgW0FDTENhblR5cGVdKGh0dHBzOi8vbmctYWxhaW4uY29tL2FjbC9nZXR0aW5nLXN0YXJ0ZWQvI0FDTENhblR5cGUpIOWPguaVsOWAvFxuICAgKi9cbiAgYWNsPzogQUNMQ2FuVHlwZTtcblxuICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1RDb2x1bW5TZWxlY3Rpb24ge1xuICAvKipcbiAgICog6YCJ5oup6aG55pi+56S655qE5paH5a2XXG4gICAqL1xuICB0ZXh0OiBzdHJpbmc7XG4gIC8qKlxuICAgKiDpgInmi6npobnngrnlh7vlm57osIPvvIzlhYHorrjlr7nlj4LmlbAgYGRhdGEuY2hlY2tlZGAg6L+b6KGM5pON5L2cXG4gICAqL1xuICBzZWxlY3Q6IChkYXRhOiBTVERhdGFbXSkgPT4gdm9pZDtcbiAgLyoqIOadg+mZkO+8jOetieWQjCBgY2FuKClgIOWPguaVsOWAvCAqL1xuICBhY2w/OiBBQ0xDYW5UeXBlO1xufVxuXG4vKiog5b2TIGB0eXBlPXluYCDmnInmlYggKi9cbmV4cG9ydCBpbnRlcmZhY2UgU1RDb2x1bW5ZbiB7XG4gIC8qKlxuICAgKiDnnJ/lgLzmnaHku7bvvIzvvIjpu5jorqTvvJpgdHJ1ZWDvvIlcbiAgICovXG4gIHRydXRoPzogYW55O1xuICAvKipcbiAgICog5b6956ugIGB0cnVlYCDml7bmlofmnKzvvIzvvIjpu5jorqTvvJpg5pivYO+8iVxuICAgKi9cbiAgeWVzPzogc3RyaW5nO1xuICAvKipcbiAgICog5b6956ugIGBmYWxzZWAg5pe25paH5pys77yM77yI6buY6K6k77yaYOWQpmDvvIlcbiAgICovXG4gIG5vPzogc3RyaW5nO1xuICAvKipcbiAgICog5b6956ug5pi+56S66aOO5qC8XG4gICAqIC0gYGZ1bGxgIOWbvuagh+WSjOaWh+acrFxuICAgKiAtIGBpY29uYCDlm77moIdcbiAgICogLSBgdGV4dGAg5paH5pysXG4gICAqL1xuICBtb2RlPzogWU5Nb2RlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNUSWNvbiB7XG4gIC8qKiDlm77moIfnsbvlnosgKi9cbiAgdHlwZTogc3RyaW5nO1xuICAvKiog5Zu+5qCH5Li76aKY6aOO5qC877yM6buY6K6k77yaYG91dGxpbmVgICovXG4gIHRoZW1lPzogJ291dGxpbmUnIHwgJ3R3b3RvbmUnIHwgJ2ZpbGwnO1xuICAvKiog5piv5ZCm5pyJ5peL6L2s5Yqo55S777yM6buY6K6k77yaYGZhbHNlYCAqL1xuICBzcGluPzogYm9vbGVhbjtcbiAgLyoqIOS7hemAgueUqOWPjOiJsuWbvuagh++8jOiuvue9ruWPjOiJsuWbvuagh+eahOS4u+imgeminOiJsu+8jOS7heWvueW9k+WJjSBpY29uIOeUn+aViCAqL1xuICB0d29Ub25lQ29sb3I/OiBzdHJpbmc7XG4gIC8qKiDmjIflrprmnaXoh6ogSWNvbkZvbnQg55qE5Zu+5qCH57G75Z6LICovXG4gIGljb25mb250Pzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNUQ29sdW1uQnV0dG9uRXZlbnRPcHRpb25zIHtcbiAgcmVjb3JkOiBTVERhdGE7XG4gIGluc3RhbmNlOiBTVENvbXBvbmVudDtcbiAgYnRuOiBTVENvbHVtbkJ1dHRvbjtcbiAgZXZlbnQ/OiBFdmVudDtcbiAgLyoqXG4gICAqIOW9kyBgdHlwZT1tb2RhbGAg5oiWIGB0eXBlPWRyYXdlcmAg55qE6L+U5Zue5YC8XG4gICAqL1xuICBtb2RhbD86IGFueTtcbn1cblxuLyoqXG4gKiDmjInpkq7phY3nva5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTVENvbHVtbkJ1dHRvbiB7XG4gIC8qKlxuICAgKiDmlofmnKxcbiAgICovXG4gIHRleHQ/OiBzdHJpbmcgfCAoKHJlY29yZDogU1REYXRhLCBidG46IFNUQ29sdW1uQnV0dG9uKSA9PiBzdHJpbmcpO1xuICAvKipcbiAgICog5paH5pysIGkxOG5cbiAgICovXG4gIGkxOG4/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiDlm77moIdcbiAgICovXG4gIGljb24/OiBzdHJpbmcgfCBTVEljb247XG4gIC8qKlxuICAgKiDmjInpkq7nsbvlnotcbiAgICogLSBgbm9uZWAg5peg5Lu75L2V5LqS5YqoXG4gICAqIC0gYGRlbGAg5Yig6Zmk77yM6buY6K6k5byA5ZCvIGBwb3A6IHRydWVgXG4gICAqIC0gYG1vZGFsYCDlr7nor53moYbvvIzpnIDopoHmjIflrpogYGNvbXBvbmVudGAg5omN5Lya55Sf5pWIXG4gICAqIC0gYHN0YXRpY2Ag6Z2Z5oCB5a+56K+d5qGG77yM6ZyA6KaB5oyH5a6aIGBjb21wb25lbnRgIOaJjeS8mueUn+aViFxuICAgKiAtIGBkcmF3ZXJgIOaKveWxie+8jOmcgOimgeaMh+WumiBgY29tcG9uZW50YCDmiY3kvJrnlJ/mlYhcbiAgICogLSBgbGlua2Ag6ZO+5o6l77yM5b2TIGBjbGlja2Ag6L+U5Zue5a2X56ym5Liy5pe26Ieq5Yqo6LCD55SoIGBuYXZpZ2F0ZUJ5VXJsYCDlr7zoiKpcbiAgICogLSBgZGl2aWRlcmAg5YiG5Ymy57q/XG4gICAqL1xuICB0eXBlPzogJ25vbmUnIHwgJ2RlbCcgfCAnbW9kYWwnIHwgJ3N0YXRpYycgfCAnZHJhd2VyJyB8ICdsaW5rJyB8ICdkaXZpZGVyJztcbiAgLyoqXG4gICAqIOeCueWHu+Wbnuiwg1xuICAgKiAtIEZ1bmN0aW9uXG4gICAqICAtIGB0eXBlPW1vZGFsYCDlj6rkvJrlnKjlvZPmnInkvKDlm57lgLzml7bmiY3kvJrop6blj5Hlm57osINcbiAgICogLSByZWxvYWTvvJrph43mlrDliLfmlrDlvZPliY3pobVcbiAgICogLSBsb2Fk77ya6YeN5paw5Yqg6L295pWw5o2u77yM5bm26YeN572u6aG156CB5Li677yaYDFgXG4gICAqXG4gICAqIEBkZXByZWNhdGVkIFdpbGwgYmUgcmVtb3ZlZCBpbiAxMy4wLjAsIFBscyB1c2VkIGBldmVudGAgaW5zdGVhZFxuICAgKi9cbiAgY2xpY2s/OiAncmVsb2FkJyB8ICdsb2FkJyB8ICgocmVjb3JkOiBTVERhdGEsIG1vZGFsPzogYW55LCBpbnN0YW5jZT86IFNUQ29tcG9uZW50KSA9PiBhbnkpO1xuICAvKipcbiAgICog5LqL5Lu25Zue6LCD77yM5Lul5LiL5oOF5Ya16YO95Lya6Kem5Y+R5LiA5qyh77yaXG4gICAqICAtIOW9kyBgdHlwZWAg5Li6IGBtb2RhbGDjgIFgc3RhdGljYOOAgWBkcmF3ZXJg44CBYGxpbmtgIOaXtlxuICAgKiAgLSDlvZMgYHBvcGAg5oyH5a6a5YC8IGBuek9uQ29uZmlybWAg55qE56Gu6K6k5LqL5Lu2XG4gICAqXG4gICAqIOaIluebtOaOpei/lOWbniBgcmVsb2FkYCDmiJYgYGxvYWRgIOihqOekuuWIt+aWsOW9k+WJjeihqOagvOaVsOaNruaWueW8j++8mlxuICAgKiAgLSByZWxvYWTvvJrph43mlrDliLfmlrDlvZPliY3pobVcbiAgICogIC0gbG9hZO+8mumHjeaWsOWKoOi9veaVsOaNru+8jOW5tumHjee9rumhteeggeS4uu+8mmAxYFxuICAgKi9cbiAgZXZlbnQ/OiAncmVsb2FkJyB8ICdsb2FkJyB8ICgob3B0aW9uczogU1RDb2x1bW5CdXR0b25FdmVudE9wdGlvbnMpID0+IGFueSk7XG4gIC8qKlxuICAgKiDmsJTms6Hnoa7orqTmoYblj4LmlbDvvIzoi6UgYHN0cmluZ2Ag57G75Z6L6KGo56S65qCH6aKYXG4gICAqL1xuICBwb3A/OiBib29sZWFuIHwgc3RyaW5nIHwgU1RDb2x1bW5CdXR0b25Qb3A7XG4gIC8qKlxuICAgKiDlr7nor53moYblj4LmlbBcbiAgICovXG4gIG1vZGFsPzogU1RDb2x1bW5CdXR0b25Nb2RhbDtcbiAgLyoqXG4gICAqIOaKveWxieWPguaVsFxuICAgKi9cbiAgZHJhd2VyPzogU1RDb2x1bW5CdXR0b25EcmF3ZXI7XG4gIC8qKlxuICAgKiDkuIvmi4noj5zljZXvvIzlvZPlrZjlnKjml7bku6UgYGRyb3Bkb3duYCDlvaLlvI/muLLmn5NcbiAgICogLSDlj6rmlK/mjIHkuIDnuqdcbiAgICovXG4gIGNoaWxkcmVuPzogU1RDb2x1bW5CdXR0b25bXTtcbiAgLyoqXG4gICAqIOadg+mZkO+8jOetieWQjCBbQUNMQ2FuVHlwZV0oaHR0cHM6Ly9uZy1hbGFpbi5jb20vYWNsL2dldHRpbmctc3RhcnRlZC8jQUNMQ2FuVHlwZSkg5Y+C5pWw5YC8XG4gICAqL1xuICBhY2w/OiBBQ0xDYW5UeXBlO1xuICAvKipcbiAgICogQ29uZGl0aW9uYWwgZXhwcmVzc2lvblxuICAgKlxuICAgKiBAdG9kbyBCYWQgcGFyYW1ldGVyIGRlc2lnblxuICAgKi9cbiAgaWlmPzogKGl0ZW06IFNURGF0YSwgYnRuOiBTVENvbHVtbkJ1dHRvbiwgY29sdW1uOiBTVENvbHVtbikgPT4gYm9vbGVhbjtcbiAgLyoqXG4gICAqIENvbmRpdGlvbmFsIGV4cHJlc3Npb24gcmVuZGVyaW5nIGJlaGF2aW9yLCBjYW4gYmUgc2V0IHRvIGBoaWRlYCAoZGVmYXVsdCkgb3IgYGRpc2FibGVkYFxuICAgKi9cbiAgaWlmQmVoYXZpb3I/OiBJaWZCZWhhdmlvclR5cGU7XG5cbiAgdG9vbHRpcD86IHN0cmluZztcblxuICAvKipcbiAgICog5oyJ6ZKuIGBjbGFzc2Ag5bGe5oCn5YC877yI5rOo77ya5peg6aG7IGAuYCDngrnvvInlpJrkuKrnlKjnqbrmoLzpmpTlvIDvvIzkvovlpoLvvJpcbiAgICogLSBgdGV4dC1zdWNjZXNzYCDmiJDlip/oibJcbiAgICogLSBgdGV4dC1lcnJvcmAg6ZSZ6K+v6ImyXG4gICAqL1xuICBjbGFzc05hbWU/OiBzdHJpbmcgfCBzdHJpbmdbXSB8IFNldDxzdHJpbmc+IHwgeyBba2xhc3M6IHN0cmluZ106IGFueSB9O1xuXG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTVENvbHVtbkJ1dHRvbk9LIHtcbiAgcmVjb3JkOiBTVERhdGE7XG4gIC8qKlxuICAgKiBNb2RhbCBvciBkcmF3ZXIgcmV0dXJuIHZhbHVlIHdoZW4gdHJpZ2dlciBjb25maXJtLlxuICAgKi9cbiAgcmV0PzogYW55O1xuICBpbnN0YW5jZT86IFNUQ29tcG9uZW50O1xuICBldmVudDogRXZlbnQ7XG59XG5cbmV4cG9ydCB0eXBlIElpZkJlaGF2aW9yVHlwZSA9ICdoaWRlJyB8ICdkaXNhYmxlZCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1RDb2x1bW5CdXR0b25Nb2RhbCBleHRlbmRzIE1vZGFsSGVscGVyT3B0aW9ucyB7XG4gIC8qKlxuICAgKiDlr7nor53moYbnu4Tku7blr7nosaFcbiAgICovXG4gIGNvbXBvbmVudD86IGFueTtcbiAgLyoqXG4gICAqIOWvueivneahhuWPguaVsFxuICAgKi9cbiAgcGFyYW1zPzogKHJlY29yZDogU1REYXRhKSA9PiB7fTtcbiAgLyoqXG4gICAqIOWvueivneahhuebruagh+e7hOS7tueahOaOpeaUtuWPguaVsOWQje+8jOm7mOiupO+8mmByZWNvcmRgXG4gICAqL1xuICBwYXJhbXNOYW1lPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNUQ29sdW1uQnV0dG9uTW9kYWxDb25maWcge1xuICAvKipcbiAgICog5oyH5a6a5qih5oCB5qGG55uu5qCH57uE5Lu255qE5o6l5pS25Y+C5pWw5ZCN77yM6buY6K6k77yaYHJlY29yZGBcbiAgICovXG4gIHBhcmFtc05hbWU/OiBzdHJpbmc7XG4gIC8qKiDlpKflsI/vvJvkvovlpoLvvJpsZ+OAgTYwMO+8jOm7mOiupO+8mmBsZ2AgKi9cbiAgc2l6ZT86ICdzbScgfCAnbWQnIHwgJ2xnJyB8ICd4bCcgfCAnJyB8IG51bWJlcjtcbiAgLyoqIOWvueivneahhiBbTW9kYWxPcHRpb25zXShodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9jb21wb25lbnRzL21vZGFsL21vZGFsLXR5cGVzLnRzKSDlj4LmlbAgKi9cbiAgbW9kYWxPcHRpb25zPzogTW9kYWxPcHRpb25zO1xuICAvKiog5piv5ZCm57K+5YeG77yI6buY6K6k77yaYHRydWVg77yJ77yM6Iul6L+U5Zue5YC86Z2e56m65YC877yIYG51bGxg5oiWYHVuZGVmaW5lZGDvvInop4bkuLrmiJDlip/vvIzlkKbliJnop4bkuLrplJnor68gKi9cbiAgZXhhY3Q/OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNUQ29sdW1uQnV0dG9uRHJhd2VyIGV4dGVuZHMgRHJhd2VySGVscGVyT3B0aW9ucyB7XG4gIC8qKlxuICAgKiDmoIfpophcbiAgICovXG4gIHRpdGxlPzogc3RyaW5nO1xuICAvKipcbiAgICog5oq95bGJ57uE5Lu25a+56LGhXG4gICAqL1xuICBjb21wb25lbnQ/OiBhbnk7XG4gIC8qKlxuICAgKiDmir3lsYnlj4LmlbBcbiAgICovXG4gIHBhcmFtcz86IChyZWNvcmQ6IFNURGF0YSkgPT4ge307XG4gIC8qKlxuICAgKiDmir3lsYnnm67moIfnu4Tku7bnmoTmjqXmlLblj4LmlbDlkI3vvIzpu5jorqTvvJpgcmVjb3JkYFxuICAgKi9cbiAgcGFyYW1zTmFtZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTVENvbHVtbkJ1dHRvbkRyYXdlckNvbmZpZyB7XG4gIC8qKlxuICAgKiDmir3lsYnnm67moIfnu4Tku7bnmoTmjqXmlLblj4LmlbDlkI3vvIzpu5jorqTvvJpgcmVjb3JkYFxuICAgKi9cbiAgcGFyYW1zTmFtZT86IHN0cmluZztcbiAgLyoqXG4gICAqIOWkp+Wwj++8m+S+i+Wmgu+8mmxn44CBNjAw77yM6buY6K6k77yaYG1kYFxuICAgKlxuICAgKiB8IOexu+WeiyB8IOm7mOiupOWkp+WwjyB8XG4gICAqIHwgLS0tIHwgLS0tLS0tIHxcbiAgICogfCBgc21gIHwgYDMwMGAgfFxuICAgKiB8IGBtZGAgfCBgNjAwYCB8XG4gICAqIHwgYGxnYCB8IGA5MDBgIHxcbiAgICogfCBgeGxgIHwgYDEyMDBgIHxcbiAgICpcbiAgICogPiDku6XkuIrlgLzvvIzlj6/pgJrov4fopobnm5bnm7jlupTnmoRMRVNT5Y+C5pWw6Ieq6KGM6LCD5pW0XG4gICAqL1xuICBzaXplPzogJ3NtJyB8ICdtZCcgfCAnbGcnIHwgJ3hsJyB8IG51bWJlcjtcbiAgLyoqXG4gICAqIOaYr+WQpuWMheWQq+W6lemDqOW3peWFt+adoe+8jOm7mOiupO+8mmB0cnVlYFxuICAgKi9cbiAgZm9vdGVyPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIOW6lemDqOW3peWFt+adoemrmOW6pu+8jOm7mOiupO+8mmA1NWBcbiAgICovXG4gIGZvb3RlckhlaWdodD86IG51bWJlcjtcbiAgLyoqIOaKveWxiSBbTnpEcmF3ZXJPcHRpb25zXShodHRwczovL25nLmFudC5kZXNpZ24vY29tcG9uZW50cy9kcmF3ZXIvemgjbnpkcmF3ZXJvcHRpb25zKSDlj4LmlbAgKi9cbiAgZHJhd2VyT3B0aW9ucz86IE56RHJhd2VyT3B0aW9ucztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTVENvbHVtbkJ1dHRvblBvcCB7XG4gIC8qKlxuICAgKiBUaXRsZSBvZiB0aGUgcG9wb3ZlciwgZGVmYXVsdDogYOehruiupOWIoOmZpOWQl++8n2BcbiAgICovXG4gIHRpdGxlPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBQb3BvdmVyIHRyaWdnZXIgbW9kZSwgZGVmYXVsdDogYGNsaWNrYFxuICAgKi9cbiAgdHJpZ2dlcj86ICdjbGljaycgfCAnZm9jdXMnIHwgJ2hvdmVyJztcblxuICAvKipcbiAgICogVGhlIHBvc2l0aW9uIG9mIHRoZSBwb3BvdmVyIHJlbGF0aXZlIHRvIHRoZSB0YXJnZXQsIGRlZmF1bHQ6IGB0b3BgXG4gICAqL1xuICBwbGFjZW1lbnQ/OlxuICAgIHwgJ3RvcCdcbiAgICB8ICdsZWZ0J1xuICAgIHwgJ3JpZ2h0J1xuICAgIHwgJ2JvdHRvbSdcbiAgICB8ICd0b3BMZWZ0J1xuICAgIHwgJ3RvcFJpZ2h0J1xuICAgIHwgJ2JvdHRvbUxlZnQnXG4gICAgfCAnYm90dG9tUmlnaHQnXG4gICAgfCAnbGVmdFRvcCdcbiAgICB8ICdsZWZ0Qm90dG9tJ1xuICAgIHwgJ3JpZ2h0VG9wJ1xuICAgIHwgJ3JpZ2h0Qm90dG9tJztcblxuICAvKipcbiAgICogQ2xhc3MgbmFtZSBvZiB0aGUgcG9wb3ZlciBjYXJkXG4gICAqL1xuICBvdmVybGF5Q2xhc3NOYW1lPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBTdHlsZSBvZiB0aGUgcG9wb3ZlciBjYXJkXG4gICAqL1xuICBvdmVybGF5U3R5bGU/OiB7fTtcblxuICAvKipcbiAgICogVGV4dCBvZiB0aGUgQ2FuY2VsIGJ1dHRvblxuICAgKi9cbiAgY2FuY2VsVGV4dD86IHN0cmluZztcblxuICAvKipcbiAgICogVGV4dCBvZiB0aGUgQ29uZmlybSBidXR0b25cbiAgICovXG4gIG9rVGV4dD86IHN0cmluZztcblxuICAvKipcbiAgICogQnV0dG9uIGB0eXBlYCBvZiB0aGUgQ29uZmlybSBidXR0b25cbiAgICovXG4gIG9rVHlwZT86ICdwcmltYXJ5JyB8ICdnaG9zdCcgfCAnZGFzaGVkJyB8ICdkYW5nZXInIHwgJ2RlZmF1bHQnO1xuXG4gIC8qKlxuICAgKiBDdXN0b21pemUgaWNvbiBvZiBjb25maXJtYXRpb25cbiAgICovXG4gIGljb24/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdG8gZGlyZWN0bHkgZW1pdCBgb25Db25maXJtYCB3aXRob3V0IHNob3dpbmcgUG9wY29uZmlybSwgZGVmYXVsdDogYCgpID0+IGZhbHNlYFxuICAgKi9cbiAgY29uZGl0aW9uPzogKGl0ZW06IFNURGF0YSkgPT4gYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTVFJlcVJlTmFtZVR5cGUge1xuICBwaT86IHN0cmluZztcbiAgcHM/OiBzdHJpbmc7XG4gIHNraXA/OiBzdHJpbmc7XG4gIGxpbWl0Pzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNUUmVzUmVOYW1lVHlwZSB7XG4gIHRvdGFsPzogc3RyaW5nIHwgc3RyaW5nW107XG4gIGxpc3Q/OiBzdHJpbmcgfCBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTVEV4cG9ydE9wdGlvbnMge1xuICAvKipcbiAgICogU3BlY2lmeSB0aGUgY3VycmVudGx5IGV4cG9ydGVkIGRhdGEsIGRlZmF1bHQgdGhlIGN1cnJlbnQgdGFibGUgZGF0YVxuICAgKi9cbiAgZGF0YT86IFNURGF0YVtdO1xuICAvKipcbiAgICogU3BlY2lmeSB0aGUgY3VycmVudGx5IGV4cG9ydGVkIGNvbHVtbiBjb25maWd1cmF0aW9uLCBkZWZhdWx0IHRoZSBjdXJyZW50IHRhYmxlIGRhdGFcbiAgICovXG4gIGNvbHVtZW5zPzogU1RDb2x1bW5bXTtcbiAgLyoqIOW3peS9nOa6peWQjSAqL1xuICBzaGVldG5hbWU/OiBzdHJpbmc7XG4gIC8qKiDmlofku7blkI0gKi9cbiAgZmlsZW5hbWU/OiBzdHJpbmc7XG4gIC8qKiB0cmlnZ2VycyB3aGVuIHNhdmVhcyAqL1xuICBjYWxsYmFjaz86ICh3YjogYW55KSA9PiB2b2lkO1xufVxuXG4vKipcbiAqIOWNleaOkuW6j+inhOWImVxuICogLSDoi6XkuI3mjIflrprvvIzliJnov5Tlm57vvJpgY29sdW1uTmFtZT1hc2NlbmR8ZGVzY2VuZGBcbiAqIC0g6Iul5oyH5a6a77yM5YiZ6L+U5Zue77yaYHNvcnQ9Y29sdW1uTmFtZS4oYXNjZW5kfGRlc2NlbmQpYFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFNUU2luZ2xlU29ydCB7XG4gIC8qKiDor7fmsYLlj4LmlbDlkI3vvIzpu5jorqTvvJpgc29ydGAgKi9cbiAga2V5Pzogc3RyaW5nO1xuICAvKiog5YiX5ZCN5LiO54q25oCB6Ze05YiG6ZqU56ym77yM6buY6K6k77yaYC5gICovXG4gIG5hbWVTZXBhcmF0b3I/OiBzdHJpbmc7XG59XG5cbi8qKlxuICog5aSa5o6S5bqP55u45ZCM5o6S5bqPIGtleSDml7blkIjlubbop4TliJlcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTVE11bHRpU29ydCB7XG4gIC8qKiDor7fmsYLlj4LmlbDlkI3vvIzpu5jorqTvvJpgc29ydGAgKi9cbiAga2V5Pzogc3RyaW5nO1xuICAvKiog5LiN5ZCM5bGe5oCn6Ze05YiG6ZqU56ym77yM6buY6K6k77yaYC1gICovXG4gIHNlcGFyYXRvcj86IHN0cmluZztcbiAgLyoqIOWIl+WQjeS4jueKtuaAgemXtOWIhumalOespu+8jOm7mOiupO+8mmAuYCAqL1xuICBuYW1lU2VwYXJhdG9yPzogc3RyaW5nO1xuICAvKipcbiAgICog5piv5ZCm5Lul5pWw57uE55qE5b2i5byP5Lyg6YCS5Y+C5pWw77yM6buY6K6k77yaYGZhbHNlYFxuICAgKiAtIGB0cnVlYCDooajnpLrkvb/nlKggYHVybD9zb3J0PW5hbWUuYXNjJnNvcnQ9YWdlLmRlc2NgIOW9ouW8j1xuICAgKiAtIGBmYWxzZWAg6KGo56S65L2/55SoIGB1cmw/c29ydD1uYW1lLmFzYy1hZ2UuZGVzY2Ag5b2i5byPXG4gICAqL1xuICBhcnJheVBhcmFtPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIOaYr+WQpuS/neaMgeepuuWAvOeahOmUruWQje+8jOm7mOiupO+8mmB0cnVlYFxuICAgKiAtIGB0cnVlYCDooajnpLrkuI3nrqHmmK/lkKbmnInmjpLluo/pg73kvJrlj5HpgIEgYGtleWAg6ZSu5ZCNXG4gICAqIC0gYGZhbHNlYCDooajnpLrml6DmjpLluo/liqjkvZzml7bkuI3kvJrlj5HpgIEgYGtleWAg6ZSu5ZCNXG4gICAqL1xuICBrZWVwRW1wdHlLZXk/OiBib29sZWFuO1xuICAvKipcbiAgICogIyMg5LuF6ZmQ5YWo5bGA6YWN572u6aG55pyJ5pWIXG4gICAqXG4gICAqIOaYr+WQpuWFqOWxgOWkmuaOkuW6j+aooeW8j++8jOm7mOiupO+8mmB0cnVlYFxuICAgKiAtIGB0cnVlYCDooajnpLrmiYDmnIkgYHN0YCDpu5jorqTkuLrlpJrmjpLluo9cbiAgICogLSBgZmFsc2VgIOihqOekuumcgOimgeS4uuavj+S4qiBgc3RgIOa3u+WKoCBgbXVsdGlTb3J0YCDmiY3kvJrop4bkuLrlpJrmjpLluo/mqKHlvI9cbiAgICovXG4gIGdsb2JhbD86IGJvb2xlYW47XG59XG5cbmV4cG9ydCB0eXBlIFNUTXVsdGlTb3J0UmVzdWx0VHlwZSA9IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcblxuLyoqXG4gKiDlvr3moIfkv6Hmga9cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTVENvbHVtbkJhZGdlIHtcbiAgW2tleTogbnVtYmVyXTogU1RDb2x1bW5CYWRnZVZhbHVlO1xuICBba2V5OiBzdHJpbmddOiBTVENvbHVtbkJhZGdlVmFsdWU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1RDb2x1bW5CYWRnZVZhbHVlIHtcbiAgLyoqXG4gICAqIOaWh+acrFxuICAgKi9cbiAgdGV4dD86IHN0cmluZztcbiAgLyoqXG4gICAqIOW+veagh+minOiJsuWAvFxuICAgKi9cbiAgY29sb3I/OiAnc3VjY2VzcycgfCAncHJvY2Vzc2luZycgfCAnZGVmYXVsdCcgfCAnZXJyb3InIHwgJ3dhcm5pbmcnO1xufVxuXG4vKipcbiAqIOagh+etvuS/oeaBr1xuICovXG5leHBvcnQgaW50ZXJmYWNlIFNUQ29sdW1uVGFnIHtcbiAgW2tleTogbnVtYmVyXTogU1RDb2x1bW5UYWdWYWx1ZTtcbiAgW2tleTogc3RyaW5nXTogU1RDb2x1bW5UYWdWYWx1ZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTVENvbHVtblRhZ1ZhbHVlIHtcbiAgLyoqXG4gICAqIOaWh+acrFxuICAgKi9cbiAgdGV4dD86IHN0cmluZztcbiAgLyoqXG4gICAqIOminOiJsuWAvO+8jOaUr+aMgemihOiuvuWSjOiJsuWAvFxuICAgKiAtIOmihOiuvu+8mmdlZWtibHVlLGJsdWUscHVycGxlLHN1Y2Nlc3MscmVkLHZvbGNhbm8sb3JhbmdlLGdvbGQsbGltZSxncmVlbixjeWFuXG4gICAqIC0g6Imy5YC877yaI2Y1MCwjZmYwXG4gICAqL1xuICBjb2xvcj86ICdnZWVrYmx1ZScgfCAnYmx1ZScgfCAncHVycGxlJyB8ICdzdWNjZXNzJyB8ICdyZWQnIHwgJ3ZvbGNhbm8nIHwgJ29yYW5nZScgfCAnZ29sZCcgfCAnbGltZScgfCAnZ3JlZW4nIHwgJ2N5YW4nIHwgc3RyaW5nO1xufVxuXG5leHBvcnQgdHlwZSBTVENoYW5nZVR5cGUgPSAnbG9hZGVkJyB8ICdwaScgfCAncHMnIHwgJ2NoZWNrYm94JyB8ICdyYWRpbycgfCAnc29ydCcgfCAnZmlsdGVyJyB8ICdjbGljaycgfCAnZGJsQ2xpY2snIHwgJ2V4cGFuZCcgfCAncmVzaXplJztcblxuLyoqXG4gKiDlm57osIPmlbDmja5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTVENoYW5nZSB7XG4gIC8qKlxuICAgKiDlm57osIPnsbvlnotcbiAgICovXG4gIHR5cGU6IFNUQ2hhbmdlVHlwZTtcbiAgLyoqXG4gICAqIOW9k+WJjemhteeggVxuICAgKi9cbiAgcGk6IG51bWJlcjtcbiAgLyoqXG4gICAqIOavj+mhteaVsOmHj1xuICAgKi9cbiAgcHM6IG51bWJlcjtcbiAgLyoqXG4gICAqIOaVsOaNruaAu+mHj1xuICAgKi9cbiAgdG90YWw6IG51bWJlcjtcbiAgLyoqXG4gICAqIGBsb2FkZWRgIOWPguaVsFxuICAgKi9cbiAgbG9hZGVkPzogU1REYXRhW107XG4gIC8qKlxuICAgKiBgY2hlY2tib3hgIOWPguaVsFxuICAgKi9cbiAgY2hlY2tib3g/OiBTVERhdGFbXTtcbiAgLyoqXG4gICAqIGByYWRpb2Ag5Y+C5pWwXG4gICAqL1xuICByYWRpbz86IFNURGF0YTtcbiAgLyoqXG4gICAqIOaOkuW6j+WPguaVsFxuICAgKi9cbiAgc29ydD86IFNUQ2hhbmdlU29ydDtcbiAgLyoqXG4gICAqIOi/h+a7pOWPguaVsFxuICAgKi9cbiAgZmlsdGVyPzogU1RDb2x1bW47XG4gIC8qKlxuICAgKiDooYzngrnlh7vlj4LmlbBcbiAgICovXG4gIGNsaWNrPzogU1RDaGFuZ2VSb3dDbGljaztcbiAgLyoqXG4gICAqIOihjOWPjOWHu+WPguaVsFxuICAgKi9cbiAgZGJsQ2xpY2s/OiBTVENoYW5nZVJvd0NsaWNrO1xuICAvKipcbiAgICogYGV4cGFuZGAg5Y+C5pWwXG4gICAqL1xuICBleHBhbmQ/OiBTVERhdGE7XG4gIC8qKlxuICAgKiBgcmVzaXplYCDlj4LmlbBcbiAgICovXG4gIHJlc2l6ZT86IFNUQ29sdW1uO1xufVxuXG4vKiog6KGM5Y2V5Ye75Y+C5pWwICovXG5leHBvcnQgaW50ZXJmYWNlIFNUQ2hhbmdlU29ydCB7XG4gIHZhbHVlPzogJ2FzY2VuZCcgfCAnZGVzY2VuZCc7XG4gIG1hcD86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG4gIGNvbHVtbj86IFNUQ29sdW1uO1xufVxuXG4vKiog6KGM5Y2V5Ye75Y+C5pWwICovXG5leHBvcnQgaW50ZXJmYWNlIFNUQ2hhbmdlUm93Q2xpY2sge1xuICBlPzogRXZlbnQ7XG4gIGl0ZW0/OiBTVERhdGE7XG4gIGluZGV4PzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNURXJyb3Ige1xuICB0eXBlPzogJ3JlcSc7XG4gIGVycm9yPzogYW55O1xufVxuXG5leHBvcnQgdHlwZSBTVFJvd0NsYXNzTmFtZSA9IChyZWNvcmQ6IFNURGF0YSwgaW5kZXg6IG51bWJlcikgPT4gc3RyaW5nO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNUQ29sdW1uR3JvdXBUeXBlIHtcbiAgY29sdW1uOiBTVENvbHVtbjtcbiAgY29sU3RhcnQ6IG51bWJlcjtcbiAgY29sRW5kPzogbnVtYmVyO1xuICBjb2xTcGFuPzogbnVtYmVyO1xuICByb3dTcGFuPzogbnVtYmVyO1xuICBoYXNTdWJDb2x1bW5zPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTVFJlc2l6YWJsZSB7XG4gIC8qKlxuICAgKiBEaXNhYmxlIHJlc2l6ZSwgRGVmYXVsdDogYHRydWVgXG4gICAqL1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBTcGVjaWZpZXMgcmVzaXplIGJvdW5kYXJpZXMsIERlZmF1bHQ6IGB3aW5kb3dgXG4gICAqL1xuICBib3VuZHM/OiAnd2luZG93JyB8ICdwYXJlbnQnIHwgRWxlbWVudFJlZjxIVE1MRWxlbWVudD47XG4gIC8qKlxuICAgKiBNYXhpbXVtIHdpZHRoIG9mIHJlc2l6YWJsZSBlbGVtZW4sIERlZmF1bHQ6IGA2MGBcbiAgICovXG4gIG1heFdpZHRoPzogbnVtYmVyO1xuICAvKipcbiAgICogTWluaW11bSB3aWR0aCBvZiByZXNpemFibGUgZWxlbWVudCwgRGVmYXVsdDogYDM2MGBcbiAgICovXG4gIG1pbldpZHRoPzogbnVtYmVyO1xuICAvKipcbiAgICogRW5hYmxlIHByZXZpZXcgd2hlbiByZXNpemluZywgRGVmYXVsdDogYHRydWVgXG4gICAqL1xuICBwcmV2aWV3PzogYm9vbGVhbjtcbn1cbiJdfQ==