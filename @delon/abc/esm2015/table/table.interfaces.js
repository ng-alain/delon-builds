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
     * 分页方向，默认：`right`
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
     * 格式化文本，较高调用频率，请勿过多复杂计算免得产生性能问题
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
     * 权限，等同 `can()` 参数值
     * @type {?|undefined}
     */
    STColumnButton.prototype.acl;
    /**
     * 条件表达式，较高调用频率，请勿过多复杂计算免得产生性能问题
     * @type {?|undefined}
     */
    STColumnButton.prototype.iif;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuaW50ZXJmYWNlcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hYmMvdGFibGUvIiwic291cmNlcyI6WyJ0YWJsZS5pbnRlcmZhY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFNQSxpQ0FhQzs7Ozs7Ozs7SUFQQywyQkFBNEI7Ozs7Ozs7SUFNNUIscUNBQXFDOzs7OztBQUd2QywyQkErQkM7Ozs7Ozs7O0lBekJDLHFCQUF1Qjs7Ozs7O0lBS3ZCLHVCQUFhOzs7OztJQUViLHVCQUFnQjs7Ozs7SUFFaEIscUJBQVc7Ozs7O0lBRVgsd0JBQWM7Ozs7OztJQUtkLHVCQUF5Qjs7Ozs7SUFJekIsMEJBQW9COzs7OztJQUlwQix3QkFBaUU7Ozs7O0FBR25FLHNDQWdCQzs7O0lBZkMsZ0NBQVc7O0lBQ1gsbUNBSU07O0lBQ04sa0NBSU07O0lBQ04sbUNBQXlDOztJQUN6QywwQ0FBeUI7O0lBQ3pCLHdDQUF3RDs7SUFDeEQsMkNBQTBCOzs7OztBQUc1QixtQ0FHQzs7Ozs7O0lBREMsOEJBQWdCOzs7OztBQUdsQiwyQkFVQzs7Ozs7OztJQUxDLHVCQUF5Qjs7Ozs7SUFJekIsd0JBQXNEOzs7OztBQUd4RCw0QkFxREM7Ozs7Ozs7O0lBL0NDLHVCQUFnQjs7Ozs7SUFJaEIsNkJBQXNCOzs7OztJQUl0QiwyQkFBd0M7Ozs7O0lBSXhDLHNCQUFlOzs7OztJQUlmLDBCQUFtQjs7Ozs7SUFJbkIsMkJBQXFCOzs7OztJQUlyQixpQ0FBMEI7Ozs7Ozs7Ozs7SUFTMUIsdUJBQXlCOzs7Ozs7SUFLekIsNEJBQXFCOzs7OztJQUlyQix1QkFBZ0I7Ozs7O0lBSWhCLDZCQUFxQjs7Ozs7O0FBTXZCLDRCQW1CQzs7Ozs7O0lBZkMseUJBQWtCOzs7OztJQUlsQiwwQkFBbUI7Ozs7O0lBSW5CLHdCQUFpQjs7Ozs7SUFJakIsNEJBQXFCOzs7Ozs7O0FBUXZCLDhCQXFKQzs7Ozs7O0lBakpDLHVCQUFhOzs7OztJQUliLHlCQUFjOzs7OztJQUlkLHdCQUFj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Q1osK0JBQWM7O0lBQ2QsZ0NBQWU7Ozs7O0FBR2pCLHFDQUdDOzs7SUFGQyxnQ0FBMEI7O0lBQzFCLCtCQUF5Qjs7Ozs7QUFHM0IscUNBU0M7OztJQVJDLDZCQUFXOztJQUNYLDZCQUFnQjs7Ozs7SUFFaEIsb0NBQW1COzs7OztJQUVuQixtQ0FBa0I7Ozs7O0lBRWxCLG1DQUE2Qjs7Ozs7Ozs7QUFRL0Isa0NBS0M7Ozs7OztJQUhDLDJCQUFhOzs7OztJQUViLHFDQUF1Qjs7Ozs7O0FBTXpCLGlDQWFDOzs7Ozs7SUFYQywwQkFBYTs7Ozs7SUFFYixnQ0FBbUI7Ozs7O0lBRW5CLG9DQUF1Qjs7Ozs7OztJQU12Qiw2QkFBaUI7Ozs7OztBQU1uQixtQ0FHQzs7OztBQUVELHdDQVNDOzs7Ozs7SUFMQyxrQ0FBYzs7Ozs7SUFJZCxtQ0FBbUU7Ozs7OztBQU1yRSxpQ0FHQzs7OztBQUVELHNDQXVCQzs7Ozs7O0lBbkJDLGdDQUFjOzs7Ozs7O0lBTWQsaUNBWVc7Ozs7OztBQVFiLDhCQXlDQzs7Ozs7O0lBckNDLHdCQUFtQjs7Ozs7SUFJbkIsc0JBQVc7Ozs7O0lBSVgsc0JBQVc7Ozs7O0lBSVgseUJBQWM7Ozs7O0lBSWQsNEJBQW9COzs7OztJQUlwQix5QkFBZTs7Ozs7SUFJZix3QkFBb0I7Ozs7O0lBSXBCLDBCQUFrQjs7Ozs7SUFJbEIseUJBQXlCOzs7OztJQUl6QiwwQkFBZ0I7Ozs7OztBQUlsQixrQ0FJQzs7O0lBSEMsNkJBQTZCOztJQUM3QiwyQkFBZ0M7O0lBQ2hDLDhCQUFrQjs7Ozs7O0FBSXBCLHNDQUlDOzs7SUFIQyw2QkFBVTs7SUFDVixnQ0FBYzs7SUFDZCxpQ0FBZTs7Ozs7QUFHakIsNkJBR0M7OztJQUZDLHVCQUFhOztJQUNiLHdCQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cEhlYWRlcnMsIEh0dHBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBEcmF3ZXJIZWxwZXJPcHRpb25zLCBNb2RhbEhlbHBlck9wdGlvbnMsIFlOTW9kZSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5pbXBvcnQgeyBOekRyYXdlck9wdGlvbnMgfSBmcm9tICduZy16b3Jyby1hbnRkL2RyYXdlcic7XG5pbXBvcnQgeyBNb2RhbE9wdGlvbnNGb3JTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9tb2RhbCc7XG5pbXBvcnQgeyBTVENvbXBvbmVudCB9IGZyb20gJy4vdGFibGUuY29tcG9uZW50JztcblxuZXhwb3J0IGludGVyZmFjZSBTVFdpZHRoTW9kZSB7XG4gIC8qKlxuICAgKiDlrr3luqbnsbvlnotcbiAgICogLSBgZGVmYXVsdGAg6buY6K6k6KGM5Li6XG4gICAqIC0gYHN0cmljdGAg5Lil5qC85qih5byP77yM5Y2z5by65Yi25oyJIGB3aWR0aGAg5oyH5a6a55qE5a695bqm5ZGI546w77yM5bm25qC55o2uIGBzdHJpY3RCZWhhdmlvcmAg57G75Z6L5aSE55CGXG4gICAqL1xuICB0eXBlPzogJ3N0cmljdCcgfCAnZGVmYXVsdCc7XG4gIC8qKlxuICAgKiDkuKXmoLzmqKHlvI/nmoTlpITnkIbooYzkuLpcbiAgICogLSBgd3JhcGAg5by65Yi25o2i6KGMXG4gICAqIC0gYHRydW5jYXRlYCDmiKrnn61cbiAgICovXG4gIHN0cmljdEJlaGF2aW9yPzogJ3dyYXAnIHwgJ3RydW5jYXRlJztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTVFJlcSB7XG4gIC8qKlxuICAgKiDliIbpobXnsbvlnovvvIzpu5jorqTvvJpgcGFnZWBcbiAgICogLSBgcGFnZWAg5L2/55SoIGBwaWDvvIxgcHNgIOe7hOWQiFxuICAgKiAtIGBza2lwYCDkvb/nlKggYHNraXBg77yMYGxpbWl0YCDnu4TlkIhcbiAgICovXG4gIHR5cGU/OiAncGFnZScgfCAnc2tpcCc7XG4gIC8qKlxuICAgKiDpop3lpJbor7fmsYLlj4LmlbDvvIzpu5jorqToh6rliqjpmYTliqAgYHBpYOOAgWBwc2Ag6IezVVJMXG4gICAqIC0gYHsgc3RhdHVzOiAnbmV3JyB9YCA9PiBgdXJsP3BpPTEmcHM9MTAmc3RhdHVzPW5ld2BcbiAgICovXG4gIHBhcmFtcz86IGFueTtcbiAgLyoqIOivt+axguaWueazle+8jOm7mOiupO+8mmBHRVRgICovXG4gIG1ldGhvZD86IHN0cmluZztcbiAgLyoqIOivt+axguS9kyBgYm9keWAgKi9cbiAgYm9keT86IGFueTtcbiAgLyoqIOivt+axguS9kyBgSGVhZGVyYCAqL1xuICBoZWFkZXJzPzogYW55O1xuICAvKipcbiAgICog6YeN5ZG95ZCN5Y+C5pWwIGBwaWDjgIFgcHNg77yM6buY6K6k77yaYHsgcGk6ICdwaScsIHBzOiAncHMnIH1gXG4gICAqIC0gYHsgcGk6ICdQYWdlJyB9YCA9PiBgcGlgIOS8muiiq+abv+aNouaIkCBQYWdlXG4gICAqL1xuICByZU5hbWU/OiBTVFJlcVJlTmFtZVR5cGU7XG4gIC8qKlxuICAgKiDmmK/lkKblsIbor7fmsYLmiYDmnInlj4LmlbDmlbDmja7pg73mlL7lhaUgYGJvZHlgIOW9k+S4re+8iGB1cmxgIOWcsOWdgOacrOi6q+WPguaVsOmZpOWklu+8ie+8jOS7heW9kyBgbWV0aG9kOiAnUE9TVCdgIOaXtuacieaViO+8jOm7mOiupO+8mmBmYWxzZWBcbiAgICovXG4gIGFsbEluQm9keT86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDor7fmsYLliY3mlbDmja7lpITnkIZcbiAgICovXG4gIHByb2Nlc3M/OiAocmVxdWVzdE9wdGlvbnM6IFNUUmVxdWVzdE9wdGlvbnMpID0+IFNUUmVxdWVzdE9wdGlvbnM7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1RSZXF1ZXN0T3B0aW9ucyB7XG4gIGJvZHk/OiBhbnk7XG4gIGhlYWRlcnM/OlxuICAgIHwgSHR0cEhlYWRlcnNcbiAgICB8IHtcbiAgICAgICAgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XG4gICAgICB9O1xuICBwYXJhbXM/OlxuICAgIHwgSHR0cFBhcmFtc1xuICAgIHwge1xuICAgICAgICBbcGFyYW06IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xuICAgICAgfTtcbiAgb2JzZXJ2ZT86ICdib2R5JyB8ICdldmVudHMnIHwgJ3Jlc3BvbnNlJztcbiAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xuICByZXNwb25zZVR5cGU/OiAnYXJyYXlidWZmZXInIHwgJ2Jsb2InIHwgJ2pzb24nIHwgJ3RleHQnO1xuICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNUTG9hZE9wdGlvbnMge1xuICAvKiog5piv5ZCm5ZCI5bm277yM6buY6K6k77yaYGZhbHNlYCAqL1xuICBtZXJnZT86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1RSZXMge1xuICAvKipcbiAgICog6YeN5ZG95ZCN6L+U5Zue5Y+C5pWwIGB0b3RhbGDjgIFgbGlzdGBcbiAgICogLSBgeyB0b3RhbDogJ1RvdGFsJyB9YCA9PiBUb3RhbCDkvJrooqvlvZPkvZwgYHRvdGFsYFxuICAgKi9cbiAgcmVOYW1lPzogU1RSZXNSZU5hbWVUeXBlO1xuICAvKipcbiAgICog5pWw5o2u6aKE5aSE55CGXG4gICAqL1xuICBwcm9jZXNzPzogKGRhdGE6IFNURGF0YVtdLCByYXdEYXRhPzogYW55KSA9PiBTVERhdGFbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTVFBhZ2Uge1xuICAvKipcbiAgICog5YmN56uv5YiG6aG177yM5b2TIGBkYXRhYCDkuLpgYW55W11gIOaIliBgT2JzZXJ2YWJsZTxhbnlbXT5gIOacieaViO+8jOm7mOiupO+8mmB0cnVlYFxuICAgKiAtIGB0cnVlYCDnlLEgYHN0YCDmoLnmja4gYGRhdGFgIOmVv+W6puWPl+aOp+WIhumhte+8jOWMheaLrO+8muaOkuW6j+OAgei/h+a7pOetiVxuICAgKiAtIGBmYWxzZWAg55Sx55So5oi36YCa6L+HIGB0b3RhbGAg5ZKMIGBkYXRhYCDlj4LmlbDlj5fmjqfliIbpobXvvIzlubbnu7TmiqQgYChjaGFuZ2UpYCDlvZPliIbpobXlj5jmm7Tml7bph43mlrDliqDovb3mlbDmja5cbiAgICovXG4gIGZyb250PzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIOWQjuerr+WIhumhteaYr+WQpumHh+eUqGAwYOWfuue0ouW8le+8jOWPquWcqGBkYXRhYOexu+Wei+S4umBzdHJpbmdg5pe25pyJ5pWI77yM6buY6K6k77yaYGZhbHNlYFxuICAgKi9cbiAgemVyb0luZGV4ZWQ/OiBib29sZWFuO1xuICAvKipcbiAgICog5YiG6aG15pa55ZCR77yM6buY6K6k77yaYHJpZ2h0YFxuICAgKi9cbiAgcGxhY2VtZW50PzogJ2xlZnQnIHwgJ2NlbnRlcicgfCAncmlnaHQnO1xuICAvKipcbiAgICog5piv5ZCm5pi+56S65YiG6aG15Zmo77yM6buY6K6k77yaYHRydWVgXG4gICAqL1xuICBzaG93PzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIOaYr+WQpuaYvuekuuWIhumhteWZqOS4reaUueWPmOmhteaVsO+8jOm7mOiupO+8mmBmYWxzZWBcbiAgICovXG4gIHNob3dTaXplPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIOWIhumhteWZqOS4reavj+mhteaYvuekuuadoeebruaVsOS4i+aLieahhuWAvO+8jOm7mOiupO+8mmBbMTAsIDIwLCAzMCwgNDAsIDUwXWBcbiAgICovXG4gIHBhZ2VTaXplcz86IG51bWJlcltdO1xuICAvKipcbiAgICog5piv5ZCm5pi+56S65YiG6aG15Zmo5Lit5b+r6YCf6Lez6L2s77yM6buY6K6k77yaYGZhbHNlYFxuICAgKi9cbiAgc2hvd1F1aWNrSnVtcGVyPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIOaYr+WQpuaYvuekuuaAu+aVsOaNrumHj1xuICAgKiAtIGBib29sZWFuYCDnsbvlnovmmL7npLrkuI7lkKbvvIzpu5jorqTmqKHmnb/vvJpg5YWxIHt7dG90YWx9fSDmnaFgXG4gICAqIC0gYHN0cmluZ2Ag6Ieq5a6a5LmJ5qih5p2/77yM5qih5p2/5Y+Y6YeP77yaXG4gICAqICAtIGB7e3RvdGFsfX1gIOihqOekuuaVsOaNruaAu+mHj1xuICAgKiAgLSBge3tyYW5nZVswXX19YCDooajnpLrlvZPliY3pobXlvIDlp4vmlbDph4/lgLxcbiAgICogIC0gYHt7cmFuZ2VbMV19fWAg6KGo56S65b2T5YmN6aG157uT5p2f5pWw6YeP5YC8XG4gICAqL1xuICB0b3RhbD86IHN0cmluZyB8IGJvb2xlYW47XG4gIC8qKlxuICAgKiDmlbDmja7lj5jmm7TlkI7mmK/lkKbkv53nlZnlnKjmlbDmja7lj5jmm7TliY3nmoTpobXnoIHvvIzpu5jorqTvvJpgdHJ1ZWBcbiAgICogQGRlcHJlY2F0ZWRcbiAgICovXG4gIGluZGV4UmVzZXQ/OiBib29sZWFuO1xuICAvKipcbiAgICog5YiH5o2i5YiG6aG15pe26L+U5Zue6aG26YOo77yM6buY6K6k77yaYHRydWVgXG4gICAqL1xuICB0b1RvcD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDov5Tlm57pobbpg6jlgY/np7vlgLzvvIzpu5jorqTvvJpgMTAwYFxuICAgKi9cbiAgdG9Ub3BPZmZzZXQ/OiBudW1iZXI7XG59XG5cbi8qKlxuICog5pWw5o2u5rqQXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU1REYXRhIHtcbiAgLyoqXG4gICAqIOmAieaLqeahhuaIluWNlemAieahhueKtuaAgeWAvFxuICAgKi9cbiAgY2hlY2tlZD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDpgInmi6nmoYbmiJbljZXpgInmoYYgYGRpc2FibGVkYCDlgLxcbiAgICovXG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIOaYr+WQpuWxleW8gOeKtuaAgVxuICAgKi9cbiAgZXhwYW5kPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIOaYr+WQpuaYvuekuuWxleW8gOaMiemSrlxuICAgKi9cbiAgc2hvd0V4cGFuZD86IGJvb2xlYW47XG5cbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG4vKipcbiAqIOWIl+aPj+i/sFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFNUQ29sdW1uIHtcbiAgLyoqXG4gICAqIOeUqOS6juWumuS5ieaVsOaNrua6kOS4u+mUru+8jOS+i+Wmgu+8mmBTVFN0YXRpc3RpY2FsYFxuICAgKi9cbiAga2V5Pzogc3RyaW5nO1xuICAvKipcbiAgICog5YiX5qCH6aKYXG4gICAqL1xuICB0aXRsZTogc3RyaW5nO1xuICAvKipcbiAgICog5YiX5qCH6aKYIGkxOG5cbiAgICovXG4gIGkxOG4/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiDliJfmlbDmja7lnKjmlbDmja7pobnkuK3lr7nlupTnmoQga2V577yM5pSv5oyBIGBhLmIuY2Ag55qE5bWM5aWX5YaZ5rOV77yM5L6L5aaC77yaXG4gICAqIC0gYGlkYFxuICAgKiAtIGBwcmljZS5tYXJrZXRgXG4gICAqIC0gYFsgJ3ByaWNlJywgJ21hcmtldCcgXWBcbiAgICovXG4gIGluZGV4Pzogc3RyaW5nIHwgc3RyaW5nW10gfCBudWxsO1xuICAvKipcbiAgICog57G75Z6LXG4gICAqIC0gYG5vYCDooYzlj7fvvIzorqHnrpfop4TliJnvvJpgaW5kZXggKyBub0luZGV4YFxuICAgKiAtIGBjaGVja2JveGAg5aSa6YCJXG4gICAqIC0gYHJhZGlvYCDljZXpgIlcbiAgICogLSBgbGlua2Ag6ZO+5o6l77yM5Yqh5b+F5oyH5a6aIGBjbGlja2BcbiAgICogLSBgYmFkZ2VgIFvlvr3moIddKGh0dHBzOi8vbmcuYW50LmRlc2lnbi9jb21wb25lbnRzL2JhZGdlL3poKe+8jOWKoeW/heaMh+WumiBgYmFkZ2VgIOWPguaVsOmFjee9ruW+veagh+WvueW6lOWAvFxuICAgKiAtIGB0YWdgIFvmoIfnrb5dKGh0dHBzOi8vbmcuYW50LmRlc2lnbi9jb21wb25lbnRzL3RhZy96aCnvvIzliqHlv4XmjIflrpogYHRhZ2Ag5Y+C5pWw6YWN572u5qCH562+5a+55bqU5YC8XG4gICAqIC0gYGltZ2Ag5Zu+54mH5LiU5bGF5LitKOiLpSBgY2xhc3NOYW1lYCDlrZjlnKjliJnkvJjlhYgpXG4gICAqIC0gYG51bWJlcmAg5pWw5a2X5LiU5bGF5Y+zKOiLpSBgY2xhc3NOYW1lYCDlrZjlnKjliJnkvJjlhYgpXG4gICAqIC0gYGN1cnJlbmN5YCDotKfluIHkuJTlsYXlj7Mo6IulIGBjbGFzc05hbWVgIOWtmOWcqOWImeS8mOWFiClcbiAgICogLSBgZGF0ZWAg5pel5pyf5qC85byP5LiU5bGF5LitKOiLpSBgY2xhc3NOYW1lYCDlrZjlnKjliJnkvJjlhYgp77yM5L2/55SoIGBkYXRlRm9ybWF0YCDoh6rlrprkuYnmoLzlvI9cbiAgICogLSBgeW5gIOWwhmBib29sZWFuYOexu+Wei+W+veeroOWMliBbZG9jdW1lbnRdKGh0dHBzOi8vbmctYWxhaW4uY29tL2RvY3MvZGF0YS1yZW5kZXIjeW4pXG4gICAqL1xuICB0eXBlPzogJ2NoZWNrYm94JyB8ICdsaW5rJyB8ICdiYWRnZScgfCAndGFnJyB8ICdyYWRpbycgfCAnaW1nJyB8ICdjdXJyZW5jeScgfCAnbnVtYmVyJyB8ICdkYXRlJyB8ICd5bicgfCAnbm8nO1xuICAvKipcbiAgICog6ZO+5o6l5Zue6LCD77yM6Iul6L+U5Zue5LiA5Liq5a2X56ym5Liy6KGo56S65a+86IiqVVJM5Lya6Ieq5Yqo6Kem5Y+RIGByb3V0ZXIubmF2aWdhdGVCeVVybGBcbiAgICovXG4gIGNsaWNrPzogKHJlY29yZDogU1REYXRhLCBpbnN0YW5jZT86IFNUQ29tcG9uZW50KSA9PiBhbnk7XG4gIC8qKlxuICAgKiDmjInpkq7nu4RcbiAgICovXG4gIGJ1dHRvbnM/OiBTVENvbHVtbkJ1dHRvbltdO1xuICAvKipcbiAgICog6Ieq5a6a5LmJ5riy5p+TSURcbiAgICogQGV4YW1wbGVcbiAgICogPG5nLXRlbXBsYXRlIHN0LXJvdz1cImN1c3RvbVwiIGxldC1pdGVtIGxldC1pbmRleD1cImluZGV4XCIgbGV0LWNvbHVtbj1cImNvbHVtblwiPlxuICAgKiAge3sgYy50aXRsZSB9fVxuICAgKiA8L25nLXRlbXBsYXRlPlxuICAgKi9cbiAgcmVuZGVyPzogc3RyaW5nO1xuICAvKipcbiAgICog5qCH6aKY6Ieq5a6a5LmJ5riy5p+TSURcbiAgICogQGV4YW1wbGVcbiAgICogPG5nLXRlbXBsYXRlIHN0LXJvdz1cImN1c3RvbVwiIHR5cGU9XCJ0aXRsZVwiIGxldC1jPlxuICAgKiAge3sgaXRlbSB8IGpzb24gfX1cbiAgICogPC9uZy10ZW1wbGF0ZT5cbiAgICovXG4gIHJlbmRlclRpdGxlPzogc3RyaW5nO1xuICAvKipcbiAgICog5YiX5a6977yI5pWw5a2X5Z6L6KGo56S6IGBweGAg5YC877yJ77yM5L6L5aaC77yaYDEwMGDjgIFgMTAlYOOAgWAxMDBweGBcbiAgICpcbiAgICogKirms6jmhI/vvJoqKiDoi6Xlm7rlrprliJflv4XpobvmmK/mlbDlrZdcbiAgICovXG4gIHdpZHRoPzogc3RyaW5nIHwgbnVtYmVyO1xuICAvKipcbiAgICog5o6S5bqP6YWN572u6aG577yM6L+c56iL5pWw5o2u6YWN572uKirkvJjlhYgqKuinhOWIme+8mlxuICAgKiAtIGB0cnVlYCDooajnpLrlhYHorrjmjpLluo9cbiAgICogLSBgc3RyaW5nYCDooajnpLrov5znqIvmlbDmja7mjpLluo/nm7jlr7nlupQgYGtleWAg5YC8XG4gICAqL1xuICBzb3J0PzogdHJ1ZSB8IHN0cmluZyB8IFNUQ29sdW1uU29ydDtcbiAgLyoqXG4gICAqIOi/h+a7pOmFjee9rumhuVxuICAgKi9cbiAgZmlsdGVyPzogU1RDb2x1bW5GaWx0ZXI7XG4gIC8qKlxuICAgKiDmoLzlvI/ljJbliJflgLxcbiAgICovXG4gIGZvcm1hdD86IChpdGVtOiBTVERhdGEsIGNvbDogU1RDb2x1bW4pID0+IHN0cmluZztcbiAgLyoqXG4gICAqIOiHquWumuS5ieWFqC/lj43pgInpgInmi6npoblcbiAgICovXG4gIHNlbGVjdGlvbnM/OiBTVENvbHVtblNlbGVjdGlvbltdO1xuICAvKipcbiAgICog5YiXIGBjbGFzc2Ag5bGe5oCn5YC877yI5rOo77ya5peg6aG7IGAuYCDngrnvvInvvIzkvovlpoLvvJpcbiAgICogLSBgdGV4dC1jZW50ZXJgIOWxheS4rVxuICAgKiAtIGB0ZXh0LXJpZ2h0YCDlsYXlj7NcbiAgICogLSBgdGV4dC1zdWNjZXNzYCDmiJDlip/oibJcbiAgICogLSBgdGV4dC1kYW5nZXJgIOW8guW4uOiJslxuICAgKi9cbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xuICAvKipcbiAgICog5ZCI5bm25YiXXG4gICAqL1xuICBjb2xTcGFuPzogbnVtYmVyO1xuICAvKipcbiAgICog5pWw5a2X5qC85byP77yMYHR5cGU9bnVtYmVyYCDmnInmlYhcbiAgICovXG4gIG51bWJlckRpZ2l0cz86IHN0cmluZztcbiAgLyoqXG4gICAqIOaXpeacn+agvOW8j++8jGB0eXBlPWRhdGVgIOacieaViO+8jO+8iOm7mOiupO+8mmBZWVlZLU1NLUREIEhIOm1tYO+8iVxuICAgKi9cbiAgZGF0ZUZvcm1hdD86IHN0cmluZztcbiAgLyoqXG4gICAqIOW9kyBgdHlwZT15bmAg5pyJ5pWIXG4gICAqL1xuICB5bj86IFNUQ29sdW1uWW47XG4gIC8qKlxuICAgKiDmmK/lkKblhYHorrjlr7zlh7rvvIzpu5jorqQgYHRydWVgXG4gICAqL1xuICBleHBvcnRlZD86IGJvb2xlYW47XG4gIC8qKiDmnYPpmZDvvIznrYnlkIwgYGNhbigpYCDlj4LmlbDlgLwgKi9cbiAgYWNsPzogYW55O1xuICAvKiog5b2T5LiN5a2Y5Zyo5pWw5o2u5pe25Lul6buY6K6k5YC85pu/5LujICovXG4gIGRlZmF1bHQ/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiDlm7rlrprliY3lkI7liJfvvIzlvZPmjIflrprml7bliqHlv4XmjIflrpogYHdpZHRoYCDlkKbliJnop4bkuLrml6DmlYjvvIzmnInoi6XlubIgKirms6jmhI/vvJoqKiDpobnvvJpcbiAgICpcbiAgICogLSDoi6XliJflpLTkuI7lhoXlrrnkuI3lr7npvZDmiJblh7rnjrDliJfph43lpI3vvIzor7fmjIflrprliJfnmoTlrr3luqYgYHdpZHRoYFxuICAgKiAtIOW7uuiuruaMh+WumiBgc2Nyb2xsLnhgIOS4uuWkp+S6juihqOagvOWuveW6pueahOWbuuWumuWAvOaIlueZvuWIhuavlOOAguazqOaEj++8jOS4lOmdnuWbuuWumuWIl+WuveW6puS5i+WSjOS4jeimgei2hei/hyBgc2Nyb2xsLnhgXG4gICAqL1xuICBmaXhlZD86ICdsZWZ0JyB8ICdyaWdodCc7XG4gIC8qKlxuICAgKiDlvr3moIfphY3nva7poblcbiAgICovXG4gIGJhZGdlPzogU1RDb2x1bW5CYWRnZSB8IG51bGw7XG4gIC8qKlxuICAgKiDmoIfnrb7phY3nva7poblcbiAgICovXG4gIHRhZz86IFNUQ29sdW1uVGFnIHwgbnVsbDtcbiAgLyoqXG4gICAqIOihjOWPt+e0ouW8le+8jOm7mOiupO+8mmAxYFxuICAgKiAtIOiuoeeul+inhOWImeS4uu+8mmBpbmRleCArIG5vSW5kZXhgXG4gICAqIC0g5pSv5oyB6Ieq5a6a5LmJ5pa55rOVXG4gICAqL1xuICBub0luZGV4PzogbnVtYmVyIHwgKChpdGVtOiBTVERhdGEsIGNvbDogU1RDb2x1bW4sIGlkeDogbnVtYmVyKSA9PiBudW1iZXIpO1xuICAvKipcbiAgICog5p2h5Lu26KGo6L6+5byPXG4gICAqIC0g5LuF6LWL5YC8IGBjb2x1bW5zYCDml7bmiafooYzkuIDmrKFcbiAgICogLSDlj6/osIPnlKggYHJlc2V0Q29sdW1ucygpYCDlho3kuIDmrKHop6blj5FcbiAgICovXG4gIGlpZj86IChpdGVtOiBTVENvbHVtbikgPT4gYm9vbGVhbjtcblxuICAvKipcbiAgICog57uf6K6hXG4gICAqL1xuICBzdGF0aXN0aWNhbD86IFNUU3RhdGlzdGljYWxUeXBlIHwgU1RTdGF0aXN0aWNhbDtcblxuICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbmV4cG9ydCB0eXBlIFNUU3RhdGlzdGljYWxUeXBlID0gJ2NvdW50JyB8ICdkaXN0aW5jdENvdW50JyB8ICdzdW0nIHwgJ2F2ZXJhZ2UnIHwgJ21heCcgfCAnbWluJztcblxuZXhwb3J0IHR5cGUgU1RTdGF0aXN0aWNhbEZuID0gKHZhbHVlczogbnVtYmVyW10sIGNvbDogU1RDb2x1bW4sIGxpc3Q6IFNURGF0YVtdLCByYXdEYXRhPzogYW55KSA9PiBTVFN0YXRpc3RpY2FsUmVzdWx0O1xuXG5leHBvcnQgaW50ZXJmYWNlIFNUU3RhdGlzdGljYWwge1xuICB0eXBlOiBTVFN0YXRpc3RpY2FsVHlwZSB8IFNUU3RhdGlzdGljYWxGbjtcbiAgLyoqXG4gICAqIOS/neeVmeWwj+aVsOS9jeaVsO+8jOm7mOiupO+8mmAyYFxuICAgKi9cbiAgZGlnaXRzPzogbnVtYmVyO1xuICAvKipcbiAgICog5piv5ZCm6ZyA6KaB6LSn5biB5qC85byP5YyW77yM6buY6K6k5Lul5LiL5oOF5Ya15Li6IGB0cnVlYFxuICAgKiAtIGB0eXBlYCDkuLogYFNUU3RhdGlzdGljYWxGbmDjgIEgYHN1bWDjgIFgYXZlcmFnZWDjgIFgbWF4YOOAgWBtaW5gXG4gICAqL1xuICBjdXJyZW5jeT86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1RTdGF0aXN0aWNhbFJlc3VsdHMge1xuICBba2V5OiBzdHJpbmddOiBTVFN0YXRpc3RpY2FsUmVzdWx0O1xuICBbaW5kZXg6IG51bWJlcl06IFNUU3RhdGlzdGljYWxSZXN1bHQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1RTdGF0aXN0aWNhbFJlc3VsdCB7XG4gIHZhbHVlOiBudW1iZXI7XG4gIHRleHQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1RDb2x1bW5Tb3J0IHtcbiAgLyoqXG4gICAqIOaOkuW6j+eahOm7mOiupOWPl+aOp+WxnuaAp1xuICAgKi9cbiAgZGVmYXVsdD86ICdhc2NlbmQnIHwgJ2Rlc2NlbmQnO1xuICAvKipcbiAgICog5pys5Zyw5pWw5o2u55qE5o6S5bqP5Ye95pWw77yM5L2/55So5LiA5Liq5Ye95pWwKOWPguiAgyBbQXJyYXkuc29ydF0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvQXJyYXkvc29ydCkg55qEIGNvbXBhcmVGdW5jdGlvbilcbiAgICovXG4gIGNvbXBhcmU/OiAoYTogU1REYXRhLCBiOiBTVERhdGEpID0+IG51bWJlcjtcbiAgLyoqXG4gICAqIOi/nOeoi+aVsOaNrueahOaOkuW6j+aXtuWQjuerr+ebuOWvueW6lOeahEtFWe+8jOm7mOiupOS9v+eUqCBgaW5kZXhgIOWxnuaAp1xuICAgKiAtIOiLpSBgbXVsdGlTb3J0OiBmYWxzZWAg5pe277yaYGtleTogJ25hbWUnID0+ID9uYW1lPTEmcGk9MWBcbiAgICogLSDoi6UgYG11bHRpU29ydDogdHJ1ZWAg5YWB6K645aSa5Liq5o6S5bqPIGtleSDlrZjlnKjvvIzmiJbkvb/nlKggYFNUTXVsdGlTb3J0YCDmjIflrprlpJrliJfmjpLluo9rZXnlkIjlubbop4TliJlcbiAgICovXG4gIGtleT86IHN0cmluZyB8IG51bGw7XG4gIC8qKlxuICAgKiDov5znqIvmlbDmja7nmoTmjpLluo/ml7blkI7nq6/nm7jlr7nlupTnmoRWQUxVRVxuICAgKiAtIGB7IGFzY2VuZDogJzAnLCBkZXNjZW5kOiAnMScgfWAg57uT5p6cIGA/bmFtZT0xJnBpPTFgXG4gICAqIC0gYHsgYXNjZW5kOiAnYXNjJywgZGVzY2VuZDogJ2Rlc2MnIH1gIOe7k+aenCBgP25hbWU9ZGVzYyZwaT0xYFxuICAgKi9cbiAgcmVOYW1lPzogeyBhc2NlbmQ/OiBzdHJpbmc7IGRlc2NlbmQ/OiBzdHJpbmcgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTVENvbHVtbkZpbHRlciB7XG4gIC8qKlxuICAgKiDooajlpLTnmoTnrZvpgInoj5zljZXpobnvvIzoh7PlsJHkuIDpobnmiY3kvJrnlJ/mlYhcbiAgICovXG4gIG1lbnVzOiBTVENvbHVtbkZpbHRlck1lbnVbXTtcbiAgLyoqXG4gICAqIOacrOWcsOaVsOaNrueahOetm+mAieWHveaVsFxuICAgKi9cbiAgZm4/OiAoKGZpbHRlcjogU1RDb2x1bW5GaWx0ZXJNZW51LCByZWNvcmQ6IFNURGF0YSkgPT4gYm9vbGVhbikgfCBudWxsO1xuICAvKipcbiAgICog5qCH6K+G5pWw5o2u5piv5ZCm5bey6L+H5ruk77yM562b6YCJ5Zu+5qCH5Lya6auY5LquXG4gICAqL1xuICBkZWZhdWx0PzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIOiHquWumuS5iSBmaWx0ZXIg5Zu+5qCH77yM6buY6K6kIGBmaWx0ZXJgXG4gICAqL1xuICBpY29uPzogc3RyaW5nO1xuICAvKipcbiAgICog56Gu6K6k5oyJ6ZKu5paH5pys77yM6buY6K6kIGDnoa7orqRgXG4gICAqL1xuICBjb25maXJtVGV4dD86IHN0cmluZztcbiAgLyoqXG4gICAqIOa4hemZpOaMiemSruaWh+acrO+8jOm7mOiupCBg6YeN572uYFxuICAgKi9cbiAgY2xlYXJUZXh0Pzogc3RyaW5nO1xuICAvKipcbiAgICog5piv5ZCm5aSa6YCJ77yM6buY6K6kIGB0cnVlYFxuICAgKi9cbiAgbXVsdGlwbGU/OiBib29sZWFuO1xuICAvKipcbiAgICog6L+c56iL5pWw5o2u55qE6L+H5ruk5pe25ZCO56uv55u45a+55bqU55qES0VZ77yM6buY6K6k5L2/55SoIGBpbmRleGAg5bGe5oCnXG4gICAqIGBrZXk6ICduYW1lJ2Ag57uT5p6cIGA/bmFtZT0xJnBpPTFgXG4gICAqL1xuICBrZXk/OiBzdHJpbmcgfCBudWxsO1xuICAvKipcbiAgICog6L+c56iL5pWw5o2u55qE6L+H5ruk5pe25ZCO56uv55u45a+55bqU55qEVkFMVUVcbiAgICogLSDpu5jorqTlvZMgYG11bHRpcGxlOiB0cnVlYCDml7bku6Xoi7HmlofpgJflj7fmi7zmjqXnmoTlrZfnrKbkuLJcbiAgICogQHJldHVybiDov5Tlm57kuLogT2JqZWN0IOWvueixoVxuICAgKi9cbiAgcmVOYW1lPzogKGxpc3Q6IFNUQ29sdW1uRmlsdGVyTWVudVtdLCBjb2w6IFNUQ29sdW1uKSA9PiB7fTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTVENvbHVtbkZpbHRlck1lbnUge1xuICAvKipcbiAgICog5paH5pysXG4gICAqL1xuICB0ZXh0OiBzdHJpbmc7XG4gIC8qKlxuICAgKiDlgLxcbiAgICovXG4gIHZhbHVlPzogYW55O1xuICAvKipcbiAgICog5piv5ZCm6YCJ5LitXG4gICAqL1xuICBjaGVja2VkPzogYm9vbGVhbjtcbiAgLyoqIOadg+mZkO+8jOetieWQjCBgY2FuKClgIOWPguaVsOWAvCAqL1xuICBhY2w/OiBhbnk7XG5cbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNUQ29sdW1uU2VsZWN0aW9uIHtcbiAgLyoqXG4gICAqIOmAieaLqemhueaYvuekuueahOaWh+Wtl1xuICAgKi9cbiAgdGV4dDogc3RyaW5nO1xuICAvKipcbiAgICog6YCJ5oup6aG554K55Ye75Zue6LCD77yM5YWB6K645a+55Y+C5pWwIGBkYXRhLmNoZWNrZWRgIOi/m+ihjOaTjeS9nFxuICAgKi9cbiAgc2VsZWN0OiAoZGF0YTogU1REYXRhW10pID0+IHZvaWQ7XG4gIC8qKiDmnYPpmZDvvIznrYnlkIwgYGNhbigpYCDlj4LmlbDlgLwgKi9cbiAgYWNsPzogYW55O1xufVxuXG4vKiog5b2TIGB0eXBlPXluYCDmnInmlYggKi9cbmV4cG9ydCBpbnRlcmZhY2UgU1RDb2x1bW5ZbiB7XG4gIC8qKlxuICAgKiDnnJ/lgLzmnaHku7bvvIzvvIjpu5jorqTvvJpgdHJ1ZWDvvIlcbiAgICovXG4gIHRydXRoPzogYW55O1xuICAvKipcbiAgICog5b6956ugIGB0cnVlYCDml7bmlofmnKzvvIzvvIjpu5jorqTvvJpg5pivYO+8iVxuICAgKi9cbiAgeWVzPzogc3RyaW5nO1xuICAvKipcbiAgICog5b6956ugIGBmYWxzZWAg5pe25paH5pys77yM77yI6buY6K6k77yaYOWQpmDvvIlcbiAgICovXG4gIG5vPzogc3RyaW5nO1xuICAvKipcbiAgICog5b6956ug5pi+56S66aOO5qC8XG4gICAqIC0gYGZ1bGxgIOWbvuagh+WSjOaWh+acrFxuICAgKiAtIGBpY29uYCDlm77moIdcbiAgICogLSBgdGV4dGAg5paH5pysXG4gICAqL1xuICBtb2RlPzogWU5Nb2RlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNUSWNvbiB7XG4gIC8qKiDlm77moIfnsbvlnosgKi9cbiAgdHlwZTogc3RyaW5nO1xuICAvKiog5Zu+5qCH5Li76aKY6aOO5qC877yM6buY6K6k77yaYG91dGxpbmVgICovXG4gIHRoZW1lPzogJ291dGxpbmUnIHwgJ3R3b3RvbmUnIHwgJ2ZpbGwnO1xuICAvKiog5piv5ZCm5pyJ5peL6L2s5Yqo55S777yM6buY6K6k77yaYGZhbHNlYCAqL1xuICBzcGluPzogYm9vbGVhbjtcbiAgLyoqIOS7hemAgueUqOWPjOiJsuWbvuagh++8jOiuvue9ruWPjOiJsuWbvuagh+eahOS4u+imgeminOiJsu+8jOS7heWvueW9k+WJjSBpY29uIOeUn+aViCAqL1xuICB0d29Ub25lQ29sb3I/OiBzdHJpbmc7XG4gIC8qKiDmjIflrprmnaXoh6ogSWNvbkZvbnQg55qE5Zu+5qCH57G75Z6LICovXG4gIGljb25mb250Pzogc3RyaW5nO1xufVxuXG4vKipcbiAqIOaMiemSrumFjee9rlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFNUQ29sdW1uQnV0dG9uIHtcbiAgLyoqXG4gICAqIOaWh+acrFxuICAgKi9cbiAgdGV4dD86IHN0cmluZztcbiAgLyoqXG4gICAqIOaWh+acrCBpMThuXG4gICAqL1xuICBpMThuPzogc3RyaW5nO1xuICAvKipcbiAgICog5Zu+5qCHXG4gICAqL1xuICBpY29uPzogc3RyaW5nIHwgU1RJY29uO1xuICAvKipcbiAgICog5qC85byP5YyW5paH5pys77yM6L6D6auY6LCD55So6aKR546H77yM6K+35Yu/6L+H5aSa5aSN5p2C6K6h566X5YWN5b6X5Lqn55Sf5oCn6IO96Zeu6aKYXG4gICAqL1xuICBmb3JtYXQ/OiAocmVjb3JkOiBTVERhdGEsIGJ0bjogU1RDb2x1bW5CdXR0b24pID0+IHN0cmluZztcbiAgLyoqXG4gICAqIOaMiemSruexu+Wei1xuICAgKiAtIGBub25lYCDml6Dku7vkvZXkupLliqhcbiAgICogLSBgZGVsYCDliKDpmaTvvIzpu5jorqTlvIDlkK8gYHBvcDogdHJ1ZWBcbiAgICogLSBgbW9kYWxgIOWvueivneahhu+8jOmcgOimgeaMh+WumiBgY29tcG9uZW50YCDmiY3kvJrnlJ/mlYhcbiAgICogLSBgc3RhdGljYCDpnZnmgIHlr7nor53moYbvvIzpnIDopoHmjIflrpogYGNvbXBvbmVudGAg5omN5Lya55Sf5pWIXG4gICAqIC0gYGRyYXdlcmAg5oq95bGJ77yM6ZyA6KaB5oyH5a6aIGBjb21wb25lbnRgIOaJjeS8mueUn+aViFxuICAgKiAtIGBsaW5rYCDpk77mjqXvvIzlvZMgYGNsaWNrYCDov5Tlm57lrZfnrKbkuLLml7boh6rliqjosIPnlKggYG5hdmlnYXRlQnlVcmxgIOWvvOiIqlxuICAgKi9cbiAgdHlwZT86ICdub25lJyB8ICdkZWwnIHwgJ21vZGFsJyB8ICdzdGF0aWMnIHwgJ2RyYXdlcicgfCAnbGluayc7XG4gIC8qKlxuICAgKiDngrnlh7vlm57osINcbiAgICogLSBGdW5jdGlvblxuICAgKiAgLSBgdHlwZT1tb2RhbGAg5Y+q5Lya5Zyo5b2T5pyJ5Lyg5Zue5YC85pe25omN5Lya6Kem5Y+R5Zue6LCDXG4gICAqIC0gcmVsb2Fk77ya6YeN5paw5Yi35paw5b2T5YmN6aG1XG4gICAqIC0gbG9hZO+8mumHjeaWsOWKoOi9veaVsOaNru+8jOW5tumHjee9rumhteeggeS4uu+8mmAxYFxuICAgKi9cbiAgY2xpY2s/OiAncmVsb2FkJyB8ICdsb2FkJyB8ICgocmVjb3JkOiBTVERhdGEsIG1vZGFsPzogYW55LCBpbnN0YW5jZT86IFNUQ29tcG9uZW50KSA9PiBhbnkpO1xuICAvKipcbiAgICog5piv5ZCm6ZyA6KaB5rCU5rOh56Gu6K6k5qGGXG4gICAqL1xuICBwb3A/OiBib29sZWFuO1xuICAvKipcbiAgICog5rCU5rOh56Gu6K6k5qGG5YaF5a6577yM6buY6K6kIGDnoa7orqTliKDpmaTlkJfvvJ9gXG4gICAqL1xuICBwb3BUaXRsZT86IHN0cmluZztcbiAgLyoqXG4gICAqIOWvueivneahhuWPguaVsFxuICAgKi9cbiAgbW9kYWw/OiBTVENvbHVtbkJ1dHRvbk1vZGFsO1xuICAvKipcbiAgICog5oq95bGJ5Y+C5pWwXG4gICAqL1xuICBkcmF3ZXI/OiBTVENvbHVtbkJ1dHRvbkRyYXdlcjtcbiAgLyoqXG4gICAqIOS4i+aLieiPnOWNle+8jOW9k+WtmOWcqOaXtuS7pSBgZHJvcGRvd25gIOW9ouW8j+a4suafk1xuICAgKiAtIOWPquaUr+aMgeS4gOe6p1xuICAgKi9cbiAgY2hpbGRyZW4/OiBTVENvbHVtbkJ1dHRvbltdO1xuICAvKipcbiAgICog5p2D6ZmQ77yM562J5ZCMIGBjYW4oKWAg5Y+C5pWw5YC8XG4gICAqL1xuICBhY2w/OiBhbnk7XG4gIC8qKlxuICAgKiDmnaHku7booajovr7lvI/vvIzovoPpq5josIPnlKjpopHnjofvvIzor7fli7/ov4flpJrlpI3mnYLorqHnrpflhY3lvpfkuqfnlJ/mgKfog73pl67pophcbiAgICovXG4gIGlpZj86IChpdGVtOiBTVERhdGEsIGJ0bjogU1RDb2x1bW5CdXR0b24sIGNvbHVtbjogU1RDb2x1bW4pID0+IGJvb2xlYW47XG5cbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNUQ29sdW1uQnV0dG9uTW9kYWwgZXh0ZW5kcyBNb2RhbEhlbHBlck9wdGlvbnMge1xuICAvKipcbiAgICog5a+56K+d5qGG57uE5Lu25a+56LGh77yM5Yqh5b+F5ZyoIGBlbnRyeUNvbXBvbmVudHNgIOazqOWGjFxuICAgKi9cbiAgY29tcG9uZW50PzogYW55O1xuICAvKipcbiAgICog5a+56K+d5qGG5Y+C5pWwXG4gICAqL1xuICBwYXJhbXM/OiAocmVjb3JkOiBTVERhdGEpID0+IHt9O1xuICAvKipcbiAgICog5a+56K+d5qGG55uu5qCH57uE5Lu255qE5o6l5pS25Y+C5pWw5ZCN77yM6buY6K6k77yaYHJlY29yZGBcbiAgICovXG4gIHBhcmFtc05hbWU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1RDb2x1bW5CdXR0b25Nb2RhbENvbmZpZyB7XG4gIC8qKlxuICAgKiDmjIflrprmqKHmgIHmoYbnm67moIfnu4Tku7bnmoTmjqXmlLblj4LmlbDlkI3vvIzpu5jorqTvvJpgcmVjb3JkYFxuICAgKi9cbiAgcGFyYW1zTmFtZT86IHN0cmluZztcbiAgLyoqIOWkp+Wwj++8m+S+i+Wmgu+8mmxn44CBNjAw77yM6buY6K6k77yaYGxnYCAqL1xuICBzaXplPzogJ3NtJyB8ICdtZCcgfCAnbGcnIHwgJ3hsJyB8ICcnIHwgbnVtYmVyO1xuICAvKiog5a+56K+d5qGGIFtNb2RhbE9wdGlvbnNGb3JTZXJ2aWNlXShodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9jb21wb25lbnRzL21vZGFsL256LW1vZGFsLnR5cGUudHMpIOWPguaVsCAqL1xuICBtb2RhbE9wdGlvbnM/OiBNb2RhbE9wdGlvbnNGb3JTZXJ2aWNlO1xuICAvKiog5piv5ZCm57K+5YeG77yI6buY6K6k77yaYHRydWVg77yJ77yM6Iul6L+U5Zue5YC86Z2e56m65YC877yIYG51bGxg5oiWYHVuZGVmaW5lZGDvvInop4bkuLrmiJDlip/vvIzlkKbliJnop4bkuLrplJnor68gKi9cbiAgZXhhY3Q/OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNUQ29sdW1uQnV0dG9uRHJhd2VyIGV4dGVuZHMgRHJhd2VySGVscGVyT3B0aW9ucyB7XG4gIC8qKlxuICAgKiDmoIfpophcbiAgICovXG4gIHRpdGxlPzogc3RyaW5nO1xuICAvKipcbiAgICog5oq95bGJ57uE5Lu25a+56LGh77yM5Yqh5b+F5ZyoIGBlbnRyeUNvbXBvbmVudHNgIOazqOWGjFxuICAgKi9cbiAgY29tcG9uZW50PzogYW55O1xuICAvKipcbiAgICog5oq95bGJ5Y+C5pWwXG4gICAqL1xuICBwYXJhbXM/OiAocmVjb3JkOiBTVERhdGEpID0+IHt9O1xuICAvKipcbiAgICog5oq95bGJ55uu5qCH57uE5Lu255qE5o6l5pS25Y+C5pWw5ZCN77yM6buY6K6k77yaYHJlY29yZGBcbiAgICovXG4gIHBhcmFtc05hbWU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1RDb2x1bW5CdXR0b25EcmF3ZXJDb25maWcge1xuICAvKipcbiAgICog5oq95bGJ55uu5qCH57uE5Lu255qE5o6l5pS25Y+C5pWw5ZCN77yM6buY6K6k77yaYHJlY29yZGBcbiAgICovXG4gIHBhcmFtc05hbWU/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiDlpKflsI/vvJvkvovlpoLvvJpsZ+OAgTYwMO+8jOm7mOiupO+8mmBtZGBcbiAgICpcbiAgICogfCDnsbvlnosgfCDpu5jorqTlpKflsI8gfFxuICAgKiB8IC0tLSB8IC0tLS0tLSB8XG4gICAqIHwgYHNtYCB8IGAzMDBgIHxcbiAgICogfCBgbWRgIHwgYDYwMGAgfFxuICAgKiB8IGBsZ2AgfCBgOTAwYCB8XG4gICAqIHwgYHhsYCB8IGAxMjAwYCB8XG4gICAqXG4gICAqID4g5Lul5LiK5YC877yM5Y+v6YCa6L+H6KaG55uW55u45bqU55qETEVTU+WPguaVsOiHquihjOiwg+aVtFxuICAgKi9cbiAgc2l6ZT86ICdzbScgfCAnbWQnIHwgJ2xnJyB8ICd4bCcgfCBudW1iZXI7XG4gIC8qKlxuICAgKiDmmK/lkKbljIXlkKvlupXpg6jlt6XlhbfmnaHvvIzpu5jorqTvvJpgdHJ1ZWBcbiAgICovXG4gIGZvb3Rlcj86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDlupXpg6jlt6XlhbfmnaHpq5jluqbvvIzpu5jorqTvvJpgNTVgXG4gICAqL1xuICBmb290ZXJIZWlnaHQ/OiBudW1iZXI7XG4gIC8qKiDmir3lsYkgW056RHJhd2VyT3B0aW9uc10oaHR0cHM6Ly9uZy5hbnQuZGVzaWduL2NvbXBvbmVudHMvZHJhd2VyL3poI256ZHJhd2Vyb3B0aW9ucykg5Y+C5pWwICovXG4gIGRyYXdlck9wdGlvbnM/OiBOekRyYXdlck9wdGlvbnM7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1RSZXFSZU5hbWVUeXBlIHtcbiAgcGk/OiBzdHJpbmc7XG4gIHBzPzogc3RyaW5nO1xuICBza2lwPzogc3RyaW5nO1xuICBsaW1pdD86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTVFJlc1JlTmFtZVR5cGUge1xuICB0b3RhbD86IHN0cmluZyB8IHN0cmluZ1tdO1xuICBsaXN0Pzogc3RyaW5nIHwgc3RyaW5nW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1RFeHBvcnRPcHRpb25zIHtcbiAgX2Q/OiBhbnlbXTtcbiAgX2M/OiBTVENvbHVtbltdO1xuICAvKiog5bel5L2c5rql5ZCNICovXG4gIHNoZWV0bmFtZT86IHN0cmluZztcbiAgLyoqIOaWh+S7tuWQjSAqL1xuICBmaWxlbmFtZT86IHN0cmluZztcbiAgLyoqIHRyaWdnZXJzIHdoZW4gc2F2ZWFzICovXG4gIGNhbGxiYWNrPzogKHdiOiBhbnkpID0+IHZvaWQ7XG59XG5cbi8qKlxuICog5Y2V5o6S5bqP6KeE5YiZXG4gKiAtIOiLpeS4jeaMh+Wumu+8jOWImei/lOWbnu+8mmBjb2x1bW5OYW1lPWFzY2VuZHxkZXNjZW5kYFxuICogLSDoi6XmjIflrprvvIzliJnov5Tlm57vvJpgc29ydD1jb2x1bW5OYW1lLihhc2NlbmR8ZGVzY2VuZClgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU1RTaW5nbGVTb3J0IHtcbiAgLyoqIOivt+axguWPguaVsOWQje+8jOm7mOiupO+8mmBzb3J0YCAqL1xuICBrZXk/OiBzdHJpbmc7XG4gIC8qKiDliJflkI3kuI7nirbmgIHpl7TliIbpmpTnrKbvvIzpu5jorqTvvJpgLmAgKi9cbiAgbmFtZVNlcGFyYXRvcj86IHN0cmluZztcbn1cblxuLyoqXG4gKiDlpJrmjpLluo/nm7jlkIzmjpLluo8ga2V5IOaXtuWQiOW5tuinhOWImVxuICovXG5leHBvcnQgaW50ZXJmYWNlIFNUTXVsdGlTb3J0IHtcbiAgLyoqIOivt+axguWPguaVsOWQje+8jOm7mOiupO+8mmBzb3J0YCAqL1xuICBrZXk/OiBzdHJpbmc7XG4gIC8qKiDkuI3lkIzlsZ7mgKfpl7TliIbpmpTnrKbvvIzpu5jorqTvvJpgLWAgKi9cbiAgc2VwYXJhdG9yPzogc3RyaW5nO1xuICAvKiog5YiX5ZCN5LiO54q25oCB6Ze05YiG6ZqU56ym77yM6buY6K6k77yaYC5gICovXG4gIG5hbWVTZXBhcmF0b3I/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiDmmK/lkKblhajlsYDlpJrmjpLluo/mqKHlvI/vvIzpu5jorqTvvJpgdHJ1ZWBcbiAgICogLSBgdHJ1ZWAg6KGo56S65omA5pyJIGBzdGAg6buY6K6k5Li65aSa5o6S5bqPXG4gICAqIC0gYGZhbHNlYCDooajnpLrpnIDopoHkuLrmr4/kuKogYHN0YCDmt7vliqAgYG11bHRpU29ydGAg5omN5Lya6KeG5Li65aSa5o6S5bqP5qih5byPXG4gICAqL1xuICBnbG9iYWw/OiBib29sZWFuO1xufVxuXG4vKipcbiAqIOW+veagh+S/oeaBr1xuICovXG5leHBvcnQgaW50ZXJmYWNlIFNUQ29sdW1uQmFkZ2Uge1xuICBba2V5OiBudW1iZXJdOiBTVENvbHVtbkJhZGdlVmFsdWU7XG4gIFtrZXk6IHN0cmluZ106IFNUQ29sdW1uQmFkZ2VWYWx1ZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTVENvbHVtbkJhZGdlVmFsdWUge1xuICAvKipcbiAgICog5paH5pysXG4gICAqL1xuICB0ZXh0Pzogc3RyaW5nO1xuICAvKipcbiAgICog5b695qCH6aKc6Imy5YC8XG4gICAqL1xuICBjb2xvcj86ICdzdWNjZXNzJyB8ICdwcm9jZXNzaW5nJyB8ICdkZWZhdWx0JyB8ICdlcnJvcicgfCAnd2FybmluZyc7XG59XG5cbi8qKlxuICog5qCH562+5L+h5oGvXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU1RDb2x1bW5UYWcge1xuICBba2V5OiBudW1iZXJdOiBTVENvbHVtblRhZ1ZhbHVlO1xuICBba2V5OiBzdHJpbmddOiBTVENvbHVtblRhZ1ZhbHVlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNUQ29sdW1uVGFnVmFsdWUge1xuICAvKipcbiAgICog5paH5pysXG4gICAqL1xuICB0ZXh0Pzogc3RyaW5nO1xuICAvKipcbiAgICog6aKc6Imy5YC877yM5pSv5oyB6aKE6K6+5ZKM6Imy5YC8XG4gICAqIC0g6aKE6K6+77yaZ2Vla2JsdWUsYmx1ZSxwdXJwbGUsc3VjY2VzcyxyZWQsdm9sY2FubyxvcmFuZ2UsZ29sZCxsaW1lLGdyZWVuLGN5YW5cbiAgICogLSDoibLlgLzvvJojZjUwLCNmZjBcbiAgICovXG4gIGNvbG9yPzpcbiAgICB8ICdnZWVrYmx1ZSdcbiAgICB8ICdibHVlJ1xuICAgIHwgJ3B1cnBsZSdcbiAgICB8ICdzdWNjZXNzJ1xuICAgIHwgJ3JlZCdcbiAgICB8ICd2b2xjYW5vJ1xuICAgIHwgJ29yYW5nZSdcbiAgICB8ICdnb2xkJ1xuICAgIHwgJ2xpbWUnXG4gICAgfCAnZ3JlZW4nXG4gICAgfCAnY3lhbidcbiAgICB8IHN0cmluZztcbn1cblxuZXhwb3J0IHR5cGUgU1RDaGFuZ2VUeXBlID0gJ3BpJyB8ICdwcycgfCAnY2hlY2tib3gnIHwgJ3JhZGlvJyB8ICdzb3J0JyB8ICdmaWx0ZXInIHwgJ2NsaWNrJyB8ICdkYmxDbGljaycgfCAnZXhwYW5kJztcblxuLyoqXG4gKiDlm57osIPmlbDmja5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTVENoYW5nZSB7XG4gIC8qKlxuICAgKiDlm57osIPnsbvlnotcbiAgICovXG4gIHR5cGU6IFNUQ2hhbmdlVHlwZTtcbiAgLyoqXG4gICAqIOW9k+WJjemhteeggVxuICAgKi9cbiAgcGk6IG51bWJlcjtcbiAgLyoqXG4gICAqIOavj+mhteaVsOmHj1xuICAgKi9cbiAgcHM6IG51bWJlcjtcbiAgLyoqXG4gICAqIOaVsOaNruaAu+mHj1xuICAgKi9cbiAgdG90YWw6IG51bWJlcjtcbiAgLyoqXG4gICAqIGBjaGVja2JveGAg5Y+C5pWwXG4gICAqL1xuICBjaGVja2JveD86IFNURGF0YVtdO1xuICAvKipcbiAgICogYHJhZGlvYCDlj4LmlbBcbiAgICovXG4gIHJhZGlvPzogU1REYXRhO1xuICAvKipcbiAgICog5o6S5bqP5Y+C5pWwXG4gICAqL1xuICBzb3J0PzogU1RDaGFuZ2VTb3J0O1xuICAvKipcbiAgICog6L+H5ruk5Y+C5pWwXG4gICAqL1xuICBmaWx0ZXI/OiBTVENvbHVtbjtcbiAgLyoqXG4gICAqIOihjOeCueWHu+aIluWPjOWHu+WPguaVsFxuICAgKi9cbiAgY2xpY2s/OiBTVENoYW5nZVJvd0NsaWNrO1xuICAvKipcbiAgICogYGV4cGFuZGAg5Y+C5pWwXG4gICAqL1xuICBleHBhbmQ/OiBTVERhdGE7XG59XG5cbi8qKiDooYzljZXlh7vlj4LmlbAgKi9cbmV4cG9ydCBpbnRlcmZhY2UgU1RDaGFuZ2VTb3J0IHtcbiAgdmFsdWU/OiAnYXNjZW5kJyB8ICdkZXNjZW5kJztcbiAgbWFwPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbiAgY29sdW1uPzogU1RDb2x1bW47XG59XG5cbi8qKiDooYzljZXlh7vlj4LmlbAgKi9cbmV4cG9ydCBpbnRlcmZhY2UgU1RDaGFuZ2VSb3dDbGljayB7XG4gIGU/OiBFdmVudDtcbiAgaXRlbT86IFNURGF0YTtcbiAgaW5kZXg/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1RFcnJvciB7XG4gIHR5cGU/OiAncmVxJztcbiAgZXJyb3I/OiBhbnk7XG59XG5cbmV4cG9ydCB0eXBlIFNUUm93Q2xhc3NOYW1lID0gKHJlY29yZDogU1REYXRhLCBpbmRleDogbnVtYmVyKSA9PiBzdHJpbmc7XG4iXX0=