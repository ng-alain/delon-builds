/**
 * @fileoverview added by tsickle
 * Generated from: table.interfaces.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     * Whether to trigger a data load, default: `true`
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
     * @deprecated 9.0.0. This is deprecated and going to be removed in 9.0.0.
     * 数据变更后是否保留在数据变更前的页码，默认：`true`
     * @type {?|undefined}
     */
    STPage.prototype.indexReset;
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
 * 列描述
 * @record
 */
export function STColumn() { }
if (false) {
    /**
     * 用于定义数据源主键，例如：`STStatistical`
     * @type {?|undefined}
     */
    STColumn.prototype.key;
    /**
     * 列标题
     * @type {?|undefined}
     */
    STColumn.prototype.title;
    /**
     * 列标题 i18n
     * @deprecated 使用 `title: { i18n: 'value' }` 代替
     * @type {?|undefined}
     */
    STColumn.prototype.i18n;
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
     * - `link` 链接，务必指定 `click`
     * - `badge` [徽标](https://ng.ant.design/components/badge/zh)，务必指定 `badge` 参数配置徽标对应值
     * - `tag` [标签](https://ng.ant.design/components/tag/zh)，务必指定 `tag` 参数配置标签对应值
     * - `img` 图片且居中(若 `className` 存在则优先)
     * - `number` 数字且居右(若 `className` 存在则优先)
     * - `currency` 货币且居右(若 `className` 存在则优先)
     * - `date` 日期格式且居中(若 `className` 存在则优先)，使用 `dateFormat` 自定义格式
     * - `yn` 将`boolean`类型徽章化 [document](https://ng-alain.com/docs/data-render#yn)
     * @type {?|undefined}
     */
    STColumn.prototype.type;
    /**
     * 链接回调，若返回一个字符串表示导航URL会自动触发 `router.navigateByUrl`
     * @type {?|undefined}
     */
    STColumn.prototype.click;
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
     * - `true` 表示允许排序
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
     * 列 `class` 属性值（注：无须 `.` 点），例如：
     * - `text-center` 居中
     * - `text-right` 居右
     * - `text-success` 成功色
     * - `text-danger` 异常色
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
     * 日期格式，`type=date` 有效，（默认：`YYYY-MM-DD HH:mm`）
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
     * 统计
     * @type {?|undefined}
     */
    STColumn.prototype.statistical;
    /**
     * @ignore internal property
     * @type {?|undefined}
     */
    STColumn.prototype._sort;
    /* Skipping unhandled member: [key: string]: any;*/
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
     * 格式化文本
     * @deprecated 使用 `text` 代替
     * @type {?|undefined}
     */
    STColumnButton.prototype.format;
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
     * \@todo Bad parameter design
     * @type {?|undefined}
     */
    STColumnButton.prototype.click;
    /**
     * 气泡确认框参数，若 `string` 类型表示标题
     * @type {?|undefined}
     */
    STColumnButton.prototype.pop;
    /**
     * 气泡确认框内容，默认 `确认删除吗？`
     *
     * @deprecated 已过期，请使用 `pop.title` 替代
     * @type {?|undefined}
     */
    STColumnButton.prototype.popTitle;
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
     * @deprecated 9.0.0. This is deprecated and going to be removed in 9.0.0.
     * @type {?|undefined}
     */
    STColumnButton.prototype.component;
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
     * 对话框组件对象，务必在 `entryComponents` 注册
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
     * 对话框 [ModalOptionsForService](https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/components/modal/nz-modal.type.ts) 参数
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
     * 抽屉组件对象，务必在 `entryComponents` 注册
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
     * @ignore internal property
     * @type {?|undefined}
     */
    STExportOptions.prototype._d;
    /**
     * @ignore internal property
     * @type {?|undefined}
     */
    STExportOptions.prototype._c;
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
     * 是否全局多排序模式，默认：`true`
     * - `true` 表示所有 `st` 默认为多排序
     * - `false` 表示需要为每个 `st` 添加 `multiSort` 才会视为多排序模式
     * @type {?|undefined}
     */
    STMultiSort.prototype.global;
    /**
     * 是否保持空值的键名，默认：`true`
     * - `true` 表示不管是否有排序都会发送 `key` 键名
     * - `false` 表示无排序动作时不会发送 `key` 键名
     * @type {?|undefined}
     */
    STMultiSort.prototype.keepEmptyKey;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuaW50ZXJmYWNlcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hYmMvdGFibGUvIiwic291cmNlcyI6WyJ0YWJsZS5pbnRlcmZhY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBTUEsaUNBYUM7Ozs7Ozs7O0lBUEMsMkJBQTRCOzs7Ozs7O0lBTTVCLHFDQUFxQzs7Ozs7QUFHdkMsMENBUUM7OztJQVBDLGtDQUFZOztJQUNaLGtDQUFZOztJQUNaLHVDQUFxQjs7Ozs7SUFJckIsMENBQXFCOzs7OztBQUd2QiwyQkFtQ0M7Ozs7Ozs7O0lBN0JDLHFCQUF1Qjs7Ozs7O0lBS3ZCLHVCQUFhOzs7OztJQUViLHVCQUFnQjs7Ozs7SUFFaEIscUJBQVc7Ozs7O0lBRVgsd0JBQWM7Ozs7OztJQUtkLHVCQUF5Qjs7Ozs7SUFJekIsMEJBQW9COzs7OztJQUlwQix5QkFBbUI7Ozs7O0lBSW5CLHdCQUFpRTs7Ozs7QUFHbkUsc0NBZ0JDOzs7SUFmQyxnQ0FBVzs7SUFDWCxtQ0FJRTs7SUFDRixrQ0FJRTs7SUFDRixtQ0FBeUM7O0lBQ3pDLDBDQUF5Qjs7SUFDekIsd0NBQXdEOztJQUN4RCwyQ0FBMEI7Ozs7O0FBRzVCLG1DQUdDOzs7Ozs7SUFEQyw4QkFBZ0I7Ozs7O0FBR2xCLDJCQVVDOzs7Ozs7O0lBTEMsdUJBQXlCOzs7OztJQUl6Qix3QkFBc0Q7Ozs7O0FBR3hELDRCQXlEQzs7Ozs7Ozs7SUFuREMsdUJBQWdCOzs7OztJQUloQiw2QkFBc0I7Ozs7O0lBSXRCLDBCQUFxQzs7Ozs7SUFJckMsMkJBQXdDOzs7OztJQUl4QyxzQkFBZTs7Ozs7SUFJZiwwQkFBbUI7Ozs7O0lBSW5CLDJCQUFxQjs7Ozs7SUFJckIsaUNBQTBCOzs7Ozs7Ozs7O0lBUzFCLHVCQUF5Qjs7Ozs7O0lBS3pCLDRCQUFxQjs7Ozs7SUFJckIsdUJBQWdCOzs7OztJQUloQiw2QkFBcUI7Ozs7OztBQU12Qiw0QkFtQkM7Ozs7OztJQWZDLHlCQUFrQjs7Ozs7SUFJbEIs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dUI7Ozs7OztBQU16QixtQ0FHQzs7OztBQUVELHdDQVNDOzs7Ozs7SUFMQyxrQ0FBYzs7Ozs7SUFJZCxtQ0FBbUU7Ozs7OztBQU1yRSxpQ0FHQzs7OztBQUVELHNDQVdDOzs7Ozs7SUFQQyxnQ0FBYzs7Ozs7OztJQU1kLGlDQUFnSTs7Ozs7O0FBUWxJLDhCQWlEQzs7Ozs7O0lBN0NDLHdCQUFtQjs7Ozs7SUFJbkIsc0JBQVc7Ozs7O0lBSVgsc0JBQVc7Ozs7O0lBSVgseUJBQWM7Ozs7O0lBSWQsMEJBQWtCOzs7OztJQUlsQiw0QkFBb0I7Ozs7O0lBSXBCLHlCQUFlOzs7OztJQUlmLHdCQUFvQjs7Ozs7SUFJcEIsMEJBQWtCOzs7OztJQUlsQix5QkFBeUI7Ozs7O0lBSXpCLDRCQUE0Qjs7Ozs7SUFJNUIsMEJBQWdCOzs7Ozs7QUFJbEIsa0NBSUM7OztJQUhDLDZCQUE2Qjs7SUFDN0IsMkJBQWdDOztJQUNoQyw4QkFBa0I7Ozs7OztBQUlwQixzQ0FJQzs7O0lBSEMsNkJBQVU7O0lBQ1YsZ0NBQWM7O0lBQ2QsaUNBQWU7Ozs7O0FBR2pCLDZCQUdDOzs7SUFGQyx1QkFBYTs7SUFDYix3QkFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBIZWFkZXJzLCBIdHRwUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgRHJhd2VySGVscGVyT3B0aW9ucywgTW9kYWxIZWxwZXJPcHRpb25zLCBZTk1vZGUgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xuaW1wb3J0IHsgTnpEcmF3ZXJPcHRpb25zIH0gZnJvbSAnbmctem9ycm8tYW50ZC9kcmF3ZXInO1xuaW1wb3J0IHsgTW9kYWxPcHRpb25zRm9yU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvbW9kYWwnO1xuaW1wb3J0IHsgU1RDb21wb25lbnQgfSBmcm9tICcuL3RhYmxlLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1RXaWR0aE1vZGUge1xuICAvKipcbiAgICog5a695bqm57G75Z6LXG4gICAqIC0gYGRlZmF1bHRgIOm7mOiupOihjOS4ulxuICAgKiAtIGBzdHJpY3RgIOS4peagvOaooeW8j++8jOWNs+W8uuWItuaMiSBgd2lkdGhgIOaMh+WumueahOWuveW6puWRiOeOsO+8jOW5tuagueaNriBgc3RyaWN0QmVoYXZpb3JgIOexu+Wei+WkhOeQhlxuICAgKi9cbiAgdHlwZT86ICdzdHJpY3QnIHwgJ2RlZmF1bHQnO1xuICAvKipcbiAgICog5Lil5qC85qih5byP55qE5aSE55CG6KGM5Li6XG4gICAqIC0gYHdyYXBgIOW8uuWItuaNouihjFxuICAgKiAtIGB0cnVuY2F0ZWAg5oiq55+tXG4gICAqL1xuICBzdHJpY3RCZWhhdmlvcj86ICd3cmFwJyB8ICd0cnVuY2F0ZSc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1RSZXNldENvbHVtbnNPcHRpb24ge1xuICBwaT86IG51bWJlcjtcbiAgcHM/OiBudW1iZXI7XG4gIGNvbHVtbnM/OiBTVENvbHVtbltdO1xuICAvKipcbiAgICogV2hldGhlciB0byB0cmlnZ2VyIGEgZGF0YSBsb2FkLCBkZWZhdWx0OiBgdHJ1ZWBcbiAgICovXG4gIGVtaXRSZWxvYWQ/OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNUUmVxIHtcbiAgLyoqXG4gICAqIOWIhumhteexu+Wei++8jOm7mOiupO+8mmBwYWdlYFxuICAgKiAtIGBwYWdlYCDkvb/nlKggYHBpYO+8jGBwc2Ag57uE5ZCIXG4gICAqIC0gYHNraXBgIOS9v+eUqCBgc2tpcGDvvIxgbGltaXRgIOe7hOWQiFxuICAgKi9cbiAgdHlwZT86ICdwYWdlJyB8ICdza2lwJztcbiAgLyoqXG4gICAqIOmineWkluivt+axguWPguaVsO+8jOm7mOiupOiHquWKqOmZhOWKoCBgcGlg44CBYHBzYCDoh7NVUkxcbiAgICogLSBgeyBzdGF0dXM6ICduZXcnIH1gID0+IGB1cmw/cGk9MSZwcz0xMCZzdGF0dXM9bmV3YFxuICAgKi9cbiAgcGFyYW1zPzogYW55O1xuICAvKiog6K+35rGC5pa55rOV77yM6buY6K6k77yaYEdFVGAgKi9cbiAgbWV0aG9kPzogc3RyaW5nO1xuICAvKiog6K+35rGC5L2TIGBib2R5YCAqL1xuICBib2R5PzogYW55O1xuICAvKiog6K+35rGC5L2TIGBIZWFkZXJgICovXG4gIGhlYWRlcnM/OiBhbnk7XG4gIC8qKlxuICAgKiDph43lkb3lkI3lj4LmlbAgYHBpYOOAgWBwc2DvvIzpu5jorqTvvJpgeyBwaTogJ3BpJywgcHM6ICdwcycgfWBcbiAgICogLSBgeyBwaTogJ1BhZ2UnIH1gID0+IGBwaWAg5Lya6KKr5pu/5o2i5oiQIFBhZ2VcbiAgICovXG4gIHJlTmFtZT86IFNUUmVxUmVOYW1lVHlwZTtcbiAgLyoqXG4gICAqIOaYr+WQpuWwhuivt+axguaJgOacieWPguaVsOaVsOaNrumDveaUvuWFpSBgYm9keWAg5b2T5Lit77yIYHVybGAg5Zyw5Z2A5pys6Lqr5Y+C5pWw6Zmk5aSW77yJ77yM5LuF5b2TIGBtZXRob2Q6ICdQT1NUJ2Ag5pe25pyJ5pWI77yM6buY6K6k77yaYGZhbHNlYFxuICAgKi9cbiAgYWxsSW5Cb2R5PzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIOaYr+WQpuW7tui/n+WKoOi9veaVsOaNru+8jOWNs+a4suafk+e7k+adn+WQjuS4jeS8muS4u+WKqOWPkei1t+ivt+axgu+8jOm7mOiupO+8mmBmYWxzZWBcbiAgICovXG4gIGxhenlMb2FkPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIOivt+axguWJjeaVsOaNruWkhOeQhlxuICAgKi9cbiAgcHJvY2Vzcz86IChyZXF1ZXN0T3B0aW9uczogU1RSZXF1ZXN0T3B0aW9ucykgPT4gU1RSZXF1ZXN0T3B0aW9ucztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTVFJlcXVlc3RPcHRpb25zIHtcbiAgYm9keT86IGFueTtcbiAgaGVhZGVycz86XG4gIHwgSHR0cEhlYWRlcnNcbiAgfCB7XG4gICAgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XG4gIH07XG4gIHBhcmFtcz86XG4gIHwgSHR0cFBhcmFtc1xuICB8IHtcbiAgICBbcGFyYW06IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xuICB9O1xuICBvYnNlcnZlPzogJ2JvZHknIHwgJ2V2ZW50cycgfCAncmVzcG9uc2UnO1xuICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XG4gIHJlc3BvbnNlVHlwZT86ICdhcnJheWJ1ZmZlcicgfCAnYmxvYicgfCAnanNvbicgfCAndGV4dCc7XG4gIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1RMb2FkT3B0aW9ucyB7XG4gIC8qKiDmmK/lkKblkIjlubbvvIzpu5jorqTvvJpgZmFsc2VgICovXG4gIG1lcmdlPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTVFJlcyB7XG4gIC8qKlxuICAgKiDph43lkb3lkI3ov5Tlm57lj4LmlbAgYHRvdGFsYOOAgWBsaXN0YFxuICAgKiAtIGB7IHRvdGFsOiAnVG90YWwnIH1gID0+IFRvdGFsIOS8muiiq+W9k+S9nCBgdG90YWxgXG4gICAqL1xuICByZU5hbWU/OiBTVFJlc1JlTmFtZVR5cGU7XG4gIC8qKlxuICAgKiDmlbDmja7pooTlpITnkIZcbiAgICovXG4gIHByb2Nlc3M/OiAoZGF0YTogU1REYXRhW10sIHJhd0RhdGE/OiBhbnkpID0+IFNURGF0YVtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNUUGFnZSB7XG4gIC8qKlxuICAgKiDliY3nq6/liIbpobXvvIzlvZMgYGRhdGFgIOS4umBhbnlbXWAg5oiWIGBPYnNlcnZhYmxlPGFueVtdPmAg5pyJ5pWI77yM6buY6K6k77yaYHRydWVgXG4gICAqIC0gYHRydWVgIOeUsSBgc3RgIOagueaNriBgZGF0YWAg6ZW/5bqm5Y+X5o6n5YiG6aG177yM5YyF5ous77ya5o6S5bqP44CB6L+H5ruk562JXG4gICAqIC0gYGZhbHNlYCDnlLHnlKjmiLfpgJrov4cgYHRvdGFsYCDlkowgYGRhdGFgIOWPguaVsOWPl+aOp+WIhumhte+8jOW5tue7tOaKpCBgKGNoYW5nZSlgIOW9k+WIhumhteWPmOabtOaXtumHjeaWsOWKoOi9veaVsOaNrlxuICAgKi9cbiAgZnJvbnQ/OiBib29sZWFuO1xuICAvKipcbiAgICog5ZCO56uv5YiG6aG15piv5ZCm6YeH55SoYDBg5Z+657Si5byV77yM5Y+q5ZyoYGRhdGFg57G75Z6L5Li6YHN0cmluZ2Dml7bmnInmlYjvvIzpu5jorqTvvJpgZmFsc2VgXG4gICAqL1xuICB6ZXJvSW5kZXhlZD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDmjIflrprliIbpobXmmL7npLrnmoTkvY3nva7vvIzpu5jorqTvvJpgYm90dG9tYFxuICAgKi9cbiAgcG9zaXRpb24/OiAndG9wJyB8ICdib3R0b20nIHwgJ2JvdGgnO1xuICAvKipcbiAgICog5oyH5a6a5YiG6aG15YiG6aG15pa55ZCR77yM6buY6K6k77yaYHJpZ2h0YFxuICAgKi9cbiAgcGxhY2VtZW50PzogJ2xlZnQnIHwgJ2NlbnRlcicgfCAncmlnaHQnO1xuICAvKipcbiAgICog5piv5ZCm5pi+56S65YiG6aG15Zmo77yM6buY6K6k77yaYHRydWVgXG4gICAqL1xuICBzaG93PzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIOaYr+WQpuaYvuekuuWIhumhteWZqOS4reaUueWPmOmhteaVsO+8jOm7mOiupO+8mmBmYWxzZWBcbiAgICovXG4gIHNob3dTaXplPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIOWIhumhteWZqOS4reavj+mhteaYvuekuuadoeebruaVsOS4i+aLieahhuWAvO+8jOm7mOiupO+8mmBbMTAsIDIwLCAzMCwgNDAsIDUwXWBcbiAgICovXG4gIHBhZ2VTaXplcz86IG51bWJlcltdO1xuICAvKipcbiAgICog5piv5ZCm5pi+56S65YiG6aG15Zmo5Lit5b+r6YCf6Lez6L2s77yM6buY6K6k77yaYGZhbHNlYFxuICAgKi9cbiAgc2hvd1F1aWNrSnVtcGVyPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIOaYr+WQpuaYvuekuuaAu+aVsOaNrumHj1xuICAgKiAtIGBib29sZWFuYCDnsbvlnovmmL7npLrkuI7lkKbvvIzpu5jorqTmqKHmnb/vvJpg5YWxIHt7dG90YWx9fSDmnaFgXG4gICAqIC0gYHN0cmluZ2Ag6Ieq5a6a5LmJ5qih5p2/77yM5qih5p2/5Y+Y6YeP77yaXG4gICAqICAtIGB7e3RvdGFsfX1gIOihqOekuuaVsOaNruaAu+mHj1xuICAgKiAgLSBge3tyYW5nZVswXX19YCDooajnpLrlvZPliY3pobXlvIDlp4vmlbDph4/lgLxcbiAgICogIC0gYHt7cmFuZ2VbMV19fWAg6KGo56S65b2T5YmN6aG157uT5p2f5pWw6YeP5YC8XG4gICAqL1xuICB0b3RhbD86IHN0cmluZyB8IGJvb2xlYW47XG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCA5LjAuMC4gVGhpcyBpcyBkZXByZWNhdGVkIGFuZCBnb2luZyB0byBiZSByZW1vdmVkIGluIDkuMC4wLlxuICAgKiDmlbDmja7lj5jmm7TlkI7mmK/lkKbkv53nlZnlnKjmlbDmja7lj5jmm7TliY3nmoTpobXnoIHvvIzpu5jorqTvvJpgdHJ1ZWBcbiAgICovXG4gIGluZGV4UmVzZXQ/OiBib29sZWFuO1xuICAvKipcbiAgICog5YiH5o2i5YiG6aG15pe26L+U5Zue6aG26YOo77yM6buY6K6k77yaYHRydWVgXG4gICAqL1xuICB0b1RvcD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDov5Tlm57pobbpg6jlgY/np7vlgLzvvIzpu5jorqTvvJpgMTAwYFxuICAgKi9cbiAgdG9Ub3BPZmZzZXQ/OiBudW1iZXI7XG59XG5cbi8qKlxuICog5pWw5o2u5rqQXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU1REYXRhIHtcbiAgLyoqXG4gICAqIOmAieaLqeahhuaIluWNlemAieahhueKtuaAgeWAvFxuICAgKi9cbiAgY2hlY2tlZD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDpgInmi6nmoYbmiJbljZXpgInmoYYgYGRpc2FibGVkYCDlgLxcbiAgICovXG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIOaYr+WQpuWxleW8gOeKtuaAgVxuICAgKi9cbiAgZXhwYW5kPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIOaYr+WQpuaYvuekuuWxleW8gOaMiemSrlxuICAgKi9cbiAgc2hvd0V4cGFuZD86IGJvb2xlYW47XG5cbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG4vKipcbiAqIOWIl+aPj+i/sFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFNUQ29sdW1uIHtcbiAgLyoqXG4gICAqIOeUqOS6juWumuS5ieaVsOaNrua6kOS4u+mUru+8jOS+i+Wmgu+8mmBTVFN0YXRpc3RpY2FsYFxuICAgKi9cbiAga2V5Pzogc3RyaW5nO1xuICAvKipcbiAgICog5YiX5qCH6aKYXG4gICAqL1xuICB0aXRsZT86IHN0cmluZyB8IFNUQ29sdW1uVGl0bGU7XG4gIC8qKlxuICAgKiDliJfmoIfpopggaTE4blxuICAgKiBAZGVwcmVjYXRlZCDkvb/nlKggYHRpdGxlOiB7IGkxOG46ICd2YWx1ZScgfWAg5Luj5pu/XG4gICAqIEBkZXByZWNhdGVkIDkuMC4wLiBUaGlzIGlzIGRlcHJlY2F0ZWQgYW5kIGdvaW5nIHRvIGJlIHJlbW92ZWQgaW4gOS4wLjAuXG4gICAqL1xuICBpMThuPzogc3RyaW5nO1xuICAvKipcbiAgICog5YiX5pWw5o2u5Zyo5pWw5o2u6aG55Lit5a+55bqU55qEIGtlee+8jOaUr+aMgSBgYS5iLmNgIOeahOW1jOWll+WGmeazle+8jOS+i+Wmgu+8mlxuICAgKiAtIGBpZGBcbiAgICogLSBgcHJpY2UubWFya2V0YFxuICAgKiAtIGBbICdwcmljZScsICdtYXJrZXQnIF1gXG4gICAqL1xuICBpbmRleD86IHN0cmluZyB8IHN0cmluZ1tdIHwgbnVsbDtcbiAgLyoqXG4gICAqIOexu+Wei1xuICAgKiAtIGBub2Ag6KGM5Y+377yM6K6h566X6KeE5YiZ77yaYGluZGV4ICsgbm9JbmRleGBcbiAgICogLSBgY2hlY2tib3hgIOWkmumAiVxuICAgKiAtIGByYWRpb2Ag5Y2V6YCJXG4gICAqIC0gYGxpbmtgIOmTvuaOpe+8jOWKoeW/heaMh+WumiBgY2xpY2tgXG4gICAqIC0gYGJhZGdlYCBb5b695qCHXShodHRwczovL25nLmFudC5kZXNpZ24vY29tcG9uZW50cy9iYWRnZS96aCnvvIzliqHlv4XmjIflrpogYGJhZGdlYCDlj4LmlbDphY3nva7lvr3moIflr7nlupTlgLxcbiAgICogLSBgdGFnYCBb5qCH562+XShodHRwczovL25nLmFudC5kZXNpZ24vY29tcG9uZW50cy90YWcvemgp77yM5Yqh5b+F5oyH5a6aIGB0YWdgIOWPguaVsOmFjee9ruagh+etvuWvueW6lOWAvFxuICAgKiAtIGBpbWdgIOWbvueJh+S4lOWxheS4rSjoi6UgYGNsYXNzTmFtZWAg5a2Y5Zyo5YiZ5LyY5YWIKVxuICAgKiAtIGBudW1iZXJgIOaVsOWtl+S4lOWxheWPsyjoi6UgYGNsYXNzTmFtZWAg5a2Y5Zyo5YiZ5LyY5YWIKVxuICAgKiAtIGBjdXJyZW5jeWAg6LSn5biB5LiU5bGF5Y+zKOiLpSBgY2xhc3NOYW1lYCDlrZjlnKjliJnkvJjlhYgpXG4gICAqIC0gYGRhdGVgIOaXpeacn+agvOW8j+S4lOWxheS4rSjoi6UgYGNsYXNzTmFtZWAg5a2Y5Zyo5YiZ5LyY5YWIKe+8jOS9v+eUqCBgZGF0ZUZvcm1hdGAg6Ieq5a6a5LmJ5qC85byPXG4gICAqIC0gYHluYCDlsIZgYm9vbGVhbmDnsbvlnovlvr3nq6DljJYgW2RvY3VtZW50XShodHRwczovL25nLWFsYWluLmNvbS9kb2NzL2RhdGEtcmVuZGVyI3luKVxuICAgKi9cbiAgdHlwZT86ICdjaGVja2JveCcgfCAnbGluaycgfCAnYmFkZ2UnIHwgJ3RhZycgfCAncmFkaW8nIHwgJ2ltZycgfCAnY3VycmVuY3knIHwgJ251bWJlcicgfCAnZGF0ZScgfCAneW4nIHwgJ25vJztcbiAgLyoqXG4gICAqIOmTvuaOpeWbnuiwg++8jOiLpei/lOWbnuS4gOS4quWtl+espuS4suihqOekuuWvvOiIqlVSTOS8muiHquWKqOinpuWPkSBgcm91dGVyLm5hdmlnYXRlQnlVcmxgXG4gICAqL1xuICBjbGljaz86IChyZWNvcmQ6IFNURGF0YSwgaW5zdGFuY2U/OiBTVENvbXBvbmVudCkgPT4gYW55O1xuICAvKipcbiAgICog5oyJ6ZKu57uEXG4gICAqL1xuICBidXR0b25zPzogU1RDb2x1bW5CdXR0b25bXTtcbiAgLyoqXG4gICAqIOiHquWumuS5iea4suafk0lEXG4gICAqIEBleGFtcGxlXG4gICAqIDxuZy10ZW1wbGF0ZSBzdC1yb3c9XCJjdXN0b21cIiBsZXQtaXRlbSBsZXQtaW5kZXg9XCJpbmRleFwiIGxldC1jb2x1bW49XCJjb2x1bW5cIj5cbiAgICogIHt7IGMudGl0bGUgfX1cbiAgICogPC9uZy10ZW1wbGF0ZT5cbiAgICovXG4gIHJlbmRlcj86IHN0cmluZztcbiAgLyoqXG4gICAqIOagh+mimOiHquWumuS5iea4suafk0lEXG4gICAqIEBleGFtcGxlXG4gICAqIDxuZy10ZW1wbGF0ZSBzdC1yb3c9XCJjdXN0b21cIiB0eXBlPVwidGl0bGVcIiBsZXQtYz5cbiAgICogIHt7IGl0ZW0gfCBqc29uIH19XG4gICAqIDwvbmctdGVtcGxhdGU+XG4gICAqL1xuICByZW5kZXJUaXRsZT86IHN0cmluZztcbiAgLyoqXG4gICAqIOWIl+Wuve+8iOaVsOWtl+Wei+ihqOekuiBgcHhgIOWAvO+8ie+8jOS+i+Wmgu+8mmAxMDBg44CBYDEwJWDjgIFgMTAwcHhgXG4gICAqXG4gICAqICoq5rOo5oSP77yaKiog6Iul5Zu65a6a5YiX5b+F6aG75piv5pWw5a2XXG4gICAqL1xuICB3aWR0aD86IHN0cmluZyB8IG51bWJlcjtcbiAgLyoqXG4gICAqIOaOkuW6j+mFjee9rumhue+8jOi/nOeoi+aVsOaNrumFjee9rioq5LyY5YWIKirop4TliJnvvJpcbiAgICogLSBgdHJ1ZWAg6KGo56S65YWB6K645o6S5bqPXG4gICAqIC0gYHN0cmluZ2Ag6KGo56S66L+c56iL5pWw5o2u5o6S5bqP55u45a+55bqUIGBrZXlgIOWAvFxuICAgKi9cbiAgc29ydD86IHRydWUgfCBzdHJpbmcgfCBTVENvbHVtblNvcnQ7XG4gIC8qKlxuICAgKiDov4fmu6TphY3nva7poblcbiAgICovXG4gIGZpbHRlcj86IFNUQ29sdW1uRmlsdGVyO1xuICAvKipcbiAgICog5qC85byP5YyW5YiX5YC8XG4gICAqL1xuICBmb3JtYXQ/OiAoaXRlbTogU1REYXRhLCBjb2w6IFNUQ29sdW1uLCBpbmRleDogbnVtYmVyKSA9PiBzdHJpbmc7XG4gIC8qKlxuICAgKiDoh6rlrprkuYnlhagv5Y+N6YCJ6YCJ5oup6aG5XG4gICAqL1xuICBzZWxlY3Rpb25zPzogU1RDb2x1bW5TZWxlY3Rpb25bXTtcbiAgLyoqXG4gICAqIOWIlyBgY2xhc3NgIOWxnuaAp+WAvO+8iOazqO+8muaXoOmhuyBgLmAg54K577yJ77yM5L6L5aaC77yaXG4gICAqIC0gYHRleHQtY2VudGVyYCDlsYXkuK1cbiAgICogLSBgdGV4dC1yaWdodGAg5bGF5Y+zXG4gICAqIC0gYHRleHQtc3VjY2Vzc2Ag5oiQ5Yqf6ImyXG4gICAqIC0gYHRleHQtZGFuZ2VyYCDlvILluLjoibJcbiAgICovXG4gIGNsYXNzTmFtZT86IHN0cmluZztcbiAgLyoqXG4gICAqIOWQiOW5tuWIl1xuICAgKi9cbiAgY29sU3Bhbj86IG51bWJlcjtcbiAgLyoqXG4gICAqIOaVsOWtl+agvOW8j++8jGB0eXBlPW51bWJlcmAg5pyJ5pWIXG4gICAqL1xuICBudW1iZXJEaWdpdHM/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiDml6XmnJ/moLzlvI/vvIxgdHlwZT1kYXRlYCDmnInmlYjvvIzvvIjpu5jorqTvvJpgWVlZWS1NTS1ERCBISDptbWDvvIlcbiAgICovXG4gIGRhdGVGb3JtYXQ/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiDlvZMgYHR5cGU9eW5gIOacieaViFxuICAgKi9cbiAgeW4/OiBTVENvbHVtblluO1xuICAvKipcbiAgICog5piv5ZCm5YWB6K645a+85Ye677yM6buY6K6kIGB0cnVlYFxuICAgKi9cbiAgZXhwb3J0ZWQ/OiBib29sZWFuO1xuICAvKipcbiAgICog5p2D6ZmQ77yM562J5ZCMIFtBQ0xDYW5UeXBlXShodHRwczovL25nLWFsYWluLmNvbS9hY2wvZ2V0dGluZy1zdGFydGVkLyNBQ0xDYW5UeXBlKSDlj4LmlbDlgLxcbiAgICovXG4gIGFjbD86IGFueTtcbiAgLyoqIOW9k+S4jeWtmOWcqOaVsOaNruaXtuS7pem7mOiupOWAvOabv+S7oyAqL1xuICBkZWZhdWx0Pzogc3RyaW5nO1xuICAvKipcbiAgICog5Zu65a6a5YmN5ZCO5YiX77yM5b2T5oyH5a6a5pe25Yqh5b+F5oyH5a6aIGB3aWR0aGAg5ZCm5YiZ6KeG5Li65peg5pWI77yM5pyJ6Iul5bmyICoq5rOo5oSP77yaKiog6aG577yaXG4gICAqXG4gICAqIC0g6Iul5YiX5aS05LiO5YaF5a655LiN5a+56b2Q5oiW5Ye6546w5YiX6YeN5aSN77yM6K+35oyH5a6a5YiX55qE5a695bqmIGB3aWR0aGBcbiAgICogLSDlu7rorq7mjIflrpogYHNjcm9sbC54YCDkuLrlpKfkuo7ooajmoLzlrr3luqbnmoTlm7rlrprlgLzmiJbnmb7liIbmr5TjgILms6jmhI/vvIzkuJTpnZ7lm7rlrprliJflrr3luqbkuYvlkozkuI3opoHotoXov4cgYHNjcm9sbC54YFxuICAgKi9cbiAgZml4ZWQ/OiAnbGVmdCcgfCAncmlnaHQnO1xuICAvKipcbiAgICog5b695qCH6YWN572u6aG5XG4gICAqL1xuICBiYWRnZT86IFNUQ29sdW1uQmFkZ2UgfCBudWxsO1xuICAvKipcbiAgICog5qCH562+6YWN572u6aG5XG4gICAqL1xuICB0YWc/OiBTVENvbHVtblRhZyB8IG51bGw7XG4gIC8qKlxuICAgKiDooYzlj7fntKLlvJXvvIzpu5jorqTvvJpgMWBcbiAgICogLSDorqHnrpfop4TliJnkuLrvvJpgaW5kZXggKyBub0luZGV4YFxuICAgKiAtIOaUr+aMgeiHquWumuS5ieaWueazlVxuICAgKi9cbiAgbm9JbmRleD86IG51bWJlciB8ICgoaXRlbTogU1REYXRhLCBjb2w6IFNUQ29sdW1uLCBpZHg6IG51bWJlcikgPT4gbnVtYmVyKTtcbiAgLyoqXG4gICAqIOadoeS7tuihqOi+vuW8j1xuICAgKiAtIOS7hei1i+WAvCBgY29sdW1uc2Ag5pe25omn6KGM5LiA5qyhXG4gICAqIC0g5Y+v6LCD55SoIGByZXNldENvbHVtbnMoKWAg5YaN5LiA5qyh6Kem5Y+RXG4gICAqL1xuICBpaWY/OiAoaXRlbTogU1RDb2x1bW4pID0+IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIOe7n+iuoVxuICAgKi9cbiAgc3RhdGlzdGljYWw/OiBTVFN0YXRpc3RpY2FsVHlwZSB8IFNUU3RhdGlzdGljYWw7XG5cbiAgLyoqIEBpZ25vcmUgaW50ZXJuYWwgcHJvcGVydHkgKi9cbiAgX3NvcnQ/OiBTVFNvcnRNYXA7XG5cbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNUQ29sdW1uVGl0bGUge1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG5cbiAgLyoqXG4gICAqIFRleHQgb2YgaGVhZGVyLCBjYW4gYmUgY2hvb3NlIG9uZSBvZiBgdGV4dGAgb3IgYGkxOG5gXG4gICAqL1xuICB0ZXh0Pzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBJMThuIGtleSBvZiBoZWFkZXIsIGNhbiBiZSBjaG9vc2Ugb25lIG9mIGB0ZXh0YCBvciBgaTE4bmBcbiAgICovXG4gIGkxOG4/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIE9wdGlvbmFsIGluZm9ybWF0aW9uIG9mIGhlYWRlclxuICAgKi9cbiAgb3B0aW9uYWw/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIE9wdGlvbmFsIGhlbHAgb2YgaGVhZGVyXG4gICAqL1xuICBvcHRpb25hbEhlbHA/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCB0eXBlIFNUU3RhdGlzdGljYWxUeXBlID0gJ2NvdW50JyB8ICdkaXN0aW5jdENvdW50JyB8ICdzdW0nIHwgJ2F2ZXJhZ2UnIHwgJ21heCcgfCAnbWluJztcblxuZXhwb3J0IHR5cGUgU1RTdGF0aXN0aWNhbEZuID0gKHZhbHVlczogbnVtYmVyW10sIGNvbDogU1RDb2x1bW4sIGxpc3Q6IFNURGF0YVtdLCByYXdEYXRhPzogYW55KSA9PiBTVFN0YXRpc3RpY2FsUmVzdWx0O1xuXG5leHBvcnQgaW50ZXJmYWNlIFNUU3RhdGlzdGljYWwge1xuICB0eXBlOiBTVFN0YXRpc3RpY2FsVHlwZSB8IFNUU3RhdGlzdGljYWxGbjtcbiAgLyoqXG4gICAqIOS/neeVmeWwj+aVsOS9jeaVsO+8jOm7mOiupO+8mmAyYFxuICAgKi9cbiAgZGlnaXRzPzogbnVtYmVyO1xuICAvKipcbiAgICog5piv5ZCm6ZyA6KaB6LSn5biB5qC85byP5YyW77yM6buY6K6k5Lul5LiL5oOF5Ya15Li6IGB0cnVlYFxuICAgKiAtIGB0eXBlYCDkuLogYFNUU3RhdGlzdGljYWxGbmDjgIEgYHN1bWDjgIFgYXZlcmFnZWDjgIFgbWF4YOOAgWBtaW5gXG4gICAqL1xuICBjdXJyZW5jeT86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1RTdGF0aXN0aWNhbFJlc3VsdHMge1xuICBba2V5OiBzdHJpbmddOiBTVFN0YXRpc3RpY2FsUmVzdWx0O1xuICBbaW5kZXg6IG51bWJlcl06IFNUU3RhdGlzdGljYWxSZXN1bHQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1RTdGF0aXN0aWNhbFJlc3VsdCB7XG4gIHZhbHVlOiBudW1iZXI7XG4gIHRleHQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1RDb2x1bW5Tb3J0IHtcbiAgLyoqXG4gICAqIOaOkuW6j+eahOm7mOiupOWPl+aOp+WxnuaAp1xuICAgKi9cbiAgZGVmYXVsdD86ICdhc2NlbmQnIHwgJ2Rlc2NlbmQnIHwgbnVsbDtcbiAgLyoqXG4gICAqIOacrOWcsOaVsOaNrueahOaOkuW6j+WHveaVsO+8jOS9v+eUqOS4gOS4quWHveaVsCjlj4LogIMgW0FycmF5LnNvcnRdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0FycmF5L3NvcnQpIOeahCBjb21wYXJlRnVuY3Rpb24pXG4gICAqIC0gYG51bGxgIOW/veeVpeacrOWcsOaOkuW6j++8jOS9huS/neaMgeaOkuW6j+WKn+iDvVxuICAgKi9cbiAgY29tcGFyZT86ICgoYTogU1REYXRhLCBiOiBTVERhdGEpID0+IG51bWJlcikgfCBudWxsO1xuICAvKipcbiAgICog6L+c56iL5pWw5o2u55qE5o6S5bqP5pe25ZCO56uv55u45a+55bqU55qES0VZ77yM6buY6K6k5L2/55SoIGBpbmRleGAg5bGe5oCnXG4gICAqIC0g6IulIGBtdWx0aVNvcnQ6IGZhbHNlYCDml7bvvJpga2V5OiAnbmFtZScgPT4gP25hbWU9MSZwaT0xYFxuICAgKiAtIOiLpSBgbXVsdGlTb3J0OiB0cnVlYCDlhYHorrjlpJrkuKrmjpLluo8ga2V5IOWtmOWcqO+8jOaIluS9v+eUqCBgU1RNdWx0aVNvcnRgIOaMh+WumuWkmuWIl+aOkuW6j2tleeWQiOW5tuinhOWImVxuICAgKi9cbiAga2V5Pzogc3RyaW5nIHwgbnVsbDtcbiAgLyoqXG4gICAqIOi/nOeoi+aVsOaNrueahOaOkuW6j+aXtuWQjuerr+ebuOWvueW6lOeahFZBTFVFXG4gICAqIC0gYHsgYXNjZW5kOiAnMCcsIGRlc2NlbmQ6ICcxJyB9YCDnu5PmnpwgYD9uYW1lPTEmcGk9MWBcbiAgICogLSBgeyBhc2NlbmQ6ICdhc2MnLCBkZXNjZW5kOiAnZGVzYycgfWAg57uT5p6cIGA/bmFtZT1kZXNjJnBpPTFgXG4gICAqL1xuICByZU5hbWU/OiB7IGFzY2VuZD86IHN0cmluZzsgZGVzY2VuZD86IHN0cmluZyB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNUU29ydE1hcCBleHRlbmRzIFNUQ29sdW1uU29ydCB7XG4gIFtrZXk6IHN0cmluZ106IGFueTtcblxuICAvKiog5piv5ZCm5ZCv55So5o6S5bqPICovXG4gIGVuYWJsZWQ/OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNUQ29sdW1uRmlsdGVyIHtcbiAgLyoqXG4gICAqIOaQnOe0ouaWueW8j1xuICAgKiAtIGBkZWZ1YWx0YCDpu5jorqTlvaLlvI9cbiAgICogLSBga2V5d29yZGAg5paH5pys5qGG5b2i5byPXG4gICAqL1xuICB0eXBlPzogJ2RlZmF1bHQnIHwgJ2tleXdvcmQnO1xuICAvKipcbiAgICog6KGo5aS055qE562b6YCJ6I+c5Y2V6aG577yM6Iez5bCR5LiA6aG55omN5Lya55Sf5pWIXG4gICAqIC0g5b2TIGB0eXBlPSdrZXl3b3JkJ2Ag5pe25Y+v5Li656m6XG4gICAqL1xuICBtZW51cz86IFNUQ29sdW1uRmlsdGVyTWVudVtdO1xuICAvKipcbiAgICog5pys5Zyw5pWw5o2u55qE562b6YCJ5Ye95pWwXG4gICAqL1xuICBmbj86ICgoZmlsdGVyOiBTVENvbHVtbkZpbHRlck1lbnUsIHJlY29yZDogU1REYXRhKSA9PiBib29sZWFuKSB8IG51bGw7XG4gIC8qKlxuICAgKiDmoIfor4bmlbDmja7mmK/lkKblt7Lov4fmu6TvvIznrZvpgInlm77moIfkvJrpq5jkuq5cbiAgICovXG4gIGRlZmF1bHQ/OiBib29sZWFuO1xuICAvKipcbiAgICog6Ieq5a6a5LmJIGZpbHRlciDlm77moIdcbiAgICogLSDlvZMgYHR5cGU9J2RlZmF1bHQnYCDpu5jorqQgYGZpbHRlcmBcbiAgICogLSDlvZMgYHR5cGU9J2tleXdvcmQnYCDpu5jorqQgYHNlYXJjaGBcbiAgICovXG4gIGljb24/OiBzdHJpbmcgfCBTVEljb247XG4gIC8qKlxuICAgKiDnoa7orqTmjInpkq7mlofmnKzvvIzpu5jorqQgYOehruiupGBcbiAgICovXG4gIGNvbmZpcm1UZXh0Pzogc3RyaW5nO1xuICAvKipcbiAgICog5riF6Zmk5oyJ6ZKu5paH5pys77yM6buY6K6kIGDph43nva5gXG4gICAqL1xuICBjbGVhclRleHQ/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiDmmK/lkKblpJrpgInvvIzpu5jorqQgYHRydWVgXG4gICAqL1xuICBtdWx0aXBsZT86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDov5znqIvmlbDmja7nmoTov4fmu6Tml7blkI7nq6/nm7jlr7nlupTnmoRLRVnvvIzpu5jorqTkvb/nlKggYGluZGV4YCDlsZ7mgKdcbiAgICogYGtleTogJ25hbWUnYCDnu5PmnpwgYD9uYW1lPTEmcGk9MWBcbiAgICovXG4gIGtleT86IHN0cmluZyB8IG51bGw7XG4gIC8qKlxuICAgKiDov5znqIvmlbDmja7nmoTov4fmu6Tml7blkI7nq6/nm7jlr7nlupTnmoRWQUxVRVxuICAgKiAtIOm7mOiupOW9kyBgbXVsdGlwbGU6IHRydWVgIOaXtuS7peiLseaWh+mAl+WPt+aLvOaOpeeahOWtl+espuS4slxuICAgKiBAcmV0dXJuIOi/lOWbnuS4uiBPYmplY3Qg5a+56LGhXG4gICAqL1xuICByZU5hbWU/OiAobGlzdDogU1RDb2x1bW5GaWx0ZXJNZW51W10sIGNvbDogU1RDb2x1bW4pID0+IHt9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNUQ29sdW1uRmlsdGVyTWVudSB7XG4gIC8qKlxuICAgKiDmlofmnKxcbiAgICogLSDlvZMgYHR5cGU6ICdrZXl3b3JkJ2Ag5pe26KGo56S6IGBwbGFjZWhvbGRlcmBcbiAgICovXG4gIHRleHQ/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiDlgLxcbiAgICovXG4gIHZhbHVlPzogYW55O1xuICAvKipcbiAgICog5piv5ZCm6YCJ5LitXG4gICAqL1xuICBjaGVja2VkPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIOadg+mZkO+8jOetieWQjCBbQUNMQ2FuVHlwZV0oaHR0cHM6Ly9uZy1hbGFpbi5jb20vYWNsL2dldHRpbmctc3RhcnRlZC8jQUNMQ2FuVHlwZSkg5Y+C5pWw5YC8XG4gICAqL1xuICBhY2w/OiBhbnk7XG5cbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNUQ29sdW1uU2VsZWN0aW9uIHtcbiAgLyoqXG4gICAqIOmAieaLqemhueaYvuekuueahOaWh+Wtl1xuICAgKi9cbiAgdGV4dDogc3RyaW5nO1xuICAvKipcbiAgICog6YCJ5oup6aG554K55Ye75Zue6LCD77yM5YWB6K645a+55Y+C5pWwIGBkYXRhLmNoZWNrZWRgIOi/m+ihjOaTjeS9nFxuICAgKi9cbiAgc2VsZWN0OiAoZGF0YTogU1REYXRhW10pID0+IHZvaWQ7XG4gIC8qKiDmnYPpmZDvvIznrYnlkIwgYGNhbigpYCDlj4LmlbDlgLwgKi9cbiAgYWNsPzogYW55O1xufVxuXG4vKiog5b2TIGB0eXBlPXluYCDmnInmlYggKi9cbmV4cG9ydCBpbnRlcmZhY2UgU1RDb2x1bW5ZbiB7XG4gIC8qKlxuICAgKiDnnJ/lgLzmnaHku7bvvIzvvIjpu5jorqTvvJpgdHJ1ZWDvvIlcbiAgICovXG4gIHRydXRoPzogYW55O1xuICAvKipcbiAgICog5b6956ugIGB0cnVlYCDml7bmlofmnKzvvIzvvIjpu5jorqTvvJpg5pivYO+8iVxuICAgKi9cbiAgeWVzPzogc3RyaW5nO1xuICAvKipcbiAgICog5b6956ugIGBmYWxzZWAg5pe25paH5pys77yM77yI6buY6K6k77yaYOWQpmDvvIlcbiAgICovXG4gIG5vPzogc3RyaW5nO1xuICAvKipcbiAgICog5b6956ug5pi+56S66aOO5qC8XG4gICAqIC0gYGZ1bGxgIOWbvuagh+WSjOaWh+acrFxuICAgKiAtIGBpY29uYCDlm77moIdcbiAgICogLSBgdGV4dGAg5paH5pysXG4gICAqL1xuICBtb2RlPzogWU5Nb2RlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNUSWNvbiB7XG4gIC8qKiDlm77moIfnsbvlnosgKi9cbiAgdHlwZTogc3RyaW5nO1xuICAvKiog5Zu+5qCH5Li76aKY6aOO5qC877yM6buY6K6k77yaYG91dGxpbmVgICovXG4gIHRoZW1lPzogJ291dGxpbmUnIHwgJ3R3b3RvbmUnIHwgJ2ZpbGwnO1xuICAvKiog5piv5ZCm5pyJ5peL6L2s5Yqo55S777yM6buY6K6k77yaYGZhbHNlYCAqL1xuICBzcGluPzogYm9vbGVhbjtcbiAgLyoqIOS7hemAgueUqOWPjOiJsuWbvuagh++8jOiuvue9ruWPjOiJsuWbvuagh+eahOS4u+imgeminOiJsu+8jOS7heWvueW9k+WJjSBpY29uIOeUn+aViCAqL1xuICB0d29Ub25lQ29sb3I/OiBzdHJpbmc7XG4gIC8qKiDmjIflrprmnaXoh6ogSWNvbkZvbnQg55qE5Zu+5qCH57G75Z6LICovXG4gIGljb25mb250Pzogc3RyaW5nO1xufVxuXG4vKipcbiAqIOaMiemSrumFjee9rlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFNUQ29sdW1uQnV0dG9uIHtcbiAgLyoqXG4gICAqIOaWh+acrFxuICAgKi9cbiAgdGV4dD86IHN0cmluZyB8ICgocmVjb3JkOiBTVERhdGEsIGJ0bjogU1RDb2x1bW5CdXR0b24pID0+IHN0cmluZyk7XG4gIC8qKlxuICAgKiDmlofmnKwgaTE4blxuICAgKi9cbiAgaTE4bj86IHN0cmluZztcbiAgLyoqXG4gICAqIOWbvuagh1xuICAgKi9cbiAgaWNvbj86IHN0cmluZyB8IFNUSWNvbjtcbiAgLyoqXG4gICAqIOagvOW8j+WMluaWh+acrFxuICAgKiBAZGVwcmVjYXRlZCDkvb/nlKggYHRleHRgIOS7o+abv1xuICAgKiBAZGVwcmVjYXRlZCA5LjAuMC4gVGhpcyBpcyBkZXByZWNhdGVkIGFuZCBnb2luZyB0byBiZSByZW1vdmVkIGluIDkuMC4wLlxuICAgKi9cbiAgZm9ybWF0PzogKHJlY29yZDogU1REYXRhLCBidG46IFNUQ29sdW1uQnV0dG9uKSA9PiBzdHJpbmc7XG4gIC8qKlxuICAgKiDmjInpkq7nsbvlnotcbiAgICogLSBgbm9uZWAg5peg5Lu75L2V5LqS5YqoXG4gICAqIC0gYGRlbGAg5Yig6Zmk77yM6buY6K6k5byA5ZCvIGBwb3A6IHRydWVgXG4gICAqIC0gYG1vZGFsYCDlr7nor53moYbvvIzpnIDopoHmjIflrpogYGNvbXBvbmVudGAg5omN5Lya55Sf5pWIXG4gICAqIC0gYHN0YXRpY2Ag6Z2Z5oCB5a+56K+d5qGG77yM6ZyA6KaB5oyH5a6aIGBjb21wb25lbnRgIOaJjeS8mueUn+aViFxuICAgKiAtIGBkcmF3ZXJgIOaKveWxie+8jOmcgOimgeaMh+WumiBgY29tcG9uZW50YCDmiY3kvJrnlJ/mlYhcbiAgICogLSBgbGlua2Ag6ZO+5o6l77yM5b2TIGBjbGlja2Ag6L+U5Zue5a2X56ym5Liy5pe26Ieq5Yqo6LCD55SoIGBuYXZpZ2F0ZUJ5VXJsYCDlr7zoiKpcbiAgICogLSBgZGl2aWRlcmAg5YiG5Ymy57q/XG4gICAqL1xuICB0eXBlPzogJ25vbmUnIHwgJ2RlbCcgfCAnbW9kYWwnIHwgJ3N0YXRpYycgfCAnZHJhd2VyJyB8ICdsaW5rJyB8ICdkaXZpZGVyJztcbiAgLyoqXG4gICAqIOeCueWHu+Wbnuiwg1xuICAgKiAtIEZ1bmN0aW9uXG4gICAqICAtIGB0eXBlPW1vZGFsYCDlj6rkvJrlnKjlvZPmnInkvKDlm57lgLzml7bmiY3kvJrop6blj5Hlm57osINcbiAgICogLSByZWxvYWTvvJrph43mlrDliLfmlrDlvZPliY3pobVcbiAgICogLSBsb2Fk77ya6YeN5paw5Yqg6L295pWw5o2u77yM5bm26YeN572u6aG156CB5Li677yaYDFgXG4gICAqXG4gICAqIEB0b2RvIEJhZCBwYXJhbWV0ZXIgZGVzaWduXG4gICAqL1xuICBjbGljaz86ICdyZWxvYWQnIHwgJ2xvYWQnIHwgKChyZWNvcmQ6IFNURGF0YSwgbW9kYWw/OiBhbnksIGluc3RhbmNlPzogU1RDb21wb25lbnQpID0+IGFueSk7XG4gIC8qKlxuICAgKiDmsJTms6Hnoa7orqTmoYblj4LmlbDvvIzoi6UgYHN0cmluZ2Ag57G75Z6L6KGo56S65qCH6aKYXG4gICAqL1xuICBwb3A/OiBib29sZWFuIHwgc3RyaW5nIHwgU1RDb2x1bW5CdXR0b25Qb3A7XG4gIC8qKlxuICAgKiDmsJTms6Hnoa7orqTmoYblhoXlrrnvvIzpu5jorqQgYOehruiupOWIoOmZpOWQl++8n2BcbiAgICpcbiAgICogQGRlcHJlY2F0ZWQg5bey6L+H5pyf77yM6K+35L2/55SoIGBwb3AudGl0bGVgIOabv+S7o1xuICAgKiBAZGVwcmVjYXRlZCA5LjAuMC4gVGhpcyBpcyBkZXByZWNhdGVkIGFuZCBnb2luZyB0byBiZSByZW1vdmVkIGluIDkuMC4wLlxuICAgKi9cbiAgcG9wVGl0bGU/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiDlr7nor53moYblj4LmlbBcbiAgICovXG4gIG1vZGFsPzogU1RDb2x1bW5CdXR0b25Nb2RhbDtcbiAgLyoqXG4gICAqIOaKveWxieWPguaVsFxuICAgKi9cbiAgZHJhd2VyPzogU1RDb2x1bW5CdXR0b25EcmF3ZXI7XG4gIC8qKlxuICAgKiDkuIvmi4noj5zljZXvvIzlvZPlrZjlnKjml7bku6UgYGRyb3Bkb3duYCDlvaLlvI/muLLmn5NcbiAgICogLSDlj6rmlK/mjIHkuIDnuqdcbiAgICovXG4gIGNoaWxkcmVuPzogU1RDb2x1bW5CdXR0b25bXTtcbiAgLyoqXG4gICAqIOadg+mZkO+8jOetieWQjCBbQUNMQ2FuVHlwZV0oaHR0cHM6Ly9uZy1hbGFpbi5jb20vYWNsL2dldHRpbmctc3RhcnRlZC8jQUNMQ2FuVHlwZSkg5Y+C5pWw5YC8XG4gICAqL1xuICBhY2w/OiBhbnk7XG4gIC8qKlxuICAgKiBDb25kaXRpb25hbCBleHByZXNzaW9uXG4gICAqXG4gICAqIEB0b2RvIEJhZCBwYXJhbWV0ZXIgZGVzaWduXG4gICAqL1xuICBpaWY/OiAoaXRlbTogU1REYXRhLCBidG46IFNUQ29sdW1uQnV0dG9uLCBjb2x1bW46IFNUQ29sdW1uKSA9PiBib29sZWFuO1xuICAvKipcbiAgICogQ29uZGl0aW9uYWwgZXhwcmVzc2lvbiByZW5kZXJpbmcgYmVoYXZpb3IsIGNhbiBiZSBzZXQgdG8gYGhpZGVgIChkZWZhdWx0KSBvciBgZGlzYWJsZWRgXG4gICAqL1xuICBpaWZCZWhhdmlvcj86IElpZkJlaGF2aW9yVHlwZTtcblxuICB0b29sdGlwPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCA5LjAuMC4gVGhpcyBpcyBkZXByZWNhdGVkIGFuZCBnb2luZyB0byBiZSByZW1vdmVkIGluIDkuMC4wLlxuICAgKi9cbiAgY29tcG9uZW50PzogYW55O1xuXG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTVENvbHVtbkJ1dHRvbk9LIHtcbiAgcmVjb3JkOiBTVERhdGE7XG4gIC8qKlxuICAgKiBNb2RhbCBvciBkcmF3ZXIgcmV0dXJuIHZhbHVlIHdoZW4gdHJpZ2dlciBjb25maXJtLlxuICAgKi9cbiAgcmV0PzogYW55O1xuICBpbnN0YW5jZT86IFNUQ29tcG9uZW50O1xuICBldmVudDogRXZlbnQ7XG59XG5cbmV4cG9ydCB0eXBlIElpZkJlaGF2aW9yVHlwZSA9ICdoaWRlJyB8ICdkaXNhYmxlZCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1RDb2x1bW5CdXR0b25Nb2RhbCBleHRlbmRzIE1vZGFsSGVscGVyT3B0aW9ucyB7XG4gIC8qKlxuICAgKiDlr7nor53moYbnu4Tku7blr7nosaHvvIzliqHlv4XlnKggYGVudHJ5Q29tcG9uZW50c2Ag5rOo5YaMXG4gICAqL1xuICBjb21wb25lbnQ/OiBhbnk7XG4gIC8qKlxuICAgKiDlr7nor53moYblj4LmlbBcbiAgICovXG4gIHBhcmFtcz86IChyZWNvcmQ6IFNURGF0YSkgPT4ge307XG4gIC8qKlxuICAgKiDlr7nor53moYbnm67moIfnu4Tku7bnmoTmjqXmlLblj4LmlbDlkI3vvIzpu5jorqTvvJpgcmVjb3JkYFxuICAgKi9cbiAgcGFyYW1zTmFtZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTVENvbHVtbkJ1dHRvbk1vZGFsQ29uZmlnIHtcbiAgLyoqXG4gICAqIOaMh+WumuaooeaAgeahhuebruagh+e7hOS7tueahOaOpeaUtuWPguaVsOWQje+8jOm7mOiupO+8mmByZWNvcmRgXG4gICAqL1xuICBwYXJhbXNOYW1lPzogc3RyaW5nO1xuICAvKiog5aSn5bCP77yb5L6L5aaC77yabGfjgIE2MDDvvIzpu5jorqTvvJpgbGdgICovXG4gIHNpemU/OiAnc20nIHwgJ21kJyB8ICdsZycgfCAneGwnIHwgJycgfCBudW1iZXI7XG4gIC8qKiDlr7nor53moYYgW01vZGFsT3B0aW9uc0ZvclNlcnZpY2VdKGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL2NvbXBvbmVudHMvbW9kYWwvbnotbW9kYWwudHlwZS50cykg5Y+C5pWwICovXG4gIG1vZGFsT3B0aW9ucz86IE1vZGFsT3B0aW9uc0ZvclNlcnZpY2U7XG4gIC8qKiDmmK/lkKbnsr7lh4bvvIjpu5jorqTvvJpgdHJ1ZWDvvInvvIzoi6Xov5Tlm57lgLzpnZ7nqbrlgLzvvIhgbnVsbGDmiJZgdW5kZWZpbmVkYO+8ieinhuS4uuaIkOWKn++8jOWQpuWImeinhuS4uumUmeivryAqL1xuICBleGFjdD86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1RDb2x1bW5CdXR0b25EcmF3ZXIgZXh0ZW5kcyBEcmF3ZXJIZWxwZXJPcHRpb25zIHtcbiAgLyoqXG4gICAqIOagh+mimFxuICAgKi9cbiAgdGl0bGU/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiDmir3lsYnnu4Tku7blr7nosaHvvIzliqHlv4XlnKggYGVudHJ5Q29tcG9uZW50c2Ag5rOo5YaMXG4gICAqL1xuICBjb21wb25lbnQ/OiBhbnk7XG4gIC8qKlxuICAgKiDmir3lsYnlj4LmlbBcbiAgICovXG4gIHBhcmFtcz86IChyZWNvcmQ6IFNURGF0YSkgPT4ge307XG4gIC8qKlxuICAgKiDmir3lsYnnm67moIfnu4Tku7bnmoTmjqXmlLblj4LmlbDlkI3vvIzpu5jorqTvvJpgcmVjb3JkYFxuICAgKi9cbiAgcGFyYW1zTmFtZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTVENvbHVtbkJ1dHRvbkRyYXdlckNvbmZpZyB7XG4gIC8qKlxuICAgKiDmir3lsYnnm67moIfnu4Tku7bnmoTmjqXmlLblj4LmlbDlkI3vvIzpu5jorqTvvJpgcmVjb3JkYFxuICAgKi9cbiAgcGFyYW1zTmFtZT86IHN0cmluZztcbiAgLyoqXG4gICAqIOWkp+Wwj++8m+S+i+Wmgu+8mmxn44CBNjAw77yM6buY6K6k77yaYG1kYFxuICAgKlxuICAgKiB8IOexu+WeiyB8IOm7mOiupOWkp+WwjyB8XG4gICAqIHwgLS0tIHwgLS0tLS0tIHxcbiAgICogfCBgc21gIHwgYDMwMGAgfFxuICAgKiB8IGBtZGAgfCBgNjAwYCB8XG4gICAqIHwgYGxnYCB8IGA5MDBgIHxcbiAgICogfCBgeGxgIHwgYDEyMDBgIHxcbiAgICpcbiAgICogPiDku6XkuIrlgLzvvIzlj6/pgJrov4fopobnm5bnm7jlupTnmoRMRVNT5Y+C5pWw6Ieq6KGM6LCD5pW0XG4gICAqL1xuICBzaXplPzogJ3NtJyB8ICdtZCcgfCAnbGcnIHwgJ3hsJyB8IG51bWJlcjtcbiAgLyoqXG4gICAqIOaYr+WQpuWMheWQq+W6lemDqOW3peWFt+adoe+8jOm7mOiupO+8mmB0cnVlYFxuICAgKi9cbiAgZm9vdGVyPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIOW6lemDqOW3peWFt+adoemrmOW6pu+8jOm7mOiupO+8mmA1NWBcbiAgICovXG4gIGZvb3RlckhlaWdodD86IG51bWJlcjtcbiAgLyoqIOaKveWxiSBbTnpEcmF3ZXJPcHRpb25zXShodHRwczovL25nLmFudC5kZXNpZ24vY29tcG9uZW50cy9kcmF3ZXIvemgjbnpkcmF3ZXJvcHRpb25zKSDlj4LmlbAgKi9cbiAgZHJhd2VyT3B0aW9ucz86IE56RHJhd2VyT3B0aW9ucztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTVENvbHVtbkJ1dHRvblBvcCB7XG4gIC8qKlxuICAgKiBUaXRsZSBvZiB0aGUgcG9wb3ZlciwgZGVmYXVsdDogYOehruiupOWIoOmZpOWQl++8n2BcbiAgICovXG4gIHRpdGxlPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBQb3BvdmVyIHRyaWdnZXIgbW9kZSwgZGVmYXVsdDogYGNsaWNrYFxuICAgKi9cbiAgdHJpZ2dlcj86ICdjbGljaycgfCAnZm9jdXMnIHwgJ2hvdmVyJztcblxuICAvKipcbiAgICogVGhlIHBvc2l0aW9uIG9mIHRoZSBwb3BvdmVyIHJlbGF0aXZlIHRvIHRoZSB0YXJnZXQsIGRlZmF1bHQ6IGB0b3BgXG4gICAqL1xuICBwbGFjZW1lbnQ/OlxuICB8ICd0b3AnXG4gIHwgJ2xlZnQnXG4gIHwgJ3JpZ2h0J1xuICB8ICdib3R0b20nXG4gIHwgJ3RvcExlZnQnXG4gIHwgJ3RvcFJpZ2h0J1xuICB8ICdib3R0b21MZWZ0J1xuICB8ICdib3R0b21SaWdodCdcbiAgfCAnbGVmdFRvcCdcbiAgfCAnbGVmdEJvdHRvbSdcbiAgfCAncmlnaHRUb3AnXG4gIHwgJ3JpZ2h0Qm90dG9tJztcblxuICAvKipcbiAgICogQ2xhc3MgbmFtZSBvZiB0aGUgcG9wb3ZlciBjYXJkXG4gICAqL1xuICBvdmVybGF5Q2xhc3NOYW1lPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBTdHlsZSBvZiB0aGUgcG9wb3ZlciBjYXJkXG4gICAqL1xuICBvdmVybGF5U3R5bGU/OiB7fTtcblxuICAvKipcbiAgICogVGV4dCBvZiB0aGUgQ2FuY2VsIGJ1dHRvblxuICAgKi9cbiAgY2FuY2VsVGV4dD86IHN0cmluZztcblxuICAvKipcbiAgICogVGV4dCBvZiB0aGUgQ29uZmlybSBidXR0b25cbiAgICovXG4gIG9rVGV4dD86IHN0cmluZztcblxuICAvKipcbiAgICogQnV0dG9uIGB0eXBlYCBvZiB0aGUgQ29uZmlybSBidXR0b25cbiAgICovXG4gIG9rVHlwZT86ICdwcmltYXJ5JyB8ICdnaG9zdCcgfCAnZGFzaGVkJyB8ICdkYW5nZXInIHwgJ2RlZmF1bHQnO1xuXG4gIC8qKlxuICAgKiBDdXN0b21pemUgaWNvbiBvZiBjb25maXJtYXRpb25cbiAgICovXG4gIGljb24/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdG8gZGlyZWN0bHkgZW1pdCBgb25Db25maXJtYCB3aXRob3V0IHNob3dpbmcgUG9wY29uZmlybSwgZGVmYXVsdDogYCgpID0+IGZhbHNlYFxuICAgKi9cbiAgY29uZGl0aW9uPzogKGl0ZW06IFNURGF0YSkgPT4gYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTVFJlcVJlTmFtZVR5cGUge1xuICBwaT86IHN0cmluZztcbiAgcHM/OiBzdHJpbmc7XG4gIHNraXA/OiBzdHJpbmc7XG4gIGxpbWl0Pzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNUUmVzUmVOYW1lVHlwZSB7XG4gIHRvdGFsPzogc3RyaW5nIHwgc3RyaW5nW107XG4gIGxpc3Q/OiBzdHJpbmcgfCBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTVEV4cG9ydE9wdGlvbnMge1xuICAvKiogQGlnbm9yZSBpbnRlcm5hbCBwcm9wZXJ0eSAqL1xuICBfZD86IGFueVtdO1xuICAvKiogQGlnbm9yZSBpbnRlcm5hbCBwcm9wZXJ0eSAqL1xuICBfYz86IFNUQ29sdW1uW107XG4gIC8qKiDlt6XkvZzmuqXlkI0gKi9cbiAgc2hlZXRuYW1lPzogc3RyaW5nO1xuICAvKiog5paH5Lu25ZCNICovXG4gIGZpbGVuYW1lPzogc3RyaW5nO1xuICAvKiogdHJpZ2dlcnMgd2hlbiBzYXZlYXMgKi9cbiAgY2FsbGJhY2s/OiAod2I6IGFueSkgPT4gdm9pZDtcbn1cblxuLyoqXG4gKiDljZXmjpLluo/op4TliJlcbiAqIC0g6Iul5LiN5oyH5a6a77yM5YiZ6L+U5Zue77yaYGNvbHVtbk5hbWU9YXNjZW5kfGRlc2NlbmRgXG4gKiAtIOiLpeaMh+Wumu+8jOWImei/lOWbnu+8mmBzb3J0PWNvbHVtbk5hbWUuKGFzY2VuZHxkZXNjZW5kKWBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTVFNpbmdsZVNvcnQge1xuICAvKiog6K+35rGC5Y+C5pWw5ZCN77yM6buY6K6k77yaYHNvcnRgICovXG4gIGtleT86IHN0cmluZztcbiAgLyoqIOWIl+WQjeS4jueKtuaAgemXtOWIhumalOespu+8jOm7mOiupO+8mmAuYCAqL1xuICBuYW1lU2VwYXJhdG9yPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIOWkmuaOkuW6j+ebuOWQjOaOkuW6jyBrZXkg5pe25ZCI5bm26KeE5YiZXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU1RNdWx0aVNvcnQge1xuICAvKiog6K+35rGC5Y+C5pWw5ZCN77yM6buY6K6k77yaYHNvcnRgICovXG4gIGtleT86IHN0cmluZztcbiAgLyoqIOS4jeWQjOWxnuaAp+mXtOWIhumalOespu+8jOm7mOiupO+8mmAtYCAqL1xuICBzZXBhcmF0b3I/OiBzdHJpbmc7XG4gIC8qKiDliJflkI3kuI7nirbmgIHpl7TliIbpmpTnrKbvvIzpu5jorqTvvJpgLmAgKi9cbiAgbmFtZVNlcGFyYXRvcj86IHN0cmluZztcbiAgLyoqXG4gICAqIOaYr+WQpuWFqOWxgOWkmuaOkuW6j+aooeW8j++8jOm7mOiupO+8mmB0cnVlYFxuICAgKiAtIGB0cnVlYCDooajnpLrmiYDmnIkgYHN0YCDpu5jorqTkuLrlpJrmjpLluo9cbiAgICogLSBgZmFsc2VgIOihqOekuumcgOimgeS4uuavj+S4qiBgc3RgIOa3u+WKoCBgbXVsdGlTb3J0YCDmiY3kvJrop4bkuLrlpJrmjpLluo/mqKHlvI9cbiAgICovXG4gIGdsb2JhbD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDmmK/lkKbkv53mjIHnqbrlgLznmoTplK7lkI3vvIzpu5jorqTvvJpgdHJ1ZWBcbiAgICogLSBgdHJ1ZWAg6KGo56S65LiN566h5piv5ZCm5pyJ5o6S5bqP6YO95Lya5Y+R6YCBIGBrZXlgIOmUruWQjVxuICAgKiAtIGBmYWxzZWAg6KGo56S65peg5o6S5bqP5Yqo5L2c5pe25LiN5Lya5Y+R6YCBIGBrZXlgIOmUruWQjVxuICAgKi9cbiAga2VlcEVtcHR5S2V5PzogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiDlvr3moIfkv6Hmga9cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTVENvbHVtbkJhZGdlIHtcbiAgW2tleTogbnVtYmVyXTogU1RDb2x1bW5CYWRnZVZhbHVlO1xuICBba2V5OiBzdHJpbmddOiBTVENvbHVtbkJhZGdlVmFsdWU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1RDb2x1bW5CYWRnZVZhbHVlIHtcbiAgLyoqXG4gICAqIOaWh+acrFxuICAgKi9cbiAgdGV4dD86IHN0cmluZztcbiAgLyoqXG4gICAqIOW+veagh+minOiJsuWAvFxuICAgKi9cbiAgY29sb3I/OiAnc3VjY2VzcycgfCAncHJvY2Vzc2luZycgfCAnZGVmYXVsdCcgfCAnZXJyb3InIHwgJ3dhcm5pbmcnO1xufVxuXG4vKipcbiAqIOagh+etvuS/oeaBr1xuICovXG5leHBvcnQgaW50ZXJmYWNlIFNUQ29sdW1uVGFnIHtcbiAgW2tleTogbnVtYmVyXTogU1RDb2x1bW5UYWdWYWx1ZTtcbiAgW2tleTogc3RyaW5nXTogU1RDb2x1bW5UYWdWYWx1ZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTVENvbHVtblRhZ1ZhbHVlIHtcbiAgLyoqXG4gICAqIOaWh+acrFxuICAgKi9cbiAgdGV4dD86IHN0cmluZztcbiAgLyoqXG4gICAqIOminOiJsuWAvO+8jOaUr+aMgemihOiuvuWSjOiJsuWAvFxuICAgKiAtIOmihOiuvu+8mmdlZWtibHVlLGJsdWUscHVycGxlLHN1Y2Nlc3MscmVkLHZvbGNhbm8sb3JhbmdlLGdvbGQsbGltZSxncmVlbixjeWFuXG4gICAqIC0g6Imy5YC877yaI2Y1MCwjZmYwXG4gICAqL1xuICBjb2xvcj86ICdnZWVrYmx1ZScgfCAnYmx1ZScgfCAncHVycGxlJyB8ICdzdWNjZXNzJyB8ICdyZWQnIHwgJ3ZvbGNhbm8nIHwgJ29yYW5nZScgfCAnZ29sZCcgfCAnbGltZScgfCAnZ3JlZW4nIHwgJ2N5YW4nIHwgc3RyaW5nO1xufVxuXG5leHBvcnQgdHlwZSBTVENoYW5nZVR5cGUgPSAnbG9hZGVkJyB8ICdwaScgfCAncHMnIHwgJ2NoZWNrYm94JyB8ICdyYWRpbycgfCAnc29ydCcgfCAnZmlsdGVyJyB8ICdjbGljaycgfCAnZGJsQ2xpY2snIHwgJ2V4cGFuZCc7XG5cbi8qKlxuICog5Zue6LCD5pWw5o2uXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU1RDaGFuZ2Uge1xuICAvKipcbiAgICog5Zue6LCD57G75Z6LXG4gICAqL1xuICB0eXBlOiBTVENoYW5nZVR5cGU7XG4gIC8qKlxuICAgKiDlvZPliY3pobXnoIFcbiAgICovXG4gIHBpOiBudW1iZXI7XG4gIC8qKlxuICAgKiDmr4/pobXmlbDph49cbiAgICovXG4gIHBzOiBudW1iZXI7XG4gIC8qKlxuICAgKiDmlbDmja7mgLvph49cbiAgICovXG4gIHRvdGFsOiBudW1iZXI7XG4gIC8qKlxuICAgKiBgbG9hZGVkYCDlj4LmlbBcbiAgICovXG4gIGxvYWRlZD86IFNURGF0YVtdO1xuICAvKipcbiAgICogYGNoZWNrYm94YCDlj4LmlbBcbiAgICovXG4gIGNoZWNrYm94PzogU1REYXRhW107XG4gIC8qKlxuICAgKiBgcmFkaW9gIOWPguaVsFxuICAgKi9cbiAgcmFkaW8/OiBTVERhdGE7XG4gIC8qKlxuICAgKiDmjpLluo/lj4LmlbBcbiAgICovXG4gIHNvcnQ/OiBTVENoYW5nZVNvcnQ7XG4gIC8qKlxuICAgKiDov4fmu6Tlj4LmlbBcbiAgICovXG4gIGZpbHRlcj86IFNUQ29sdW1uO1xuICAvKipcbiAgICog6KGM54K55Ye75Y+C5pWwXG4gICAqL1xuICBjbGljaz86IFNUQ2hhbmdlUm93Q2xpY2s7XG4gIC8qKlxuICAgKiDooYzlj4zlh7vlj4LmlbBcbiAgICovXG4gIGRibENsaWNrPzogU1RDaGFuZ2VSb3dDbGljaztcbiAgLyoqXG4gICAqIGBleHBhbmRgIOWPguaVsFxuICAgKi9cbiAgZXhwYW5kPzogU1REYXRhO1xufVxuXG4vKiog6KGM5Y2V5Ye75Y+C5pWwICovXG5leHBvcnQgaW50ZXJmYWNlIFNUQ2hhbmdlU29ydCB7XG4gIHZhbHVlPzogJ2FzY2VuZCcgfCAnZGVzY2VuZCc7XG4gIG1hcD86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG4gIGNvbHVtbj86IFNUQ29sdW1uO1xufVxuXG4vKiog6KGM5Y2V5Ye75Y+C5pWwICovXG5leHBvcnQgaW50ZXJmYWNlIFNUQ2hhbmdlUm93Q2xpY2sge1xuICBlPzogRXZlbnQ7XG4gIGl0ZW0/OiBTVERhdGE7XG4gIGluZGV4PzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNURXJyb3Ige1xuICB0eXBlPzogJ3JlcSc7XG4gIGVycm9yPzogYW55O1xufVxuXG5leHBvcnQgdHlwZSBTVFJvd0NsYXNzTmFtZSA9IChyZWNvcmQ6IFNURGF0YSwgaW5kZXg6IG51bWJlcikgPT4gc3RyaW5nO1xuIl19