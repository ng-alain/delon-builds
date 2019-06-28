/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     * 数据变更后是否保留在数据变更前的页码，默认：`true`
     * @deprecated
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
     * @type {?|undefined}
     */
    STColumnButton.prototype.type;
    /**
     * 点击回调
     * - Function
     *  - `type=modal` 只会在当有传回值时才会触发回调
     * - reload：重新刷新当前页
     * - load：重新加载数据，并重置页码为：`1`
     * @type {?|undefined}
     */
    STColumnButton.prototype.click;
    /**
     * 是否需要气泡确认框
     * @type {?|undefined}
     */
    STColumnButton.prototype.pop;
    /**
     * 气泡确认框内容，默认 `确认删除吗？`
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
     * @type {?|undefined}
     */
    STColumnButton.prototype.iif;
    /**
     * Conditional expression rendering behavior, can be set to `hide` (default) or `disabled`
     * @type {?|undefined}
     */
    STColumnButton.prototype.iifBehavior;
    /* Skipping unhandled member: [key: string]: any;*/
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuaW50ZXJmYWNlcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hYmMvdGFibGUvIiwic291cmNlcyI6WyJ0YWJsZS5pbnRlcmZhY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFNQSxpQ0FhQzs7Ozs7Ozs7SUFQQywyQkFBNEI7Ozs7Ozs7SUFNNUIscUNBQXFDOzs7OztBQUd2QywwQ0FRQzs7O0lBUEMsa0NBQVk7O0lBQ1osa0NBQVk7O0lBQ1osdUNBQXFCOzs7OztJQUlyQiwwQ0FBcUI7Ozs7O0FBR3ZCLDJCQStCQzs7Ozs7Ozs7SUF6QkMscUJBQXVCOzs7Ozs7SUFLdkIsdUJBQWE7Ozs7O0lBRWIsdUJBQWdCOzs7OztJQUVoQixxQkFBVzs7Ozs7SUFFWCx3QkFBYzs7Ozs7O0lBS2QsdUJBQXlCOzs7OztJQUl6QiwwQkFBb0I7Ozs7O0lBSXBCLHdCQUFpRTs7Ozs7QUFHbkUsc0NBZ0JDOzs7SUFmQyxnQ0FBVzs7SUFDWCxtQ0FJTTs7SUFDTixrQ0FJTTs7SUFDTixtQ0FBeUM7O0lBQ3pDLDBDQUF5Qjs7SUFDekIsd0NBQXdEOztJQUN4RCwyQ0FBMEI7Ozs7O0FBRzVCLG1DQUdDOzs7Ozs7SUFEQyw4QkFBZ0I7Ozs7O0FBR2xCLDJCQVVDOzs7Ozs7O0lBTEMsdUJBQXlCOzs7OztJQUl6Qix3QkFBc0Q7Ozs7O0FBR3hELDRCQXlEQzs7Ozs7Ozs7SUFuREMsdUJBQWdCOzs7OztJQUloQiw2QkFBc0I7Ozs7O0lBSXRCLDBCQUFxQzs7Ozs7SUFJckMsMkJBQXdDOzs7OztJQUl4QyxzQkFBZTs7Ozs7SUFJZiwwQkFBbUI7Ozs7O0lBSW5CLDJCQUFxQjs7Ozs7SUFJckIsaUNBQTBCOzs7Ozs7Ozs7O0lBUzFCLHVCQUF5Qjs7Ozs7O0lBS3pCLDRCQUFxQjs7Ozs7SUFJckIsdUJBQWdCOzs7OztJQUloQiw2QkFBcUI7Ozs7OztBQU12Qiw0QkFtQkM7Ozs7OztJQWZDLHlCQUFrQjs7Ozs7SUFJbEIsMEJBQW1COzs7OztJQUluQix3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Q29udGVudCI6WyJpbXBvcnQgeyBIdHRwSGVhZGVycywgSHR0cFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IERyYXdlckhlbHBlck9wdGlvbnMsIE1vZGFsSGVscGVyT3B0aW9ucywgWU5Nb2RlIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcbmltcG9ydCB7IE56RHJhd2VyT3B0aW9ucyB9IGZyb20gJ25nLXpvcnJvLWFudGQvZHJhd2VyJztcbmltcG9ydCB7IE1vZGFsT3B0aW9uc0ZvclNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL21vZGFsJztcbmltcG9ydCB7IFNUQ29tcG9uZW50IH0gZnJvbSAnLi90YWJsZS5jb21wb25lbnQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNUV2lkdGhNb2RlIHtcbiAgLyoqXG4gICAqIOWuveW6puexu+Wei1xuICAgKiAtIGBkZWZhdWx0YCDpu5jorqTooYzkuLpcbiAgICogLSBgc3RyaWN0YCDkuKXmoLzmqKHlvI/vvIzljbPlvLrliLbmjIkgYHdpZHRoYCDmjIflrprnmoTlrr3luqblkYjnjrDvvIzlubbmoLnmja4gYHN0cmljdEJlaGF2aW9yYCDnsbvlnovlpITnkIZcbiAgICovXG4gIHR5cGU/OiAnc3RyaWN0JyB8ICdkZWZhdWx0JztcbiAgLyoqXG4gICAqIOS4peagvOaooeW8j+eahOWkhOeQhuihjOS4ulxuICAgKiAtIGB3cmFwYCDlvLrliLbmjaLooYxcbiAgICogLSBgdHJ1bmNhdGVgIOaIquefrVxuICAgKi9cbiAgc3RyaWN0QmVoYXZpb3I/OiAnd3JhcCcgfCAndHJ1bmNhdGUnO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNUUmVzZXRDb2x1bW5zT3B0aW9uIHtcbiAgcGk/OiBudW1iZXI7XG4gIHBzPzogbnVtYmVyO1xuICBjb2x1bW5zPzogU1RDb2x1bW5bXTtcbiAgLyoqXG4gICAqIFdoZXRoZXIgdG8gdHJpZ2dlciBhIGRhdGEgbG9hZCwgZGVmYXVsdDogYHRydWVgXG4gICAqL1xuICBlbWl0UmVsb2FkPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTVFJlcSB7XG4gIC8qKlxuICAgKiDliIbpobXnsbvlnovvvIzpu5jorqTvvJpgcGFnZWBcbiAgICogLSBgcGFnZWAg5L2/55SoIGBwaWDvvIxgcHNgIOe7hOWQiFxuICAgKiAtIGBza2lwYCDkvb/nlKggYHNraXBg77yMYGxpbWl0YCDnu4TlkIhcbiAgICovXG4gIHR5cGU/OiAncGFnZScgfCAnc2tpcCc7XG4gIC8qKlxuICAgKiDpop3lpJbor7fmsYLlj4LmlbDvvIzpu5jorqToh6rliqjpmYTliqAgYHBpYOOAgWBwc2Ag6IezVVJMXG4gICAqIC0gYHsgc3RhdHVzOiAnbmV3JyB9YCA9PiBgdXJsP3BpPTEmcHM9MTAmc3RhdHVzPW5ld2BcbiAgICovXG4gIHBhcmFtcz86IGFueTtcbiAgLyoqIOivt+axguaWueazle+8jOm7mOiupO+8mmBHRVRgICovXG4gIG1ldGhvZD86IHN0cmluZztcbiAgLyoqIOivt+axguS9kyBgYm9keWAgKi9cbiAgYm9keT86IGFueTtcbiAgLyoqIOivt+axguS9kyBgSGVhZGVyYCAqL1xuICBoZWFkZXJzPzogYW55O1xuICAvKipcbiAgICog6YeN5ZG95ZCN5Y+C5pWwIGBwaWDjgIFgcHNg77yM6buY6K6k77yaYHsgcGk6ICdwaScsIHBzOiAncHMnIH1gXG4gICAqIC0gYHsgcGk6ICdQYWdlJyB9YCA9PiBgcGlgIOS8muiiq+abv+aNouaIkCBQYWdlXG4gICAqL1xuICByZU5hbWU/OiBTVFJlcVJlTmFtZVR5cGU7XG4gIC8qKlxuICAgKiDmmK/lkKblsIbor7fmsYLmiYDmnInlj4LmlbDmlbDmja7pg73mlL7lhaUgYGJvZHlgIOW9k+S4re+8iGB1cmxgIOWcsOWdgOacrOi6q+WPguaVsOmZpOWklu+8ie+8jOS7heW9kyBgbWV0aG9kOiAnUE9TVCdgIOaXtuacieaViO+8jOm7mOiupO+8mmBmYWxzZWBcbiAgICovXG4gIGFsbEluQm9keT86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDor7fmsYLliY3mlbDmja7lpITnkIZcbiAgICovXG4gIHByb2Nlc3M/OiAocmVxdWVzdE9wdGlvbnM6IFNUUmVxdWVzdE9wdGlvbnMpID0+IFNUUmVxdWVzdE9wdGlvbnM7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1RSZXF1ZXN0T3B0aW9ucyB7XG4gIGJvZHk/OiBhbnk7XG4gIGhlYWRlcnM/OlxuICAgIHwgSHR0cEhlYWRlcnNcbiAgICB8IHtcbiAgICAgICAgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XG4gICAgICB9O1xuICBwYXJhbXM/OlxuICAgIHwgSHR0cFBhcmFtc1xuICAgIHwge1xuICAgICAgICBbcGFyYW06IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xuICAgICAgfTtcbiAgb2JzZXJ2ZT86ICdib2R5JyB8ICdldmVudHMnIHwgJ3Jlc3BvbnNlJztcbiAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xuICByZXNwb25zZVR5cGU/OiAnYXJyYXlidWZmZXInIHwgJ2Jsb2InIHwgJ2pzb24nIHwgJ3RleHQnO1xuICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNUTG9hZE9wdGlvbnMge1xuICAvKiog5piv5ZCm5ZCI5bm277yM6buY6K6k77yaYGZhbHNlYCAqL1xuICBtZXJnZT86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1RSZXMge1xuICAvKipcbiAgICog6YeN5ZG95ZCN6L+U5Zue5Y+C5pWwIGB0b3RhbGDjgIFgbGlzdGBcbiAgICogLSBgeyB0b3RhbDogJ1RvdGFsJyB9YCA9PiBUb3RhbCDkvJrooqvlvZPkvZwgYHRvdGFsYFxuICAgKi9cbiAgcmVOYW1lPzogU1RSZXNSZU5hbWVUeXBlO1xuICAvKipcbiAgICog5pWw5o2u6aKE5aSE55CGXG4gICAqL1xuICBwcm9jZXNzPzogKGRhdGE6IFNURGF0YVtdLCByYXdEYXRhPzogYW55KSA9PiBTVERhdGFbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTVFBhZ2Uge1xuICAvKipcbiAgICog5YmN56uv5YiG6aG177yM5b2TIGBkYXRhYCDkuLpgYW55W11gIOaIliBgT2JzZXJ2YWJsZTxhbnlbXT5gIOacieaViO+8jOm7mOiupO+8mmB0cnVlYFxuICAgKiAtIGB0cnVlYCDnlLEgYHN0YCDmoLnmja4gYGRhdGFgIOmVv+W6puWPl+aOp+WIhumhte+8jOWMheaLrO+8muaOkuW6j+OAgei/h+a7pOetiVxuICAgKiAtIGBmYWxzZWAg55Sx55So5oi36YCa6L+HIGB0b3RhbGAg5ZKMIGBkYXRhYCDlj4LmlbDlj5fmjqfliIbpobXvvIzlubbnu7TmiqQgYChjaGFuZ2UpYCDlvZPliIbpobXlj5jmm7Tml7bph43mlrDliqDovb3mlbDmja5cbiAgICovXG4gIGZyb250PzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIOWQjuerr+WIhumhteaYr+WQpumHh+eUqGAwYOWfuue0ouW8le+8jOWPquWcqGBkYXRhYOexu+Wei+S4umBzdHJpbmdg5pe25pyJ5pWI77yM6buY6K6k77yaYGZhbHNlYFxuICAgKi9cbiAgemVyb0luZGV4ZWQ/OiBib29sZWFuO1xuICAvKipcbiAgICog5oyH5a6a5YiG6aG15pi+56S655qE5L2N572u77yM6buY6K6k77yaYGJvdHRvbWBcbiAgICovXG4gIHBvc2l0aW9uPzogJ3RvcCcgfCAnYm90dG9tJyB8ICdib3RoJztcbiAgLyoqXG4gICAqIOaMh+WumuWIhumhteWIhumhteaWueWQke+8jOm7mOiupO+8mmByaWdodGBcbiAgICovXG4gIHBsYWNlbWVudD86ICdsZWZ0JyB8ICdjZW50ZXInIHwgJ3JpZ2h0JztcbiAgLyoqXG4gICAqIOaYr+WQpuaYvuekuuWIhumhteWZqO+8jOm7mOiupO+8mmB0cnVlYFxuICAgKi9cbiAgc2hvdz86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDmmK/lkKbmmL7npLrliIbpobXlmajkuK3mlLnlj5jpobXmlbDvvIzpu5jorqTvvJpgZmFsc2VgXG4gICAqL1xuICBzaG93U2l6ZT86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDliIbpobXlmajkuK3mr4/pobXmmL7npLrmnaHnm67mlbDkuIvmi4nmoYblgLzvvIzpu5jorqTvvJpgWzEwLCAyMCwgMzAsIDQwLCA1MF1gXG4gICAqL1xuICBwYWdlU2l6ZXM/OiBudW1iZXJbXTtcbiAgLyoqXG4gICAqIOaYr+WQpuaYvuekuuWIhumhteWZqOS4reW/q+mAn+i3s+i9rO+8jOm7mOiupO+8mmBmYWxzZWBcbiAgICovXG4gIHNob3dRdWlja0p1bXBlcj86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDmmK/lkKbmmL7npLrmgLvmlbDmja7ph49cbiAgICogLSBgYm9vbGVhbmAg57G75Z6L5pi+56S65LiO5ZCm77yM6buY6K6k5qih5p2/77yaYOWFsSB7e3RvdGFsfX0g5p2hYFxuICAgKiAtIGBzdHJpbmdgIOiHquWumuS5ieaooeadv++8jOaooeadv+WPmOmHj++8mlxuICAgKiAgLSBge3t0b3RhbH19YCDooajnpLrmlbDmja7mgLvph49cbiAgICogIC0gYHt7cmFuZ2VbMF19fWAg6KGo56S65b2T5YmN6aG15byA5aeL5pWw6YeP5YC8XG4gICAqICAtIGB7e3JhbmdlWzFdfX1gIOihqOekuuW9k+WJjemhtee7k+adn+aVsOmHj+WAvFxuICAgKi9cbiAgdG90YWw/OiBzdHJpbmcgfCBib29sZWFuO1xuICAvKipcbiAgICog5pWw5o2u5Y+Y5pu05ZCO5piv5ZCm5L+d55WZ5Zyo5pWw5o2u5Y+Y5pu05YmN55qE6aG156CB77yM6buY6K6k77yaYHRydWVgXG4gICAqIEBkZXByZWNhdGVkXG4gICAqL1xuICBpbmRleFJlc2V0PzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIOWIh+aNouWIhumhteaXtui/lOWbnumhtumDqO+8jOm7mOiupO+8mmB0cnVlYFxuICAgKi9cbiAgdG9Ub3A/OiBib29sZWFuO1xuICAvKipcbiAgICog6L+U5Zue6aG26YOo5YGP56e75YC877yM6buY6K6k77yaYDEwMGBcbiAgICovXG4gIHRvVG9wT2Zmc2V0PzogbnVtYmVyO1xufVxuXG4vKipcbiAqIOaVsOaNrua6kFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFNURGF0YSB7XG4gIC8qKlxuICAgKiDpgInmi6nmoYbmiJbljZXpgInmoYbnirbmgIHlgLxcbiAgICovXG4gIGNoZWNrZWQ/OiBib29sZWFuO1xuICAvKipcbiAgICog6YCJ5oup5qGG5oiW5Y2V6YCJ5qGGIGBkaXNhYmxlZGAg5YC8XG4gICAqL1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDmmK/lkKblsZXlvIDnirbmgIFcbiAgICovXG4gIGV4cGFuZD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDmmK/lkKbmmL7npLrlsZXlvIDmjInpkq5cbiAgICovXG4gIHNob3dFeHBhbmQ/OiBib29sZWFuO1xuXG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuLyoqXG4gKiDliJfmj4/ov7BcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTVENvbHVtbiB7XG4gIC8qKlxuICAgKiDnlKjkuo7lrprkuYnmlbDmja7mupDkuLvplK7vvIzkvovlpoLvvJpgU1RTdGF0aXN0aWNhbGBcbiAgICovXG4gIGtleT86IHN0cmluZztcbiAgLyoqXG4gICAqIOWIl+agh+mimFxuICAgKi9cbiAgdGl0bGU/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiDliJfmoIfpopggaTE4blxuICAgKi9cbiAgaTE4bj86IHN0cmluZztcbiAgLyoqXG4gICAqIOWIl+aVsOaNruWcqOaVsOaNrumhueS4reWvueW6lOeahCBrZXnvvIzmlK/mjIEgYGEuYi5jYCDnmoTltYzlpZflhpnms5XvvIzkvovlpoLvvJpcbiAgICogLSBgaWRgXG4gICAqIC0gYHByaWNlLm1hcmtldGBcbiAgICogLSBgWyAncHJpY2UnLCAnbWFya2V0JyBdYFxuICAgKi9cbiAgaW5kZXg/OiBzdHJpbmcgfCBzdHJpbmdbXSB8IG51bGw7XG4gIC8qKlxuICAgKiDnsbvlnotcbiAgICogLSBgbm9gIOihjOWPt++8jOiuoeeul+inhOWIme+8mmBpbmRleCArIG5vSW5kZXhgXG4gICAqIC0gYGNoZWNrYm94YCDlpJrpgIlcbiAgICogLSBgcmFkaW9gIOWNlemAiVxuICAgKiAtIGBsaW5rYCDpk77mjqXvvIzliqHlv4XmjIflrpogYGNsaWNrYFxuICAgKiAtIGBiYWRnZWAgW+W+veagh10oaHR0cHM6Ly9uZy5hbnQuZGVzaWduL2NvbXBvbmVudHMvYmFkZ2Uvemgp77yM5Yqh5b+F5oyH5a6aIGBiYWRnZWAg5Y+C5pWw6YWN572u5b695qCH5a+55bqU5YC8XG4gICAqIC0gYHRhZ2AgW+agh+etvl0oaHR0cHM6Ly9uZy5hbnQuZGVzaWduL2NvbXBvbmVudHMvdGFnL3poKe+8jOWKoeW/heaMh+WumiBgdGFnYCDlj4LmlbDphY3nva7moIfnrb7lr7nlupTlgLxcbiAgICogLSBgaW1nYCDlm77niYfkuJTlsYXkuK0o6IulIGBjbGFzc05hbWVgIOWtmOWcqOWImeS8mOWFiClcbiAgICogLSBgbnVtYmVyYCDmlbDlrZfkuJTlsYXlj7Mo6IulIGBjbGFzc05hbWVgIOWtmOWcqOWImeS8mOWFiClcbiAgICogLSBgY3VycmVuY3lgIOi0p+W4geS4lOWxheWPsyjoi6UgYGNsYXNzTmFtZWAg5a2Y5Zyo5YiZ5LyY5YWIKVxuICAgKiAtIGBkYXRlYCDml6XmnJ/moLzlvI/kuJTlsYXkuK0o6IulIGBjbGFzc05hbWVgIOWtmOWcqOWImeS8mOWFiCnvvIzkvb/nlKggYGRhdGVGb3JtYXRgIOiHquWumuS5ieagvOW8j1xuICAgKiAtIGB5bmAg5bCGYGJvb2xlYW5g57G75Z6L5b6956ug5YyWIFtkb2N1bWVudF0oaHR0cHM6Ly9uZy1hbGFpbi5jb20vZG9jcy9kYXRhLXJlbmRlciN5bilcbiAgICovXG4gIHR5cGU/OiAnY2hlY2tib3gnIHwgJ2xpbmsnIHwgJ2JhZGdlJyB8ICd0YWcnIHwgJ3JhZGlvJyB8ICdpbWcnIHwgJ2N1cnJlbmN5JyB8ICdudW1iZXInIHwgJ2RhdGUnIHwgJ3luJyB8ICdubyc7XG4gIC8qKlxuICAgKiDpk77mjqXlm57osIPvvIzoi6Xov5Tlm57kuIDkuKrlrZfnrKbkuLLooajnpLrlr7zoiKpVUkzkvJroh6rliqjop6blj5EgYHJvdXRlci5uYXZpZ2F0ZUJ5VXJsYFxuICAgKi9cbiAgY2xpY2s/OiAocmVjb3JkOiBTVERhdGEsIGluc3RhbmNlPzogU1RDb21wb25lbnQpID0+IGFueTtcbiAgLyoqXG4gICAqIOaMiemSrue7hFxuICAgKi9cbiAgYnV0dG9ucz86IFNUQ29sdW1uQnV0dG9uW107XG4gIC8qKlxuICAgKiDoh6rlrprkuYnmuLLmn5NJRFxuICAgKiBAZXhhbXBsZVxuICAgKiA8bmctdGVtcGxhdGUgc3Qtcm93PVwiY3VzdG9tXCIgbGV0LWl0ZW0gbGV0LWluZGV4PVwiaW5kZXhcIiBsZXQtY29sdW1uPVwiY29sdW1uXCI+XG4gICAqICB7eyBjLnRpdGxlIH19XG4gICAqIDwvbmctdGVtcGxhdGU+XG4gICAqL1xuICByZW5kZXI/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiDmoIfpopjoh6rlrprkuYnmuLLmn5NJRFxuICAgKiBAZXhhbXBsZVxuICAgKiA8bmctdGVtcGxhdGUgc3Qtcm93PVwiY3VzdG9tXCIgdHlwZT1cInRpdGxlXCIgbGV0LWM+XG4gICAqICB7eyBpdGVtIHwganNvbiB9fVxuICAgKiA8L25nLXRlbXBsYXRlPlxuICAgKi9cbiAgcmVuZGVyVGl0bGU/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiDliJflrr3vvIjmlbDlrZflnovooajnpLogYHB4YCDlgLzvvInvvIzkvovlpoLvvJpgMTAwYOOAgWAxMCVg44CBYDEwMHB4YFxuICAgKlxuICAgKiAqKuazqOaEj++8mioqIOiLpeWbuuWumuWIl+W/hemhu+aYr+aVsOWtl1xuICAgKi9cbiAgd2lkdGg/OiBzdHJpbmcgfCBudW1iZXI7XG4gIC8qKlxuICAgKiDmjpLluo/phY3nva7pobnvvIzov5znqIvmlbDmja7phY3nva4qKuS8mOWFiCoq6KeE5YiZ77yaXG4gICAqIC0gYHRydWVgIOihqOekuuWFgeiuuOaOkuW6j1xuICAgKiAtIGBzdHJpbmdgIOihqOekuui/nOeoi+aVsOaNruaOkuW6j+ebuOWvueW6lCBga2V5YCDlgLxcbiAgICovXG4gIHNvcnQ/OiB0cnVlIHwgc3RyaW5nIHwgU1RDb2x1bW5Tb3J0O1xuICAvKipcbiAgICog6L+H5ruk6YWN572u6aG5XG4gICAqL1xuICBmaWx0ZXI/OiBTVENvbHVtbkZpbHRlcjtcbiAgLyoqXG4gICAqIOagvOW8j+WMluWIl+WAvFxuICAgKi9cbiAgZm9ybWF0PzogKGl0ZW06IFNURGF0YSwgY29sOiBTVENvbHVtbikgPT4gc3RyaW5nO1xuICAvKipcbiAgICog6Ieq5a6a5LmJ5YWoL+WPjemAiemAieaLqemhuVxuICAgKi9cbiAgc2VsZWN0aW9ucz86IFNUQ29sdW1uU2VsZWN0aW9uW107XG4gIC8qKlxuICAgKiDliJcgYGNsYXNzYCDlsZ7mgKflgLzvvIjms6jvvJrml6DpobsgYC5gIOeCue+8ie+8jOS+i+Wmgu+8mlxuICAgKiAtIGB0ZXh0LWNlbnRlcmAg5bGF5LitXG4gICAqIC0gYHRleHQtcmlnaHRgIOWxheWPs1xuICAgKiAtIGB0ZXh0LXN1Y2Nlc3NgIOaIkOWKn+iJslxuICAgKiAtIGB0ZXh0LWRhbmdlcmAg5byC5bi46ImyXG4gICAqL1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiDlkIjlubbliJdcbiAgICovXG4gIGNvbFNwYW4/OiBudW1iZXI7XG4gIC8qKlxuICAgKiDmlbDlrZfmoLzlvI/vvIxgdHlwZT1udW1iZXJgIOacieaViFxuICAgKi9cbiAgbnVtYmVyRGlnaXRzPzogc3RyaW5nO1xuICAvKipcbiAgICog5pel5pyf5qC85byP77yMYHR5cGU9ZGF0ZWAg5pyJ5pWI77yM77yI6buY6K6k77yaYFlZWVktTU0tREQgSEg6bW1g77yJXG4gICAqL1xuICBkYXRlRm9ybWF0Pzogc3RyaW5nO1xuICAvKipcbiAgICog5b2TIGB0eXBlPXluYCDmnInmlYhcbiAgICovXG4gIHluPzogU1RDb2x1bW5ZbjtcbiAgLyoqXG4gICAqIOaYr+WQpuWFgeiuuOWvvOWHuu+8jOm7mOiupCBgdHJ1ZWBcbiAgICovXG4gIGV4cG9ydGVkPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIOadg+mZkO+8jOetieWQjCBbQUNMQ2FuVHlwZV0oaHR0cHM6Ly9uZy1hbGFpbi5jb20vYWNsL2dldHRpbmctc3RhcnRlZC8jQUNMQ2FuVHlwZSkg5Y+C5pWw5YC8XG4gICAqL1xuICBhY2w/OiBhbnk7XG4gIC8qKiDlvZPkuI3lrZjlnKjmlbDmja7ml7bku6Xpu5jorqTlgLzmm7/ku6MgKi9cbiAgZGVmYXVsdD86IHN0cmluZztcbiAgLyoqXG4gICAqIOWbuuWumuWJjeWQjuWIl++8jOW9k+aMh+WumuaXtuWKoeW/heaMh+WumiBgd2lkdGhgIOWQpuWImeinhuS4uuaXoOaViO+8jOacieiLpeW5siAqKuazqOaEj++8mioqIOmhue+8mlxuICAgKlxuICAgKiAtIOiLpeWIl+WktOS4juWGheWuueS4jeWvuem9kOaIluWHuueOsOWIl+mHjeWkje+8jOivt+aMh+WumuWIl+eahOWuveW6piBgd2lkdGhgXG4gICAqIC0g5bu66K6u5oyH5a6aIGBzY3JvbGwueGAg5Li65aSn5LqO6KGo5qC85a695bqm55qE5Zu65a6a5YC85oiW55m+5YiG5q+U44CC5rOo5oSP77yM5LiU6Z2e5Zu65a6a5YiX5a695bqm5LmL5ZKM5LiN6KaB6LaF6L+HIGBzY3JvbGwueGBcbiAgICovXG4gIGZpeGVkPzogJ2xlZnQnIHwgJ3JpZ2h0JztcbiAgLyoqXG4gICAqIOW+veagh+mFjee9rumhuVxuICAgKi9cbiAgYmFkZ2U/OiBTVENvbHVtbkJhZGdlIHwgbnVsbDtcbiAgLyoqXG4gICAqIOagh+etvumFjee9rumhuVxuICAgKi9cbiAgdGFnPzogU1RDb2x1bW5UYWcgfCBudWxsO1xuICAvKipcbiAgICog6KGM5Y+357Si5byV77yM6buY6K6k77yaYDFgXG4gICAqIC0g6K6h566X6KeE5YiZ5Li677yaYGluZGV4ICsgbm9JbmRleGBcbiAgICogLSDmlK/mjIHoh6rlrprkuYnmlrnms5VcbiAgICovXG4gIG5vSW5kZXg/OiBudW1iZXIgfCAoKGl0ZW06IFNURGF0YSwgY29sOiBTVENvbHVtbiwgaWR4OiBudW1iZXIpID0+IG51bWJlcik7XG4gIC8qKlxuICAgKiDmnaHku7booajovr7lvI9cbiAgICogLSDku4XotYvlgLwgYGNvbHVtbnNgIOaXtuaJp+ihjOS4gOasoVxuICAgKiAtIOWPr+iwg+eUqCBgcmVzZXRDb2x1bW5zKClgIOWGjeS4gOasoeinpuWPkVxuICAgKi9cbiAgaWlmPzogKGl0ZW06IFNUQ29sdW1uKSA9PiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiDnu5/orqFcbiAgICovXG4gIHN0YXRpc3RpY2FsPzogU1RTdGF0aXN0aWNhbFR5cGUgfCBTVFN0YXRpc3RpY2FsO1xuXG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuZXhwb3J0IHR5cGUgU1RTdGF0aXN0aWNhbFR5cGUgPSAnY291bnQnIHwgJ2Rpc3RpbmN0Q291bnQnIHwgJ3N1bScgfCAnYXZlcmFnZScgfCAnbWF4JyB8ICdtaW4nO1xuXG5leHBvcnQgdHlwZSBTVFN0YXRpc3RpY2FsRm4gPSAodmFsdWVzOiBudW1iZXJbXSwgY29sOiBTVENvbHVtbiwgbGlzdDogU1REYXRhW10sIHJhd0RhdGE/OiBhbnkpID0+IFNUU3RhdGlzdGljYWxSZXN1bHQ7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1RTdGF0aXN0aWNhbCB7XG4gIHR5cGU6IFNUU3RhdGlzdGljYWxUeXBlIHwgU1RTdGF0aXN0aWNhbEZuO1xuICAvKipcbiAgICog5L+d55WZ5bCP5pWw5L2N5pWw77yM6buY6K6k77yaYDJgXG4gICAqL1xuICBkaWdpdHM/OiBudW1iZXI7XG4gIC8qKlxuICAgKiDmmK/lkKbpnIDopoHotKfluIHmoLzlvI/ljJbvvIzpu5jorqTku6XkuIvmg4XlhrXkuLogYHRydWVgXG4gICAqIC0gYHR5cGVgIOS4uiBgU1RTdGF0aXN0aWNhbEZuYOOAgSBgc3VtYOOAgWBhdmVyYWdlYOOAgWBtYXhg44CBYG1pbmBcbiAgICovXG4gIGN1cnJlbmN5PzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTVFN0YXRpc3RpY2FsUmVzdWx0cyB7XG4gIFtrZXk6IHN0cmluZ106IFNUU3RhdGlzdGljYWxSZXN1bHQ7XG4gIFtpbmRleDogbnVtYmVyXTogU1RTdGF0aXN0aWNhbFJlc3VsdDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTVFN0YXRpc3RpY2FsUmVzdWx0IHtcbiAgdmFsdWU6IG51bWJlcjtcbiAgdGV4dD86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTVENvbHVtblNvcnQge1xuICAvKipcbiAgICog5o6S5bqP55qE6buY6K6k5Y+X5o6n5bGe5oCnXG4gICAqL1xuICBkZWZhdWx0PzogJ2FzY2VuZCcgfCAnZGVzY2VuZCc7XG4gIC8qKlxuICAgKiDmnKzlnLDmlbDmja7nmoTmjpLluo/lh73mlbDvvIzkvb/nlKjkuIDkuKrlh73mlbAo5Y+C6ICDIFtBcnJheS5zb3J0XShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9BcnJheS9zb3J0KSDnmoQgY29tcGFyZUZ1bmN0aW9uKVxuICAgKiAtIGBudWxsYCDlv73nlaXmnKzlnLDmjpLluo/vvIzkvYbkv53mjIHmjpLluo/lip/og71cbiAgICovXG4gIGNvbXBhcmU/OiAoKGE6IFNURGF0YSwgYjogU1REYXRhKSA9PiBudW1iZXIpIHwgbnVsbDtcbiAgLyoqXG4gICAqIOi/nOeoi+aVsOaNrueahOaOkuW6j+aXtuWQjuerr+ebuOWvueW6lOeahEtFWe+8jOm7mOiupOS9v+eUqCBgaW5kZXhgIOWxnuaAp1xuICAgKiAtIOiLpSBgbXVsdGlTb3J0OiBmYWxzZWAg5pe277yaYGtleTogJ25hbWUnID0+ID9uYW1lPTEmcGk9MWBcbiAgICogLSDoi6UgYG11bHRpU29ydDogdHJ1ZWAg5YWB6K645aSa5Liq5o6S5bqPIGtleSDlrZjlnKjvvIzmiJbkvb/nlKggYFNUTXVsdGlTb3J0YCDmjIflrprlpJrliJfmjpLluo9rZXnlkIjlubbop4TliJlcbiAgICovXG4gIGtleT86IHN0cmluZyB8IG51bGw7XG4gIC8qKlxuICAgKiDov5znqIvmlbDmja7nmoTmjpLluo/ml7blkI7nq6/nm7jlr7nlupTnmoRWQUxVRVxuICAgKiAtIGB7IGFzY2VuZDogJzAnLCBkZXNjZW5kOiAnMScgfWAg57uT5p6cIGA/bmFtZT0xJnBpPTFgXG4gICAqIC0gYHsgYXNjZW5kOiAnYXNjJywgZGVzY2VuZDogJ2Rlc2MnIH1gIOe7k+aenCBgP25hbWU9ZGVzYyZwaT0xYFxuICAgKi9cbiAgcmVOYW1lPzogeyBhc2NlbmQ/OiBzdHJpbmc7IGRlc2NlbmQ/OiBzdHJpbmcgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTVENvbHVtbkZpbHRlciB7XG4gIC8qKlxuICAgKiDmkJzntKLmlrnlvI9cbiAgICogLSBgZGVmdWFsdGAg6buY6K6k5b2i5byPXG4gICAqIC0gYGtleXdvcmRgIOaWh+acrOahhuW9ouW8j1xuICAgKi9cbiAgdHlwZT86ICdkZWZhdWx0JyB8ICdrZXl3b3JkJztcbiAgLyoqXG4gICAqIOihqOWktOeahOetm+mAieiPnOWNlemhue+8jOiHs+WwkeS4gOmhueaJjeS8mueUn+aViFxuICAgKiAtIOW9kyBgdHlwZT0na2V5d29yZCdgIOaXtuWPr+S4uuepulxuICAgKi9cbiAgbWVudXM/OiBTVENvbHVtbkZpbHRlck1lbnVbXTtcbiAgLyoqXG4gICAqIOacrOWcsOaVsOaNrueahOetm+mAieWHveaVsFxuICAgKi9cbiAgZm4/OiAoKGZpbHRlcjogU1RDb2x1bW5GaWx0ZXJNZW51LCByZWNvcmQ6IFNURGF0YSkgPT4gYm9vbGVhbikgfCBudWxsO1xuICAvKipcbiAgICog5qCH6K+G5pWw5o2u5piv5ZCm5bey6L+H5ruk77yM562b6YCJ5Zu+5qCH5Lya6auY5LquXG4gICAqL1xuICBkZWZhdWx0PzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIOiHquWumuS5iSBmaWx0ZXIg5Zu+5qCHXG4gICAqIC0g5b2TIGB0eXBlPSdkZWZhdWx0J2Ag6buY6K6kIGBmaWx0ZXJgXG4gICAqIC0g5b2TIGB0eXBlPSdrZXl3b3JkJ2Ag6buY6K6kIGBzZWFyY2hgXG4gICAqL1xuICBpY29uPzogc3RyaW5nIHwgU1RJY29uO1xuICAvKipcbiAgICog56Gu6K6k5oyJ6ZKu5paH5pys77yM6buY6K6kIGDnoa7orqRgXG4gICAqL1xuICBjb25maXJtVGV4dD86IHN0cmluZztcbiAgLyoqXG4gICAqIOa4hemZpOaMiemSruaWh+acrO+8jOm7mOiupCBg6YeN572uYFxuICAgKi9cbiAgY2xlYXJUZXh0Pzogc3RyaW5nO1xuICAvKipcbiAgICog5piv5ZCm5aSa6YCJ77yM6buY6K6kIGB0cnVlYFxuICAgKi9cbiAgbXVsdGlwbGU/OiBib29sZWFuO1xuICAvKipcbiAgICog6L+c56iL5pWw5o2u55qE6L+H5ruk5pe25ZCO56uv55u45a+55bqU55qES0VZ77yM6buY6K6k5L2/55SoIGBpbmRleGAg5bGe5oCnXG4gICAqIGBrZXk6ICduYW1lJ2Ag57uT5p6cIGA/bmFtZT0xJnBpPTFgXG4gICAqL1xuICBrZXk/OiBzdHJpbmcgfCBudWxsO1xuICAvKipcbiAgICog6L+c56iL5pWw5o2u55qE6L+H5ruk5pe25ZCO56uv55u45a+55bqU55qEVkFMVUVcbiAgICogLSDpu5jorqTlvZMgYG11bHRpcGxlOiB0cnVlYCDml7bku6Xoi7HmlofpgJflj7fmi7zmjqXnmoTlrZfnrKbkuLJcbiAgICogQHJldHVybiDov5Tlm57kuLogT2JqZWN0IOWvueixoVxuICAgKi9cbiAgcmVOYW1lPzogKGxpc3Q6IFNUQ29sdW1uRmlsdGVyTWVudVtdLCBjb2w6IFNUQ29sdW1uKSA9PiB7fTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTVENvbHVtbkZpbHRlck1lbnUge1xuICAvKipcbiAgICog5paH5pysXG4gICAqIC0g5b2TIGB0eXBlOiAna2V5d29yZCdgIOaXtuihqOekuiBgcGxhY2Vob2xkZXJgXG4gICAqL1xuICB0ZXh0Pzogc3RyaW5nO1xuICAvKipcbiAgICog5YC8XG4gICAqL1xuICB2YWx1ZT86IGFueTtcbiAgLyoqXG4gICAqIOaYr+WQpumAieS4rVxuICAgKi9cbiAgY2hlY2tlZD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDmnYPpmZDvvIznrYnlkIwgW0FDTENhblR5cGVdKGh0dHBzOi8vbmctYWxhaW4uY29tL2FjbC9nZXR0aW5nLXN0YXJ0ZWQvI0FDTENhblR5cGUpIOWPguaVsOWAvFxuICAgKi9cbiAgYWNsPzogYW55O1xuXG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTVENvbHVtblNlbGVjdGlvbiB7XG4gIC8qKlxuICAgKiDpgInmi6npobnmmL7npLrnmoTmloflrZdcbiAgICovXG4gIHRleHQ6IHN0cmluZztcbiAgLyoqXG4gICAqIOmAieaLqemhueeCueWHu+Wbnuiwg++8jOWFgeiuuOWvueWPguaVsCBgZGF0YS5jaGVja2VkYCDov5vooYzmk43kvZxcbiAgICovXG4gIHNlbGVjdDogKGRhdGE6IFNURGF0YVtdKSA9PiB2b2lkO1xuICAvKiog5p2D6ZmQ77yM562J5ZCMIGBjYW4oKWAg5Y+C5pWw5YC8ICovXG4gIGFjbD86IGFueTtcbn1cblxuLyoqIOW9kyBgdHlwZT15bmAg5pyJ5pWIICovXG5leHBvcnQgaW50ZXJmYWNlIFNUQ29sdW1uWW4ge1xuICAvKipcbiAgICog55yf5YC85p2h5Lu277yM77yI6buY6K6k77yaYHRydWVg77yJXG4gICAqL1xuICB0cnV0aD86IGFueTtcbiAgLyoqXG4gICAqIOW+veeroCBgdHJ1ZWAg5pe25paH5pys77yM77yI6buY6K6k77yaYOaYr2DvvIlcbiAgICovXG4gIHllcz86IHN0cmluZztcbiAgLyoqXG4gICAqIOW+veeroCBgZmFsc2VgIOaXtuaWh+acrO+8jO+8iOm7mOiupO+8mmDlkKZg77yJXG4gICAqL1xuICBubz86IHN0cmluZztcbiAgLyoqXG4gICAqIOW+veeroOaYvuekuumjjuagvFxuICAgKiAtIGBmdWxsYCDlm77moIflkozmlofmnKxcbiAgICogLSBgaWNvbmAg5Zu+5qCHXG4gICAqIC0gYHRleHRgIOaWh+acrFxuICAgKi9cbiAgbW9kZT86IFlOTW9kZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTVEljb24ge1xuICAvKiog5Zu+5qCH57G75Z6LICovXG4gIHR5cGU6IHN0cmluZztcbiAgLyoqIOWbvuagh+S4u+mimOmjjuagvO+8jOm7mOiupO+8mmBvdXRsaW5lYCAqL1xuICB0aGVtZT86ICdvdXRsaW5lJyB8ICd0d290b25lJyB8ICdmaWxsJztcbiAgLyoqIOaYr+WQpuacieaXi+i9rOWKqOeUu++8jOm7mOiupO+8mmBmYWxzZWAgKi9cbiAgc3Bpbj86IGJvb2xlYW47XG4gIC8qKiDku4XpgILnlKjlj4zoibLlm77moIfvvIzorr7nva7lj4zoibLlm77moIfnmoTkuLvopoHpopzoibLvvIzku4Xlr7nlvZPliY0gaWNvbiDnlJ/mlYggKi9cbiAgdHdvVG9uZUNvbG9yPzogc3RyaW5nO1xuICAvKiog5oyH5a6a5p2l6IeqIEljb25Gb250IOeahOWbvuagh+exu+WeiyAqL1xuICBpY29uZm9udD86IHN0cmluZztcbn1cblxuLyoqXG4gKiDmjInpkq7phY3nva5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTVENvbHVtbkJ1dHRvbiB7XG4gIC8qKlxuICAgKiDmlofmnKxcbiAgICovXG4gIHRleHQ/OiBzdHJpbmcgfCAoKHJlY29yZDogU1REYXRhLCBidG46IFNUQ29sdW1uQnV0dG9uKSA9PiBzdHJpbmcpO1xuICAvKipcbiAgICog5paH5pysIGkxOG5cbiAgICovXG4gIGkxOG4/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiDlm77moIdcbiAgICovXG4gIGljb24/OiBzdHJpbmcgfCBTVEljb247XG4gIC8qKlxuICAgKiDmoLzlvI/ljJbmlofmnKxcbiAgICogQGRlcHJlY2F0ZWQg5L2/55SoIGB0ZXh0YCDku6Pmm79cbiAgICovXG4gIGZvcm1hdD86IChyZWNvcmQ6IFNURGF0YSwgYnRuOiBTVENvbHVtbkJ1dHRvbikgPT4gc3RyaW5nO1xuICAvKipcbiAgICog5oyJ6ZKu57G75Z6LXG4gICAqIC0gYG5vbmVgIOaXoOS7u+S9leS6kuWKqFxuICAgKiAtIGBkZWxgIOWIoOmZpO+8jOm7mOiupOW8gOWQryBgcG9wOiB0cnVlYFxuICAgKiAtIGBtb2RhbGAg5a+56K+d5qGG77yM6ZyA6KaB5oyH5a6aIGBjb21wb25lbnRgIOaJjeS8mueUn+aViFxuICAgKiAtIGBzdGF0aWNgIOmdmeaAgeWvueivneahhu+8jOmcgOimgeaMh+WumiBgY29tcG9uZW50YCDmiY3kvJrnlJ/mlYhcbiAgICogLSBgZHJhd2VyYCDmir3lsYnvvIzpnIDopoHmjIflrpogYGNvbXBvbmVudGAg5omN5Lya55Sf5pWIXG4gICAqIC0gYGxpbmtgIOmTvuaOpe+8jOW9kyBgY2xpY2tgIOi/lOWbnuWtl+espuS4suaXtuiHquWKqOiwg+eUqCBgbmF2aWdhdGVCeVVybGAg5a+86IiqXG4gICAqL1xuICB0eXBlPzogJ25vbmUnIHwgJ2RlbCcgfCAnbW9kYWwnIHwgJ3N0YXRpYycgfCAnZHJhd2VyJyB8ICdsaW5rJztcbiAgLyoqXG4gICAqIOeCueWHu+Wbnuiwg1xuICAgKiAtIEZ1bmN0aW9uXG4gICAqICAtIGB0eXBlPW1vZGFsYCDlj6rkvJrlnKjlvZPmnInkvKDlm57lgLzml7bmiY3kvJrop6blj5Hlm57osINcbiAgICogLSByZWxvYWTvvJrph43mlrDliLfmlrDlvZPliY3pobVcbiAgICogLSBsb2Fk77ya6YeN5paw5Yqg6L295pWw5o2u77yM5bm26YeN572u6aG156CB5Li677yaYDFgXG4gICAqL1xuICBjbGljaz86ICdyZWxvYWQnIHwgJ2xvYWQnIHwgKChyZWNvcmQ6IFNURGF0YSwgbW9kYWw/OiBhbnksIGluc3RhbmNlPzogU1RDb21wb25lbnQpID0+IGFueSk7XG4gIC8qKlxuICAgKiDmmK/lkKbpnIDopoHmsJTms6Hnoa7orqTmoYZcbiAgICovXG4gIHBvcD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDmsJTms6Hnoa7orqTmoYblhoXlrrnvvIzpu5jorqQgYOehruiupOWIoOmZpOWQl++8n2BcbiAgICovXG4gIHBvcFRpdGxlPzogc3RyaW5nO1xuICAvKipcbiAgICog5a+56K+d5qGG5Y+C5pWwXG4gICAqL1xuICBtb2RhbD86IFNUQ29sdW1uQnV0dG9uTW9kYWw7XG4gIC8qKlxuICAgKiDmir3lsYnlj4LmlbBcbiAgICovXG4gIGRyYXdlcj86IFNUQ29sdW1uQnV0dG9uRHJhd2VyO1xuICAvKipcbiAgICog5LiL5ouJ6I+c5Y2V77yM5b2T5a2Y5Zyo5pe25LulIGBkcm9wZG93bmAg5b2i5byP5riy5p+TXG4gICAqIC0g5Y+q5pSv5oyB5LiA57qnXG4gICAqL1xuICBjaGlsZHJlbj86IFNUQ29sdW1uQnV0dG9uW107XG4gIC8qKlxuICAgKiDmnYPpmZDvvIznrYnlkIwgW0FDTENhblR5cGVdKGh0dHBzOi8vbmctYWxhaW4uY29tL2FjbC9nZXR0aW5nLXN0YXJ0ZWQvI0FDTENhblR5cGUpIOWPguaVsOWAvFxuICAgKi9cbiAgYWNsPzogYW55O1xuICAvKipcbiAgICogQ29uZGl0aW9uYWwgZXhwcmVzc2lvblxuICAgKi9cbiAgaWlmPzogKGl0ZW06IFNURGF0YSwgYnRuOiBTVENvbHVtbkJ1dHRvbiwgY29sdW1uOiBTVENvbHVtbikgPT4gYm9vbGVhbjtcbiAgLyoqXG4gICAqIENvbmRpdGlvbmFsIGV4cHJlc3Npb24gcmVuZGVyaW5nIGJlaGF2aW9yLCBjYW4gYmUgc2V0IHRvIGBoaWRlYCAoZGVmYXVsdCkgb3IgYGRpc2FibGVkYFxuICAgKi9cbiAgaWlmQmVoYXZpb3I/OiBJaWZCZWhhdmlvclR5cGU7XG5cbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgdHlwZSBJaWZCZWhhdmlvclR5cGUgPSAnaGlkZScgfCAnZGlzYWJsZWQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNUQ29sdW1uQnV0dG9uTW9kYWwgZXh0ZW5kcyBNb2RhbEhlbHBlck9wdGlvbnMge1xuICAvKipcbiAgICog5a+56K+d5qGG57uE5Lu25a+56LGh77yM5Yqh5b+F5ZyoIGBlbnRyeUNvbXBvbmVudHNgIOazqOWGjFxuICAgKi9cbiAgY29tcG9uZW50PzogYW55O1xuICAvKipcbiAgICog5a+56K+d5qGG5Y+C5pWwXG4gICAqL1xuICBwYXJhbXM/OiAocmVjb3JkOiBTVERhdGEpID0+IHt9O1xuICAvKipcbiAgICog5a+56K+d5qGG55uu5qCH57uE5Lu255qE5o6l5pS25Y+C5pWw5ZCN77yM6buY6K6k77yaYHJlY29yZGBcbiAgICovXG4gIHBhcmFtc05hbWU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1RDb2x1bW5CdXR0b25Nb2RhbENvbmZpZyB7XG4gIC8qKlxuICAgKiDmjIflrprmqKHmgIHmoYbnm67moIfnu4Tku7bnmoTmjqXmlLblj4LmlbDlkI3vvIzpu5jorqTvvJpgcmVjb3JkYFxuICAgKi9cbiAgcGFyYW1zTmFtZT86IHN0cmluZztcbiAgLyoqIOWkp+Wwj++8m+S+i+Wmgu+8mmxn44CBNjAw77yM6buY6K6k77yaYGxnYCAqL1xuICBzaXplPzogJ3NtJyB8ICdtZCcgfCAnbGcnIHwgJ3hsJyB8ICcnIHwgbnVtYmVyO1xuICAvKiog5a+56K+d5qGGIFtNb2RhbE9wdGlvbnNGb3JTZXJ2aWNlXShodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9jb21wb25lbnRzL21vZGFsL256LW1vZGFsLnR5cGUudHMpIOWPguaVsCAqL1xuICBtb2RhbE9wdGlvbnM/OiBNb2RhbE9wdGlvbnNGb3JTZXJ2aWNlO1xuICAvKiog5piv5ZCm57K+5YeG77yI6buY6K6k77yaYHRydWVg77yJ77yM6Iul6L+U5Zue5YC86Z2e56m65YC877yIYG51bGxg5oiWYHVuZGVmaW5lZGDvvInop4bkuLrmiJDlip/vvIzlkKbliJnop4bkuLrplJnor68gKi9cbiAgZXhhY3Q/OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNUQ29sdW1uQnV0dG9uRHJhd2VyIGV4dGVuZHMgRHJhd2VySGVscGVyT3B0aW9ucyB7XG4gIC8qKlxuICAgKiDmoIfpophcbiAgICovXG4gIHRpdGxlPzogc3RyaW5nO1xuICAvKipcbiAgICog5oq95bGJ57uE5Lu25a+56LGh77yM5Yqh5b+F5ZyoIGBlbnRyeUNvbXBvbmVudHNgIOazqOWGjFxuICAgKi9cbiAgY29tcG9uZW50PzogYW55O1xuICAvKipcbiAgICog5oq95bGJ5Y+C5pWwXG4gICAqL1xuICBwYXJhbXM/OiAocmVjb3JkOiBTVERhdGEpID0+IHt9O1xuICAvKipcbiAgICog5oq95bGJ55uu5qCH57uE5Lu255qE5o6l5pS25Y+C5pWw5ZCN77yM6buY6K6k77yaYHJlY29yZGBcbiAgICovXG4gIHBhcmFtc05hbWU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1RDb2x1bW5CdXR0b25EcmF3ZXJDb25maWcge1xuICAvKipcbiAgICog5oq95bGJ55uu5qCH57uE5Lu255qE5o6l5pS25Y+C5pWw5ZCN77yM6buY6K6k77yaYHJlY29yZGBcbiAgICovXG4gIHBhcmFtc05hbWU/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiDlpKflsI/vvJvkvovlpoLvvJpsZ+OAgTYwMO+8jOm7mOiupO+8mmBtZGBcbiAgICpcbiAgICogfCDnsbvlnosgfCDpu5jorqTlpKflsI8gfFxuICAgKiB8IC0tLSB8IC0tLS0tLSB8XG4gICAqIHwgYHNtYCB8IGAzMDBgIHxcbiAgICogfCBgbWRgIHwgYDYwMGAgfFxuICAgKiB8IGBsZ2AgfCBgOTAwYCB8XG4gICAqIHwgYHhsYCB8IGAxMjAwYCB8XG4gICAqXG4gICAqID4g5Lul5LiK5YC877yM5Y+v6YCa6L+H6KaG55uW55u45bqU55qETEVTU+WPguaVsOiHquihjOiwg+aVtFxuICAgKi9cbiAgc2l6ZT86ICdzbScgfCAnbWQnIHwgJ2xnJyB8ICd4bCcgfCBudW1iZXI7XG4gIC8qKlxuICAgKiDmmK/lkKbljIXlkKvlupXpg6jlt6XlhbfmnaHvvIzpu5jorqTvvJpgdHJ1ZWBcbiAgICovXG4gIGZvb3Rlcj86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDlupXpg6jlt6XlhbfmnaHpq5jluqbvvIzpu5jorqTvvJpgNTVgXG4gICAqL1xuICBmb290ZXJIZWlnaHQ/OiBudW1iZXI7XG4gIC8qKiDmir3lsYkgW056RHJhd2VyT3B0aW9uc10oaHR0cHM6Ly9uZy5hbnQuZGVzaWduL2NvbXBvbmVudHMvZHJhd2VyL3poI256ZHJhd2Vyb3B0aW9ucykg5Y+C5pWwICovXG4gIGRyYXdlck9wdGlvbnM/OiBOekRyYXdlck9wdGlvbnM7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1RSZXFSZU5hbWVUeXBlIHtcbiAgcGk/OiBzdHJpbmc7XG4gIHBzPzogc3RyaW5nO1xuICBza2lwPzogc3RyaW5nO1xuICBsaW1pdD86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTVFJlc1JlTmFtZVR5cGUge1xuICB0b3RhbD86IHN0cmluZyB8IHN0cmluZ1tdO1xuICBsaXN0Pzogc3RyaW5nIHwgc3RyaW5nW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1RFeHBvcnRPcHRpb25zIHtcbiAgX2Q/OiBhbnlbXTtcbiAgX2M/OiBTVENvbHVtbltdO1xuICAvKiog5bel5L2c5rql5ZCNICovXG4gIHNoZWV0bmFtZT86IHN0cmluZztcbiAgLyoqIOaWh+S7tuWQjSAqL1xuICBmaWxlbmFtZT86IHN0cmluZztcbiAgLyoqIHRyaWdnZXJzIHdoZW4gc2F2ZWFzICovXG4gIGNhbGxiYWNrPzogKHdiOiBhbnkpID0+IHZvaWQ7XG59XG5cbi8qKlxuICog5Y2V5o6S5bqP6KeE5YiZXG4gKiAtIOiLpeS4jeaMh+Wumu+8jOWImei/lOWbnu+8mmBjb2x1bW5OYW1lPWFzY2VuZHxkZXNjZW5kYFxuICogLSDoi6XmjIflrprvvIzliJnov5Tlm57vvJpgc29ydD1jb2x1bW5OYW1lLihhc2NlbmR8ZGVzY2VuZClgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU1RTaW5nbGVTb3J0IHtcbiAgLyoqIOivt+axguWPguaVsOWQje+8jOm7mOiupO+8mmBzb3J0YCAqL1xuICBrZXk/OiBzdHJpbmc7XG4gIC8qKiDliJflkI3kuI7nirbmgIHpl7TliIbpmpTnrKbvvIzpu5jorqTvvJpgLmAgKi9cbiAgbmFtZVNlcGFyYXRvcj86IHN0cmluZztcbn1cblxuLyoqXG4gKiDlpJrmjpLluo/nm7jlkIzmjpLluo8ga2V5IOaXtuWQiOW5tuinhOWImVxuICovXG5leHBvcnQgaW50ZXJmYWNlIFNUTXVsdGlTb3J0IHtcbiAgLyoqIOivt+axguWPguaVsOWQje+8jOm7mOiupO+8mmBzb3J0YCAqL1xuICBrZXk/OiBzdHJpbmc7XG4gIC8qKiDkuI3lkIzlsZ7mgKfpl7TliIbpmpTnrKbvvIzpu5jorqTvvJpgLWAgKi9cbiAgc2VwYXJhdG9yPzogc3RyaW5nO1xuICAvKiog5YiX5ZCN5LiO54q25oCB6Ze05YiG6ZqU56ym77yM6buY6K6k77yaYC5gICovXG4gIG5hbWVTZXBhcmF0b3I/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiDmmK/lkKblhajlsYDlpJrmjpLluo/mqKHlvI/vvIzpu5jorqTvvJpgdHJ1ZWBcbiAgICogLSBgdHJ1ZWAg6KGo56S65omA5pyJIGBzdGAg6buY6K6k5Li65aSa5o6S5bqPXG4gICAqIC0gYGZhbHNlYCDooajnpLrpnIDopoHkuLrmr4/kuKogYHN0YCDmt7vliqAgYG11bHRpU29ydGAg5omN5Lya6KeG5Li65aSa5o6S5bqP5qih5byPXG4gICAqL1xuICBnbG9iYWw/OiBib29sZWFuO1xufVxuXG4vKipcbiAqIOW+veagh+S/oeaBr1xuICovXG5leHBvcnQgaW50ZXJmYWNlIFNUQ29sdW1uQmFkZ2Uge1xuICBba2V5OiBudW1iZXJdOiBTVENvbHVtbkJhZGdlVmFsdWU7XG4gIFtrZXk6IHN0cmluZ106IFNUQ29sdW1uQmFkZ2VWYWx1ZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTVENvbHVtbkJhZGdlVmFsdWUge1xuICAvKipcbiAgICog5paH5pysXG4gICAqL1xuICB0ZXh0Pzogc3RyaW5nO1xuICAvKipcbiAgICog5b695qCH6aKc6Imy5YC8XG4gICAqL1xuICBjb2xvcj86ICdzdWNjZXNzJyB8ICdwcm9jZXNzaW5nJyB8ICdkZWZhdWx0JyB8ICdlcnJvcicgfCAnd2FybmluZyc7XG59XG5cbi8qKlxuICog5qCH562+5L+h5oGvXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU1RDb2x1bW5UYWcge1xuICBba2V5OiBudW1iZXJdOiBTVENvbHVtblRhZ1ZhbHVlO1xuICBba2V5OiBzdHJpbmddOiBTVENvbHVtblRhZ1ZhbHVlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNUQ29sdW1uVGFnVmFsdWUge1xuICAvKipcbiAgICog5paH5pysXG4gICAqL1xuICB0ZXh0Pzogc3RyaW5nO1xuICAvKipcbiAgICog6aKc6Imy5YC877yM5pSv5oyB6aKE6K6+5ZKM6Imy5YC8XG4gICAqIC0g6aKE6K6+77yaZ2Vla2JsdWUsYmx1ZSxwdXJwbGUsc3VjY2VzcyxyZWQsdm9sY2FubyxvcmFuZ2UsZ29sZCxsaW1lLGdyZWVuLGN5YW5cbiAgICogLSDoibLlgLzvvJojZjUwLCNmZjBcbiAgICovXG4gIGNvbG9yPzogJ2dlZWtibHVlJyB8ICdibHVlJyB8ICdwdXJwbGUnIHwgJ3N1Y2Nlc3MnIHwgJ3JlZCcgfCAndm9sY2FubycgfCAnb3JhbmdlJyB8ICdnb2xkJyB8ICdsaW1lJyB8ICdncmVlbicgfCAnY3lhbicgfCBzdHJpbmc7XG59XG5cbmV4cG9ydCB0eXBlIFNUQ2hhbmdlVHlwZSA9ICdwaScgfCAncHMnIHwgJ2NoZWNrYm94JyB8ICdyYWRpbycgfCAnc29ydCcgfCAnZmlsdGVyJyB8ICdjbGljaycgfCAnZGJsQ2xpY2snIHwgJ2V4cGFuZCc7XG5cbi8qKlxuICog5Zue6LCD5pWw5o2uXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU1RDaGFuZ2Uge1xuICAvKipcbiAgICog5Zue6LCD57G75Z6LXG4gICAqL1xuICB0eXBlOiBTVENoYW5nZVR5cGU7XG4gIC8qKlxuICAgKiDlvZPliY3pobXnoIFcbiAgICovXG4gIHBpOiBudW1iZXI7XG4gIC8qKlxuICAgKiDmr4/pobXmlbDph49cbiAgICovXG4gIHBzOiBudW1iZXI7XG4gIC8qKlxuICAgKiDmlbDmja7mgLvph49cbiAgICovXG4gIHRvdGFsOiBudW1iZXI7XG4gIC8qKlxuICAgKiBgY2hlY2tib3hgIOWPguaVsFxuICAgKi9cbiAgY2hlY2tib3g/OiBTVERhdGFbXTtcbiAgLyoqXG4gICAqIGByYWRpb2Ag5Y+C5pWwXG4gICAqL1xuICByYWRpbz86IFNURGF0YTtcbiAgLyoqXG4gICAqIOaOkuW6j+WPguaVsFxuICAgKi9cbiAgc29ydD86IFNUQ2hhbmdlU29ydDtcbiAgLyoqXG4gICAqIOi/h+a7pOWPguaVsFxuICAgKi9cbiAgZmlsdGVyPzogU1RDb2x1bW47XG4gIC8qKlxuICAgKiDooYzngrnlh7vmiJblj4zlh7vlj4LmlbBcbiAgICovXG4gIGNsaWNrPzogU1RDaGFuZ2VSb3dDbGljaztcbiAgLyoqXG4gICAqIGBleHBhbmRgIOWPguaVsFxuICAgKi9cbiAgZXhwYW5kPzogU1REYXRhO1xufVxuXG4vKiog6KGM5Y2V5Ye75Y+C5pWwICovXG5leHBvcnQgaW50ZXJmYWNlIFNUQ2hhbmdlU29ydCB7XG4gIHZhbHVlPzogJ2FzY2VuZCcgfCAnZGVzY2VuZCc7XG4gIG1hcD86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG4gIGNvbHVtbj86IFNUQ29sdW1uO1xufVxuXG4vKiog6KGM5Y2V5Ye75Y+C5pWwICovXG5leHBvcnQgaW50ZXJmYWNlIFNUQ2hhbmdlUm93Q2xpY2sge1xuICBlPzogRXZlbnQ7XG4gIGl0ZW0/OiBTVERhdGE7XG4gIGluZGV4PzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNURXJyb3Ige1xuICB0eXBlPzogJ3JlcSc7XG4gIGVycm9yPzogYW55O1xufVxuXG5leHBvcnQgdHlwZSBTVFJvd0NsYXNzTmFtZSA9IChyZWNvcmQ6IFNURGF0YSwgaW5kZXg6IG51bWJlcikgPT4gc3RyaW5nO1xuIl19