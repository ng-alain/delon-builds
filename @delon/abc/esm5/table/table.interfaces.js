/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function STReq() { }
if (false) {
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
    /* Skipping unhandled member: [key: string]: any;*/
}
/**
 * 列描述
 * @record
 */
export function STColumn() { }
if (false) {
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
     * **注意：** 固定列不支持百分比
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
     * @type {?|undefined}
     */
    STColumn.prototype.noIndex;
    /* Skipping unhandled member: [key: string]: any;*/
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuaW50ZXJmYWNlcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hYmMvdGFibGUvIiwic291cmNlcyI6WyJ0YWJsZS5pbnRlcmZhY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSwyQkFxQkM7Ozs7Ozs7SUFoQkMsdUJBQWE7Ozs7O0lBRWIsdUJBQWdCOzs7OztJQUVoQixxQkFBVzs7Ozs7SUFFWCx3QkFBYzs7Ozs7O0lBS2QsdUJBQXlCOzs7OztJQUl6QiwwQkFBb0I7Ozs7O0FBR3RCLG1DQUdDOzs7Ozs7SUFEQyw4QkFBZ0I7Ozs7O0FBR2xCLDJCQVVDOzs7Ozs7O0lBTEMsdUJBQXlCOzs7OztJQUl6Qix3QkFBdUM7Ozs7O0FBR3pDLDRCQXFEQzs7Ozs7Ozs7SUEvQ0MsdUJBQWdCOzs7OztJQUloQiw2QkFBc0I7Ozs7O0lBSXRCLDJCQUF3Qzs7Ozs7SUFJeEMsc0JBQWU7Ozs7O0lBSWYsMEJBQW1COzs7OztJQUluQiwyQkFBcUI7Ozs7O0lBSXJCLGlDQUEwQjs7Ozs7Ozs7OztJQVMxQix1QkFBeUI7Ozs7OztJQUt6Qiw0QkFBcUI7Ozs7O0lBSXJCLHVCQUFnQjs7Ozs7SUFJaEIsNkJBQXFCOzs7Ozs7QUFNdkIsNEJBZUM7Ozs7OztJQVhDLHlCQUFrQjs7Ozs7SUFJbEIsMEJBQW1COzs7OztJQUluQix3QkFBaUI7Ozs7Ozs7QUFRbkIsOEJBZ0pDOzs7Ozs7SUE1SUMseUJBQWM7Ozs7O0lBSWQsd0JBQWM7Ozs7Ozs7O0lBT2QseUJBQTBCOzs7Ozs7Ozs7Ozs7Ozs7O0lBZTFCLHdCQVdTOzs7OztJQUlULHlCQUF3RDs7Ozs7SUFJeEQsMkJBQTJCOzs7Ozs7Ozs7SUFRM0IsMEJBQWdCOzs7Ozs7Ozs7SUFRaEIsK0JBQXFCOzs7Ozs7O0lBTXJCLHlCQUF3Qjs7Ozs7OztJQU14Qix3QkFBb0M7Ozs7O0lBSXBDLDBCQUF3Qjs7Ozs7SUFJeEIsMEJBQWtCOzs7OztJQUlsQiw4QkFBaUM7Ozs7Ozs7OztJQVFqQyw2QkFBbUI7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Ozs7SUFJbkIsc0JBQVc7Ozs7O0lBSVgsc0JBQVc7Ozs7O0lBSVgseUJBQWM7Ozs7O0lBSWQsNEJBQW9COzs7OztJQUlwQix5QkFBZTs7Ozs7SUFJZix3QkFBb0I7Ozs7O0lBSXBCLDBCQUFrQjs7Ozs7SUFJbEIseUJBQXlCOzs7Ozs7QUFJM0Isa0NBSUM7OztJQUhDLDZCQUE2Qjs7SUFDN0IsMkJBQWdDOztJQUNoQyw4QkFBa0I7Ozs7OztBQUlwQixzQ0FJQzs7O0lBSEMsNkJBQVU7O0lBQ1YsZ0NBQWM7O0lBQ2QsaUNBQWU7Ozs7O0FBR2pCLDZCQUdDOzs7SUFGQyx1QkFBYTs7SUFDYix3QkFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNUQ29tcG9uZW50IH0gZnJvbSAnLi90YWJsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTW9kYWxIZWxwZXJPcHRpb25zLCBEcmF3ZXJIZWxwZXJPcHRpb25zIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcbmltcG9ydCB7IE1vZGFsT3B0aW9uc0ZvclNlcnZpY2UsIE56RHJhd2VyT3B0aW9ucyB9IGZyb20gJ25nLXpvcnJvLWFudGQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNUUmVxIHtcbiAgLyoqXG4gICAqIOmineWkluivt+axguWPguaVsO+8jOm7mOiupOiHquWKqOmZhOWKoCBgcGlg44CBYHBzYCDoh7NVUkxcbiAgICogLSBgeyBzdGF0dXM6ICduZXcnIH1gID0+IGB1cmw/cGk9MSZwcz0xMCZzdGF0dXM9bmV3YFxuICAgKi9cbiAgcGFyYW1zPzogYW55O1xuICAvKiog6K+35rGC5pa55rOV77yM6buY6K6k77yaYEdFVGAgKi9cbiAgbWV0aG9kPzogc3RyaW5nO1xuICAvKiog6K+35rGC5L2TIGBib2R5YCAqL1xuICBib2R5PzogYW55O1xuICAvKiog6K+35rGC5L2TIGBIZWFkZXJgICovXG4gIGhlYWRlcnM/OiBhbnk7XG4gIC8qKlxuICAgKiDph43lkb3lkI3lj4LmlbAgYHBpYOOAgWBwc2DvvIzpu5jorqTvvJpgeyBwaTogJ3BpJywgcHM6ICdwcycgfWBcbiAgICogLSBgeyBwaTogJ1BhZ2UnIH1gID0+IGBwaWAg5Lya6KKr5pu/5o2i5oiQIFBhZ2VcbiAgICovXG4gIHJlTmFtZT86IFNUUmVxUmVOYW1lVHlwZTtcbiAgLyoqXG4gICAqIOaYr+WQpuWwhuivt+axguaJgOacieWPguaVsOaVsOaNrumDveaUvuWFpSBgYm9keWAg5b2T5Lit77yIYHVybGAg5Zyw5Z2A5pys6Lqr5Y+C5pWw6Zmk5aSW77yJ77yM5LuF5b2TIGBtZXRob2Q6ICdQT1NUJ2Ag5pe25pyJ5pWI77yM6buY6K6k77yaYGZhbHNlYFxuICAgKi9cbiAgYWxsSW5Cb2R5PzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTVExvYWRPcHRpb25zIHtcbiAgLyoqIOaYr+WQpuWQiOW5tu+8jOm7mOiupO+8mmBmYWxzZWAgKi9cbiAgbWVyZ2U/OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNUUmVzIHtcbiAgLyoqXG4gICAqIOmHjeWRveWQjei/lOWbnuWPguaVsCBgdG90YWxg44CBYGxpc3RgXG4gICAqIC0gYHsgdG90YWw6ICdUb3RhbCcgfWAgPT4gVG90YWwg5Lya6KKr5b2T5L2cIGB0b3RhbGBcbiAgICovXG4gIHJlTmFtZT86IFNUUmVzUmVOYW1lVHlwZTtcbiAgLyoqXG4gICAqIOaVsOaNrumihOWkhOeQhlxuICAgKi9cbiAgcHJvY2Vzcz86IChkYXRhOiBTVERhdGFbXSkgPT4gU1REYXRhW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1RQYWdlIHtcbiAgLyoqXG4gICAqIOWJjeerr+WIhumhte+8jOW9kyBgZGF0YWAg5Li6YGFueVtdYCDmiJYgYE9ic2VydmFibGU8YW55W10+YCDmnInmlYjvvIzpu5jorqTvvJpgdHJ1ZWBcbiAgICogLSBgdHJ1ZWAg55SxIGBzdGAg5qC55o2uIGBkYXRhYCDplb/luqblj5fmjqfliIbpobXvvIzljIXmi6zvvJrmjpLluo/jgIHov4fmu6TnrYlcbiAgICogLSBgZmFsc2VgIOeUseeUqOaIt+mAmui/hyBgdG90YWxgIOWSjCBgZGF0YWAg5Y+C5pWw5Y+X5o6n5YiG6aG177yM5bm257u05oqkIGAoY2hhbmdlKWAg5b2T5YiG6aG15Y+Y5pu05pe26YeN5paw5Yqg6L295pWw5o2uXG4gICAqL1xuICBmcm9udD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDlkI7nq6/liIbpobXmmK/lkKbph4fnlKhgMGDln7rntKLlvJXvvIzlj6rlnKhgZGF0YWDnsbvlnovkuLpgc3RyaW5nYOaXtuacieaViO+8jOm7mOiupO+8mmBmYWxzZWBcbiAgICovXG4gIHplcm9JbmRleGVkPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIOWIhumhteaWueWQke+8jOm7mOiupO+8mmByaWdodGBcbiAgICovXG4gIHBsYWNlbWVudD86ICdsZWZ0JyB8ICdjZW50ZXInIHwgJ3JpZ2h0JztcbiAgLyoqXG4gICAqIOaYr+WQpuaYvuekuuWIhumhteWZqO+8jOm7mOiupO+8mmB0cnVlYFxuICAgKi9cbiAgc2hvdz86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDmmK/lkKbmmL7npLrliIbpobXlmajkuK3mlLnlj5jpobXmlbDvvIzpu5jorqTvvJpgZmFsc2VgXG4gICAqL1xuICBzaG93U2l6ZT86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDliIbpobXlmajkuK3mr4/pobXmmL7npLrmnaHnm67mlbDkuIvmi4nmoYblgLzvvIzpu5jorqTvvJpgWzEwLCAyMCwgMzAsIDQwLCA1MF1gXG4gICAqL1xuICBwYWdlU2l6ZXM/OiBudW1iZXJbXTtcbiAgLyoqXG4gICAqIOaYr+WQpuaYvuekuuWIhumhteWZqOS4reW/q+mAn+i3s+i9rO+8jOm7mOiupO+8mmBmYWxzZWBcbiAgICovXG4gIHNob3dRdWlja0p1bXBlcj86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDmmK/lkKbmmL7npLrmgLvmlbDmja7ph49cbiAgICogLSBgYm9vbGVhbmAg57G75Z6L5pi+56S65LiO5ZCm77yM6buY6K6k5qih5p2/77yaYOWFsSB7e3RvdGFsfX0g5p2hYFxuICAgKiAtIGBzdHJpbmdgIOiHquWumuS5ieaooeadv++8jOaooeadv+WPmOmHj++8mlxuICAgKiAgLSBge3t0b3RhbH19YCDooajnpLrmlbDmja7mgLvph49cbiAgICogIC0gYHt7cmFuZ2VbMF19fWAg6KGo56S65b2T5YmN6aG15byA5aeL5pWw6YeP5YC8XG4gICAqICAtIGB7e3JhbmdlWzFdfX1gIOihqOekuuW9k+WJjemhtee7k+adn+aVsOmHj+WAvFxuICAgKi9cbiAgdG90YWw/OiBzdHJpbmcgfCBib29sZWFuO1xuICAvKipcbiAgICog5pWw5o2u5Y+Y5pu05ZCO5piv5ZCm5L+d55WZ5Zyo5pWw5o2u5Y+Y5pu05YmN55qE6aG156CB77yM6buY6K6k77yaYHRydWVgXG4gICAqIEBkZXByZWNhdGVkXG4gICAqL1xuICBpbmRleFJlc2V0PzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIOWIh+aNouWIhumhteaXtui/lOWbnumhtumDqO+8jOm7mOiupO+8mmB0cnVlYFxuICAgKi9cbiAgdG9Ub3A/OiBib29sZWFuO1xuICAvKipcbiAgICog6L+U5Zue6aG26YOo5YGP56e75YC877yM6buY6K6k77yaYDEwMGBcbiAgICovXG4gIHRvVG9wT2Zmc2V0PzogbnVtYmVyO1xufVxuXG4vKipcbiAqIOaVsOaNrua6kFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFNURGF0YSB7XG4gIC8qKlxuICAgKiDpgInmi6nmoYbmiJbljZXpgInmoYbnirbmgIHlgLxcbiAgICovXG4gIGNoZWNrZWQ/OiBib29sZWFuO1xuICAvKipcbiAgICog6YCJ5oup5qGG5oiW5Y2V6YCJ5qGGIGBkaXNhYmxlZGAg5YC8XG4gICAqL1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDmmK/lkKblsZXlvIDnirbmgIFcbiAgICovXG4gIGV4cGFuZD86IGJvb2xlYW47XG5cbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG4vKipcbiAqIOWIl+aPj+i/sFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFNUQ29sdW1uIHtcbiAgLyoqXG4gICAqIOWIl+agh+mimFxuICAgKi9cbiAgdGl0bGU6IHN0cmluZztcbiAgLyoqXG4gICAqIOWIl+agh+mimCBpMThuXG4gICAqL1xuICBpMThuPzogc3RyaW5nO1xuICAvKipcbiAgICog5YiX5pWw5o2u5Zyo5pWw5o2u6aG55Lit5a+55bqU55qEIGtlee+8jOaUr+aMgSBgYS5iLmNgIOeahOW1jOWll+WGmeazle+8jOS+i+Wmgu+8mlxuICAgKiAtIGBpZGBcbiAgICogLSBgcHJpY2UubWFya2V0YFxuICAgKiAtIGBbICdwcmljZScsICdtYXJrZXQnIF1gXG4gICAqL1xuICBpbmRleD86IHN0cmluZyB8IHN0cmluZ1tdO1xuICAvKipcbiAgICog57G75Z6LXG4gICAqIC0gYG5vYCDooYzlj7fvvIzorqHnrpfop4TliJnvvJpgaW5kZXggKyBub0luZGV4YFxuICAgKiAtIGBjaGVja2JveGAg5aSa6YCJXG4gICAqIC0gYHJhZGlvYCDljZXpgIlcbiAgICogLSBgbGlua2Ag6ZO+5o6l77yM5Yqh5b+F5oyH5a6aIGBjbGlja2BcbiAgICogLSBgYmFkZ2VgIFvlvr3moIddKGh0dHBzOi8vbmcuYW50LmRlc2lnbi9jb21wb25lbnRzL2JhZGdlL3poKe+8jOWKoeW/heaMh+WumiBgYmFkZ2VgIOWPguaVsOmFjee9ruW+veagh+WvueW6lOWAvFxuICAgKiAtIGB0YWdgIFvmoIfnrb5dKGh0dHBzOi8vbmcuYW50LmRlc2lnbi9jb21wb25lbnRzL3RhZy96aCnvvIzliqHlv4XmjIflrpogYHRhZ2Ag5Y+C5pWw6YWN572u5qCH562+5a+55bqU5YC8XG4gICAqIC0gYGltZ2Ag5Zu+54mH5LiU5bGF5LitKOiLpSBgY2xhc3NOYW1lYCDlrZjlnKjliJnkvJjlhYgpXG4gICAqIC0gYG51bWJlcmAg5pWw5a2X5LiU5bGF5Y+zKOiLpSBgY2xhc3NOYW1lYCDlrZjlnKjliJnkvJjlhYgpXG4gICAqIC0gYGN1cnJlbmN5YCDotKfluIHkuJTlsYXlj7Mo6IulIGBjbGFzc05hbWVgIOWtmOWcqOWImeS8mOWFiClcbiAgICogLSBgZGF0ZWAg5pel5pyf5qC85byP5LiU5bGF5LitKOiLpSBgY2xhc3NOYW1lYCDlrZjlnKjliJnkvJjlhYgp77yM5L2/55SoIGBkYXRlRm9ybWF0YCDoh6rlrprkuYnmoLzlvI9cbiAgICogLSBgeW5gIOWwhmBib29sZWFuYOexu+Wei+W+veeroOWMliBbZG9jdW1lbnRdKGh0dHBzOi8vbmctYWxhaW4uY29tL2RvY3MvZGF0YS1yZW5kZXIjeW4pXG4gICAqL1xuICB0eXBlPzpcbiAgICB8ICdjaGVja2JveCdcbiAgICB8ICdsaW5rJ1xuICAgIHwgJ2JhZGdlJ1xuICAgIHwgJ3RhZydcbiAgICB8ICdyYWRpbydcbiAgICB8ICdpbWcnXG4gICAgfCAnY3VycmVuY3knXG4gICAgfCAnbnVtYmVyJ1xuICAgIHwgJ2RhdGUnXG4gICAgfCAneW4nXG4gICAgfCAnbm8nO1xuICAvKipcbiAgICog6ZO+5o6l5Zue6LCD77yM6Iul6L+U5Zue5LiA5Liq5a2X56ym5Liy6KGo56S65a+86IiqVVJM5Lya6Ieq5Yqo6Kem5Y+RIGByb3V0ZXIubmF2aWdhdGVCeVVybGBcbiAgICovXG4gIGNsaWNrPzogKHJlY29yZDogU1REYXRhLCBpbnN0YW5jZT86IFNUQ29tcG9uZW50KSA9PiBhbnk7XG4gIC8qKlxuICAgKiDmjInpkq7nu4RcbiAgICovXG4gIGJ1dHRvbnM/OiBTVENvbHVtbkJ1dHRvbltdO1xuICAvKipcbiAgICog6Ieq5a6a5LmJ5riy5p+TSURcbiAgICogQGV4YW1wbGVcbiAgICogPG5nLXRlbXBsYXRlIHN0LXJvdz1cImN1c3RvbVwiIGxldC1pdGVtIGxldC1pbmRleD1cImluZGV4XCIgbGV0LWNvbHVtbj1cImNvbHVtblwiPlxuICAgKiAge3sgYy50aXRsZSB9fVxuICAgKiA8L25nLXRlbXBsYXRlPlxuICAgKi9cbiAgcmVuZGVyPzogc3RyaW5nO1xuICAvKipcbiAgICog5qCH6aKY6Ieq5a6a5LmJ5riy5p+TSURcbiAgICogQGV4YW1wbGVcbiAgICogPG5nLXRlbXBsYXRlIHN0LXJvdz1cImN1c3RvbVwiIHR5cGU9XCJ0aXRsZVwiIGxldC1jPlxuICAgKiAge3sgaXRlbSB8IGpzb24gfX1cbiAgICogPC9uZy10ZW1wbGF0ZT5cbiAgICovXG4gIHJlbmRlclRpdGxlPzogc3RyaW5nO1xuICAvKipcbiAgICog5YiX5a6977yI5pWw5a2X5Z6L6KGo56S6IGBweGAg5YC877yJ77yM5L6L5aaC77yaYDEwMGDjgIFgMTAlYOOAgWAxMDBweGBcbiAgICpcbiAgICogKirms6jmhI/vvJoqKiDlm7rlrprliJfkuI3mlK/mjIHnmb7liIbmr5RcbiAgICovXG4gIHdpZHRoPzogc3RyaW5nIHwgbnVtYmVyO1xuICAvKipcbiAgICog5o6S5bqP6YWN572u6aG577yM6L+c56iL5pWw5o2u6YWN572uKirkvJjlhYgqKuinhOWIme+8mlxuICAgKiAtIGB0cnVlYCDooajnpLrlhYHorrjmjpLluo9cbiAgICogLSBgc3RyaW5nYCDooajnpLrov5znqIvmlbDmja7mjpLluo/nm7jlr7nlupQgYGtleWAg5YC8XG4gICAqL1xuICBzb3J0PzogdHJ1ZSB8IHN0cmluZyB8IFNUQ29sdW1uU29ydDtcbiAgLyoqXG4gICAqIOi/h+a7pOmFjee9rumhuVxuICAgKi9cbiAgZmlsdGVyPzogU1RDb2x1bW5GaWx0ZXI7XG4gIC8qKlxuICAgKiDmoLzlvI/ljJbliJflgLxcbiAgICovXG4gIGZvcm1hdD86IEZ1bmN0aW9uO1xuICAvKipcbiAgICog6Ieq5a6a5LmJ5YWoL+WPjemAiemAieaLqemhuVxuICAgKi9cbiAgc2VsZWN0aW9ucz86IFNUQ29sdW1uU2VsZWN0aW9uW107XG4gIC8qKlxuICAgKiDliJcgYGNsYXNzYCDlsZ7mgKflgLzvvIjms6jvvJrml6DpobsgYC5gIOeCue+8ie+8jOS+i+Wmgu+8mlxuICAgKiAtIGB0ZXh0LWNlbnRlcmAg5bGF5LitXG4gICAqIC0gYHRleHQtcmlnaHRgIOWxheWPs1xuICAgKiAtIGB0ZXh0LXN1Y2Nlc3NgIOaIkOWKn+iJslxuICAgKiAtIGB0ZXh0LWRhbmdlcmAg5byC5bi46ImyXG4gICAqL1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiDlkIjlubbliJdcbiAgICovXG4gIGNvbFNwYW4/OiBudW1iZXI7XG4gIC8qKlxuICAgKiDmlbDlrZfmoLzlvI/vvIxgdHlwZT1udW1iZXJgIOacieaViFxuICAgKi9cbiAgbnVtYmVyRGlnaXRzPzogc3RyaW5nO1xuICAvKipcbiAgICog5pel5pyf5qC85byP77yMYHR5cGU9ZGF0ZWAg5pyJ5pWI77yM77yI6buY6K6k77yaYFlZWVktTU0tREQgSEg6bW1g77yJXG4gICAqL1xuICBkYXRlRm9ybWF0Pzogc3RyaW5nO1xuICAvKipcbiAgICog5b2TIGB0eXBlPXluYCDmnInmlYhcbiAgICovXG4gIHluPzogU1RDb2x1bW5ZbjtcbiAgLyoqXG4gICAqIOaYr+WQpuWFgeiuuOWvvOWHuu+8jOm7mOiupCBgdHJ1ZWBcbiAgICovXG4gIGV4cG9ydGVkPzogYm9vbGVhbjtcbiAgLyoqIOadg+mZkO+8jOetieWQjCBgY2FuKClgIOWPguaVsOWAvCAqL1xuICBhY2w/OiBhbnk7XG4gIC8qKiDlvZPkuI3lrZjlnKjmlbDmja7ml7bku6Xpu5jorqTlgLzmm7/ku6MgKi9cbiAgZGVmYXVsdD86IHN0cmluZztcbiAgLyoqXG4gICAqIOWbuuWumuWJjeWQjuWIl++8jOW9k+aMh+WumuaXtuWKoeW/heaMh+WumiBgd2lkdGhgIOWQpuWImeinhuS4uuaXoOaViO+8jOacieiLpeW5siAqKuazqOaEj++8mioqIOmhue+8mlxuICAgKlxuICAgKiAtIOiLpeWIl+WktOS4juWGheWuueS4jeWvuem9kOaIluWHuueOsOWIl+mHjeWkje+8jOivt+aMh+WumuWIl+eahOWuveW6piBgd2lkdGhgXG4gICAqIC0g5bu66K6u5oyH5a6aIGBzY3JvbGwueGAg5Li65aSn5LqO6KGo5qC85a695bqm55qE5Zu65a6a5YC85oiW55m+5YiG5q+U44CC5rOo5oSP77yM5LiU6Z2e5Zu65a6a5YiX5a695bqm5LmL5ZKM5LiN6KaB6LaF6L+HIGBzY3JvbGwueGBcbiAgICovXG4gIGZpeGVkPzogJ2xlZnQnIHwgJ3JpZ2h0JztcbiAgLyoqXG4gICAqIOW+veagh+mFjee9rumhuVxuICAgKi9cbiAgYmFkZ2U/OiBTVENvbHVtbkJhZGdlO1xuICAvKipcbiAgICog5qCH562+6YWN572u6aG5XG4gICAqL1xuICB0YWc/OiBTVENvbHVtblRhZztcbiAgLyoqXG4gICAqIOihjOWPt+e0ouW8le+8jOm7mOiupO+8mmAxYFxuICAgKiAtIOiuoeeul+inhOWImeS4uu+8mmBpbmRleCArIG5vSW5kZXhgXG4gICAqL1xuICBub0luZGV4PzogbnVtYmVyO1xuXG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTVENvbHVtblNvcnQge1xuICAvKipcbiAgICog5o6S5bqP55qE6buY6K6k5Y+X5o6n5bGe5oCnXG4gICAqL1xuICBkZWZhdWx0PzogJ2FzY2VuZCcgfCAnZGVzY2VuZCc7XG4gIC8qKlxuICAgKiDmnKzlnLDmlbDmja7nmoTmjpLluo/lh73mlbDvvIzkvb/nlKjkuIDkuKrlh73mlbAo5Y+C6ICDIFtBcnJheS5zb3J0XShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9BcnJheS9zb3J0KSDnmoQgY29tcGFyZUZ1bmN0aW9uKVxuICAgKi9cbiAgY29tcGFyZT86IChhOiBTVERhdGEsIGI6IFNURGF0YSkgPT4gbnVtYmVyO1xuICAvKipcbiAgICog6L+c56iL5pWw5o2u55qE5o6S5bqP5pe25ZCO56uv55u45a+55bqU55qES0VZ77yM6buY6K6k5L2/55SoIGBpbmRleGAg5bGe5oCnXG4gICAqIC0g6IulIGBtdWx0aVNvcnQ6IGZhbHNlYCDml7bvvJpga2V5OiAnbmFtZScgPT4gP25hbWU9MSZwaT0xYFxuICAgKiAtIOiLpSBgbXVsdGlTb3J0OiB0cnVlYCDlhYHorrjlpJrkuKrmjpLluo8ga2V5IOWtmOWcqO+8jOaIluS9v+eUqCBgU1RNdWx0aVNvcnRgIOaMh+WumuWkmuWIl+aOkuW6j2tleeWQiOW5tuinhOWImVxuICAgKi9cbiAga2V5Pzogc3RyaW5nO1xuICAvKipcbiAgICog6L+c56iL5pWw5o2u55qE5o6S5bqP5pe25ZCO56uv55u45a+55bqU55qEVkFMVUVcbiAgICogLSBgeyBhc2NlbmQ6ICcwJywgZGVzY2VuZDogJzEnIH1gIOe7k+aenCBgP25hbWU9MSZwaT0xYFxuICAgKiAtIGB7IGFzY2VuZDogJ2FzYycsIGRlc2NlbmQ6ICdkZXNjJyB9YCDnu5PmnpwgYD9uYW1lPWRlc2MmcGk9MWBcbiAgICovXG4gIHJlTmFtZT86IHsgYXNjZW5kPzogc3RyaW5nOyBkZXNjZW5kPzogc3RyaW5nIH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1RDb2x1bW5GaWx0ZXIge1xuICAvKipcbiAgICog6KGo5aS055qE562b6YCJ6I+c5Y2V6aG577yM6Iez5bCR5LiA6aG55omN5Lya55Sf5pWIXG4gICAqL1xuICBtZW51czogU1RDb2x1bW5GaWx0ZXJNZW51W107XG4gIC8qKlxuICAgKiDmnKzlnLDmlbDmja7nmoTnrZvpgInlh73mlbBcbiAgICovXG4gIGZuPzogKGZpbHRlcjogU1RDb2x1bW5GaWx0ZXJNZW51LCByZWNvcmQ6IFNURGF0YSkgPT4gYm9vbGVhbjtcbiAgLyoqXG4gICAqIOagh+ivhuaVsOaNruaYr+WQpuW3sui/h+a7pO+8jOetm+mAieWbvuagh+S8mumrmOS6rlxuICAgKi9cbiAgZGVmYXVsdD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDoh6rlrprkuYkgZmlsdGVyIOWbvuagh++8jOm7mOiupCBgZmlsdGVyYFxuICAgKi9cbiAgaWNvbj86IHN0cmluZztcbiAgLyoqXG4gICAqIOehruiupOaMiemSruaWh+acrO+8jOm7mOiupCBg56Gu6K6kYFxuICAgKi9cbiAgY29uZmlybVRleHQ/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiDmuIXpmaTmjInpkq7mlofmnKzvvIzpu5jorqQgYOmHjee9rmBcbiAgICovXG4gIGNsZWFyVGV4dD86IHN0cmluZztcbiAgLyoqXG4gICAqIOaYr+WQpuWkmumAie+8jOm7mOiupCBgdHJ1ZWBcbiAgICovXG4gIG11bHRpcGxlPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIOi/nOeoi+aVsOaNrueahOi/h+a7pOaXtuWQjuerr+ebuOWvueW6lOeahEtFWe+8jOm7mOiupOS9v+eUqCBgaW5kZXhgIOWxnuaAp1xuICAgKiBga2V5OiAnbmFtZSdgIOe7k+aenCBgP25hbWU9MSZwaT0xYFxuICAgKi9cbiAga2V5Pzogc3RyaW5nO1xuICAvKipcbiAgICog6L+c56iL5pWw5o2u55qE6L+H5ruk5pe25ZCO56uv55u45a+55bqU55qEVkFMVUVcbiAgICogLSDpu5jorqTlvZMgYG11bHRpcGxlOiB0cnVlYCDml7bku6Xoi7HmlofpgJflj7fmi7zmjqXnmoTlrZfnrKbkuLJcbiAgICogQHJldHVybiDov5Tlm57kuLogT2JqZWN0IOWvueixoVxuICAgKi9cbiAgcmVOYW1lPzogKGxpc3Q6IFNUQ29sdW1uRmlsdGVyTWVudVtdLCBjb2w6IFNUQ29sdW1uKSA9PiBPYmplY3Q7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1RDb2x1bW5GaWx0ZXJNZW51IHtcbiAgLyoqXG4gICAqIOaWh+acrFxuICAgKi9cbiAgdGV4dDogc3RyaW5nO1xuICAvKipcbiAgICog5YC8XG4gICAqL1xuICB2YWx1ZT86IGFueTtcbiAgLyoqXG4gICAqIOaYr+WQpumAieS4rVxuICAgKi9cbiAgY2hlY2tlZD86IGJvb2xlYW47XG4gIC8qKiDmnYPpmZDvvIznrYnlkIwgYGNhbigpYCDlj4LmlbDlgLwgKi9cbiAgYWNsPzogYW55O1xuXG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTVENvbHVtblNlbGVjdGlvbiB7XG4gIC8qKlxuICAgKiDpgInmi6npobnmmL7npLrnmoTmloflrZdcbiAgICovXG4gIHRleHQ6IHN0cmluZztcbiAgLyoqXG4gICAqIOmAieaLqemhueeCueWHu+Wbnuiwg++8jOWFgeiuuOWvueWPguaVsCBgZGF0YS5jaGVja2VkYCDov5vooYzmk43kvZxcbiAgICovXG4gIHNlbGVjdDogKGRhdGE6IFNURGF0YVtdKSA9PiB2b2lkO1xuICAvKiog5p2D6ZmQ77yM562J5ZCMIGBjYW4oKWAg5Y+C5pWw5YC8ICovXG4gIGFjbD86IGFueTtcbn1cblxuLyoqIOW9kyBgdHlwZT15bmAg5pyJ5pWIICovXG5leHBvcnQgaW50ZXJmYWNlIFNUQ29sdW1uWW4ge1xuICAvKipcbiAgICog55yf5YC85p2h5Lu277yM77yI6buY6K6k77yaYHRydWVg77yJXG4gICAqL1xuICB0cnV0aD86IGFueTtcbiAgLyoqXG4gICAqIOW+veeroCBgdHJ1ZWAg5pe25paH5pys77yM77yI6buY6K6k77yaYOaYr2DvvIlcbiAgICovXG4gIHllcz86IHN0cmluZztcbiAgLyoqXG4gICAqIOW+veeroCBgZmFsc2VgIOaXtuaWh+acrO+8jO+8iOm7mOiupO+8mmDlkKZg77yJXG4gICAqL1xuICBubz86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTVEljb24ge1xuICAvKiog5Zu+5qCH57G75Z6LICovXG4gIHR5cGU6IHN0cmluZztcbiAgLyoqIOWbvuagh+S4u+mimOmjjuagvO+8jOm7mOiupO+8mmBvdXRsaW5lYCAqL1xuICB0aGVtZT86ICdvdXRsaW5lJyB8ICd0d290b25lJyB8ICdmaWxsJztcbiAgLyoqIOaYr+WQpuacieaXi+i9rOWKqOeUu++8jOm7mOiupO+8mmBmYWxzZWAgKi9cbiAgc3Bpbj86IGJvb2xlYW47XG4gIC8qKiDku4XpgILnlKjlj4zoibLlm77moIfvvIzorr7nva7lj4zoibLlm77moIfnmoTkuLvopoHpopzoibLvvIzku4Xlr7nlvZPliY0gaWNvbiDnlJ/mlYggKi9cbiAgdHdvVG9uZUNvbG9yPzogc3RyaW5nO1xuICAvKiog5oyH5a6a5p2l6IeqIEljb25Gb250IOeahOWbvuagh+exu+WeiyAqL1xuICBpY29uZm9udD86IHN0cmluZztcbn1cblxuLyoqXG4gKiDmjInpkq7phY3nva5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTVENvbHVtbkJ1dHRvbiB7XG4gIC8qKlxuICAgKiDmlofmnKxcbiAgICovXG4gIHRleHQ/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiDmlofmnKwgaTE4blxuICAgKi9cbiAgaTE4bj86IHN0cmluZztcbiAgLyoqXG4gICAqIOWbvuagh1xuICAgKi9cbiAgaWNvbj86IHN0cmluZyB8IFNUSWNvbjtcbiAgLyoqXG4gICAqIOagvOW8j+WMluaWh+acrO+8jOi+g+mrmOiwg+eUqOmikeeOh++8jOivt+WLv+i/h+WkmuWkjeadguiuoeeul+WFjeW+l+S6p+eUn+aAp+iDvemXrumimFxuICAgKi9cbiAgZm9ybWF0PzogKHJlY29yZDogU1REYXRhLCBidG46IFNUQ29sdW1uQnV0dG9uKSA9PiBzdHJpbmc7XG4gIC8qKlxuICAgKiDmjInpkq7nsbvlnotcbiAgICogLSBgbm9uZWAg5peg5Lu75L2V5LqS5YqoXG4gICAqIC0gYGRlbGAg5Yig6Zmk77yM6buY6K6k5byA5ZCvIGBwb3A6IHRydWVgXG4gICAqIC0gYG1vZGFsYCDlr7nor53moYbvvIzpnIDopoHmjIflrpogYGNvbXBvbmVudGAg5omN5Lya55Sf5pWIXG4gICAqIC0gYHN0YXRpY2Ag6Z2Z5oCB5a+56K+d5qGG77yM6ZyA6KaB5oyH5a6aIGBjb21wb25lbnRgIOaJjeS8mueUn+aViFxuICAgKiAtIGBkcmF3ZXJgIOaKveWxie+8jOmcgOimgeaMh+WumiBgY29tcG9uZW50YCDmiY3kvJrnlJ/mlYhcbiAgICogLSBgbGlua2Ag6ZO+5o6l77yM5b2TIGBjbGlja2Ag6L+U5Zue5a2X56ym5Liy5pe26Ieq5Yqo6LCD55SoIGBuYXZpZ2F0ZUJ5VXJsYCDlr7zoiKpcbiAgICovXG4gIHR5cGU/OiAnbm9uZScgfCAnZGVsJyB8ICdtb2RhbCcgfCAnc3RhdGljJyB8ICdkcmF3ZXInIHwgJ2xpbmsnO1xuICAvKipcbiAgICog54K55Ye75Zue6LCDXG4gICAqIC0gRnVuY3Rpb25cbiAgICogIC0gYHR5cGU9bW9kYWxgIOWPquS8muWcqOW9k+acieS8oOWbnuWAvOaXtuaJjeS8muinpuWPkeWbnuiwg1xuICAgKiAtIHJlbG9hZO+8mumHjeaWsOWIt+aWsOW9k+WJjemhtVxuICAgKiAtIGxvYWTvvJrph43mlrDliqDovb3mlbDmja7vvIzlubbph43nva7pobXnoIHkuLrvvJpgMWBcbiAgICovXG4gIGNsaWNrPzpcbiAgICB8ICdyZWxvYWQnXG4gICAgfCAnbG9hZCdcbiAgICB8ICgocmVjb3JkOiBTVERhdGEsIG1vZGFsPzogYW55LCBpbnN0YW5jZT86IFNUQ29tcG9uZW50KSA9PiBhbnkpO1xuICAvKipcbiAgICog5piv5ZCm6ZyA6KaB5rCU5rOh56Gu6K6k5qGGXG4gICAqL1xuICBwb3A/OiBib29sZWFuO1xuICAvKipcbiAgICog5rCU5rOh56Gu6K6k5qGG5YaF5a6577yM6buY6K6kIGDnoa7orqTliKDpmaTlkJfvvJ9gXG4gICAqL1xuICBwb3BUaXRsZT86IHN0cmluZztcbiAgLyoqXG4gICAqIOWvueivneahhuWPguaVsFxuICAgKi9cbiAgbW9kYWw/OiBTVENvbHVtbkJ1dHRvbk1vZGFsO1xuICAvKipcbiAgICog5oq95bGJ5Y+C5pWwXG4gICAqL1xuICBkcmF3ZXI/OiBTVENvbHVtbkJ1dHRvbkRyYXdlcjtcbiAgLyoqXG4gICAqIOS4i+aLieiPnOWNle+8jOW9k+WtmOWcqOaXtuS7pSBgZHJvcGRvd25gIOW9ouW8j+a4suafk1xuICAgKiAtIOWPquaUr+aMgeS4gOe6p1xuICAgKi9cbiAgY2hpbGRyZW4/OiBTVENvbHVtbkJ1dHRvbltdO1xuICAvKipcbiAgICog5p2D6ZmQ77yM562J5ZCMIGBjYW4oKWAg5Y+C5pWw5YC8XG4gICAqL1xuICBhY2w/OiBhbnk7XG4gIC8qKlxuICAgKiDmnaHku7booajovr7lvI/vvIzovoPpq5josIPnlKjpopHnjofvvIzor7fli7/ov4flpJrlpI3mnYLorqHnrpflhY3lvpfkuqfnlJ/mgKfog73pl67pophcbiAgICovXG4gIGlpZj86IChpdGVtOiBTVERhdGEsIGJ0bjogU1RDb2x1bW5CdXR0b24sIGNvbHVtbjogU1RDb2x1bW4pID0+IGJvb2xlYW47XG5cbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNUQ29sdW1uQnV0dG9uTW9kYWwgZXh0ZW5kcyBNb2RhbEhlbHBlck9wdGlvbnMge1xuICAvKipcbiAgICog5a+56K+d5qGG57uE5Lu25a+56LGh77yM5Yqh5b+F5ZyoIGBlbnRyeUNvbXBvbmVudHNgIOazqOWGjFxuICAgKi9cbiAgY29tcG9uZW50PzogYW55O1xuICAvKipcbiAgICog5a+56K+d5qGG5Y+C5pWwXG4gICAqL1xuICBwYXJhbXM/OiAocmVjb3JkOiBTVERhdGEpID0+IE9iamVjdDtcbiAgLyoqXG4gICAqIOWvueivneahhuebruagh+e7hOS7tueahOaOpeaUtuWPguaVsOWQje+8jOm7mOiupO+8mmByZWNvcmRgXG4gICAqL1xuICBwYXJhbXNOYW1lPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNUQ29sdW1uQnV0dG9uTW9kYWxDb25maWcge1xuICAvKipcbiAgICog5oyH5a6a5qih5oCB5qGG55uu5qCH57uE5Lu255qE5o6l5pS25Y+C5pWw5ZCN77yM6buY6K6k77yaYHJlY29yZGBcbiAgICovXG4gIHBhcmFtc05hbWU/OiBzdHJpbmc7XG4gIC8qKiDlpKflsI/vvJvkvovlpoLvvJpsZ+OAgTYwMO+8jOm7mOiupO+8mmBsZ2AgKi9cbiAgc2l6ZT86ICdzbScgfCAnbWQnIHwgJ2xnJyB8ICd4bCcgfCAnJyB8IG51bWJlcjtcbiAgLyoqIOWvueivneahhiBbTW9kYWxPcHRpb25zRm9yU2VydmljZV0oaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvY29tcG9uZW50cy9tb2RhbC9uei1tb2RhbC50eXBlLnRzKSDlj4LmlbAgKi9cbiAgbW9kYWxPcHRpb25zPzogTW9kYWxPcHRpb25zRm9yU2VydmljZTtcbiAgLyoqIOaYr+WQpueyvuWHhu+8iOm7mOiupO+8mmB0cnVlYO+8ie+8jOiLpei/lOWbnuWAvOmdnuepuuWAvO+8iGBudWxsYOaIlmB1bmRlZmluZWRg77yJ6KeG5Li65oiQ5Yqf77yM5ZCm5YiZ6KeG5Li66ZSZ6K+vICovXG4gIGV4YWN0PzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTVENvbHVtbkJ1dHRvbkRyYXdlciBleHRlbmRzIERyYXdlckhlbHBlck9wdGlvbnMge1xuICAvKipcbiAgICog5qCH6aKYXG4gICAqL1xuICB0aXRsZT86IHN0cmluZztcbiAgLyoqXG4gICAqIOaKveWxiee7hOS7tuWvueixoe+8jOWKoeW/heWcqCBgZW50cnlDb21wb25lbnRzYCDms6jlhoxcbiAgICovXG4gIGNvbXBvbmVudD86IGFueTtcbiAgLyoqXG4gICAqIOaKveWxieWPguaVsFxuICAgKi9cbiAgcGFyYW1zPzogKHJlY29yZDogU1REYXRhKSA9PiBPYmplY3Q7XG4gIC8qKlxuICAgKiDmir3lsYnnm67moIfnu4Tku7bnmoTmjqXmlLblj4LmlbDlkI3vvIzpu5jorqTvvJpgcmVjb3JkYFxuICAgKi9cbiAgcGFyYW1zTmFtZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTVENvbHVtbkJ1dHRvbkRyYXdlckNvbmZpZyB7XG4gIC8qKlxuICAgKiDmir3lsYnnm67moIfnu4Tku7bnmoTmjqXmlLblj4LmlbDlkI3vvIzpu5jorqTvvJpgcmVjb3JkYFxuICAgKi9cbiAgcGFyYW1zTmFtZT86IHN0cmluZztcbiAgLyoqXG4gICAqIOWkp+Wwj++8m+S+i+Wmgu+8mmxn44CBNjAw77yM6buY6K6k77yaYG1kYFxuICAgKlxuICAgKiB8IOexu+WeiyB8IOm7mOiupOWkp+WwjyB8XG4gICAqIHwgLS0tIHwgLS0tLS0tIHxcbiAgICogfCBgc21gIHwgYDMwMGAgfFxuICAgKiB8IGBtZGAgfCBgNjAwYCB8XG4gICAqIHwgYGxnYCB8IGA5MDBgIHxcbiAgICogfCBgeGxgIHwgYDEyMDBgIHxcbiAgICpcbiAgICogPiDku6XkuIrlgLzvvIzlj6/pgJrov4fopobnm5bnm7jlupTnmoRMRVNT5Y+C5pWw6Ieq6KGM6LCD5pW0XG4gICAqL1xuICBzaXplPzogJ3NtJyB8ICdtZCcgfCAnbGcnIHwgJ3hsJyB8IG51bWJlcjtcbiAgLyoqXG4gICAqIOaYr+WQpuWMheWQq+W6lemDqOW3peWFt+adoe+8jOm7mOiupO+8mmB0cnVlYFxuICAgKi9cbiAgZm9vdGVyPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIOW6lemDqOW3peWFt+adoemrmOW6pu+8jOm7mOiupO+8mmA1NWBcbiAgICovXG4gIGZvb3RlckhlaWdodD86IG51bWJlcjtcbiAgLyoqIOaKveWxiSBbTnpEcmF3ZXJPcHRpb25zXShodHRwczovL25nLmFudC5kZXNpZ24vY29tcG9uZW50cy9kcmF3ZXIvemgjbnpkcmF3ZXJvcHRpb25zKSDlj4LmlbAgKi9cbiAgZHJhd2VyT3B0aW9ucz86IE56RHJhd2VyT3B0aW9ucztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTVFJlcVJlTmFtZVR5cGUge1xuICBwaT86IHN0cmluZztcbiAgcHM/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1RSZXNSZU5hbWVUeXBlIHtcbiAgdG90YWw/OiBzdHJpbmcgfCBzdHJpbmdbXTtcbiAgbGlzdD86IHN0cmluZyB8IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNURXhwb3J0T3B0aW9ucyB7XG4gIF9kPzogYW55W107XG4gIF9jPzogU1RDb2x1bW5bXTtcbiAgLyoqIOW3peS9nOa6peWQjSAqL1xuICBzaGVldG5hbWU/OiBzdHJpbmc7XG4gIC8qKiDmlofku7blkI0gKi9cbiAgZmlsZW5hbWU/OiBzdHJpbmc7XG4gIC8qKiB0cmlnZ2VycyB3aGVuIHNhdmVhcyAqL1xuICBjYWxsYmFjaz86ICh3YjogYW55KSA9PiB2b2lkO1xufVxuXG4vKipcbiAqIOWNleaOkuW6j+inhOWImVxuICogLSDoi6XkuI3mjIflrprvvIzliJnov5Tlm57vvJpgY29sdW1uTmFtZT1hc2NlbmR8ZGVzY2VuZGBcbiAqIC0g6Iul5oyH5a6a77yM5YiZ6L+U5Zue77yaYHNvcnQ9Y29sdW1uTmFtZS4oYXNjZW5kfGRlc2NlbmQpYFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFNUU2luZ2xlU29ydCB7XG4gIC8qKiDor7fmsYLlj4LmlbDlkI3vvIzpu5jorqTvvJpgc29ydGAgKi9cbiAga2V5Pzogc3RyaW5nO1xuICAvKiog5YiX5ZCN5LiO54q25oCB6Ze05YiG6ZqU56ym77yM6buY6K6k77yaYC5gICovXG4gIG5hbWVTZXBhcmF0b3I/OiBzdHJpbmc7XG59XG5cbi8qKlxuICog5aSa5o6S5bqP55u45ZCM5o6S5bqPIGtleSDml7blkIjlubbop4TliJlcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTVE11bHRpU29ydCB7XG4gIC8qKiDor7fmsYLlj4LmlbDlkI3vvIzpu5jorqTvvJpgc29ydGAgKi9cbiAga2V5Pzogc3RyaW5nO1xuICAvKiog5LiN5ZCM5bGe5oCn6Ze05YiG6ZqU56ym77yM6buY6K6k77yaYC1gICovXG4gIHNlcGFyYXRvcj86IHN0cmluZztcbiAgLyoqIOWIl+WQjeS4jueKtuaAgemXtOWIhumalOespu+8jOm7mOiupO+8mmAuYCAqL1xuICBuYW1lU2VwYXJhdG9yPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIOW+veagh+S/oeaBr1xuICovXG5leHBvcnQgaW50ZXJmYWNlIFNUQ29sdW1uQmFkZ2Uge1xuICBba2V5OiBudW1iZXJdOiBTVENvbHVtbkJhZGdlVmFsdWU7XG4gIFtrZXk6IHN0cmluZ106IFNUQ29sdW1uQmFkZ2VWYWx1ZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTVENvbHVtbkJhZGdlVmFsdWUge1xuICAvKipcbiAgICog5paH5pysXG4gICAqL1xuICB0ZXh0Pzogc3RyaW5nO1xuICAvKipcbiAgICog5b695qCH6aKc6Imy5YC8XG4gICAqL1xuICBjb2xvcj86ICdzdWNjZXNzJyB8ICdwcm9jZXNzaW5nJyB8ICdkZWZhdWx0JyB8ICdlcnJvcicgfCAnd2FybmluZyc7XG59XG5cbi8qKlxuICog5qCH562+5L+h5oGvXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU1RDb2x1bW5UYWcge1xuICBba2V5OiBudW1iZXJdOiBTVENvbHVtblRhZ1ZhbHVlO1xuICBba2V5OiBzdHJpbmddOiBTVENvbHVtblRhZ1ZhbHVlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNUQ29sdW1uVGFnVmFsdWUge1xuICAvKipcbiAgICog5paH5pysXG4gICAqL1xuICB0ZXh0Pzogc3RyaW5nO1xuICAvKipcbiAgICog6aKc6Imy5YC877yM5pSv5oyB6aKE6K6+5ZKM6Imy5YC8XG4gICAqIC0g6aKE6K6+77yaZ2Vla2JsdWUsYmx1ZSxwdXJwbGUsc3VjY2VzcyxyZWQsdm9sY2FubyxvcmFuZ2UsZ29sZCxsaW1lLGdyZWVuLGN5YW5cbiAgICogLSDoibLlgLzvvJojZjUwLCNmZjBcbiAgICovXG4gIGNvbG9yPzpcbiAgICB8ICdnZWVrYmx1ZSdcbiAgICB8ICdibHVlJ1xuICAgIHwgJ3B1cnBsZSdcbiAgICB8ICdzdWNjZXNzJ1xuICAgIHwgJ3JlZCdcbiAgICB8ICd2b2xjYW5vJ1xuICAgIHwgJ29yYW5nZSdcbiAgICB8ICdnb2xkJ1xuICAgIHwgJ2xpbWUnXG4gICAgfCAnZ3JlZW4nXG4gICAgfCAnY3lhbidcbiAgICB8IHN0cmluZztcbn1cblxuZXhwb3J0IHR5cGUgU1RDaGFuZ2VUeXBlID1cbiAgfCAncGknXG4gIHwgJ3BzJ1xuICB8ICdjaGVja2JveCdcbiAgfCAncmFkaW8nXG4gIHwgJ3NvcnQnXG4gIHwgJ2ZpbHRlcidcbiAgfCAnY2xpY2snXG4gIHwgJ2RibENsaWNrJztcblxuLyoqXG4gKiDlm57osIPmlbDmja5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTVENoYW5nZSB7XG4gIC8qKlxuICAgKiDlm57osIPnsbvlnotcbiAgICovXG4gIHR5cGU6IFNUQ2hhbmdlVHlwZTtcbiAgLyoqXG4gICAqIOW9k+WJjemhteeggVxuICAgKi9cbiAgcGk6IG51bWJlcjtcbiAgLyoqXG4gICAqIOavj+mhteaVsOmHj1xuICAgKi9cbiAgcHM6IG51bWJlcjtcbiAgLyoqXG4gICAqIOaVsOaNruaAu+mHj1xuICAgKi9cbiAgdG90YWw6IG51bWJlcjtcbiAgLyoqXG4gICAqIGBjaGVja2JveGAg5Y+C5pWwXG4gICAqL1xuICBjaGVja2JveD86IFNURGF0YVtdO1xuICAvKipcbiAgICogYHJhZGlvYCDlj4LmlbBcbiAgICovXG4gIHJhZGlvPzogU1REYXRhO1xuICAvKipcbiAgICog5o6S5bqP5Y+C5pWwXG4gICAqL1xuICBzb3J0PzogU1RDaGFuZ2VTb3J0O1xuICAvKipcbiAgICog6L+H5ruk5Y+C5pWwXG4gICAqL1xuICBmaWx0ZXI/OiBTVENvbHVtbjtcbiAgLyoqXG4gICAqIOihjOeCueWHu+aIluWPjOWHu+WPguaVsFxuICAgKi9cbiAgY2xpY2s/OiBTVENoYW5nZVJvd0NsaWNrO1xufVxuXG4vKiog6KGM5Y2V5Ye75Y+C5pWwICovXG5leHBvcnQgaW50ZXJmYWNlIFNUQ2hhbmdlU29ydCB7XG4gIHZhbHVlPzogJ2FzY2VuZCcgfCAnZGVzY2VuZCc7XG4gIG1hcD86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG4gIGNvbHVtbj86IFNUQ29sdW1uO1xufVxuXG4vKiog6KGM5Y2V5Ye75Y+C5pWwICovXG5leHBvcnQgaW50ZXJmYWNlIFNUQ2hhbmdlUm93Q2xpY2sge1xuICBlPzogRXZlbnQ7XG4gIGl0ZW0/OiBTVERhdGE7XG4gIGluZGV4PzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNURXJyb3Ige1xuICB0eXBlPzogJ3JlcSc7XG4gIGVycm9yPzogYW55O1xufVxuXG5leHBvcnQgdHlwZSBTVFJvd0NsYXNzTmFtZSA9IChyZWNvcmQ6IFNURGF0YSwgaW5kZXg6IG51bWJlcikgPT4gc3RyaW5nO1xuIl19