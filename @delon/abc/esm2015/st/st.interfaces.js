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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QuaW50ZXJmYWNlcy5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS92c3RzL3dvcmsvMS9zL3BhY2thZ2VzL2FiYy9zdC8iLCJzb3VyY2VzIjpbInN0LmludGVyZmFjZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFPQSxpQ0FhQzs7Ozs7Ozs7SUFQQywyQkFBNEI7Ozs7Ozs7SUFNNUIscUNBQXFDOzs7OztBQUd2QywwQ0FZQzs7O0lBWEMsa0NBQVk7O0lBQ1osa0NBQVk7O0lBQ1osdUNBQXFCOzs7OztJQUlyQiw0Q0FBdUI7Ozs7O0lBSXZCLDBDQUFxQjs7Ozs7QUFHdkIsMkJBbUNDOzs7Ozs7OztJQTdCQyxxQkFBdUI7Ozs7OztJQUt2Qix1QkFBYTs7Ozs7SUFFYix1QkFBZ0I7Ozs7O0lBRWhCLHFCQUFXOzs7OztJQUVYLHdCQUFjOzs7Ozs7SUFLZCx1QkFBeUI7Ozs7O0lBSXpCLDBCQUFvQjs7Ozs7SUFJcEIseUJBQW1COzs7OztJQUluQix3QkFBaUU7Ozs7O0FBR25FLHNDQWdCQzs7O0lBZkMsZ0NBQVc7O0lBQ1gsbUNBSU07O0lBQ04sa0NBSU07O0lBQ04sbUNBQXlDOztJQUN6QywwQ0FBeUI7O0lBQ3pCLHdDQUF3RDs7SUFDeEQsMkNBQTBCOzs7OztBQUc1QixtQ0FLQzs7Ozs7O0lBSEMsOEJBQWdCOzs7OztJQUVoQiw4QkFBZ0I7Ozs7O0FBR2xCLDJCQVVDOzs7Ozs7O0lBTEMsdUJBQXlCOzs7OztJQUl6Qix3QkFBc0Q7Ozs7O0FBR3hELDRCQW9EQzs7Ozs7Ozs7SUE5Q0MsdUJBQWdCOzs7OztJQUloQiw2QkFBc0I7Ozs7O0lBSXRCLDBCQUFxQzs7Ozs7SUFJckMsMkJBQXdDOzs7OztJQUl4QyxzQkFBZTs7Ozs7SUFJZiwwQkFBbUI7Ozs7O0lBSW5CLDJCQUFxQjs7Ozs7SUFJckIsaUNBQTBCOzs7Ozs7Ozs7O0lBUzFCLHVCQUF5Qjs7Ozs7SUFJekIsdUJBQWdCOzs7OztJQUloQiw2QkFBcUI7Ozs7OztBQU12Qiw0QkFtQkM7Ozs7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Ozs7O0lBekJDLDBCQUFhOzs7OztJQUViLGdDQUFtQjs7Ozs7SUFFbkIsb0NBQXVCOzs7Ozs7O0lBTXZCLGlDQUFxQjs7Ozs7OztJQU1yQixtQ0FBdUI7Ozs7Ozs7OztJQVF2Qiw2QkFBaUI7Ozs7OztBQVFuQixtQ0FHQzs7OztBQUVELHdDQVNDOzs7Ozs7SUFMQyxrQ0FBYzs7Ozs7SUFJZCxtQ0FBbUU7Ozs7OztBQU1yRSxpQ0FHQzs7OztBQUVELHNDQVdDOzs7Ozs7SUFQQyxnQ0FBYzs7Ozs7OztJQU1kLGlDQUFnSTs7Ozs7O0FBUWxJLDhCQXFEQzs7Ozs7O0lBakRDLHdCQUFtQjs7Ozs7SUFJbkIsc0JBQVc7Ozs7O0lBSVgsc0JBQVc7Ozs7O0lBSVgseUJBQWM7Ozs7O0lBSWQsMEJBQWtCOzs7OztJQUlsQiw0QkFBb0I7Ozs7O0lBSXBCLHlCQUFlOzs7OztJQUlmLHdCQUFvQjs7Ozs7SUFJcEIsMEJBQWtCOzs7OztJQUlsQix5QkFBeUI7Ozs7O0lBSXpCLDRCQUE0Qjs7Ozs7SUFJNUIsMEJBQWdCOzs7OztJQUloQiwwQkFBa0I7Ozs7OztBQUlwQixrQ0FJQzs7O0lBSEMsNkJBQTZCOztJQUM3QiwyQkFBZ0M7O0lBQ2hDLDhCQUFrQjs7Ozs7O0FBSXBCLHNDQUlDOzs7SUFIQyw2QkFBVTs7SUFDVixnQ0FBYzs7SUFDZCxpQ0FBZTs7Ozs7QUFHakIsNkJBR0M7OztJQUZDLHVCQUFhOztJQUNiLHdCQUFZOzs7OztBQUtkLHVDQU9DOzs7SUFOQyxtQ0FBaUI7O0lBQ2pCLHFDQUFpQjs7SUFDakIsbUNBQWdCOztJQUNoQixvQ0FBaUI7O0lBQ2pCLG9DQUFpQjs7SUFDakIsMENBQXdCOzs7OztBQUcxQixpQ0FxQkM7Ozs7OztJQWpCQywrQkFBbUI7Ozs7O0lBSW5CLDZCQUF1RDs7Ozs7SUFJdkQsK0JBQWtCOzs7OztJQUlsQiwrQkFBa0I7Ozs7O0lBSWxCLDhCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBIZWFkZXJzLCBIdHRwUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgRWxlbWVudFJlZiwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERyYXdlckhlbHBlck9wdGlvbnMsIE1vZGFsSGVscGVyT3B0aW9ucywgWU5Nb2RlIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcbmltcG9ydCB7IE56RHJhd2VyT3B0aW9ucyB9IGZyb20gJ25nLXpvcnJvLWFudGQvZHJhd2VyJztcbmltcG9ydCB7IE1vZGFsT3B0aW9ucyB9IGZyb20gJ25nLXpvcnJvLWFudGQvbW9kYWwnO1xuaW1wb3J0IHsgU1RDb21wb25lbnQgfSBmcm9tICcuL3N0LmNvbXBvbmVudCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1RXaWR0aE1vZGUge1xuICAvKipcbiAgICog5a695bqm57G75Z6LXG4gICAqIC0gYGRlZmF1bHRgIOm7mOiupOihjOS4ulxuICAgKiAtIGBzdHJpY3RgIOS4peagvOaooeW8j++8jOWNs+W8uuWItuaMiSBgd2lkdGhgIOaMh+WumueahOWuveW6puWRiOeOsO+8jOW5tuagueaNriBgc3RyaWN0QmVoYXZpb3JgIOexu+Wei+WkhOeQhlxuICAgKi9cbiAgdHlwZT86ICdzdHJpY3QnIHwgJ2RlZmF1bHQnO1xuICAvKipcbiAgICog5Lil5qC85qih5byP55qE5aSE55CG6KGM5Li6XG4gICAqIC0gYHdyYXBgIOW8uuWItuaNouihjFxuICAgKiAtIGB0cnVuY2F0ZWAg5oiq55+tXG4gICAqL1xuICBzdHJpY3RCZWhhdmlvcj86ICd3cmFwJyB8ICd0cnVuY2F0ZSc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1RSZXNldENvbHVtbnNPcHRpb24ge1xuICBwaT86IG51bWJlcjtcbiAgcHM/OiBudW1iZXI7XG4gIGNvbHVtbnM/OiBTVENvbHVtbltdO1xuICAvKipcbiAgICogV2hldGhlciB0byBwcmUtY2xlYXIgZGF0YSwgRGVmYXVsdDogYGZhbHNlYFxuICAgKi9cbiAgcHJlQ2xlYXJEYXRhPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIFdoZXRoZXIgdG8gdHJpZ2dlciBhIGRhdGEgbG9hZCwgRGVmYXVsdDogYHRydWVgXG4gICAqL1xuICBlbWl0UmVsb2FkPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTVFJlcSB7XG4gIC8qKlxuICAgKiDliIbpobXnsbvlnovvvIzpu5jorqTvvJpgcGFnZWBcbiAgICogLSBgcGFnZWAg5L2/55SoIGBwaWDvvIxgcHNgIOe7hOWQiFxuICAgKiAtIGBza2lwYCDkvb/nlKggYHNraXBg77yMYGxpbWl0YCDnu4TlkIhcbiAgICovXG4gIHR5cGU/OiAncGFnZScgfCAnc2tpcCc7XG4gIC8qKlxuICAgKiDpop3lpJbor7fmsYLlj4LmlbDvvIzpu5jorqToh6rliqjpmYTliqAgYHBpYOOAgWBwc2Ag6IezVVJMXG4gICAqIC0gYHsgc3RhdHVzOiAnbmV3JyB9YCA9PiBgdXJsP3BpPTEmcHM9MTAmc3RhdHVzPW5ld2BcbiAgICovXG4gIHBhcmFtcz86IGFueTtcbiAgLyoqIOivt+axguaWueazle+8jOm7mOiupO+8mmBHRVRgICovXG4gIG1ldGhvZD86IHN0cmluZztcbiAgLyoqIOivt+axguS9kyBgYm9keWAgKi9cbiAgYm9keT86IGFueTtcbiAgLyoqIOivt+axguS9kyBgSGVhZGVyYCAqL1xuICBoZWFkZXJzPzogYW55O1xuICAvKipcbiAgICog6YeN5ZG95ZCN5Y+C5pWwIGBwaWDjgIFgcHNg77yM6buY6K6k77yaYHsgcGk6ICdwaScsIHBzOiAncHMnIH1gXG4gICAqIC0gYHsgcGk6ICdQYWdlJyB9YCA9PiBgcGlgIOS8muiiq+abv+aNouaIkCBQYWdlXG4gICAqL1xuICByZU5hbWU/OiBTVFJlcVJlTmFtZVR5cGU7XG4gIC8qKlxuICAgKiDmmK/lkKblsIbor7fmsYLmiYDmnInlj4LmlbDmlbDmja7pg73mlL7lhaUgYGJvZHlgIOW9k+S4re+8iGB1cmxgIOWcsOWdgOacrOi6q+WPguaVsOmZpOWklu+8ie+8jOS7heW9kyBgbWV0aG9kOiAnUE9TVCdgIOaXtuacieaViO+8jOm7mOiupO+8mmBmYWxzZWBcbiAgICovXG4gIGFsbEluQm9keT86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDmmK/lkKblu7bov5/liqDovb3mlbDmja7vvIzljbPmuLLmn5Pnu5PmnZ/lkI7kuI3kvJrkuLvliqjlj5Hotbfor7fmsYLvvIzpu5jorqTvvJpgZmFsc2VgXG4gICAqL1xuICBsYXp5TG9hZD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDor7fmsYLliY3mlbDmja7lpITnkIZcbiAgICovXG4gIHByb2Nlc3M/OiAocmVxdWVzdE9wdGlvbnM6IFNUUmVxdWVzdE9wdGlvbnMpID0+IFNUUmVxdWVzdE9wdGlvbnM7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1RSZXF1ZXN0T3B0aW9ucyB7XG4gIGJvZHk/OiBhbnk7XG4gIGhlYWRlcnM/OlxuICAgIHwgSHR0cEhlYWRlcnNcbiAgICB8IHtcbiAgICAgICAgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XG4gICAgICB9O1xuICBwYXJhbXM/OlxuICAgIHwgSHR0cFBhcmFtc1xuICAgIHwge1xuICAgICAgICBbcGFyYW06IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xuICAgICAgfTtcbiAgb2JzZXJ2ZT86ICdib2R5JyB8ICdldmVudHMnIHwgJ3Jlc3BvbnNlJztcbiAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xuICByZXNwb25zZVR5cGU/OiAnYXJyYXlidWZmZXInIHwgJ2Jsb2InIHwgJ2pzb24nIHwgJ3RleHQnO1xuICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNUTG9hZE9wdGlvbnMge1xuICAvKiog5piv5ZCm5ZCI5bm277yM6buY6K6k77yaYGZhbHNlYCAqL1xuICBtZXJnZT86IGJvb2xlYW47XG4gIC8qKiDmmK/lkKbot7Povazoh7Ppobbpg6jvvIzoi6XkuI3mjIflrprnlLEgYHBhZ2UudG9Ub3BgIOadpeWGs+WumiAqL1xuICB0b1RvcD86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1RSZXMge1xuICAvKipcbiAgICog6YeN5ZG95ZCN6L+U5Zue5Y+C5pWwIGB0b3RhbGDjgIFgbGlzdGBcbiAgICogLSBgeyB0b3RhbDogJ1RvdGFsJyB9YCA9PiBUb3RhbCDkvJrooqvlvZPkvZwgYHRvdGFsYFxuICAgKi9cbiAgcmVOYW1lPzogU1RSZXNSZU5hbWVUeXBlO1xuICAvKipcbiAgICog5pWw5o2u6aKE5aSE55CGXG4gICAqL1xuICBwcm9jZXNzPzogKGRhdGE6IFNURGF0YVtdLCByYXdEYXRhPzogYW55KSA9PiBTVERhdGFbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTVFBhZ2Uge1xuICAvKipcbiAgICog5YmN56uv5YiG6aG177yM5b2TIGBkYXRhYCDkuLpgYW55W11gIOaIliBgT2JzZXJ2YWJsZTxhbnlbXT5gIOacieaViO+8jOm7mOiupO+8mmB0cnVlYFxuICAgKiAtIGB0cnVlYCDnlLEgYHN0YCDmoLnmja4gYGRhdGFgIOmVv+W6puWPl+aOp+WIhumhte+8jOWMheaLrO+8muaOkuW6j+OAgei/h+a7pOetiVxuICAgKiAtIGBmYWxzZWAg55Sx55So5oi36YCa6L+HIGB0b3RhbGAg5ZKMIGBkYXRhYCDlj4LmlbDlj5fmjqfliIbpobXvvIzlubbnu7TmiqQgYChjaGFuZ2UpYCDlvZPliIbpobXlj5jmm7Tml7bph43mlrDliqDovb3mlbDmja5cbiAgICovXG4gIGZyb250PzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIOWQjuerr+WIhumhteaYr+WQpumHh+eUqGAwYOWfuue0ouW8le+8jOWPquWcqGBkYXRhYOexu+Wei+S4umBzdHJpbmdg5pe25pyJ5pWI77yM6buY6K6k77yaYGZhbHNlYFxuICAgKi9cbiAgemVyb0luZGV4ZWQ/OiBib29sZWFuO1xuICAvKipcbiAgICog5oyH5a6a5YiG6aG15pi+56S655qE5L2N572u77yM6buY6K6k77yaYGJvdHRvbWBcbiAgICovXG4gIHBvc2l0aW9uPzogJ3RvcCcgfCAnYm90dG9tJyB8ICdib3RoJztcbiAgLyoqXG4gICAqIOaMh+WumuWIhumhteWIhumhteaWueWQke+8jOm7mOiupO+8mmByaWdodGBcbiAgICovXG4gIHBsYWNlbWVudD86ICdsZWZ0JyB8ICdjZW50ZXInIHwgJ3JpZ2h0JztcbiAgLyoqXG4gICAqIOaYr+WQpuaYvuekuuWIhumhteWZqO+8jOm7mOiupO+8mmB0cnVlYFxuICAgKi9cbiAgc2hvdz86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDmmK/lkKbmmL7npLrliIbpobXlmajkuK3mlLnlj5jpobXmlbDvvIzpu5jorqTvvJpgZmFsc2VgXG4gICAqL1xuICBzaG93U2l6ZT86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDliIbpobXlmajkuK3mr4/pobXmmL7npLrmnaHnm67mlbDkuIvmi4nmoYblgLzvvIzpu5jorqTvvJpgWzEwLCAyMCwgMzAsIDQwLCA1MF1gXG4gICAqL1xuICBwYWdlU2l6ZXM/OiBudW1iZXJbXTtcbiAgLyoqXG4gICAqIOaYr+WQpuaYvuekuuWIhumhteWZqOS4reW/q+mAn+i3s+i9rO+8jOm7mOiupO+8mmBmYWxzZWBcbiAgICovXG4gIHNob3dRdWlja0p1bXBlcj86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDmmK/lkKbmmL7npLrmgLvmlbDmja7ph49cbiAgICogLSBgYm9vbGVhbmAg57G75Z6L5pi+56S65LiO5ZCm77yM6buY6K6k5qih5p2/77yaYOWFsSB7e3RvdGFsfX0g5p2hYFxuICAgKiAtIGBzdHJpbmdgIOiHquWumuS5ieaooeadv++8jOaooeadv+WPmOmHj++8mlxuICAgKiAgLSBge3t0b3RhbH19YCDooajnpLrmlbDmja7mgLvph49cbiAgICogIC0gYHt7cmFuZ2VbMF19fWAg6KGo56S65b2T5YmN6aG15byA5aeL5pWw6YeP5YC8XG4gICAqICAtIGB7e3JhbmdlWzFdfX1gIOihqOekuuW9k+WJjemhtee7k+adn+aVsOmHj+WAvFxuICAgKi9cbiAgdG90YWw/OiBzdHJpbmcgfCBib29sZWFuO1xuICAvKipcbiAgICog5YiH5o2i5YiG6aG15pe26L+U5Zue6aG26YOo77yM6buY6K6k77yaYHRydWVgXG4gICAqL1xuICB0b1RvcD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDov5Tlm57pobbpg6jlgY/np7vlgLzvvIzpu5jorqTvvJpgMTAwYFxuICAgKi9cbiAgdG9Ub3BPZmZzZXQ/OiBudW1iZXI7XG59XG5cbi8qKlxuICog5pWw5o2u5rqQXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU1REYXRhIHtcbiAgLyoqXG4gICAqIOmAieaLqeahhuaIluWNlemAieahhueKtuaAgeWAvFxuICAgKi9cbiAgY2hlY2tlZD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDpgInmi6nmoYbmiJbljZXpgInmoYYgYGRpc2FibGVkYCDlgLxcbiAgICovXG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIOaYr+WQpuWxleW8gOeKtuaAgVxuICAgKi9cbiAgZXhwYW5kPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIOaYr+WQpuaYvuekuuWxleW8gOaMiemSrlxuICAgKi9cbiAgc2hvd0V4cGFuZD86IGJvb2xlYW47XG5cbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG4vKipcbiAqIOWIl+aPj+i/sFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFNUQ29sdW1uIHtcbiAgLyoqXG4gICAqIOeUqOS6juWumuS5ieaVsOaNrua6kOS4u+mUru+8jOS+i+Wmgu+8mmBzdGF0aXN0aWNhbGBcbiAgICovXG4gIGtleT86IHN0cmluZztcbiAgLyoqXG4gICAqIOWIl+agh+mimFxuICAgKi9cbiAgdGl0bGU/OiBzdHJpbmcgfCBTVENvbHVtblRpdGxlO1xuICAvKipcbiAgICog5YiX5pWw5o2u5Zyo5pWw5o2u6aG55Lit5a+55bqU55qEIGtlee+8jOaUr+aMgSBgYS5iLmNgIOeahOW1jOWll+WGmeazle+8jOS+i+Wmgu+8mlxuICAgKiAtIGBpZGBcbiAgICogLSBgcHJpY2UubWFya2V0YFxuICAgKiAtIGBbICdwcmljZScsICdtYXJrZXQnIF1gXG4gICAqL1xuICBpbmRleD86IHN0cmluZyB8IHN0cmluZ1tdIHwgbnVsbDtcbiAgLyoqXG4gICAqIOexu+Wei1xuICAgKiAtIGBub2Ag6KGM5Y+377yM6K6h566X6KeE5YiZ77yaYGluZGV4ICsgbm9JbmRleGBcbiAgICogLSBgY2hlY2tib3hgIOWkmumAiVxuICAgKiAtIGByYWRpb2Ag5Y2V6YCJXG4gICAqIC0gYGxpbmtgIOmTvuaOpe+8jOWKoeW/heaMh+WumiBgY2xpY2tgXG4gICAqIC0gYGJhZGdlYCBb5b695qCHXShodHRwczovL25nLmFudC5kZXNpZ24vY29tcG9uZW50cy9iYWRnZS96aCnvvIzliqHlv4XmjIflrpogYGJhZGdlYCDlj4LmlbDphY3nva7lvr3moIflr7nlupTlgLxcbiAgICogLSBgdGFnYCBb5qCH562+XShodHRwczovL25nLmFudC5kZXNpZ24vY29tcG9uZW50cy90YWcvemgp77yM5Yqh5b+F5oyH5a6aIGB0YWdgIOWPguaVsOmFjee9ruagh+etvuWvueW6lOWAvFxuICAgKiAtIGBlbnVtYCDmnprkuL7ovazmjaLvvIzliqHlv4XmjIflrpogYGVudW1gIOWPguaVsOmFjee9ruagh+etvuWvueW6lOWAvFxuICAgKiAtIGBpbWdgIOWbvueJh+S4lOWxheS4rSjoi6UgYGNsYXNzTmFtZWAg5a2Y5Zyo5YiZ5LyY5YWIKVxuICAgKiAtIGBudW1iZXJgIOaVsOWtl+S4lOWxheWPsyjoi6UgYGNsYXNzTmFtZWAg5a2Y5Zyo5YiZ5LyY5YWIKVxuICAgKiAtIGBjdXJyZW5jeWAg6LSn5biB5LiU5bGF5Y+zKOiLpSBgY2xhc3NOYW1lYCDlrZjlnKjliJnkvJjlhYgpXG4gICAqIC0gYGRhdGVgIOaXpeacn+agvOW8j+S4lOWxheS4rSjoi6UgYGNsYXNzTmFtZWAg5a2Y5Zyo5YiZ5LyY5YWIKe+8jOS9v+eUqCBgZGF0ZUZvcm1hdGAg6Ieq5a6a5LmJ5qC85byPXG4gICAqIC0gYHluYCDlsIZgYm9vbGVhbmDnsbvlnovlvr3nq6DljJYgW2RvY3VtZW50XShodHRwczovL25nLWFsYWluLmNvbS9kb2NzL2RhdGEtcmVuZGVyI3luKVxuICAgKiAtIGB3aWRnZXRgIOS9v+eUqOiHquWumuS5ieWwj+mDqOS7tuWKqOaAgeWIm+W7ulxuICAgKi9cbiAgdHlwZT86ICcnIHwgJ2NoZWNrYm94JyB8ICdsaW5rJyB8ICdiYWRnZScgfCAndGFnJyB8ICdlbnVtJyB8ICdyYWRpbycgfCAnaW1nJyB8ICdjdXJyZW5jeScgfCAnbnVtYmVyJyB8ICdkYXRlJyB8ICd5bicgfCAnbm8nIHwgJ3dpZGdldCc7XG4gIC8qKlxuICAgKiDpk77mjqXlm57osIPvvIzoi6Xov5Tlm57kuIDkuKrlrZfnrKbkuLLooajnpLrlr7zoiKpVUkzkvJroh6rliqjop6blj5EgYHJvdXRlci5uYXZpZ2F0ZUJ5VXJsYFxuICAgKi9cbiAgY2xpY2s/OiAocmVjb3JkOiBTVERhdGEsIGluc3RhbmNlPzogU1RDb21wb25lbnQpID0+IGFueTtcbiAgLyoqXG4gICAqIOaMiemSrue7hFxuICAgKi9cbiAgYnV0dG9ucz86IFNUQ29sdW1uQnV0dG9uW107XG4gIC8qKlxuICAgKiDoh6rlrprkuYnmuLLmn5NJRFxuICAgKiBAZXhhbXBsZVxuICAgKiA8bmctdGVtcGxhdGUgc3Qtcm93PVwiY3VzdG9tXCIgbGV0LWl0ZW0gbGV0LWluZGV4PVwiaW5kZXhcIiBsZXQtY29sdW1uPVwiY29sdW1uXCI+XG4gICAqICB7eyBjLnRpdGxlIH19XG4gICAqIDwvbmctdGVtcGxhdGU+XG4gICAqL1xuICByZW5kZXI/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiB8IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBTVERhdGE7IGluZGV4OiBudW1iZXIgfT47XG4gIC8qKlxuICAgKiDmoIfpopjoh6rlrprkuYnmuLLmn5NJRFxuICAgKiBAZXhhbXBsZVxuICAgKiA8bmctdGVtcGxhdGUgc3Qtcm93PVwiY3VzdG9tXCIgdHlwZT1cInRpdGxlXCIgbGV0LWM+XG4gICAqICB7eyBpdGVtIHwganNvbiB9fVxuICAgKiA8L25nLXRlbXBsYXRlPlxuICAgKi9cbiAgcmVuZGVyVGl0bGU/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiB8IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBTVENvbHVtbjsgaW5kZXg6IG51bWJlciB9PjtcbiAgLyoqXG4gICAqIOWIl+Wuve+8iOaVsOWtl+Wei+ihqOekuiBgcHhgIOWAvO+8ie+8jOS+i+Wmgu+8mmAxMDBg44CBYDEwJWDjgIFgMTAwcHhgXG4gICAqXG4gICAqICoq5rOo5oSP77yaKiog6Iul5Zu65a6a5YiX5b+F6aG75piv5pWw5a2XXG4gICAqL1xuICB3aWR0aD86IHN0cmluZyB8IG51bWJlcjtcbiAgLyoqXG4gICAqIOaOkuW6j+mFjee9rumhue+8jOi/nOeoi+aVsOaNrumFjee9rioq5LyY5YWIKirop4TliJnvvJpcbiAgICogLSBgdHJ1ZWAg6KGo56S65YWB6K645o6S5bqP77yM5LiU6Iul5pWw5o2u5rqQ5Li65pys5Zyw5pe26Ieq5Yqo55Sf5oiQIGBjb21wYXJlOiAoYSwgYikgPT4gYVtpbmRleF0gLSBiW2luZGV4XWAg5pa55rOVXG4gICAqIC0gYHN0cmluZ2Ag6KGo56S66L+c56iL5pWw5o2u5o6S5bqP55u45a+55bqUIGBrZXlgIOWAvFxuICAgKi9cbiAgc29ydD86IHRydWUgfCBzdHJpbmcgfCBTVENvbHVtblNvcnQ7XG4gIC8qKlxuICAgKiDov4fmu6TphY3nva7poblcbiAgICovXG4gIGZpbHRlcj86IFNUQ29sdW1uRmlsdGVyO1xuICAvKipcbiAgICog5qC85byP5YyW5YiX5YC8XG4gICAqL1xuICBmb3JtYXQ/OiAoaXRlbTogU1REYXRhLCBjb2w6IFNUQ29sdW1uLCBpbmRleDogbnVtYmVyKSA9PiBzdHJpbmc7XG4gIC8qKlxuICAgKiDoh6rlrprkuYnlhagv5Y+N6YCJ6YCJ5oup6aG5XG4gICAqL1xuICBzZWxlY3Rpb25zPzogU1RDb2x1bW5TZWxlY3Rpb25bXTtcbiAgLyoqXG4gICAqIOWIlyBgY2xhc3NgIOWxnuaAp+WAvO+8iOazqO+8muaXoOmhuyBgLmAg54K577yJ5aSa5Liq55So56m65qC86ZqU5byA77yM5L6L5aaC77yaXG4gICAqIC0gYHRleHQtY2VudGVyYCDlsYXkuK1cbiAgICogLSBgdGV4dC1yaWdodGAg5bGF5Y+zXG4gICAqIC0gYHRleHQtc3VjY2Vzc2Ag5oiQ5Yqf6ImyXG4gICAqIC0gYHRleHQtZXJyb3JgIOW8guW4uOiJslxuICAgKi9cbiAgY2xhc3NOYW1lPzogc3RyaW5nIHwgc3RyaW5nW10gfCBTZXQ8c3RyaW5nPiB8IHsgW2tsYXNzOiBzdHJpbmddOiBhbnkgfTtcbiAgLyoqXG4gICAqIOWQiOW5tuWIl1xuICAgKi9cbiAgY29sU3Bhbj86IG51bWJlcjtcbiAgLyoqXG4gICAqIOaVsOWtl+agvOW8j++8jGB0eXBlPW51bWJlcmAg5pyJ5pWIXG4gICAqL1xuICBudW1iZXJEaWdpdHM/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiDml6XmnJ/moLzlvI/vvIxgdHlwZT1kYXRlYCDmnInmlYjvvIzvvIjpu5jorqTvvJpgeXl5eS1NTS1kZCBISDptbWDvvIlcbiAgICovXG4gIGRhdGVGb3JtYXQ/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiDlvZMgYHR5cGU9eW5gIOacieaViFxuICAgKi9cbiAgeW4/OiBTVENvbHVtblluO1xuICAvKipcbiAgICog5piv5ZCm5YWB6K645a+85Ye677yM6buY6K6kIGB0cnVlYFxuICAgKi9cbiAgZXhwb3J0ZWQ/OiBib29sZWFuO1xuICAvKipcbiAgICog5p2D6ZmQ77yM562J5ZCMIFtBQ0xDYW5UeXBlXShodHRwczovL25nLWFsYWluLmNvbS9hY2wvZ2V0dGluZy1zdGFydGVkLyNBQ0xDYW5UeXBlKSDlj4LmlbDlgLxcbiAgICovXG4gIGFjbD86IGFueTtcbiAgLyoqIOW9k+S4jeWtmOWcqOaVsOaNruaXtuS7pem7mOiupOWAvOabv+S7oyAqL1xuICBkZWZhdWx0Pzogc3RyaW5nO1xuICAvKipcbiAgICog5Zu65a6a5YmN5ZCO5YiX77yM5b2T5oyH5a6a5pe25Yqh5b+F5oyH5a6aIGB3aWR0aGAg5ZCm5YiZ6KeG5Li65peg5pWI77yM5pyJ6Iul5bmyICoq5rOo5oSP77yaKiog6aG577yaXG4gICAqXG4gICAqIC0g6Iul5YiX5aS05LiO5YaF5a655LiN5a+56b2Q5oiW5Ye6546w5YiX6YeN5aSN77yM6K+35oyH5a6a5YiX55qE5a695bqmIGB3aWR0aGBcbiAgICogLSDlu7rorq7mjIflrpogYHNjcm9sbC54YCDkuLrlpKfkuo7ooajmoLzlrr3luqbnmoTlm7rlrprlgLzmiJbnmb7liIbmr5TjgILms6jmhI/vvIzkuJTpnZ7lm7rlrprliJflrr3luqbkuYvlkozkuI3opoHotoXov4cgYHNjcm9sbC54YFxuICAgKi9cbiAgZml4ZWQ/OiAnbGVmdCcgfCAncmlnaHQnO1xuICAvKipcbiAgICog5b695qCH6YWN572u6aG5XG4gICAqL1xuICBiYWRnZT86IFNUQ29sdW1uQmFkZ2UgfCBudWxsO1xuICAvKipcbiAgICog5qCH562+6YWN572u6aG5XG4gICAqL1xuICB0YWc/OiBTVENvbHVtblRhZyB8IG51bGw7XG4gIC8qKlxuICAgKiDooYzlj7fntKLlvJXvvIzpu5jorqTvvJpgMWBcbiAgICogLSDorqHnrpfop4TliJnkuLrvvJpgaW5kZXggKyBub0luZGV4YFxuICAgKiAtIOaUr+aMgeiHquWumuS5ieaWueazlVxuICAgKi9cbiAgbm9JbmRleD86IG51bWJlciB8ICgoaXRlbTogU1REYXRhLCBjb2w6IFNUQ29sdW1uLCBpZHg6IG51bWJlcikgPT4gbnVtYmVyKTtcbiAgLyoqXG4gICAqIOadoeS7tuihqOi+vuW8j1xuICAgKiAtIOS7hei1i+WAvCBgY29sdW1uc2Ag5pe25omn6KGM5LiA5qyhXG4gICAqIC0g5Y+v6LCD55SoIGByZXNldENvbHVtbnMoKWAg5YaN5LiA5qyh6Kem5Y+RXG4gICAqL1xuICBpaWY/OiAoaXRlbTogU1RDb2x1bW4pID0+IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIOe7n+iuoeWIl+aVsOaNrlxuICAgKiAtIOiLpeS9v+eUqOiHquWumuS5iee7n+iuoeWHveaVsOWPr+aXoOmhu+aMh+WumiBgaW5kZXhgXG4gICAqIC0g5Y+v5Lul5qC55o2uIGBrZXlgIOadpeWumuS5ieeUn+aIkOWQjumcgOimgeeahOmUruWQje+8jOWmguaenOacquaMh+WumiBga2V5YCDliJnkvb/nlKggYGluZGV4YCDmnaXooajnpLrplK7lkI1cbiAgICogLSDlvZPml6Dms5Xmib7liLDmnInmlYjplK7lkI3ml7bvvIzkvb/nlKjkuIvmoIfvvIjku44gYDBgIOW8gOWni++8ieadpeS7o+abv1xuICAgKi9cbiAgc3RhdGlzdGljYWw/OiBTVFN0YXRpc3RpY2FsVHlwZSB8IFNUU3RhdGlzdGljYWw7XG5cbiAgd2lkZ2V0PzogU1RXaWRnZXRDb2x1bW47XG5cbiAgZW51bT86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nOyBba2V5OiBudW1iZXJdOiBzdHJpbmcgfTtcblxuICAvKipcbiAgICog5YiG57uE6KGo5aS0XG4gICAqL1xuICBjaGlsZHJlbj86IFNUQ29sdW1uW107XG5cbiAgcm93U3Bhbj86IG51bWJlcjtcblxuICAvKipcbiAgICog6LCD5pW06KGo5aS06YWN572uXG4gICAqIC0g5rOo5oSP77yaKirkuI3opoHlv5jorrAqKuWcqCBgc3JjL3N0eWxlc2Ag5LiL5aKe5YqgIGBuei1yZXNpemFibGVgIExlc3Mg5qC35byP5paH5Lu277yaYEBpbXBvcnQgJ35uZy16b3Jyby1hbnRkL3Jlc2l6YWJsZS9zdHlsZS9lbnRyeS5sZXNzJztgXG4gICAqIC0gKirkuI3mlK/mjIHlpJrooajlpLQqKlxuICAgKi9cbiAgcmVzaXphYmxlPzogU1RSZXNpemFibGUgfCBib29sZWFuO1xuXG4gIC8vIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTVFdpZGdldENvbHVtbiB7XG4gIHR5cGU6IHN0cmluZztcblxuICBwYXJhbXM/OiAob3B0aW9uczogeyByZWNvcmQ6IFNURGF0YTsgY29sdW1uOiBTVENvbHVtbiB9KSA9PiB7fTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTVENvbHVtblRpdGxlIHtcbiAgW2tleTogc3RyaW5nXTogYW55O1xuXG4gIC8qKlxuICAgKiBUZXh0IG9mIGhlYWRlciwgY2FuIGJlIGNob29zZSBvbmUgb2YgYHRleHRgIG9yIGBpMThuYFxuICAgKi9cbiAgdGV4dD86IHN0cmluZztcblxuICAvKipcbiAgICogSTE4biBrZXkgb2YgaGVhZGVyLCBjYW4gYmUgY2hvb3NlIG9uZSBvZiBgdGV4dGAgb3IgYGkxOG5gXG4gICAqL1xuICBpMThuPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBPcHRpb25hbCBpbmZvcm1hdGlvbiBvZiBoZWFkZXJcbiAgICovXG4gIG9wdGlvbmFsPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBPcHRpb25hbCBoZWxwIG9mIGhlYWRlclxuICAgKi9cbiAgb3B0aW9uYWxIZWxwPzogc3RyaW5nO1xufVxuXG5leHBvcnQgdHlwZSBTVFN0YXRpc3RpY2FsVHlwZSA9ICdjb3VudCcgfCAnZGlzdGluY3RDb3VudCcgfCAnc3VtJyB8ICdhdmVyYWdlJyB8ICdtYXgnIHwgJ21pbic7XG5cbmV4cG9ydCB0eXBlIFNUU3RhdGlzdGljYWxGbiA9ICh2YWx1ZXM6IG51bWJlcltdLCBjb2w6IFNUQ29sdW1uLCBsaXN0OiBTVERhdGFbXSwgcmF3RGF0YT86IGFueSkgPT4gU1RTdGF0aXN0aWNhbFJlc3VsdDtcblxuZXhwb3J0IGludGVyZmFjZSBTVFN0YXRpc3RpY2FsIHtcbiAgdHlwZTogU1RTdGF0aXN0aWNhbFR5cGUgfCBTVFN0YXRpc3RpY2FsRm47XG4gIC8qKlxuICAgKiDkv53nlZnlsI/mlbDkvY3mlbDvvIzpu5jorqTvvJpgMmBcbiAgICovXG4gIGRpZ2l0cz86IG51bWJlcjtcbiAgLyoqXG4gICAqIOaYr+WQpumcgOimgei0p+W4geagvOW8j+WMlu+8jOm7mOiupOS7peS4i+aDheWGteS4uiBgdHJ1ZWBcbiAgICogLSBgdHlwZWAg5Li6IGBTVFN0YXRpc3RpY2FsRm5g44CBIGBzdW1g44CBYGF2ZXJhZ2Vg44CBYG1heGDjgIFgbWluYFxuICAgKi9cbiAgY3VycmVuY3k/OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNUU3RhdGlzdGljYWxSZXN1bHRzIHtcbiAgW2tleTogc3RyaW5nXTogU1RTdGF0aXN0aWNhbFJlc3VsdDtcbiAgW2luZGV4OiBudW1iZXJdOiBTVFN0YXRpc3RpY2FsUmVzdWx0O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNUU3RhdGlzdGljYWxSZXN1bHQge1xuICB2YWx1ZTogbnVtYmVyO1xuICB0ZXh0Pzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNUQ29sdW1uU29ydCB7XG4gIC8qKlxuICAgKiDmjpLluo/nmoTpu5jorqTlj5fmjqflsZ7mgKdcbiAgICovXG4gIGRlZmF1bHQ/OiAnYXNjZW5kJyB8ICdkZXNjZW5kJyB8IG51bGw7XG4gIC8qKlxuICAgKiDmnKzlnLDmlbDmja7nmoTmjpLluo/lh73mlbDvvIzkvb/nlKjkuIDkuKrlh73mlbAo5Y+C6ICDIFtBcnJheS5zb3J0XShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9BcnJheS9zb3J0KSDnmoQgY29tcGFyZUZ1bmN0aW9uKVxuICAgKiAtIGBudWxsYCDlv73nlaXmnKzlnLDmjpLluo/vvIzkvYbkv53mjIHmjpLluo/lip/og71cbiAgICogLSDoi6XmlbDmja7mupDkuLrmnKzlnLDml7boh6rliqjnlJ/miJAgYChhLCBiKSA9PiBhW2luZGV4XSAtIGJbaW5kZXhdYCDmlrnms5VcbiAgICovXG4gIGNvbXBhcmU/OiAoKGE6IFNURGF0YSwgYjogU1REYXRhKSA9PiBudW1iZXIpIHwgbnVsbDtcbiAgLyoqXG4gICAqIOi/nOeoi+aVsOaNrueahOaOkuW6j+aXtuWQjuerr+ebuOWvueW6lOeahEtFWe+8jOm7mOiupOS9v+eUqCBgaW5kZXhgIOWxnuaAp1xuICAgKiAtIOiLpSBgbXVsdGlTb3J0OiBmYWxzZWAg5pe277yaYGtleTogJ25hbWUnID0+ID9uYW1lPTEmcGk9MWBcbiAgICogLSDoi6UgYG11bHRpU29ydDogdHJ1ZWAg5YWB6K645aSa5Liq5o6S5bqPIGtleSDlrZjlnKjvvIzmiJbkvb/nlKggYFNUTXVsdGlTb3J0YCDmjIflrprlpJrliJfmjpLluo9rZXnlkIjlubbop4TliJlcbiAgICovXG4gIGtleT86IHN0cmluZyB8IG51bGw7XG4gIC8qKlxuICAgKiDov5znqIvmlbDmja7nmoTmjpLluo/ml7blkI7nq6/nm7jlr7nlupTnmoRWQUxVRVxuICAgKiAtIGB7IGFzY2VuZDogJzAnLCBkZXNjZW5kOiAnMScgfWAg57uT5p6cIGA/bmFtZT0xJnBpPTFgXG4gICAqIC0gYHsgYXNjZW5kOiAnYXNjJywgZGVzY2VuZDogJ2Rlc2MnIH1gIOe7k+aenCBgP25hbWU9ZGVzYyZwaT0xYFxuICAgKi9cbiAgcmVOYW1lPzogeyBhc2NlbmQ/OiBzdHJpbmc7IGRlc2NlbmQ/OiBzdHJpbmcgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTVFNvcnRNYXAgZXh0ZW5kcyBTVENvbHVtblNvcnQge1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG5cbiAgLyoqIOaYr+WQpuWQr+eUqOaOkuW6jyAqL1xuICBlbmFibGVkPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTVENvbHVtbkZpbHRlciB7XG4gIC8qKlxuICAgKiDmkJzntKLmlrnlvI9cbiAgICogLSBgZGVmdWFsdGAg6buY6K6k5b2i5byPXG4gICAqIC0gYGtleXdvcmRgIOaWh+acrOahhuW9ouW8j1xuICAgKi9cbiAgdHlwZT86ICdkZWZhdWx0JyB8ICdrZXl3b3JkJztcbiAgLyoqXG4gICAqIOihqOWktOeahOetm+mAieiPnOWNlemhue+8jOiHs+WwkeS4gOmhueaJjeS8mueUn+aViFxuICAgKiAtIOW9kyBgdHlwZT0na2V5d29yZCdgIOaXtuWPr+S4uuepulxuICAgKi9cbiAgbWVudXM/OiBTVENvbHVtbkZpbHRlck1lbnVbXTtcbiAgLyoqXG4gICAqIOacrOWcsOaVsOaNrueahOetm+mAieWHveaVsFxuICAgKi9cbiAgZm4/OiAoKGZpbHRlcjogU1RDb2x1bW5GaWx0ZXJNZW51LCByZWNvcmQ6IFNURGF0YSkgPT4gYm9vbGVhbikgfCBudWxsO1xuICAvKipcbiAgICog5qCH6K+G5pWw5o2u5piv5ZCm5bey6L+H5ruk77yM562b6YCJ5Zu+5qCH5Lya6auY5LquXG4gICAqL1xuICBkZWZhdWx0PzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIOiHquWumuS5iSBmaWx0ZXIg5Zu+5qCHXG4gICAqIC0g5b2TIGB0eXBlPSdkZWZhdWx0J2Ag6buY6K6kIGBmaWx0ZXJgXG4gICAqIC0g5b2TIGB0eXBlPSdrZXl3b3JkJ2Ag6buY6K6kIGBzZWFyY2hgXG4gICAqL1xuICBpY29uPzogc3RyaW5nIHwgU1RJY29uO1xuICAvKipcbiAgICog56Gu6K6k5oyJ6ZKu5paH5pys77yM6buY6K6kIGDnoa7orqRgXG4gICAqL1xuICBjb25maXJtVGV4dD86IHN0cmluZztcbiAgLyoqXG4gICAqIOa4hemZpOaMiemSruaWh+acrO+8jOm7mOiupCBg6YeN572uYFxuICAgKi9cbiAgY2xlYXJUZXh0Pzogc3RyaW5nO1xuICAvKipcbiAgICog5piv5ZCm5aSa6YCJ77yM6buY6K6kIGB0cnVlYFxuICAgKi9cbiAgbXVsdGlwbGU/OiBib29sZWFuO1xuICAvKipcbiAgICog6L+c56iL5pWw5o2u55qE6L+H5ruk5pe25ZCO56uv55u45a+55bqU55qES0VZ77yM6buY6K6k5L2/55SoIGBpbmRleGAg5bGe5oCnXG4gICAqIGBrZXk6ICduYW1lJ2Ag57uT5p6cIGA/bmFtZT0xJnBpPTFgXG4gICAqL1xuICBrZXk/OiBzdHJpbmcgfCBudWxsO1xuICAvKipcbiAgICog6L+c56iL5pWw5o2u55qE6L+H5ruk5pe25ZCO56uv55u45a+55bqU55qEVkFMVUVcbiAgICogLSDpu5jorqTlvZMgYG11bHRpcGxlOiB0cnVlYCDml7bku6Xoi7HmlofpgJflj7fmi7zmjqXnmoTlrZfnrKbkuLJcbiAgICogQHJldHVybiDov5Tlm57kuLogT2JqZWN0IOWvueixoVxuICAgKi9cbiAgcmVOYW1lPzogKGxpc3Q6IFNUQ29sdW1uRmlsdGVyTWVudVtdLCBjb2w6IFNUQ29sdW1uKSA9PiB7fTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTVENvbHVtbkZpbHRlck1lbnUge1xuICAvKipcbiAgICog5paH5pysXG4gICAqIC0g5b2TIGB0eXBlOiAna2V5d29yZCdgIOaXtuihqOekuiBgcGxhY2Vob2xkZXJgXG4gICAqL1xuICB0ZXh0Pzogc3RyaW5nO1xuICAvKipcbiAgICog5YC8XG4gICAqL1xuICB2YWx1ZT86IGFueTtcbiAgLyoqXG4gICAqIOaYr+WQpumAieS4rVxuICAgKi9cbiAgY2hlY2tlZD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDmnYPpmZDvvIznrYnlkIwgW0FDTENhblR5cGVdKGh0dHBzOi8vbmctYWxhaW4uY29tL2FjbC9nZXR0aW5nLXN0YXJ0ZWQvI0FDTENhblR5cGUpIOWPguaVsOWAvFxuICAgKi9cbiAgYWNsPzogYW55O1xuXG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTVENvbHVtblNlbGVjdGlvbiB7XG4gIC8qKlxuICAgKiDpgInmi6npobnmmL7npLrnmoTmloflrZdcbiAgICovXG4gIHRleHQ6IHN0cmluZztcbiAgLyoqXG4gICAqIOmAieaLqemhueeCueWHu+Wbnuiwg++8jOWFgeiuuOWvueWPguaVsCBgZGF0YS5jaGVja2VkYCDov5vooYzmk43kvZxcbiAgICovXG4gIHNlbGVjdDogKGRhdGE6IFNURGF0YVtdKSA9PiB2b2lkO1xuICAvKiog5p2D6ZmQ77yM562J5ZCMIGBjYW4oKWAg5Y+C5pWw5YC8ICovXG4gIGFjbD86IGFueTtcbn1cblxuLyoqIOW9kyBgdHlwZT15bmAg5pyJ5pWIICovXG5leHBvcnQgaW50ZXJmYWNlIFNUQ29sdW1uWW4ge1xuICAvKipcbiAgICog55yf5YC85p2h5Lu277yM77yI6buY6K6k77yaYHRydWVg77yJXG4gICAqL1xuICB0cnV0aD86IGFueTtcbiAgLyoqXG4gICAqIOW+veeroCBgdHJ1ZWAg5pe25paH5pys77yM77yI6buY6K6k77yaYOaYr2DvvIlcbiAgICovXG4gIHllcz86IHN0cmluZztcbiAgLyoqXG4gICAqIOW+veeroCBgZmFsc2VgIOaXtuaWh+acrO+8jO+8iOm7mOiupO+8mmDlkKZg77yJXG4gICAqL1xuICBubz86IHN0cmluZztcbiAgLyoqXG4gICAqIOW+veeroOaYvuekuumjjuagvFxuICAgKiAtIGBmdWxsYCDlm77moIflkozmlofmnKxcbiAgICogLSBgaWNvbmAg5Zu+5qCHXG4gICAqIC0gYHRleHRgIOaWh+acrFxuICAgKi9cbiAgbW9kZT86IFlOTW9kZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTVEljb24ge1xuICAvKiog5Zu+5qCH57G75Z6LICovXG4gIHR5cGU6IHN0cmluZztcbiAgLyoqIOWbvuagh+S4u+mimOmjjuagvO+8jOm7mOiupO+8mmBvdXRsaW5lYCAqL1xuICB0aGVtZT86ICdvdXRsaW5lJyB8ICd0d290b25lJyB8ICdmaWxsJztcbiAgLyoqIOaYr+WQpuacieaXi+i9rOWKqOeUu++8jOm7mOiupO+8mmBmYWxzZWAgKi9cbiAgc3Bpbj86IGJvb2xlYW47XG4gIC8qKiDku4XpgILnlKjlj4zoibLlm77moIfvvIzorr7nva7lj4zoibLlm77moIfnmoTkuLvopoHpopzoibLvvIzku4Xlr7nlvZPliY0gaWNvbiDnlJ/mlYggKi9cbiAgdHdvVG9uZUNvbG9yPzogc3RyaW5nO1xuICAvKiog5oyH5a6a5p2l6IeqIEljb25Gb250IOeahOWbvuagh+exu+WeiyAqL1xuICBpY29uZm9udD86IHN0cmluZztcbn1cblxuLyoqXG4gKiDmjInpkq7phY3nva5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTVENvbHVtbkJ1dHRvbiB7XG4gIC8qKlxuICAgKiDmlofmnKxcbiAgICovXG4gIHRleHQ/OiBzdHJpbmcgfCAoKHJlY29yZDogU1REYXRhLCBidG46IFNUQ29sdW1uQnV0dG9uKSA9PiBzdHJpbmcpO1xuICAvKipcbiAgICog5paH5pysIGkxOG5cbiAgICovXG4gIGkxOG4/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiDlm77moIdcbiAgICovXG4gIGljb24/OiBzdHJpbmcgfCBTVEljb247XG4gIC8qKlxuICAgKiDmjInpkq7nsbvlnotcbiAgICogLSBgbm9uZWAg5peg5Lu75L2V5LqS5YqoXG4gICAqIC0gYGRlbGAg5Yig6Zmk77yM6buY6K6k5byA5ZCvIGBwb3A6IHRydWVgXG4gICAqIC0gYG1vZGFsYCDlr7nor53moYbvvIzpnIDopoHmjIflrpogYGNvbXBvbmVudGAg5omN5Lya55Sf5pWIXG4gICAqIC0gYHN0YXRpY2Ag6Z2Z5oCB5a+56K+d5qGG77yM6ZyA6KaB5oyH5a6aIGBjb21wb25lbnRgIOaJjeS8mueUn+aViFxuICAgKiAtIGBkcmF3ZXJgIOaKveWxie+8jOmcgOimgeaMh+WumiBgY29tcG9uZW50YCDmiY3kvJrnlJ/mlYhcbiAgICogLSBgbGlua2Ag6ZO+5o6l77yM5b2TIGBjbGlja2Ag6L+U5Zue5a2X56ym5Liy5pe26Ieq5Yqo6LCD55SoIGBuYXZpZ2F0ZUJ5VXJsYCDlr7zoiKpcbiAgICogLSBgZGl2aWRlcmAg5YiG5Ymy57q/XG4gICAqL1xuICB0eXBlPzogJ25vbmUnIHwgJ2RlbCcgfCAnbW9kYWwnIHwgJ3N0YXRpYycgfCAnZHJhd2VyJyB8ICdsaW5rJyB8ICdkaXZpZGVyJztcbiAgLyoqXG4gICAqIOeCueWHu+Wbnuiwg1xuICAgKiAtIEZ1bmN0aW9uXG4gICAqICAtIGB0eXBlPW1vZGFsYCDlj6rkvJrlnKjlvZPmnInkvKDlm57lgLzml7bmiY3kvJrop6blj5Hlm57osINcbiAgICogLSByZWxvYWTvvJrph43mlrDliLfmlrDlvZPliY3pobVcbiAgICogLSBsb2Fk77ya6YeN5paw5Yqg6L295pWw5o2u77yM5bm26YeN572u6aG156CB5Li677yaYDFgXG4gICAqXG4gICAqIEB0b2RvIEJhZCBwYXJhbWV0ZXIgZGVzaWduXG4gICAqL1xuICBjbGljaz86ICdyZWxvYWQnIHwgJ2xvYWQnIHwgKChyZWNvcmQ6IFNURGF0YSwgbW9kYWw/OiBhbnksIGluc3RhbmNlPzogU1RDb21wb25lbnQpID0+IGFueSk7XG4gIC8qKlxuICAgKiDmsJTms6Hnoa7orqTmoYblj4LmlbDvvIzoi6UgYHN0cmluZ2Ag57G75Z6L6KGo56S65qCH6aKYXG4gICAqL1xuICBwb3A/OiBib29sZWFuIHwgc3RyaW5nIHwgU1RDb2x1bW5CdXR0b25Qb3A7XG4gIC8qKlxuICAgKiDlr7nor53moYblj4LmlbBcbiAgICovXG4gIG1vZGFsPzogU1RDb2x1bW5CdXR0b25Nb2RhbDtcbiAgLyoqXG4gICAqIOaKveWxieWPguaVsFxuICAgKi9cbiAgZHJhd2VyPzogU1RDb2x1bW5CdXR0b25EcmF3ZXI7XG4gIC8qKlxuICAgKiDkuIvmi4noj5zljZXvvIzlvZPlrZjlnKjml7bku6UgYGRyb3Bkb3duYCDlvaLlvI/muLLmn5NcbiAgICogLSDlj6rmlK/mjIHkuIDnuqdcbiAgICovXG4gIGNoaWxkcmVuPzogU1RDb2x1bW5CdXR0b25bXTtcbiAgLyoqXG4gICAqIOadg+mZkO+8jOetieWQjCBbQUNMQ2FuVHlwZV0oaHR0cHM6Ly9uZy1hbGFpbi5jb20vYWNsL2dldHRpbmctc3RhcnRlZC8jQUNMQ2FuVHlwZSkg5Y+C5pWw5YC8XG4gICAqL1xuICBhY2w/OiBhbnk7XG4gIC8qKlxuICAgKiBDb25kaXRpb25hbCBleHByZXNzaW9uXG4gICAqXG4gICAqIEB0b2RvIEJhZCBwYXJhbWV0ZXIgZGVzaWduXG4gICAqL1xuICBpaWY/OiAoaXRlbTogU1REYXRhLCBidG46IFNUQ29sdW1uQnV0dG9uLCBjb2x1bW46IFNUQ29sdW1uKSA9PiBib29sZWFuO1xuICAvKipcbiAgICogQ29uZGl0aW9uYWwgZXhwcmVzc2lvbiByZW5kZXJpbmcgYmVoYXZpb3IsIGNhbiBiZSBzZXQgdG8gYGhpZGVgIChkZWZhdWx0KSBvciBgZGlzYWJsZWRgXG4gICAqL1xuICBpaWZCZWhhdmlvcj86IElpZkJlaGF2aW9yVHlwZTtcblxuICB0b29sdGlwPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiDmjInpkq4gYGNsYXNzYCDlsZ7mgKflgLzvvIjms6jvvJrml6DpobsgYC5gIOeCue+8ieWkmuS4queUqOepuuagvOmalOW8gO+8jOS+i+Wmgu+8mlxuICAgKiAtIGB0ZXh0LXN1Y2Nlc3NgIOaIkOWKn+iJslxuICAgKiAtIGB0ZXh0LWVycm9yYCDplJnor6/oibJcbiAgICovXG4gIGNsYXNzTmFtZT86IHN0cmluZyB8IHN0cmluZ1tdIHwgU2V0PHN0cmluZz4gfCB7IFtrbGFzczogc3RyaW5nXTogYW55IH07XG5cbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNUQ29sdW1uQnV0dG9uT0sge1xuICByZWNvcmQ6IFNURGF0YTtcbiAgLyoqXG4gICAqIE1vZGFsIG9yIGRyYXdlciByZXR1cm4gdmFsdWUgd2hlbiB0cmlnZ2VyIGNvbmZpcm0uXG4gICAqL1xuICByZXQ/OiBhbnk7XG4gIGluc3RhbmNlPzogU1RDb21wb25lbnQ7XG4gIGV2ZW50OiBFdmVudDtcbn1cblxuZXhwb3J0IHR5cGUgSWlmQmVoYXZpb3JUeXBlID0gJ2hpZGUnIHwgJ2Rpc2FibGVkJztcblxuZXhwb3J0IGludGVyZmFjZSBTVENvbHVtbkJ1dHRvbk1vZGFsIGV4dGVuZHMgTW9kYWxIZWxwZXJPcHRpb25zIHtcbiAgLyoqXG4gICAqIOWvueivneahhue7hOS7tuWvueixoVxuICAgKi9cbiAgY29tcG9uZW50PzogYW55O1xuICAvKipcbiAgICog5a+56K+d5qGG5Y+C5pWwXG4gICAqL1xuICBwYXJhbXM/OiAocmVjb3JkOiBTVERhdGEpID0+IHt9O1xuICAvKipcbiAgICog5a+56K+d5qGG55uu5qCH57uE5Lu255qE5o6l5pS25Y+C5pWw5ZCN77yM6buY6K6k77yaYHJlY29yZGBcbiAgICovXG4gIHBhcmFtc05hbWU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1RDb2x1bW5CdXR0b25Nb2RhbENvbmZpZyB7XG4gIC8qKlxuICAgKiDmjIflrprmqKHmgIHmoYbnm67moIfnu4Tku7bnmoTmjqXmlLblj4LmlbDlkI3vvIzpu5jorqTvvJpgcmVjb3JkYFxuICAgKi9cbiAgcGFyYW1zTmFtZT86IHN0cmluZztcbiAgLyoqIOWkp+Wwj++8m+S+i+Wmgu+8mmxn44CBNjAw77yM6buY6K6k77yaYGxnYCAqL1xuICBzaXplPzogJ3NtJyB8ICdtZCcgfCAnbGcnIHwgJ3hsJyB8ICcnIHwgbnVtYmVyO1xuICAvKiog5a+56K+d5qGGIFtNb2RhbE9wdGlvbnNdKGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL2NvbXBvbmVudHMvbW9kYWwvbW9kYWwtdHlwZXMudHMpIOWPguaVsCAqL1xuICBtb2RhbE9wdGlvbnM/OiBNb2RhbE9wdGlvbnM7XG4gIC8qKiDmmK/lkKbnsr7lh4bvvIjpu5jorqTvvJpgdHJ1ZWDvvInvvIzoi6Xov5Tlm57lgLzpnZ7nqbrlgLzvvIhgbnVsbGDmiJZgdW5kZWZpbmVkYO+8ieinhuS4uuaIkOWKn++8jOWQpuWImeinhuS4uumUmeivryAqL1xuICBleGFjdD86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1RDb2x1bW5CdXR0b25EcmF3ZXIgZXh0ZW5kcyBEcmF3ZXJIZWxwZXJPcHRpb25zIHtcbiAgLyoqXG4gICAqIOagh+mimFxuICAgKi9cbiAgdGl0bGU/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiDmir3lsYnnu4Tku7blr7nosaFcbiAgICovXG4gIGNvbXBvbmVudD86IGFueTtcbiAgLyoqXG4gICAqIOaKveWxieWPguaVsFxuICAgKi9cbiAgcGFyYW1zPzogKHJlY29yZDogU1REYXRhKSA9PiB7fTtcbiAgLyoqXG4gICAqIOaKveWxieebruagh+e7hOS7tueahOaOpeaUtuWPguaVsOWQje+8jOm7mOiupO+8mmByZWNvcmRgXG4gICAqL1xuICBwYXJhbXNOYW1lPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNUQ29sdW1uQnV0dG9uRHJhd2VyQ29uZmlnIHtcbiAgLyoqXG4gICAqIOaKveWxieebruagh+e7hOS7tueahOaOpeaUtuWPguaVsOWQje+8jOm7mOiupO+8mmByZWNvcmRgXG4gICAqL1xuICBwYXJhbXNOYW1lPzogc3RyaW5nO1xuICAvKipcbiAgICog5aSn5bCP77yb5L6L5aaC77yabGfjgIE2MDDvvIzpu5jorqTvvJpgbWRgXG4gICAqXG4gICAqIHwg57G75Z6LIHwg6buY6K6k5aSn5bCPIHxcbiAgICogfCAtLS0gfCAtLS0tLS0gfFxuICAgKiB8IGBzbWAgfCBgMzAwYCB8XG4gICAqIHwgYG1kYCB8IGA2MDBgIHxcbiAgICogfCBgbGdgIHwgYDkwMGAgfFxuICAgKiB8IGB4bGAgfCBgMTIwMGAgfFxuICAgKlxuICAgKiA+IOS7peS4iuWAvO+8jOWPr+mAmui/h+imhuebluebuOW6lOeahExFU1Plj4LmlbDoh6rooYzosIPmlbRcbiAgICovXG4gIHNpemU/OiAnc20nIHwgJ21kJyB8ICdsZycgfCAneGwnIHwgbnVtYmVyO1xuICAvKipcbiAgICog5piv5ZCm5YyF5ZCr5bqV6YOo5bel5YW35p2h77yM6buY6K6k77yaYHRydWVgXG4gICAqL1xuICBmb290ZXI/OiBib29sZWFuO1xuICAvKipcbiAgICog5bqV6YOo5bel5YW35p2h6auY5bqm77yM6buY6K6k77yaYDU1YFxuICAgKi9cbiAgZm9vdGVySGVpZ2h0PzogbnVtYmVyO1xuICAvKiog5oq95bGJIFtOekRyYXdlck9wdGlvbnNdKGh0dHBzOi8vbmcuYW50LmRlc2lnbi9jb21wb25lbnRzL2RyYXdlci96aCNuemRyYXdlcm9wdGlvbnMpIOWPguaVsCAqL1xuICBkcmF3ZXJPcHRpb25zPzogTnpEcmF3ZXJPcHRpb25zO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNUQ29sdW1uQnV0dG9uUG9wIHtcbiAgLyoqXG4gICAqIFRpdGxlIG9mIHRoZSBwb3BvdmVyLCBkZWZhdWx0OiBg56Gu6K6k5Yig6Zmk5ZCX77yfYFxuICAgKi9cbiAgdGl0bGU/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFBvcG92ZXIgdHJpZ2dlciBtb2RlLCBkZWZhdWx0OiBgY2xpY2tgXG4gICAqL1xuICB0cmlnZ2VyPzogJ2NsaWNrJyB8ICdmb2N1cycgfCAnaG92ZXInO1xuXG4gIC8qKlxuICAgKiBUaGUgcG9zaXRpb24gb2YgdGhlIHBvcG92ZXIgcmVsYXRpdmUgdG8gdGhlIHRhcmdldCwgZGVmYXVsdDogYHRvcGBcbiAgICovXG4gIHBsYWNlbWVudD86XG4gICAgfCAndG9wJ1xuICAgIHwgJ2xlZnQnXG4gICAgfCAncmlnaHQnXG4gICAgfCAnYm90dG9tJ1xuICAgIHwgJ3RvcExlZnQnXG4gICAgfCAndG9wUmlnaHQnXG4gICAgfCAnYm90dG9tTGVmdCdcbiAgICB8ICdib3R0b21SaWdodCdcbiAgICB8ICdsZWZ0VG9wJ1xuICAgIHwgJ2xlZnRCb3R0b20nXG4gICAgfCAncmlnaHRUb3AnXG4gICAgfCAncmlnaHRCb3R0b20nO1xuXG4gIC8qKlxuICAgKiBDbGFzcyBuYW1lIG9mIHRoZSBwb3BvdmVyIGNhcmRcbiAgICovXG4gIG92ZXJsYXlDbGFzc05hbWU/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFN0eWxlIG9mIHRoZSBwb3BvdmVyIGNhcmRcbiAgICovXG4gIG92ZXJsYXlTdHlsZT86IHt9O1xuXG4gIC8qKlxuICAgKiBUZXh0IG9mIHRoZSBDYW5jZWwgYnV0dG9uXG4gICAqL1xuICBjYW5jZWxUZXh0Pzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUZXh0IG9mIHRoZSBDb25maXJtIGJ1dHRvblxuICAgKi9cbiAgb2tUZXh0Pzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBCdXR0b24gYHR5cGVgIG9mIHRoZSBDb25maXJtIGJ1dHRvblxuICAgKi9cbiAgb2tUeXBlPzogJ3ByaW1hcnknIHwgJ2dob3N0JyB8ICdkYXNoZWQnIHwgJ2RhbmdlcicgfCAnZGVmYXVsdCc7XG5cbiAgLyoqXG4gICAqIEN1c3RvbWl6ZSBpY29uIG9mIGNvbmZpcm1hdGlvblxuICAgKi9cbiAgaWNvbj86IHN0cmluZztcblxuICAvKipcbiAgICogV2hldGhlciB0byBkaXJlY3RseSBlbWl0IGBvbkNvbmZpcm1gIHdpdGhvdXQgc2hvd2luZyBQb3Bjb25maXJtLCBkZWZhdWx0OiBgKCkgPT4gZmFsc2VgXG4gICAqL1xuICBjb25kaXRpb24/OiAoaXRlbTogU1REYXRhKSA9PiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNUUmVxUmVOYW1lVHlwZSB7XG4gIHBpPzogc3RyaW5nO1xuICBwcz86IHN0cmluZztcbiAgc2tpcD86IHN0cmluZztcbiAgbGltaXQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1RSZXNSZU5hbWVUeXBlIHtcbiAgdG90YWw/OiBzdHJpbmcgfCBzdHJpbmdbXTtcbiAgbGlzdD86IHN0cmluZyB8IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNURXhwb3J0T3B0aW9ucyB7XG4gIC8qKlxuICAgKiBTcGVjaWZ5IHRoZSBjdXJyZW50bHkgZXhwb3J0ZWQgZGF0YSwgZGVmYXVsdCB0aGUgY3VycmVudCB0YWJsZSBkYXRhXG4gICAqL1xuICBkYXRhPzogU1REYXRhW107XG4gIC8qKlxuICAgKiBTcGVjaWZ5IHRoZSBjdXJyZW50bHkgZXhwb3J0ZWQgY29sdW1uIGNvbmZpZ3VyYXRpb24sIGRlZmF1bHQgdGhlIGN1cnJlbnQgdGFibGUgZGF0YVxuICAgKi9cbiAgY29sdW1lbnM/OiBTVENvbHVtbltdO1xuICAvKiog5bel5L2c5rql5ZCNICovXG4gIHNoZWV0bmFtZT86IHN0cmluZztcbiAgLyoqIOaWh+S7tuWQjSAqL1xuICBmaWxlbmFtZT86IHN0cmluZztcbiAgLyoqIHRyaWdnZXJzIHdoZW4gc2F2ZWFzICovXG4gIGNhbGxiYWNrPzogKHdiOiBhbnkpID0+IHZvaWQ7XG59XG5cbi8qKlxuICog5Y2V5o6S5bqP6KeE5YiZXG4gKiAtIOiLpeS4jeaMh+Wumu+8jOWImei/lOWbnu+8mmBjb2x1bW5OYW1lPWFzY2VuZHxkZXNjZW5kYFxuICogLSDoi6XmjIflrprvvIzliJnov5Tlm57vvJpgc29ydD1jb2x1bW5OYW1lLihhc2NlbmR8ZGVzY2VuZClgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU1RTaW5nbGVTb3J0IHtcbiAgLyoqIOivt+axguWPguaVsOWQje+8jOm7mOiupO+8mmBzb3J0YCAqL1xuICBrZXk/OiBzdHJpbmc7XG4gIC8qKiDliJflkI3kuI7nirbmgIHpl7TliIbpmpTnrKbvvIzpu5jorqTvvJpgLmAgKi9cbiAgbmFtZVNlcGFyYXRvcj86IHN0cmluZztcbn1cblxuLyoqXG4gKiDlpJrmjpLluo/nm7jlkIzmjpLluo8ga2V5IOaXtuWQiOW5tuinhOWImVxuICovXG5leHBvcnQgaW50ZXJmYWNlIFNUTXVsdGlTb3J0IHtcbiAgLyoqIOivt+axguWPguaVsOWQje+8jOm7mOiupO+8mmBzb3J0YCAqL1xuICBrZXk/OiBzdHJpbmc7XG4gIC8qKiDkuI3lkIzlsZ7mgKfpl7TliIbpmpTnrKbvvIzpu5jorqTvvJpgLWAgKi9cbiAgc2VwYXJhdG9yPzogc3RyaW5nO1xuICAvKiog5YiX5ZCN5LiO54q25oCB6Ze05YiG6ZqU56ym77yM6buY6K6k77yaYC5gICovXG4gIG5hbWVTZXBhcmF0b3I/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiDmmK/lkKbku6XmlbDnu4TnmoTlvaLlvI/kvKDpgJLlj4LmlbDvvIzpu5jorqTvvJpgZmFsc2VgXG4gICAqIC0gYHRydWVgIOihqOekuuS9v+eUqCBgdXJsP3NvcnQ9bmFtZS5hc2Mmc29ydD1hZ2UuZGVzY2Ag5b2i5byPXG4gICAqIC0gYGZhbHNlYCDooajnpLrkvb/nlKggYHVybD9zb3J0PW5hbWUuYXNjLWFnZS5kZXNjYCDlvaLlvI9cbiAgICovXG4gIGFycmF5UGFyYW0/OiBib29sZWFuO1xuICAvKipcbiAgICog5piv5ZCm5L+d5oyB56m65YC855qE6ZSu5ZCN77yM6buY6K6k77yaYHRydWVgXG4gICAqIC0gYHRydWVgIOihqOekuuS4jeeuoeaYr+WQpuacieaOkuW6j+mDveS8muWPkemAgSBga2V5YCDplK7lkI1cbiAgICogLSBgZmFsc2VgIOihqOekuuaXoOaOkuW6j+WKqOS9nOaXtuS4jeS8muWPkemAgSBga2V5YCDplK7lkI1cbiAgICovXG4gIGtlZXBFbXB0eUtleT86IGJvb2xlYW47XG4gIC8qKlxuICAgKiAjIyDku4XpmZDlhajlsYDphY3nva7pobnmnInmlYhcbiAgICpcbiAgICog5piv5ZCm5YWo5bGA5aSa5o6S5bqP5qih5byP77yM6buY6K6k77yaYHRydWVgXG4gICAqIC0gYHRydWVgIOihqOekuuaJgOaciSBgc3RgIOm7mOiupOS4uuWkmuaOkuW6j1xuICAgKiAtIGBmYWxzZWAg6KGo56S66ZyA6KaB5Li65q+P5LiqIGBzdGAg5re75YqgIGBtdWx0aVNvcnRgIOaJjeS8muinhuS4uuWkmuaOkuW6j+aooeW8j1xuICAgKi9cbiAgZ2xvYmFsPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IHR5cGUgU1RNdWx0aVNvcnRSZXN1bHRUeXBlID0geyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xuXG4vKipcbiAqIOW+veagh+S/oeaBr1xuICovXG5leHBvcnQgaW50ZXJmYWNlIFNUQ29sdW1uQmFkZ2Uge1xuICBba2V5OiBudW1iZXJdOiBTVENvbHVtbkJhZGdlVmFsdWU7XG4gIFtrZXk6IHN0cmluZ106IFNUQ29sdW1uQmFkZ2VWYWx1ZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTVENvbHVtbkJhZGdlVmFsdWUge1xuICAvKipcbiAgICog5paH5pysXG4gICAqL1xuICB0ZXh0Pzogc3RyaW5nO1xuICAvKipcbiAgICog5b695qCH6aKc6Imy5YC8XG4gICAqL1xuICBjb2xvcj86ICdzdWNjZXNzJyB8ICdwcm9jZXNzaW5nJyB8ICdkZWZhdWx0JyB8ICdlcnJvcicgfCAnd2FybmluZyc7XG59XG5cbi8qKlxuICog5qCH562+5L+h5oGvXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU1RDb2x1bW5UYWcge1xuICBba2V5OiBudW1iZXJdOiBTVENvbHVtblRhZ1ZhbHVlO1xuICBba2V5OiBzdHJpbmddOiBTVENvbHVtblRhZ1ZhbHVlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNUQ29sdW1uVGFnVmFsdWUge1xuICAvKipcbiAgICog5paH5pysXG4gICAqL1xuICB0ZXh0Pzogc3RyaW5nO1xuICAvKipcbiAgICog6aKc6Imy5YC877yM5pSv5oyB6aKE6K6+5ZKM6Imy5YC8XG4gICAqIC0g6aKE6K6+77yaZ2Vla2JsdWUsYmx1ZSxwdXJwbGUsc3VjY2VzcyxyZWQsdm9sY2FubyxvcmFuZ2UsZ29sZCxsaW1lLGdyZWVuLGN5YW5cbiAgICogLSDoibLlgLzvvJojZjUwLCNmZjBcbiAgICovXG4gIGNvbG9yPzogJ2dlZWtibHVlJyB8ICdibHVlJyB8ICdwdXJwbGUnIHwgJ3N1Y2Nlc3MnIHwgJ3JlZCcgfCAndm9sY2FubycgfCAnb3JhbmdlJyB8ICdnb2xkJyB8ICdsaW1lJyB8ICdncmVlbicgfCAnY3lhbicgfCBzdHJpbmc7XG59XG5cbmV4cG9ydCB0eXBlIFNUQ2hhbmdlVHlwZSA9ICdsb2FkZWQnIHwgJ3BpJyB8ICdwcycgfCAnY2hlY2tib3gnIHwgJ3JhZGlvJyB8ICdzb3J0JyB8ICdmaWx0ZXInIHwgJ2NsaWNrJyB8ICdkYmxDbGljaycgfCAnZXhwYW5kJyB8ICdyZXNpemUnO1xuXG4vKipcbiAqIOWbnuiwg+aVsOaNrlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFNUQ2hhbmdlIHtcbiAgLyoqXG4gICAqIOWbnuiwg+exu+Wei1xuICAgKi9cbiAgdHlwZTogU1RDaGFuZ2VUeXBlO1xuICAvKipcbiAgICog5b2T5YmN6aG156CBXG4gICAqL1xuICBwaTogbnVtYmVyO1xuICAvKipcbiAgICog5q+P6aG15pWw6YePXG4gICAqL1xuICBwczogbnVtYmVyO1xuICAvKipcbiAgICog5pWw5o2u5oC76YePXG4gICAqL1xuICB0b3RhbDogbnVtYmVyO1xuICAvKipcbiAgICogYGxvYWRlZGAg5Y+C5pWwXG4gICAqL1xuICBsb2FkZWQ/OiBTVERhdGFbXTtcbiAgLyoqXG4gICAqIGBjaGVja2JveGAg5Y+C5pWwXG4gICAqL1xuICBjaGVja2JveD86IFNURGF0YVtdO1xuICAvKipcbiAgICogYHJhZGlvYCDlj4LmlbBcbiAgICovXG4gIHJhZGlvPzogU1REYXRhO1xuICAvKipcbiAgICog5o6S5bqP5Y+C5pWwXG4gICAqL1xuICBzb3J0PzogU1RDaGFuZ2VTb3J0O1xuICAvKipcbiAgICog6L+H5ruk5Y+C5pWwXG4gICAqL1xuICBmaWx0ZXI/OiBTVENvbHVtbjtcbiAgLyoqXG4gICAqIOihjOeCueWHu+WPguaVsFxuICAgKi9cbiAgY2xpY2s/OiBTVENoYW5nZVJvd0NsaWNrO1xuICAvKipcbiAgICog6KGM5Y+M5Ye75Y+C5pWwXG4gICAqL1xuICBkYmxDbGljaz86IFNUQ2hhbmdlUm93Q2xpY2s7XG4gIC8qKlxuICAgKiBgZXhwYW5kYCDlj4LmlbBcbiAgICovXG4gIGV4cGFuZD86IFNURGF0YTtcbiAgLyoqXG4gICAqIGByZXNpemVgIOWPguaVsFxuICAgKi9cbiAgcmVzaXplPzogU1RDb2x1bW47XG59XG5cbi8qKiDooYzljZXlh7vlj4LmlbAgKi9cbmV4cG9ydCBpbnRlcmZhY2UgU1RDaGFuZ2VTb3J0IHtcbiAgdmFsdWU/OiAnYXNjZW5kJyB8ICdkZXNjZW5kJztcbiAgbWFwPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbiAgY29sdW1uPzogU1RDb2x1bW47XG59XG5cbi8qKiDooYzljZXlh7vlj4LmlbAgKi9cbmV4cG9ydCBpbnRlcmZhY2UgU1RDaGFuZ2VSb3dDbGljayB7XG4gIGU/OiBFdmVudDtcbiAgaXRlbT86IFNURGF0YTtcbiAgaW5kZXg/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1RFcnJvciB7XG4gIHR5cGU/OiAncmVxJztcbiAgZXJyb3I/OiBhbnk7XG59XG5cbmV4cG9ydCB0eXBlIFNUUm93Q2xhc3NOYW1lID0gKHJlY29yZDogU1REYXRhLCBpbmRleDogbnVtYmVyKSA9PiBzdHJpbmc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1RDb2x1bW5Hcm91cFR5cGUge1xuICBjb2x1bW46IFNUQ29sdW1uO1xuICBjb2xTdGFydDogbnVtYmVyO1xuICBjb2xFbmQ/OiBudW1iZXI7XG4gIGNvbFNwYW4/OiBudW1iZXI7XG4gIHJvd1NwYW4/OiBudW1iZXI7XG4gIGhhc1N1YkNvbHVtbnM/OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNUUmVzaXphYmxlIHtcbiAgLyoqXG4gICAqIERpc2FibGUgcmVzaXplLCBEZWZhdWx0OiBgdHJ1ZWBcbiAgICovXG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIFNwZWNpZmllcyByZXNpemUgYm91bmRhcmllcywgRGVmYXVsdDogYHdpbmRvd2BcbiAgICovXG4gIGJvdW5kcz86ICd3aW5kb3cnIHwgJ3BhcmVudCcgfCBFbGVtZW50UmVmPEhUTUxFbGVtZW50PjtcbiAgLyoqXG4gICAqIE1heGltdW0gd2lkdGggb2YgcmVzaXphYmxlIGVsZW1lbiwgRGVmYXVsdDogYDYwYFxuICAgKi9cbiAgbWF4V2lkdGg/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBNaW5pbXVtIHdpZHRoIG9mIHJlc2l6YWJsZSBlbGVtZW50LCBEZWZhdWx0OiBgMzYwYFxuICAgKi9cbiAgbWluV2lkdGg/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBFbmFibGUgcHJldmlldyB3aGVuIHJlc2l6aW5nLCBEZWZhdWx0OiBgdHJ1ZWBcbiAgICovXG4gIHByZXZpZXc/OiBib29sZWFuO1xufVxuIl19