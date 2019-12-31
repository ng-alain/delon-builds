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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuaW50ZXJmYWNlcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hYmMvdGFibGUvIiwic291cmNlcyI6WyJ0YWJsZS5pbnRlcmZhY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBTUEsaUNBYUM7Ozs7Ozs7O0lBUEMsMkJBQTRCOzs7Ozs7O0lBTTVCLHFDQUFxQzs7Ozs7QUFHdkMsMENBUUM7OztJQVBDLGtDQUFZOztJQUNaLGtDQUFZOztJQUNaLHVDQUFxQjs7Ozs7SUFJckIsMENBQXFCOzs7OztBQUd2QiwyQkFtQ0M7Ozs7Ozs7O0lBN0JDLHFCQUF1Qjs7Ozs7O0lBS3ZCLHVCQUFhOzs7OztJQUViLHVCQUFnQjs7Ozs7SUFFaEIscUJBQVc7Ozs7O0lBRVgsd0JBQWM7Ozs7OztJQUtkLHVCQUF5Qjs7Ozs7SUFJekIsMEJBQW9COzs7OztJQUlwQix5QkFBbUI7Ozs7O0lBSW5CLHdCQUFpRTs7Ozs7QUFHbkUsc0NBZ0JDOzs7SUFmQyxnQ0FBVzs7SUFDWCxtQ0FJTTs7SUFDTixrQ0FJTTs7SUFDTixtQ0FBeUM7O0lBQ3pDLDBDQUF5Qjs7SUFDekIsd0NBQXdEOztJQUN4RCwyQ0FBMEI7Ozs7O0FBRzVCLG1DQUdDOzs7Ozs7SUFEQyw4QkFBZ0I7Ozs7O0FBR2xCLDJCQVVDOzs7Ozs7O0lBTEMsdUJBQXlCOzs7OztJQUl6Qix3QkFBc0Q7Ozs7O0FBR3hELDRCQXlEQzs7Ozs7Ozs7SUFuREMsdUJBQWdCOzs7OztJQUloQiw2QkFBc0I7Ozs7O0lBSXRCLDBCQUFxQzs7Ozs7SUFJckMsMkJBQXdDOzs7OztJQUl4QyxzQkFBZTs7Ozs7SUFJZiwwQkFBbUI7Ozs7O0lBSW5CLDJCQUFxQjs7Ozs7SUFJckIsaUNBQTBCOzs7Ozs7Ozs7O0lBUzFCLHVCQUF5Qjs7Ozs7O0lBS3pCLDRCQUFxQjs7Ozs7SUFJckIsdUJBQWdCOzs7OztJQUloQiw2QkFBcUI7Ozs7OztBQU12Qiw0QkFtQkM7Ozs7OztJQWZDLHlCQUFrQjs7Ozs7SUFJbEIsMEJBQW1COzs7OztJQUluQix3QkFBaUI7Ozs7O0lBSWpCLDRCQUFxQjs7Ozs7OztBQVF2Qiw4QkE0SkM7Ozs7OztJQXhKQyx1QkFBYTs7Ozs7SUFJYix5QkFBK0I7Ozs7OztJQU0vQix3QkFBYzs7Ozs7Ozs7SUFPZCx5QkFBaUM7Ozs7Ozs7Ozs7Ozs7Ozs7SUFlakMsd0JBQThHOzs7OztJQUk5Ryx5QkFBd0Q7Ozs7O0lBSXhELDJCQUEyQjs7Ozs7Ozs7O0lBUTNCLDBCQUFnQjs7Ozs7Ozs7O0lBUWhCLCtCQUFxQjs7Ozs7OztJQU1yQix5QkFBd0I7Ozs7Ozs7SUFNeEIsd0JBQW9DOzs7OztJQUlwQywwQkFBd0I7Ozs7O0lBSXhCLDBCQUFnRTs7Ozs7SUFJaEUsOEJBQWlDOzs7Ozs7Ozs7SUFRakMsNkJBQW1COzs7OztJQUluQiwyQkFBaUI7Ozs7O0lBSWpCLGdDQUFzQjs7Ozs7SUFJdEIsOEJBQW9COzs7OztJQUlwQixzQkFBZ0I7Ozs7O0lBSWhCLDRCQUFtQjs7Ozs7SUFJbkIsdUJBQVU7Ozs7O0lBRVYsMkJBQWlCOzs7Ozs7OztJQU9qQix5QkFBeUI7Ozs7O0lBSXpCLHlCQUE2Qjs7Ozs7SUFJN0IsdUJBQXlCOzs7Ozs7O0lBTXpCLDJCQUEwRTs7Ozs7OztJQU0xRSx1QkFBa0M7Ozs7O0lBS2xDLCtCQUFnRDs7Ozs7SUFHaEQseUJBQWtCOzs7Ozs7QUFLcEIsbUNBb0JDOzs7Ozs7SUFoQkMsNkJBQWM7Ozs7O0lBS2QsNkJBQWM7Ozs7O0lBS2QsaUNBQWtCOzs7OztJQUtsQixxQ0FBc0I7Ozs7O0FBT3hCLG1DQVdDOzs7SUFWQyw2QkFBMEM7Ozs7O0lBSTFDLCtCQUFnQjs7Ozs7O0lBS2hCLGlDQUFtQjs7Ozs7QUFHckIsMENBR0M7Ozs7QUFFRCx5Q0FHQzs7O0lBRkMsb0NBQWM7O0lBQ2QsbUNBQWM7Ozs7O0FBR2hCLGtDQXNCQzs7Ozs7O0lBbEJDLCtCQUFzQzs7Ozs7O0lBS3RDLCtCQUFvRDs7Ozs7OztJQU1wRCwyQkFBb0I7Ozs7Ozs7SUFNcEIsOEJBQStDOzs7OztBQUdqRCwrQkFLQzs7Ozs7O0lBREMsNEJBQWtCOzs7Ozs7QUFHcEIsb0NBaURDOzs7Ozs7OztJQTNDQyw4QkFBNkI7Ozs7OztJQUs3QiwrQkFBNkI7Ozs7O0lBSTdCLDRCQUFzRTs7Ozs7SUFJdEUsaUNBQWtCOzs7Ozs7O0lBTWxCLDhCQUF1Qjs7Ozs7SUFJdkIscUNBQXFCOzs7OztJQUlyQixtQ0FBbUI7Ozs7O0lBSW5CLGtDQUFtQjs7Ozs7O0lBS25CLDZCQUFvQjs7Ozs7OztJQU1wQixnQ0FBMkQ7Ozs7O0FBRzdELHdDQW9CQzs7Ozs7OztJQWZDLGtDQUFjOzs7OztJQUlkLG1DQUFZOzs7OztJQUlaLHFDQUFrQjs7Ozs7SUFJbEIsaUNBQVU7Ozs7OztBQUtaLHVDQVdDOzs7Ozs7SUFQQyxpQ0FBYTs7Ozs7SUFJYixtQ0FBaUM7Ozs7O0lBRWpDLGdDQUFVOzs7Ozs7QUFJWixnQ0FvQkM7Ozs7OztJQWhCQywyQkFBWTs7Ozs7SUFJWix5QkFBYTs7Ozs7SUFJYix3QkFBWTs7Ozs7Ozs7SUFPWiwwQkFBYzs7Ozs7QUFHaEIsNEJBV0M7Ozs7OztJQVRDLHNCQUFhOzs7OztJQUViLHVCQUF1Qzs7Ozs7SUFFdkMsc0JBQWU7Ozs7O0lBRWYsOEJBQXNCOzs7OztJQUV0QiwwQkFBa0I7Ozs7OztBQU1wQixvQ0F1RkM7Ozs7OztJQW5GQyw4QkFBa0U7Ozs7O0lBSWxFLDhCQUFjOzs7OztJQUlkLDhCQUF1Qjs7Ozs7O0lBTXZCLGdDQUF5RDs7Ozs7Ozs7Ozs7O0lBV3pELDhCQUEyRTs7Ozs7Ozs7Ozs7SUFVM0UsK0JBQTJGOzs7OztJQUkzRiw2QkFBMkM7Ozs7Ozs7SUFPM0Msa0NBQWtCOzs7OztJQUlsQiwrQkFBNEI7Ozs7O0lBSTVCLGdDQUE4Qjs7Ozs7O0lBSzlCLGtDQUE0Qjs7Ozs7SUFJNUIsNkJBQVU7Ozs7Ozs7SUFNViw2QkFBdUU7Ozs7O0lBSXZFLHFDQUE4Qjs7SUFFOUIsaUNBQWlCOzs7OztJQUtqQixtQ0FBZ0I7Ozs7OztBQUtsQixzQ0FRQzs7O0lBUEMsa0NBQWU7Ozs7O0lBSWYsK0JBQVU7O0lBQ1Ysb0NBQXVCOztJQUN2QixpQ0FBYTs7Ozs7QUFLZix5Q0FhQzs7Ozs7O0lBVEMsd0NBQWdCOzs7OztJQUloQixxQ0FBZ0M7Ozs7O0lBSWhDLHlDQUFvQjs7Ozs7QUFHdEIsK0NBV0M7Ozs7OztJQVBDLCtDQUFvQjs7Ozs7SUFFcEIseUNBQStDOzs7OztJQUUvQyxpREFBc0M7Ozs7O0lBRXRDLDBDQUFnQjs7Ozs7QUFHbEIsMENBaUJDOzs7Ozs7SUFiQyxxQ0FBZTs7Ozs7SUFJZix5Q0FBZ0I7Ozs7O0lBSWhCLHNDQUFnQzs7Ozs7SUFJaEMsMENBQW9COzs7OztBQUd0QixnREE0QkM7Ozs7OztJQXhCQyxnREFBb0I7Ozs7Ozs7Ozs7Ozs7O0lBYXBCLDBDQUEwQzs7Ozs7SUFJMUMsNENBQWlCOzs7OztJQUlqQixrREFBc0I7Ozs7O0lBRXRCLG1EQUFnQzs7Ozs7QUFHbEMsdUNBOERDOzs7Ozs7SUExREMsa0NBQWU7Ozs7O0lBS2Ysb0NBQXNDOzs7OztJQUt0QyxzQ0FZa0I7Ozs7O0lBS2xCLDZDQUEwQjs7Ozs7SUFLMUIseUNBQWtCOzs7OztJQUtsQix1Q0FBb0I7Ozs7O0lBS3BCLG1DQUFnQjs7Ozs7SUFLaEIsbUNBQStEOzs7OztJQUsvRCxpQ0FBYzs7Ozs7SUFLZCxzQ0FBc0M7Ozs7O0FBR3hDLHFDQUtDOzs7SUFKQyw2QkFBWTs7SUFDWiw2QkFBWTs7SUFDWiwrQkFBYzs7SUFDZCxnQ0FBZTs7Ozs7QUFHakIscUNBR0M7OztJQUZDLGdDQUEwQjs7SUFDMUIsK0JBQXlCOzs7OztBQUczQixxQ0FXQzs7Ozs7O0lBVEMsNkJBQVc7Ozs7O0lBRVgsNkJBQWdCOzs7OztJQUVoQixvQ0FBbUI7Ozs7O0lBRW5CLG1DQUFrQjs7Ozs7SUFFbEIsbUNBQTZCOzs7Ozs7OztBQVEvQixrQ0FLQzs7Ozs7O0lBSEMsMkJBQWE7Ozs7O0lBRWIscUNBQXVCOzs7Ozs7QUFNekIsaUNBbUJDOzs7Ozs7SUFqQkMsMEJBQWE7Ozs7O0lBRWIsZ0NBQW1COzs7OztJQUVuQixvQ0FBdUI7Ozs7Ozs7SUFNdkIsNkJBQWlCOzs7Ozs7O0lBTWpCLG1DQUF1Qjs7Ozs7O0FBTXpCLG1DQUdDOzs7O0FBRUQsd0NBU0M7Ozs7OztJQUxDLGtDQUFjOzs7OztJQUlkLG1DQUFtRTs7Ozs7O0FBTXJFLGlDQUdDOzs7O0FBRUQsc0NBV0M7Ozs7OztJQVBDLGdDQUFjOzs7Ozs7O0lBTWQsaUNBQWdJOzs7Ozs7QUFRbEksOEJBaURDOzs7Ozs7SUE3Q0Msd0JBQW1COzs7OztJQUluQixzQkFBVzs7Ozs7SUFJWCxzQkFBVzs7Ozs7SUFJWCx5QkFBYzs7Ozs7SUFJZCwwQkFBa0I7Ozs7O0lBSWxCLDRCQUFvQjs7Ozs7SUFJcEIseUJBQWU7Ozs7O0lBSWYsd0JBQW9COzs7OztJQUlwQiwwQkFBa0I7Ozs7O0lBSWxCLHlCQUF5Qjs7Ozs7SUFJekIsNEJBQTRCOzs7OztJQUk1QiwwQkFBZ0I7Ozs7OztBQUlsQixrQ0FJQzs7O0lBSEMsNkJBQTZCOztJQUM3QiwyQkFBZ0M7O0lBQ2hDLDhCQUFrQjs7Ozs7O0FBSXBCLHNDQUlDOzs7SUFIQyw2QkFBVTs7SUFDVixnQ0FBYzs7SUFDZCxpQ0FBZTs7Ozs7QUFHakIsNkJBR0M7OztJQUZDLHVCQUFhOztJQUNiLHdCQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cEhlYWRlcnMsIEh0dHBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBEcmF3ZXJIZWxwZXJPcHRpb25zLCBNb2RhbEhlbHBlck9wdGlvbnMsIFlOTW9kZSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5pbXBvcnQgeyBOekRyYXdlck9wdGlvbnMgfSBmcm9tICduZy16b3Jyby1hbnRkL2RyYXdlcic7XG5pbXBvcnQgeyBNb2RhbE9wdGlvbnNGb3JTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9tb2RhbCc7XG5pbXBvcnQgeyBTVENvbXBvbmVudCB9IGZyb20gJy4vdGFibGUuY29tcG9uZW50JztcblxuZXhwb3J0IGludGVyZmFjZSBTVFdpZHRoTW9kZSB7XG4gIC8qKlxuICAgKiDlrr3luqbnsbvlnotcbiAgICogLSBgZGVmYXVsdGAg6buY6K6k6KGM5Li6XG4gICAqIC0gYHN0cmljdGAg5Lil5qC85qih5byP77yM5Y2z5by65Yi25oyJIGB3aWR0aGAg5oyH5a6a55qE5a695bqm5ZGI546w77yM5bm25qC55o2uIGBzdHJpY3RCZWhhdmlvcmAg57G75Z6L5aSE55CGXG4gICAqL1xuICB0eXBlPzogJ3N0cmljdCcgfCAnZGVmYXVsdCc7XG4gIC8qKlxuICAgKiDkuKXmoLzmqKHlvI/nmoTlpITnkIbooYzkuLpcbiAgICogLSBgd3JhcGAg5by65Yi25o2i6KGMXG4gICAqIC0gYHRydW5jYXRlYCDmiKrnn61cbiAgICovXG4gIHN0cmljdEJlaGF2aW9yPzogJ3dyYXAnIHwgJ3RydW5jYXRlJztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTVFJlc2V0Q29sdW1uc09wdGlvbiB7XG4gIHBpPzogbnVtYmVyO1xuICBwcz86IG51bWJlcjtcbiAgY29sdW1ucz86IFNUQ29sdW1uW107XG4gIC8qKlxuICAgKiBXaGV0aGVyIHRvIHRyaWdnZXIgYSBkYXRhIGxvYWQsIGRlZmF1bHQ6IGB0cnVlYFxuICAgKi9cbiAgZW1pdFJlbG9hZD86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1RSZXEge1xuICAvKipcbiAgICog5YiG6aG157G75Z6L77yM6buY6K6k77yaYHBhZ2VgXG4gICAqIC0gYHBhZ2VgIOS9v+eUqCBgcGlg77yMYHBzYCDnu4TlkIhcbiAgICogLSBgc2tpcGAg5L2/55SoIGBza2lwYO+8jGBsaW1pdGAg57uE5ZCIXG4gICAqL1xuICB0eXBlPzogJ3BhZ2UnIHwgJ3NraXAnO1xuICAvKipcbiAgICog6aKd5aSW6K+35rGC5Y+C5pWw77yM6buY6K6k6Ieq5Yqo6ZmE5YqgIGBwaWDjgIFgcHNgIOiHs1VSTFxuICAgKiAtIGB7IHN0YXR1czogJ25ldycgfWAgPT4gYHVybD9waT0xJnBzPTEwJnN0YXR1cz1uZXdgXG4gICAqL1xuICBwYXJhbXM/OiBhbnk7XG4gIC8qKiDor7fmsYLmlrnms5XvvIzpu5jorqTvvJpgR0VUYCAqL1xuICBtZXRob2Q/OiBzdHJpbmc7XG4gIC8qKiDor7fmsYLkvZMgYGJvZHlgICovXG4gIGJvZHk/OiBhbnk7XG4gIC8qKiDor7fmsYLkvZMgYEhlYWRlcmAgKi9cbiAgaGVhZGVycz86IGFueTtcbiAgLyoqXG4gICAqIOmHjeWRveWQjeWPguaVsCBgcGlg44CBYHBzYO+8jOm7mOiupO+8mmB7IHBpOiAncGknLCBwczogJ3BzJyB9YFxuICAgKiAtIGB7IHBpOiAnUGFnZScgfWAgPT4gYHBpYCDkvJrooqvmm7/mjaLmiJAgUGFnZVxuICAgKi9cbiAgcmVOYW1lPzogU1RSZXFSZU5hbWVUeXBlO1xuICAvKipcbiAgICog5piv5ZCm5bCG6K+35rGC5omA5pyJ5Y+C5pWw5pWw5o2u6YO95pS+5YWlIGBib2R5YCDlvZPkuK3vvIhgdXJsYCDlnLDlnYDmnKzouqvlj4LmlbDpmaTlpJbvvInvvIzku4XlvZMgYG1ldGhvZDogJ1BPU1QnYCDml7bmnInmlYjvvIzpu5jorqTvvJpgZmFsc2VgXG4gICAqL1xuICBhbGxJbkJvZHk/OiBib29sZWFuO1xuICAvKipcbiAgICog5piv5ZCm5bu26L+f5Yqg6L295pWw5o2u77yM5Y2z5riy5p+T57uT5p2f5ZCO5LiN5Lya5Li75Yqo5Y+R6LW36K+35rGC77yM6buY6K6k77yaYGZhbHNlYFxuICAgKi9cbiAgbGF6eUxvYWQ/OiBib29sZWFuO1xuICAvKipcbiAgICog6K+35rGC5YmN5pWw5o2u5aSE55CGXG4gICAqL1xuICBwcm9jZXNzPzogKHJlcXVlc3RPcHRpb25zOiBTVFJlcXVlc3RPcHRpb25zKSA9PiBTVFJlcXVlc3RPcHRpb25zO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNUUmVxdWVzdE9wdGlvbnMge1xuICBib2R5PzogYW55O1xuICBoZWFkZXJzPzpcbiAgICB8IEh0dHBIZWFkZXJzXG4gICAgfCB7XG4gICAgICAgIFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xuICAgICAgfTtcbiAgcGFyYW1zPzpcbiAgICB8IEh0dHBQYXJhbXNcbiAgICB8IHtcbiAgICAgICAgW3BhcmFtOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcbiAgICAgIH07XG4gIG9ic2VydmU/OiAnYm9keScgfCAnZXZlbnRzJyB8ICdyZXNwb25zZSc7XG4gIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcbiAgcmVzcG9uc2VUeXBlPzogJ2FycmF5YnVmZmVyJyB8ICdibG9iJyB8ICdqc29uJyB8ICd0ZXh0JztcbiAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTVExvYWRPcHRpb25zIHtcbiAgLyoqIOaYr+WQpuWQiOW5tu+8jOm7mOiupO+8mmBmYWxzZWAgKi9cbiAgbWVyZ2U/OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNUUmVzIHtcbiAgLyoqXG4gICAqIOmHjeWRveWQjei/lOWbnuWPguaVsCBgdG90YWxg44CBYGxpc3RgXG4gICAqIC0gYHsgdG90YWw6ICdUb3RhbCcgfWAgPT4gVG90YWwg5Lya6KKr5b2T5L2cIGB0b3RhbGBcbiAgICovXG4gIHJlTmFtZT86IFNUUmVzUmVOYW1lVHlwZTtcbiAgLyoqXG4gICAqIOaVsOaNrumihOWkhOeQhlxuICAgKi9cbiAgcHJvY2Vzcz86IChkYXRhOiBTVERhdGFbXSwgcmF3RGF0YT86IGFueSkgPT4gU1REYXRhW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1RQYWdlIHtcbiAgLyoqXG4gICAqIOWJjeerr+WIhumhte+8jOW9kyBgZGF0YWAg5Li6YGFueVtdYCDmiJYgYE9ic2VydmFibGU8YW55W10+YCDmnInmlYjvvIzpu5jorqTvvJpgdHJ1ZWBcbiAgICogLSBgdHJ1ZWAg55SxIGBzdGAg5qC55o2uIGBkYXRhYCDplb/luqblj5fmjqfliIbpobXvvIzljIXmi6zvvJrmjpLluo/jgIHov4fmu6TnrYlcbiAgICogLSBgZmFsc2VgIOeUseeUqOaIt+mAmui/hyBgdG90YWxgIOWSjCBgZGF0YWAg5Y+C5pWw5Y+X5o6n5YiG6aG177yM5bm257u05oqkIGAoY2hhbmdlKWAg5b2T5YiG6aG15Y+Y5pu05pe26YeN5paw5Yqg6L295pWw5o2uXG4gICAqL1xuICBmcm9udD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDlkI7nq6/liIbpobXmmK/lkKbph4fnlKhgMGDln7rntKLlvJXvvIzlj6rlnKhgZGF0YWDnsbvlnovkuLpgc3RyaW5nYOaXtuacieaViO+8jOm7mOiupO+8mmBmYWxzZWBcbiAgICovXG4gIHplcm9JbmRleGVkPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIOaMh+WumuWIhumhteaYvuekuueahOS9jee9ru+8jOm7mOiupO+8mmBib3R0b21gXG4gICAqL1xuICBwb3NpdGlvbj86ICd0b3AnIHwgJ2JvdHRvbScgfCAnYm90aCc7XG4gIC8qKlxuICAgKiDmjIflrprliIbpobXliIbpobXmlrnlkJHvvIzpu5jorqTvvJpgcmlnaHRgXG4gICAqL1xuICBwbGFjZW1lbnQ/OiAnbGVmdCcgfCAnY2VudGVyJyB8ICdyaWdodCc7XG4gIC8qKlxuICAgKiDmmK/lkKbmmL7npLrliIbpobXlmajvvIzpu5jorqTvvJpgdHJ1ZWBcbiAgICovXG4gIHNob3c/OiBib29sZWFuO1xuICAvKipcbiAgICog5piv5ZCm5pi+56S65YiG6aG15Zmo5Lit5pS55Y+Y6aG15pWw77yM6buY6K6k77yaYGZhbHNlYFxuICAgKi9cbiAgc2hvd1NpemU/OiBib29sZWFuO1xuICAvKipcbiAgICog5YiG6aG15Zmo5Lit5q+P6aG15pi+56S65p2h55uu5pWw5LiL5ouJ5qGG5YC877yM6buY6K6k77yaYFsxMCwgMjAsIDMwLCA0MCwgNTBdYFxuICAgKi9cbiAgcGFnZVNpemVzPzogbnVtYmVyW107XG4gIC8qKlxuICAgKiDmmK/lkKbmmL7npLrliIbpobXlmajkuK3lv6vpgJ/ot7PovazvvIzpu5jorqTvvJpgZmFsc2VgXG4gICAqL1xuICBzaG93UXVpY2tKdW1wZXI/OiBib29sZWFuO1xuICAvKipcbiAgICog5piv5ZCm5pi+56S65oC75pWw5o2u6YePXG4gICAqIC0gYGJvb2xlYW5gIOexu+Wei+aYvuekuuS4juWQpu+8jOm7mOiupOaooeadv++8mmDlhbEge3t0b3RhbH19IOadoWBcbiAgICogLSBgc3RyaW5nYCDoh6rlrprkuYnmqKHmnb/vvIzmqKHmnb/lj5jph4/vvJpcbiAgICogIC0gYHt7dG90YWx9fWAg6KGo56S65pWw5o2u5oC76YePXG4gICAqICAtIGB7e3JhbmdlWzBdfX1gIOihqOekuuW9k+WJjemhteW8gOWni+aVsOmHj+WAvFxuICAgKiAgLSBge3tyYW5nZVsxXX19YCDooajnpLrlvZPliY3pobXnu5PmnZ/mlbDph4/lgLxcbiAgICovXG4gIHRvdGFsPzogc3RyaW5nIHwgYm9vbGVhbjtcbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIDkuMC4wLiBUaGlzIGlzIGRlcHJlY2F0ZWQgYW5kIGdvaW5nIHRvIGJlIHJlbW92ZWQgaW4gOS4wLjAuXG4gICAqIOaVsOaNruWPmOabtOWQjuaYr+WQpuS/neeVmeWcqOaVsOaNruWPmOabtOWJjeeahOmhteegge+8jOm7mOiupO+8mmB0cnVlYFxuICAgKi9cbiAgaW5kZXhSZXNldD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDliIfmjaLliIbpobXml7bov5Tlm57pobbpg6jvvIzpu5jorqTvvJpgdHJ1ZWBcbiAgICovXG4gIHRvVG9wPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIOi/lOWbnumhtumDqOWBj+enu+WAvO+8jOm7mOiupO+8mmAxMDBgXG4gICAqL1xuICB0b1RvcE9mZnNldD86IG51bWJlcjtcbn1cblxuLyoqXG4gKiDmlbDmja7mupBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTVERhdGEge1xuICAvKipcbiAgICog6YCJ5oup5qGG5oiW5Y2V6YCJ5qGG54q25oCB5YC8XG4gICAqL1xuICBjaGVja2VkPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIOmAieaLqeahhuaIluWNlemAieahhiBgZGlzYWJsZWRgIOWAvFxuICAgKi9cbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xuICAvKipcbiAgICog5piv5ZCm5bGV5byA54q25oCBXG4gICAqL1xuICBleHBhbmQ/OiBib29sZWFuO1xuICAvKipcbiAgICog5piv5ZCm5pi+56S65bGV5byA5oyJ6ZKuXG4gICAqL1xuICBzaG93RXhwYW5kPzogYm9vbGVhbjtcblxuICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbi8qKlxuICog5YiX5o+P6L+wXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU1RDb2x1bW4ge1xuICAvKipcbiAgICog55So5LqO5a6a5LmJ5pWw5o2u5rqQ5Li76ZSu77yM5L6L5aaC77yaYFNUU3RhdGlzdGljYWxgXG4gICAqL1xuICBrZXk/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiDliJfmoIfpophcbiAgICovXG4gIHRpdGxlPzogc3RyaW5nIHwgU1RDb2x1bW5UaXRsZTtcbiAgLyoqXG4gICAqIOWIl+agh+mimCBpMThuXG4gICAqIEBkZXByZWNhdGVkIOS9v+eUqCBgdGl0bGU6IHsgaTE4bjogJ3ZhbHVlJyB9YCDku6Pmm79cbiAgICogQGRlcHJlY2F0ZWQgOS4wLjAuIFRoaXMgaXMgZGVwcmVjYXRlZCBhbmQgZ29pbmcgdG8gYmUgcmVtb3ZlZCBpbiA5LjAuMC5cbiAgICovXG4gIGkxOG4/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiDliJfmlbDmja7lnKjmlbDmja7pobnkuK3lr7nlupTnmoQga2V577yM5pSv5oyBIGBhLmIuY2Ag55qE5bWM5aWX5YaZ5rOV77yM5L6L5aaC77yaXG4gICAqIC0gYGlkYFxuICAgKiAtIGBwcmljZS5tYXJrZXRgXG4gICAqIC0gYFsgJ3ByaWNlJywgJ21hcmtldCcgXWBcbiAgICovXG4gIGluZGV4Pzogc3RyaW5nIHwgc3RyaW5nW10gfCBudWxsO1xuICAvKipcbiAgICog57G75Z6LXG4gICAqIC0gYG5vYCDooYzlj7fvvIzorqHnrpfop4TliJnvvJpgaW5kZXggKyBub0luZGV4YFxuICAgKiAtIGBjaGVja2JveGAg5aSa6YCJXG4gICAqIC0gYHJhZGlvYCDljZXpgIlcbiAgICogLSBgbGlua2Ag6ZO+5o6l77yM5Yqh5b+F5oyH5a6aIGBjbGlja2BcbiAgICogLSBgYmFkZ2VgIFvlvr3moIddKGh0dHBzOi8vbmcuYW50LmRlc2lnbi9jb21wb25lbnRzL2JhZGdlL3poKe+8jOWKoeW/heaMh+WumiBgYmFkZ2VgIOWPguaVsOmFjee9ruW+veagh+WvueW6lOWAvFxuICAgKiAtIGB0YWdgIFvmoIfnrb5dKGh0dHBzOi8vbmcuYW50LmRlc2lnbi9jb21wb25lbnRzL3RhZy96aCnvvIzliqHlv4XmjIflrpogYHRhZ2Ag5Y+C5pWw6YWN572u5qCH562+5a+55bqU5YC8XG4gICAqIC0gYGltZ2Ag5Zu+54mH5LiU5bGF5LitKOiLpSBgY2xhc3NOYW1lYCDlrZjlnKjliJnkvJjlhYgpXG4gICAqIC0gYG51bWJlcmAg5pWw5a2X5LiU5bGF5Y+zKOiLpSBgY2xhc3NOYW1lYCDlrZjlnKjliJnkvJjlhYgpXG4gICAqIC0gYGN1cnJlbmN5YCDotKfluIHkuJTlsYXlj7Mo6IulIGBjbGFzc05hbWVgIOWtmOWcqOWImeS8mOWFiClcbiAgICogLSBgZGF0ZWAg5pel5pyf5qC85byP5LiU5bGF5LitKOiLpSBgY2xhc3NOYW1lYCDlrZjlnKjliJnkvJjlhYgp77yM5L2/55SoIGBkYXRlRm9ybWF0YCDoh6rlrprkuYnmoLzlvI9cbiAgICogLSBgeW5gIOWwhmBib29sZWFuYOexu+Wei+W+veeroOWMliBbZG9jdW1lbnRdKGh0dHBzOi8vbmctYWxhaW4uY29tL2RvY3MvZGF0YS1yZW5kZXIjeW4pXG4gICAqL1xuICB0eXBlPzogJ2NoZWNrYm94JyB8ICdsaW5rJyB8ICdiYWRnZScgfCAndGFnJyB8ICdyYWRpbycgfCAnaW1nJyB8ICdjdXJyZW5jeScgfCAnbnVtYmVyJyB8ICdkYXRlJyB8ICd5bicgfCAnbm8nO1xuICAvKipcbiAgICog6ZO+5o6l5Zue6LCD77yM6Iul6L+U5Zue5LiA5Liq5a2X56ym5Liy6KGo56S65a+86IiqVVJM5Lya6Ieq5Yqo6Kem5Y+RIGByb3V0ZXIubmF2aWdhdGVCeVVybGBcbiAgICovXG4gIGNsaWNrPzogKHJlY29yZDogU1REYXRhLCBpbnN0YW5jZT86IFNUQ29tcG9uZW50KSA9PiBhbnk7XG4gIC8qKlxuICAgKiDmjInpkq7nu4RcbiAgICovXG4gIGJ1dHRvbnM/OiBTVENvbHVtbkJ1dHRvbltdO1xuICAvKipcbiAgICog6Ieq5a6a5LmJ5riy5p+TSURcbiAgICogQGV4YW1wbGVcbiAgICogPG5nLXRlbXBsYXRlIHN0LXJvdz1cImN1c3RvbVwiIGxldC1pdGVtIGxldC1pbmRleD1cImluZGV4XCIgbGV0LWNvbHVtbj1cImNvbHVtblwiPlxuICAgKiAge3sgYy50aXRsZSB9fVxuICAgKiA8L25nLXRlbXBsYXRlPlxuICAgKi9cbiAgcmVuZGVyPzogc3RyaW5nO1xuICAvKipcbiAgICog5qCH6aKY6Ieq5a6a5LmJ5riy5p+TSURcbiAgICogQGV4YW1wbGVcbiAgICogPG5nLXRlbXBsYXRlIHN0LXJvdz1cImN1c3RvbVwiIHR5cGU9XCJ0aXRsZVwiIGxldC1jPlxuICAgKiAge3sgaXRlbSB8IGpzb24gfX1cbiAgICogPC9uZy10ZW1wbGF0ZT5cbiAgICovXG4gIHJlbmRlclRpdGxlPzogc3RyaW5nO1xuICAvKipcbiAgICog5YiX5a6977yI5pWw5a2X5Z6L6KGo56S6IGBweGAg5YC877yJ77yM5L6L5aaC77yaYDEwMGDjgIFgMTAlYOOAgWAxMDBweGBcbiAgICpcbiAgICogKirms6jmhI/vvJoqKiDoi6Xlm7rlrprliJflv4XpobvmmK/mlbDlrZdcbiAgICovXG4gIHdpZHRoPzogc3RyaW5nIHwgbnVtYmVyO1xuICAvKipcbiAgICog5o6S5bqP6YWN572u6aG577yM6L+c56iL5pWw5o2u6YWN572uKirkvJjlhYgqKuinhOWIme+8mlxuICAgKiAtIGB0cnVlYCDooajnpLrlhYHorrjmjpLluo9cbiAgICogLSBgc3RyaW5nYCDooajnpLrov5znqIvmlbDmja7mjpLluo/nm7jlr7nlupQgYGtleWAg5YC8XG4gICAqL1xuICBzb3J0PzogdHJ1ZSB8IHN0cmluZyB8IFNUQ29sdW1uU29ydDtcbiAgLyoqXG4gICAqIOi/h+a7pOmFjee9rumhuVxuICAgKi9cbiAgZmlsdGVyPzogU1RDb2x1bW5GaWx0ZXI7XG4gIC8qKlxuICAgKiDmoLzlvI/ljJbliJflgLxcbiAgICovXG4gIGZvcm1hdD86IChpdGVtOiBTVERhdGEsIGNvbDogU1RDb2x1bW4sIGluZGV4OiBudW1iZXIpID0+IHN0cmluZztcbiAgLyoqXG4gICAqIOiHquWumuS5ieWFqC/lj43pgInpgInmi6npoblcbiAgICovXG4gIHNlbGVjdGlvbnM/OiBTVENvbHVtblNlbGVjdGlvbltdO1xuICAvKipcbiAgICog5YiXIGBjbGFzc2Ag5bGe5oCn5YC877yI5rOo77ya5peg6aG7IGAuYCDngrnvvInvvIzkvovlpoLvvJpcbiAgICogLSBgdGV4dC1jZW50ZXJgIOWxheS4rVxuICAgKiAtIGB0ZXh0LXJpZ2h0YCDlsYXlj7NcbiAgICogLSBgdGV4dC1zdWNjZXNzYCDmiJDlip/oibJcbiAgICogLSBgdGV4dC1kYW5nZXJgIOW8guW4uOiJslxuICAgKi9cbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xuICAvKipcbiAgICog5ZCI5bm25YiXXG4gICAqL1xuICBjb2xTcGFuPzogbnVtYmVyO1xuICAvKipcbiAgICog5pWw5a2X5qC85byP77yMYHR5cGU9bnVtYmVyYCDmnInmlYhcbiAgICovXG4gIG51bWJlckRpZ2l0cz86IHN0cmluZztcbiAgLyoqXG4gICAqIOaXpeacn+agvOW8j++8jGB0eXBlPWRhdGVgIOacieaViO+8jO+8iOm7mOiupO+8mmBZWVlZLU1NLUREIEhIOm1tYO+8iVxuICAgKi9cbiAgZGF0ZUZvcm1hdD86IHN0cmluZztcbiAgLyoqXG4gICAqIOW9kyBgdHlwZT15bmAg5pyJ5pWIXG4gICAqL1xuICB5bj86IFNUQ29sdW1uWW47XG4gIC8qKlxuICAgKiDmmK/lkKblhYHorrjlr7zlh7rvvIzpu5jorqQgYHRydWVgXG4gICAqL1xuICBleHBvcnRlZD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDmnYPpmZDvvIznrYnlkIwgW0FDTENhblR5cGVdKGh0dHBzOi8vbmctYWxhaW4uY29tL2FjbC9nZXR0aW5nLXN0YXJ0ZWQvI0FDTENhblR5cGUpIOWPguaVsOWAvFxuICAgKi9cbiAgYWNsPzogYW55O1xuICAvKiog5b2T5LiN5a2Y5Zyo5pWw5o2u5pe25Lul6buY6K6k5YC85pu/5LujICovXG4gIGRlZmF1bHQ/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiDlm7rlrprliY3lkI7liJfvvIzlvZPmjIflrprml7bliqHlv4XmjIflrpogYHdpZHRoYCDlkKbliJnop4bkuLrml6DmlYjvvIzmnInoi6XlubIgKirms6jmhI/vvJoqKiDpobnvvJpcbiAgICpcbiAgICogLSDoi6XliJflpLTkuI7lhoXlrrnkuI3lr7npvZDmiJblh7rnjrDliJfph43lpI3vvIzor7fmjIflrprliJfnmoTlrr3luqYgYHdpZHRoYFxuICAgKiAtIOW7uuiuruaMh+WumiBgc2Nyb2xsLnhgIOS4uuWkp+S6juihqOagvOWuveW6pueahOWbuuWumuWAvOaIlueZvuWIhuavlOOAguazqOaEj++8jOS4lOmdnuWbuuWumuWIl+WuveW6puS5i+WSjOS4jeimgei2hei/hyBgc2Nyb2xsLnhgXG4gICAqL1xuICBmaXhlZD86ICdsZWZ0JyB8ICdyaWdodCc7XG4gIC8qKlxuICAgKiDlvr3moIfphY3nva7poblcbiAgICovXG4gIGJhZGdlPzogU1RDb2x1bW5CYWRnZSB8IG51bGw7XG4gIC8qKlxuICAgKiDmoIfnrb7phY3nva7poblcbiAgICovXG4gIHRhZz86IFNUQ29sdW1uVGFnIHwgbnVsbDtcbiAgLyoqXG4gICAqIOihjOWPt+e0ouW8le+8jOm7mOiupO+8mmAxYFxuICAgKiAtIOiuoeeul+inhOWImeS4uu+8mmBpbmRleCArIG5vSW5kZXhgXG4gICAqIC0g5pSv5oyB6Ieq5a6a5LmJ5pa55rOVXG4gICAqL1xuICBub0luZGV4PzogbnVtYmVyIHwgKChpdGVtOiBTVERhdGEsIGNvbDogU1RDb2x1bW4sIGlkeDogbnVtYmVyKSA9PiBudW1iZXIpO1xuICAvKipcbiAgICog5p2h5Lu26KGo6L6+5byPXG4gICAqIC0g5LuF6LWL5YC8IGBjb2x1bW5zYCDml7bmiafooYzkuIDmrKFcbiAgICogLSDlj6/osIPnlKggYHJlc2V0Q29sdW1ucygpYCDlho3kuIDmrKHop6blj5FcbiAgICovXG4gIGlpZj86IChpdGVtOiBTVENvbHVtbikgPT4gYm9vbGVhbjtcblxuICAvKipcbiAgICog57uf6K6hXG4gICAqL1xuICBzdGF0aXN0aWNhbD86IFNUU3RhdGlzdGljYWxUeXBlIHwgU1RTdGF0aXN0aWNhbDtcblxuICAvKiogQGlnbm9yZSBpbnRlcm5hbCBwcm9wZXJ0eSAqL1xuICBfc29ydD86IFNUU29ydE1hcDtcblxuICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1RDb2x1bW5UaXRsZSB7XG4gIC8qKlxuICAgKiBUZXh0IG9mIGhlYWRlciwgY2FuIGJlIGNob29zZSBvbmUgb2YgYHRleHRgIG9yIGBpMThuYFxuICAgKi9cbiAgdGV4dD86IHN0cmluZztcblxuICAvKipcbiAgICogSTE4biBrZXkgb2YgaGVhZGVyLCBjYW4gYmUgY2hvb3NlIG9uZSBvZiBgdGV4dGAgb3IgYGkxOG5gXG4gICAqL1xuICBpMThuPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBPcHRpb25hbCBpbmZvcm1hdGlvbiBvZiBoZWFkZXJcbiAgICovXG4gIG9wdGlvbmFsPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBPcHRpb25hbCBoZWxwIG9mIGhlYWRlclxuICAgKi9cbiAgb3B0aW9uYWxIZWxwPzogc3RyaW5nO1xufVxuXG5leHBvcnQgdHlwZSBTVFN0YXRpc3RpY2FsVHlwZSA9ICdjb3VudCcgfCAnZGlzdGluY3RDb3VudCcgfCAnc3VtJyB8ICdhdmVyYWdlJyB8ICdtYXgnIHwgJ21pbic7XG5cbmV4cG9ydCB0eXBlIFNUU3RhdGlzdGljYWxGbiA9ICh2YWx1ZXM6IG51bWJlcltdLCBjb2w6IFNUQ29sdW1uLCBsaXN0OiBTVERhdGFbXSwgcmF3RGF0YT86IGFueSkgPT4gU1RTdGF0aXN0aWNhbFJlc3VsdDtcblxuZXhwb3J0IGludGVyZmFjZSBTVFN0YXRpc3RpY2FsIHtcbiAgdHlwZTogU1RTdGF0aXN0aWNhbFR5cGUgfCBTVFN0YXRpc3RpY2FsRm47XG4gIC8qKlxuICAgKiDkv53nlZnlsI/mlbDkvY3mlbDvvIzpu5jorqTvvJpgMmBcbiAgICovXG4gIGRpZ2l0cz86IG51bWJlcjtcbiAgLyoqXG4gICAqIOaYr+WQpumcgOimgei0p+W4geagvOW8j+WMlu+8jOm7mOiupOS7peS4i+aDheWGteS4uiBgdHJ1ZWBcbiAgICogLSBgdHlwZWAg5Li6IGBTVFN0YXRpc3RpY2FsRm5g44CBIGBzdW1g44CBYGF2ZXJhZ2Vg44CBYG1heGDjgIFgbWluYFxuICAgKi9cbiAgY3VycmVuY3k/OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNUU3RhdGlzdGljYWxSZXN1bHRzIHtcbiAgW2tleTogc3RyaW5nXTogU1RTdGF0aXN0aWNhbFJlc3VsdDtcbiAgW2luZGV4OiBudW1iZXJdOiBTVFN0YXRpc3RpY2FsUmVzdWx0O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNUU3RhdGlzdGljYWxSZXN1bHQge1xuICB2YWx1ZTogbnVtYmVyO1xuICB0ZXh0Pzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNUQ29sdW1uU29ydCB7XG4gIC8qKlxuICAgKiDmjpLluo/nmoTpu5jorqTlj5fmjqflsZ7mgKdcbiAgICovXG4gIGRlZmF1bHQ/OiAnYXNjZW5kJyB8ICdkZXNjZW5kJyB8IG51bGw7XG4gIC8qKlxuICAgKiDmnKzlnLDmlbDmja7nmoTmjpLluo/lh73mlbDvvIzkvb/nlKjkuIDkuKrlh73mlbAo5Y+C6ICDIFtBcnJheS5zb3J0XShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9BcnJheS9zb3J0KSDnmoQgY29tcGFyZUZ1bmN0aW9uKVxuICAgKiAtIGBudWxsYCDlv73nlaXmnKzlnLDmjpLluo/vvIzkvYbkv53mjIHmjpLluo/lip/og71cbiAgICovXG4gIGNvbXBhcmU/OiAoKGE6IFNURGF0YSwgYjogU1REYXRhKSA9PiBudW1iZXIpIHwgbnVsbDtcbiAgLyoqXG4gICAqIOi/nOeoi+aVsOaNrueahOaOkuW6j+aXtuWQjuerr+ebuOWvueW6lOeahEtFWe+8jOm7mOiupOS9v+eUqCBgaW5kZXhgIOWxnuaAp1xuICAgKiAtIOiLpSBgbXVsdGlTb3J0OiBmYWxzZWAg5pe277yaYGtleTogJ25hbWUnID0+ID9uYW1lPTEmcGk9MWBcbiAgICogLSDoi6UgYG11bHRpU29ydDogdHJ1ZWAg5YWB6K645aSa5Liq5o6S5bqPIGtleSDlrZjlnKjvvIzmiJbkvb/nlKggYFNUTXVsdGlTb3J0YCDmjIflrprlpJrliJfmjpLluo9rZXnlkIjlubbop4TliJlcbiAgICovXG4gIGtleT86IHN0cmluZyB8IG51bGw7XG4gIC8qKlxuICAgKiDov5znqIvmlbDmja7nmoTmjpLluo/ml7blkI7nq6/nm7jlr7nlupTnmoRWQUxVRVxuICAgKiAtIGB7IGFzY2VuZDogJzAnLCBkZXNjZW5kOiAnMScgfWAg57uT5p6cIGA/bmFtZT0xJnBpPTFgXG4gICAqIC0gYHsgYXNjZW5kOiAnYXNjJywgZGVzY2VuZDogJ2Rlc2MnIH1gIOe7k+aenCBgP25hbWU9ZGVzYyZwaT0xYFxuICAgKi9cbiAgcmVOYW1lPzogeyBhc2NlbmQ/OiBzdHJpbmc7IGRlc2NlbmQ/OiBzdHJpbmcgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTVFNvcnRNYXAgZXh0ZW5kcyBTVENvbHVtblNvcnQge1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG5cbiAgLyoqIOaYr+WQpuWQr+eUqOaOkuW6jyAqL1xuICBlbmFibGVkPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTVENvbHVtbkZpbHRlciB7XG4gIC8qKlxuICAgKiDmkJzntKLmlrnlvI9cbiAgICogLSBgZGVmdWFsdGAg6buY6K6k5b2i5byPXG4gICAqIC0gYGtleXdvcmRgIOaWh+acrOahhuW9ouW8j1xuICAgKi9cbiAgdHlwZT86ICdkZWZhdWx0JyB8ICdrZXl3b3JkJztcbiAgLyoqXG4gICAqIOihqOWktOeahOetm+mAieiPnOWNlemhue+8jOiHs+WwkeS4gOmhueaJjeS8mueUn+aViFxuICAgKiAtIOW9kyBgdHlwZT0na2V5d29yZCdgIOaXtuWPr+S4uuepulxuICAgKi9cbiAgbWVudXM/OiBTVENvbHVtbkZpbHRlck1lbnVbXTtcbiAgLyoqXG4gICAqIOacrOWcsOaVsOaNrueahOetm+mAieWHveaVsFxuICAgKi9cbiAgZm4/OiAoKGZpbHRlcjogU1RDb2x1bW5GaWx0ZXJNZW51LCByZWNvcmQ6IFNURGF0YSkgPT4gYm9vbGVhbikgfCBudWxsO1xuICAvKipcbiAgICog5qCH6K+G5pWw5o2u5piv5ZCm5bey6L+H5ruk77yM562b6YCJ5Zu+5qCH5Lya6auY5LquXG4gICAqL1xuICBkZWZhdWx0PzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIOiHquWumuS5iSBmaWx0ZXIg5Zu+5qCHXG4gICAqIC0g5b2TIGB0eXBlPSdkZWZhdWx0J2Ag6buY6K6kIGBmaWx0ZXJgXG4gICAqIC0g5b2TIGB0eXBlPSdrZXl3b3JkJ2Ag6buY6K6kIGBzZWFyY2hgXG4gICAqL1xuICBpY29uPzogc3RyaW5nIHwgU1RJY29uO1xuICAvKipcbiAgICog56Gu6K6k5oyJ6ZKu5paH5pys77yM6buY6K6kIGDnoa7orqRgXG4gICAqL1xuICBjb25maXJtVGV4dD86IHN0cmluZztcbiAgLyoqXG4gICAqIOa4hemZpOaMiemSruaWh+acrO+8jOm7mOiupCBg6YeN572uYFxuICAgKi9cbiAgY2xlYXJUZXh0Pzogc3RyaW5nO1xuICAvKipcbiAgICog5piv5ZCm5aSa6YCJ77yM6buY6K6kIGB0cnVlYFxuICAgKi9cbiAgbXVsdGlwbGU/OiBib29sZWFuO1xuICAvKipcbiAgICog6L+c56iL5pWw5o2u55qE6L+H5ruk5pe25ZCO56uv55u45a+55bqU55qES0VZ77yM6buY6K6k5L2/55SoIGBpbmRleGAg5bGe5oCnXG4gICAqIGBrZXk6ICduYW1lJ2Ag57uT5p6cIGA/bmFtZT0xJnBpPTFgXG4gICAqL1xuICBrZXk/OiBzdHJpbmcgfCBudWxsO1xuICAvKipcbiAgICog6L+c56iL5pWw5o2u55qE6L+H5ruk5pe25ZCO56uv55u45a+55bqU55qEVkFMVUVcbiAgICogLSDpu5jorqTlvZMgYG11bHRpcGxlOiB0cnVlYCDml7bku6Xoi7HmlofpgJflj7fmi7zmjqXnmoTlrZfnrKbkuLJcbiAgICogQHJldHVybiDov5Tlm57kuLogT2JqZWN0IOWvueixoVxuICAgKi9cbiAgcmVOYW1lPzogKGxpc3Q6IFNUQ29sdW1uRmlsdGVyTWVudVtdLCBjb2w6IFNUQ29sdW1uKSA9PiB7fTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTVENvbHVtbkZpbHRlck1lbnUge1xuICAvKipcbiAgICog5paH5pysXG4gICAqIC0g5b2TIGB0eXBlOiAna2V5d29yZCdgIOaXtuihqOekuiBgcGxhY2Vob2xkZXJgXG4gICAqL1xuICB0ZXh0Pzogc3RyaW5nO1xuICAvKipcbiAgICog5YC8XG4gICAqL1xuICB2YWx1ZT86IGFueTtcbiAgLyoqXG4gICAqIOaYr+WQpumAieS4rVxuICAgKi9cbiAgY2hlY2tlZD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDmnYPpmZDvvIznrYnlkIwgW0FDTENhblR5cGVdKGh0dHBzOi8vbmctYWxhaW4uY29tL2FjbC9nZXR0aW5nLXN0YXJ0ZWQvI0FDTENhblR5cGUpIOWPguaVsOWAvFxuICAgKi9cbiAgYWNsPzogYW55O1xuXG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTVENvbHVtblNlbGVjdGlvbiB7XG4gIC8qKlxuICAgKiDpgInmi6npobnmmL7npLrnmoTmloflrZdcbiAgICovXG4gIHRleHQ6IHN0cmluZztcbiAgLyoqXG4gICAqIOmAieaLqemhueeCueWHu+Wbnuiwg++8jOWFgeiuuOWvueWPguaVsCBgZGF0YS5jaGVja2VkYCDov5vooYzmk43kvZxcbiAgICovXG4gIHNlbGVjdDogKGRhdGE6IFNURGF0YVtdKSA9PiB2b2lkO1xuICAvKiog5p2D6ZmQ77yM562J5ZCMIGBjYW4oKWAg5Y+C5pWw5YC8ICovXG4gIGFjbD86IGFueTtcbn1cblxuLyoqIOW9kyBgdHlwZT15bmAg5pyJ5pWIICovXG5leHBvcnQgaW50ZXJmYWNlIFNUQ29sdW1uWW4ge1xuICAvKipcbiAgICog55yf5YC85p2h5Lu277yM77yI6buY6K6k77yaYHRydWVg77yJXG4gICAqL1xuICB0cnV0aD86IGFueTtcbiAgLyoqXG4gICAqIOW+veeroCBgdHJ1ZWAg5pe25paH5pys77yM77yI6buY6K6k77yaYOaYr2DvvIlcbiAgICovXG4gIHllcz86IHN0cmluZztcbiAgLyoqXG4gICAqIOW+veeroCBgZmFsc2VgIOaXtuaWh+acrO+8jO+8iOm7mOiupO+8mmDlkKZg77yJXG4gICAqL1xuICBubz86IHN0cmluZztcbiAgLyoqXG4gICAqIOW+veeroOaYvuekuumjjuagvFxuICAgKiAtIGBmdWxsYCDlm77moIflkozmlofmnKxcbiAgICogLSBgaWNvbmAg5Zu+5qCHXG4gICAqIC0gYHRleHRgIOaWh+acrFxuICAgKi9cbiAgbW9kZT86IFlOTW9kZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTVEljb24ge1xuICAvKiog5Zu+5qCH57G75Z6LICovXG4gIHR5cGU6IHN0cmluZztcbiAgLyoqIOWbvuagh+S4u+mimOmjjuagvO+8jOm7mOiupO+8mmBvdXRsaW5lYCAqL1xuICB0aGVtZT86ICdvdXRsaW5lJyB8ICd0d290b25lJyB8ICdmaWxsJztcbiAgLyoqIOaYr+WQpuacieaXi+i9rOWKqOeUu++8jOm7mOiupO+8mmBmYWxzZWAgKi9cbiAgc3Bpbj86IGJvb2xlYW47XG4gIC8qKiDku4XpgILnlKjlj4zoibLlm77moIfvvIzorr7nva7lj4zoibLlm77moIfnmoTkuLvopoHpopzoibLvvIzku4Xlr7nlvZPliY0gaWNvbiDnlJ/mlYggKi9cbiAgdHdvVG9uZUNvbG9yPzogc3RyaW5nO1xuICAvKiog5oyH5a6a5p2l6IeqIEljb25Gb250IOeahOWbvuagh+exu+WeiyAqL1xuICBpY29uZm9udD86IHN0cmluZztcbn1cblxuLyoqXG4gKiDmjInpkq7phY3nva5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTVENvbHVtbkJ1dHRvbiB7XG4gIC8qKlxuICAgKiDmlofmnKxcbiAgICovXG4gIHRleHQ/OiBzdHJpbmcgfCAoKHJlY29yZDogU1REYXRhLCBidG46IFNUQ29sdW1uQnV0dG9uKSA9PiBzdHJpbmcpO1xuICAvKipcbiAgICog5paH5pysIGkxOG5cbiAgICovXG4gIGkxOG4/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiDlm77moIdcbiAgICovXG4gIGljb24/OiBzdHJpbmcgfCBTVEljb247XG4gIC8qKlxuICAgKiDmoLzlvI/ljJbmlofmnKxcbiAgICogQGRlcHJlY2F0ZWQg5L2/55SoIGB0ZXh0YCDku6Pmm79cbiAgICogQGRlcHJlY2F0ZWQgOS4wLjAuIFRoaXMgaXMgZGVwcmVjYXRlZCBhbmQgZ29pbmcgdG8gYmUgcmVtb3ZlZCBpbiA5LjAuMC5cbiAgICovXG4gIGZvcm1hdD86IChyZWNvcmQ6IFNURGF0YSwgYnRuOiBTVENvbHVtbkJ1dHRvbikgPT4gc3RyaW5nO1xuICAvKipcbiAgICog5oyJ6ZKu57G75Z6LXG4gICAqIC0gYG5vbmVgIOaXoOS7u+S9leS6kuWKqFxuICAgKiAtIGBkZWxgIOWIoOmZpO+8jOm7mOiupOW8gOWQryBgcG9wOiB0cnVlYFxuICAgKiAtIGBtb2RhbGAg5a+56K+d5qGG77yM6ZyA6KaB5oyH5a6aIGBjb21wb25lbnRgIOaJjeS8mueUn+aViFxuICAgKiAtIGBzdGF0aWNgIOmdmeaAgeWvueivneahhu+8jOmcgOimgeaMh+WumiBgY29tcG9uZW50YCDmiY3kvJrnlJ/mlYhcbiAgICogLSBgZHJhd2VyYCDmir3lsYnvvIzpnIDopoHmjIflrpogYGNvbXBvbmVudGAg5omN5Lya55Sf5pWIXG4gICAqIC0gYGxpbmtgIOmTvuaOpe+8jOW9kyBgY2xpY2tgIOi/lOWbnuWtl+espuS4suaXtuiHquWKqOiwg+eUqCBgbmF2aWdhdGVCeVVybGAg5a+86IiqXG4gICAqIC0gYGRpdmlkZXJgIOWIhuWJsue6v1xuICAgKi9cbiAgdHlwZT86ICdub25lJyB8ICdkZWwnIHwgJ21vZGFsJyB8ICdzdGF0aWMnIHwgJ2RyYXdlcicgfCAnbGluaycgfCAnZGl2aWRlcic7XG4gIC8qKlxuICAgKiDngrnlh7vlm57osINcbiAgICogLSBGdW5jdGlvblxuICAgKiAgLSBgdHlwZT1tb2RhbGAg5Y+q5Lya5Zyo5b2T5pyJ5Lyg5Zue5YC85pe25omN5Lya6Kem5Y+R5Zue6LCDXG4gICAqIC0gcmVsb2Fk77ya6YeN5paw5Yi35paw5b2T5YmN6aG1XG4gICAqIC0gbG9hZO+8mumHjeaWsOWKoOi9veaVsOaNru+8jOW5tumHjee9rumhteeggeS4uu+8mmAxYFxuICAgKlxuICAgKiBAdG9kbyBCYWQgcGFyYW1ldGVyIGRlc2lnblxuICAgKi9cbiAgY2xpY2s/OiAncmVsb2FkJyB8ICdsb2FkJyB8ICgocmVjb3JkOiBTVERhdGEsIG1vZGFsPzogYW55LCBpbnN0YW5jZT86IFNUQ29tcG9uZW50KSA9PiBhbnkpO1xuICAvKipcbiAgICog5rCU5rOh56Gu6K6k5qGG5Y+C5pWw77yM6IulIGBzdHJpbmdgIOexu+Wei+ihqOekuuagh+mimFxuICAgKi9cbiAgcG9wPzogYm9vbGVhbiB8IHN0cmluZyB8IFNUQ29sdW1uQnV0dG9uUG9wO1xuICAvKipcbiAgICog5rCU5rOh56Gu6K6k5qGG5YaF5a6577yM6buY6K6kIGDnoa7orqTliKDpmaTlkJfvvJ9gXG4gICAqXG4gICAqIEBkZXByZWNhdGVkIOW3sui/h+acn++8jOivt+S9v+eUqCBgcG9wLnRpdGxlYCDmm7/ku6NcbiAgICogQGRlcHJlY2F0ZWQgOS4wLjAuIFRoaXMgaXMgZGVwcmVjYXRlZCBhbmQgZ29pbmcgdG8gYmUgcmVtb3ZlZCBpbiA5LjAuMC5cbiAgICovXG4gIHBvcFRpdGxlPzogc3RyaW5nO1xuICAvKipcbiAgICog5a+56K+d5qGG5Y+C5pWwXG4gICAqL1xuICBtb2RhbD86IFNUQ29sdW1uQnV0dG9uTW9kYWw7XG4gIC8qKlxuICAgKiDmir3lsYnlj4LmlbBcbiAgICovXG4gIGRyYXdlcj86IFNUQ29sdW1uQnV0dG9uRHJhd2VyO1xuICAvKipcbiAgICog5LiL5ouJ6I+c5Y2V77yM5b2T5a2Y5Zyo5pe25LulIGBkcm9wZG93bmAg5b2i5byP5riy5p+TXG4gICAqIC0g5Y+q5pSv5oyB5LiA57qnXG4gICAqL1xuICBjaGlsZHJlbj86IFNUQ29sdW1uQnV0dG9uW107XG4gIC8qKlxuICAgKiDmnYPpmZDvvIznrYnlkIwgW0FDTENhblR5cGVdKGh0dHBzOi8vbmctYWxhaW4uY29tL2FjbC9nZXR0aW5nLXN0YXJ0ZWQvI0FDTENhblR5cGUpIOWPguaVsOWAvFxuICAgKi9cbiAgYWNsPzogYW55O1xuICAvKipcbiAgICogQ29uZGl0aW9uYWwgZXhwcmVzc2lvblxuICAgKlxuICAgKiBAdG9kbyBCYWQgcGFyYW1ldGVyIGRlc2lnblxuICAgKi9cbiAgaWlmPzogKGl0ZW06IFNURGF0YSwgYnRuOiBTVENvbHVtbkJ1dHRvbiwgY29sdW1uOiBTVENvbHVtbikgPT4gYm9vbGVhbjtcbiAgLyoqXG4gICAqIENvbmRpdGlvbmFsIGV4cHJlc3Npb24gcmVuZGVyaW5nIGJlaGF2aW9yLCBjYW4gYmUgc2V0IHRvIGBoaWRlYCAoZGVmYXVsdCkgb3IgYGRpc2FibGVkYFxuICAgKi9cbiAgaWlmQmVoYXZpb3I/OiBJaWZCZWhhdmlvclR5cGU7XG5cbiAgdG9vbHRpcD86IHN0cmluZztcblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgOS4wLjAuIFRoaXMgaXMgZGVwcmVjYXRlZCBhbmQgZ29pbmcgdG8gYmUgcmVtb3ZlZCBpbiA5LjAuMC5cbiAgICovXG4gIGNvbXBvbmVudD86IGFueTtcblxuICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1RDb2x1bW5CdXR0b25PSyB7XG4gIHJlY29yZDogU1REYXRhO1xuICAvKipcbiAgICogTW9kYWwgb3IgZHJhd2VyIHJldHVybiB2YWx1ZSB3aGVuIHRyaWdnZXIgY29uZmlybS5cbiAgICovXG4gIHJldD86IGFueTtcbiAgaW5zdGFuY2U/OiBTVENvbXBvbmVudDtcbiAgZXZlbnQ6IEV2ZW50O1xufVxuXG5leHBvcnQgdHlwZSBJaWZCZWhhdmlvclR5cGUgPSAnaGlkZScgfCAnZGlzYWJsZWQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNUQ29sdW1uQnV0dG9uTW9kYWwgZXh0ZW5kcyBNb2RhbEhlbHBlck9wdGlvbnMge1xuICAvKipcbiAgICog5a+56K+d5qGG57uE5Lu25a+56LGh77yM5Yqh5b+F5ZyoIGBlbnRyeUNvbXBvbmVudHNgIOazqOWGjFxuICAgKi9cbiAgY29tcG9uZW50PzogYW55O1xuICAvKipcbiAgICog5a+56K+d5qGG5Y+C5pWwXG4gICAqL1xuICBwYXJhbXM/OiAocmVjb3JkOiBTVERhdGEpID0+IHt9O1xuICAvKipcbiAgICog5a+56K+d5qGG55uu5qCH57uE5Lu255qE5o6l5pS25Y+C5pWw5ZCN77yM6buY6K6k77yaYHJlY29yZGBcbiAgICovXG4gIHBhcmFtc05hbWU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1RDb2x1bW5CdXR0b25Nb2RhbENvbmZpZyB7XG4gIC8qKlxuICAgKiDmjIflrprmqKHmgIHmoYbnm67moIfnu4Tku7bnmoTmjqXmlLblj4LmlbDlkI3vvIzpu5jorqTvvJpgcmVjb3JkYFxuICAgKi9cbiAgcGFyYW1zTmFtZT86IHN0cmluZztcbiAgLyoqIOWkp+Wwj++8m+S+i+Wmgu+8mmxn44CBNjAw77yM6buY6K6k77yaYGxnYCAqL1xuICBzaXplPzogJ3NtJyB8ICdtZCcgfCAnbGcnIHwgJ3hsJyB8ICcnIHwgbnVtYmVyO1xuICAvKiog5a+56K+d5qGGIFtNb2RhbE9wdGlvbnNGb3JTZXJ2aWNlXShodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9jb21wb25lbnRzL21vZGFsL256LW1vZGFsLnR5cGUudHMpIOWPguaVsCAqL1xuICBtb2RhbE9wdGlvbnM/OiBNb2RhbE9wdGlvbnNGb3JTZXJ2aWNlO1xuICAvKiog5piv5ZCm57K+5YeG77yI6buY6K6k77yaYHRydWVg77yJ77yM6Iul6L+U5Zue5YC86Z2e56m65YC877yIYG51bGxg5oiWYHVuZGVmaW5lZGDvvInop4bkuLrmiJDlip/vvIzlkKbliJnop4bkuLrplJnor68gKi9cbiAgZXhhY3Q/OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNUQ29sdW1uQnV0dG9uRHJhd2VyIGV4dGVuZHMgRHJhd2VySGVscGVyT3B0aW9ucyB7XG4gIC8qKlxuICAgKiDmoIfpophcbiAgICovXG4gIHRpdGxlPzogc3RyaW5nO1xuICAvKipcbiAgICog5oq95bGJ57uE5Lu25a+56LGh77yM5Yqh5b+F5ZyoIGBlbnRyeUNvbXBvbmVudHNgIOazqOWGjFxuICAgKi9cbiAgY29tcG9uZW50PzogYW55O1xuICAvKipcbiAgICog5oq95bGJ5Y+C5pWwXG4gICAqL1xuICBwYXJhbXM/OiAocmVjb3JkOiBTVERhdGEpID0+IHt9O1xuICAvKipcbiAgICog5oq95bGJ55uu5qCH57uE5Lu255qE5o6l5pS25Y+C5pWw5ZCN77yM6buY6K6k77yaYHJlY29yZGBcbiAgICovXG4gIHBhcmFtc05hbWU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1RDb2x1bW5CdXR0b25EcmF3ZXJDb25maWcge1xuICAvKipcbiAgICog5oq95bGJ55uu5qCH57uE5Lu255qE5o6l5pS25Y+C5pWw5ZCN77yM6buY6K6k77yaYHJlY29yZGBcbiAgICovXG4gIHBhcmFtc05hbWU/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiDlpKflsI/vvJvkvovlpoLvvJpsZ+OAgTYwMO+8jOm7mOiupO+8mmBtZGBcbiAgICpcbiAgICogfCDnsbvlnosgfCDpu5jorqTlpKflsI8gfFxuICAgKiB8IC0tLSB8IC0tLS0tLSB8XG4gICAqIHwgYHNtYCB8IGAzMDBgIHxcbiAgICogfCBgbWRgIHwgYDYwMGAgfFxuICAgKiB8IGBsZ2AgfCBgOTAwYCB8XG4gICAqIHwgYHhsYCB8IGAxMjAwYCB8XG4gICAqXG4gICAqID4g5Lul5LiK5YC877yM5Y+v6YCa6L+H6KaG55uW55u45bqU55qETEVTU+WPguaVsOiHquihjOiwg+aVtFxuICAgKi9cbiAgc2l6ZT86ICdzbScgfCAnbWQnIHwgJ2xnJyB8ICd4bCcgfCBudW1iZXI7XG4gIC8qKlxuICAgKiDmmK/lkKbljIXlkKvlupXpg6jlt6XlhbfmnaHvvIzpu5jorqTvvJpgdHJ1ZWBcbiAgICovXG4gIGZvb3Rlcj86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDlupXpg6jlt6XlhbfmnaHpq5jluqbvvIzpu5jorqTvvJpgNTVgXG4gICAqL1xuICBmb290ZXJIZWlnaHQ/OiBudW1iZXI7XG4gIC8qKiDmir3lsYkgW056RHJhd2VyT3B0aW9uc10oaHR0cHM6Ly9uZy5hbnQuZGVzaWduL2NvbXBvbmVudHMvZHJhd2VyL3poI256ZHJhd2Vyb3B0aW9ucykg5Y+C5pWwICovXG4gIGRyYXdlck9wdGlvbnM/OiBOekRyYXdlck9wdGlvbnM7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1RDb2x1bW5CdXR0b25Qb3Age1xuICAvKipcbiAgICogVGl0bGUgb2YgdGhlIHBvcG92ZXIsIGRlZmF1bHQ6IGDnoa7orqTliKDpmaTlkJfvvJ9gXG4gICAqL1xuICB0aXRsZT86IHN0cmluZztcblxuICAvKipcbiAgICogUG9wb3ZlciB0cmlnZ2VyIG1vZGUsIGRlZmF1bHQ6IGBjbGlja2BcbiAgICovXG4gIHRyaWdnZXI/OiAnY2xpY2snIHwgJ2ZvY3VzJyB8ICdob3Zlcic7XG5cbiAgLyoqXG4gICAqIFRoZSBwb3NpdGlvbiBvZiB0aGUgcG9wb3ZlciByZWxhdGl2ZSB0byB0aGUgdGFyZ2V0LCBkZWZhdWx0OiBgdG9wYFxuICAgKi9cbiAgcGxhY2VtZW50PzpcbiAgICB8ICd0b3AnXG4gICAgfCAnbGVmdCdcbiAgICB8ICdyaWdodCdcbiAgICB8ICdib3R0b20nXG4gICAgfCAndG9wTGVmdCdcbiAgICB8ICd0b3BSaWdodCdcbiAgICB8ICdib3R0b21MZWZ0J1xuICAgIHwgJ2JvdHRvbVJpZ2h0J1xuICAgIHwgJ2xlZnRUb3AnXG4gICAgfCAnbGVmdEJvdHRvbSdcbiAgICB8ICdyaWdodFRvcCdcbiAgICB8ICdyaWdodEJvdHRvbSc7XG5cbiAgLyoqXG4gICAqIENsYXNzIG5hbWUgb2YgdGhlIHBvcG92ZXIgY2FyZFxuICAgKi9cbiAgb3ZlcmxheUNsYXNzTmFtZT86IHN0cmluZztcblxuICAvKipcbiAgICogU3R5bGUgb2YgdGhlIHBvcG92ZXIgY2FyZFxuICAgKi9cbiAgb3ZlcmxheVN0eWxlPzoge307XG5cbiAgLyoqXG4gICAqIFRleHQgb2YgdGhlIENhbmNlbCBidXR0b25cbiAgICovXG4gIGNhbmNlbFRleHQ/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRleHQgb2YgdGhlIENvbmZpcm0gYnV0dG9uXG4gICAqL1xuICBva1RleHQ/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEJ1dHRvbiBgdHlwZWAgb2YgdGhlIENvbmZpcm0gYnV0dG9uXG4gICAqL1xuICBva1R5cGU/OiAncHJpbWFyeScgfCAnZ2hvc3QnIHwgJ2Rhc2hlZCcgfCAnZGFuZ2VyJyB8ICdkZWZhdWx0JztcblxuICAvKipcbiAgICogQ3VzdG9taXplIGljb24gb2YgY29uZmlybWF0aW9uXG4gICAqL1xuICBpY29uPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRvIGRpcmVjdGx5IGVtaXQgYG9uQ29uZmlybWAgd2l0aG91dCBzaG93aW5nIFBvcGNvbmZpcm0sIGRlZmF1bHQ6IGAoKSA9PiBmYWxzZWBcbiAgICovXG4gIGNvbmRpdGlvbj86IChpdGVtOiBTVERhdGEpID0+IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1RSZXFSZU5hbWVUeXBlIHtcbiAgcGk/OiBzdHJpbmc7XG4gIHBzPzogc3RyaW5nO1xuICBza2lwPzogc3RyaW5nO1xuICBsaW1pdD86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTVFJlc1JlTmFtZVR5cGUge1xuICB0b3RhbD86IHN0cmluZyB8IHN0cmluZ1tdO1xuICBsaXN0Pzogc3RyaW5nIHwgc3RyaW5nW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1RFeHBvcnRPcHRpb25zIHtcbiAgLyoqIEBpZ25vcmUgaW50ZXJuYWwgcHJvcGVydHkgKi9cbiAgX2Q/OiBhbnlbXTtcbiAgLyoqIEBpZ25vcmUgaW50ZXJuYWwgcHJvcGVydHkgKi9cbiAgX2M/OiBTVENvbHVtbltdO1xuICAvKiog5bel5L2c5rql5ZCNICovXG4gIHNoZWV0bmFtZT86IHN0cmluZztcbiAgLyoqIOaWh+S7tuWQjSAqL1xuICBmaWxlbmFtZT86IHN0cmluZztcbiAgLyoqIHRyaWdnZXJzIHdoZW4gc2F2ZWFzICovXG4gIGNhbGxiYWNrPzogKHdiOiBhbnkpID0+IHZvaWQ7XG59XG5cbi8qKlxuICog5Y2V5o6S5bqP6KeE5YiZXG4gKiAtIOiLpeS4jeaMh+Wumu+8jOWImei/lOWbnu+8mmBjb2x1bW5OYW1lPWFzY2VuZHxkZXNjZW5kYFxuICogLSDoi6XmjIflrprvvIzliJnov5Tlm57vvJpgc29ydD1jb2x1bW5OYW1lLihhc2NlbmR8ZGVzY2VuZClgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU1RTaW5nbGVTb3J0IHtcbiAgLyoqIOivt+axguWPguaVsOWQje+8jOm7mOiupO+8mmBzb3J0YCAqL1xuICBrZXk/OiBzdHJpbmc7XG4gIC8qKiDliJflkI3kuI7nirbmgIHpl7TliIbpmpTnrKbvvIzpu5jorqTvvJpgLmAgKi9cbiAgbmFtZVNlcGFyYXRvcj86IHN0cmluZztcbn1cblxuLyoqXG4gKiDlpJrmjpLluo/nm7jlkIzmjpLluo8ga2V5IOaXtuWQiOW5tuinhOWImVxuICovXG5leHBvcnQgaW50ZXJmYWNlIFNUTXVsdGlTb3J0IHtcbiAgLyoqIOivt+axguWPguaVsOWQje+8jOm7mOiupO+8mmBzb3J0YCAqL1xuICBrZXk/OiBzdHJpbmc7XG4gIC8qKiDkuI3lkIzlsZ7mgKfpl7TliIbpmpTnrKbvvIzpu5jorqTvvJpgLWAgKi9cbiAgc2VwYXJhdG9yPzogc3RyaW5nO1xuICAvKiog5YiX5ZCN5LiO54q25oCB6Ze05YiG6ZqU56ym77yM6buY6K6k77yaYC5gICovXG4gIG5hbWVTZXBhcmF0b3I/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiDmmK/lkKblhajlsYDlpJrmjpLluo/mqKHlvI/vvIzpu5jorqTvvJpgdHJ1ZWBcbiAgICogLSBgdHJ1ZWAg6KGo56S65omA5pyJIGBzdGAg6buY6K6k5Li65aSa5o6S5bqPXG4gICAqIC0gYGZhbHNlYCDooajnpLrpnIDopoHkuLrmr4/kuKogYHN0YCDmt7vliqAgYG11bHRpU29ydGAg5omN5Lya6KeG5Li65aSa5o6S5bqP5qih5byPXG4gICAqL1xuICBnbG9iYWw/OiBib29sZWFuO1xuICAvKipcbiAgICog5piv5ZCm5L+d5oyB56m65YC855qE6ZSu5ZCN77yM6buY6K6k77yaYHRydWVgXG4gICAqIC0gYHRydWVgIOihqOekuuS4jeeuoeaYr+WQpuacieaOkuW6j+mDveS8muWPkemAgSBga2V5YCDplK7lkI1cbiAgICogLSBgZmFsc2VgIOihqOekuuaXoOaOkuW6j+WKqOS9nOaXtuS4jeS8muWPkemAgSBga2V5YCDplK7lkI1cbiAgICovXG4gIGtlZXBFbXB0eUtleT86IGJvb2xlYW47XG59XG5cbi8qKlxuICog5b695qCH5L+h5oGvXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU1RDb2x1bW5CYWRnZSB7XG4gIFtrZXk6IG51bWJlcl06IFNUQ29sdW1uQmFkZ2VWYWx1ZTtcbiAgW2tleTogc3RyaW5nXTogU1RDb2x1bW5CYWRnZVZhbHVlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNUQ29sdW1uQmFkZ2VWYWx1ZSB7XG4gIC8qKlxuICAgKiDmlofmnKxcbiAgICovXG4gIHRleHQ/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiDlvr3moIfpopzoibLlgLxcbiAgICovXG4gIGNvbG9yPzogJ3N1Y2Nlc3MnIHwgJ3Byb2Nlc3NpbmcnIHwgJ2RlZmF1bHQnIHwgJ2Vycm9yJyB8ICd3YXJuaW5nJztcbn1cblxuLyoqXG4gKiDmoIfnrb7kv6Hmga9cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTVENvbHVtblRhZyB7XG4gIFtrZXk6IG51bWJlcl06IFNUQ29sdW1uVGFnVmFsdWU7XG4gIFtrZXk6IHN0cmluZ106IFNUQ29sdW1uVGFnVmFsdWU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1RDb2x1bW5UYWdWYWx1ZSB7XG4gIC8qKlxuICAgKiDmlofmnKxcbiAgICovXG4gIHRleHQ/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiDpopzoibLlgLzvvIzmlK/mjIHpooTorr7lkozoibLlgLxcbiAgICogLSDpooTorr7vvJpnZWVrYmx1ZSxibHVlLHB1cnBsZSxzdWNjZXNzLHJlZCx2b2xjYW5vLG9yYW5nZSxnb2xkLGxpbWUsZ3JlZW4sY3lhblxuICAgKiAtIOiJsuWAvO+8miNmNTAsI2ZmMFxuICAgKi9cbiAgY29sb3I/OiAnZ2Vla2JsdWUnIHwgJ2JsdWUnIHwgJ3B1cnBsZScgfCAnc3VjY2VzcycgfCAncmVkJyB8ICd2b2xjYW5vJyB8ICdvcmFuZ2UnIHwgJ2dvbGQnIHwgJ2xpbWUnIHwgJ2dyZWVuJyB8ICdjeWFuJyB8IHN0cmluZztcbn1cblxuZXhwb3J0IHR5cGUgU1RDaGFuZ2VUeXBlID0gJ2xvYWRlZCcgfCAncGknIHwgJ3BzJyB8ICdjaGVja2JveCcgfCAncmFkaW8nIHwgJ3NvcnQnIHwgJ2ZpbHRlcicgfCAnY2xpY2snIHwgJ2RibENsaWNrJyB8ICdleHBhbmQnO1xuXG4vKipcbiAqIOWbnuiwg+aVsOaNrlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFNUQ2hhbmdlIHtcbiAgLyoqXG4gICAqIOWbnuiwg+exu+Wei1xuICAgKi9cbiAgdHlwZTogU1RDaGFuZ2VUeXBlO1xuICAvKipcbiAgICog5b2T5YmN6aG156CBXG4gICAqL1xuICBwaTogbnVtYmVyO1xuICAvKipcbiAgICog5q+P6aG15pWw6YePXG4gICAqL1xuICBwczogbnVtYmVyO1xuICAvKipcbiAgICog5pWw5o2u5oC76YePXG4gICAqL1xuICB0b3RhbDogbnVtYmVyO1xuICAvKipcbiAgICogYGxvYWRlZGAg5Y+C5pWwXG4gICAqL1xuICBsb2FkZWQ/OiBTVERhdGFbXTtcbiAgLyoqXG4gICAqIGBjaGVja2JveGAg5Y+C5pWwXG4gICAqL1xuICBjaGVja2JveD86IFNURGF0YVtdO1xuICAvKipcbiAgICogYHJhZGlvYCDlj4LmlbBcbiAgICovXG4gIHJhZGlvPzogU1REYXRhO1xuICAvKipcbiAgICog5o6S5bqP5Y+C5pWwXG4gICAqL1xuICBzb3J0PzogU1RDaGFuZ2VTb3J0O1xuICAvKipcbiAgICog6L+H5ruk5Y+C5pWwXG4gICAqL1xuICBmaWx0ZXI/OiBTVENvbHVtbjtcbiAgLyoqXG4gICAqIOihjOeCueWHu+WPguaVsFxuICAgKi9cbiAgY2xpY2s/OiBTVENoYW5nZVJvd0NsaWNrO1xuICAvKipcbiAgICog6KGM5Y+M5Ye75Y+C5pWwXG4gICAqL1xuICBkYmxDbGljaz86IFNUQ2hhbmdlUm93Q2xpY2s7XG4gIC8qKlxuICAgKiBgZXhwYW5kYCDlj4LmlbBcbiAgICovXG4gIGV4cGFuZD86IFNURGF0YTtcbn1cblxuLyoqIOihjOWNleWHu+WPguaVsCAqL1xuZXhwb3J0IGludGVyZmFjZSBTVENoYW5nZVNvcnQge1xuICB2YWx1ZT86ICdhc2NlbmQnIHwgJ2Rlc2NlbmQnO1xuICBtYXA/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xuICBjb2x1bW4/OiBTVENvbHVtbjtcbn1cblxuLyoqIOihjOWNleWHu+WPguaVsCAqL1xuZXhwb3J0IGludGVyZmFjZSBTVENoYW5nZVJvd0NsaWNrIHtcbiAgZT86IEV2ZW50O1xuICBpdGVtPzogU1REYXRhO1xuICBpbmRleD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTVEVycm9yIHtcbiAgdHlwZT86ICdyZXEnO1xuICBlcnJvcj86IGFueTtcbn1cblxuZXhwb3J0IHR5cGUgU1RSb3dDbGFzc05hbWUgPSAocmVjb3JkOiBTVERhdGEsIGluZGV4OiBudW1iZXIpID0+IHN0cmluZztcbiJdfQ==