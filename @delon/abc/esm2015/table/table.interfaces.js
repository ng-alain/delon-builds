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
     * @type {?}
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
     * 权限，等同 `can()` 参数值
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
     * 表头的筛选菜单项，至少一项才会生效
     * @type {?}
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
     * 自定义 filter 图标，默认 `filter`
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
     * @type {?}
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
     * 权限，等同 `can()` 参数值
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuaW50ZXJmYWNlcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hYmMvdGFibGUvIiwic291cmNlcyI6WyJ0YWJsZS5pbnRlcmZhY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFNQSxpQ0FhQzs7Ozs7Ozs7SUFQQywyQkFBNEI7Ozs7Ozs7SUFNNUIscUNBQXFDOzs7OztBQUd2QywwQ0FJQzs7O0lBSEMsa0NBQVk7O0lBQ1osa0NBQVk7O0lBQ1osdUNBQXFCOzs7OztBQUd2QiwyQkErQkM7Ozs7Ozs7O0lBekJDLHFCQUF1Qjs7Ozs7O0lBS3ZCLHVCQUFhOzs7OztJQUViLHVCQUFnQjs7Ozs7SUFFaEIscUJBQVc7Ozs7O0lBRVgsd0JBQWM7Ozs7OztJQUtkLHVCQUF5Qjs7Ozs7SUFJekIsMEJBQW9COzs7OztJQUlwQix3QkFBaUU7Ozs7O0FBR25FLHNDQWdCQzs7O0lBZkMsZ0NBQVc7O0lBQ1gsbUNBSU07O0lBQ04sa0NBSU07O0lBQ04sbUNBQXlDOztJQUN6QywwQ0FBeUI7O0lBQ3pCLHdDQUF3RDs7SUFDeEQsMkNBQTBCOzs7OztBQUc1QixtQ0FHQzs7Ozs7O0lBREMsOEJBQWdCOzs7OztBQUdsQiwyQkFVQzs7Ozs7OztJQUxDLHVCQUF5Qjs7Ozs7SUFJekIsd0JBQXNEOzs7OztBQUd4RCw0QkF5REM7Ozs7Ozs7O0lBbkRDLHVCQUFnQjs7Ozs7SUFJaEIsNkJBQXNCOzs7OztJQUl0QiwwQkFBcUM7Ozs7O0lBSXJDLDJCQUF3Qzs7Ozs7SUFJeEMsc0JBQWU7Ozs7O0lBSWYsMEJBQW1COzs7OztJQUluQiwyQkFBcUI7Ozs7O0lBSXJCLGlDQUEwQjs7Ozs7Ozs7OztJQVMxQix1QkFBeUI7Ozs7OztJQUt6Qiw0QkFBcUI7Ozs7O0lBSXJCLHVCQUFnQjs7Ozs7SUFJaEIsNkJBQXFCOzs7Ozs7QUFNdkIsNEJBbUJDOzs7Ozs7SUFmQyx5QkFBa0I7Ozs7O0lBSWxCLDBCQUFtQjs7Ozs7SUFJbkIsd0JBQWlCOzs7OztJQUlqQiw0QkFBcUI7Ozs7Ozs7QUFRdkIsOEJBcUpDOzs7Ozs7SUFqSkMsdUJBQWE7Ozs7O0lBSWIseUJBQWM7Ozs7O0lBSWQsd0JBQWM7Ozs7Ozs7O0lBT2QseUJBQWlDOzs7Ozs7Ozs7Ozs7Ozs7O0lBZWpDLHdCQUE4Rzs7Ozs7SUFJOUcseUJBQXdEOzs7OztJQUl4RCwyQkFBMkI7Ozs7Ozs7OztJQVEzQiwwQkFBZ0I7Ozs7Ozs7OztJQVFoQiwrQkFBcUI7Ozs7Ozs7SUFNckIseUJBQXdCOzs7Ozs7O0lBTXhCLHdCQUFvQzs7Ozs7SUFJcEMsMEJBQXdCOzs7OztJQUl4QiwwQkFBaUQ7Ozs7O0lBSWpELDhCQUFpQzs7Ozs7Ozs7O0lBUWpDLDZCQUFtQjs7Ozs7SUFJbkIsMkJBQWlCOzs7OztJQUlqQixnQ0FBc0I7Ozs7O0lBSXRCLDhCQUFvQjs7Ozs7SUFJcEIsc0JBQWdCOzs7OztJQUloQiw0QkFBbUI7Ozs7O0lBRW5CLHVCQUFVOzs7OztJQUVWLDJCQUFpQjs7Ozs7Ozs7SUFPakIseUJBQXlCOzs7OztJQUl6Qix5QkFBNkI7Ozs7O0lBSTdCLHVCQUF5Qjs7Ozs7OztJQU16QiwyQkFBMEU7Ozs7Ozs7SUFNMUUsdUJBQWtDOzs7OztJQUtsQywrQkFBZ0Q7Ozs7OztBQVNsRCxtQ0FXQzs7O0lBVkMsNkJBQTBDOzs7OztJQUkxQywrQkFBZ0I7Ozs7OztJQUtoQixpQ0FBbUI7Ozs7O0FBR3JCLDBDQUdDOzs7O0FBRUQseUNBR0M7OztJQUZDLG9DQUFjOztJQUNkLG1DQUFjOzs7OztBQUdoQixrQ0FzQkM7Ozs7OztJQWxCQywrQkFBK0I7Ozs7OztJQUsvQiwrQkFBb0Q7Ozs7Ozs7SUFNcEQsMkJBQW9COzs7Ozs7O0lBTXBCLDhCQUErQzs7Ozs7QUFHakQsb0NBd0NDOzs7Ozs7SUFwQ0MsK0JBQTRCOzs7OztJQUk1Qiw0QkFBc0U7Ozs7O0lBSXRFLGlDQUFrQjs7Ozs7SUFJbEIsOEJBQWM7Ozs7O0lBSWQscUNBQXFCOzs7OztJQUlyQixtQ0FBbUI7Ozs7O0lBSW5CLGtDQUFtQjs7Ozs7O0lBS25CLDZCQUFvQjs7Ozs7OztJQU1wQixnQ0FBMkQ7Ozs7O0FBRzdELHdDQWlCQzs7Ozs7O0lBYkMsa0NBQWE7Ozs7O0lBSWIsbUNBQVk7Ozs7O0lBSVoscUNBQWtCOzs7OztJQUVsQixpQ0FBVTs7Ozs7O0FBS1osdUNBV0M7Ozs7OztJQVBDLGlDQUFhOzs7OztJQUliLG1DQUFpQzs7Ozs7SUFFakMsZ0NBQVU7Ozs7OztBQUlaLGdDQW9CQzs7Ozs7O0lBaEJDLDJCQUFZOzs7OztJQUlaLHlCQUFhOzs7OztJQUliLHdCQUFZOzs7Ozs7OztJQU9aLDBCQUFjOzs7OztBQUdoQiw0QkFXQzs7Ozs7O0lBVEMsc0JBQWE7Ozs7O0lBRWIsdUJBQXVDOzs7OztJQUV2QyxzQkFBZTs7Ozs7SUFFZiw4QkFBc0I7Ozs7O0lBRXRCLDBCQUFrQjs7Ozs7O0FBTXBCLG9DQXVFQzs7Ozs7O0lBbkVDLDhCQUFrRTs7Ozs7SUFJbEUsOEJBQWM7Ozs7O0lBSWQsOEJBQXVCOzs7Ozs7SUFLdkIsZ0NBQXlEOzs7Ozs7Ozs7OztJQVV6RCw4QkFBK0Q7Ozs7Ozs7OztJQVEvRCwrQkFBMkY7Ozs7O0lBSTNGLDZCQUFjOzs7OztJQUlkLGtDQUFrQjs7Ozs7SUFJbEIsK0JBQTRCOzs7OztJQUk1QixnQ0FBOEI7Ozs7OztJQUs5QixrQ0FBNEI7Ozs7O0lBSTVCLDZCQUFVOzs7OztJQUlWLDZCQUF1RTs7Ozs7SUFJdkUscUNBQThCOzs7Ozs7QUFPaEMseUNBYUM7Ozs7OztJQVRDLHdDQUFnQjs7Ozs7SUFJaEIscUNBQWdDOzs7OztJQUloQyx5Q0FBb0I7Ozs7O0FBR3RCLCtDQVdDOzs7Ozs7SUFQQywrQ0FBb0I7Ozs7O0lBRXBCLHlDQUErQzs7Ozs7SUFFL0MsaURBQXNDOzs7OztJQUV0QywwQ0FBZ0I7Ozs7O0FBR2xCLDBDQWlCQzs7Ozs7O0lBYkMscUNBQWU7Ozs7O0lBSWYseUNBQWdCOzs7OztJQUloQixzQ0FBZ0M7Ozs7O0lBSWhDLDBDQUFvQjs7Ozs7QUFHdEIsZ0RBNEJDOzs7Ozs7SUF4QkMsZ0RBQW9COzs7Ozs7Ozs7Ozs7OztJQWFwQiwwQ0FBMEM7Ozs7O0lBSTFDLDRDQUFpQjs7Ozs7SUFJakIsa0RBQXNCOzs7OztJQUV0QixtREFBZ0M7Ozs7O0FBR2xDLHFDQUtDOzs7SUFKQyw2QkFBWTs7SUFDWiw2QkFBWTs7SUFDWiwrQkFBYzs7SUFDZCxnQ0FBZTs7Ozs7QUFHakIscUNBR0M7OztJQUZDLGdDQUEwQjs7SUFDMUIsK0JBQXlCOzs7OztBQUczQixxQ0FTQzs7O0lBUkMsNkJBQVc7O0lBQ1gsNkJBQWdCOzs7OztJQUVoQixvQ0FBbUI7Ozs7O0lBRW5CLG1DQUFrQjs7Ozs7SUFFbEIsbUNBQTZCOzs7Ozs7OztBQVEvQixrQ0FLQzs7Ozs7O0lBSEMsMkJBQWE7Ozs7O0lBRWIscUNBQXVCOzs7Ozs7QUFNekIsaUNBYUM7Ozs7OztJQVhDLDBCQUFhOzs7OztJQUViLGdDQUFtQjs7Ozs7SUFFbkIsb0NBQXVCOzs7Ozs7O0lBTXZCLDZCQUFpQjs7Ozs7O0FBTW5CLG1DQUdDOzs7O0FBRUQsd0NBU0M7Ozs7OztJQUxDLGtDQUFjOzs7OztJQUlkLG1DQUFtRTs7Ozs7O0FBTXJFLGlDQUdDOzs7O0FBRUQsc0NBV0M7Ozs7OztJQVBDLGdDQUFjOzs7Ozs7O0lBTWQsaUNBQWdJOzs7Ozs7QUFRbEksOEJBeUNDOzs7Ozs7SUFyQ0Msd0JBQW1COzs7OztJQUluQixzQkFBVzs7Ozs7SUFJWCxzQkFBVzs7Ozs7SUFJWCx5QkFBYzs7Ozs7SUFJZCw0QkFBb0I7Ozs7O0lBSXBCLHlCQUFlOzs7OztJQUlmLHdCQUFvQjs7Ozs7SUFJcEIsMEJBQWtCOzs7OztJQUlsQix5QkFBeUI7Ozs7O0lBSXpCLDBCQUFnQjs7Ozs7O0FBSWxCLGtDQUlDOzs7SUFIQyw2QkFBNkI7O0lBQzdCLDJCQUFnQzs7SUFDaEMsOEJBQWtCOzs7Ozs7QUFJcEIsc0NBSUM7OztJQUhDLDZCQUFVOztJQUNWLGdDQUFjOztJQUNkLGlDQUFlOzs7OztBQUdqQiw2QkFHQzs7O0lBRkMsdUJBQWE7O0lBQ2Isd0JBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwSGVhZGVycywgSHR0cFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IERyYXdlckhlbHBlck9wdGlvbnMsIE1vZGFsSGVscGVyT3B0aW9ucywgWU5Nb2RlIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcbmltcG9ydCB7IE56RHJhd2VyT3B0aW9ucyB9IGZyb20gJ25nLXpvcnJvLWFudGQvZHJhd2VyJztcbmltcG9ydCB7IE1vZGFsT3B0aW9uc0ZvclNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL21vZGFsJztcbmltcG9ydCB7IFNUQ29tcG9uZW50IH0gZnJvbSAnLi90YWJsZS5jb21wb25lbnQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNUV2lkdGhNb2RlIHtcbiAgLyoqXG4gICAqIOWuveW6puexu+Wei1xuICAgKiAtIGBkZWZhdWx0YCDpu5jorqTooYzkuLpcbiAgICogLSBgc3RyaWN0YCDkuKXmoLzmqKHlvI/vvIzljbPlvLrliLbmjIkgYHdpZHRoYCDmjIflrprnmoTlrr3luqblkYjnjrDvvIzlubbmoLnmja4gYHN0cmljdEJlaGF2aW9yYCDnsbvlnovlpITnkIZcbiAgICovXG4gIHR5cGU/OiAnc3RyaWN0JyB8ICdkZWZhdWx0JztcbiAgLyoqXG4gICAqIOS4peagvOaooeW8j+eahOWkhOeQhuihjOS4ulxuICAgKiAtIGB3cmFwYCDlvLrliLbmjaLooYxcbiAgICogLSBgdHJ1bmNhdGVgIOaIquefrVxuICAgKi9cbiAgc3RyaWN0QmVoYXZpb3I/OiAnd3JhcCcgfCAndHJ1bmNhdGUnO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNUUmVzZXRDb2x1bW5zT3B0aW9uIHtcbiAgcGk/OiBudW1iZXI7XG4gIHBzPzogbnVtYmVyO1xuICBjb2x1bW5zPzogU1RDb2x1bW5bXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTVFJlcSB7XG4gIC8qKlxuICAgKiDliIbpobXnsbvlnovvvIzpu5jorqTvvJpgcGFnZWBcbiAgICogLSBgcGFnZWAg5L2/55SoIGBwaWDvvIxgcHNgIOe7hOWQiFxuICAgKiAtIGBza2lwYCDkvb/nlKggYHNraXBg77yMYGxpbWl0YCDnu4TlkIhcbiAgICovXG4gIHR5cGU/OiAncGFnZScgfCAnc2tpcCc7XG4gIC8qKlxuICAgKiDpop3lpJbor7fmsYLlj4LmlbDvvIzpu5jorqToh6rliqjpmYTliqAgYHBpYOOAgWBwc2Ag6IezVVJMXG4gICAqIC0gYHsgc3RhdHVzOiAnbmV3JyB9YCA9PiBgdXJsP3BpPTEmcHM9MTAmc3RhdHVzPW5ld2BcbiAgICovXG4gIHBhcmFtcz86IGFueTtcbiAgLyoqIOivt+axguaWueazle+8jOm7mOiupO+8mmBHRVRgICovXG4gIG1ldGhvZD86IHN0cmluZztcbiAgLyoqIOivt+axguS9kyBgYm9keWAgKi9cbiAgYm9keT86IGFueTtcbiAgLyoqIOivt+axguS9kyBgSGVhZGVyYCAqL1xuICBoZWFkZXJzPzogYW55O1xuICAvKipcbiAgICog6YeN5ZG95ZCN5Y+C5pWwIGBwaWDjgIFgcHNg77yM6buY6K6k77yaYHsgcGk6ICdwaScsIHBzOiAncHMnIH1gXG4gICAqIC0gYHsgcGk6ICdQYWdlJyB9YCA9PiBgcGlgIOS8muiiq+abv+aNouaIkCBQYWdlXG4gICAqL1xuICByZU5hbWU/OiBTVFJlcVJlTmFtZVR5cGU7XG4gIC8qKlxuICAgKiDmmK/lkKblsIbor7fmsYLmiYDmnInlj4LmlbDmlbDmja7pg73mlL7lhaUgYGJvZHlgIOW9k+S4re+8iGB1cmxgIOWcsOWdgOacrOi6q+WPguaVsOmZpOWklu+8ie+8jOS7heW9kyBgbWV0aG9kOiAnUE9TVCdgIOaXtuacieaViO+8jOm7mOiupO+8mmBmYWxzZWBcbiAgICovXG4gIGFsbEluQm9keT86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDor7fmsYLliY3mlbDmja7lpITnkIZcbiAgICovXG4gIHByb2Nlc3M/OiAocmVxdWVzdE9wdGlvbnM6IFNUUmVxdWVzdE9wdGlvbnMpID0+IFNUUmVxdWVzdE9wdGlvbnM7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1RSZXF1ZXN0T3B0aW9ucyB7XG4gIGJvZHk/OiBhbnk7XG4gIGhlYWRlcnM/OlxuICAgIHwgSHR0cEhlYWRlcnNcbiAgICB8IHtcbiAgICAgICAgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XG4gICAgICB9O1xuICBwYXJhbXM/OlxuICAgIHwgSHR0cFBhcmFtc1xuICAgIHwge1xuICAgICAgICBbcGFyYW06IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xuICAgICAgfTtcbiAgb2JzZXJ2ZT86ICdib2R5JyB8ICdldmVudHMnIHwgJ3Jlc3BvbnNlJztcbiAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xuICByZXNwb25zZVR5cGU/OiAnYXJyYXlidWZmZXInIHwgJ2Jsb2InIHwgJ2pzb24nIHwgJ3RleHQnO1xuICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNUTG9hZE9wdGlvbnMge1xuICAvKiog5piv5ZCm5ZCI5bm277yM6buY6K6k77yaYGZhbHNlYCAqL1xuICBtZXJnZT86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1RSZXMge1xuICAvKipcbiAgICog6YeN5ZG95ZCN6L+U5Zue5Y+C5pWwIGB0b3RhbGDjgIFgbGlzdGBcbiAgICogLSBgeyB0b3RhbDogJ1RvdGFsJyB9YCA9PiBUb3RhbCDkvJrooqvlvZPkvZwgYHRvdGFsYFxuICAgKi9cbiAgcmVOYW1lPzogU1RSZXNSZU5hbWVUeXBlO1xuICAvKipcbiAgICog5pWw5o2u6aKE5aSE55CGXG4gICAqL1xuICBwcm9jZXNzPzogKGRhdGE6IFNURGF0YVtdLCByYXdEYXRhPzogYW55KSA9PiBTVERhdGFbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTVFBhZ2Uge1xuICAvKipcbiAgICog5YmN56uv5YiG6aG177yM5b2TIGBkYXRhYCDkuLpgYW55W11gIOaIliBgT2JzZXJ2YWJsZTxhbnlbXT5gIOacieaViO+8jOm7mOiupO+8mmB0cnVlYFxuICAgKiAtIGB0cnVlYCDnlLEgYHN0YCDmoLnmja4gYGRhdGFgIOmVv+W6puWPl+aOp+WIhumhte+8jOWMheaLrO+8muaOkuW6j+OAgei/h+a7pOetiVxuICAgKiAtIGBmYWxzZWAg55Sx55So5oi36YCa6L+HIGB0b3RhbGAg5ZKMIGBkYXRhYCDlj4LmlbDlj5fmjqfliIbpobXvvIzlubbnu7TmiqQgYChjaGFuZ2UpYCDlvZPliIbpobXlj5jmm7Tml7bph43mlrDliqDovb3mlbDmja5cbiAgICovXG4gIGZyb250PzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIOWQjuerr+WIhumhteaYr+WQpumHh+eUqGAwYOWfuue0ouW8le+8jOWPquWcqGBkYXRhYOexu+Wei+S4umBzdHJpbmdg5pe25pyJ5pWI77yM6buY6K6k77yaYGZhbHNlYFxuICAgKi9cbiAgemVyb0luZGV4ZWQ/OiBib29sZWFuO1xuICAvKipcbiAgICog5oyH5a6a5YiG6aG15pi+56S655qE5L2N572u77yM6buY6K6k77yaYGJvdHRvbWBcbiAgICovXG4gIHBvc2l0aW9uPzogJ3RvcCcgfCAnYm90dG9tJyB8ICdib3RoJztcbiAgLyoqXG4gICAqIOaMh+WumuWIhumhteWIhumhteaWueWQke+8jOm7mOiupO+8mmByaWdodGBcbiAgICovXG4gIHBsYWNlbWVudD86ICdsZWZ0JyB8ICdjZW50ZXInIHwgJ3JpZ2h0JztcbiAgLyoqXG4gICAqIOaYr+WQpuaYvuekuuWIhumhteWZqO+8jOm7mOiupO+8mmB0cnVlYFxuICAgKi9cbiAgc2hvdz86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDmmK/lkKbmmL7npLrliIbpobXlmajkuK3mlLnlj5jpobXmlbDvvIzpu5jorqTvvJpgZmFsc2VgXG4gICAqL1xuICBzaG93U2l6ZT86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDliIbpobXlmajkuK3mr4/pobXmmL7npLrmnaHnm67mlbDkuIvmi4nmoYblgLzvvIzpu5jorqTvvJpgWzEwLCAyMCwgMzAsIDQwLCA1MF1gXG4gICAqL1xuICBwYWdlU2l6ZXM/OiBudW1iZXJbXTtcbiAgLyoqXG4gICAqIOaYr+WQpuaYvuekuuWIhumhteWZqOS4reW/q+mAn+i3s+i9rO+8jOm7mOiupO+8mmBmYWxzZWBcbiAgICovXG4gIHNob3dRdWlja0p1bXBlcj86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDmmK/lkKbmmL7npLrmgLvmlbDmja7ph49cbiAgICogLSBgYm9vbGVhbmAg57G75Z6L5pi+56S65LiO5ZCm77yM6buY6K6k5qih5p2/77yaYOWFsSB7e3RvdGFsfX0g5p2hYFxuICAgKiAtIGBzdHJpbmdgIOiHquWumuS5ieaooeadv++8jOaooeadv+WPmOmHj++8mlxuICAgKiAgLSBge3t0b3RhbH19YCDooajnpLrmlbDmja7mgLvph49cbiAgICogIC0gYHt7cmFuZ2VbMF19fWAg6KGo56S65b2T5YmN6aG15byA5aeL5pWw6YeP5YC8XG4gICAqICAtIGB7e3JhbmdlWzFdfX1gIOihqOekuuW9k+WJjemhtee7k+adn+aVsOmHj+WAvFxuICAgKi9cbiAgdG90YWw/OiBzdHJpbmcgfCBib29sZWFuO1xuICAvKipcbiAgICog5pWw5o2u5Y+Y5pu05ZCO5piv5ZCm5L+d55WZ5Zyo5pWw5o2u5Y+Y5pu05YmN55qE6aG156CB77yM6buY6K6k77yaYHRydWVgXG4gICAqIEBkZXByZWNhdGVkXG4gICAqL1xuICBpbmRleFJlc2V0PzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIOWIh+aNouWIhumhteaXtui/lOWbnumhtumDqO+8jOm7mOiupO+8mmB0cnVlYFxuICAgKi9cbiAgdG9Ub3A/OiBib29sZWFuO1xuICAvKipcbiAgICog6L+U5Zue6aG26YOo5YGP56e75YC877yM6buY6K6k77yaYDEwMGBcbiAgICovXG4gIHRvVG9wT2Zmc2V0PzogbnVtYmVyO1xufVxuXG4vKipcbiAqIOaVsOaNrua6kFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFNURGF0YSB7XG4gIC8qKlxuICAgKiDpgInmi6nmoYbmiJbljZXpgInmoYbnirbmgIHlgLxcbiAgICovXG4gIGNoZWNrZWQ/OiBib29sZWFuO1xuICAvKipcbiAgICog6YCJ5oup5qGG5oiW5Y2V6YCJ5qGGIGBkaXNhYmxlZGAg5YC8XG4gICAqL1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDmmK/lkKblsZXlvIDnirbmgIFcbiAgICovXG4gIGV4cGFuZD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDmmK/lkKbmmL7npLrlsZXlvIDmjInpkq5cbiAgICovXG4gIHNob3dFeHBhbmQ/OiBib29sZWFuO1xuXG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuLyoqXG4gKiDliJfmj4/ov7BcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTVENvbHVtbiB7XG4gIC8qKlxuICAgKiDnlKjkuo7lrprkuYnmlbDmja7mupDkuLvplK7vvIzkvovlpoLvvJpgU1RTdGF0aXN0aWNhbGBcbiAgICovXG4gIGtleT86IHN0cmluZztcbiAgLyoqXG4gICAqIOWIl+agh+mimFxuICAgKi9cbiAgdGl0bGU6IHN0cmluZztcbiAgLyoqXG4gICAqIOWIl+agh+mimCBpMThuXG4gICAqL1xuICBpMThuPzogc3RyaW5nO1xuICAvKipcbiAgICog5YiX5pWw5o2u5Zyo5pWw5o2u6aG55Lit5a+55bqU55qEIGtlee+8jOaUr+aMgSBgYS5iLmNgIOeahOW1jOWll+WGmeazle+8jOS+i+Wmgu+8mlxuICAgKiAtIGBpZGBcbiAgICogLSBgcHJpY2UubWFya2V0YFxuICAgKiAtIGBbICdwcmljZScsICdtYXJrZXQnIF1gXG4gICAqL1xuICBpbmRleD86IHN0cmluZyB8IHN0cmluZ1tdIHwgbnVsbDtcbiAgLyoqXG4gICAqIOexu+Wei1xuICAgKiAtIGBub2Ag6KGM5Y+377yM6K6h566X6KeE5YiZ77yaYGluZGV4ICsgbm9JbmRleGBcbiAgICogLSBgY2hlY2tib3hgIOWkmumAiVxuICAgKiAtIGByYWRpb2Ag5Y2V6YCJXG4gICAqIC0gYGxpbmtgIOmTvuaOpe+8jOWKoeW/heaMh+WumiBgY2xpY2tgXG4gICAqIC0gYGJhZGdlYCBb5b695qCHXShodHRwczovL25nLmFudC5kZXNpZ24vY29tcG9uZW50cy9iYWRnZS96aCnvvIzliqHlv4XmjIflrpogYGJhZGdlYCDlj4LmlbDphY3nva7lvr3moIflr7nlupTlgLxcbiAgICogLSBgdGFnYCBb5qCH562+XShodHRwczovL25nLmFudC5kZXNpZ24vY29tcG9uZW50cy90YWcvemgp77yM5Yqh5b+F5oyH5a6aIGB0YWdgIOWPguaVsOmFjee9ruagh+etvuWvueW6lOWAvFxuICAgKiAtIGBpbWdgIOWbvueJh+S4lOWxheS4rSjoi6UgYGNsYXNzTmFtZWAg5a2Y5Zyo5YiZ5LyY5YWIKVxuICAgKiAtIGBudW1iZXJgIOaVsOWtl+S4lOWxheWPsyjoi6UgYGNsYXNzTmFtZWAg5a2Y5Zyo5YiZ5LyY5YWIKVxuICAgKiAtIGBjdXJyZW5jeWAg6LSn5biB5LiU5bGF5Y+zKOiLpSBgY2xhc3NOYW1lYCDlrZjlnKjliJnkvJjlhYgpXG4gICAqIC0gYGRhdGVgIOaXpeacn+agvOW8j+S4lOWxheS4rSjoi6UgYGNsYXNzTmFtZWAg5a2Y5Zyo5YiZ5LyY5YWIKe+8jOS9v+eUqCBgZGF0ZUZvcm1hdGAg6Ieq5a6a5LmJ5qC85byPXG4gICAqIC0gYHluYCDlsIZgYm9vbGVhbmDnsbvlnovlvr3nq6DljJYgW2RvY3VtZW50XShodHRwczovL25nLWFsYWluLmNvbS9kb2NzL2RhdGEtcmVuZGVyI3luKVxuICAgKi9cbiAgdHlwZT86ICdjaGVja2JveCcgfCAnbGluaycgfCAnYmFkZ2UnIHwgJ3RhZycgfCAncmFkaW8nIHwgJ2ltZycgfCAnY3VycmVuY3knIHwgJ251bWJlcicgfCAnZGF0ZScgfCAneW4nIHwgJ25vJztcbiAgLyoqXG4gICAqIOmTvuaOpeWbnuiwg++8jOiLpei/lOWbnuS4gOS4quWtl+espuS4suihqOekuuWvvOiIqlVSTOS8muiHquWKqOinpuWPkSBgcm91dGVyLm5hdmlnYXRlQnlVcmxgXG4gICAqL1xuICBjbGljaz86IChyZWNvcmQ6IFNURGF0YSwgaW5zdGFuY2U/OiBTVENvbXBvbmVudCkgPT4gYW55O1xuICAvKipcbiAgICog5oyJ6ZKu57uEXG4gICAqL1xuICBidXR0b25zPzogU1RDb2x1bW5CdXR0b25bXTtcbiAgLyoqXG4gICAqIOiHquWumuS5iea4suafk0lEXG4gICAqIEBleGFtcGxlXG4gICAqIDxuZy10ZW1wbGF0ZSBzdC1yb3c9XCJjdXN0b21cIiBsZXQtaXRlbSBsZXQtaW5kZXg9XCJpbmRleFwiIGxldC1jb2x1bW49XCJjb2x1bW5cIj5cbiAgICogIHt7IGMudGl0bGUgfX1cbiAgICogPC9uZy10ZW1wbGF0ZT5cbiAgICovXG4gIHJlbmRlcj86IHN0cmluZztcbiAgLyoqXG4gICAqIOagh+mimOiHquWumuS5iea4suafk0lEXG4gICAqIEBleGFtcGxlXG4gICAqIDxuZy10ZW1wbGF0ZSBzdC1yb3c9XCJjdXN0b21cIiB0eXBlPVwidGl0bGVcIiBsZXQtYz5cbiAgICogIHt7IGl0ZW0gfCBqc29uIH19XG4gICAqIDwvbmctdGVtcGxhdGU+XG4gICAqL1xuICByZW5kZXJUaXRsZT86IHN0cmluZztcbiAgLyoqXG4gICAqIOWIl+Wuve+8iOaVsOWtl+Wei+ihqOekuiBgcHhgIOWAvO+8ie+8jOS+i+Wmgu+8mmAxMDBg44CBYDEwJWDjgIFgMTAwcHhgXG4gICAqXG4gICAqICoq5rOo5oSP77yaKiog6Iul5Zu65a6a5YiX5b+F6aG75piv5pWw5a2XXG4gICAqL1xuICB3aWR0aD86IHN0cmluZyB8IG51bWJlcjtcbiAgLyoqXG4gICAqIOaOkuW6j+mFjee9rumhue+8jOi/nOeoi+aVsOaNrumFjee9rioq5LyY5YWIKirop4TliJnvvJpcbiAgICogLSBgdHJ1ZWAg6KGo56S65YWB6K645o6S5bqPXG4gICAqIC0gYHN0cmluZ2Ag6KGo56S66L+c56iL5pWw5o2u5o6S5bqP55u45a+55bqUIGBrZXlgIOWAvFxuICAgKi9cbiAgc29ydD86IHRydWUgfCBzdHJpbmcgfCBTVENvbHVtblNvcnQ7XG4gIC8qKlxuICAgKiDov4fmu6TphY3nva7poblcbiAgICovXG4gIGZpbHRlcj86IFNUQ29sdW1uRmlsdGVyO1xuICAvKipcbiAgICog5qC85byP5YyW5YiX5YC8XG4gICAqL1xuICBmb3JtYXQ/OiAoaXRlbTogU1REYXRhLCBjb2w6IFNUQ29sdW1uKSA9PiBzdHJpbmc7XG4gIC8qKlxuICAgKiDoh6rlrprkuYnlhagv5Y+N6YCJ6YCJ5oup6aG5XG4gICAqL1xuICBzZWxlY3Rpb25zPzogU1RDb2x1bW5TZWxlY3Rpb25bXTtcbiAgLyoqXG4gICAqIOWIlyBgY2xhc3NgIOWxnuaAp+WAvO+8iOazqO+8muaXoOmhuyBgLmAg54K577yJ77yM5L6L5aaC77yaXG4gICAqIC0gYHRleHQtY2VudGVyYCDlsYXkuK1cbiAgICogLSBgdGV4dC1yaWdodGAg5bGF5Y+zXG4gICAqIC0gYHRleHQtc3VjY2Vzc2Ag5oiQ5Yqf6ImyXG4gICAqIC0gYHRleHQtZGFuZ2VyYCDlvILluLjoibJcbiAgICovXG4gIGNsYXNzTmFtZT86IHN0cmluZztcbiAgLyoqXG4gICAqIOWQiOW5tuWIl1xuICAgKi9cbiAgY29sU3Bhbj86IG51bWJlcjtcbiAgLyoqXG4gICAqIOaVsOWtl+agvOW8j++8jGB0eXBlPW51bWJlcmAg5pyJ5pWIXG4gICAqL1xuICBudW1iZXJEaWdpdHM/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiDml6XmnJ/moLzlvI/vvIxgdHlwZT1kYXRlYCDmnInmlYjvvIzvvIjpu5jorqTvvJpgWVlZWS1NTS1ERCBISDptbWDvvIlcbiAgICovXG4gIGRhdGVGb3JtYXQ/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiDlvZMgYHR5cGU9eW5gIOacieaViFxuICAgKi9cbiAgeW4/OiBTVENvbHVtblluO1xuICAvKipcbiAgICog5piv5ZCm5YWB6K645a+85Ye677yM6buY6K6kIGB0cnVlYFxuICAgKi9cbiAgZXhwb3J0ZWQ/OiBib29sZWFuO1xuICAvKiog5p2D6ZmQ77yM562J5ZCMIGBjYW4oKWAg5Y+C5pWw5YC8ICovXG4gIGFjbD86IGFueTtcbiAgLyoqIOW9k+S4jeWtmOWcqOaVsOaNruaXtuS7pem7mOiupOWAvOabv+S7oyAqL1xuICBkZWZhdWx0Pzogc3RyaW5nO1xuICAvKipcbiAgICog5Zu65a6a5YmN5ZCO5YiX77yM5b2T5oyH5a6a5pe25Yqh5b+F5oyH5a6aIGB3aWR0aGAg5ZCm5YiZ6KeG5Li65peg5pWI77yM5pyJ6Iul5bmyICoq5rOo5oSP77yaKiog6aG577yaXG4gICAqXG4gICAqIC0g6Iul5YiX5aS05LiO5YaF5a655LiN5a+56b2Q5oiW5Ye6546w5YiX6YeN5aSN77yM6K+35oyH5a6a5YiX55qE5a695bqmIGB3aWR0aGBcbiAgICogLSDlu7rorq7mjIflrpogYHNjcm9sbC54YCDkuLrlpKfkuo7ooajmoLzlrr3luqbnmoTlm7rlrprlgLzmiJbnmb7liIbmr5TjgILms6jmhI/vvIzkuJTpnZ7lm7rlrprliJflrr3luqbkuYvlkozkuI3opoHotoXov4cgYHNjcm9sbC54YFxuICAgKi9cbiAgZml4ZWQ/OiAnbGVmdCcgfCAncmlnaHQnO1xuICAvKipcbiAgICog5b695qCH6YWN572u6aG5XG4gICAqL1xuICBiYWRnZT86IFNUQ29sdW1uQmFkZ2UgfCBudWxsO1xuICAvKipcbiAgICog5qCH562+6YWN572u6aG5XG4gICAqL1xuICB0YWc/OiBTVENvbHVtblRhZyB8IG51bGw7XG4gIC8qKlxuICAgKiDooYzlj7fntKLlvJXvvIzpu5jorqTvvJpgMWBcbiAgICogLSDorqHnrpfop4TliJnkuLrvvJpgaW5kZXggKyBub0luZGV4YFxuICAgKiAtIOaUr+aMgeiHquWumuS5ieaWueazlVxuICAgKi9cbiAgbm9JbmRleD86IG51bWJlciB8ICgoaXRlbTogU1REYXRhLCBjb2w6IFNUQ29sdW1uLCBpZHg6IG51bWJlcikgPT4gbnVtYmVyKTtcbiAgLyoqXG4gICAqIOadoeS7tuihqOi+vuW8j1xuICAgKiAtIOS7hei1i+WAvCBgY29sdW1uc2Ag5pe25omn6KGM5LiA5qyhXG4gICAqIC0g5Y+v6LCD55SoIGByZXNldENvbHVtbnMoKWAg5YaN5LiA5qyh6Kem5Y+RXG4gICAqL1xuICBpaWY/OiAoaXRlbTogU1RDb2x1bW4pID0+IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIOe7n+iuoVxuICAgKi9cbiAgc3RhdGlzdGljYWw/OiBTVFN0YXRpc3RpY2FsVHlwZSB8IFNUU3RhdGlzdGljYWw7XG5cbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgdHlwZSBTVFN0YXRpc3RpY2FsVHlwZSA9ICdjb3VudCcgfCAnZGlzdGluY3RDb3VudCcgfCAnc3VtJyB8ICdhdmVyYWdlJyB8ICdtYXgnIHwgJ21pbic7XG5cbmV4cG9ydCB0eXBlIFNUU3RhdGlzdGljYWxGbiA9ICh2YWx1ZXM6IG51bWJlcltdLCBjb2w6IFNUQ29sdW1uLCBsaXN0OiBTVERhdGFbXSwgcmF3RGF0YT86IGFueSkgPT4gU1RTdGF0aXN0aWNhbFJlc3VsdDtcblxuZXhwb3J0IGludGVyZmFjZSBTVFN0YXRpc3RpY2FsIHtcbiAgdHlwZTogU1RTdGF0aXN0aWNhbFR5cGUgfCBTVFN0YXRpc3RpY2FsRm47XG4gIC8qKlxuICAgKiDkv53nlZnlsI/mlbDkvY3mlbDvvIzpu5jorqTvvJpgMmBcbiAgICovXG4gIGRpZ2l0cz86IG51bWJlcjtcbiAgLyoqXG4gICAqIOaYr+WQpumcgOimgei0p+W4geagvOW8j+WMlu+8jOm7mOiupOS7peS4i+aDheWGteS4uiBgdHJ1ZWBcbiAgICogLSBgdHlwZWAg5Li6IGBTVFN0YXRpc3RpY2FsRm5g44CBIGBzdW1g44CBYGF2ZXJhZ2Vg44CBYG1heGDjgIFgbWluYFxuICAgKi9cbiAgY3VycmVuY3k/OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNUU3RhdGlzdGljYWxSZXN1bHRzIHtcbiAgW2tleTogc3RyaW5nXTogU1RTdGF0aXN0aWNhbFJlc3VsdDtcbiAgW2luZGV4OiBudW1iZXJdOiBTVFN0YXRpc3RpY2FsUmVzdWx0O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNUU3RhdGlzdGljYWxSZXN1bHQge1xuICB2YWx1ZTogbnVtYmVyO1xuICB0ZXh0Pzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNUQ29sdW1uU29ydCB7XG4gIC8qKlxuICAgKiDmjpLluo/nmoTpu5jorqTlj5fmjqflsZ7mgKdcbiAgICovXG4gIGRlZmF1bHQ/OiAnYXNjZW5kJyB8ICdkZXNjZW5kJztcbiAgLyoqXG4gICAqIOacrOWcsOaVsOaNrueahOaOkuW6j+WHveaVsO+8jOS9v+eUqOS4gOS4quWHveaVsCjlj4LogIMgW0FycmF5LnNvcnRdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0FycmF5L3NvcnQpIOeahCBjb21wYXJlRnVuY3Rpb24pXG4gICAqIC0gYG51bGxgIOW/veeVpeacrOWcsOaOkuW6j++8jOS9huS/neaMgeaOkuW6j+WKn+iDvVxuICAgKi9cbiAgY29tcGFyZT86ICgoYTogU1REYXRhLCBiOiBTVERhdGEpID0+IG51bWJlcikgfCBudWxsO1xuICAvKipcbiAgICog6L+c56iL5pWw5o2u55qE5o6S5bqP5pe25ZCO56uv55u45a+55bqU55qES0VZ77yM6buY6K6k5L2/55SoIGBpbmRleGAg5bGe5oCnXG4gICAqIC0g6IulIGBtdWx0aVNvcnQ6IGZhbHNlYCDml7bvvJpga2V5OiAnbmFtZScgPT4gP25hbWU9MSZwaT0xYFxuICAgKiAtIOiLpSBgbXVsdGlTb3J0OiB0cnVlYCDlhYHorrjlpJrkuKrmjpLluo8ga2V5IOWtmOWcqO+8jOaIluS9v+eUqCBgU1RNdWx0aVNvcnRgIOaMh+WumuWkmuWIl+aOkuW6j2tleeWQiOW5tuinhOWImVxuICAgKi9cbiAga2V5Pzogc3RyaW5nIHwgbnVsbDtcbiAgLyoqXG4gICAqIOi/nOeoi+aVsOaNrueahOaOkuW6j+aXtuWQjuerr+ebuOWvueW6lOeahFZBTFVFXG4gICAqIC0gYHsgYXNjZW5kOiAnMCcsIGRlc2NlbmQ6ICcxJyB9YCDnu5PmnpwgYD9uYW1lPTEmcGk9MWBcbiAgICogLSBgeyBhc2NlbmQ6ICdhc2MnLCBkZXNjZW5kOiAnZGVzYycgfWAg57uT5p6cIGA/bmFtZT1kZXNjJnBpPTFgXG4gICAqL1xuICByZU5hbWU/OiB7IGFzY2VuZD86IHN0cmluZzsgZGVzY2VuZD86IHN0cmluZyB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNUQ29sdW1uRmlsdGVyIHtcbiAgLyoqXG4gICAqIOihqOWktOeahOetm+mAieiPnOWNlemhue+8jOiHs+WwkeS4gOmhueaJjeS8mueUn+aViFxuICAgKi9cbiAgbWVudXM6IFNUQ29sdW1uRmlsdGVyTWVudVtdO1xuICAvKipcbiAgICog5pys5Zyw5pWw5o2u55qE562b6YCJ5Ye95pWwXG4gICAqL1xuICBmbj86ICgoZmlsdGVyOiBTVENvbHVtbkZpbHRlck1lbnUsIHJlY29yZDogU1REYXRhKSA9PiBib29sZWFuKSB8IG51bGw7XG4gIC8qKlxuICAgKiDmoIfor4bmlbDmja7mmK/lkKblt7Lov4fmu6TvvIznrZvpgInlm77moIfkvJrpq5jkuq5cbiAgICovXG4gIGRlZmF1bHQ/OiBib29sZWFuO1xuICAvKipcbiAgICog6Ieq5a6a5LmJIGZpbHRlciDlm77moIfvvIzpu5jorqQgYGZpbHRlcmBcbiAgICovXG4gIGljb24/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiDnoa7orqTmjInpkq7mlofmnKzvvIzpu5jorqQgYOehruiupGBcbiAgICovXG4gIGNvbmZpcm1UZXh0Pzogc3RyaW5nO1xuICAvKipcbiAgICog5riF6Zmk5oyJ6ZKu5paH5pys77yM6buY6K6kIGDph43nva5gXG4gICAqL1xuICBjbGVhclRleHQ/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiDmmK/lkKblpJrpgInvvIzpu5jorqQgYHRydWVgXG4gICAqL1xuICBtdWx0aXBsZT86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDov5znqIvmlbDmja7nmoTov4fmu6Tml7blkI7nq6/nm7jlr7nlupTnmoRLRVnvvIzpu5jorqTkvb/nlKggYGluZGV4YCDlsZ7mgKdcbiAgICogYGtleTogJ25hbWUnYCDnu5PmnpwgYD9uYW1lPTEmcGk9MWBcbiAgICovXG4gIGtleT86IHN0cmluZyB8IG51bGw7XG4gIC8qKlxuICAgKiDov5znqIvmlbDmja7nmoTov4fmu6Tml7blkI7nq6/nm7jlr7nlupTnmoRWQUxVRVxuICAgKiAtIOm7mOiupOW9kyBgbXVsdGlwbGU6IHRydWVgIOaXtuS7peiLseaWh+mAl+WPt+aLvOaOpeeahOWtl+espuS4slxuICAgKiBAcmV0dXJuIOi/lOWbnuS4uiBPYmplY3Qg5a+56LGhXG4gICAqL1xuICByZU5hbWU/OiAobGlzdDogU1RDb2x1bW5GaWx0ZXJNZW51W10sIGNvbDogU1RDb2x1bW4pID0+IHt9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNUQ29sdW1uRmlsdGVyTWVudSB7XG4gIC8qKlxuICAgKiDmlofmnKxcbiAgICovXG4gIHRleHQ6IHN0cmluZztcbiAgLyoqXG4gICAqIOWAvFxuICAgKi9cbiAgdmFsdWU/OiBhbnk7XG4gIC8qKlxuICAgKiDmmK/lkKbpgInkuK1cbiAgICovXG4gIGNoZWNrZWQ/OiBib29sZWFuO1xuICAvKiog5p2D6ZmQ77yM562J5ZCMIGBjYW4oKWAg5Y+C5pWw5YC8ICovXG4gIGFjbD86IGFueTtcblxuICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1RDb2x1bW5TZWxlY3Rpb24ge1xuICAvKipcbiAgICog6YCJ5oup6aG55pi+56S655qE5paH5a2XXG4gICAqL1xuICB0ZXh0OiBzdHJpbmc7XG4gIC8qKlxuICAgKiDpgInmi6npobnngrnlh7vlm57osIPvvIzlhYHorrjlr7nlj4LmlbAgYGRhdGEuY2hlY2tlZGAg6L+b6KGM5pON5L2cXG4gICAqL1xuICBzZWxlY3Q6IChkYXRhOiBTVERhdGFbXSkgPT4gdm9pZDtcbiAgLyoqIOadg+mZkO+8jOetieWQjCBgY2FuKClgIOWPguaVsOWAvCAqL1xuICBhY2w/OiBhbnk7XG59XG5cbi8qKiDlvZMgYHR5cGU9eW5gIOacieaViCAqL1xuZXhwb3J0IGludGVyZmFjZSBTVENvbHVtblluIHtcbiAgLyoqXG4gICAqIOecn+WAvOadoeS7tu+8jO+8iOm7mOiupO+8mmB0cnVlYO+8iVxuICAgKi9cbiAgdHJ1dGg/OiBhbnk7XG4gIC8qKlxuICAgKiDlvr3nq6AgYHRydWVgIOaXtuaWh+acrO+8jO+8iOm7mOiupO+8mmDmmK9g77yJXG4gICAqL1xuICB5ZXM/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiDlvr3nq6AgYGZhbHNlYCDml7bmlofmnKzvvIzvvIjpu5jorqTvvJpg5ZCmYO+8iVxuICAgKi9cbiAgbm8/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiDlvr3nq6DmmL7npLrpo47moLxcbiAgICogLSBgZnVsbGAg5Zu+5qCH5ZKM5paH5pysXG4gICAqIC0gYGljb25gIOWbvuagh1xuICAgKiAtIGB0ZXh0YCDmlofmnKxcbiAgICovXG4gIG1vZGU/OiBZTk1vZGU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1RJY29uIHtcbiAgLyoqIOWbvuagh+exu+WeiyAqL1xuICB0eXBlOiBzdHJpbmc7XG4gIC8qKiDlm77moIfkuLvpopjpo47moLzvvIzpu5jorqTvvJpgb3V0bGluZWAgKi9cbiAgdGhlbWU/OiAnb3V0bGluZScgfCAndHdvdG9uZScgfCAnZmlsbCc7XG4gIC8qKiDmmK/lkKbmnInml4vovazliqjnlLvvvIzpu5jorqTvvJpgZmFsc2VgICovXG4gIHNwaW4/OiBib29sZWFuO1xuICAvKiog5LuF6YCC55So5Y+M6Imy5Zu+5qCH77yM6K6+572u5Y+M6Imy5Zu+5qCH55qE5Li76KaB6aKc6Imy77yM5LuF5a+55b2T5YmNIGljb24g55Sf5pWIICovXG4gIHR3b1RvbmVDb2xvcj86IHN0cmluZztcbiAgLyoqIOaMh+WumuadpeiHqiBJY29uRm9udCDnmoTlm77moIfnsbvlnosgKi9cbiAgaWNvbmZvbnQ/OiBzdHJpbmc7XG59XG5cbi8qKlxuICog5oyJ6ZKu6YWN572uXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU1RDb2x1bW5CdXR0b24ge1xuICAvKipcbiAgICog5paH5pysXG4gICAqL1xuICB0ZXh0Pzogc3RyaW5nIHwgKChyZWNvcmQ6IFNURGF0YSwgYnRuOiBTVENvbHVtbkJ1dHRvbikgPT4gc3RyaW5nKTtcbiAgLyoqXG4gICAqIOaWh+acrCBpMThuXG4gICAqL1xuICBpMThuPzogc3RyaW5nO1xuICAvKipcbiAgICog5Zu+5qCHXG4gICAqL1xuICBpY29uPzogc3RyaW5nIHwgU1RJY29uO1xuICAvKipcbiAgICog5qC85byP5YyW5paH5pysXG4gICAqIEBkZXByZWNhdGVkIOS9v+eUqCBgdGV4dGAg5Luj5pu/XG4gICAqL1xuICBmb3JtYXQ/OiAocmVjb3JkOiBTVERhdGEsIGJ0bjogU1RDb2x1bW5CdXR0b24pID0+IHN0cmluZztcbiAgLyoqXG4gICAqIOaMiemSruexu+Wei1xuICAgKiAtIGBub25lYCDml6Dku7vkvZXkupLliqhcbiAgICogLSBgZGVsYCDliKDpmaTvvIzpu5jorqTlvIDlkK8gYHBvcDogdHJ1ZWBcbiAgICogLSBgbW9kYWxgIOWvueivneahhu+8jOmcgOimgeaMh+WumiBgY29tcG9uZW50YCDmiY3kvJrnlJ/mlYhcbiAgICogLSBgc3RhdGljYCDpnZnmgIHlr7nor53moYbvvIzpnIDopoHmjIflrpogYGNvbXBvbmVudGAg5omN5Lya55Sf5pWIXG4gICAqIC0gYGRyYXdlcmAg5oq95bGJ77yM6ZyA6KaB5oyH5a6aIGBjb21wb25lbnRgIOaJjeS8mueUn+aViFxuICAgKiAtIGBsaW5rYCDpk77mjqXvvIzlvZMgYGNsaWNrYCDov5Tlm57lrZfnrKbkuLLml7boh6rliqjosIPnlKggYG5hdmlnYXRlQnlVcmxgIOWvvOiIqlxuICAgKi9cbiAgdHlwZT86ICdub25lJyB8ICdkZWwnIHwgJ21vZGFsJyB8ICdzdGF0aWMnIHwgJ2RyYXdlcicgfCAnbGluayc7XG4gIC8qKlxuICAgKiDngrnlh7vlm57osINcbiAgICogLSBGdW5jdGlvblxuICAgKiAgLSBgdHlwZT1tb2RhbGAg5Y+q5Lya5Zyo5b2T5pyJ5Lyg5Zue5YC85pe25omN5Lya6Kem5Y+R5Zue6LCDXG4gICAqIC0gcmVsb2Fk77ya6YeN5paw5Yi35paw5b2T5YmN6aG1XG4gICAqIC0gbG9hZO+8mumHjeaWsOWKoOi9veaVsOaNru+8jOW5tumHjee9rumhteeggeS4uu+8mmAxYFxuICAgKi9cbiAgY2xpY2s/OiAncmVsb2FkJyB8ICdsb2FkJyB8ICgocmVjb3JkOiBTVERhdGEsIG1vZGFsPzogYW55LCBpbnN0YW5jZT86IFNUQ29tcG9uZW50KSA9PiBhbnkpO1xuICAvKipcbiAgICog5piv5ZCm6ZyA6KaB5rCU5rOh56Gu6K6k5qGGXG4gICAqL1xuICBwb3A/OiBib29sZWFuO1xuICAvKipcbiAgICog5rCU5rOh56Gu6K6k5qGG5YaF5a6577yM6buY6K6kIGDnoa7orqTliKDpmaTlkJfvvJ9gXG4gICAqL1xuICBwb3BUaXRsZT86IHN0cmluZztcbiAgLyoqXG4gICAqIOWvueivneahhuWPguaVsFxuICAgKi9cbiAgbW9kYWw/OiBTVENvbHVtbkJ1dHRvbk1vZGFsO1xuICAvKipcbiAgICog5oq95bGJ5Y+C5pWwXG4gICAqL1xuICBkcmF3ZXI/OiBTVENvbHVtbkJ1dHRvbkRyYXdlcjtcbiAgLyoqXG4gICAqIOS4i+aLieiPnOWNle+8jOW9k+WtmOWcqOaXtuS7pSBgZHJvcGRvd25gIOW9ouW8j+a4suafk1xuICAgKiAtIOWPquaUr+aMgeS4gOe6p1xuICAgKi9cbiAgY2hpbGRyZW4/OiBTVENvbHVtbkJ1dHRvbltdO1xuICAvKipcbiAgICog5p2D6ZmQ77yM562J5ZCMIFtBQ0xDYW5UeXBlXShodHRwczovL25nLWFsYWluLmNvbS9hY2wvZ2V0dGluZy1zdGFydGVkLyNBQ0xDYW5UeXBlKSDlj4LmlbDlgLxcbiAgICovXG4gIGFjbD86IGFueTtcbiAgLyoqXG4gICAqIENvbmRpdGlvbmFsIGV4cHJlc3Npb25cbiAgICovXG4gIGlpZj86IChpdGVtOiBTVERhdGEsIGJ0bjogU1RDb2x1bW5CdXR0b24sIGNvbHVtbjogU1RDb2x1bW4pID0+IGJvb2xlYW47XG4gIC8qKlxuICAgKiBDb25kaXRpb25hbCBleHByZXNzaW9uIHJlbmRlcmluZyBiZWhhdmlvciwgY2FuIGJlIHNldCB0byBgaGlkZWAgKGRlZmF1bHQpIG9yIGBkaXNhYmxlZGBcbiAgICovXG4gIGlpZkJlaGF2aW9yPzogSWlmQmVoYXZpb3JUeXBlO1xuXG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuZXhwb3J0IHR5cGUgSWlmQmVoYXZpb3JUeXBlID0gJ2hpZGUnIHwgJ2Rpc2FibGVkJztcblxuZXhwb3J0IGludGVyZmFjZSBTVENvbHVtbkJ1dHRvbk1vZGFsIGV4dGVuZHMgTW9kYWxIZWxwZXJPcHRpb25zIHtcbiAgLyoqXG4gICAqIOWvueivneahhue7hOS7tuWvueixoe+8jOWKoeW/heWcqCBgZW50cnlDb21wb25lbnRzYCDms6jlhoxcbiAgICovXG4gIGNvbXBvbmVudD86IGFueTtcbiAgLyoqXG4gICAqIOWvueivneahhuWPguaVsFxuICAgKi9cbiAgcGFyYW1zPzogKHJlY29yZDogU1REYXRhKSA9PiB7fTtcbiAgLyoqXG4gICAqIOWvueivneahhuebruagh+e7hOS7tueahOaOpeaUtuWPguaVsOWQje+8jOm7mOiupO+8mmByZWNvcmRgXG4gICAqL1xuICBwYXJhbXNOYW1lPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNUQ29sdW1uQnV0dG9uTW9kYWxDb25maWcge1xuICAvKipcbiAgICog5oyH5a6a5qih5oCB5qGG55uu5qCH57uE5Lu255qE5o6l5pS25Y+C5pWw5ZCN77yM6buY6K6k77yaYHJlY29yZGBcbiAgICovXG4gIHBhcmFtc05hbWU/OiBzdHJpbmc7XG4gIC8qKiDlpKflsI/vvJvkvovlpoLvvJpsZ+OAgTYwMO+8jOm7mOiupO+8mmBsZ2AgKi9cbiAgc2l6ZT86ICdzbScgfCAnbWQnIHwgJ2xnJyB8ICd4bCcgfCAnJyB8IG51bWJlcjtcbiAgLyoqIOWvueivneahhiBbTW9kYWxPcHRpb25zRm9yU2VydmljZV0oaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvY29tcG9uZW50cy9tb2RhbC9uei1tb2RhbC50eXBlLnRzKSDlj4LmlbAgKi9cbiAgbW9kYWxPcHRpb25zPzogTW9kYWxPcHRpb25zRm9yU2VydmljZTtcbiAgLyoqIOaYr+WQpueyvuWHhu+8iOm7mOiupO+8mmB0cnVlYO+8ie+8jOiLpei/lOWbnuWAvOmdnuepuuWAvO+8iGBudWxsYOaIlmB1bmRlZmluZWRg77yJ6KeG5Li65oiQ5Yqf77yM5ZCm5YiZ6KeG5Li66ZSZ6K+vICovXG4gIGV4YWN0PzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTVENvbHVtbkJ1dHRvbkRyYXdlciBleHRlbmRzIERyYXdlckhlbHBlck9wdGlvbnMge1xuICAvKipcbiAgICog5qCH6aKYXG4gICAqL1xuICB0aXRsZT86IHN0cmluZztcbiAgLyoqXG4gICAqIOaKveWxiee7hOS7tuWvueixoe+8jOWKoeW/heWcqCBgZW50cnlDb21wb25lbnRzYCDms6jlhoxcbiAgICovXG4gIGNvbXBvbmVudD86IGFueTtcbiAgLyoqXG4gICAqIOaKveWxieWPguaVsFxuICAgKi9cbiAgcGFyYW1zPzogKHJlY29yZDogU1REYXRhKSA9PiB7fTtcbiAgLyoqXG4gICAqIOaKveWxieebruagh+e7hOS7tueahOaOpeaUtuWPguaVsOWQje+8jOm7mOiupO+8mmByZWNvcmRgXG4gICAqL1xuICBwYXJhbXNOYW1lPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNUQ29sdW1uQnV0dG9uRHJhd2VyQ29uZmlnIHtcbiAgLyoqXG4gICAqIOaKveWxieebruagh+e7hOS7tueahOaOpeaUtuWPguaVsOWQje+8jOm7mOiupO+8mmByZWNvcmRgXG4gICAqL1xuICBwYXJhbXNOYW1lPzogc3RyaW5nO1xuICAvKipcbiAgICog5aSn5bCP77yb5L6L5aaC77yabGfjgIE2MDDvvIzpu5jorqTvvJpgbWRgXG4gICAqXG4gICAqIHwg57G75Z6LIHwg6buY6K6k5aSn5bCPIHxcbiAgICogfCAtLS0gfCAtLS0tLS0gfFxuICAgKiB8IGBzbWAgfCBgMzAwYCB8XG4gICAqIHwgYG1kYCB8IGA2MDBgIHxcbiAgICogfCBgbGdgIHwgYDkwMGAgfFxuICAgKiB8IGB4bGAgfCBgMTIwMGAgfFxuICAgKlxuICAgKiA+IOS7peS4iuWAvO+8jOWPr+mAmui/h+imhuebluebuOW6lOeahExFU1Plj4LmlbDoh6rooYzosIPmlbRcbiAgICovXG4gIHNpemU/OiAnc20nIHwgJ21kJyB8ICdsZycgfCAneGwnIHwgbnVtYmVyO1xuICAvKipcbiAgICog5piv5ZCm5YyF5ZCr5bqV6YOo5bel5YW35p2h77yM6buY6K6k77yaYHRydWVgXG4gICAqL1xuICBmb290ZXI/OiBib29sZWFuO1xuICAvKipcbiAgICog5bqV6YOo5bel5YW35p2h6auY5bqm77yM6buY6K6k77yaYDU1YFxuICAgKi9cbiAgZm9vdGVySGVpZ2h0PzogbnVtYmVyO1xuICAvKiog5oq95bGJIFtOekRyYXdlck9wdGlvbnNdKGh0dHBzOi8vbmcuYW50LmRlc2lnbi9jb21wb25lbnRzL2RyYXdlci96aCNuemRyYXdlcm9wdGlvbnMpIOWPguaVsCAqL1xuICBkcmF3ZXJPcHRpb25zPzogTnpEcmF3ZXJPcHRpb25zO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNUUmVxUmVOYW1lVHlwZSB7XG4gIHBpPzogc3RyaW5nO1xuICBwcz86IHN0cmluZztcbiAgc2tpcD86IHN0cmluZztcbiAgbGltaXQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1RSZXNSZU5hbWVUeXBlIHtcbiAgdG90YWw/OiBzdHJpbmcgfCBzdHJpbmdbXTtcbiAgbGlzdD86IHN0cmluZyB8IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNURXhwb3J0T3B0aW9ucyB7XG4gIF9kPzogYW55W107XG4gIF9jPzogU1RDb2x1bW5bXTtcbiAgLyoqIOW3peS9nOa6peWQjSAqL1xuICBzaGVldG5hbWU/OiBzdHJpbmc7XG4gIC8qKiDmlofku7blkI0gKi9cbiAgZmlsZW5hbWU/OiBzdHJpbmc7XG4gIC8qKiB0cmlnZ2VycyB3aGVuIHNhdmVhcyAqL1xuICBjYWxsYmFjaz86ICh3YjogYW55KSA9PiB2b2lkO1xufVxuXG4vKipcbiAqIOWNleaOkuW6j+inhOWImVxuICogLSDoi6XkuI3mjIflrprvvIzliJnov5Tlm57vvJpgY29sdW1uTmFtZT1hc2NlbmR8ZGVzY2VuZGBcbiAqIC0g6Iul5oyH5a6a77yM5YiZ6L+U5Zue77yaYHNvcnQ9Y29sdW1uTmFtZS4oYXNjZW5kfGRlc2NlbmQpYFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFNUU2luZ2xlU29ydCB7XG4gIC8qKiDor7fmsYLlj4LmlbDlkI3vvIzpu5jorqTvvJpgc29ydGAgKi9cbiAga2V5Pzogc3RyaW5nO1xuICAvKiog5YiX5ZCN5LiO54q25oCB6Ze05YiG6ZqU56ym77yM6buY6K6k77yaYC5gICovXG4gIG5hbWVTZXBhcmF0b3I/OiBzdHJpbmc7XG59XG5cbi8qKlxuICog5aSa5o6S5bqP55u45ZCM5o6S5bqPIGtleSDml7blkIjlubbop4TliJlcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTVE11bHRpU29ydCB7XG4gIC8qKiDor7fmsYLlj4LmlbDlkI3vvIzpu5jorqTvvJpgc29ydGAgKi9cbiAga2V5Pzogc3RyaW5nO1xuICAvKiog5LiN5ZCM5bGe5oCn6Ze05YiG6ZqU56ym77yM6buY6K6k77yaYC1gICovXG4gIHNlcGFyYXRvcj86IHN0cmluZztcbiAgLyoqIOWIl+WQjeS4jueKtuaAgemXtOWIhumalOespu+8jOm7mOiupO+8mmAuYCAqL1xuICBuYW1lU2VwYXJhdG9yPzogc3RyaW5nO1xuICAvKipcbiAgICog5piv5ZCm5YWo5bGA5aSa5o6S5bqP5qih5byP77yM6buY6K6k77yaYHRydWVgXG4gICAqIC0gYHRydWVgIOihqOekuuaJgOaciSBgc3RgIOm7mOiupOS4uuWkmuaOkuW6j1xuICAgKiAtIGBmYWxzZWAg6KGo56S66ZyA6KaB5Li65q+P5LiqIGBzdGAg5re75YqgIGBtdWx0aVNvcnRgIOaJjeS8muinhuS4uuWkmuaOkuW6j+aooeW8j1xuICAgKi9cbiAgZ2xvYmFsPzogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiDlvr3moIfkv6Hmga9cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTVENvbHVtbkJhZGdlIHtcbiAgW2tleTogbnVtYmVyXTogU1RDb2x1bW5CYWRnZVZhbHVlO1xuICBba2V5OiBzdHJpbmddOiBTVENvbHVtbkJhZGdlVmFsdWU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1RDb2x1bW5CYWRnZVZhbHVlIHtcbiAgLyoqXG4gICAqIOaWh+acrFxuICAgKi9cbiAgdGV4dD86IHN0cmluZztcbiAgLyoqXG4gICAqIOW+veagh+minOiJsuWAvFxuICAgKi9cbiAgY29sb3I/OiAnc3VjY2VzcycgfCAncHJvY2Vzc2luZycgfCAnZGVmYXVsdCcgfCAnZXJyb3InIHwgJ3dhcm5pbmcnO1xufVxuXG4vKipcbiAqIOagh+etvuS/oeaBr1xuICovXG5leHBvcnQgaW50ZXJmYWNlIFNUQ29sdW1uVGFnIHtcbiAgW2tleTogbnVtYmVyXTogU1RDb2x1bW5UYWdWYWx1ZTtcbiAgW2tleTogc3RyaW5nXTogU1RDb2x1bW5UYWdWYWx1ZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTVENvbHVtblRhZ1ZhbHVlIHtcbiAgLyoqXG4gICAqIOaWh+acrFxuICAgKi9cbiAgdGV4dD86IHN0cmluZztcbiAgLyoqXG4gICAqIOminOiJsuWAvO+8jOaUr+aMgemihOiuvuWSjOiJsuWAvFxuICAgKiAtIOmihOiuvu+8mmdlZWtibHVlLGJsdWUscHVycGxlLHN1Y2Nlc3MscmVkLHZvbGNhbm8sb3JhbmdlLGdvbGQsbGltZSxncmVlbixjeWFuXG4gICAqIC0g6Imy5YC877yaI2Y1MCwjZmYwXG4gICAqL1xuICBjb2xvcj86ICdnZWVrYmx1ZScgfCAnYmx1ZScgfCAncHVycGxlJyB8ICdzdWNjZXNzJyB8ICdyZWQnIHwgJ3ZvbGNhbm8nIHwgJ29yYW5nZScgfCAnZ29sZCcgfCAnbGltZScgfCAnZ3JlZW4nIHwgJ2N5YW4nIHwgc3RyaW5nO1xufVxuXG5leHBvcnQgdHlwZSBTVENoYW5nZVR5cGUgPSAncGknIHwgJ3BzJyB8ICdjaGVja2JveCcgfCAncmFkaW8nIHwgJ3NvcnQnIHwgJ2ZpbHRlcicgfCAnY2xpY2snIHwgJ2RibENsaWNrJyB8ICdleHBhbmQnO1xuXG4vKipcbiAqIOWbnuiwg+aVsOaNrlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFNUQ2hhbmdlIHtcbiAgLyoqXG4gICAqIOWbnuiwg+exu+Wei1xuICAgKi9cbiAgdHlwZTogU1RDaGFuZ2VUeXBlO1xuICAvKipcbiAgICog5b2T5YmN6aG156CBXG4gICAqL1xuICBwaTogbnVtYmVyO1xuICAvKipcbiAgICog5q+P6aG15pWw6YePXG4gICAqL1xuICBwczogbnVtYmVyO1xuICAvKipcbiAgICog5pWw5o2u5oC76YePXG4gICAqL1xuICB0b3RhbDogbnVtYmVyO1xuICAvKipcbiAgICogYGNoZWNrYm94YCDlj4LmlbBcbiAgICovXG4gIGNoZWNrYm94PzogU1REYXRhW107XG4gIC8qKlxuICAgKiBgcmFkaW9gIOWPguaVsFxuICAgKi9cbiAgcmFkaW8/OiBTVERhdGE7XG4gIC8qKlxuICAgKiDmjpLluo/lj4LmlbBcbiAgICovXG4gIHNvcnQ/OiBTVENoYW5nZVNvcnQ7XG4gIC8qKlxuICAgKiDov4fmu6Tlj4LmlbBcbiAgICovXG4gIGZpbHRlcj86IFNUQ29sdW1uO1xuICAvKipcbiAgICog6KGM54K55Ye75oiW5Y+M5Ye75Y+C5pWwXG4gICAqL1xuICBjbGljaz86IFNUQ2hhbmdlUm93Q2xpY2s7XG4gIC8qKlxuICAgKiBgZXhwYW5kYCDlj4LmlbBcbiAgICovXG4gIGV4cGFuZD86IFNURGF0YTtcbn1cblxuLyoqIOihjOWNleWHu+WPguaVsCAqL1xuZXhwb3J0IGludGVyZmFjZSBTVENoYW5nZVNvcnQge1xuICB2YWx1ZT86ICdhc2NlbmQnIHwgJ2Rlc2NlbmQnO1xuICBtYXA/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xuICBjb2x1bW4/OiBTVENvbHVtbjtcbn1cblxuLyoqIOihjOWNleWHu+WPguaVsCAqL1xuZXhwb3J0IGludGVyZmFjZSBTVENoYW5nZVJvd0NsaWNrIHtcbiAgZT86IEV2ZW50O1xuICBpdGVtPzogU1REYXRhO1xuICBpbmRleD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTVEVycm9yIHtcbiAgdHlwZT86ICdyZXEnO1xuICBlcnJvcj86IGFueTtcbn1cblxuZXhwb3J0IHR5cGUgU1RSb3dDbGFzc05hbWUgPSAocmVjb3JkOiBTVERhdGEsIGluZGV4OiBudW1iZXIpID0+IHN0cmluZztcbiJdfQ==