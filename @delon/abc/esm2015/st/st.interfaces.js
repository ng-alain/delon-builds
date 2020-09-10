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
     * - `link` 链接，务必指定 `click`
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QuaW50ZXJmYWNlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9zdC9zdC5pbnRlcmZhY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBT0EsaUNBYUM7Ozs7Ozs7O0lBUEMsMkJBQTRCOzs7Ozs7O0lBTTVCLHFDQUFxQzs7Ozs7QUFHdkMsMENBWUM7OztJQVhDLGtDQUFZOztJQUNaLGtDQUFZOztJQUNaLHVDQUFxQjs7Ozs7SUFJckIsNENBQXVCOzs7OztJQUl2QiwwQ0FBcUI7Ozs7O0FBR3ZCLDJCQW1DQzs7Ozs7Ozs7SUE3QkMscUJBQXVCOzs7Ozs7SUFLdkIsdUJBQWE7Ozs7O0lBRWIsdUJBQWdCOzs7OztJQUVoQixxQkFBVzs7Ozs7SUFFWCx3QkFBYzs7Ozs7O0lBS2QsdUJBQXlCOzs7OztJQUl6QiwwQkFBb0I7Ozs7O0lBSXBCLHlCQUFtQjs7Ozs7SUFJbkIsd0JBQWlFOzs7OztBQUduRSxzQ0FnQkM7OztJQWZDLGdDQUFXOztJQUNYLG1DQUlNOztJQUNOLGtDQUlNOztJQUNOLG1DQUF5Qzs7SUFDekMsMENBQXlCOztJQUN6Qix3Q0FBd0Q7O0lBQ3hELDJDQUEwQjs7Ozs7QUFHNUIsbUNBS0M7Ozs7OztJQUhDLDhCQUFnQjs7Ozs7SUFFaEIsOEJBQWdCOzs7OztBQUdsQiwyQkFVQzs7Ozs7OztJQUxDLHVCQUF5Qjs7Ozs7SUFJekIsd0JBQXNEOzs7OztBQUd4RCw0QkFvREM7Ozs7Ozs7O0lBOUNDLHVCQUFnQjs7Ozs7SUFJaEIsNkJBQXNCOzs7OztJQUl0QiwwQkFBcUM7Ozs7O0lBSXJDLDJCQUF3Qzs7Ozs7SUFJeEMsc0JBQWU7Ozs7O0lBSWYsMEJBQW1COzs7OztJQUluQiwyQkFBcUI7Ozs7O0lBSXJCLGlDQUEwQjs7Ozs7Ozs7OztJQVMxQix1QkFBeUI7Ozs7O0lBSXpCLHVCQUFnQjs7Ozs7SUFJaEIsNkJBQXFCOzs7Ozs7QUFNdkIsNEJBbUJDOzs7Ozs7SUFm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QXpCQywwQkFBYTs7Ozs7SUFFYixnQ0FBbUI7Ozs7O0lBRW5CLG9DQUF1Qjs7Ozs7OztJQU12QixpQ0FBcUI7Ozs7Ozs7SUFNckIsbUNBQXVCOzs7Ozs7Ozs7SUFRdkIsNkJBQWlCOzs7Ozs7QUFRbkIsbUNBR0M7Ozs7QUFFRCx3Q0FTQzs7Ozs7O0lBTEMsa0NBQWM7Ozs7O0lBSWQsbUNBQW1FOzs7Ozs7QUFNckUsaUNBR0M7Ozs7QUFFRCxzQ0FXQzs7Ozs7O0lBUEMsZ0NBQWM7Ozs7Ozs7SUFNZCxpQ0FBZ0k7Ozs7OztBQVFsSSw4QkFxREM7Ozs7OztJQWpEQyx3QkFBbUI7Ozs7O0lBSW5CLHNCQUFXOzs7OztJQUlYLHNCQUFXOzs7OztJQUlYLHlCQUFjOzs7OztJQUlkLDBCQUFrQjs7Ozs7SUFJbEIsNEJBQW9COzs7OztJQUlwQix5QkFBZTs7Ozs7SUFJZix3QkFBb0I7Ozs7O0lBSXBCLDBCQUFrQjs7Ozs7SUFJbEIseUJBQXlCOzs7OztJQUl6Qiw0QkFBNEI7Ozs7O0lBSTVCLDBCQUFnQjs7Ozs7SUFJaEIsMEJBQWtCOzs7Ozs7QUFJcEIsa0NBSUM7OztJQUhDLDZCQUE2Qjs7SUFDN0IsMkJBQWdDOztJQUNoQyw4QkFBa0I7Ozs7OztBQUlwQixzQ0FJQzs7O0lBSEMsNkJBQVU7O0lBQ1YsZ0NBQWM7O0lBQ2QsaUNBQWU7Ozs7O0FBR2pCLDZCQUdDOzs7SUFGQyx1QkFBYTs7SUFDYix3QkFBWTs7Ozs7QUFLZCx1Q0FPQzs7O0lBTkMsbUNBQWlCOztJQUNqQixxQ0FBaUI7O0lBQ2pCLG1DQUFnQjs7SUFDaEIsb0NBQWlCOztJQUNqQixvQ0FBaUI7O0lBQ2pCLDBDQUF3Qjs7Ozs7QUFHMUIsaUNBcUJDOzs7Ozs7SUFqQkMsK0JBQW1COzs7OztJQUluQiw2QkFBdUQ7Ozs7O0lBSXZELCtCQUFrQjs7Ozs7SUFJbEIsK0JBQWtCOzs7OztJQUlsQiw4QkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwSGVhZGVycywgSHR0cFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERyYXdlckhlbHBlck9wdGlvbnMsIE1vZGFsSGVscGVyT3B0aW9ucywgWU5Nb2RlIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcbmltcG9ydCB7IE56RHJhd2VyT3B0aW9ucyB9IGZyb20gJ25nLXpvcnJvLWFudGQvZHJhd2VyJztcbmltcG9ydCB7IE1vZGFsT3B0aW9ucyB9IGZyb20gJ25nLXpvcnJvLWFudGQvbW9kYWwnO1xuaW1wb3J0IHsgU1RDb21wb25lbnQgfSBmcm9tICcuL3N0LmNvbXBvbmVudCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1RXaWR0aE1vZGUge1xuICAvKipcbiAgICog5a695bqm57G75Z6LXG4gICAqIC0gYGRlZmF1bHRgIOm7mOiupOihjOS4ulxuICAgKiAtIGBzdHJpY3RgIOS4peagvOaooeW8j++8jOWNs+W8uuWItuaMiSBgd2lkdGhgIOaMh+WumueahOWuveW6puWRiOeOsO+8jOW5tuagueaNriBgc3RyaWN0QmVoYXZpb3JgIOexu+Wei+WkhOeQhlxuICAgKi9cbiAgdHlwZT86ICdzdHJpY3QnIHwgJ2RlZmF1bHQnO1xuICAvKipcbiAgICog5Lil5qC85qih5byP55qE5aSE55CG6KGM5Li6XG4gICAqIC0gYHdyYXBgIOW8uuWItuaNouihjFxuICAgKiAtIGB0cnVuY2F0ZWAg5oiq55+tXG4gICAqL1xuICBzdHJpY3RCZWhhdmlvcj86ICd3cmFwJyB8ICd0cnVuY2F0ZSc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1RSZXNldENvbHVtbnNPcHRpb24ge1xuICBwaT86IG51bWJlcjtcbiAgcHM/OiBudW1iZXI7XG4gIGNvbHVtbnM/OiBTVENvbHVtbltdO1xuICAvKipcbiAgICogV2hldGhlciB0byBwcmUtY2xlYXIgZGF0YSwgRGVmYXVsdDogYGZhbHNlYFxuICAgKi9cbiAgcHJlQ2xlYXJEYXRhPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIFdoZXRoZXIgdG8gdHJpZ2dlciBhIGRhdGEgbG9hZCwgRGVmYXVsdDogYHRydWVgXG4gICAqL1xuICBlbWl0UmVsb2FkPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTVFJlcSB7XG4gIC8qKlxuICAgKiDliIbpobXnsbvlnovvvIzpu5jorqTvvJpgcGFnZWBcbiAgICogLSBgcGFnZWAg5L2/55SoIGBwaWDvvIxgcHNgIOe7hOWQiFxuICAgKiAtIGBza2lwYCDkvb/nlKggYHNraXBg77yMYGxpbWl0YCDnu4TlkIhcbiAgICovXG4gIHR5cGU/OiAncGFnZScgfCAnc2tpcCc7XG4gIC8qKlxuICAgKiDpop3lpJbor7fmsYLlj4LmlbDvvIzpu5jorqToh6rliqjpmYTliqAgYHBpYOOAgWBwc2Ag6IezVVJMXG4gICAqIC0gYHsgc3RhdHVzOiAnbmV3JyB9YCA9PiBgdXJsP3BpPTEmcHM9MTAmc3RhdHVzPW5ld2BcbiAgICovXG4gIHBhcmFtcz86IGFueTtcbiAgLyoqIOivt+axguaWueazle+8jOm7mOiupO+8mmBHRVRgICovXG4gIG1ldGhvZD86IHN0cmluZztcbiAgLyoqIOivt+axguS9kyBgYm9keWAgKi9cbiAgYm9keT86IGFueTtcbiAgLyoqIOivt+axguS9kyBgSGVhZGVyYCAqL1xuICBoZWFkZXJzPzogYW55O1xuICAvKipcbiAgICog6YeN5ZG95ZCN5Y+C5pWwIGBwaWDjgIFgcHNg77yM6buY6K6k77yaYHsgcGk6ICdwaScsIHBzOiAncHMnIH1gXG4gICAqIC0gYHsgcGk6ICdQYWdlJyB9YCA9PiBgcGlgIOS8muiiq+abv+aNouaIkCBQYWdlXG4gICAqL1xuICByZU5hbWU/OiBTVFJlcVJlTmFtZVR5cGU7XG4gIC8qKlxuICAgKiDmmK/lkKblsIbor7fmsYLmiYDmnInlj4LmlbDmlbDmja7pg73mlL7lhaUgYGJvZHlgIOW9k+S4re+8iGB1cmxgIOWcsOWdgOacrOi6q+WPguaVsOmZpOWklu+8ie+8jOS7heW9kyBgbWV0aG9kOiAnUE9TVCdgIOaXtuacieaViO+8jOm7mOiupO+8mmBmYWxzZWBcbiAgICovXG4gIGFsbEluQm9keT86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDmmK/lkKblu7bov5/liqDovb3mlbDmja7vvIzljbPmuLLmn5Pnu5PmnZ/lkI7kuI3kvJrkuLvliqjlj5Hotbfor7fmsYLvvIzpu5jorqTvvJpgZmFsc2VgXG4gICAqL1xuICBsYXp5TG9hZD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDor7fmsYLliY3mlbDmja7lpITnkIZcbiAgICovXG4gIHByb2Nlc3M/OiAocmVxdWVzdE9wdGlvbnM6IFNUUmVxdWVzdE9wdGlvbnMpID0+IFNUUmVxdWVzdE9wdGlvbnM7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1RSZXF1ZXN0T3B0aW9ucyB7XG4gIGJvZHk/OiBhbnk7XG4gIGhlYWRlcnM/OlxuICAgIHwgSHR0cEhlYWRlcnNcbiAgICB8IHtcbiAgICAgICAgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XG4gICAgICB9O1xuICBwYXJhbXM/OlxuICAgIHwgSHR0cFBhcmFtc1xuICAgIHwge1xuICAgICAgICBbcGFyYW06IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xuICAgICAgfTtcbiAgb2JzZXJ2ZT86ICdib2R5JyB8ICdldmVudHMnIHwgJ3Jlc3BvbnNlJztcbiAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xuICByZXNwb25zZVR5cGU/OiAnYXJyYXlidWZmZXInIHwgJ2Jsb2InIHwgJ2pzb24nIHwgJ3RleHQnO1xuICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNUTG9hZE9wdGlvbnMge1xuICAvKiog5piv5ZCm5ZCI5bm277yM6buY6K6k77yaYGZhbHNlYCAqL1xuICBtZXJnZT86IGJvb2xlYW47XG4gIC8qKiDmmK/lkKbot7Povazoh7Ppobbpg6jvvIzoi6XkuI3mjIflrprnlLEgYHBhZ2UudG9Ub3BgIOadpeWGs+WumiAqL1xuICB0b1RvcD86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1RSZXMge1xuICAvKipcbiAgICog6YeN5ZG95ZCN6L+U5Zue5Y+C5pWwIGB0b3RhbGDjgIFgbGlzdGBcbiAgICogLSBgeyB0b3RhbDogJ1RvdGFsJyB9YCA9PiBUb3RhbCDkvJrooqvlvZPkvZwgYHRvdGFsYFxuICAgKi9cbiAgcmVOYW1lPzogU1RSZXNSZU5hbWVUeXBlO1xuICAvKipcbiAgICog5pWw5o2u6aKE5aSE55CGXG4gICAqL1xuICBwcm9jZXNzPzogKGRhdGE6IFNURGF0YVtdLCByYXdEYXRhPzogYW55KSA9PiBTVERhdGFbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTVFBhZ2Uge1xuICAvKipcbiAgICog5YmN56uv5YiG6aG177yM5b2TIGBkYXRhYCDkuLpgYW55W11gIOaIliBgT2JzZXJ2YWJsZTxhbnlbXT5gIOacieaViO+8jOm7mOiupO+8mmB0cnVlYFxuICAgKiAtIGB0cnVlYCDnlLEgYHN0YCDmoLnmja4gYGRhdGFgIOmVv+W6puWPl+aOp+WIhumhte+8jOWMheaLrO+8muaOkuW6j+OAgei/h+a7pOetiVxuICAgKiAtIGBmYWxzZWAg55Sx55So5oi36YCa6L+HIGB0b3RhbGAg5ZKMIGBkYXRhYCDlj4LmlbDlj5fmjqfliIbpobXvvIzlubbnu7TmiqQgYChjaGFuZ2UpYCDlvZPliIbpobXlj5jmm7Tml7bph43mlrDliqDovb3mlbDmja5cbiAgICovXG4gIGZyb250PzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIOWQjuerr+WIhumhteaYr+WQpumHh+eUqGAwYOWfuue0ouW8le+8jOWPquWcqGBkYXRhYOexu+Wei+S4umBzdHJpbmdg5pe25pyJ5pWI77yM6buY6K6k77yaYGZhbHNlYFxuICAgKi9cbiAgemVyb0luZGV4ZWQ/OiBib29sZWFuO1xuICAvKipcbiAgICog5oyH5a6a5YiG6aG15pi+56S655qE5L2N572u77yM6buY6K6k77yaYGJvdHRvbWBcbiAgICovXG4gIHBvc2l0aW9uPzogJ3RvcCcgfCAnYm90dG9tJyB8ICdib3RoJztcbiAgLyoqXG4gICAqIOaMh+WumuWIhumhteWIhumhteaWueWQke+8jOm7mOiupO+8mmByaWdodGBcbiAgICovXG4gIHBsYWNlbWVudD86ICdsZWZ0JyB8ICdjZW50ZXInIHwgJ3JpZ2h0JztcbiAgLyoqXG4gICAqIOaYr+WQpuaYvuekuuWIhumhteWZqO+8jOm7mOiupO+8mmB0cnVlYFxuICAgKi9cbiAgc2hvdz86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDmmK/lkKbmmL7npLrliIbpobXlmajkuK3mlLnlj5jpobXmlbDvvIzpu5jorqTvvJpgZmFsc2VgXG4gICAqL1xuICBzaG93U2l6ZT86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDliIbpobXlmajkuK3mr4/pobXmmL7npLrmnaHnm67mlbDkuIvmi4nmoYblgLzvvIzpu5jorqTvvJpgWzEwLCAyMCwgMzAsIDQwLCA1MF1gXG4gICAqL1xuICBwYWdlU2l6ZXM/OiBudW1iZXJbXTtcbiAgLyoqXG4gICAqIOaYr+WQpuaYvuekuuWIhumhteWZqOS4reW/q+mAn+i3s+i9rO+8jOm7mOiupO+8mmBmYWxzZWBcbiAgICovXG4gIHNob3dRdWlja0p1bXBlcj86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDmmK/lkKbmmL7npLrmgLvmlbDmja7ph49cbiAgICogLSBgYm9vbGVhbmAg57G75Z6L5pi+56S65LiO5ZCm77yM6buY6K6k5qih5p2/77yaYOWFsSB7e3RvdGFsfX0g5p2hYFxuICAgKiAtIGBzdHJpbmdgIOiHquWumuS5ieaooeadv++8jOaooeadv+WPmOmHj++8mlxuICAgKiAgLSBge3t0b3RhbH19YCDooajnpLrmlbDmja7mgLvph49cbiAgICogIC0gYHt7cmFuZ2VbMF19fWAg6KGo56S65b2T5YmN6aG15byA5aeL5pWw6YeP5YC8XG4gICAqICAtIGB7e3JhbmdlWzFdfX1gIOihqOekuuW9k+WJjemhtee7k+adn+aVsOmHj+WAvFxuICAgKi9cbiAgdG90YWw/OiBzdHJpbmcgfCBib29sZWFuO1xuICAvKipcbiAgICog5YiH5o2i5YiG6aG15pe26L+U5Zue6aG26YOo77yM6buY6K6k77yaYHRydWVgXG4gICAqL1xuICB0b1RvcD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDov5Tlm57pobbpg6jlgY/np7vlgLzvvIzpu5jorqTvvJpgMTAwYFxuICAgKi9cbiAgdG9Ub3BPZmZzZXQ/OiBudW1iZXI7XG59XG5cbi8qKlxuICog5pWw5o2u5rqQXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU1REYXRhIHtcbiAgLyoqXG4gICAqIOmAieaLqeahhuaIluWNlemAieahhueKtuaAgeWAvFxuICAgKi9cbiAgY2hlY2tlZD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDpgInmi6nmoYbmiJbljZXpgInmoYYgYGRpc2FibGVkYCDlgLxcbiAgICovXG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIOaYr+WQpuWxleW8gOeKtuaAgVxuICAgKi9cbiAgZXhwYW5kPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIOaYr+WQpuaYvuekuuWxleW8gOaMiemSrlxuICAgKi9cbiAgc2hvd0V4cGFuZD86IGJvb2xlYW47XG5cbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG4vKipcbiAqIOWIl+aPj+i/sFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFNUQ29sdW1uIHtcbiAgLyoqXG4gICAqIOeUqOS6juWumuS5ieaVsOaNrua6kOS4u+mUru+8jOS+i+Wmgu+8mmBzdGF0aXN0aWNhbGBcbiAgICovXG4gIGtleT86IHN0cmluZztcbiAgLyoqXG4gICAqIOWIl+agh+mimFxuICAgKi9cbiAgdGl0bGU/OiBzdHJpbmcgfCBTVENvbHVtblRpdGxlO1xuICAvKipcbiAgICog5YiX5pWw5o2u5Zyo5pWw5o2u6aG55Lit5a+55bqU55qEIGtlee+8jOaUr+aMgSBgYS5iLmNgIOeahOW1jOWll+WGmeazle+8jOS+i+Wmgu+8mlxuICAgKiAtIGBpZGBcbiAgICogLSBgcHJpY2UubWFya2V0YFxuICAgKiAtIGBbICdwcmljZScsICdtYXJrZXQnIF1gXG4gICAqL1xuICBpbmRleD86IHN0cmluZyB8IHN0cmluZ1tdIHwgbnVsbDtcbiAgLyoqXG4gICAqIOexu+Wei1xuICAgKiAtIGBub2Ag6KGM5Y+377yM6K6h566X6KeE5YiZ77yaYGluZGV4ICsgbm9JbmRleGBcbiAgICogLSBgY2hlY2tib3hgIOWkmumAiVxuICAgKiAtIGByYWRpb2Ag5Y2V6YCJXG4gICAqIC0gYGxpbmtgIOmTvuaOpe+8jOWKoeW/heaMh+WumiBgY2xpY2tgXG4gICAqIC0gYGJhZGdlYCBb5b695qCHXShodHRwczovL25nLmFudC5kZXNpZ24vY29tcG9uZW50cy9iYWRnZS96aCnvvIzliqHlv4XmjIflrpogYGJhZGdlYCDlj4LmlbDphY3nva7lvr3moIflr7nlupTlgLxcbiAgICogLSBgdGFnYCBb5qCH562+XShodHRwczovL25nLmFudC5kZXNpZ24vY29tcG9uZW50cy90YWcvemgp77yM5Yqh5b+F5oyH5a6aIGB0YWdgIOWPguaVsOmFjee9ruagh+etvuWvueW6lOWAvFxuICAgKiAtIGBlbnVtYCDmnprkuL7ovazmjaLvvIzliqHlv4XmjIflrpogYGVudW1gIOWPguaVsOmFjee9ruagh+etvuWvueW6lOWAvFxuICAgKiAtIGBpbWdgIOWbvueJh+S4lOWxheS4rSjoi6UgYGNsYXNzTmFtZWAg5a2Y5Zyo5YiZ5LyY5YWIKVxuICAgKiAtIGBudW1iZXJgIOaVsOWtl+S4lOWxheWPsyjoi6UgYGNsYXNzTmFtZWAg5a2Y5Zyo5YiZ5LyY5YWIKVxuICAgKiAtIGBjdXJyZW5jeWAg6LSn5biB5LiU5bGF5Y+zKOiLpSBgY2xhc3NOYW1lYCDlrZjlnKjliJnkvJjlhYgpXG4gICAqIC0gYGRhdGVgIOaXpeacn+agvOW8j+S4lOWxheS4rSjoi6UgYGNsYXNzTmFtZWAg5a2Y5Zyo5YiZ5LyY5YWIKe+8jOS9v+eUqCBgZGF0ZUZvcm1hdGAg6Ieq5a6a5LmJ5qC85byPXG4gICAqIC0gYHluYCDlsIZgYm9vbGVhbmDnsbvlnovlvr3nq6DljJYgW2RvY3VtZW50XShodHRwczovL25nLWFsYWluLmNvbS9kb2NzL2RhdGEtcmVuZGVyI3luKVxuICAgKiAtIGB3aWRnZXRgIOS9v+eUqOiHquWumuS5ieWwj+mDqOS7tuWKqOaAgeWIm+W7ulxuICAgKi9cbiAgdHlwZT86ICcnIHwgJ2NoZWNrYm94JyB8ICdsaW5rJyB8ICdiYWRnZScgfCAndGFnJyB8ICdlbnVtJyB8ICdyYWRpbycgfCAnaW1nJyB8ICdjdXJyZW5jeScgfCAnbnVtYmVyJyB8ICdkYXRlJyB8ICd5bicgfCAnbm8nIHwgJ3dpZGdldCc7XG4gIC8qKlxuICAgKiDpk77mjqXlm57osIPvvIzoi6Xov5Tlm57kuIDkuKrlrZfnrKbkuLLooajnpLrlr7zoiKpVUkzkvJroh6rliqjop6blj5EgYHJvdXRlci5uYXZpZ2F0ZUJ5VXJsYFxuICAgKi9cbiAgY2xpY2s/OiAocmVjb3JkOiBTVERhdGEsIGluc3RhbmNlPzogU1RDb21wb25lbnQpID0+IGFueTtcbiAgLyoqXG4gICAqIOaMiemSrue7hFxuICAgKi9cbiAgYnV0dG9ucz86IFNUQ29sdW1uQnV0dG9uW107XG4gIC8qKlxuICAgKiDoh6rlrprkuYnmuLLmn5NJRFxuICAgKiBAZXhhbXBsZVxuICAgKiA8bmctdGVtcGxhdGUgc3Qtcm93PVwiY3VzdG9tXCIgbGV0LWl0ZW0gbGV0LWluZGV4PVwiaW5kZXhcIiBsZXQtY29sdW1uPVwiY29sdW1uXCI+XG4gICAqICB7eyBjLnRpdGxlIH19XG4gICAqIDwvbmctdGVtcGxhdGU+XG4gICAqL1xuICByZW5kZXI/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiDmoIfpopjoh6rlrprkuYnmuLLmn5NJRFxuICAgKiBAZXhhbXBsZVxuICAgKiA8bmctdGVtcGxhdGUgc3Qtcm93PVwiY3VzdG9tXCIgdHlwZT1cInRpdGxlXCIgbGV0LWM+XG4gICAqICB7eyBpdGVtIHwganNvbiB9fVxuICAgKiA8L25nLXRlbXBsYXRlPlxuICAgKi9cbiAgcmVuZGVyVGl0bGU/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiDliJflrr3vvIjmlbDlrZflnovooajnpLogYHB4YCDlgLzvvInvvIzkvovlpoLvvJpgMTAwYOOAgWAxMCVg44CBYDEwMHB4YFxuICAgKlxuICAgKiAqKuazqOaEj++8mioqIOiLpeWbuuWumuWIl+W/hemhu+aYr+aVsOWtl1xuICAgKi9cbiAgd2lkdGg/OiBzdHJpbmcgfCBudW1iZXI7XG4gIC8qKlxuICAgKiDmjpLluo/phY3nva7pobnvvIzov5znqIvmlbDmja7phY3nva4qKuS8mOWFiCoq6KeE5YiZ77yaXG4gICAqIC0gYHRydWVgIOihqOekuuWFgeiuuOaOkuW6j++8jOS4lOiLpeaVsOaNrua6kOS4uuacrOWcsOaXtuiHquWKqOeUn+aIkCBgY29tcGFyZTogKGEsIGIpID0+IGFbaW5kZXhdIC0gYltpbmRleF1gIOaWueazlVxuICAgKiAtIGBzdHJpbmdgIOihqOekuui/nOeoi+aVsOaNruaOkuW6j+ebuOWvueW6lCBga2V5YCDlgLxcbiAgICovXG4gIHNvcnQ/OiB0cnVlIHwgc3RyaW5nIHwgU1RDb2x1bW5Tb3J0O1xuICAvKipcbiAgICog6L+H5ruk6YWN572u6aG5XG4gICAqL1xuICBmaWx0ZXI/OiBTVENvbHVtbkZpbHRlcjtcbiAgLyoqXG4gICAqIOagvOW8j+WMluWIl+WAvFxuICAgKi9cbiAgZm9ybWF0PzogKGl0ZW06IFNURGF0YSwgY29sOiBTVENvbHVtbiwgaW5kZXg6IG51bWJlcikgPT4gc3RyaW5nO1xuICAvKipcbiAgICog6Ieq5a6a5LmJ5YWoL+WPjemAiemAieaLqemhuVxuICAgKi9cbiAgc2VsZWN0aW9ucz86IFNUQ29sdW1uU2VsZWN0aW9uW107XG4gIC8qKlxuICAgKiDliJcgYGNsYXNzYCDlsZ7mgKflgLzvvIjms6jvvJrml6DpobsgYC5gIOeCue+8ieWkmuS4queUqOepuuagvOmalOW8gO+8jOS+i+Wmgu+8mlxuICAgKiAtIGB0ZXh0LWNlbnRlcmAg5bGF5LitXG4gICAqIC0gYHRleHQtcmlnaHRgIOWxheWPs1xuICAgKiAtIGB0ZXh0LXN1Y2Nlc3NgIOaIkOWKn+iJslxuICAgKiAtIGB0ZXh0LWVycm9yYCDlvILluLjoibJcbiAgICovXG4gIGNsYXNzTmFtZT86IHN0cmluZyB8IHN0cmluZ1tdIHwgU2V0PHN0cmluZz4gfCB7IFtrbGFzczogc3RyaW5nXTogYW55IH07XG4gIC8qKlxuICAgKiDlkIjlubbliJdcbiAgICovXG4gIGNvbFNwYW4/OiBudW1iZXI7XG4gIC8qKlxuICAgKiDmlbDlrZfmoLzlvI/vvIxgdHlwZT1udW1iZXJgIOacieaViFxuICAgKi9cbiAgbnVtYmVyRGlnaXRzPzogc3RyaW5nO1xuICAvKipcbiAgICog5pel5pyf5qC85byP77yMYHR5cGU9ZGF0ZWAg5pyJ5pWI77yM77yI6buY6K6k77yaYHl5eXktTU0tZGQgSEg6bW1g77yJXG4gICAqL1xuICBkYXRlRm9ybWF0Pzogc3RyaW5nO1xuICAvKipcbiAgICog5b2TIGB0eXBlPXluYCDmnInmlYhcbiAgICovXG4gIHluPzogU1RDb2x1bW5ZbjtcbiAgLyoqXG4gICAqIOaYr+WQpuWFgeiuuOWvvOWHuu+8jOm7mOiupCBgdHJ1ZWBcbiAgICovXG4gIGV4cG9ydGVkPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIOadg+mZkO+8jOetieWQjCBbQUNMQ2FuVHlwZV0oaHR0cHM6Ly9uZy1hbGFpbi5jb20vYWNsL2dldHRpbmctc3RhcnRlZC8jQUNMQ2FuVHlwZSkg5Y+C5pWw5YC8XG4gICAqL1xuICBhY2w/OiBhbnk7XG4gIC8qKiDlvZPkuI3lrZjlnKjmlbDmja7ml7bku6Xpu5jorqTlgLzmm7/ku6MgKi9cbiAgZGVmYXVsdD86IHN0cmluZztcbiAgLyoqXG4gICAqIOWbuuWumuWJjeWQjuWIl++8jOW9k+aMh+WumuaXtuWKoeW/heaMh+WumiBgd2lkdGhgIOWQpuWImeinhuS4uuaXoOaViO+8jOacieiLpeW5siAqKuazqOaEj++8mioqIOmhue+8mlxuICAgKlxuICAgKiAtIOiLpeWIl+WktOS4juWGheWuueS4jeWvuem9kOaIluWHuueOsOWIl+mHjeWkje+8jOivt+aMh+WumuWIl+eahOWuveW6piBgd2lkdGhgXG4gICAqIC0g5bu66K6u5oyH5a6aIGBzY3JvbGwueGAg5Li65aSn5LqO6KGo5qC85a695bqm55qE5Zu65a6a5YC85oiW55m+5YiG5q+U44CC5rOo5oSP77yM5LiU6Z2e5Zu65a6a5YiX5a695bqm5LmL5ZKM5LiN6KaB6LaF6L+HIGBzY3JvbGwueGBcbiAgICovXG4gIGZpeGVkPzogJ2xlZnQnIHwgJ3JpZ2h0JztcbiAgLyoqXG4gICAqIOW+veagh+mFjee9rumhuVxuICAgKi9cbiAgYmFkZ2U/OiBTVENvbHVtbkJhZGdlIHwgbnVsbDtcbiAgLyoqXG4gICAqIOagh+etvumFjee9rumhuVxuICAgKi9cbiAgdGFnPzogU1RDb2x1bW5UYWcgfCBudWxsO1xuICAvKipcbiAgICog6KGM5Y+357Si5byV77yM6buY6K6k77yaYDFgXG4gICAqIC0g6K6h566X6KeE5YiZ5Li677yaYGluZGV4ICsgbm9JbmRleGBcbiAgICogLSDmlK/mjIHoh6rlrprkuYnmlrnms5VcbiAgICovXG4gIG5vSW5kZXg/OiBudW1iZXIgfCAoKGl0ZW06IFNURGF0YSwgY29sOiBTVENvbHVtbiwgaWR4OiBudW1iZXIpID0+IG51bWJlcik7XG4gIC8qKlxuICAgKiDmnaHku7booajovr7lvI9cbiAgICogLSDku4XotYvlgLwgYGNvbHVtbnNgIOaXtuaJp+ihjOS4gOasoVxuICAgKiAtIOWPr+iwg+eUqCBgcmVzZXRDb2x1bW5zKClgIOWGjeS4gOasoeinpuWPkVxuICAgKi9cbiAgaWlmPzogKGl0ZW06IFNUQ29sdW1uKSA9PiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiDnu5/orqHliJfmlbDmja5cbiAgICogLSDoi6Xkvb/nlKjoh6rlrprkuYnnu5/orqHlh73mlbDlj6/ml6DpobvmjIflrpogYGluZGV4YFxuICAgKiAtIOWPr+S7peagueaNriBga2V5YCDmnaXlrprkuYnnlJ/miJDlkI7pnIDopoHnmoTplK7lkI3vvIzlpoLmnpzmnKrmjIflrpogYGtleWAg5YiZ5L2/55SoIGBpbmRleGAg5p2l6KGo56S66ZSu5ZCNXG4gICAqIC0g5b2T5peg5rOV5om+5Yiw5pyJ5pWI6ZSu5ZCN5pe277yM5L2/55So5LiL5qCH77yI5LuOIGAwYCDlvIDlp4vvvInmnaXku6Pmm79cbiAgICovXG4gIHN0YXRpc3RpY2FsPzogU1RTdGF0aXN0aWNhbFR5cGUgfCBTVFN0YXRpc3RpY2FsO1xuXG4gIHdpZGdldD86IFNUV2lkZ2V0Q29sdW1uO1xuXG4gIGVudW0/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZzsgW2tleTogbnVtYmVyXTogc3RyaW5nIH07XG5cbiAgLyoqXG4gICAqIOWIhue7hOihqOWktFxuICAgKi9cbiAgY2hpbGRyZW4/OiBTVENvbHVtbltdO1xuXG4gIHJvd1NwYW4/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIOiwg+aVtOihqOWktOmFjee9rlxuICAgKiAtIOazqOaEj++8mioq5LiN6KaB5b+Y6K6wKirlnKggYHNyYy9zdHlsZXNgIOS4i+WinuWKoCBgbnotcmVzaXphYmxlYCBMZXNzIOagt+W8j+aWh+S7tu+8mmBAaW1wb3J0ICd+bmctem9ycm8tYW50ZC9yZXNpemFibGUvc3R5bGUvZW50cnkubGVzcyc7YFxuICAgKiAtICoq5LiN5pSv5oyB5aSa6KGo5aS0KipcbiAgICovXG4gIHJlc2l6YWJsZT86IFNUUmVzaXphYmxlIHwgYm9vbGVhbjtcblxuICAvLyBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1RXaWRnZXRDb2x1bW4ge1xuICB0eXBlOiBzdHJpbmc7XG5cbiAgcGFyYW1zPzogKG9wdGlvbnM6IHsgcmVjb3JkOiBTVERhdGE7IGNvbHVtbjogU1RDb2x1bW4gfSkgPT4ge307XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1RDb2x1bW5UaXRsZSB7XG4gIFtrZXk6IHN0cmluZ106IGFueTtcblxuICAvKipcbiAgICogVGV4dCBvZiBoZWFkZXIsIGNhbiBiZSBjaG9vc2Ugb25lIG9mIGB0ZXh0YCBvciBgaTE4bmBcbiAgICovXG4gIHRleHQ/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEkxOG4ga2V5IG9mIGhlYWRlciwgY2FuIGJlIGNob29zZSBvbmUgb2YgYHRleHRgIG9yIGBpMThuYFxuICAgKi9cbiAgaTE4bj86IHN0cmluZztcblxuICAvKipcbiAgICogT3B0aW9uYWwgaW5mb3JtYXRpb24gb2YgaGVhZGVyXG4gICAqL1xuICBvcHRpb25hbD86IHN0cmluZztcblxuICAvKipcbiAgICogT3B0aW9uYWwgaGVscCBvZiBoZWFkZXJcbiAgICovXG4gIG9wdGlvbmFsSGVscD86IHN0cmluZztcbn1cblxuZXhwb3J0IHR5cGUgU1RTdGF0aXN0aWNhbFR5cGUgPSAnY291bnQnIHwgJ2Rpc3RpbmN0Q291bnQnIHwgJ3N1bScgfCAnYXZlcmFnZScgfCAnbWF4JyB8ICdtaW4nO1xuXG5leHBvcnQgdHlwZSBTVFN0YXRpc3RpY2FsRm4gPSAodmFsdWVzOiBudW1iZXJbXSwgY29sOiBTVENvbHVtbiwgbGlzdDogU1REYXRhW10sIHJhd0RhdGE/OiBhbnkpID0+IFNUU3RhdGlzdGljYWxSZXN1bHQ7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1RTdGF0aXN0aWNhbCB7XG4gIHR5cGU6IFNUU3RhdGlzdGljYWxUeXBlIHwgU1RTdGF0aXN0aWNhbEZuO1xuICAvKipcbiAgICog5L+d55WZ5bCP5pWw5L2N5pWw77yM6buY6K6k77yaYDJgXG4gICAqL1xuICBkaWdpdHM/OiBudW1iZXI7XG4gIC8qKlxuICAgKiDmmK/lkKbpnIDopoHotKfluIHmoLzlvI/ljJbvvIzpu5jorqTku6XkuIvmg4XlhrXkuLogYHRydWVgXG4gICAqIC0gYHR5cGVgIOS4uiBgU1RTdGF0aXN0aWNhbEZuYOOAgSBgc3VtYOOAgWBhdmVyYWdlYOOAgWBtYXhg44CBYG1pbmBcbiAgICovXG4gIGN1cnJlbmN5PzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTVFN0YXRpc3RpY2FsUmVzdWx0cyB7XG4gIFtrZXk6IHN0cmluZ106IFNUU3RhdGlzdGljYWxSZXN1bHQ7XG4gIFtpbmRleDogbnVtYmVyXTogU1RTdGF0aXN0aWNhbFJlc3VsdDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTVFN0YXRpc3RpY2FsUmVzdWx0IHtcbiAgdmFsdWU6IG51bWJlcjtcbiAgdGV4dD86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTVENvbHVtblNvcnQge1xuICAvKipcbiAgICog5o6S5bqP55qE6buY6K6k5Y+X5o6n5bGe5oCnXG4gICAqL1xuICBkZWZhdWx0PzogJ2FzY2VuZCcgfCAnZGVzY2VuZCcgfCBudWxsO1xuICAvKipcbiAgICog5pys5Zyw5pWw5o2u55qE5o6S5bqP5Ye95pWw77yM5L2/55So5LiA5Liq5Ye95pWwKOWPguiAgyBbQXJyYXkuc29ydF0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvQXJyYXkvc29ydCkg55qEIGNvbXBhcmVGdW5jdGlvbilcbiAgICogLSBgbnVsbGAg5b+955Wl5pys5Zyw5o6S5bqP77yM5L2G5L+d5oyB5o6S5bqP5Yqf6IO9XG4gICAqIC0g6Iul5pWw5o2u5rqQ5Li65pys5Zyw5pe26Ieq5Yqo55Sf5oiQIGAoYSwgYikgPT4gYVtpbmRleF0gLSBiW2luZGV4XWAg5pa55rOVXG4gICAqL1xuICBjb21wYXJlPzogKChhOiBTVERhdGEsIGI6IFNURGF0YSkgPT4gbnVtYmVyKSB8IG51bGw7XG4gIC8qKlxuICAgKiDov5znqIvmlbDmja7nmoTmjpLluo/ml7blkI7nq6/nm7jlr7nlupTnmoRLRVnvvIzpu5jorqTkvb/nlKggYGluZGV4YCDlsZ7mgKdcbiAgICogLSDoi6UgYG11bHRpU29ydDogZmFsc2VgIOaXtu+8mmBrZXk6ICduYW1lJyA9PiA/bmFtZT0xJnBpPTFgXG4gICAqIC0g6IulIGBtdWx0aVNvcnQ6IHRydWVgIOWFgeiuuOWkmuS4quaOkuW6jyBrZXkg5a2Y5Zyo77yM5oiW5L2/55SoIGBTVE11bHRpU29ydGAg5oyH5a6a5aSa5YiX5o6S5bqPa2V55ZCI5bm26KeE5YiZXG4gICAqL1xuICBrZXk/OiBzdHJpbmcgfCBudWxsO1xuICAvKipcbiAgICog6L+c56iL5pWw5o2u55qE5o6S5bqP5pe25ZCO56uv55u45a+55bqU55qEVkFMVUVcbiAgICogLSBgeyBhc2NlbmQ6ICcwJywgZGVzY2VuZDogJzEnIH1gIOe7k+aenCBgP25hbWU9MSZwaT0xYFxuICAgKiAtIGB7IGFzY2VuZDogJ2FzYycsIGRlc2NlbmQ6ICdkZXNjJyB9YCDnu5PmnpwgYD9uYW1lPWRlc2MmcGk9MWBcbiAgICovXG4gIHJlTmFtZT86IHsgYXNjZW5kPzogc3RyaW5nOyBkZXNjZW5kPzogc3RyaW5nIH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1RTb3J0TWFwIGV4dGVuZHMgU1RDb2x1bW5Tb3J0IHtcbiAgW2tleTogc3RyaW5nXTogYW55O1xuXG4gIC8qKiDmmK/lkKblkK/nlKjmjpLluo8gKi9cbiAgZW5hYmxlZD86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1RDb2x1bW5GaWx0ZXIge1xuICAvKipcbiAgICog5pCc57Si5pa55byPXG4gICAqIC0gYGRlZnVhbHRgIOm7mOiupOW9ouW8j1xuICAgKiAtIGBrZXl3b3JkYCDmlofmnKzmoYblvaLlvI9cbiAgICovXG4gIHR5cGU/OiAnZGVmYXVsdCcgfCAna2V5d29yZCc7XG4gIC8qKlxuICAgKiDooajlpLTnmoTnrZvpgInoj5zljZXpobnvvIzoh7PlsJHkuIDpobnmiY3kvJrnlJ/mlYhcbiAgICogLSDlvZMgYHR5cGU9J2tleXdvcmQnYCDml7blj6/kuLrnqbpcbiAgICovXG4gIG1lbnVzPzogU1RDb2x1bW5GaWx0ZXJNZW51W107XG4gIC8qKlxuICAgKiDmnKzlnLDmlbDmja7nmoTnrZvpgInlh73mlbBcbiAgICovXG4gIGZuPzogKChmaWx0ZXI6IFNUQ29sdW1uRmlsdGVyTWVudSwgcmVjb3JkOiBTVERhdGEpID0+IGJvb2xlYW4pIHwgbnVsbDtcbiAgLyoqXG4gICAqIOagh+ivhuaVsOaNruaYr+WQpuW3sui/h+a7pO+8jOetm+mAieWbvuagh+S8mumrmOS6rlxuICAgKi9cbiAgZGVmYXVsdD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDoh6rlrprkuYkgZmlsdGVyIOWbvuagh1xuICAgKiAtIOW9kyBgdHlwZT0nZGVmYXVsdCdgIOm7mOiupCBgZmlsdGVyYFxuICAgKiAtIOW9kyBgdHlwZT0na2V5d29yZCdgIOm7mOiupCBgc2VhcmNoYFxuICAgKi9cbiAgaWNvbj86IHN0cmluZyB8IFNUSWNvbjtcbiAgLyoqXG4gICAqIOehruiupOaMiemSruaWh+acrO+8jOm7mOiupCBg56Gu6K6kYFxuICAgKi9cbiAgY29uZmlybVRleHQ/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiDmuIXpmaTmjInpkq7mlofmnKzvvIzpu5jorqQgYOmHjee9rmBcbiAgICovXG4gIGNsZWFyVGV4dD86IHN0cmluZztcbiAgLyoqXG4gICAqIOaYr+WQpuWkmumAie+8jOm7mOiupCBgdHJ1ZWBcbiAgICovXG4gIG11bHRpcGxlPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIOi/nOeoi+aVsOaNrueahOi/h+a7pOaXtuWQjuerr+ebuOWvueW6lOeahEtFWe+8jOm7mOiupOS9v+eUqCBgaW5kZXhgIOWxnuaAp1xuICAgKiBga2V5OiAnbmFtZSdgIOe7k+aenCBgP25hbWU9MSZwaT0xYFxuICAgKi9cbiAga2V5Pzogc3RyaW5nIHwgbnVsbDtcbiAgLyoqXG4gICAqIOi/nOeoi+aVsOaNrueahOi/h+a7pOaXtuWQjuerr+ebuOWvueW6lOeahFZBTFVFXG4gICAqIC0g6buY6K6k5b2TIGBtdWx0aXBsZTogdHJ1ZWAg5pe25Lul6Iux5paH6YCX5Y+35ou85o6l55qE5a2X56ym5LiyXG4gICAqIEByZXR1cm4g6L+U5Zue5Li6IE9iamVjdCDlr7nosaFcbiAgICovXG4gIHJlTmFtZT86IChsaXN0OiBTVENvbHVtbkZpbHRlck1lbnVbXSwgY29sOiBTVENvbHVtbikgPT4ge307XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1RDb2x1bW5GaWx0ZXJNZW51IHtcbiAgLyoqXG4gICAqIOaWh+acrFxuICAgKiAtIOW9kyBgdHlwZTogJ2tleXdvcmQnYCDml7booajnpLogYHBsYWNlaG9sZGVyYFxuICAgKi9cbiAgdGV4dD86IHN0cmluZztcbiAgLyoqXG4gICAqIOWAvFxuICAgKi9cbiAgdmFsdWU/OiBhbnk7XG4gIC8qKlxuICAgKiDmmK/lkKbpgInkuK1cbiAgICovXG4gIGNoZWNrZWQ/OiBib29sZWFuO1xuICAvKipcbiAgICog5p2D6ZmQ77yM562J5ZCMIFtBQ0xDYW5UeXBlXShodHRwczovL25nLWFsYWluLmNvbS9hY2wvZ2V0dGluZy1zdGFydGVkLyNBQ0xDYW5UeXBlKSDlj4LmlbDlgLxcbiAgICovXG4gIGFjbD86IGFueTtcblxuICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1RDb2x1bW5TZWxlY3Rpb24ge1xuICAvKipcbiAgICog6YCJ5oup6aG55pi+56S655qE5paH5a2XXG4gICAqL1xuICB0ZXh0OiBzdHJpbmc7XG4gIC8qKlxuICAgKiDpgInmi6npobnngrnlh7vlm57osIPvvIzlhYHorrjlr7nlj4LmlbAgYGRhdGEuY2hlY2tlZGAg6L+b6KGM5pON5L2cXG4gICAqL1xuICBzZWxlY3Q6IChkYXRhOiBTVERhdGFbXSkgPT4gdm9pZDtcbiAgLyoqIOadg+mZkO+8jOetieWQjCBgY2FuKClgIOWPguaVsOWAvCAqL1xuICBhY2w/OiBhbnk7XG59XG5cbi8qKiDlvZMgYHR5cGU9eW5gIOacieaViCAqL1xuZXhwb3J0IGludGVyZmFjZSBTVENvbHVtblluIHtcbiAgLyoqXG4gICAqIOecn+WAvOadoeS7tu+8jO+8iOm7mOiupO+8mmB0cnVlYO+8iVxuICAgKi9cbiAgdHJ1dGg/OiBhbnk7XG4gIC8qKlxuICAgKiDlvr3nq6AgYHRydWVgIOaXtuaWh+acrO+8jO+8iOm7mOiupO+8mmDmmK9g77yJXG4gICAqL1xuICB5ZXM/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiDlvr3nq6AgYGZhbHNlYCDml7bmlofmnKzvvIzvvIjpu5jorqTvvJpg5ZCmYO+8iVxuICAgKi9cbiAgbm8/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiDlvr3nq6DmmL7npLrpo47moLxcbiAgICogLSBgZnVsbGAg5Zu+5qCH5ZKM5paH5pysXG4gICAqIC0gYGljb25gIOWbvuagh1xuICAgKiAtIGB0ZXh0YCDmlofmnKxcbiAgICovXG4gIG1vZGU/OiBZTk1vZGU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1RJY29uIHtcbiAgLyoqIOWbvuagh+exu+WeiyAqL1xuICB0eXBlOiBzdHJpbmc7XG4gIC8qKiDlm77moIfkuLvpopjpo47moLzvvIzpu5jorqTvvJpgb3V0bGluZWAgKi9cbiAgdGhlbWU/OiAnb3V0bGluZScgfCAndHdvdG9uZScgfCAnZmlsbCc7XG4gIC8qKiDmmK/lkKbmnInml4vovazliqjnlLvvvIzpu5jorqTvvJpgZmFsc2VgICovXG4gIHNwaW4/OiBib29sZWFuO1xuICAvKiog5LuF6YCC55So5Y+M6Imy5Zu+5qCH77yM6K6+572u5Y+M6Imy5Zu+5qCH55qE5Li76KaB6aKc6Imy77yM5LuF5a+55b2T5YmNIGljb24g55Sf5pWIICovXG4gIHR3b1RvbmVDb2xvcj86IHN0cmluZztcbiAgLyoqIOaMh+WumuadpeiHqiBJY29uRm9udCDnmoTlm77moIfnsbvlnosgKi9cbiAgaWNvbmZvbnQ/OiBzdHJpbmc7XG59XG5cbi8qKlxuICog5oyJ6ZKu6YWN572uXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU1RDb2x1bW5CdXR0b24ge1xuICAvKipcbiAgICog5paH5pysXG4gICAqL1xuICB0ZXh0Pzogc3RyaW5nIHwgKChyZWNvcmQ6IFNURGF0YSwgYnRuOiBTVENvbHVtbkJ1dHRvbikgPT4gc3RyaW5nKTtcbiAgLyoqXG4gICAqIOaWh+acrCBpMThuXG4gICAqL1xuICBpMThuPzogc3RyaW5nO1xuICAvKipcbiAgICog5Zu+5qCHXG4gICAqL1xuICBpY29uPzogc3RyaW5nIHwgU1RJY29uO1xuICAvKipcbiAgICog5oyJ6ZKu57G75Z6LXG4gICAqIC0gYG5vbmVgIOaXoOS7u+S9leS6kuWKqFxuICAgKiAtIGBkZWxgIOWIoOmZpO+8jOm7mOiupOW8gOWQryBgcG9wOiB0cnVlYFxuICAgKiAtIGBtb2RhbGAg5a+56K+d5qGG77yM6ZyA6KaB5oyH5a6aIGBjb21wb25lbnRgIOaJjeS8mueUn+aViFxuICAgKiAtIGBzdGF0aWNgIOmdmeaAgeWvueivneahhu+8jOmcgOimgeaMh+WumiBgY29tcG9uZW50YCDmiY3kvJrnlJ/mlYhcbiAgICogLSBgZHJhd2VyYCDmir3lsYnvvIzpnIDopoHmjIflrpogYGNvbXBvbmVudGAg5omN5Lya55Sf5pWIXG4gICAqIC0gYGxpbmtgIOmTvuaOpe+8jOW9kyBgY2xpY2tgIOi/lOWbnuWtl+espuS4suaXtuiHquWKqOiwg+eUqCBgbmF2aWdhdGVCeVVybGAg5a+86IiqXG4gICAqIC0gYGRpdmlkZXJgIOWIhuWJsue6v1xuICAgKi9cbiAgdHlwZT86ICdub25lJyB8ICdkZWwnIHwgJ21vZGFsJyB8ICdzdGF0aWMnIHwgJ2RyYXdlcicgfCAnbGluaycgfCAnZGl2aWRlcic7XG4gIC8qKlxuICAgKiDngrnlh7vlm57osINcbiAgICogLSBGdW5jdGlvblxuICAgKiAgLSBgdHlwZT1tb2RhbGAg5Y+q5Lya5Zyo5b2T5pyJ5Lyg5Zue5YC85pe25omN5Lya6Kem5Y+R5Zue6LCDXG4gICAqIC0gcmVsb2Fk77ya6YeN5paw5Yi35paw5b2T5YmN6aG1XG4gICAqIC0gbG9hZO+8mumHjeaWsOWKoOi9veaVsOaNru+8jOW5tumHjee9rumhteeggeS4uu+8mmAxYFxuICAgKlxuICAgKiBAdG9kbyBCYWQgcGFyYW1ldGVyIGRlc2lnblxuICAgKi9cbiAgY2xpY2s/OiAncmVsb2FkJyB8ICdsb2FkJyB8ICgocmVjb3JkOiBTVERhdGEsIG1vZGFsPzogYW55LCBpbnN0YW5jZT86IFNUQ29tcG9uZW50KSA9PiBhbnkpO1xuICAvKipcbiAgICog5rCU5rOh56Gu6K6k5qGG5Y+C5pWw77yM6IulIGBzdHJpbmdgIOexu+Wei+ihqOekuuagh+mimFxuICAgKi9cbiAgcG9wPzogYm9vbGVhbiB8IHN0cmluZyB8IFNUQ29sdW1uQnV0dG9uUG9wO1xuICAvKipcbiAgICog5a+56K+d5qGG5Y+C5pWwXG4gICAqL1xuICBtb2RhbD86IFNUQ29sdW1uQnV0dG9uTW9kYWw7XG4gIC8qKlxuICAgKiDmir3lsYnlj4LmlbBcbiAgICovXG4gIGRyYXdlcj86IFNUQ29sdW1uQnV0dG9uRHJhd2VyO1xuICAvKipcbiAgICog5LiL5ouJ6I+c5Y2V77yM5b2T5a2Y5Zyo5pe25LulIGBkcm9wZG93bmAg5b2i5byP5riy5p+TXG4gICAqIC0g5Y+q5pSv5oyB5LiA57qnXG4gICAqL1xuICBjaGlsZHJlbj86IFNUQ29sdW1uQnV0dG9uW107XG4gIC8qKlxuICAgKiDmnYPpmZDvvIznrYnlkIwgW0FDTENhblR5cGVdKGh0dHBzOi8vbmctYWxhaW4uY29tL2FjbC9nZXR0aW5nLXN0YXJ0ZWQvI0FDTENhblR5cGUpIOWPguaVsOWAvFxuICAgKi9cbiAgYWNsPzogYW55O1xuICAvKipcbiAgICogQ29uZGl0aW9uYWwgZXhwcmVzc2lvblxuICAgKlxuICAgKiBAdG9kbyBCYWQgcGFyYW1ldGVyIGRlc2lnblxuICAgKi9cbiAgaWlmPzogKGl0ZW06IFNURGF0YSwgYnRuOiBTVENvbHVtbkJ1dHRvbiwgY29sdW1uOiBTVENvbHVtbikgPT4gYm9vbGVhbjtcbiAgLyoqXG4gICAqIENvbmRpdGlvbmFsIGV4cHJlc3Npb24gcmVuZGVyaW5nIGJlaGF2aW9yLCBjYW4gYmUgc2V0IHRvIGBoaWRlYCAoZGVmYXVsdCkgb3IgYGRpc2FibGVkYFxuICAgKi9cbiAgaWlmQmVoYXZpb3I/OiBJaWZCZWhhdmlvclR5cGU7XG5cbiAgdG9vbHRpcD86IHN0cmluZztcblxuICAvKipcbiAgICog5oyJ6ZKuIGBjbGFzc2Ag5bGe5oCn5YC877yI5rOo77ya5peg6aG7IGAuYCDngrnvvInlpJrkuKrnlKjnqbrmoLzpmpTlvIDvvIzkvovlpoLvvJpcbiAgICogLSBgdGV4dC1zdWNjZXNzYCDmiJDlip/oibJcbiAgICogLSBgdGV4dC1lcnJvcmAg6ZSZ6K+v6ImyXG4gICAqL1xuICBjbGFzc05hbWU/OiBzdHJpbmcgfCBzdHJpbmdbXSB8IFNldDxzdHJpbmc+IHwgeyBba2xhc3M6IHN0cmluZ106IGFueSB9O1xuXG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTVENvbHVtbkJ1dHRvbk9LIHtcbiAgcmVjb3JkOiBTVERhdGE7XG4gIC8qKlxuICAgKiBNb2RhbCBvciBkcmF3ZXIgcmV0dXJuIHZhbHVlIHdoZW4gdHJpZ2dlciBjb25maXJtLlxuICAgKi9cbiAgcmV0PzogYW55O1xuICBpbnN0YW5jZT86IFNUQ29tcG9uZW50O1xuICBldmVudDogRXZlbnQ7XG59XG5cbmV4cG9ydCB0eXBlIElpZkJlaGF2aW9yVHlwZSA9ICdoaWRlJyB8ICdkaXNhYmxlZCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1RDb2x1bW5CdXR0b25Nb2RhbCBleHRlbmRzIE1vZGFsSGVscGVyT3B0aW9ucyB7XG4gIC8qKlxuICAgKiDlr7nor53moYbnu4Tku7blr7nosaFcbiAgICovXG4gIGNvbXBvbmVudD86IGFueTtcbiAgLyoqXG4gICAqIOWvueivneahhuWPguaVsFxuICAgKi9cbiAgcGFyYW1zPzogKHJlY29yZDogU1REYXRhKSA9PiB7fTtcbiAgLyoqXG4gICAqIOWvueivneahhuebruagh+e7hOS7tueahOaOpeaUtuWPguaVsOWQje+8jOm7mOiupO+8mmByZWNvcmRgXG4gICAqL1xuICBwYXJhbXNOYW1lPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNUQ29sdW1uQnV0dG9uTW9kYWxDb25maWcge1xuICAvKipcbiAgICog5oyH5a6a5qih5oCB5qGG55uu5qCH57uE5Lu255qE5o6l5pS25Y+C5pWw5ZCN77yM6buY6K6k77yaYHJlY29yZGBcbiAgICovXG4gIHBhcmFtc05hbWU/OiBzdHJpbmc7XG4gIC8qKiDlpKflsI/vvJvkvovlpoLvvJpsZ+OAgTYwMO+8jOm7mOiupO+8mmBsZ2AgKi9cbiAgc2l6ZT86ICdzbScgfCAnbWQnIHwgJ2xnJyB8ICd4bCcgfCAnJyB8IG51bWJlcjtcbiAgLyoqIOWvueivneahhiBbTW9kYWxPcHRpb25zXShodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9jb21wb25lbnRzL21vZGFsL21vZGFsLXR5cGVzLnRzKSDlj4LmlbAgKi9cbiAgbW9kYWxPcHRpb25zPzogTW9kYWxPcHRpb25zO1xuICAvKiog5piv5ZCm57K+5YeG77yI6buY6K6k77yaYHRydWVg77yJ77yM6Iul6L+U5Zue5YC86Z2e56m65YC877yIYG51bGxg5oiWYHVuZGVmaW5lZGDvvInop4bkuLrmiJDlip/vvIzlkKbliJnop4bkuLrplJnor68gKi9cbiAgZXhhY3Q/OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNUQ29sdW1uQnV0dG9uRHJhd2VyIGV4dGVuZHMgRHJhd2VySGVscGVyT3B0aW9ucyB7XG4gIC8qKlxuICAgKiDmoIfpophcbiAgICovXG4gIHRpdGxlPzogc3RyaW5nO1xuICAvKipcbiAgICog5oq95bGJ57uE5Lu25a+56LGhXG4gICAqL1xuICBjb21wb25lbnQ/OiBhbnk7XG4gIC8qKlxuICAgKiDmir3lsYnlj4LmlbBcbiAgICovXG4gIHBhcmFtcz86IChyZWNvcmQ6IFNURGF0YSkgPT4ge307XG4gIC8qKlxuICAgKiDmir3lsYnnm67moIfnu4Tku7bnmoTmjqXmlLblj4LmlbDlkI3vvIzpu5jorqTvvJpgcmVjb3JkYFxuICAgKi9cbiAgcGFyYW1zTmFtZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTVENvbHVtbkJ1dHRvbkRyYXdlckNvbmZpZyB7XG4gIC8qKlxuICAgKiDmir3lsYnnm67moIfnu4Tku7bnmoTmjqXmlLblj4LmlbDlkI3vvIzpu5jorqTvvJpgcmVjb3JkYFxuICAgKi9cbiAgcGFyYW1zTmFtZT86IHN0cmluZztcbiAgLyoqXG4gICAqIOWkp+Wwj++8m+S+i+Wmgu+8mmxn44CBNjAw77yM6buY6K6k77yaYG1kYFxuICAgKlxuICAgKiB8IOexu+WeiyB8IOm7mOiupOWkp+WwjyB8XG4gICAqIHwgLS0tIHwgLS0tLS0tIHxcbiAgICogfCBgc21gIHwgYDMwMGAgfFxuICAgKiB8IGBtZGAgfCBgNjAwYCB8XG4gICAqIHwgYGxnYCB8IGA5MDBgIHxcbiAgICogfCBgeGxgIHwgYDEyMDBgIHxcbiAgICpcbiAgICogPiDku6XkuIrlgLzvvIzlj6/pgJrov4fopobnm5bnm7jlupTnmoRMRVNT5Y+C5pWw6Ieq6KGM6LCD5pW0XG4gICAqL1xuICBzaXplPzogJ3NtJyB8ICdtZCcgfCAnbGcnIHwgJ3hsJyB8IG51bWJlcjtcbiAgLyoqXG4gICAqIOaYr+WQpuWMheWQq+W6lemDqOW3peWFt+adoe+8jOm7mOiupO+8mmB0cnVlYFxuICAgKi9cbiAgZm9vdGVyPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIOW6lemDqOW3peWFt+adoemrmOW6pu+8jOm7mOiupO+8mmA1NWBcbiAgICovXG4gIGZvb3RlckhlaWdodD86IG51bWJlcjtcbiAgLyoqIOaKveWxiSBbTnpEcmF3ZXJPcHRpb25zXShodHRwczovL25nLmFudC5kZXNpZ24vY29tcG9uZW50cy9kcmF3ZXIvemgjbnpkcmF3ZXJvcHRpb25zKSDlj4LmlbAgKi9cbiAgZHJhd2VyT3B0aW9ucz86IE56RHJhd2VyT3B0aW9ucztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTVENvbHVtbkJ1dHRvblBvcCB7XG4gIC8qKlxuICAgKiBUaXRsZSBvZiB0aGUgcG9wb3ZlciwgZGVmYXVsdDogYOehruiupOWIoOmZpOWQl++8n2BcbiAgICovXG4gIHRpdGxlPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBQb3BvdmVyIHRyaWdnZXIgbW9kZSwgZGVmYXVsdDogYGNsaWNrYFxuICAgKi9cbiAgdHJpZ2dlcj86ICdjbGljaycgfCAnZm9jdXMnIHwgJ2hvdmVyJztcblxuICAvKipcbiAgICogVGhlIHBvc2l0aW9uIG9mIHRoZSBwb3BvdmVyIHJlbGF0aXZlIHRvIHRoZSB0YXJnZXQsIGRlZmF1bHQ6IGB0b3BgXG4gICAqL1xuICBwbGFjZW1lbnQ/OlxuICAgIHwgJ3RvcCdcbiAgICB8ICdsZWZ0J1xuICAgIHwgJ3JpZ2h0J1xuICAgIHwgJ2JvdHRvbSdcbiAgICB8ICd0b3BMZWZ0J1xuICAgIHwgJ3RvcFJpZ2h0J1xuICAgIHwgJ2JvdHRvbUxlZnQnXG4gICAgfCAnYm90dG9tUmlnaHQnXG4gICAgfCAnbGVmdFRvcCdcbiAgICB8ICdsZWZ0Qm90dG9tJ1xuICAgIHwgJ3JpZ2h0VG9wJ1xuICAgIHwgJ3JpZ2h0Qm90dG9tJztcblxuICAvKipcbiAgICogQ2xhc3MgbmFtZSBvZiB0aGUgcG9wb3ZlciBjYXJkXG4gICAqL1xuICBvdmVybGF5Q2xhc3NOYW1lPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBTdHlsZSBvZiB0aGUgcG9wb3ZlciBjYXJkXG4gICAqL1xuICBvdmVybGF5U3R5bGU/OiB7fTtcblxuICAvKipcbiAgICogVGV4dCBvZiB0aGUgQ2FuY2VsIGJ1dHRvblxuICAgKi9cbiAgY2FuY2VsVGV4dD86IHN0cmluZztcblxuICAvKipcbiAgICogVGV4dCBvZiB0aGUgQ29uZmlybSBidXR0b25cbiAgICovXG4gIG9rVGV4dD86IHN0cmluZztcblxuICAvKipcbiAgICogQnV0dG9uIGB0eXBlYCBvZiB0aGUgQ29uZmlybSBidXR0b25cbiAgICovXG4gIG9rVHlwZT86ICdwcmltYXJ5JyB8ICdnaG9zdCcgfCAnZGFzaGVkJyB8ICdkYW5nZXInIHwgJ2RlZmF1bHQnO1xuXG4gIC8qKlxuICAgKiBDdXN0b21pemUgaWNvbiBvZiBjb25maXJtYXRpb25cbiAgICovXG4gIGljb24/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdG8gZGlyZWN0bHkgZW1pdCBgb25Db25maXJtYCB3aXRob3V0IHNob3dpbmcgUG9wY29uZmlybSwgZGVmYXVsdDogYCgpID0+IGZhbHNlYFxuICAgKi9cbiAgY29uZGl0aW9uPzogKGl0ZW06IFNURGF0YSkgPT4gYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTVFJlcVJlTmFtZVR5cGUge1xuICBwaT86IHN0cmluZztcbiAgcHM/OiBzdHJpbmc7XG4gIHNraXA/OiBzdHJpbmc7XG4gIGxpbWl0Pzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNUUmVzUmVOYW1lVHlwZSB7XG4gIHRvdGFsPzogc3RyaW5nIHwgc3RyaW5nW107XG4gIGxpc3Q/OiBzdHJpbmcgfCBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTVEV4cG9ydE9wdGlvbnMge1xuICAvKipcbiAgICogU3BlY2lmeSB0aGUgY3VycmVudGx5IGV4cG9ydGVkIGRhdGEsIGRlZmF1bHQgdGhlIGN1cnJlbnQgdGFibGUgZGF0YVxuICAgKi9cbiAgZGF0YT86IFNURGF0YVtdO1xuICAvKipcbiAgICogU3BlY2lmeSB0aGUgY3VycmVudGx5IGV4cG9ydGVkIGNvbHVtbiBjb25maWd1cmF0aW9uLCBkZWZhdWx0IHRoZSBjdXJyZW50IHRhYmxlIGRhdGFcbiAgICovXG4gIGNvbHVtZW5zPzogU1RDb2x1bW5bXTtcbiAgLyoqIOW3peS9nOa6peWQjSAqL1xuICBzaGVldG5hbWU/OiBzdHJpbmc7XG4gIC8qKiDmlofku7blkI0gKi9cbiAgZmlsZW5hbWU/OiBzdHJpbmc7XG4gIC8qKiB0cmlnZ2VycyB3aGVuIHNhdmVhcyAqL1xuICBjYWxsYmFjaz86ICh3YjogYW55KSA9PiB2b2lkO1xufVxuXG4vKipcbiAqIOWNleaOkuW6j+inhOWImVxuICogLSDoi6XkuI3mjIflrprvvIzliJnov5Tlm57vvJpgY29sdW1uTmFtZT1hc2NlbmR8ZGVzY2VuZGBcbiAqIC0g6Iul5oyH5a6a77yM5YiZ6L+U5Zue77yaYHNvcnQ9Y29sdW1uTmFtZS4oYXNjZW5kfGRlc2NlbmQpYFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFNUU2luZ2xlU29ydCB7XG4gIC8qKiDor7fmsYLlj4LmlbDlkI3vvIzpu5jorqTvvJpgc29ydGAgKi9cbiAga2V5Pzogc3RyaW5nO1xuICAvKiog5YiX5ZCN5LiO54q25oCB6Ze05YiG6ZqU56ym77yM6buY6K6k77yaYC5gICovXG4gIG5hbWVTZXBhcmF0b3I/OiBzdHJpbmc7XG59XG5cbi8qKlxuICog5aSa5o6S5bqP55u45ZCM5o6S5bqPIGtleSDml7blkIjlubbop4TliJlcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTVE11bHRpU29ydCB7XG4gIC8qKiDor7fmsYLlj4LmlbDlkI3vvIzpu5jorqTvvJpgc29ydGAgKi9cbiAga2V5Pzogc3RyaW5nO1xuICAvKiog5LiN5ZCM5bGe5oCn6Ze05YiG6ZqU56ym77yM6buY6K6k77yaYC1gICovXG4gIHNlcGFyYXRvcj86IHN0cmluZztcbiAgLyoqIOWIl+WQjeS4jueKtuaAgemXtOWIhumalOespu+8jOm7mOiupO+8mmAuYCAqL1xuICBuYW1lU2VwYXJhdG9yPzogc3RyaW5nO1xuICAvKipcbiAgICog5piv5ZCm5Lul5pWw57uE55qE5b2i5byP5Lyg6YCS5Y+C5pWw77yM6buY6K6k77yaYGZhbHNlYFxuICAgKiAtIGB0cnVlYCDooajnpLrkvb/nlKggYHVybD9zb3J0PW5hbWUuYXNjJnNvcnQ9YWdlLmRlc2NgIOW9ouW8j1xuICAgKiAtIGBmYWxzZWAg6KGo56S65L2/55SoIGB1cmw/c29ydD1uYW1lLmFzYy1hZ2UuZGVzY2Ag5b2i5byPXG4gICAqL1xuICBhcnJheVBhcmFtPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIOaYr+WQpuS/neaMgeepuuWAvOeahOmUruWQje+8jOm7mOiupO+8mmB0cnVlYFxuICAgKiAtIGB0cnVlYCDooajnpLrkuI3nrqHmmK/lkKbmnInmjpLluo/pg73kvJrlj5HpgIEgYGtleWAg6ZSu5ZCNXG4gICAqIC0gYGZhbHNlYCDooajnpLrml6DmjpLluo/liqjkvZzml7bkuI3kvJrlj5HpgIEgYGtleWAg6ZSu5ZCNXG4gICAqL1xuICBrZWVwRW1wdHlLZXk/OiBib29sZWFuO1xuICAvKipcbiAgICogIyMg5LuF6ZmQ5YWo5bGA6YWN572u6aG55pyJ5pWIXG4gICAqXG4gICAqIOaYr+WQpuWFqOWxgOWkmuaOkuW6j+aooeW8j++8jOm7mOiupO+8mmB0cnVlYFxuICAgKiAtIGB0cnVlYCDooajnpLrmiYDmnIkgYHN0YCDpu5jorqTkuLrlpJrmjpLluo9cbiAgICogLSBgZmFsc2VgIOihqOekuumcgOimgeS4uuavj+S4qiBgc3RgIOa3u+WKoCBgbXVsdGlTb3J0YCDmiY3kvJrop4bkuLrlpJrmjpLluo/mqKHlvI9cbiAgICovXG4gIGdsb2JhbD86IGJvb2xlYW47XG59XG5cbmV4cG9ydCB0eXBlIFNUTXVsdGlTb3J0UmVzdWx0VHlwZSA9IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcblxuLyoqXG4gKiDlvr3moIfkv6Hmga9cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTVENvbHVtbkJhZGdlIHtcbiAgW2tleTogbnVtYmVyXTogU1RDb2x1bW5CYWRnZVZhbHVlO1xuICBba2V5OiBzdHJpbmddOiBTVENvbHVtbkJhZGdlVmFsdWU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1RDb2x1bW5CYWRnZVZhbHVlIHtcbiAgLyoqXG4gICAqIOaWh+acrFxuICAgKi9cbiAgdGV4dD86IHN0cmluZztcbiAgLyoqXG4gICAqIOW+veagh+minOiJsuWAvFxuICAgKi9cbiAgY29sb3I/OiAnc3VjY2VzcycgfCAncHJvY2Vzc2luZycgfCAnZGVmYXVsdCcgfCAnZXJyb3InIHwgJ3dhcm5pbmcnO1xufVxuXG4vKipcbiAqIOagh+etvuS/oeaBr1xuICovXG5leHBvcnQgaW50ZXJmYWNlIFNUQ29sdW1uVGFnIHtcbiAgW2tleTogbnVtYmVyXTogU1RDb2x1bW5UYWdWYWx1ZTtcbiAgW2tleTogc3RyaW5nXTogU1RDb2x1bW5UYWdWYWx1ZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTVENvbHVtblRhZ1ZhbHVlIHtcbiAgLyoqXG4gICAqIOaWh+acrFxuICAgKi9cbiAgdGV4dD86IHN0cmluZztcbiAgLyoqXG4gICAqIOminOiJsuWAvO+8jOaUr+aMgemihOiuvuWSjOiJsuWAvFxuICAgKiAtIOmihOiuvu+8mmdlZWtibHVlLGJsdWUscHVycGxlLHN1Y2Nlc3MscmVkLHZvbGNhbm8sb3JhbmdlLGdvbGQsbGltZSxncmVlbixjeWFuXG4gICAqIC0g6Imy5YC877yaI2Y1MCwjZmYwXG4gICAqL1xuICBjb2xvcj86ICdnZWVrYmx1ZScgfCAnYmx1ZScgfCAncHVycGxlJyB8ICdzdWNjZXNzJyB8ICdyZWQnIHwgJ3ZvbGNhbm8nIHwgJ29yYW5nZScgfCAnZ29sZCcgfCAnbGltZScgfCAnZ3JlZW4nIHwgJ2N5YW4nIHwgc3RyaW5nO1xufVxuXG5leHBvcnQgdHlwZSBTVENoYW5nZVR5cGUgPSAnbG9hZGVkJyB8ICdwaScgfCAncHMnIHwgJ2NoZWNrYm94JyB8ICdyYWRpbycgfCAnc29ydCcgfCAnZmlsdGVyJyB8ICdjbGljaycgfCAnZGJsQ2xpY2snIHwgJ2V4cGFuZCcgfCAncmVzaXplJztcblxuLyoqXG4gKiDlm57osIPmlbDmja5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTVENoYW5nZSB7XG4gIC8qKlxuICAgKiDlm57osIPnsbvlnotcbiAgICovXG4gIHR5cGU6IFNUQ2hhbmdlVHlwZTtcbiAgLyoqXG4gICAqIOW9k+WJjemhteeggVxuICAgKi9cbiAgcGk6IG51bWJlcjtcbiAgLyoqXG4gICAqIOavj+mhteaVsOmHj1xuICAgKi9cbiAgcHM6IG51bWJlcjtcbiAgLyoqXG4gICAqIOaVsOaNruaAu+mHj1xuICAgKi9cbiAgdG90YWw6IG51bWJlcjtcbiAgLyoqXG4gICAqIGBsb2FkZWRgIOWPguaVsFxuICAgKi9cbiAgbG9hZGVkPzogU1REYXRhW107XG4gIC8qKlxuICAgKiBgY2hlY2tib3hgIOWPguaVsFxuICAgKi9cbiAgY2hlY2tib3g/OiBTVERhdGFbXTtcbiAgLyoqXG4gICAqIGByYWRpb2Ag5Y+C5pWwXG4gICAqL1xuICByYWRpbz86IFNURGF0YTtcbiAgLyoqXG4gICAqIOaOkuW6j+WPguaVsFxuICAgKi9cbiAgc29ydD86IFNUQ2hhbmdlU29ydDtcbiAgLyoqXG4gICAqIOi/h+a7pOWPguaVsFxuICAgKi9cbiAgZmlsdGVyPzogU1RDb2x1bW47XG4gIC8qKlxuICAgKiDooYzngrnlh7vlj4LmlbBcbiAgICovXG4gIGNsaWNrPzogU1RDaGFuZ2VSb3dDbGljaztcbiAgLyoqXG4gICAqIOihjOWPjOWHu+WPguaVsFxuICAgKi9cbiAgZGJsQ2xpY2s/OiBTVENoYW5nZVJvd0NsaWNrO1xuICAvKipcbiAgICogYGV4cGFuZGAg5Y+C5pWwXG4gICAqL1xuICBleHBhbmQ/OiBTVERhdGE7XG4gIC8qKlxuICAgKiBgcmVzaXplYCDlj4LmlbBcbiAgICovXG4gIHJlc2l6ZT86IFNUQ29sdW1uO1xufVxuXG4vKiog6KGM5Y2V5Ye75Y+C5pWwICovXG5leHBvcnQgaW50ZXJmYWNlIFNUQ2hhbmdlU29ydCB7XG4gIHZhbHVlPzogJ2FzY2VuZCcgfCAnZGVzY2VuZCc7XG4gIG1hcD86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG4gIGNvbHVtbj86IFNUQ29sdW1uO1xufVxuXG4vKiog6KGM5Y2V5Ye75Y+C5pWwICovXG5leHBvcnQgaW50ZXJmYWNlIFNUQ2hhbmdlUm93Q2xpY2sge1xuICBlPzogRXZlbnQ7XG4gIGl0ZW0/OiBTVERhdGE7XG4gIGluZGV4PzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNURXJyb3Ige1xuICB0eXBlPzogJ3JlcSc7XG4gIGVycm9yPzogYW55O1xufVxuXG5leHBvcnQgdHlwZSBTVFJvd0NsYXNzTmFtZSA9IChyZWNvcmQ6IFNURGF0YSwgaW5kZXg6IG51bWJlcikgPT4gc3RyaW5nO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNUQ29sdW1uR3JvdXBUeXBlIHtcbiAgY29sdW1uOiBTVENvbHVtbjtcbiAgY29sU3RhcnQ6IG51bWJlcjtcbiAgY29sRW5kPzogbnVtYmVyO1xuICBjb2xTcGFuPzogbnVtYmVyO1xuICByb3dTcGFuPzogbnVtYmVyO1xuICBoYXNTdWJDb2x1bW5zPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTVFJlc2l6YWJsZSB7XG4gIC8qKlxuICAgKiBEaXNhYmxlIHJlc2l6ZSwgRGVmYXVsdDogYHRydWVgXG4gICAqL1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBTcGVjaWZpZXMgcmVzaXplIGJvdW5kYXJpZXMsIERlZmF1bHQ6IGB3aW5kb3dgXG4gICAqL1xuICBib3VuZHM/OiAnd2luZG93JyB8ICdwYXJlbnQnIHwgRWxlbWVudFJlZjxIVE1MRWxlbWVudD47XG4gIC8qKlxuICAgKiBNYXhpbXVtIHdpZHRoIG9mIHJlc2l6YWJsZSBlbGVtZW4sIERlZmF1bHQ6IGA2MGBcbiAgICovXG4gIG1heFdpZHRoPzogbnVtYmVyO1xuICAvKipcbiAgICogTWluaW11bSB3aWR0aCBvZiByZXNpemFibGUgZWxlbWVudCwgRGVmYXVsdDogYDM2MGBcbiAgICovXG4gIG1pbldpZHRoPzogbnVtYmVyO1xuICAvKipcbiAgICogRW5hYmxlIHByZXZpZXcgd2hlbiByZXNpemluZywgRGVmYXVsdDogYHRydWVgXG4gICAqL1xuICBwcmV2aWV3PzogYm9vbGVhbjtcbn1cbiJdfQ==