/**
 * @fileoverview added by tsickle
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
    /** @type {?|undefined} */
    STExportOptions.prototype._d;
    /** @type {?|undefined} */
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
     * 行点击或双击参数
     * @type {?|undefined}
     */
    STChange.prototype.click;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuaW50ZXJmYWNlcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hYmMvdGFibGUvIiwic291cmNlcyI6WyJ0YWJsZS5pbnRlcmZhY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFNQSxpQ0FhQzs7Ozs7Ozs7SUFQQywyQkFBNEI7Ozs7Ozs7SUFNNUIscUNBQXFDOzs7OztBQUd2QywwQ0FRQzs7O0lBUEMsa0NBQVk7O0lBQ1osa0NBQVk7O0lBQ1osdUNBQXFCOzs7OztJQUlyQiwwQ0FBcUI7Ozs7O0FBR3ZCLDJCQW1DQzs7Ozs7Ozs7SUE3QkMscUJBQXVCOzs7Ozs7SUFLdkIsdUJBQWE7Ozs7O0lBRWIsdUJBQWdCOzs7OztJQUVoQixxQkFBVzs7Ozs7SUFFWCx3QkFBYzs7Ozs7O0lBS2QsdUJBQXlCOzs7OztJQUl6QiwwQkFBb0I7Ozs7O0lBSXBCLHlCQUFtQjs7Ozs7SUFJbkIsd0JBQWlFOzs7OztBQUduRSxzQ0FnQkM7OztJQWZDLGdDQUFXOztJQUNYLG1DQUlNOztJQUNOLGtDQUlNOztJQUNOLG1DQUF5Qzs7SUFDekMsMENBQXlCOztJQUN6Qix3Q0FBd0Q7O0lBQ3hELDJDQUEwQjs7Ozs7QUFHNUIsbUNBR0M7Ozs7OztJQURDLDhCQUFnQjs7Ozs7QUFHbEIsMkJBVUM7Ozs7Ozs7SUFMQyx1QkFBeUI7Ozs7O0lBSXpCLHdCQUFzRDs7Ozs7QUFHeEQsNEJBeURDOzs7Ozs7OztJQW5EQyx1QkFBZ0I7Ozs7O0lBSWhCLDZCQUFzQjs7Ozs7SUFJdEIsMEJBQXFDOzs7OztJQUlyQywyQkFBd0M7Ozs7O0lBSXhDLHNCQUFlOzs7OztJQUlmLDBCQUFtQjs7Ozs7SUFJbkIsMkJBQXFCOzs7OztJQUlyQixpQ0FBMEI7Ozs7Ozs7Ozs7SUFTMUIsdUJBQXlCOzs7Ozs7SUFLekIsNEJBQXFCOzs7OztJQUlyQix1QkFBZ0I7Ozs7O0lBSWhCLDZCQUFxQjs7Ozs7O0FBTXZCLDRCQW1CQzs7Ozs7O0lBZkMseUJBQWtCOzs7OztJQUlsQiww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R0M7Ozs7QUFFRCxzQ0FXQzs7Ozs7O0lBUEMsZ0NBQWM7Ozs7Ozs7SUFNZCxpQ0FBZ0k7Ozs7OztBQVFsSSw4QkE2Q0M7Ozs7OztJQXpDQyx3QkFBbUI7Ozs7O0lBSW5CLHNCQUFXOzs7OztJQUlYLHNCQUFXOzs7OztJQUlYLHlCQUFjOzs7OztJQUlkLDBCQUFrQjs7Ozs7SUFJbEIsNEJBQW9COzs7OztJQUlwQix5QkFBZTs7Ozs7SUFJZix3QkFBb0I7Ozs7O0lBSXBCLDBCQUFrQjs7Ozs7SUFJbEIseUJBQXlCOzs7OztJQUl6QiwwQkFBZ0I7Ozs7OztBQUlsQixrQ0FJQzs7O0lBSEMsNkJBQTZCOztJQUM3QiwyQkFBZ0M7O0lBQ2hDLDhCQUFrQjs7Ozs7O0FBSXBCLHNDQUlDOzs7SUFIQyw2QkFBVTs7SUFDVixnQ0FBYzs7SUFDZCxpQ0FBZTs7Ozs7QUFHakIsNkJBR0M7OztJQUZDLHVCQUFhOztJQUNiLHdCQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cEhlYWRlcnMsIEh0dHBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBEcmF3ZXJIZWxwZXJPcHRpb25zLCBNb2RhbEhlbHBlck9wdGlvbnMsIFlOTW9kZSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5pbXBvcnQgeyBOekRyYXdlck9wdGlvbnMgfSBmcm9tICduZy16b3Jyby1hbnRkL2RyYXdlcic7XG5pbXBvcnQgeyBNb2RhbE9wdGlvbnNGb3JTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9tb2RhbCc7XG5pbXBvcnQgeyBTVENvbXBvbmVudCB9IGZyb20gJy4vdGFibGUuY29tcG9uZW50JztcblxuZXhwb3J0IGludGVyZmFjZSBTVFdpZHRoTW9kZSB7XG4gIC8qKlxuICAgKiDlrr3luqbnsbvlnotcbiAgICogLSBgZGVmYXVsdGAg6buY6K6k6KGM5Li6XG4gICAqIC0gYHN0cmljdGAg5Lil5qC85qih5byP77yM5Y2z5by65Yi25oyJIGB3aWR0aGAg5oyH5a6a55qE5a695bqm5ZGI546w77yM5bm25qC55o2uIGBzdHJpY3RCZWhhdmlvcmAg57G75Z6L5aSE55CGXG4gICAqL1xuICB0eXBlPzogJ3N0cmljdCcgfCAnZGVmYXVsdCc7XG4gIC8qKlxuICAgKiDkuKXmoLzmqKHlvI/nmoTlpITnkIbooYzkuLpcbiAgICogLSBgd3JhcGAg5by65Yi25o2i6KGMXG4gICAqIC0gYHRydW5jYXRlYCDmiKrnn61cbiAgICovXG4gIHN0cmljdEJlaGF2aW9yPzogJ3dyYXAnIHwgJ3RydW5jYXRlJztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTVFJlc2V0Q29sdW1uc09wdGlvbiB7XG4gIHBpPzogbnVtYmVyO1xuICBwcz86IG51bWJlcjtcbiAgY29sdW1ucz86IFNUQ29sdW1uW107XG4gIC8qKlxuICAgKiBXaGV0aGVyIHRvIHRyaWdnZXIgYSBkYXRhIGxvYWQsIGRlZmF1bHQ6IGB0cnVlYFxuICAgKi9cbiAgZW1pdFJlbG9hZD86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1RSZXEge1xuICAvKipcbiAgICog5YiG6aG157G75Z6L77yM6buY6K6k77yaYHBhZ2VgXG4gICAqIC0gYHBhZ2VgIOS9v+eUqCBgcGlg77yMYHBzYCDnu4TlkIhcbiAgICogLSBgc2tpcGAg5L2/55SoIGBza2lwYO+8jGBsaW1pdGAg57uE5ZCIXG4gICAqL1xuICB0eXBlPzogJ3BhZ2UnIHwgJ3NraXAnO1xuICAvKipcbiAgICog6aKd5aSW6K+35rGC5Y+C5pWw77yM6buY6K6k6Ieq5Yqo6ZmE5YqgIGBwaWDjgIFgcHNgIOiHs1VSTFxuICAgKiAtIGB7IHN0YXR1czogJ25ldycgfWAgPT4gYHVybD9waT0xJnBzPTEwJnN0YXR1cz1uZXdgXG4gICAqL1xuICBwYXJhbXM/OiBhbnk7XG4gIC8qKiDor7fmsYLmlrnms5XvvIzpu5jorqTvvJpgR0VUYCAqL1xuICBtZXRob2Q/OiBzdHJpbmc7XG4gIC8qKiDor7fmsYLkvZMgYGJvZHlgICovXG4gIGJvZHk/OiBhbnk7XG4gIC8qKiDor7fmsYLkvZMgYEhlYWRlcmAgKi9cbiAgaGVhZGVycz86IGFueTtcbiAgLyoqXG4gICAqIOmHjeWRveWQjeWPguaVsCBgcGlg44CBYHBzYO+8jOm7mOiupO+8mmB7IHBpOiAncGknLCBwczogJ3BzJyB9YFxuICAgKiAtIGB7IHBpOiAnUGFnZScgfWAgPT4gYHBpYCDkvJrooqvmm7/mjaLmiJAgUGFnZVxuICAgKi9cbiAgcmVOYW1lPzogU1RSZXFSZU5hbWVUeXBlO1xuICAvKipcbiAgICog5piv5ZCm5bCG6K+35rGC5omA5pyJ5Y+C5pWw5pWw5o2u6YO95pS+5YWlIGBib2R5YCDlvZPkuK3vvIhgdXJsYCDlnLDlnYDmnKzouqvlj4LmlbDpmaTlpJbvvInvvIzku4XlvZMgYG1ldGhvZDogJ1BPU1QnYCDml7bmnInmlYjvvIzpu5jorqTvvJpgZmFsc2VgXG4gICAqL1xuICBhbGxJbkJvZHk/OiBib29sZWFuO1xuICAvKipcbiAgICog5piv5ZCm5bu26L+f5Yqg6L295pWw5o2u77yM5Y2z5riy5p+T57uT5p2f5ZCO5LiN5Lya5Li75Yqo5Y+R6LW36K+35rGC77yM6buY6K6k77yaYGZhbHNlYFxuICAgKi9cbiAgbGF6eUxvYWQ/OiBib29sZWFuO1xuICAvKipcbiAgICog6K+35rGC5YmN5pWw5o2u5aSE55CGXG4gICAqL1xuICBwcm9jZXNzPzogKHJlcXVlc3RPcHRpb25zOiBTVFJlcXVlc3RPcHRpb25zKSA9PiBTVFJlcXVlc3RPcHRpb25zO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNUUmVxdWVzdE9wdGlvbnMge1xuICBib2R5PzogYW55O1xuICBoZWFkZXJzPzpcbiAgICB8IEh0dHBIZWFkZXJzXG4gICAgfCB7XG4gICAgICAgIFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xuICAgICAgfTtcbiAgcGFyYW1zPzpcbiAgICB8IEh0dHBQYXJhbXNcbiAgICB8IHtcbiAgICAgICAgW3BhcmFtOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcbiAgICAgIH07XG4gIG9ic2VydmU/OiAnYm9keScgfCAnZXZlbnRzJyB8ICdyZXNwb25zZSc7XG4gIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcbiAgcmVzcG9uc2VUeXBlPzogJ2FycmF5YnVmZmVyJyB8ICdibG9iJyB8ICdqc29uJyB8ICd0ZXh0JztcbiAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTVExvYWRPcHRpb25zIHtcbiAgLyoqIOaYr+WQpuWQiOW5tu+8jOm7mOiupO+8mmBmYWxzZWAgKi9cbiAgbWVyZ2U/OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNUUmVzIHtcbiAgLyoqXG4gICAqIOmHjeWRveWQjei/lOWbnuWPguaVsCBgdG90YWxg44CBYGxpc3RgXG4gICAqIC0gYHsgdG90YWw6ICdUb3RhbCcgfWAgPT4gVG90YWwg5Lya6KKr5b2T5L2cIGB0b3RhbGBcbiAgICovXG4gIHJlTmFtZT86IFNUUmVzUmVOYW1lVHlwZTtcbiAgLyoqXG4gICAqIOaVsOaNrumihOWkhOeQhlxuICAgKi9cbiAgcHJvY2Vzcz86IChkYXRhOiBTVERhdGFbXSwgcmF3RGF0YT86IGFueSkgPT4gU1REYXRhW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1RQYWdlIHtcbiAgLyoqXG4gICAqIOWJjeerr+WIhumhte+8jOW9kyBgZGF0YWAg5Li6YGFueVtdYCDmiJYgYE9ic2VydmFibGU8YW55W10+YCDmnInmlYjvvIzpu5jorqTvvJpgdHJ1ZWBcbiAgICogLSBgdHJ1ZWAg55SxIGBzdGAg5qC55o2uIGBkYXRhYCDplb/luqblj5fmjqfliIbpobXvvIzljIXmi6zvvJrmjpLluo/jgIHov4fmu6TnrYlcbiAgICogLSBgZmFsc2VgIOeUseeUqOaIt+mAmui/hyBgdG90YWxgIOWSjCBgZGF0YWAg5Y+C5pWw5Y+X5o6n5YiG6aG177yM5bm257u05oqkIGAoY2hhbmdlKWAg5b2T5YiG6aG15Y+Y5pu05pe26YeN5paw5Yqg6L295pWw5o2uXG4gICAqL1xuICBmcm9udD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDlkI7nq6/liIbpobXmmK/lkKbph4fnlKhgMGDln7rntKLlvJXvvIzlj6rlnKhgZGF0YWDnsbvlnovkuLpgc3RyaW5nYOaXtuacieaViO+8jOm7mOiupO+8mmBmYWxzZWBcbiAgICovXG4gIHplcm9JbmRleGVkPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIOaMh+WumuWIhumhteaYvuekuueahOS9jee9ru+8jOm7mOiupO+8mmBib3R0b21gXG4gICAqL1xuICBwb3NpdGlvbj86ICd0b3AnIHwgJ2JvdHRvbScgfCAnYm90aCc7XG4gIC8qKlxuICAgKiDmjIflrprliIbpobXliIbpobXmlrnlkJHvvIzpu5jorqTvvJpgcmlnaHRgXG4gICAqL1xuICBwbGFjZW1lbnQ/OiAnbGVmdCcgfCAnY2VudGVyJyB8ICdyaWdodCc7XG4gIC8qKlxuICAgKiDmmK/lkKbmmL7npLrliIbpobXlmajvvIzpu5jorqTvvJpgdHJ1ZWBcbiAgICovXG4gIHNob3c/OiBib29sZWFuO1xuICAvKipcbiAgICog5piv5ZCm5pi+56S65YiG6aG15Zmo5Lit5pS55Y+Y6aG15pWw77yM6buY6K6k77yaYGZhbHNlYFxuICAgKi9cbiAgc2hvd1NpemU/OiBib29sZWFuO1xuICAvKipcbiAgICog5YiG6aG15Zmo5Lit5q+P6aG15pi+56S65p2h55uu5pWw5LiL5ouJ5qGG5YC877yM6buY6K6k77yaYFsxMCwgMjAsIDMwLCA0MCwgNTBdYFxuICAgKi9cbiAgcGFnZVNpemVzPzogbnVtYmVyW107XG4gIC8qKlxuICAgKiDmmK/lkKbmmL7npLrliIbpobXlmajkuK3lv6vpgJ/ot7PovazvvIzpu5jorqTvvJpgZmFsc2VgXG4gICAqL1xuICBzaG93UXVpY2tKdW1wZXI/OiBib29sZWFuO1xuICAvKipcbiAgICog5piv5ZCm5pi+56S65oC75pWw5o2u6YePXG4gICAqIC0gYGJvb2xlYW5gIOexu+Wei+aYvuekuuS4juWQpu+8jOm7mOiupOaooeadv++8mmDlhbEge3t0b3RhbH19IOadoWBcbiAgICogLSBgc3RyaW5nYCDoh6rlrprkuYnmqKHmnb/vvIzmqKHmnb/lj5jph4/vvJpcbiAgICogIC0gYHt7dG90YWx9fWAg6KGo56S65pWw5o2u5oC76YePXG4gICAqICAtIGB7e3JhbmdlWzBdfX1gIOihqOekuuW9k+WJjemhteW8gOWni+aVsOmHj+WAvFxuICAgKiAgLSBge3tyYW5nZVsxXX19YCDooajnpLrlvZPliY3pobXnu5PmnZ/mlbDph4/lgLxcbiAgICovXG4gIHRvdGFsPzogc3RyaW5nIHwgYm9vbGVhbjtcbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIDkuMC4wLiBUaGlzIGlzIGRlcHJlY2F0ZWQgYW5kIGdvaW5nIHRvIGJlIHJlbW92ZWQgaW4gOS4wLjAuXG4gICAqIOaVsOaNruWPmOabtOWQjuaYr+WQpuS/neeVmeWcqOaVsOaNruWPmOabtOWJjeeahOmhteegge+8jOm7mOiupO+8mmB0cnVlYFxuICAgKi9cbiAgaW5kZXhSZXNldD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDliIfmjaLliIbpobXml7bov5Tlm57pobbpg6jvvIzpu5jorqTvvJpgdHJ1ZWBcbiAgICovXG4gIHRvVG9wPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIOi/lOWbnumhtumDqOWBj+enu+WAvO+8jOm7mOiupO+8mmAxMDBgXG4gICAqL1xuICB0b1RvcE9mZnNldD86IG51bWJlcjtcbn1cblxuLyoqXG4gKiDmlbDmja7mupBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTVERhdGEge1xuICAvKipcbiAgICog6YCJ5oup5qGG5oiW5Y2V6YCJ5qGG54q25oCB5YC8XG4gICAqL1xuICBjaGVja2VkPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIOmAieaLqeahhuaIluWNlemAieahhiBgZGlzYWJsZWRgIOWAvFxuICAgKi9cbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xuICAvKipcbiAgICog5piv5ZCm5bGV5byA54q25oCBXG4gICAqL1xuICBleHBhbmQ/OiBib29sZWFuO1xuICAvKipcbiAgICog5piv5ZCm5pi+56S65bGV5byA5oyJ6ZKuXG4gICAqL1xuICBzaG93RXhwYW5kPzogYm9vbGVhbjtcblxuICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbi8qKlxuICog5YiX5o+P6L+wXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU1RDb2x1bW4ge1xuICAvKipcbiAgICog55So5LqO5a6a5LmJ5pWw5o2u5rqQ5Li76ZSu77yM5L6L5aaC77yaYFNUU3RhdGlzdGljYWxgXG4gICAqL1xuICBrZXk/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiDliJfmoIfpophcbiAgICovXG4gIHRpdGxlPzogc3RyaW5nIHwgU1RDb2x1bW5UaXRsZTtcbiAgLyoqXG4gICAqIOWIl+agh+mimCBpMThuXG4gICAqIEBkZXByZWNhdGVkIOS9v+eUqCBgdGl0bGU6IHsgaTE4bjogJ3ZhbHVlJyB9YCDku6Pmm79cbiAgICogQGRlcHJlY2F0ZWQgOS4wLjAuIFRoaXMgaXMgZGVwcmVjYXRlZCBhbmQgZ29pbmcgdG8gYmUgcmVtb3ZlZCBpbiA5LjAuMC5cbiAgICovXG4gIGkxOG4/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiDliJfmlbDmja7lnKjmlbDmja7pobnkuK3lr7nlupTnmoQga2V577yM5pSv5oyBIGBhLmIuY2Ag55qE5bWM5aWX5YaZ5rOV77yM5L6L5aaC77yaXG4gICAqIC0gYGlkYFxuICAgKiAtIGBwcmljZS5tYXJrZXRgXG4gICAqIC0gYFsgJ3ByaWNlJywgJ21hcmtldCcgXWBcbiAgICovXG4gIGluZGV4Pzogc3RyaW5nIHwgc3RyaW5nW10gfCBudWxsO1xuICAvKipcbiAgICog57G75Z6LXG4gICAqIC0gYG5vYCDooYzlj7fvvIzorqHnrpfop4TliJnvvJpgaW5kZXggKyBub0luZGV4YFxuICAgKiAtIGBjaGVja2JveGAg5aSa6YCJXG4gICAqIC0gYHJhZGlvYCDljZXpgIlcbiAgICogLSBgbGlua2Ag6ZO+5o6l77yM5Yqh5b+F5oyH5a6aIGBjbGlja2BcbiAgICogLSBgYmFkZ2VgIFvlvr3moIddKGh0dHBzOi8vbmcuYW50LmRlc2lnbi9jb21wb25lbnRzL2JhZGdlL3poKe+8jOWKoeW/heaMh+WumiBgYmFkZ2VgIOWPguaVsOmFjee9ruW+veagh+WvueW6lOWAvFxuICAgKiAtIGB0YWdgIFvmoIfnrb5dKGh0dHBzOi8vbmcuYW50LmRlc2lnbi9jb21wb25lbnRzL3RhZy96aCnvvIzliqHlv4XmjIflrpogYHRhZ2Ag5Y+C5pWw6YWN572u5qCH562+5a+55bqU5YC8XG4gICAqIC0gYGltZ2Ag5Zu+54mH5LiU5bGF5LitKOiLpSBgY2xhc3NOYW1lYCDlrZjlnKjliJnkvJjlhYgpXG4gICAqIC0gYG51bWJlcmAg5pWw5a2X5LiU5bGF5Y+zKOiLpSBgY2xhc3NOYW1lYCDlrZjlnKjliJnkvJjlhYgpXG4gICAqIC0gYGN1cnJlbmN5YCDotKfluIHkuJTlsYXlj7Mo6IulIGBjbGFzc05hbWVgIOWtmOWcqOWImeS8mOWFiClcbiAgICogLSBgZGF0ZWAg5pel5pyf5qC85byP5LiU5bGF5LitKOiLpSBgY2xhc3NOYW1lYCDlrZjlnKjliJnkvJjlhYgp77yM5L2/55SoIGBkYXRlRm9ybWF0YCDoh6rlrprkuYnmoLzlvI9cbiAgICogLSBgeW5gIOWwhmBib29sZWFuYOexu+Wei+W+veeroOWMliBbZG9jdW1lbnRdKGh0dHBzOi8vbmctYWxhaW4uY29tL2RvY3MvZGF0YS1yZW5kZXIjeW4pXG4gICAqL1xuICB0eXBlPzogJ2NoZWNrYm94JyB8ICdsaW5rJyB8ICdiYWRnZScgfCAndGFnJyB8ICdyYWRpbycgfCAnaW1nJyB8ICdjdXJyZW5jeScgfCAnbnVtYmVyJyB8ICdkYXRlJyB8ICd5bicgfCAnbm8nO1xuICAvKipcbiAgICog6ZO+5o6l5Zue6LCD77yM6Iul6L+U5Zue5LiA5Liq5a2X56ym5Liy6KGo56S65a+86IiqVVJM5Lya6Ieq5Yqo6Kem5Y+RIGByb3V0ZXIubmF2aWdhdGVCeVVybGBcbiAgICovXG4gIGNsaWNrPzogKHJlY29yZDogU1REYXRhLCBpbnN0YW5jZT86IFNUQ29tcG9uZW50KSA9PiBhbnk7XG4gIC8qKlxuICAgKiDmjInpkq7nu4RcbiAgICovXG4gIGJ1dHRvbnM/OiBTVENvbHVtbkJ1dHRvbltdO1xuICAvKipcbiAgICog6Ieq5a6a5LmJ5riy5p+TSURcbiAgICogQGV4YW1wbGVcbiAgICogPG5nLXRlbXBsYXRlIHN0LXJvdz1cImN1c3RvbVwiIGxldC1pdGVtIGxldC1pbmRleD1cImluZGV4XCIgbGV0LWNvbHVtbj1cImNvbHVtblwiPlxuICAgKiAge3sgYy50aXRsZSB9fVxuICAgKiA8L25nLXRlbXBsYXRlPlxuICAgKi9cbiAgcmVuZGVyPzogc3RyaW5nO1xuICAvKipcbiAgICog5qCH6aKY6Ieq5a6a5LmJ5riy5p+TSURcbiAgICogQGV4YW1wbGVcbiAgICogPG5nLXRlbXBsYXRlIHN0LXJvdz1cImN1c3RvbVwiIHR5cGU9XCJ0aXRsZVwiIGxldC1jPlxuICAgKiAge3sgaXRlbSB8IGpzb24gfX1cbiAgICogPC9uZy10ZW1wbGF0ZT5cbiAgICovXG4gIHJlbmRlclRpdGxlPzogc3RyaW5nO1xuICAvKipcbiAgICog5YiX5a6977yI5pWw5a2X5Z6L6KGo56S6IGBweGAg5YC877yJ77yM5L6L5aaC77yaYDEwMGDjgIFgMTAlYOOAgWAxMDBweGBcbiAgICpcbiAgICogKirms6jmhI/vvJoqKiDoi6Xlm7rlrprliJflv4XpobvmmK/mlbDlrZdcbiAgICovXG4gIHdpZHRoPzogc3RyaW5nIHwgbnVtYmVyO1xuICAvKipcbiAgICog5o6S5bqP6YWN572u6aG577yM6L+c56iL5pWw5o2u6YWN572uKirkvJjlhYgqKuinhOWIme+8mlxuICAgKiAtIGB0cnVlYCDooajnpLrlhYHorrjmjpLluo9cbiAgICogLSBgc3RyaW5nYCDooajnpLrov5znqIvmlbDmja7mjpLluo/nm7jlr7nlupQgYGtleWAg5YC8XG4gICAqL1xuICBzb3J0PzogdHJ1ZSB8IHN0cmluZyB8IFNUQ29sdW1uU29ydDtcbiAgLyoqXG4gICAqIOi/h+a7pOmFjee9rumhuVxuICAgKi9cbiAgZmlsdGVyPzogU1RDb2x1bW5GaWx0ZXI7XG4gIC8qKlxuICAgKiDmoLzlvI/ljJbliJflgLxcbiAgICovXG4gIGZvcm1hdD86IChpdGVtOiBTVERhdGEsIGNvbDogU1RDb2x1bW4sIGluZGV4OiBudW1iZXIpID0+IHN0cmluZztcbiAgLyoqXG4gICAqIOiHquWumuS5ieWFqC/lj43pgInpgInmi6npoblcbiAgICovXG4gIHNlbGVjdGlvbnM/OiBTVENvbHVtblNlbGVjdGlvbltdO1xuICAvKipcbiAgICog5YiXIGBjbGFzc2Ag5bGe5oCn5YC877yI5rOo77ya5peg6aG7IGAuYCDngrnvvInvvIzkvovlpoLvvJpcbiAgICogLSBgdGV4dC1jZW50ZXJgIOWxheS4rVxuICAgKiAtIGB0ZXh0LXJpZ2h0YCDlsYXlj7NcbiAgICogLSBgdGV4dC1zdWNjZXNzYCDmiJDlip/oibJcbiAgICogLSBgdGV4dC1kYW5nZXJgIOW8guW4uOiJslxuICAgKi9cbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xuICAvKipcbiAgICog5ZCI5bm25YiXXG4gICAqL1xuICBjb2xTcGFuPzogbnVtYmVyO1xuICAvKipcbiAgICog5pWw5a2X5qC85byP77yMYHR5cGU9bnVtYmVyYCDmnInmlYhcbiAgICovXG4gIG51bWJlckRpZ2l0cz86IHN0cmluZztcbiAgLyoqXG4gICAqIOaXpeacn+agvOW8j++8jGB0eXBlPWRhdGVgIOacieaViO+8jO+8iOm7mOiupO+8mmBZWVlZLU1NLUREIEhIOm1tYO+8iVxuICAgKi9cbiAgZGF0ZUZvcm1hdD86IHN0cmluZztcbiAgLyoqXG4gICAqIOW9kyBgdHlwZT15bmAg5pyJ5pWIXG4gICAqL1xuICB5bj86IFNUQ29sdW1uWW47XG4gIC8qKlxuICAgKiDmmK/lkKblhYHorrjlr7zlh7rvvIzpu5jorqQgYHRydWVgXG4gICAqL1xuICBleHBvcnRlZD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDmnYPpmZDvvIznrYnlkIwgW0FDTENhblR5cGVdKGh0dHBzOi8vbmctYWxhaW4uY29tL2FjbC9nZXR0aW5nLXN0YXJ0ZWQvI0FDTENhblR5cGUpIOWPguaVsOWAvFxuICAgKi9cbiAgYWNsPzogYW55O1xuICAvKiog5b2T5LiN5a2Y5Zyo5pWw5o2u5pe25Lul6buY6K6k5YC85pu/5LujICovXG4gIGRlZmF1bHQ/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiDlm7rlrprliY3lkI7liJfvvIzlvZPmjIflrprml7bliqHlv4XmjIflrpogYHdpZHRoYCDlkKbliJnop4bkuLrml6DmlYjvvIzmnInoi6XlubIgKirms6jmhI/vvJoqKiDpobnvvJpcbiAgICpcbiAgICogLSDoi6XliJflpLTkuI7lhoXlrrnkuI3lr7npvZDmiJblh7rnjrDliJfph43lpI3vvIzor7fmjIflrprliJfnmoTlrr3luqYgYHdpZHRoYFxuICAgKiAtIOW7uuiuruaMh+WumiBgc2Nyb2xsLnhgIOS4uuWkp+S6juihqOagvOWuveW6pueahOWbuuWumuWAvOaIlueZvuWIhuavlOOAguazqOaEj++8jOS4lOmdnuWbuuWumuWIl+WuveW6puS5i+WSjOS4jeimgei2hei/hyBgc2Nyb2xsLnhgXG4gICAqL1xuICBmaXhlZD86ICdsZWZ0JyB8ICdyaWdodCc7XG4gIC8qKlxuICAgKiDlvr3moIfphY3nva7poblcbiAgICovXG4gIGJhZGdlPzogU1RDb2x1bW5CYWRnZSB8IG51bGw7XG4gIC8qKlxuICAgKiDmoIfnrb7phY3nva7poblcbiAgICovXG4gIHRhZz86IFNUQ29sdW1uVGFnIHwgbnVsbDtcbiAgLyoqXG4gICAqIOihjOWPt+e0ouW8le+8jOm7mOiupO+8mmAxYFxuICAgKiAtIOiuoeeul+inhOWImeS4uu+8mmBpbmRleCArIG5vSW5kZXhgXG4gICAqIC0g5pSv5oyB6Ieq5a6a5LmJ5pa55rOVXG4gICAqL1xuICBub0luZGV4PzogbnVtYmVyIHwgKChpdGVtOiBTVERhdGEsIGNvbDogU1RDb2x1bW4sIGlkeDogbnVtYmVyKSA9PiBudW1iZXIpO1xuICAvKipcbiAgICog5p2h5Lu26KGo6L6+5byPXG4gICAqIC0g5LuF6LWL5YC8IGBjb2x1bW5zYCDml7bmiafooYzkuIDmrKFcbiAgICogLSDlj6/osIPnlKggYHJlc2V0Q29sdW1ucygpYCDlho3kuIDmrKHop6blj5FcbiAgICovXG4gIGlpZj86IChpdGVtOiBTVENvbHVtbikgPT4gYm9vbGVhbjtcblxuICAvKipcbiAgICog57uf6K6hXG4gICAqL1xuICBzdGF0aXN0aWNhbD86IFNUU3RhdGlzdGljYWxUeXBlIHwgU1RTdGF0aXN0aWNhbDtcblxuICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1RDb2x1bW5UaXRsZSB7XG4gIC8qKlxuICAgKiBUZXh0IG9mIGhlYWRlciwgY2FuIGJlIGNob29zZSBvbmUgb2YgYHRleHRgIG9yIGBpMThuYFxuICAgKi9cbiAgdGV4dD86IHN0cmluZztcblxuICAvKipcbiAgICogSTE4biBrZXkgb2YgaGVhZGVyLCBjYW4gYmUgY2hvb3NlIG9uZSBvZiBgdGV4dGAgb3IgYGkxOG5gXG4gICAqL1xuICBpMThuPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBPcHRpb25hbCBpbmZvcm1hdGlvbiBvZiBoZWFkZXJcbiAgICovXG4gIG9wdGlvbmFsPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBPcHRpb25hbCBoZWxwIG9mIGhlYWRlclxuICAgKi9cbiAgb3B0aW9uYWxIZWxwPzogc3RyaW5nO1xufVxuXG5leHBvcnQgdHlwZSBTVFN0YXRpc3RpY2FsVHlwZSA9ICdjb3VudCcgfCAnZGlzdGluY3RDb3VudCcgfCAnc3VtJyB8ICdhdmVyYWdlJyB8ICdtYXgnIHwgJ21pbic7XG5cbmV4cG9ydCB0eXBlIFNUU3RhdGlzdGljYWxGbiA9ICh2YWx1ZXM6IG51bWJlcltdLCBjb2w6IFNUQ29sdW1uLCBsaXN0OiBTVERhdGFbXSwgcmF3RGF0YT86IGFueSkgPT4gU1RTdGF0aXN0aWNhbFJlc3VsdDtcblxuZXhwb3J0IGludGVyZmFjZSBTVFN0YXRpc3RpY2FsIHtcbiAgdHlwZTogU1RTdGF0aXN0aWNhbFR5cGUgfCBTVFN0YXRpc3RpY2FsRm47XG4gIC8qKlxuICAgKiDkv53nlZnlsI/mlbDkvY3mlbDvvIzpu5jorqTvvJpgMmBcbiAgICovXG4gIGRpZ2l0cz86IG51bWJlcjtcbiAgLyoqXG4gICAqIOaYr+WQpumcgOimgei0p+W4geagvOW8j+WMlu+8jOm7mOiupOS7peS4i+aDheWGteS4uiBgdHJ1ZWBcbiAgICogLSBgdHlwZWAg5Li6IGBTVFN0YXRpc3RpY2FsRm5g44CBIGBzdW1g44CBYGF2ZXJhZ2Vg44CBYG1heGDjgIFgbWluYFxuICAgKi9cbiAgY3VycmVuY3k/OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNUU3RhdGlzdGljYWxSZXN1bHRzIHtcbiAgW2tleTogc3RyaW5nXTogU1RTdGF0aXN0aWNhbFJlc3VsdDtcbiAgW2luZGV4OiBudW1iZXJdOiBTVFN0YXRpc3RpY2FsUmVzdWx0O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNUU3RhdGlzdGljYWxSZXN1bHQge1xuICB2YWx1ZTogbnVtYmVyO1xuICB0ZXh0Pzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNUQ29sdW1uU29ydCB7XG4gIC8qKlxuICAgKiDmjpLluo/nmoTpu5jorqTlj5fmjqflsZ7mgKdcbiAgICovXG4gIGRlZmF1bHQ/OiAnYXNjZW5kJyB8ICdkZXNjZW5kJztcbiAgLyoqXG4gICAqIOacrOWcsOaVsOaNrueahOaOkuW6j+WHveaVsO+8jOS9v+eUqOS4gOS4quWHveaVsCjlj4LogIMgW0FycmF5LnNvcnRdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0FycmF5L3NvcnQpIOeahCBjb21wYXJlRnVuY3Rpb24pXG4gICAqIC0gYG51bGxgIOW/veeVpeacrOWcsOaOkuW6j++8jOS9huS/neaMgeaOkuW6j+WKn+iDvVxuICAgKi9cbiAgY29tcGFyZT86ICgoYTogU1REYXRhLCBiOiBTVERhdGEpID0+IG51bWJlcikgfCBudWxsO1xuICAvKipcbiAgICog6L+c56iL5pWw5o2u55qE5o6S5bqP5pe25ZCO56uv55u45a+55bqU55qES0VZ77yM6buY6K6k5L2/55SoIGBpbmRleGAg5bGe5oCnXG4gICAqIC0g6IulIGBtdWx0aVNvcnQ6IGZhbHNlYCDml7bvvJpga2V5OiAnbmFtZScgPT4gP25hbWU9MSZwaT0xYFxuICAgKiAtIOiLpSBgbXVsdGlTb3J0OiB0cnVlYCDlhYHorrjlpJrkuKrmjpLluo8ga2V5IOWtmOWcqO+8jOaIluS9v+eUqCBgU1RNdWx0aVNvcnRgIOaMh+WumuWkmuWIl+aOkuW6j2tleeWQiOW5tuinhOWImVxuICAgKi9cbiAga2V5Pzogc3RyaW5nIHwgbnVsbDtcbiAgLyoqXG4gICAqIOi/nOeoi+aVsOaNrueahOaOkuW6j+aXtuWQjuerr+ebuOWvueW6lOeahFZBTFVFXG4gICAqIC0gYHsgYXNjZW5kOiAnMCcsIGRlc2NlbmQ6ICcxJyB9YCDnu5PmnpwgYD9uYW1lPTEmcGk9MWBcbiAgICogLSBgeyBhc2NlbmQ6ICdhc2MnLCBkZXNjZW5kOiAnZGVzYycgfWAg57uT5p6cIGA/bmFtZT1kZXNjJnBpPTFgXG4gICAqL1xuICByZU5hbWU/OiB7IGFzY2VuZD86IHN0cmluZzsgZGVzY2VuZD86IHN0cmluZyB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNUQ29sdW1uRmlsdGVyIHtcbiAgLyoqXG4gICAqIOaQnOe0ouaWueW8j1xuICAgKiAtIGBkZWZ1YWx0YCDpu5jorqTlvaLlvI9cbiAgICogLSBga2V5d29yZGAg5paH5pys5qGG5b2i5byPXG4gICAqL1xuICB0eXBlPzogJ2RlZmF1bHQnIHwgJ2tleXdvcmQnO1xuICAvKipcbiAgICog6KGo5aS055qE562b6YCJ6I+c5Y2V6aG577yM6Iez5bCR5LiA6aG55omN5Lya55Sf5pWIXG4gICAqIC0g5b2TIGB0eXBlPSdrZXl3b3JkJ2Ag5pe25Y+v5Li656m6XG4gICAqL1xuICBtZW51cz86IFNUQ29sdW1uRmlsdGVyTWVudVtdO1xuICAvKipcbiAgICog5pys5Zyw5pWw5o2u55qE562b6YCJ5Ye95pWwXG4gICAqL1xuICBmbj86ICgoZmlsdGVyOiBTVENvbHVtbkZpbHRlck1lbnUsIHJlY29yZDogU1REYXRhKSA9PiBib29sZWFuKSB8IG51bGw7XG4gIC8qKlxuICAgKiDmoIfor4bmlbDmja7mmK/lkKblt7Lov4fmu6TvvIznrZvpgInlm77moIfkvJrpq5jkuq5cbiAgICovXG4gIGRlZmF1bHQ/OiBib29sZWFuO1xuICAvKipcbiAgICog6Ieq5a6a5LmJIGZpbHRlciDlm77moIdcbiAgICogLSDlvZMgYHR5cGU9J2RlZmF1bHQnYCDpu5jorqQgYGZpbHRlcmBcbiAgICogLSDlvZMgYHR5cGU9J2tleXdvcmQnYCDpu5jorqQgYHNlYXJjaGBcbiAgICovXG4gIGljb24/OiBzdHJpbmcgfCBTVEljb247XG4gIC8qKlxuICAgKiDnoa7orqTmjInpkq7mlofmnKzvvIzpu5jorqQgYOehruiupGBcbiAgICovXG4gIGNvbmZpcm1UZXh0Pzogc3RyaW5nO1xuICAvKipcbiAgICog5riF6Zmk5oyJ6ZKu5paH5pys77yM6buY6K6kIGDph43nva5gXG4gICAqL1xuICBjbGVhclRleHQ/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiDmmK/lkKblpJrpgInvvIzpu5jorqQgYHRydWVgXG4gICAqL1xuICBtdWx0aXBsZT86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDov5znqIvmlbDmja7nmoTov4fmu6Tml7blkI7nq6/nm7jlr7nlupTnmoRLRVnvvIzpu5jorqTkvb/nlKggYGluZGV4YCDlsZ7mgKdcbiAgICogYGtleTogJ25hbWUnYCDnu5PmnpwgYD9uYW1lPTEmcGk9MWBcbiAgICovXG4gIGtleT86IHN0cmluZyB8IG51bGw7XG4gIC8qKlxuICAgKiDov5znqIvmlbDmja7nmoTov4fmu6Tml7blkI7nq6/nm7jlr7nlupTnmoRWQUxVRVxuICAgKiAtIOm7mOiupOW9kyBgbXVsdGlwbGU6IHRydWVgIOaXtuS7peiLseaWh+mAl+WPt+aLvOaOpeeahOWtl+espuS4slxuICAgKiBAcmV0dXJuIOi/lOWbnuS4uiBPYmplY3Qg5a+56LGhXG4gICAqL1xuICByZU5hbWU/OiAobGlzdDogU1RDb2x1bW5GaWx0ZXJNZW51W10sIGNvbDogU1RDb2x1bW4pID0+IHt9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNUQ29sdW1uRmlsdGVyTWVudSB7XG4gIC8qKlxuICAgKiDmlofmnKxcbiAgICogLSDlvZMgYHR5cGU6ICdrZXl3b3JkJ2Ag5pe26KGo56S6IGBwbGFjZWhvbGRlcmBcbiAgICovXG4gIHRleHQ/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiDlgLxcbiAgICovXG4gIHZhbHVlPzogYW55O1xuICAvKipcbiAgICog5piv5ZCm6YCJ5LitXG4gICAqL1xuICBjaGVja2VkPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIOadg+mZkO+8jOetieWQjCBbQUNMQ2FuVHlwZV0oaHR0cHM6Ly9uZy1hbGFpbi5jb20vYWNsL2dldHRpbmctc3RhcnRlZC8jQUNMQ2FuVHlwZSkg5Y+C5pWw5YC8XG4gICAqL1xuICBhY2w/OiBhbnk7XG5cbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNUQ29sdW1uU2VsZWN0aW9uIHtcbiAgLyoqXG4gICAqIOmAieaLqemhueaYvuekuueahOaWh+Wtl1xuICAgKi9cbiAgdGV4dDogc3RyaW5nO1xuICAvKipcbiAgICog6YCJ5oup6aG554K55Ye75Zue6LCD77yM5YWB6K645a+55Y+C5pWwIGBkYXRhLmNoZWNrZWRgIOi/m+ihjOaTjeS9nFxuICAgKi9cbiAgc2VsZWN0OiAoZGF0YTogU1REYXRhW10pID0+IHZvaWQ7XG4gIC8qKiDmnYPpmZDvvIznrYnlkIwgYGNhbigpYCDlj4LmlbDlgLwgKi9cbiAgYWNsPzogYW55O1xufVxuXG4vKiog5b2TIGB0eXBlPXluYCDmnInmlYggKi9cbmV4cG9ydCBpbnRlcmZhY2UgU1RDb2x1bW5ZbiB7XG4gIC8qKlxuICAgKiDnnJ/lgLzmnaHku7bvvIzvvIjpu5jorqTvvJpgdHJ1ZWDvvIlcbiAgICovXG4gIHRydXRoPzogYW55O1xuICAvKipcbiAgICog5b6956ugIGB0cnVlYCDml7bmlofmnKzvvIzvvIjpu5jorqTvvJpg5pivYO+8iVxuICAgKi9cbiAgeWVzPzogc3RyaW5nO1xuICAvKipcbiAgICog5b6956ugIGBmYWxzZWAg5pe25paH5pys77yM77yI6buY6K6k77yaYOWQpmDvvIlcbiAgICovXG4gIG5vPzogc3RyaW5nO1xuICAvKipcbiAgICog5b6956ug5pi+56S66aOO5qC8XG4gICAqIC0gYGZ1bGxgIOWbvuagh+WSjOaWh+acrFxuICAgKiAtIGBpY29uYCDlm77moIdcbiAgICogLSBgdGV4dGAg5paH5pysXG4gICAqL1xuICBtb2RlPzogWU5Nb2RlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNUSWNvbiB7XG4gIC8qKiDlm77moIfnsbvlnosgKi9cbiAgdHlwZTogc3RyaW5nO1xuICAvKiog5Zu+5qCH5Li76aKY6aOO5qC877yM6buY6K6k77yaYG91dGxpbmVgICovXG4gIHRoZW1lPzogJ291dGxpbmUnIHwgJ3R3b3RvbmUnIHwgJ2ZpbGwnO1xuICAvKiog5piv5ZCm5pyJ5peL6L2s5Yqo55S777yM6buY6K6k77yaYGZhbHNlYCAqL1xuICBzcGluPzogYm9vbGVhbjtcbiAgLyoqIOS7hemAgueUqOWPjOiJsuWbvuagh++8jOiuvue9ruWPjOiJsuWbvuagh+eahOS4u+imgeminOiJsu+8jOS7heWvueW9k+WJjSBpY29uIOeUn+aViCAqL1xuICB0d29Ub25lQ29sb3I/OiBzdHJpbmc7XG4gIC8qKiDmjIflrprmnaXoh6ogSWNvbkZvbnQg55qE5Zu+5qCH57G75Z6LICovXG4gIGljb25mb250Pzogc3RyaW5nO1xufVxuXG4vKipcbiAqIOaMiemSrumFjee9rlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFNUQ29sdW1uQnV0dG9uIHtcbiAgLyoqXG4gICAqIOaWh+acrFxuICAgKi9cbiAgdGV4dD86IHN0cmluZyB8ICgocmVjb3JkOiBTVERhdGEsIGJ0bjogU1RDb2x1bW5CdXR0b24pID0+IHN0cmluZyk7XG4gIC8qKlxuICAgKiDmlofmnKwgaTE4blxuICAgKi9cbiAgaTE4bj86IHN0cmluZztcbiAgLyoqXG4gICAqIOWbvuagh1xuICAgKi9cbiAgaWNvbj86IHN0cmluZyB8IFNUSWNvbjtcbiAgLyoqXG4gICAqIOagvOW8j+WMluaWh+acrFxuICAgKiBAZGVwcmVjYXRlZCDkvb/nlKggYHRleHRgIOS7o+abv1xuICAgKiBAZGVwcmVjYXRlZCA5LjAuMC4gVGhpcyBpcyBkZXByZWNhdGVkIGFuZCBnb2luZyB0byBiZSByZW1vdmVkIGluIDkuMC4wLlxuICAgKi9cbiAgZm9ybWF0PzogKHJlY29yZDogU1REYXRhLCBidG46IFNUQ29sdW1uQnV0dG9uKSA9PiBzdHJpbmc7XG4gIC8qKlxuICAgKiDmjInpkq7nsbvlnotcbiAgICogLSBgbm9uZWAg5peg5Lu75L2V5LqS5YqoXG4gICAqIC0gYGRlbGAg5Yig6Zmk77yM6buY6K6k5byA5ZCvIGBwb3A6IHRydWVgXG4gICAqIC0gYG1vZGFsYCDlr7nor53moYbvvIzpnIDopoHmjIflrpogYGNvbXBvbmVudGAg5omN5Lya55Sf5pWIXG4gICAqIC0gYHN0YXRpY2Ag6Z2Z5oCB5a+56K+d5qGG77yM6ZyA6KaB5oyH5a6aIGBjb21wb25lbnRgIOaJjeS8mueUn+aViFxuICAgKiAtIGBkcmF3ZXJgIOaKveWxie+8jOmcgOimgeaMh+WumiBgY29tcG9uZW50YCDmiY3kvJrnlJ/mlYhcbiAgICogLSBgbGlua2Ag6ZO+5o6l77yM5b2TIGBjbGlja2Ag6L+U5Zue5a2X56ym5Liy5pe26Ieq5Yqo6LCD55SoIGBuYXZpZ2F0ZUJ5VXJsYCDlr7zoiKpcbiAgICogLSBgZGl2aWRlcmAg5YiG5Ymy57q/XG4gICAqL1xuICB0eXBlPzogJ25vbmUnIHwgJ2RlbCcgfCAnbW9kYWwnIHwgJ3N0YXRpYycgfCAnZHJhd2VyJyB8ICdsaW5rJyB8ICdkaXZpZGVyJztcbiAgLyoqXG4gICAqIOeCueWHu+Wbnuiwg1xuICAgKiAtIEZ1bmN0aW9uXG4gICAqICAtIGB0eXBlPW1vZGFsYCDlj6rkvJrlnKjlvZPmnInkvKDlm57lgLzml7bmiY3kvJrop6blj5Hlm57osINcbiAgICogLSByZWxvYWTvvJrph43mlrDliLfmlrDlvZPliY3pobVcbiAgICogLSBsb2Fk77ya6YeN5paw5Yqg6L295pWw5o2u77yM5bm26YeN572u6aG156CB5Li677yaYDFgXG4gICAqXG4gICAqIEB0b2RvIEJhZCBwYXJhbWV0ZXIgZGVzaWduXG4gICAqL1xuICBjbGljaz86ICdyZWxvYWQnIHwgJ2xvYWQnIHwgKChyZWNvcmQ6IFNURGF0YSwgbW9kYWw/OiBhbnksIGluc3RhbmNlPzogU1RDb21wb25lbnQpID0+IGFueSk7XG4gIC8qKlxuICAgKiDmsJTms6Hnoa7orqTmoYblj4LmlbDvvIzoi6UgYHN0cmluZ2Ag57G75Z6L6KGo56S65qCH6aKYXG4gICAqL1xuICBwb3A/OiBib29sZWFuIHwgc3RyaW5nIHwgU1RDb2x1bW5CdXR0b25Qb3A7XG4gIC8qKlxuICAgKiDmsJTms6Hnoa7orqTmoYblhoXlrrnvvIzpu5jorqQgYOehruiupOWIoOmZpOWQl++8n2BcbiAgICpcbiAgICogQGRlcHJlY2F0ZWQg5bey6L+H5pyf77yM6K+35L2/55SoIGBwb3AudGl0bGVgIOabv+S7o1xuICAgKiBAZGVwcmVjYXRlZCA5LjAuMC4gVGhpcyBpcyBkZXByZWNhdGVkIGFuZCBnb2luZyB0byBiZSByZW1vdmVkIGluIDkuMC4wLlxuICAgKi9cbiAgcG9wVGl0bGU/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiDlr7nor53moYblj4LmlbBcbiAgICovXG4gIG1vZGFsPzogU1RDb2x1bW5CdXR0b25Nb2RhbDtcbiAgLyoqXG4gICAqIOaKveWxieWPguaVsFxuICAgKi9cbiAgZHJhd2VyPzogU1RDb2x1bW5CdXR0b25EcmF3ZXI7XG4gIC8qKlxuICAgKiDkuIvmi4noj5zljZXvvIzlvZPlrZjlnKjml7bku6UgYGRyb3Bkb3duYCDlvaLlvI/muLLmn5NcbiAgICogLSDlj6rmlK/mjIHkuIDnuqdcbiAgICovXG4gIGNoaWxkcmVuPzogU1RDb2x1bW5CdXR0b25bXTtcbiAgLyoqXG4gICAqIOadg+mZkO+8jOetieWQjCBbQUNMQ2FuVHlwZV0oaHR0cHM6Ly9uZy1hbGFpbi5jb20vYWNsL2dldHRpbmctc3RhcnRlZC8jQUNMQ2FuVHlwZSkg5Y+C5pWw5YC8XG4gICAqL1xuICBhY2w/OiBhbnk7XG4gIC8qKlxuICAgKiBDb25kaXRpb25hbCBleHByZXNzaW9uXG4gICAqXG4gICAqIEB0b2RvIEJhZCBwYXJhbWV0ZXIgZGVzaWduXG4gICAqL1xuICBpaWY/OiAoaXRlbTogU1REYXRhLCBidG46IFNUQ29sdW1uQnV0dG9uLCBjb2x1bW46IFNUQ29sdW1uKSA9PiBib29sZWFuO1xuICAvKipcbiAgICogQ29uZGl0aW9uYWwgZXhwcmVzc2lvbiByZW5kZXJpbmcgYmVoYXZpb3IsIGNhbiBiZSBzZXQgdG8gYGhpZGVgIChkZWZhdWx0KSBvciBgZGlzYWJsZWRgXG4gICAqL1xuICBpaWZCZWhhdmlvcj86IElpZkJlaGF2aW9yVHlwZTtcblxuICB0b29sdGlwPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCA5LjAuMC4gVGhpcyBpcyBkZXByZWNhdGVkIGFuZCBnb2luZyB0byBiZSByZW1vdmVkIGluIDkuMC4wLlxuICAgKi9cbiAgY29tcG9uZW50PzogYW55O1xuXG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTVENvbHVtbkJ1dHRvbk9LIHtcbiAgcmVjb3JkOiBTVERhdGE7XG4gIC8qKlxuICAgKiBNb2RhbCBvciBkcmF3ZXIgcmV0dXJuIHZhbHVlIHdoZW4gdHJpZ2dlciBjb25maXJtLlxuICAgKi9cbiAgcmV0PzogYW55O1xuICBpbnN0YW5jZT86IFNUQ29tcG9uZW50O1xuICBldmVudDogRXZlbnQ7XG59XG5cbmV4cG9ydCB0eXBlIElpZkJlaGF2aW9yVHlwZSA9ICdoaWRlJyB8ICdkaXNhYmxlZCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1RDb2x1bW5CdXR0b25Nb2RhbCBleHRlbmRzIE1vZGFsSGVscGVyT3B0aW9ucyB7XG4gIC8qKlxuICAgKiDlr7nor53moYbnu4Tku7blr7nosaHvvIzliqHlv4XlnKggYGVudHJ5Q29tcG9uZW50c2Ag5rOo5YaMXG4gICAqL1xuICBjb21wb25lbnQ/OiBhbnk7XG4gIC8qKlxuICAgKiDlr7nor53moYblj4LmlbBcbiAgICovXG4gIHBhcmFtcz86IChyZWNvcmQ6IFNURGF0YSkgPT4ge307XG4gIC8qKlxuICAgKiDlr7nor53moYbnm67moIfnu4Tku7bnmoTmjqXmlLblj4LmlbDlkI3vvIzpu5jorqTvvJpgcmVjb3JkYFxuICAgKi9cbiAgcGFyYW1zTmFtZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTVENvbHVtbkJ1dHRvbk1vZGFsQ29uZmlnIHtcbiAgLyoqXG4gICAqIOaMh+WumuaooeaAgeahhuebruagh+e7hOS7tueahOaOpeaUtuWPguaVsOWQje+8jOm7mOiupO+8mmByZWNvcmRgXG4gICAqL1xuICBwYXJhbXNOYW1lPzogc3RyaW5nO1xuICAvKiog5aSn5bCP77yb5L6L5aaC77yabGfjgIE2MDDvvIzpu5jorqTvvJpgbGdgICovXG4gIHNpemU/OiAnc20nIHwgJ21kJyB8ICdsZycgfCAneGwnIHwgJycgfCBudW1iZXI7XG4gIC8qKiDlr7nor53moYYgW01vZGFsT3B0aW9uc0ZvclNlcnZpY2VdKGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL2NvbXBvbmVudHMvbW9kYWwvbnotbW9kYWwudHlwZS50cykg5Y+C5pWwICovXG4gIG1vZGFsT3B0aW9ucz86IE1vZGFsT3B0aW9uc0ZvclNlcnZpY2U7XG4gIC8qKiDmmK/lkKbnsr7lh4bvvIjpu5jorqTvvJpgdHJ1ZWDvvInvvIzoi6Xov5Tlm57lgLzpnZ7nqbrlgLzvvIhgbnVsbGDmiJZgdW5kZWZpbmVkYO+8ieinhuS4uuaIkOWKn++8jOWQpuWImeinhuS4uumUmeivryAqL1xuICBleGFjdD86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1RDb2x1bW5CdXR0b25EcmF3ZXIgZXh0ZW5kcyBEcmF3ZXJIZWxwZXJPcHRpb25zIHtcbiAgLyoqXG4gICAqIOagh+mimFxuICAgKi9cbiAgdGl0bGU/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiDmir3lsYnnu4Tku7blr7nosaHvvIzliqHlv4XlnKggYGVudHJ5Q29tcG9uZW50c2Ag5rOo5YaMXG4gICAqL1xuICBjb21wb25lbnQ/OiBhbnk7XG4gIC8qKlxuICAgKiDmir3lsYnlj4LmlbBcbiAgICovXG4gIHBhcmFtcz86IChyZWNvcmQ6IFNURGF0YSkgPT4ge307XG4gIC8qKlxuICAgKiDmir3lsYnnm67moIfnu4Tku7bnmoTmjqXmlLblj4LmlbDlkI3vvIzpu5jorqTvvJpgcmVjb3JkYFxuICAgKi9cbiAgcGFyYW1zTmFtZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTVENvbHVtbkJ1dHRvbkRyYXdlckNvbmZpZyB7XG4gIC8qKlxuICAgKiDmir3lsYnnm67moIfnu4Tku7bnmoTmjqXmlLblj4LmlbDlkI3vvIzpu5jorqTvvJpgcmVjb3JkYFxuICAgKi9cbiAgcGFyYW1zTmFtZT86IHN0cmluZztcbiAgLyoqXG4gICAqIOWkp+Wwj++8m+S+i+Wmgu+8mmxn44CBNjAw77yM6buY6K6k77yaYG1kYFxuICAgKlxuICAgKiB8IOexu+WeiyB8IOm7mOiupOWkp+WwjyB8XG4gICAqIHwgLS0tIHwgLS0tLS0tIHxcbiAgICogfCBgc21gIHwgYDMwMGAgfFxuICAgKiB8IGBtZGAgfCBgNjAwYCB8XG4gICAqIHwgYGxnYCB8IGA5MDBgIHxcbiAgICogfCBgeGxgIHwgYDEyMDBgIHxcbiAgICpcbiAgICogPiDku6XkuIrlgLzvvIzlj6/pgJrov4fopobnm5bnm7jlupTnmoRMRVNT5Y+C5pWw6Ieq6KGM6LCD5pW0XG4gICAqL1xuICBzaXplPzogJ3NtJyB8ICdtZCcgfCAnbGcnIHwgJ3hsJyB8IG51bWJlcjtcbiAgLyoqXG4gICAqIOaYr+WQpuWMheWQq+W6lemDqOW3peWFt+adoe+8jOm7mOiupO+8mmB0cnVlYFxuICAgKi9cbiAgZm9vdGVyPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIOW6lemDqOW3peWFt+adoemrmOW6pu+8jOm7mOiupO+8mmA1NWBcbiAgICovXG4gIGZvb3RlckhlaWdodD86IG51bWJlcjtcbiAgLyoqIOaKveWxiSBbTnpEcmF3ZXJPcHRpb25zXShodHRwczovL25nLmFudC5kZXNpZ24vY29tcG9uZW50cy9kcmF3ZXIvemgjbnpkcmF3ZXJvcHRpb25zKSDlj4LmlbAgKi9cbiAgZHJhd2VyT3B0aW9ucz86IE56RHJhd2VyT3B0aW9ucztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTVENvbHVtbkJ1dHRvblBvcCB7XG4gIC8qKlxuICAgKiBUaXRsZSBvZiB0aGUgcG9wb3ZlciwgZGVmYXVsdDogYOehruiupOWIoOmZpOWQl++8n2BcbiAgICovXG4gIHRpdGxlPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBQb3BvdmVyIHRyaWdnZXIgbW9kZSwgZGVmYXVsdDogYGNsaWNrYFxuICAgKi9cbiAgdHJpZ2dlcj86ICdjbGljaycgfCAnZm9jdXMnIHwgJ2hvdmVyJztcblxuICAvKipcbiAgICogVGhlIHBvc2l0aW9uIG9mIHRoZSBwb3BvdmVyIHJlbGF0aXZlIHRvIHRoZSB0YXJnZXQsIGRlZmF1bHQ6IGB0b3BgXG4gICAqL1xuICBwbGFjZW1lbnQ/OlxuICAgIHwgJ3RvcCdcbiAgICB8ICdsZWZ0J1xuICAgIHwgJ3JpZ2h0J1xuICAgIHwgJ2JvdHRvbSdcbiAgICB8ICd0b3BMZWZ0J1xuICAgIHwgJ3RvcFJpZ2h0J1xuICAgIHwgJ2JvdHRvbUxlZnQnXG4gICAgfCAnYm90dG9tUmlnaHQnXG4gICAgfCAnbGVmdFRvcCdcbiAgICB8ICdsZWZ0Qm90dG9tJ1xuICAgIHwgJ3JpZ2h0VG9wJ1xuICAgIHwgJ3JpZ2h0Qm90dG9tJztcblxuICAvKipcbiAgICogQ2xhc3MgbmFtZSBvZiB0aGUgcG9wb3ZlciBjYXJkXG4gICAqL1xuICBvdmVybGF5Q2xhc3NOYW1lPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBTdHlsZSBvZiB0aGUgcG9wb3ZlciBjYXJkXG4gICAqL1xuICBvdmVybGF5U3R5bGU/OiB7fTtcblxuICAvKipcbiAgICogVGV4dCBvZiB0aGUgQ2FuY2VsIGJ1dHRvblxuICAgKi9cbiAgY2FuY2VsVGV4dD86IHN0cmluZztcblxuICAvKipcbiAgICogVGV4dCBvZiB0aGUgQ29uZmlybSBidXR0b25cbiAgICovXG4gIG9rVGV4dD86IHN0cmluZztcblxuICAvKipcbiAgICogQnV0dG9uIGB0eXBlYCBvZiB0aGUgQ29uZmlybSBidXR0b25cbiAgICovXG4gIG9rVHlwZT86ICdwcmltYXJ5JyB8ICdnaG9zdCcgfCAnZGFzaGVkJyB8ICdkYW5nZXInIHwgJ2RlZmF1bHQnO1xuXG4gIC8qKlxuICAgKiBDdXN0b21pemUgaWNvbiBvZiBjb25maXJtYXRpb25cbiAgICovXG4gIGljb24/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdG8gZGlyZWN0bHkgZW1pdCBgb25Db25maXJtYCB3aXRob3V0IHNob3dpbmcgUG9wY29uZmlybSwgZGVmYXVsdDogYCgpID0+IGZhbHNlYFxuICAgKi9cbiAgY29uZGl0aW9uPzogKGl0ZW06IFNURGF0YSkgPT4gYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTVFJlcVJlTmFtZVR5cGUge1xuICBwaT86IHN0cmluZztcbiAgcHM/OiBzdHJpbmc7XG4gIHNraXA/OiBzdHJpbmc7XG4gIGxpbWl0Pzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNUUmVzUmVOYW1lVHlwZSB7XG4gIHRvdGFsPzogc3RyaW5nIHwgc3RyaW5nW107XG4gIGxpc3Q/OiBzdHJpbmcgfCBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTVEV4cG9ydE9wdGlvbnMge1xuICBfZD86IGFueVtdO1xuICBfYz86IFNUQ29sdW1uW107XG4gIC8qKiDlt6XkvZzmuqXlkI0gKi9cbiAgc2hlZXRuYW1lPzogc3RyaW5nO1xuICAvKiog5paH5Lu25ZCNICovXG4gIGZpbGVuYW1lPzogc3RyaW5nO1xuICAvKiogdHJpZ2dlcnMgd2hlbiBzYXZlYXMgKi9cbiAgY2FsbGJhY2s/OiAod2I6IGFueSkgPT4gdm9pZDtcbn1cblxuLyoqXG4gKiDljZXmjpLluo/op4TliJlcbiAqIC0g6Iul5LiN5oyH5a6a77yM5YiZ6L+U5Zue77yaYGNvbHVtbk5hbWU9YXNjZW5kfGRlc2NlbmRgXG4gKiAtIOiLpeaMh+Wumu+8jOWImei/lOWbnu+8mmBzb3J0PWNvbHVtbk5hbWUuKGFzY2VuZHxkZXNjZW5kKWBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTVFNpbmdsZVNvcnQge1xuICAvKiog6K+35rGC5Y+C5pWw5ZCN77yM6buY6K6k77yaYHNvcnRgICovXG4gIGtleT86IHN0cmluZztcbiAgLyoqIOWIl+WQjeS4jueKtuaAgemXtOWIhumalOespu+8jOm7mOiupO+8mmAuYCAqL1xuICBuYW1lU2VwYXJhdG9yPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIOWkmuaOkuW6j+ebuOWQjOaOkuW6jyBrZXkg5pe25ZCI5bm26KeE5YiZXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU1RNdWx0aVNvcnQge1xuICAvKiog6K+35rGC5Y+C5pWw5ZCN77yM6buY6K6k77yaYHNvcnRgICovXG4gIGtleT86IHN0cmluZztcbiAgLyoqIOS4jeWQjOWxnuaAp+mXtOWIhumalOespu+8jOm7mOiupO+8mmAtYCAqL1xuICBzZXBhcmF0b3I/OiBzdHJpbmc7XG4gIC8qKiDliJflkI3kuI7nirbmgIHpl7TliIbpmpTnrKbvvIzpu5jorqTvvJpgLmAgKi9cbiAgbmFtZVNlcGFyYXRvcj86IHN0cmluZztcbiAgLyoqXG4gICAqIOaYr+WQpuWFqOWxgOWkmuaOkuW6j+aooeW8j++8jOm7mOiupO+8mmB0cnVlYFxuICAgKiAtIGB0cnVlYCDooajnpLrmiYDmnIkgYHN0YCDpu5jorqTkuLrlpJrmjpLluo9cbiAgICogLSBgZmFsc2VgIOihqOekuumcgOimgeS4uuavj+S4qiBgc3RgIOa3u+WKoCBgbXVsdGlTb3J0YCDmiY3kvJrop4bkuLrlpJrmjpLluo/mqKHlvI9cbiAgICovXG4gIGdsb2JhbD86IGJvb2xlYW47XG59XG5cbi8qKlxuICog5b695qCH5L+h5oGvXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU1RDb2x1bW5CYWRnZSB7XG4gIFtrZXk6IG51bWJlcl06IFNUQ29sdW1uQmFkZ2VWYWx1ZTtcbiAgW2tleTogc3RyaW5nXTogU1RDb2x1bW5CYWRnZVZhbHVlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNUQ29sdW1uQmFkZ2VWYWx1ZSB7XG4gIC8qKlxuICAgKiDmlofmnKxcbiAgICovXG4gIHRleHQ/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiDlvr3moIfpopzoibLlgLxcbiAgICovXG4gIGNvbG9yPzogJ3N1Y2Nlc3MnIHwgJ3Byb2Nlc3NpbmcnIHwgJ2RlZmF1bHQnIHwgJ2Vycm9yJyB8ICd3YXJuaW5nJztcbn1cblxuLyoqXG4gKiDmoIfnrb7kv6Hmga9cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTVENvbHVtblRhZyB7XG4gIFtrZXk6IG51bWJlcl06IFNUQ29sdW1uVGFnVmFsdWU7XG4gIFtrZXk6IHN0cmluZ106IFNUQ29sdW1uVGFnVmFsdWU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1RDb2x1bW5UYWdWYWx1ZSB7XG4gIC8qKlxuICAgKiDmlofmnKxcbiAgICovXG4gIHRleHQ/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiDpopzoibLlgLzvvIzmlK/mjIHpooTorr7lkozoibLlgLxcbiAgICogLSDpooTorr7vvJpnZWVrYmx1ZSxibHVlLHB1cnBsZSxzdWNjZXNzLHJlZCx2b2xjYW5vLG9yYW5nZSxnb2xkLGxpbWUsZ3JlZW4sY3lhblxuICAgKiAtIOiJsuWAvO+8miNmNTAsI2ZmMFxuICAgKi9cbiAgY29sb3I/OiAnZ2Vla2JsdWUnIHwgJ2JsdWUnIHwgJ3B1cnBsZScgfCAnc3VjY2VzcycgfCAncmVkJyB8ICd2b2xjYW5vJyB8ICdvcmFuZ2UnIHwgJ2dvbGQnIHwgJ2xpbWUnIHwgJ2dyZWVuJyB8ICdjeWFuJyB8IHN0cmluZztcbn1cblxuZXhwb3J0IHR5cGUgU1RDaGFuZ2VUeXBlID0gJ2xvYWRlZCcgfCAncGknIHwgJ3BzJyB8ICdjaGVja2JveCcgfCAncmFkaW8nIHwgJ3NvcnQnIHwgJ2ZpbHRlcicgfCAnY2xpY2snIHwgJ2RibENsaWNrJyB8ICdleHBhbmQnO1xuXG4vKipcbiAqIOWbnuiwg+aVsOaNrlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFNUQ2hhbmdlIHtcbiAgLyoqXG4gICAqIOWbnuiwg+exu+Wei1xuICAgKi9cbiAgdHlwZTogU1RDaGFuZ2VUeXBlO1xuICAvKipcbiAgICog5b2T5YmN6aG156CBXG4gICAqL1xuICBwaTogbnVtYmVyO1xuICAvKipcbiAgICog5q+P6aG15pWw6YePXG4gICAqL1xuICBwczogbnVtYmVyO1xuICAvKipcbiAgICog5pWw5o2u5oC76YePXG4gICAqL1xuICB0b3RhbDogbnVtYmVyO1xuICAvKipcbiAgICogYGxvYWRlZGAg5Y+C5pWwXG4gICAqL1xuICBsb2FkZWQ/OiBTVERhdGFbXTtcbiAgLyoqXG4gICAqIGBjaGVja2JveGAg5Y+C5pWwXG4gICAqL1xuICBjaGVja2JveD86IFNURGF0YVtdO1xuICAvKipcbiAgICogYHJhZGlvYCDlj4LmlbBcbiAgICovXG4gIHJhZGlvPzogU1REYXRhO1xuICAvKipcbiAgICog5o6S5bqP5Y+C5pWwXG4gICAqL1xuICBzb3J0PzogU1RDaGFuZ2VTb3J0O1xuICAvKipcbiAgICog6L+H5ruk5Y+C5pWwXG4gICAqL1xuICBmaWx0ZXI/OiBTVENvbHVtbjtcbiAgLyoqXG4gICAqIOihjOeCueWHu+aIluWPjOWHu+WPguaVsFxuICAgKi9cbiAgY2xpY2s/OiBTVENoYW5nZVJvd0NsaWNrO1xuICAvKipcbiAgICogYGV4cGFuZGAg5Y+C5pWwXG4gICAqL1xuICBleHBhbmQ/OiBTVERhdGE7XG59XG5cbi8qKiDooYzljZXlh7vlj4LmlbAgKi9cbmV4cG9ydCBpbnRlcmZhY2UgU1RDaGFuZ2VTb3J0IHtcbiAgdmFsdWU/OiAnYXNjZW5kJyB8ICdkZXNjZW5kJztcbiAgbWFwPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbiAgY29sdW1uPzogU1RDb2x1bW47XG59XG5cbi8qKiDooYzljZXlh7vlj4LmlbAgKi9cbmV4cG9ydCBpbnRlcmZhY2UgU1RDaGFuZ2VSb3dDbGljayB7XG4gIGU/OiBFdmVudDtcbiAgaXRlbT86IFNURGF0YTtcbiAgaW5kZXg/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1RFcnJvciB7XG4gIHR5cGU/OiAncmVxJztcbiAgZXJyb3I/OiBhbnk7XG59XG5cbmV4cG9ydCB0eXBlIFNUUm93Q2xhc3NOYW1lID0gKHJlY29yZDogU1REYXRhLCBpbmRleDogbnVtYmVyKSA9PiBzdHJpbmc7XG4iXX0=